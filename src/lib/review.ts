import { allLessons } from '../data/lessons';
import type { Lesson } from '../data/lessons';
import type { LessonStep } from '../data/lessons/types';
import { getCompletedIds, updateStreak } from './progression';
import {
  computePriority,
  makeItemId,
  seededFraction,
  type ItemPriority,
  type PriorityReason,
} from './spacedRepetition';
import { awardDailyPractice, type XpAwardResult } from './xp';
import {
  evaluateQuests,
  incrementDailyPracticeCount,
  type EarnedQuest,
} from './quests';

const DAILY_PRACTICE_KEY = 'stocklens-daily-practice';

/** Number of graded steps pulled into a daily practice session. */
export const DAILY_PRACTICE_SIZE = 5;

/** Step kinds that can be auto-graded (drill/estimate/tap/decide). */
type GradableStepKind = 'drill' | 'estimate' | 'tap' | 'decide';

const GRADABLE_KINDS: readonly GradableStepKind[] = ['drill', 'estimate', 'tap', 'decide'];

function isGradable(step: LessonStep): step is LessonStep & { kind: GradableStepKind } {
  return (GRADABLE_KINDS as readonly string[]).includes(step.kind);
}

/** A single step pulled from a completed lesson for review. */
export interface ReviewItem {
  /** Lesson this step came from — used to show provenance. */
  lessonId: string;
  lessonTitle: string;
  lessonEmoji: string;
  /** Index of the step within the lesson's steps array. */
  stepIndex: number;
  step: LessonStep;
}

/** A ReviewItem with its SR priority breakdown attached, for UI labeling. */
export interface ScheduledReviewItem extends ReviewItem {
  itemId: string;
  reason: PriorityReason;
  daysOverdue: number;
  box: number | null;
}

/** Human-readable label for a priority reason — used as a chip on items. */
export function priorityReasonLabel(reason: PriorityReason): string {
  switch (reason) {
    case 'wrong':
      return 'Missed last time';
    case 'due':
      return 'Due for review';
    case 'new':
      return 'New material';
    case 'upcoming':
      return 'Refresher';
  }
}

/** Stable YYYY-MM-DD for "today" in local time. */
function getTodayDate(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/** Simple deterministic hash of a date string. */
function hashDate(dateStr: string): number {
  let h = 2166136261;
  for (let i = 0; i < dateStr.length; i++) {
    h ^= dateStr.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h >>> 0;
}

/** All gradable steps across all completed lessons. */
function collectReviewPool(): ReviewItem[] {
  const completed = getCompletedIds();
  const pool: ReviewItem[] = [];
  for (const lesson of allLessons) {
    if (!completed.has(lesson.id)) continue;
    lesson.steps.forEach((step, i) => {
      if (!isGradable(step)) return;
      pool.push({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonEmoji: lesson.emoji,
        stepIndex: i,
        step,
      });
    });
  }
  return pool;
}

/**
 * Returns today's daily-practice items, scheduled by spaced repetition.
 *
 * Selection prioritizes:
 *   1. Items the user got wrong most recently (Leitner box 0) — surface fast
 *   2. Items that are due (last-seen + interval ≤ today)
 *   3. Items the user has never seen (new material from recently-completed lessons)
 *   4. Not-yet-due items (fill remaining slots — the refresher tier)
 *
 * Deterministic per date: two runs on the same day return the same items
 * in the same order (stats are only mutated at session end, so mid-day
 * reopens see the same selection).
 */
export function getDailyPractice(): ReviewItem[] {
  return getScheduledDailyPractice().map(({ itemId, reason, daysOverdue, box, ...item }) => {
    void itemId;
    void reason;
    void daysOverdue;
    void box;
    return item;
  });
}

/**
 * Same as getDailyPractice but returns each item with its SR priority
 * breakdown attached — lets the UI label why each item is in the set.
 */
export function getScheduledDailyPractice(): ScheduledReviewItem[] {
  const pool = collectReviewPool();
  if (pool.length === 0) return [];
  const today = getTodayDate();
  const seed = hashDate(today);

  const scored = pool.map((item) => {
    const itemId = makeItemId(item.lessonId, item.stepIndex);
    const p: ItemPriority = computePriority(itemId, today);
    // Add < 1.0 jitter so ties resolve deterministically without
    // crossing priority-tier boundaries.
    const jitter = seededFraction(seed, itemId);
    return {
      ...item,
      itemId,
      reason: p.reason,
      daysOverdue: p.daysOverdue,
      box: p.box,
      _sortKey: p.priority + jitter,
    };
  });

  scored.sort((a, b) => b._sortKey - a._sortKey);

  return scored
    .slice(0, Math.min(DAILY_PRACTICE_SIZE, scored.length))
    .map(({ _sortKey, ...rest }) => {
      void _sortKey;
      return rest;
    });
}

/** How many gradable steps exist across the user's completed lessons. */
export function getReviewPoolSize(): number {
  return collectReviewPool().length;
}

// --- Daily practice completion storage ---

export interface DailyPracticeResult {
  date: string; // YYYY-MM-DD
  correct: number;
  total: number;
  completedAt: string; // ISO timestamp
}

type ResultsMap = Record<string, DailyPracticeResult>;

function getResultsMap(): ResultsMap {
  try {
    const raw = localStorage.getItem(DAILY_PRACTICE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

/** Today's daily practice result, or null if the user hasn't done it yet. */
export function getTodayResult(): DailyPracticeResult | null {
  const results = getResultsMap();
  return results[getTodayDate()] ?? null;
}

export interface DailyPracticeReward {
  result: DailyPracticeResult;
  xp: XpAwardResult | null;
  quests: EarnedQuest[];
  /** True if this was the user's first completion of daily practice today. */
  firstCompletionToday: boolean;
}

/**
 * Persist today's daily practice result. Overwrites any existing entry.
 * Awards XP + evaluates quests only on the first completion per day so
 * users can retry freely without farming XP.
 */
export function saveDailyPracticeResult(correct: number, total: number): DailyPracticeReward {
  const results = getResultsMap();
  const today = getTodayDate();
  const firstCompletionToday = !(today in results);
  const result: DailyPracticeResult = {
    date: today,
    correct,
    total,
    completedAt: new Date().toISOString(),
  };
  results[today] = result;
  localStorage.setItem(DAILY_PRACTICE_KEY, JSON.stringify(results));
  // Completing daily practice counts as a daily active event for streaks
  updateStreak();

  let xp: XpAwardResult | null = null;
  if (firstCompletionToday) {
    incrementDailyPracticeCount();
    xp = awardDailyPractice(correct, total);
  }
  const quests = evaluateQuests();
  return { result, xp, quests, firstCompletionToday };
}

/** True if the user has completed daily practice today. */
export function hasCompletedToday(): boolean {
  return getTodayResult() !== null;
}

/** Lesson lookup helper. Returns undefined if the lesson was deleted. */
export function getLessonForItem(item: ReviewItem): Lesson | undefined {
  return allLessons.find((l) => l.id === item.lessonId);
}
