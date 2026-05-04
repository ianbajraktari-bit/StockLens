import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ClipboardList, Lock } from 'lucide-react';
import type { CompanyProfile } from '../../data/companies';
import type { WeekEvent } from '../../data/floor';
import type { Position, TradeAction } from '../../lib/floor';

const RATIONALE_MIN = 40;

/**
 * Structured prompt for trade rationales. The structure is the point —
 * blank prompts produce one-word fluff; this forces falsifiable thinking.
 */
export const TRADE_RATIONALE_PROMPT =
  'What do you think will happen, by when, and what would prove you wrong?';

interface Props {
  company: CompanyProfile;
  event: WeekEvent;
  week: number;
  cash: number;
  position?: Position;
  onCancel: () => void;
  onSubmit: (input: {
    action: TradeAction;
    shares: number;
    rationale: string;
  }) => void;
}

/**
 * Forced-rationale trade form. Action + shares + rationale, with the
 * Submit button disabled until the rationale clears the minimum length.
 *
 * A "hold" decision is a real decision — it gets a rationale too, and a
 * submission cost. The user is committing to "I considered acting and
 * chose not to." That commitment lives in the journal.
 */
export default function TradeForm({
  company,
  event,
  week,
  cash,
  position,
  onCancel,
  onSubmit,
}: Props) {
  const [action, setAction] = useState<TradeAction>('buy');
  const [sharesText, setSharesText] = useState('');
  const [rationale, setRationale] = useState('');

  const sharesNum = useMemo(() => {
    const n = Number.parseInt(sharesText, 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [sharesText]);

  const price = event.price;
  const cost = sharesNum * price;
  const heldShares = position?.shares ?? 0;
  const maxAffordableBuy = Math.floor(cash / price);

  // Per-action validation
  let actionError: string | null = null;
  if (action === 'buy') {
    if (sharesNum <= 0) actionError = 'Enter a positive share count.';
    else if (cost > cash) actionError = `Cost $${cost.toFixed(2)} exceeds your cash.`;
  } else if (action === 'sell') {
    if (sharesNum <= 0) actionError = 'Enter a positive share count.';
    else if (sharesNum > heldShares)
      actionError = `You only own ${heldShares} share${heldShares === 1 ? '' : 's'}.`;
  }

  const rationaleLen = rationale.trim().length;
  const rationaleOk = rationaleLen >= RATIONALE_MIN;
  const canSubmit = !actionError && rationaleOk;

  function handleSubmit() {
    if (!canSubmit) return;
    onSubmit({
      action,
      shares: action === 'hold' ? 0 : sharesNum,
      rationale: rationale.trim(),
    });
  }

  return (
    <div className="space-y-5">
      <button
        onClick={onCancel}
        className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to the Floor
      </button>

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-dark-800/60 border border-white/[0.06] flex items-center justify-center text-2xl">
            {company.emoji}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg font-bold text-text-primary tracking-tight">
                Trade {company.name}
              </h1>
              <span className="data-num text-[11px] text-accent-light font-bold px-1.5 py-0.5 rounded border border-accent/20 bg-accent/[0.06]">
                {company.ticker}
              </span>
            </div>
            <p className="text-[11px] text-text-muted">
              Week {week} · current price{' '}
              <span className="data-num text-text-secondary font-semibold">${price.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>

      {/* This week's context — never let the user trade without seeing it */}
      <div className="rounded-xl border border-white/[0.06] bg-dark-800/40 backdrop-blur-sm p-4 space-y-1.5">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
          This week
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">{event.blurb}</p>
      </div>

      {/* Cash + position snapshot */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/[0.05] bg-dark-800/40 p-3 space-y-0.5">
          <p className="text-[10px] uppercase tracking-wide text-text-muted">Cash</p>
          <p className="data-num text-sm font-semibold text-text-primary">
            ${cash.toFixed(2)}
          </p>
        </div>
        <div className="rounded-xl border border-white/[0.05] bg-dark-800/40 p-3 space-y-0.5">
          <p className="text-[10px] uppercase tracking-wide text-text-muted">Held</p>
          <p className="data-num text-sm font-semibold text-text-primary">
            {heldShares} sh
            {position && (
              <span className="text-[10px] text-text-muted font-normal ml-1.5">
                @ ${position.avgCost.toFixed(2)}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Action selector */}
      <div className="space-y-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted px-1">
          Action
        </p>
        <div className="grid grid-cols-3 gap-2">
          {(['buy', 'sell', 'hold'] as TradeAction[]).map((a) => {
            const selected = action === a;
            const selectedClass =
              a === 'buy'
                ? 'border-green/50 bg-green/[0.12] text-green'
                : a === 'sell'
                  ? 'border-red/50 bg-red/[0.12] text-red'
                  : 'border-warm/50 bg-warm/[0.12] text-warm';
            return (
              <button
                key={a}
                onClick={() => setAction(a)}
                className={`px-3 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wide transition-all cursor-pointer ${
                  selected
                    ? selectedClass
                    : 'border-white/[0.06] bg-dark-800/40 text-text-muted hover:border-white/[0.12] hover:text-text-secondary'
                }`}
              >
                {a}
              </button>
            );
          })}
        </div>
      </div>

      {/* Shares input — hidden for hold */}
      {action !== 'hold' && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted px-1">
              Shares
            </p>
            {action === 'buy' && (
              <button
                onClick={() => setSharesText(String(maxAffordableBuy))}
                className="text-[10px] text-accent-light hover:underline cursor-pointer"
              >
                Max: {maxAffordableBuy}
              </button>
            )}
            {action === 'sell' && heldShares > 0 && (
              <button
                onClick={() => setSharesText(String(heldShares))}
                className="text-[10px] text-accent-light hover:underline cursor-pointer"
              >
                Max: {heldShares}
              </button>
            )}
          </div>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            value={sharesText}
            onChange={(e) => setSharesText(e.target.value)}
            placeholder="0"
            className="w-full px-4 py-3 rounded-xl bg-dark-800/60 border border-white/[0.08] text-text-primary text-base data-num focus:outline-none focus:border-accent/40 placeholder:text-text-faint"
          />
          {sharesNum > 0 && (
            <p className="text-[11px] text-text-muted px-1">
              {action === 'buy' ? 'Cost' : 'Proceeds'}:{' '}
              <span className="data-num text-text-secondary font-semibold">
                ${cost.toFixed(2)}
              </span>
            </p>
          )}
        </div>
      )}
      {action === 'hold' && (
        <div className="rounded-xl border border-warm/20 bg-warm/[0.04] p-3 text-[11px] text-text-secondary leading-relaxed">
          A hold is a real decision. You considered acting on this week's news and chose not to —
          write down why so you can re-read it later.
        </div>
      )}

      {/* Rationale — the centerpiece */}
      <div className="space-y-2">
        <div className="rounded-xl border border-accent/25 bg-gradient-to-br from-accent/[0.06] via-dark-800/50 to-dark-800/30 p-4 space-y-2">
          <div className="flex items-center gap-1.5">
            <ClipboardList className="w-3.5 h-3.5 text-accent-light" />
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-light">
              Required: trade rationale
            </p>
          </div>
          <p className="text-sm text-text-primary leading-relaxed">
            {TRADE_RATIONALE_PROMPT}
          </p>
          <p className="text-[11px] text-text-muted leading-relaxed">
            This memo is saved to your Journal as a <span className="text-text-secondary font-semibold">trade_rationale</span> entry. You can re-read it after the position plays out — that comparison is how the discipline gets built.
          </p>
        </div>
        <textarea
          value={rationale}
          onChange={(e) => setRationale(e.target.value)}
          rows={6}
          placeholder="What do you think will happen, by when, and what would prove you wrong?"
          className="w-full px-4 py-3 rounded-xl bg-dark-800/60 border border-white/[0.08] text-text-primary text-sm leading-relaxed focus:outline-none focus:border-accent/40 placeholder:text-text-faint resize-y"
        />
        <div className="flex items-center justify-between px-1">
          <p
            className={`text-[11px] ${rationaleOk ? 'text-green' : 'text-text-muted'}`}
          >
            {rationaleLen} / {RATIONALE_MIN} chars
            {rationaleOk ? ' — ready' : ' minimum'}
          </p>
          {actionError && (
            <p className="text-[11px] text-red font-semibold">{actionError}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <motion.button
        onClick={handleSubmit}
        disabled={!canSubmit}
        whileHover={canSubmit ? { scale: 1.01, y: -1 } : undefined}
        whileTap={canSubmit ? { scale: 0.98 } : undefined}
        className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold transition-all ${
          canSubmit
            ? 'bg-gradient-to-r from-accent to-accent-light text-white shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)] cursor-pointer'
            : 'bg-dark-800/60 border border-white/[0.06] text-text-muted cursor-not-allowed'
        }`}
      >
        {canSubmit ? (
          <>
            Commit Trade
            <ArrowRight className="w-4 h-4" />
          </>
        ) : (
          <>
            <Lock className="w-3.5 h-3.5" />
            Write {Math.max(0, RATIONALE_MIN - rationaleLen)} more chars to submit
          </>
        )}
      </motion.button>
    </div>
  );
}
