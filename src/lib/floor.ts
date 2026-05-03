import { floorWatchlist, getWeekEvent, FLOOR_TOTAL_WEEKS } from '../data/floor';

/**
 * The Floor — simulator state. localStorage only, manual week
 * advancement, hand-designed event narratives drive prices.
 *
 * Two stores:
 *  - sim state: { currentWeek }
 *  - portfolio: { cash, positions, history }
 *
 * Multi-position averaging is intentionally simple: weighted-average
 * cost basis (no FIFO lots). Good enough for the MVP loop.
 */

const SIM_KEY = 'stocklens-floor-sim';
const PORTFOLIO_KEY = 'stocklens-floor-portfolio';

export const STARTING_CASH = 100_000;

// =====================================================================
// Types
// =====================================================================

export interface FloorSimState {
  /** 0-based sim week index. */
  currentWeek: number;
}

export type TradeAction = 'buy' | 'sell' | 'hold';

export interface Position {
  companyId: string;
  shares: number;
  /** Weighted-average cost basis per share. */
  avgCost: number;
}

export interface TradeRecord {
  id: string;
  companyId: string;
  ticker: string;
  action: TradeAction;
  /** 0 for hold. */
  shares: number;
  /** Per-share price at execution. */
  price: number;
  /** Sim week the trade was executed in. */
  week: number;
  /** ISO timestamp of the real-world execution. */
  executedAt: string;
  /** Id of the journal entry holding the rationale. */
  rationaleEntryId: string;
}

export interface FloorPortfolio {
  cash: number;
  positions: Record<string, Position>;
  history: TradeRecord[];
}

// =====================================================================
// Storage primitives
// =====================================================================

function readSim(): FloorSimState {
  try {
    const raw = localStorage.getItem(SIM_KEY);
    if (!raw) return { currentWeek: 0 };
    const parsed = JSON.parse(raw);
    if (typeof parsed?.currentWeek !== 'number') return { currentWeek: 0 };
    return { currentWeek: parsed.currentWeek };
  } catch {
    return { currentWeek: 0 };
  }
}

function writeSim(state: FloorSimState): void {
  localStorage.setItem(SIM_KEY, JSON.stringify(state));
}

function readPortfolio(): FloorPortfolio {
  try {
    const raw = localStorage.getItem(PORTFOLIO_KEY);
    if (!raw)
      return { cash: STARTING_CASH, positions: {}, history: [] };
    const parsed = JSON.parse(raw) as Partial<FloorPortfolio>;
    return {
      cash: typeof parsed.cash === 'number' ? parsed.cash : STARTING_CASH,
      positions: parsed.positions ?? {},
      history: parsed.history ?? [],
    };
  } catch {
    return { cash: STARTING_CASH, positions: {}, history: [] };
  }
}

function writePortfolio(p: FloorPortfolio): void {
  localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(p));
}

