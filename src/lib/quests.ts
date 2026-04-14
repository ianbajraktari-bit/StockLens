/**
 * Quests — milestone badges that reward meaningful progression events.
 *
 * Each quest has a `check` that returns `{ current, target }` — `current`
 * hitting `target` means the quest is complete. Quest completion is
 * idempotent: `evaluateQuests()` runs after any progress event, compares
 * the newly-completed set against what's already been awarded, and fires
 * XP + persists the new set only for the delta.
 *
 * The catalog is intentionally broad — one quest per meaningful behavior
 * so users always have something near completion to aim at.
 */

import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Brain,
  BookOpenCheck,
  Building2,
  Calendar,
  CheckCheck,
  Crown,
  Flame,
  GraduationCap,
  Layers,
  Medal,
  ScrollText,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';
import { allLessons } from '../data/lessons';
import { allCompanies } from '../data/companies';
import {
  getCompletedIds,
  getCompletedAnalyses,
  getLessonStars,
  getSkillsProgress,
  getStreak,
} from './progression';
import { awardQuestXp } from './xp';

const QUESTS_EARNED_KEY = 'stocklens-quests-earned';
const DAILY_PRACTICE_COUNT_KEY = 'stocklens-daily-practice-count';

// ─────────────────────────────────────────────────────────────────
// Quest progress storage (separate from completion so progress
// persists even if the catalog changes)
// ─────────────────────────────────────────────────────────────────

