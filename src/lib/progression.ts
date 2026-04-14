import { allLessons } from '../data/lessons';
import type { Skill } from '../data/lessons';
import { allCompanies } from '../data/companies';
import {
  awardAnalystComplete,
  awardAnalystStep,
  awardLessonCompletion,
  type XpAwardResult,
} from './xp';
import { evaluateQuests, type EarnedQuest } from './quests';

const COMPLETED_KEY = 'stocklens-completed';
const SKILLS_KEY = 'stocklens-skills';
const SCORES_KEY = 'stocklens-scores';
const STREAK_KEY = 'stocklens-streak';
const ANALYSES_KEY = 'stocklens-analyses-completed';
const RESPONSES_KEY = 'stocklens-analyst-responses';

// --- Completion ---

export function getCompletedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

export interface LessonCompletionReward {
  xp: XpAwardResult | null;
  quests: EarnedQuest[];
  firstCompletion: boolean;
}

export function markCompleted(
  id: string,
  correct?: number,
  total?: number,
): LessonCompletionReward {
  const ids = getCompletedIds();
  const firstCompletion = !ids.has(id);
  ids.add(id);
  localStorage.setItem(COMPLETED_KEY, JSON.stringify([...ids]));

  // Store score if provided
  if (correct !== undefined && total !== undefined && total > 0) {
    saveScore(id, correct, total);
  }

  // Update skills when completing a lesson
  const lesson = allLessons.find((l) => l.id === id);
  if (lesson?.skills) {
    addSkills(lesson.skills);
  }

  // Award XP (scaled by star rating) + evaluate quests. We run quests AFTER
  // XP so the quest evaluator can see the new skills/completion state.
  let xp: XpAwardResult | null = null;
  if (lesson && correct !== undefined && total !== undefined && total > 0) {
    xp = awardLessonCompletion({
      lessonTitle: lesson.title,
      correct,
      total,
      firstCompletion,
    });
  }
  const quests = evaluateQuests();

  return { xp, quests, firstCompletion };
}

export function getNextLessonId(currentId: string): string | null {
  const currentIndex = allLessons.findIndex((l) => l.id === currentId);
  if (currentIndex === -1 || currentIndex >= allLessons.length - 1) return null;
  const next = allLessons[currentIndex + 1];
  // Only suggest if it will be unlocked (current lesson being completed would unlock it)
  return next.id;
}

export function getFirstUncompletedId(): string | null {
  const completed = getCompletedIds();
  return allLessons.find((l) => !completed.has(l.id))?.id ?? null;
}

// --- Scores ---

type ScoresMap = Record<string, { correct: number; total: number }>;

