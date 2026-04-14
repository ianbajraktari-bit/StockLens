/**
 * Spaced repetition — per-item mastery tracking + due-date scheduling.
 *
 * Model: Leitner boxes. Each review item lives in a box (0-5). On a correct
 * answer, the item moves up one box (next review is further out). On a
 * wrong answer, the item resets to box 0 (due tomorrow). Never-seen items
 * have no stat and are treated as "new" with their own priority tier.
 *
 * Priority model (higher = surface sooner):
 *   wrong last time  → 1000 + days since last seen
 *   due or overdue   → 400 + days overdue × 20
 *   never seen (new) → 500 (between wrong and due — new material matters
 *                           but not more than revisiting a known miss)
 *   not yet due      → max(0, 100 - days until due × 5)
 *
 * Deterministic seeded jitter breaks ties so two runs on the same date
 * return the same item in the same order.
 */

const STATS_KEY = 'stocklens-review-item-stats';

/** Leitner box → days until next review. Index = box number. */
const BOX_INTERVAL_DAYS = [1, 2, 4, 8, 16, 30] as const;
const MAX_BOX = BOX_INTERVAL_DAYS.length - 1;

export interface ItemStat {
  /** `${lessonId}:${stepIndex}` */
  itemId: string;
  /** Leitner box 0..MAX_BOX. Higher = more mastered. */
  box: number;
  /** YYYY-MM-DD when last reviewed. */
  lastSeen: string;
  timesSeen: number;
  timesCorrect: number;
  /** Did the user get this item right the most recent time? */
  lastCorrect: boolean;
}

type StatsMap = Record<string, ItemStat>;

export function makeItemId(lessonId: string, stepIndex: number): string {
  return `${lessonId}:${stepIndex}`;
}

function getStatsMap(): StatsMap {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveStatsMap(m: StatsMap): void {
  localStorage.setItem(STATS_KEY, JSON.stringify(m));
}

export function getItemStat(itemId: string): ItemStat | null {
  return getStatsMap()[itemId] ?? null;
}

function todayDate(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/** Whole-day difference between two YYYY-MM-DD strings. Positive = a is before b. */
function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  const aTs = Date.UTC(ay, am - 1, ad);
  const bTs = Date.UTC(by, bm - 1, bd);
  return Math.round((bTs - aTs) / 86400000);
}

/**
 * Record a review outcome. A "pass" = the user got the step fully right
 * (correct === total). Anything less drops the item back to box 0 so it
 * surfaces again soon.
 */
export function recordItemResult(itemId: string, passed: boolean): void {
  const map = getStatsMap();
  const existing = map[itemId];
  const today = todayDate();
  const nextBox = passed
    ? Math.min((existing?.box ?? 0) + 1, MAX_BOX)
    : 0;
  map[itemId] = {
    itemId,
    box: nextBox,
    lastSeen: today,
    timesSeen: (existing?.timesSeen ?? 0) + 1,
    timesCorrect: (existing?.timesCorrect ?? 0) + (passed ? 1 : 0),
    lastCorrect: passed,
  };
  saveStatsMap(map);
}

export type PriorityReason = 'wrong' | 'due' | 'new' | 'upcoming';

export interface ItemPriority {
  itemId: string;
  reason: PriorityReason;
  priority: number;
  /** For UI hints. 0 when new / not-yet-due. */
  daysOverdue: number;
  /** Current box (for mastered indication in UI). null if never seen. */
  box: number | null;
}

/** Compute today's priority for a given itemId. */
export function computePriority(itemId: string, today: string = todayDate()): ItemPriority {
  const stat = getItemStat(itemId);
  if (!stat) {
    return { itemId, reason: 'new', priority: 500, daysOverdue: 0, box: null };
  }
  if (!stat.lastCorrect) {
    const days = Math.max(0, daysBetween(stat.lastSeen, today));
    return { itemId, reason: 'wrong', priority: 1000 + days, daysOverdue: days, box: stat.box };
  }
  const interval = BOX_INTERVAL_DAYS[Math.min(stat.box, MAX_BOX)];
  const daysSince = daysBetween(stat.lastSeen, today);
  const daysUntilDue = interval - daysSince;
  if (daysUntilDue <= 0) {
    return {
      itemId,
      reason: 'due',
      priority: 400 + Math.abs(daysUntilDue) * 20,
      daysOverdue: Math.abs(daysUntilDue),
      box: stat.box,
    };
  }
  return {
    itemId,
    reason: 'upcoming',
    priority: Math.max(0, 100 - daysUntilDue * 5),
    daysOverdue: 0,
    box: stat.box,
  };
}

/**
 * Deterministic fractional jitter in [0, 1) derived from a numeric seed and
 * a string key. Used to break priority ties reproducibly within a day.
 */
export function seededFraction(seed: number, key: string): number {
  let h = seed >>> 0;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  // Convert to [0, 1)
  return (h >>> 0) / 0xffffffff;
}

/** Aggregate mastery stats across all tracked items. */
export interface ReviewStats {
  tracked: number;
  mastered: number;
  due: number;
  wrong: number;
}

export function getReviewStats(): ReviewStats {
  const map = getStatsMap();
  const today = todayDate();
  let mastered = 0;
  let due = 0;
  let wrong = 0;
  for (const s of Object.values(map)) {
    if (s.box >= MAX_BOX && s.lastCorrect) mastered++;
    if (!s.lastCorrect) {
      wrong++;
    } else {
      const interval = BOX_INTERVAL_DAYS[Math.min(s.box, MAX_BOX)];
      if (daysBetween(s.lastSeen, today) >= interval) due++;
    }
  }
  return { tracked: Object.keys(map).length, mastered, due, wrong };
}

/** Exposed for tests / debugging. Resets all SR stats. */
export function clearAllItemStats(): void {
  localStorage.removeItem(STATS_KEY);
}