function getEarnedQuestIds(): Set<string> {
  try {
    const raw = localStorage.getItem(QUESTS_EARNED_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

/** Read-only view of the earned quest set — used for before/after snapshots. */
export function getEarnedQuestSet(): Set<string> {
  return getEarnedQuestIds();
}

/** Resolve a quest id back to its catalog definition. */
export function getQuestById(id: string): Quest | undefined {
  return QUESTS.find((q) => q.id === id);
}

function saveEarnedQuestIds(ids: Set<string>): void {
  localStorage.setItem(QUESTS_EARNED_KEY, JSON.stringify([...ids]));
}

/**
 * Called from saveDailyPracticeResult so the quest system can award
 * "complete N daily practice sessions" badges. We store the lifetime
 * count separately because practice-result history only keeps today.
 */
export function incrementDailyPracticeCount(): number {
  try {
    const raw = localStorage.getItem(DAILY_PRACTICE_COUNT_KEY);
    const n = raw ? Number.parseInt(raw, 10) : 0;
    const next = (Number.isFinite(n) && n >= 0 ? n : 0) + 1;
    localStorage.setItem(DAILY_PRACTICE_COUNT_KEY, String(next));
    return next;
  } catch {
    return 1;
  }
}

export function getDailyPracticeCount(): number {
  try {
    const raw = localStorage.getItem(DAILY_PRACTICE_COUNT_KEY);
    if (!raw) return 0;
    const n = Number.parseInt(raw, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

// ─────────────────────────────────────────────────────────────────
// Catalog
// ─────────────────────────────────────────────────────────────────

export type QuestCategory = 'lessons' | 'analyst' | 'habit' | 'skills';

export interface Quest {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: QuestCategory;
  /** XP reward on completion. */
  xp: number;
  /** Returns current progress for this quest. */
  check: () => { current: number; target: number };
}

function countLessons(tier: 'foundations-1' | 'foundations-2' | 'company'): number {
  return allLessons.filter((l) => l.tier === tier).length;
}

function countCompletedByTier(tier: 'foundations-1' | 'foundations-2' | 'company'): number {
  const completed = getCompletedIds();
  return allLessons.filter((l) => l.tier === tier && completed.has(l.id)).length;
}

function countPerfectLessons(): number {
  const completed = getCompletedIds();
  let n = 0;
  for (const id of completed) {
    if (getLessonStars(id) === 3) n++;
  }
  return n;
}

function countMasteredSkills(): number {
  return getSkillsProgress().filter((s) => s.exposure >= s.maxExposure).length;
}

export const QUESTS: Quest[] = [
  // ─── Lessons ───────────────────────────────────────────────
  {
    id: 'first-light',
    title: 'First Light',
    description: 'Complete your first lesson',
    icon: Sparkles,
    category: 'lessons',
    xp: 20,
    check: () => ({ current: Math.min(1, getCompletedIds().size), target: 1 }),
  },
  {
    id: 'phase-1-complete',
    title: 'Core Foundation',
    description: 'Complete every Phase 1 lesson',
    icon: BookOpenCheck,
    category: 'lessons',
    xp: 150,
    check: () => ({
      current: countCompletedByTier('foundations-1'),
      target: countLessons('foundations-1'),
    }),
  },
  {
    id: 'phase-2-complete',
    title: 'Advanced Foundation',
    description: 'Complete every Phase 2 lesson',
    icon: GraduationCap,
    category: 'lessons',
    xp: 200,
    check: () => ({
      current: countCompletedByTier('foundations-2'),
      target: countLessons('foundations-2'),
    }),
  },
  {
    id: 'deep-diver',
    title: 'Deep Diver',
    description: 'Complete 5 company deep-dive lessons',
    icon: Building2,
    category: 'lessons',
    xp: 100,
    check: () => ({
      current: Math.min(5, countCompletedByTier('company')),
      target: 5,
    }),
  },
  {
    id: 'completionist',
    title: 'The Completionist',
    description: 'Complete every lesson in the curriculum',
    icon: Trophy,
    category: 'lessons',
    xp: 500,
    check: () => ({
      current: getCompletedIds().size,
      target: allLessons.length,
    }),
  },
  {
    id: 'perfect-mind',
    title: 'Perfect Mind',
    description: 'Earn 3 stars on 5 lessons',
    icon: Star,
    category: 'lessons',
    xp: 75,
    check: () => ({ current: Math.min(5, countPerfectLessons()), target: 5 }),
  },
  {
    id: 'flawless',
    title: 'Flawless',
    description: 'Earn 3 stars on 15 lessons',
    icon: Medal,
    category: 'lessons',
    xp: 200,
    check: () => ({ current: Math.min(15, countPerfectLessons()), target: 15 }),
  },

  // ─── Analyst Mode ──────────────────────────────────────────
  {
    id: 'first-analysis',
    title: 'First Analysis',
    description: 'Complete an Analyst Mode workflow',
    icon: Target,
    category: 'analyst',
    xp: 50,
    check: () => ({ current: Math.min(1, getCompletedAnalyses().size), target: 1 }),
  },
  {
    id: 'analyst',
    title: 'The Analyst',
    description: 'Analyze 5 different companies',
    icon: ScrollText,
    category: 'analyst',
    xp: 150,
    check: () => ({ current: Math.min(5, getCompletedAnalyses().size), target: 5 }),
  },
  {
    id: 'wall-street-ready',
    title: 'Wall Street Ready',
    description: 'Analyze every seeded company in Analyst Mode',
    icon: Crown,
    category: 'analyst',
    xp: 400,
    check: () => ({
      current: Math.min(allCompanies.length, getCompletedAnalyses().size),
      target: allCompanies.length,
    }),
  },

  // ─── Habit / Practice ──────────────────────────────────────
  {
    id: 'habit-formed',
    title: 'Habit Formed',
    description: 'Maintain a 7-day streak',
    icon: Flame,
    category: 'habit',
    xp: 75,
    check: () => ({ current: Math.min(7, getStreak().current), target: 7 }),
  },
  {
    id: 'disciplined',
    title: 'Disciplined',
    description: 'Maintain a 30-day streak',
    icon: Calendar,
    category: 'habit',
    xp: 300,
    check: () => ({ current: Math.min(30, getStreak().current), target: 30 }),
  },
  {
    id: 'practice-maker',
    title: 'Practice Maker',
    description: 'Complete 5 daily practice sessions',
    icon: CheckCheck,
    category: 'habit',
    xp: 50,
    check: () => ({ current: Math.min(5, getDailyPracticeCount()), target: 5 }),
  },
  {
    id: 'sharpened',
    title: 'Razor Sharp',
    description: 'Complete 20 daily practice sessions',
    icon: Zap,
    category: 'habit',
    xp: 150,
    check: () => ({ current: Math.min(20, getDailyPracticeCount()), target: 20 }),
  },

  // ─── Skills ────────────────────────────────────────────────
  {
    id: 'well-rounded',
    title: 'Well-Rounded',
    description: 'Master 3 skill categories',
    icon: Layers,
    category: 'skills',
    xp: 100,
    check: () => ({ current: Math.min(3, countMasteredSkills()), target: 3 }),
  },
  {
    id: 'all-skills',
    title: 'Total Mastery',
    description: 'Master every skill category',
    icon: Brain,
    category: 'skills',
    xp: 300,
    check: () => {
      const total = getSkillsProgress().length;
      return { current: Math.min(total, countMasteredSkills()), target: total };
    },
  },

  // ─── Capstone ──────────────────────────────────────────────
  {
    id: 'grand-slam',
    title: 'Grand Slam',
    description: 'Finish every lesson AND every Analyst Mode',
    icon: Award,
    category: 'lessons',
    xp: 750,
    check: () => {
      const lessonsDone = getCompletedIds().size === allLessons.length ? 1 : 0;
      const analysesDone = getCompletedAnalyses().size === allCompanies.length ? 1 : 0;
      return { current: lessonsDone + analysesDone, target: 2 };
    },
  },
];

// ─────────────────────────────────────────────────────────────────
// Evaluation
// ─────────────────────────────────────────────────────────────────

export interface QuestStatus {
  quest: Quest;
  current: number;
  target: number;
  complete: boolean;
  earned: boolean;
  progressPct: number;
}

/** Full status report for every quest in the catalog. Pure — no writes. */
export function getQuestProgress(): QuestStatus[] {
  const earned = getEarnedQuestIds();
  return QUESTS.map((quest) => {
    const { current, target } = quest.check();
    const complete = current >= target && target > 0;
    const progressPct = target > 0 ? Math.min(1, current / target) : 0;
    return {
      quest,
      current,
      target,
      complete,
      earned: earned.has(quest.id),
      progressPct,
    };
  });
}

/** Shape returned for each newly-unlocked quest during evaluation. */
export interface EarnedQuest {
  quest: Quest;
  xpAwarded: number;
}

/**
 * Runs every quest's check, detects newly-completed ones since the last
 * call, awards their XP, persists them, and returns the delta so the UI
 * can render a celebration.
 *
 * Safe to call anywhere — idempotent across calls once a quest is marked
 * earned (it won't be awarded twice).
 */
export function evaluateQuests(): EarnedQuest[] {
  const earnedIds = getEarnedQuestIds();
  const newlyEarned: EarnedQuest[] = [];

  for (const quest of QUESTS) {
    if (earnedIds.has(quest.id)) continue;
    const { current, target } = quest.check();
    if (target > 0 && current >= target) {
      earnedIds.add(quest.id);
      const award = awardQuestXp(quest.title, quest.xp);
      newlyEarned.push({ quest, xpAwarded: award.awarded });
    }
  }

  if (newlyEarned.length > 0) {
    saveEarnedQuestIds(earnedIds);
  }

  return newlyEarned;
}

/** Aggregate counts for the home page header. */
export function getQuestSummary(): { earned: number; total: number } {
  const earned = getEarnedQuestIds();
  return { earned: earned.size, total: QUESTS.length };
}