function genTradeId(): string {
  return `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

// =====================================================================
// Public read API
// =====================================================================

export function getSimState(): FloorSimState {
  return readSim();
}

export function getPortfolio(): FloorPortfolio {
  return readPortfolio();
}

/** Current price for a company at the current sim week. */
export function getCurrentPrice(companyId: string): number | undefined {
  const { currentWeek } = readSim();
  return getWeekEvent(companyId, currentWeek)?.price;
}

/** Mark-to-market value of a single position at the current sim week. */
export function positionMarketValue(position: Position): number {
  const price = getCurrentPrice(position.companyId);
  if (price === undefined) return 0;
  return position.shares * price;
}

/** Total portfolio value (cash + sum of MV of positions). */
export function getPortfolioValue(): number {
  const p = readPortfolio();
  let total = p.cash;
  for (const pos of Object.values(p.positions)) {
    total += positionMarketValue(pos);
  }
  return total;
}

/** Returns true if there are more designed weeks ahead. */
export function canAdvanceWeek(): boolean {
  return readSim().currentWeek < FLOOR_TOTAL_WEEKS - 1;
}

// =====================================================================
// Public write API
// =====================================================================

/** Advance the sim by one week. No-op if already at the last designed week. */
export function advanceWeek(): FloorSimState {
  const sim = readSim();
  if (sim.currentWeek >= FLOOR_TOTAL_WEEKS - 1) return sim;
  const next = { currentWeek: sim.currentWeek + 1 };
  writeSim(next);
  return next;
}

export interface ExecuteTradeInput {
  companyId: string;
  ticker: string;
  action: TradeAction;
  shares: number;
  price: number;
  rationaleEntryId: string;
}

export interface ExecuteTradeResult {
  ok: true;
  trade: TradeRecord;
  portfolio: FloorPortfolio;
}

export interface ExecuteTradeError {
  ok: false;
  reason: string;
}

/**
 * Apply a trade to the portfolio. Caller is responsible for already having
 * created the journal rationale entry and passing its id.
 *
 * Buy: deducts cash, increases shares, updates avgCost as weighted average.
 * Sell: deducts shares, credits cash. Caller validates share availability.
 * Hold: pure no-op on cash/positions but still records a TradeRecord.
 */
export function executeTrade(
  input: ExecuteTradeInput,
): ExecuteTradeResult | ExecuteTradeError {
  const sim = readSim();
  const p = readPortfolio();
  const existing = p.positions[input.companyId];

  if (input.action === 'buy') {
    const cost = input.shares * input.price;
    if (cost > p.cash) {
      return { ok: false, reason: 'Not enough cash for this buy.' };
    }
    if (input.shares <= 0) {
      return { ok: false, reason: 'Buy share count must be positive.' };
    }
    p.cash -= cost;
    if (existing) {
      const totalShares = existing.shares + input.shares;
      const totalCost = existing.avgCost * existing.shares + cost;
      p.positions[input.companyId] = {
        companyId: input.companyId,
        shares: totalShares,
        avgCost: totalCost / totalShares,
      };
    } else {
      p.positions[input.companyId] = {
        companyId: input.companyId,
        shares: input.shares,
        avgCost: input.price,
      };
    }
  } else if (input.action === 'sell') {
    if (input.shares <= 0) {
      return { ok: false, reason: 'Sell share count must be positive.' };
    }
    if (!existing || existing.shares < input.shares) {
      return { ok: false, reason: 'You do not own that many shares.' };
    }
    const remaining = existing.shares - input.shares;
    p.cash += input.shares * input.price;
    if (remaining === 0) {
      delete p.positions[input.companyId];
    } else {
      // avgCost stays the same — selling does not change cost basis on remaining lots.
      p.positions[input.companyId] = { ...existing, shares: remaining };
    }
  }
  // 'hold' leaves cash and positions untouched.

  const trade: TradeRecord = {
    id: genTradeId(),
    companyId: input.companyId,
    ticker: input.ticker,
    action: input.action,
    shares: input.action === 'hold' ? 0 : input.shares,
    price: input.price,
    week: sim.currentWeek,
    executedAt: new Date().toISOString(),
    rationaleEntryId: input.rationaleEntryId,
  };
  p.history = [...p.history, trade];
  writePortfolio(p);
  return { ok: true, trade, portfolio: p };
}

/** Reset the simulator to a clean slate (used by the "Reset Floor" control). */
export function resetFloor(): void {
  writeSim({ currentWeek: 0 });
  writePortfolio({ cash: STARTING_CASH, positions: {}, history: [] });
}

// =====================================================================
// Helpers used by the UI
// =====================================================================

/** All companies on the watchlist with their current price + event resolved. */
export function getWatchlistView() {
  const { currentWeek } = readSim();
  return floorWatchlist.map((fc) => {
    const event = getWeekEvent(fc.companyId, currentWeek);
    return {
      companyId: fc.companyId,
      watchlistThesis: fc.watchlistThesis,
      currentEvent: event,
      currentPrice: event?.price ?? 0,
    };
  });
}
