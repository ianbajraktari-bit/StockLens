import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ClipboardList,
  History,
  Sparkles,
  Swords,
} from 'lucide-react';
import { getCompanyById } from '../../data/companies';
import { getFloorCompany } from '../../data/floor';
import {
  getEntryById,
  setUserVerdict,
  userVerdictLabel,
  type JournalEntry,
  type UserVerdict,
} from '../../lib/journal';
import type { FloorPortfolio, TradeRecord } from '../../lib/floor';

const VERDICT_OPTIONS: { id: UserVerdict; label: string; tone: string }[] = [
  {
    id: 'held_up',
    label: 'Held up',
    tone: 'border-green/30 bg-green/[0.08] text-green hover:bg-green/[0.14]',
  },
  {
    id: 'mixed',
    label: 'Mixed',
    tone: 'border-warm/30 bg-warm/[0.06] text-warm hover:bg-warm/[0.12]',
  },
  {
    id: 'off_base',
    label: 'Off-base',
    tone: 'border-red/30 bg-red/[0.06] text-red hover:bg-red/[0.12]',
  },
];

interface Props {
  portfolio: FloorPortfolio;
  currentWeek: number;
  /** Bumped after a verdict mark so the parent can re-read storage. */
  onChange: () => void;
}

/**
 * The track-record panel — predictions vs. reality for every completed
 * trade. Quiet, dense, re-readable. The reward is the rereading itself,
 * not a P/L leaderboard.
 */
