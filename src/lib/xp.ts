/**
 * XP + Levels — the progression spine.
 *
 * Every gradable action (lesson step correct, lesson completed, analyst step
 * submitted, daily practice finished, quest earned) awards XP. Cumulative XP
 * maps to a level, which maps to a title ("Novice" → "Market Wizard").
 *
 * Level curve (cumulative XP to reach level L):
 *   XP(L) = 25 * L * (L + 1)
 *     L=1:     50
 *     L=2:    150
 *     L=3:    300
 *     L=5:    750
 *     L=10: 2,750
 *     L=20: 10,500
 *     L=30: 23,250
 *
 * This keeps early levels fast (one perfect lesson ≈ level 1) while slowing
 * the curve for long-term players.
 */

const TOTAL_XP_KEY = 'stocklens-xp-total';
const EVENTS_KEY = 'stocklens-xp-events';
const LAST_LEVEL_KEY = 'stocklens-xp-last-level-seen';

/** Per-category breakdown of where XP came from. Extend freely. */
export type XpSource =
  | 'lesson_step'
  | 'lesson_complete'
  | 'lesson_perfect_bonus'
  | 'analyst_step'
  | 'analyst_complete'
  | 'daily_practice'
  | 'daily_practice_correct'
  | 'quest'
  | 'streak_milestone';

export interface XpEvent {
  amount: number;
  source: XpSource;
  /** Short human-readable label shown in UI (e.g. "Lesson: Cash vs. Profit"). */
  label: string;
  /** ISO timestamp. */
  at: string;
}

// ─────────────────────────────────────────────────────────────────
// Level curve
// ─────────────────────────────────────────────────────────────────

/** Cumulative XP required to REACH level L from 0. */
export function xpRequiredForLevel(level: number): number {
  if (level <= 0) return 0;
  return 25 * level * (level + 1);
}

/** Given total XP, return the current level (≥ 1). */
export function levelFromXp(xp: number): number {
  if (xp < xpRequiredForLevel(1)) return 1;
  // Solve 25L(L+1) ≤ xp for L. Closed form: L = floor((-1 + sqrt(1 + xp/6.25)) / 2)
  const l = Math.floor((-1 + Math.sqrt(1 + xp / 6.25)) / 2);
  return Math.max(1, l);
}

export interface LevelInfo {
  level: number;
  title: string;
  totalXp: number;
  xpAtLevelStart: number;
  xpToNextLevel: number;
  xpIntoLevel: number;
  xpSpanOfLevel: number;
  /** 0..1 fraction of the way through the current level. */
  progressPct: number;
}

export function getLevelInfo(xp?: number): LevelInfo {
  const totalXp = xp ?? getTotalXp();
  const level = levelFromXp(totalXp);
  const xpAtLevelStart = xpRequiredForLevel(level);
  const xpAtNextLevel = xpRequiredForLevel(level + 1);
  const xpSpanOfLevel = xpAtNextLevel - xpAtLevelStart;
  const xpIntoLevel = totalXp - xpAtLevelStart;
  const xpToNextLevel = Math.max(0, xpAtNextLevel - totalXp);
  const progressPct = xpSpanOfLevel > 0 ? xpIntoLevel / xpSpanOfLevel : 0;
  return {
    level,
    title: titleForLevel(level),
    totalXp,
    xpAtLevelStart,
    xpToNextLevel,
    xpIntoLevel,
    xpSpanOfLevel,
    progressPct: Math.max(0, Math.min(1, progressPct)),
  };
}

// ─────────────────────────────────────────────────────────────────
// Titles
// ─────────────────────────────────────────────────────────────────

const TITLE_TABLE: { minLevel: number; title: string }[] = [
  { minLevel: 1, title: 'Novice' },
  { minLevel: 3, title: 'Apprentice Investor' },
  { minLevel: 5, title: 'Analyst' },
  { minLevel: 8, title: 'Senior Analyst' },
  { minLevel: 11, title: 'Portfolio Manager' },
  { minLevel: 15, title: 'Chief Investment Officer' },
  { minLevel: 20, title: 'Legendary Investor' },
  { minLevel: 25, title: 'Market Wizard' },
];

export function titleForLevel(level: number): string {
  let match = TITLE_TABLE[0].title;
  for (const entry of TITLE_TABLE) {
    if (level >= entry.minLevel) match = entry.title;
    else break;
  }
  return match;
}

/** All title tiers — used by the UI to show the full progression ladder. */
export function getTitleLadder(): { minLevel: number; title: string }[] {
  return [...TITLE_TABLE];
}

// ─────────────────────────────────────────────────────────────────
// Storage
// ─────────────────────────────────────────────────────────────────

