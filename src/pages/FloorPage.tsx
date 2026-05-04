import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  ChartLine,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  FileSearch,
  RotateCcw,
  Wallet,
} from 'lucide-react';
import { getCompanyById, type CompanyProfile } from '../data/companies';
import { FLOOR_TOTAL_WEEKS, type WeekEvent } from '../data/floor';
import {
  STARTING_CASH,
  advanceWeek,
  canAdvanceWeek,
  executeTrade,
  getPortfolio,
  getPortfolioValue,
  getSimState,
  getWatchlistView,
  positionMarketValue,
  resetFloor,
  type FloorPortfolio,
  type Position,
  type TradeAction,
} from '../lib/floor';
import {
  createEarningsNote,
  createThesisCheckin,
  createTradeRationale,
  getCheckinsForBuy,
  getEarningsNoteForWeek,
  getLatestBuyRationale,
  getThesisCheckinPrompt,
  setUserVerdict,
  userVerdictLabel,
  type CheckinStatus,
  type JournalEntry,
  type ThesisCheckinPrompt,
  type UserVerdict,
} from '../lib/journal';
import TradeForm from '../components/floor/TradeForm';
import TrackRecordPanel from '../components/floor/TrackRecordPanel';
import EarningsDrillDown from '../components/floor/EarningsDrillDown';
import ThesisCheckin from '../components/floor/ThesisCheckin';

const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

type View =
  | { kind: 'floor' }
  | { kind: 'trade'; companyId: string }
  | { kind: 'earnings'; companyId: string }
  | { kind: 'checkin'; companyId: string };

/**
 * One-shot prompt shown after a sell that closed (or trimmed) a position
 * the user had previously written a buy thesis for. The user gets the
 * three verdict buttons right when context is hottest.
 */
interface VerdictPromptState {
  rationaleEntryId: string;
  ticker: string;
  buyTitle: string;
}

interface ResolvedWatchlistRow {
  companyId: string;
  company: CompanyProfile;
  watchlistThesis: string;
  currentEvent: WeekEvent;
  currentPrice: number;
  /** True if the current week is an earnings week. */
  isEarningsWeek: boolean;
  /** Saved earnings note for (this company, current week), if any. */
  earningsNote: JournalEntry | null;
  /**
   * If the user holds an open position with a stale buy thesis, this is
   * the banner-trigger payload. Suppressed on earnings weeks where an
   * earnings_note already exists for the row — that note IS the
   * check-in for the week. Null when no banner should show.
   */
  checkinPrompt: ThesisCheckinPrompt | null;
}

/**
 * The Floor — the simulator. The smallest viable Phase 2 loop:
 * watchlist → advance week → write a rationale → place a trade.
 */
