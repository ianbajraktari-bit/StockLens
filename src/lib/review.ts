import { allLessons } from '../data/lessons';
import type { Lesson } from '../data/lessons';
import type { LessonStep } from '../data/lessons/types';
import { getCompletedIds, updateStreak } from './progression';

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

/** Seeded LCG so two runs on the same day produce the same order. */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = arr.slice();
  let s = seed || 1;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
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
 * Returns today's 5 daily-practice items. Deterministic per date:
 * running this twice on the same day returns the same items in the
 * same order. Returns an empty array if the user has no completed
 * lessons (review only covers material they've already learned).
 */
export function getDailyPractice(): ReviewItem[] {
  const pool = collectReviewPool();
  if (pool.length === 0) return [];
  const seed = hashDate(getTodayDate());
  const shuffled = seededShuffle(pool, seed);
  return shuffled.slice(0, Math.min(DAILY_PRACTICE_SIZE, shuffled.length));
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

/** Persist today's daily practice result. Overwrites any existing entry. */
export function saveDailyPracticeResult(correct: number, total: number): DailyPracticeResult {
  const results = getResultsMap();
  const today = getTodayDate();
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
  return result;
}

/** True if the user has completed daily practice today. */
export function hasCompletedToday(): boolean {
  return getTodayResult() !== null;
}

/** Lesson lookup helper. Returns undefined if the lesson was deleted. */
export function getLessonForItem(item: ReviewItem): Lesson | undefined {
  return allLessons.find((l) => l.id === item.lessonId);
}