export function getTotalXp(): number {
  try {
    const raw = localStorage.getItem(TOTAL_XP_KEY);
    if (!raw) return 0;
    const n = Number.parseInt(raw, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function setTotalXp(xp: number): void {
  localStorage.setItem(TOTAL_XP_KEY, String(Math.max(0, Math.floor(xp))));
}

const MAX_EVENTS = 50;

function readEvents(): XpEvent[] {
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeEvents(events: XpEvent[]): void {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events.slice(-MAX_EVENTS)));
}

export function getRecentXpEvents(limit = 10): XpEvent[] {
  const all = readEvents();
  return all.slice(-limit).reverse();
}

// ─────────────────────────────────────────────────────────────────
// Awarding XP
// ─────────────────────────────────────────────────────────────────

export interface XpAwardResult {
  awarded: number;
  totalXp: number;
  previousLevel: number;
  currentLevel: number;
  leveledUp: boolean;
}

/**
 * Award XP for a named source. Persists the event in a small ring buffer so
 * the UI can show "last 10 earnings". Returns a snapshot of the level delta
 * so callers can render "Level up!" effects.
 */
export function awardXp(amount: number, source: XpSource, label: string): XpAwardResult {
  const clamped = Math.max(0, Math.floor(amount));
  const prevTotal = getTotalXp();
  const previousLevel = levelFromXp(prevTotal);

  if (clamped === 0) {
    return {
      awarded: 0,
      totalXp: prevTotal,
      previousLevel,
      currentLevel: previousLevel,
      leveledUp: false,
    };
  }

  const newTotal = prevTotal + clamped;
  setTotalXp(newTotal);

  const events = readEvents();
  events.push({ amount: clamped, source, label, at: new Date().toISOString() });
  writeEvents(events);

  const currentLevel = levelFromXp(newTotal);
  return {
    awarded: clamped,
    totalXp: newTotal,
    previousLevel,
    currentLevel,
    leveledUp: currentLevel > previousLevel,
  };
}

// ─────────────────────────────────────────────────────────────────
// Level-up tracking (for post-session celebration)
// ─────────────────────────────────────────────────────────────────

/**
 * Last level the UI has acknowledged. If this is lower than the current
 * level, a level-up celebration is still pending and should be rendered.
 */
export function getLastSeenLevel(): number {
  try {
    const raw = localStorage.getItem(LAST_LEVEL_KEY);
    if (!raw) return 1;
    const n = Number.parseInt(raw, 10);
    return Number.isFinite(n) && n >= 1 ? n : 1;
  } catch {
    return 1;
  }
}

export function markLevelSeen(level: number): void {
  localStorage.setItem(LAST_LEVEL_KEY, String(Math.max(1, Math.floor(level))));
}

// ─────────────────────────────────────────────────────────────────
// Award helpers for each earn surface
// ─────────────────────────────────────────────────────────────────

/**
 * Award XP for completing a lesson. Scales with star rating.
 *   3★ (perfect) → 50 XP
 *   2★ (75%+)   → 30 XP
 *   1★ (50%+)   → 15 XP
 *   0★          →  5 XP
 *
 * If the user is completing the lesson for the first time, they get this
 * full amount. Re-completions award half (capped) so practice still pays.
 */
export function awardLessonCompletion(params: {
  lessonTitle: string;
  correct: number;
  total: number;
  firstCompletion: boolean;
}): XpAwardResult {
  const { lessonTitle, correct, total, firstCompletion } = params;
  const ratio = total > 0 ? correct / total : 0;
  let base: number;
  if (ratio === 1) base = 50;
  else if (ratio >= 0.75) base = 30;
  else if (ratio >= 0.5) base = 15;
  else base = 5;
  const amount = firstCompletion ? base : Math.ceil(base * 0.4);
  return awardXp(amount, 'lesson_complete', `Lesson: ${lessonTitle}`);
}

/** Award XP for submitting a free-response Analyst Mode step (first time only). */
export function awardAnalystStep(companyName: string, stepLabel: string): XpAwardResult {
  return awardXp(15, 'analyst_step', `${companyName}: ${stepLabel}`);
}

/** Award XP for completing a full 7-step analyst workflow. */
export function awardAnalystComplete(companyName: string): XpAwardResult {
  return awardXp(100, 'analyst_complete', `Analyzed ${companyName}`);
}

/**
 * Award XP for a daily practice session. 20 XP base + 5 XP per correct.
 * Perfect 5/5 session = 45 XP.
 */
export function awardDailyPractice(correct: number, total: number): XpAwardResult {
  const amount = 20 + 5 * Math.max(0, correct);
  void total;
  return awardXp(amount, 'daily_practice', `Daily Practice: ${correct}/${total}`);
}

/** Award XP for an earned quest. Uses the quest's own reward. */
export function awardQuestXp(questTitle: string, amount: number): XpAwardResult {
  return awardXp(amount, 'quest', `Quest: ${questTitle}`);
}