export default function FloorPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>({ kind: 'floor' });
  // Tick increments after every state mutation (advance week, trade, reset)
  // so the view re-reads from localStorage. Cheap and correct for this MVP.
  const [tick, setTick] = useState(0);
  const [verdictPrompt, setVerdictPrompt] = useState<VerdictPromptState | null>(
    null,
  );

  const sim = useMemo(() => getSimState(), [tick]);
  const portfolio: FloorPortfolio = useMemo(() => getPortfolio(), [tick]);
  const portfolioValue = useMemo(() => getPortfolioValue(), [tick]);
  const watchlist: ResolvedWatchlistRow[] = useMemo(() => {
    return getWatchlistView()
      .map((row) => {
        const company = getCompanyById(row.companyId);
        if (!company || !row.currentEvent) return null;
        const isEarningsWeek = row.currentEvent.tag === 'earnings';
        const earningsNote = isEarningsWeek
          ? getEarningsNoteForWeek(row.companyId, sim.currentWeek)
          : null;
        // Banner only fires on positions the user actually holds. Closing
        // a position via sell unwinds the prompt; the chain still surfaces
        // in the track-record panel.
        const heldShares =
          portfolio.positions[row.companyId]?.shares ?? 0;
        const rawPrompt =
          heldShares > 0
            ? getThesisCheckinPrompt(row.companyId, sim.currentWeek)
            : null;
        // Suppress on earnings weeks where the user has already written
        // an earnings_note — that note IS this week's check-in; nagging
        // the user for a second write doubles up on the same beat.
        const suppressForEarnings =
          rawPrompt && isEarningsWeek && earningsNote !== null;
        const checkinPrompt = suppressForEarnings ? null : rawPrompt;
        return {
          companyId: row.companyId,
          company,
          watchlistThesis: row.watchlistThesis,
          currentEvent: row.currentEvent,
          currentPrice: row.currentPrice,
          isEarningsWeek,
          earningsNote,
          checkinPrompt,
        };
      })
      .filter((r): r is ResolvedWatchlistRow => r !== null);
  }, [tick, sim.currentWeek, portfolio.positions]);

  const totalReturnPct = ((portfolioValue - STARTING_CASH) / STARTING_CASH) * 100;
  const atLastWeek = !canAdvanceWeek();

  function handleAdvance() {
    advanceWeek();
    setTick((t) => t + 1);
  }

  function handleReset() {
    const ok = window.confirm(
      'Reset the Floor? This wipes your sim week, cash, and positions. Your journal entries stay.',
    );
    if (!ok) return;
    resetFloor();
    setTick((t) => t + 1);
  }

  function handleTradeSubmit(input: {
    action: TradeAction;
    shares: number;
    rationale: string;
    bearCase: string;
  }) {
    if (view.kind !== 'trade') return;
    const row = watchlist.find((r) => r.companyId === view.companyId);
    if (!row) return;

    // For sells, snapshot the prior buy rationale BEFORE we write the new
    // sell entry — getLatestBuyRationale walks all entries and we want the
    // pre-existing one, not the one we're about to create.
    const priorBuy =
      input.action === 'sell' ? getLatestBuyRationale(row.companyId) : null;

    // Write the rationale FIRST so the trade record can reference it.
    const entry = createTradeRationale({
      companyId: row.companyId,
      ticker: row.company.ticker,
      action: input.action,
      shares: input.action === 'hold' ? undefined : input.shares,
      price: row.currentPrice,
      week: sim.currentWeek,
      text: input.rationale,
      bearCase: input.bearCase || undefined,
    });

    const result = executeTrade({
      companyId: row.companyId,
      ticker: row.company.ticker,
      action: input.action,
      shares: input.shares,
      price: row.currentPrice,
      rationaleEntryId: entry.id,
    });

    if (!result.ok) {
      // The TradeForm validates locally so this should be unreachable, but
      // surface it cleanly if it ever happens.
      window.alert(`Trade failed: ${result.reason}`);
      return;
    }

    setTick((t) => t + 1);
    setView({ kind: 'floor' });

    // Post-sell verdict auto-prompt: only fire if the sell actually had a
    // prior buy thesis to grade and the user hasn't already marked it.
    if (priorBuy && !priorBuy.userVerdict) {
      setVerdictPrompt({
        rationaleEntryId: priorBuy.id,
        ticker: row.company.ticker,
        buyTitle: priorBuy.title,
      });
    }
  }

  function handleEarningsSubmit(input: {
    headline: string;
    guide: string;
    market: string;
  }) {
    if (view.kind !== 'earnings') return;
    const row = watchlist.find((r) => r.companyId === view.companyId);
    if (!row) return;
    createEarningsNote({
      companyId: row.companyId,
      ticker: row.company.ticker,
      week: sim.currentWeek,
      headline: input.headline,
      guide: input.guide,
      market: input.market,
    });
    setTick((t) => t + 1);
    setView({ kind: 'floor' });
  }

  function handleCheckinSubmit(input: { text: string; status: CheckinStatus }) {
    if (view.kind !== 'checkin') return;
    const row = watchlist.find((r) => r.companyId === view.companyId);
    if (!row || !row.checkinPrompt) return;
    createThesisCheckin({
      companyId: row.companyId,
      ticker: row.company.ticker,
      week: sim.currentWeek,
      text: input.text,
      status: input.status,
      buyEntryId: row.checkinPrompt.buyEntry.id,
    });
    setTick((t) => t + 1);
    setView({ kind: 'floor' });
  }

  // ---------------------------- Trade view ----------------------------
  if (view.kind === 'trade') {
    const row = watchlist.find((r) => r.companyId === view.companyId);
    if (!row) {
      // Stale id — bail back to the floor.
      setView({ kind: 'floor' });
      return null;
    }
    const priorBuy = getLatestBuyRationale(row.companyId);
    return (
      <div className="min-h-screen bg-dark-950 relative overflow-hidden">
        <div className="scene-mesh" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-6">
          <TradeForm
            company={row.company}
            event={row.currentEvent}
            week={sim.currentWeek}
            cash={portfolio.cash}
            position={portfolio.positions[row.companyId]}
            priorBuyRationale={priorBuy}
            onCancel={() => setView({ kind: 'floor' })}
            onSubmit={handleTradeSubmit}
          />
        </div>
      </div>
    );
  }

  // -------------------------- Earnings view ---------------------------
  if (view.kind === 'earnings') {
    const row = watchlist.find((r) => r.companyId === view.companyId);
    if (!row) {
      setView({ kind: 'floor' });
      return null;
    }
    return (
      <div className="min-h-screen bg-dark-950 relative overflow-hidden">
        <div className="scene-mesh" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-6">
          <EarningsDrillDown
            company={row.company}
            event={row.currentEvent}
            week={sim.currentWeek}
            onCancel={() => setView({ kind: 'floor' })}
            onSubmit={handleEarningsSubmit}
          />
        </div>
      </div>
    );
  }

  // -------------------------- Check-in view ---------------------------
  if (view.kind === 'checkin') {
    const row = watchlist.find((r) => r.companyId === view.companyId);
    if (!row || !row.checkinPrompt) {
      // Either the row is gone, or the trigger no longer fires (e.g.
      // user advanced or wrote one in another tab). Bail back cleanly.
      setView({ kind: 'floor' });
      return null;
    }
    const buyEntry = row.checkinPrompt.buyEntry;
    const buyWeek = sim.currentWeek - row.checkinPrompt.weeksSinceBuy;
    const priorCheckins = getCheckinsForBuy(buyEntry.id);
    return (
      <div className="min-h-screen bg-dark-950 relative overflow-hidden">
        <div className="scene-mesh" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-6">
          <ThesisCheckin
            company={row.company}
            event={row.currentEvent}
            week={sim.currentWeek}
            buyEntry={buyEntry}
            buyWeek={buyWeek}
            buyPrice={
              portfolio.positions[row.companyId]?.avgCost ?? row.currentPrice
            }
            priceNow={row.currentPrice}
            priorCheckins={priorCheckins}
            onCancel={() => setView({ kind: 'floor' })}
            onSubmit={handleCheckinSubmit}
          />
        </div>
      </div>
    );
  }

  // ---------------------------- Floor view ----------------------------
  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      <div className="scene-mesh" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full blur-[110px] bg-warm/[0.06]" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[320px] rounded-full blur-[80px] bg-accent/[0.04]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Back nav */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Home
        </button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-warm/25 via-warm/10 to-transparent border border-warm/30 shadow-[0_0_28px_-4px_rgba(245,158,11,0.25)]">
              <ChartLine className="w-5 h-5 text-warm" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-[22px] font-extrabold text-text-primary leading-tight tracking-tight">
                  The Floor
                </h1>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-md bg-warm/12 text-warm border border-warm/20">
                  MVP
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1 leading-snug">
                Three companies. Sixteen weeks. Every move requires writing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio summary */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC, delay: 0.05 }}
          className="rounded-2xl border border-warm/20 bg-gradient-to-br from-warm/[0.05] via-dark-800/60 to-dark-800/40 backdrop-blur-sm p-5 space-y-4"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
                Portfolio Value
              </p>
              <p className="data-num text-2xl font-extrabold text-text-primary">
                ${portfolioValue.toFixed(2)}
              </p>
              <p
                className={`data-num text-[11px] font-semibold ${
                  totalReturnPct >= 0 ? 'text-green' : 'text-red'
                }`}
              >
                {totalReturnPct >= 0 ? '+' : ''}
                {totalReturnPct.toFixed(2)}% all-time
              </p>
            </div>
            <div className="text-right space-y-0.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
                Sim Week
              </p>
              <p className="data-num text-2xl font-extrabold text-text-primary">
                {sim.currentWeek + 1}
                <span className="text-text-faint text-base font-bold">
                  /{FLOOR_TOTAL_WEEKS}
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-white/[0.05] bg-dark-900/40 p-3 space-y-0.5">
              <div className="flex items-center gap-1.5">
                <Wallet className="w-3 h-3 text-text-muted" />
                <p className="text-[10px] uppercase tracking-wide text-text-muted">
                  Cash
                </p>
              </div>
              <p className="data-num text-sm font-bold text-text-primary">
                ${portfolio.cash.toFixed(2)}
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.05] bg-dark-900/40 p-3 space-y-0.5">
              <div className="flex items-center gap-1.5">
                <CircleDollarSign className="w-3 h-3 text-text-muted" />
                <p className="text-[10px] uppercase tracking-wide text-text-muted">
                  Invested
                </p>
              </div>
              <p className="data-num text-sm font-bold text-text-primary">
                ${(portfolioValue - portfolio.cash).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAdvance}
              disabled={atLastWeek}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                atLastWeek
                  ? 'border border-white/[0.06] bg-dark-800/40 text-text-faint cursor-not-allowed'
                  : 'border border-warm/30 bg-gradient-to-r from-warm/[0.18] to-warm/[0.06] text-warm hover:from-warm/[0.24] cursor-pointer'
              }`}
            >
              <CalendarClock className="w-3.5 h-3.5" />
              {atLastWeek ? 'End of designed weeks' : 'Advance Week'}
            </button>
            <button
              onClick={handleReset}
              title="Reset sim"
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-dark-800/40 text-text-muted hover:text-text-secondary hover:border-white/[0.12] text-xs cursor-pointer transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Positions */}
        {Object.keys(portfolio.positions).length > 0 && (
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted px-1">
              Positions
            </p>
            <div className="space-y-2">
              {Object.values(portfolio.positions).map((pos) => (
                <PositionRow
                  key={pos.companyId}
                  position={pos}
                  watchlist={watchlist}
                />
              ))}
            </div>
          </div>
        )}

        {/* Watchlist */}
        <div className="space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted px-1">
            Watchlist · Week {sim.currentWeek + 1}
          </p>
          <AnimatePresence mode="popLayout">
            {watchlist.map((row, i) => (
              <motion.div
                key={`${row.companyId}-${sim.currentWeek}`}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-4 space-y-3 mb-2"
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-dark-900/50 border border-white/[0.06] flex items-center justify-center text-2xl shrink-0">
                    {row.company.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-text-primary tracking-tight">
                        {row.company.name}
                      </h3>
                      <span className="data-num text-[10px] text-accent-light font-bold px-1.5 py-0.5 rounded border border-accent/20 bg-accent/[0.06]">
                        {row.company.ticker}
                      </span>
                      {row.currentEvent.tag && (
                        <span className="text-[9px] uppercase tracking-wide font-bold px-1.5 py-0.5 rounded bg-warm/10 border border-warm/25 text-warm">
                          {row.currentEvent.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      {row.company.sector}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="data-num text-base font-bold text-text-primary">
                      ${row.currentPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {row.currentEvent.blurb}
                </p>

                {row.isEarningsWeek && row.earningsNote && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-green/25 bg-green/[0.06] text-[11px]">
                    <CheckCircle2 className="w-3 h-3 text-green shrink-0" />
                    <p className="text-green font-semibold">
                      Earnings note saved · W{sim.currentWeek + 1}
                    </p>
                    <button
                      onClick={() =>
                        setView({ kind: 'earnings', companyId: row.companyId })
                      }
                      className="ml-auto text-[10px] text-text-muted hover:text-text-secondary underline cursor-pointer"
                    >
                      Write another take
                    </button>
                  </div>
                )}

                {row.checkinPrompt && (
                  <button
                    onClick={() =>
                      setView({ kind: 'checkin', companyId: row.companyId })
                    }
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-electric/30 bg-gradient-to-r from-electric/[0.08] to-electric/[0.04] hover:from-electric/[0.14] hover:to-electric/[0.06] text-left transition-all cursor-pointer"
                  >
                    <Activity className="w-3.5 h-3.5 text-electric shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-electric font-bold leading-snug">
                        Your {row.company.ticker} thesis is{' '}
                        {row.checkinPrompt.weeksSinceBuy}{' '}
                        {row.checkinPrompt.weeksSinceBuy === 1 ? 'week' : 'weeks'} old
                        {row.checkinPrompt.latestCheckin?.checkinStatus === 'breaking'
                          ? ' — you said it was breaking. Re-read it?'
                          : '. Re-read it?'}
                      </p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-electric shrink-0" />
                  </button>
                )}

                <div className="flex items-center justify-between gap-2 pt-1">
                  <p className="text-[10px] text-text-faint italic leading-snug pr-2">
                    {row.watchlistThesis}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    {row.isEarningsWeek && !row.earningsNote && (
                      <button
                        onClick={() =>
                          setView({ kind: 'earnings', companyId: row.companyId })
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-warm/40 bg-gradient-to-r from-warm/[0.16] to-warm/[0.06] hover:from-warm/[0.22] text-warm text-xs font-bold cursor-pointer transition-all shadow-[0_0_16px_-6px_rgba(245,158,11,0.5)]"
                      >
                        <FileSearch className="w-3 h-3" />
                        Read the print
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                    <button
                      onClick={() =>
                        setView({ kind: 'trade', companyId: row.companyId })
                      }
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold cursor-pointer transition-all ${
                        row.isEarningsWeek && !row.earningsNote
                          ? 'border-white/[0.08] bg-dark-900/40 hover:bg-dark-900/70 text-text-secondary'
                          : 'border-accent/30 bg-accent/[0.08] hover:bg-accent/[0.14] text-accent-light'
                      }`}
                    >
                      <ClipboardList className="w-3 h-3" />
                      Trade
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Track record — predictions vs. reality */}
        <TrackRecordPanel
          portfolio={portfolio}
          currentWeek={sim.currentWeek}
          onChange={() => setTick((t) => t + 1)}
        />

        {/* Journal nudge */}
        <button
          onClick={() => navigate('/journal')}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-white/[0.06] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1] text-text-secondary text-xs font-semibold transition-all cursor-pointer backdrop-blur-sm"
        >
          Open Journal — your trade rationales live here
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <PostSellVerdictPrompt
        prompt={verdictPrompt}
        onPick={(verdict) => {
          if (!verdictPrompt) return;
          setUserVerdict(verdictPrompt.rationaleEntryId, verdict);
          setVerdictPrompt(null);
          setTick((t) => t + 1);
        }}
        onDismiss={() => setVerdictPrompt(null)}
      />
    </div>
  );
}

