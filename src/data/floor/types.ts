// =====================================================================
// Floor — the simulator. Hand-designed weekly event narratives per
// watchlist company. Prices are set per-week (no math model — a sim,
// not a backtest), each week pairs with a short contextual blurb.
// =====================================================================

export type EventTag =
  | 'earnings'
  | 'macro'
  | 'competitive'
  | 'product'
  | 'management'
  | 'regulatory'
  | 'quiet';

/** One week of state for a single company. Indexed by `week` (0-based). */
export interface WeekEvent {
  week: number;
  /** Closing price at end of this week. */
  price: number;
  /** Short contextual narrative — 2-4 sentences, present-tense, no spoilers. */
  blurb: string;
  /** Optional headline tag for the UI chip. */
  tag?: EventTag;
}

/** A company on the Floor watchlist. */
export interface FloorCompany {
  /** Must match an existing CompanyProfile id from data/companies. */
  companyId: string;
  /** Why this company sits on the watchlist — shown in the picker. */
  watchlistThesis: string;
  /** Events indexed by sim-week. Week 0 is the starting state. */
  events: WeekEvent[];
}