function getScoresMap(): ScoresMap {
  try {
    const raw = localStorage.getItem(SCORES_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveScore(id: string, correct: number, total: number): void {
  const scores = getScoresMap();
  const existing = scores[id];
  // Keep the best score
  if (!existing || correct / total > existing.correct / existing.total) {
    scores[id] = { correct, total };
    localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
  }
}

/** Returns 0-3 stars for a lesson, or null if not completed. */
export function getLessonStars(id: string): number | null {
  const scores = getScoresMap();
  const score = scores[id];
  if (!score) return null;
  const ratio = score.total > 0 ? score.correct / score.total : 0;
  if (ratio === 1) return 3;
  if (ratio >= 0.75) return 2;
  if (ratio >= 0.5) return 1;
  return 0;
}

// --- Skills progress ---

export type SkillsMap = Record<Skill, number>;

const ALL_SKILLS: Skill[] = ['margins', 'recurring_revenue', 'business_drivers', 'behavioral_biases', 'moats', 'valuation', 'risk'];

const SKILL_LABELS: Record<Skill, string> = {
  margins: 'Margins',
  recurring_revenue: 'Recurring Revenue',
  business_drivers: 'Business Drivers',
  behavioral_biases: 'Behavioral Biases',
  moats: 'Competitive Moats',
  valuation: 'Valuation',
  risk: 'Risk Assessment',
};

export function getSkillLabel(skill: Skill): string {
  return SKILL_LABELS[skill];
}

export function getAllSkills(): Skill[] {
  return ALL_SKILLS;
}

function getSkillsMap(): SkillsMap {
  try {
    const raw = localStorage.getItem(SKILLS_KEY);
    if (!raw) return {} as SkillsMap;
    return JSON.parse(raw);
  } catch {
    return {} as SkillsMap;
  }
}

function addSkills(skills: Skill[]): void {
  const current = getSkillsMap();
  for (const skill of skills) {
    current[skill] = (current[skill] ?? 0) + 1;
  }
  localStorage.setItem(SKILLS_KEY, JSON.stringify(current));
}

export function getSkillsProgress(): { skill: Skill; label: string; exposure: number; maxExposure: number }[] {
  const current = getSkillsMap();

  // Calculate max possible exposure per skill (how many lessons teach it)
  const maxExposures: Record<string, number> = {};
  for (const lesson of allLessons) {
    for (const skill of lesson.skills ?? []) {
      maxExposures[skill] = (maxExposures[skill] ?? 0) + 1;
    }
  }

  return ALL_SKILLS.map((skill) => ({
    skill,
    label: SKILL_LABELS[skill],
    exposure: current[skill] ?? 0,
    maxExposure: maxExposures[skill] ?? 1,
  }));
}

// --- Streak tracking ---

interface StreakData {
  current: number;
  lastActiveDate: string;
}

function getTodayDate(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getYesterdayDate(): string {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function getStreak(): StreakData {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { current: 0, lastActiveDate: '' };
    return JSON.parse(raw);
  } catch {
    return { current: 0, lastActiveDate: '' };
  }
}

// --- Analyst Mode completion tracking ---

/**
 * Returns the set of company IDs the user has completed an analysis on.
 * A "completed" analysis means they walked through all 7 workflow steps.
 */
export function getCompletedAnalyses(): Set<string> {
  try {
    const raw = localStorage.getItem(ANALYSES_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

export interface AnalysisCompletionReward {
  xp: XpAwardResult | null;
  quests: EarnedQuest[];
  firstCompletion: boolean;
}

export function markAnalysisComplete(companyId: string): AnalysisCompletionReward {
  const ids = getCompletedAnalyses();
  const firstCompletion = !ids.has(companyId);
  ids.add(companyId);
  localStorage.setItem(ANALYSES_KEY, JSON.stringify([...ids]));
  // Completing an analysis counts as a daily active event for streaks
  updateStreak();

  // XP + quest evaluation. Only awarded on first completion so repeats don't
  // inflate XP (the user can still re-do an analysis; they just don't farm it).
  let xp: XpAwardResult | null = null;
  if (firstCompletion) {
    const company = allCompanies.find((c) => c.id === companyId);
    xp = awardAnalystComplete(company?.name ?? 'Company');
  }
  const quests = evaluateQuests();
  return { xp, quests, firstCompletion };
}

export function updateStreak(): void {
  const streak = getStreak();
  const today = getTodayDate();
  const yesterday = getYesterdayDate();

  if (streak.lastActiveDate === today) {
    // Already active today — do nothing
    return;
  }

  if (streak.lastActiveDate === yesterday) {
    // Consecutive day — increment streak
    const updated: StreakData = { current: streak.current + 1, lastActiveDate: today };
    localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
  } else {
    // Gap in activity (or first time) — reset to 1
    const updated: StreakData = { current: 1, lastActiveDate: today };
    localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
  }
}

// --- Analyst Mode saved responses ---

export interface SavedAnalystResponse {
  text: string;
  /** ISO timestamp of most recent submission. */
  submittedAt: string;
}

/** Storage shape: { [companyId]: { [stepKind]: { text, submittedAt } } } */
export type AnalystResponsesMap = Record<string, Record<string, SavedAnalystResponse>>;

function getAllResponsesMap(): AnalystResponsesMap {
  try {
    const raw = localStorage.getItem(RESPONSES_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

/** Returns all saved responses for a given company, keyed by step kind. */
export function getCompanyResponses(
  companyId: string,
): Record<string, SavedAnalystResponse> {
  const all = getAllResponsesMap();
  return all[companyId] ?? {};
}

/** Returns a single saved response, or null if none. */
export function getAnalystResponse(
  companyId: string,
  stepKind: string,
): SavedAnalystResponse | null {
  return getCompanyResponses(companyId)[stepKind] ?? null;
}

/**
 * Saves (or overwrites) the user's response for a specific company step.
 * First-time submissions for a step award XP; overwrites don't (no farming).
 */
export function saveAnalystResponse(
  companyId: string,
  stepKind: string,
  text: string,
): XpAwardResult | null {
  const all = getAllResponsesMap();
  const company = { ...(all[companyId] ?? {}) };
  const wasFirstSubmission = !(stepKind in company);
  company[stepKind] = { text, submittedAt: new Date().toISOString() };
  all[companyId] = company;
  localStorage.setItem(RESPONSES_KEY, JSON.stringify(all));

  if (wasFirstSubmission) {
    const companyName = allCompanies.find((c) => c.id === companyId)?.name ?? 'Company';
    return awardAnalystStep(companyName, stepKind);
  }
  return null;
}

/** Number of step responses saved for this company (0-7). */
export function getCompanyResponseCount(companyId: string): number {
  return Object.keys(getCompanyResponses(companyId)).length;
}

/** Returns the ISO timestamp of the most recently saved response across all steps. */
export function getCompanyLastActivity(companyId: string): string | null {
  const responses = getCompanyResponses(companyId);
  const timestamps = Object.values(responses).map((r) => r.submittedAt);
  if (timestamps.length === 0) return null;
  return timestamps.sort().at(-1) ?? null;
}

/** Deletes all saved responses for a company (used when user chooses to redo). */
export function clearCompanyResponses(companyId: string): void {
  const all = getAllResponsesMap();
  delete all[companyId];
  localStorage.setItem(RESPONSES_KEY, JSON.stringify(all));
}