/**
 * One-shot modal that fires after a sell on a position the user had
 * previously written a buy thesis for. The point isn't "grade yourself"
 * — it's "name the outcome while context is hot." The user can dismiss
 * without marking; the dashboard surface lets them mark it later anyway.
 */
function PostSellVerdictPrompt({
  prompt,
  onPick,
  onDismiss,
}: {
  prompt: VerdictPromptState | null;
  onPick: (verdict: UserVerdict) => void;
  onDismiss: () => void;
}) {
  const verdictOptions: { id: UserVerdict; tone: string }[] = [
    {
      id: 'held_up',
      tone: 'border-green/40 bg-green/[0.10] text-green hover:bg-green/[0.16]',
    },
    {
      id: 'mixed',
      tone: 'border-warm/40 bg-warm/[0.08] text-warm hover:bg-warm/[0.14]',
    },
    {
      id: 'off_base',
      tone: 'border-red/40 bg-red/[0.08] text-red hover:bg-red/[0.14]',
    },
  ];

  return (
    <AnimatePresence>
      {prompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-dark-950/70 backdrop-blur-sm px-4 py-6"
          onClick={onDismiss}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_CINEMATIC }}
            className="w-full max-w-md rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800 via-dark-800 to-dark-900 p-5 space-y-4 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-warm">
                You just exited {prompt.ticker}
              </p>
              <h3 className="text-base font-bold text-text-primary leading-snug">
                Now that you&apos;ve exited — how do you read what your original thesis actually said?
              </h3>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Marking it now, while the trade is fresh, is the discipline. Your call, not the app&apos;s — held up means the thesis itself wasn&apos;t falsified, not that the price went your way.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.05] bg-dark-900/50 p-2.5">
              <p className="text-[10px] uppercase tracking-wide text-text-muted font-bold mb-0.5">
                Original thesis
              </p>
              <p className="text-[11px] text-text-secondary truncate">
                {prompt.buyTitle}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {verdictOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onPick(opt.id)}
                  className={`px-2 py-2 rounded-lg border text-xs font-bold transition-all cursor-pointer ${opt.tone}`}
                >
                  {userVerdictLabel(opt.id)}
                </button>
              ))}
            </div>
            <button
              onClick={onDismiss}
              className="w-full text-[11px] text-text-muted hover:text-text-secondary transition-colors cursor-pointer pt-1"
            >
              Skip — I&apos;ll mark it from the track record later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PositionRow({
  position,
  watchlist,
}: {
  position: Position;
  watchlist: ResolvedWatchlistRow[];
}) {
  const row = watchlist.find((r) => r.companyId === position.companyId);
  const company = row?.company;
  const price = row?.currentPrice ?? 0;
  const mv = positionMarketValue(position);
  const cost = position.shares * position.avgCost;
  const unrealizedPct = cost > 0 ? ((mv - cost) / cost) * 100 : 0;

  return (
    <div className="rounded-xl border border-white/[0.06] bg-dark-800/40 backdrop-blur-sm p-3 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-dark-900/50 border border-white/[0.06] flex items-center justify-center text-lg shrink-0">
        {company?.emoji ?? '•'}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-bold text-text-primary">
            {company?.ticker ?? position.companyId.toUpperCase()}
          </p>
          <p className="data-num text-[10px] text-text-muted">
            {position.shares} sh @ ${position.avgCost.toFixed(2)}
          </p>
        </div>
        <p className="data-num text-[10px] text-text-muted mt-0.5">
          Mark ${price.toFixed(2)}
        </p>
      </div>
      <div className="text-right shrink-0">
        <p className="data-num text-sm font-bold text-text-primary">
          ${mv.toFixed(2)}
        </p>
        <p
          className={`data-num text-[10px] font-semibold ${
            unrealizedPct >= 0 ? 'text-green' : 'text-red'
          }`}
        >
          {unrealizedPct >= 0 ? '+' : ''}
          {unrealizedPct.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