export default function TrackRecordPanel({
  portfolio,
  currentWeek,
  onChange,
}: Props) {
  const trades = useMemo(
    () => [...portfolio.history].sort((a, b) => (a.executedAt < b.executedAt ? 1 : -1)),
    [portfolio.history],
  );

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-1">
        <History className="w-3.5 h-3.5 text-text-muted" />
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
          Track record
        </p>
        {trades.length > 0 && (
          <span className="data-num text-[10px] text-text-faint">
            {trades.length}
          </span>
        )}
      </div>

      {trades.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/[0.08] bg-dark-800/30 p-6 text-center space-y-1.5">
          <Sparkles className="w-5 h-5 text-text-muted mx-auto" />
          <p className="text-xs text-text-secondary leading-relaxed max-w-xs mx-auto">
            Place a trade to start your track record. Every rationale will land
            here next to what actually happened.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {trades.map((trade) => (
            <TrackRecordRow
              key={trade.id}
              trade={trade}
              portfolio={portfolio}
              currentWeek={currentWeek}
              onVerdict={(verdict) => {
                setUserVerdict(trade.rationaleEntryId, verdict);
                onChange();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TrackRecordRow({
  trade,
  portfolio,
  currentWeek,
  onVerdict,
}: {
  trade: TradeRecord;
  portfolio: FloorPortfolio;
  currentWeek: number;
  onVerdict: (verdict: UserVerdict | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const company = getCompanyById(trade.companyId);
  const entry: JournalEntry | null = getEntryById(trade.rationaleEntryId);
  const floorCompany = getFloorCompany(trade.companyId);

  // "What happened next" — the next non-quiet event after the trade week.
  // If nothing has fired yet, we say so; that's a real and pedagogical
  // signal ("still developing, give it time").
  const nextEvent = useMemo(() => {
    if (!floorCompany) return undefined;
    const after = floorCompany.events.find(
      (e) => e.week > trade.week && e.week <= currentWeek && e.tag && e.tag !== 'quiet',
    );
    return after;
  }, [floorCompany, trade.week, currentWeek]);

  // Price at the current sim week (not necessarily where it traded).
  const priceNow = useMemo(() => {
    if (!floorCompany) return undefined;
    const lastIdx = floorCompany.events.length - 1;
    const clamped = Math.max(0, Math.min(currentWeek, lastIdx));
    return floorCompany.events[clamped]?.price;
  }, [floorCompany, currentWeek]);

  // Position state for the P/L line. Two cases worth distinguishing:
  // still held (unrealized vs. trade price) vs. fully closed.
  const heldPosition = portfolio.positions[trade.companyId];
  const stillHeld = !!heldPosition && trade.action !== 'sell';

  let plPct: number | null = null;
  if (priceNow !== undefined && trade.action === 'buy') {
    plPct = ((priceNow - trade.price) / trade.price) * 100;
  } else if (priceNow !== undefined && trade.action === 'sell') {
    // For a sell, the user benefits if the price fell after they sold.
    plPct = ((trade.price - priceNow) / trade.price) * 100;
  }

  const verdict = entry?.userVerdict;
  const actionTone =
    trade.action === 'buy'
      ? 'text-green border-green/30 bg-green/[0.08]'
      : trade.action === 'sell'
        ? 'text-red border-red/30 bg-red/[0.08]'
        : 'text-warm border-warm/30 bg-warm/[0.08]';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="rounded-2xl border border-white/[0.06] bg-dark-800/40 backdrop-blur-sm overflow-hidden"
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-dark-800/70 transition-colors cursor-pointer"
      >
        <div className="w-9 h-9 rounded-lg bg-dark-900/50 border border-white/[0.06] flex items-center justify-center text-lg shrink-0">
          {company?.emoji ?? '•'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <span
              className={`text-[9px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-md border ${actionTone}`}
            >
              {trade.action}
            </span>
            <p className="text-xs font-bold text-text-primary">
              {trade.ticker}
            </p>
            {trade.action !== 'hold' && (
              <p className="data-num text-[10px] text-text-muted">
                {trade.shares} sh @ ${trade.price.toFixed(2)}
              </p>
            )}
            <p className="text-[10px] text-text-faint">· W{trade.week + 1}</p>
            {verdict && (
              <span
                className={`text-[9px] font-bold uppercase tracking-[0.16em] px-1.5 py-0.5 rounded-md border ${verdictChipTone(verdict)}`}
              >
                {userVerdictLabel(verdict)}
              </span>
            )}
          </div>
          {entry && (
            <p className="text-xs text-text-secondary line-clamp-1 leading-snug">
              {entry.content}
            </p>
          )}
        </div>
        <div className="text-right shrink-0">
          {plPct !== null && (
            <p
              className={`data-num text-xs font-bold ${plPct >= 0 ? 'text-green' : 'text-red'}`}
            >
              {plPct >= 0 ? '+' : ''}
              {plPct.toFixed(1)}%
            </p>
          )}
          <p className="text-[10px] text-text-muted">
            {stillHeld ? 'open' : trade.action === 'hold' ? 'noted' : 'closed'}
          </p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-text-muted mt-1"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t border-white/[0.04] pt-3">
              {/* Your case */}
              {entry?.content && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <ClipboardList className="w-3 h-3 text-accent-light" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-light">
                      Your case
                    </p>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">
                    {entry.content}
                  </p>
                </div>
              )}

              {/* Opposing case (only present for directional trades) */}
              {entry?.bearCaseContent && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Swords className="w-3 h-3 text-warm" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-warm">
                      The opposing case
                    </p>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">
                    {entry.bearCaseContent}
                  </p>
                </div>
              )}

              {/* What happened next */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
                  What happened next
                </p>
                <div className="rounded-lg border border-white/[0.05] bg-dark-900/40 p-3 space-y-2">
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="text-text-muted">
                      Price at trade
                      <span className="data-num text-text-secondary font-semibold ml-1.5">
                        ${trade.price.toFixed(2)}
                      </span>
                      <span className="text-text-faint mx-1.5">→</span>
                      now
                      <span className="data-num text-text-secondary font-semibold ml-1.5">
                        {priceNow !== undefined ? `$${priceNow.toFixed(2)}` : '—'}
                      </span>
                    </span>
                    {plPct !== null && (
                      <span
                        className={`data-num text-[11px] font-bold ${plPct >= 0 ? 'text-green' : 'text-red'}`}
                      >
                        {plPct >= 0 ? '+' : ''}
                        {plPct.toFixed(2)}%
                      </span>
                    )}
                  </div>
                  {nextEvent ? (
                    <div className="border-t border-white/[0.05] pt-2 space-y-1">
                      <p className="text-[10px] uppercase tracking-wide text-text-muted">
                        Next event · W{nextEvent.week + 1}
                        {nextEvent.tag && (
                          <span className="ml-1.5 text-warm font-bold">
                            {nextEvent.tag}
                          </span>
                        )}
                      </p>
                      <p className="text-[11px] text-text-secondary leading-relaxed">
                        {nextEvent.blurb}
                      </p>
                    </div>
                  ) : (
                    <p className="text-[11px] text-text-muted italic border-t border-white/[0.05] pt-2">
                      Still developing — no major event has fired yet.
                    </p>
                  )}
                </div>
              </div>

              {/* Verdict marker */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
                  Mark this rationale
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {VERDICT_OPTIONS.map((opt) => {
                    const selected = verdict === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => onVerdict(selected ? null : opt.id)}
                        className={`px-2 py-1.5 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                          selected
                            ? opt.tone
                            : 'border-white/[0.06] bg-dark-900/40 text-text-muted hover:border-white/[0.12] hover:text-text-secondary'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-text-faint italic leading-snug">
                  Your call, not the app&apos;s. A position down 20% can still be
                  &ldquo;held up&rdquo; if your thesis hasn&apos;t actually been falsified.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function verdictChipTone(v: UserVerdict): string {
  switch (v) {
    case 'held_up':
      return 'border-green/30 bg-green/[0.08] text-green';
    case 'mixed':
      return 'border-warm/30 bg-warm/[0.08] text-warm';
    case 'off_base':
      return 'border-red/30 bg-red/[0.08] text-red';
  }
}
