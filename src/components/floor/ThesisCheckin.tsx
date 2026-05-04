import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import type { CompanyProfile } from '../../data/companies';
import type { WeekEvent } from '../../data/floor';
import {
  checkinStatusLabel,
  type CheckinStatus,
  type JournalEntry,
} from '../../lib/journal';

const FIELD_MIN = 40;

export const CHECKIN_PROMPT =
  "What's changed since you wrote this? Is your thesis still intact, fraying, or breaking? Be concrete about which part.";

const CHECKIN_PLACEHOLDER =
  "e.g., 'The Firefly enterprise pipeline I bet on is real, but the monetization timing slipped a quarter — the load-bearing assumption isn't broken yet, but the path got longer.'";

const STATUS_OPTIONS: {
  id: CheckinStatus;
  helper: string;
  tone: string;
  toneSelected: string;
}[] = [
  {
    id: 'still_holds',
    helper: 'The case I wrote is intact. Nothing material has been falsified.',
    tone: 'border-white/[0.06] bg-dark-900/40 text-text-muted hover:border-green/30 hover:text-green',
    toneSelected:
      'border-green/50 bg-green/[0.10] text-green shadow-[0_0_18px_-6px_rgba(34,197,94,0.5)]',
  },
  {
    id: 'fraying',
    helper: 'Some part is wobbling. Not falsified, but I should be paying attention.',
    tone: 'border-white/[0.06] bg-dark-900/40 text-text-muted hover:border-warm/30 hover:text-warm',
    toneSelected:
      'border-warm/50 bg-warm/[0.10] text-warm shadow-[0_0_18px_-6px_rgba(245,158,11,0.5)]',
  },
  {
    id: 'breaking',
    helper: 'A load-bearing assumption has been falsified. I should act, or write down why I\'m not.',
    tone: 'border-white/[0.06] bg-dark-900/40 text-text-muted hover:border-red/30 hover:text-red',
    toneSelected:
      'border-red/50 bg-red/[0.10] text-red shadow-[0_0_18px_-6px_rgba(239,68,68,0.5)]',
  },
];

interface Props {
  company: CompanyProfile;
  event: WeekEvent;
  /** Sim week index, 0-based — used in the saved entry's title. */
  week: number;
  /** Position-level metrics shown in the price-since-buy card. */
  buyEntry: JournalEntry;
  /** Sim week the buy was placed in (0-based). */
  buyWeek: number;
  /** Per-share price at the buy. */
  buyPrice: number;
  /** Per-share price now. */
  priceNow: number;
  /**
   * Optional prior check-ins on the same buy, in chronological order
   * (oldest first). Surfaced in a small chain so the user can see the
   * arc — particularly useful when the prior status was "fraying" or
   * "breaking" and they're being asked again.
   */
  priorCheckins: JournalEntry[];
  onCancel: () => void;
  onSubmit: (input: { text: string; status: CheckinStatus }) => void;
}

/**
 * The mid-stream check-in. Lighter than the earnings drill-down — the
 * point is the re-read, not the structure. The user looks at what they
 * wrote at buy, glances at how the world has moved, and writes a single
 * paragraph naming whether the thesis is intact, fraying, or breaking.
 */
export default function ThesisCheckin({
  company,
  event,
  week,
  buyEntry,
  buyWeek,
  buyPrice,
  priceNow,
  priorCheckins,
  onCancel,
  onSubmit,
}: Props) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<CheckinStatus | null>(null);

  const len = text.trim().length;
  const lenOk = len >= FIELD_MIN;
  const canSubmit = lenOk && status !== null;

  const weeksSinceBuy = Math.max(0, week - buyWeek);
  const priceDeltaPct = useMemo(
    () => (buyPrice > 0 ? ((priceNow - buyPrice) / buyPrice) * 100 : 0),
    [buyPrice, priceNow],
  );
  const priceDeltaTone = priceDeltaPct >= 0 ? 'text-green' : 'text-red';

  const lockReason = !lenOk
    ? `Write ${Math.max(0, FIELD_MIN - len)} more chars to submit`
    : 'Pick a status to submit';

  function handleSubmit() {
    if (!canSubmit || status === null) return;
    onSubmit({ text: text.trim(), status });
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
          <div className="w-12 h-12 rounded-xl bg-dark-800/60 border border-electric/30 flex items-center justify-center text-2xl">
            {company.emoji}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg font-bold text-text-primary tracking-tight">
                Check-in — {company.name}
              </h1>
              <span className="data-num text-[11px] text-accent-light font-bold px-1.5 py-0.5 rounded border border-accent/20 bg-accent/[0.06]">
                {company.ticker}
              </span>
              <span className="text-[9px] uppercase tracking-wide font-bold px-1.5 py-0.5 rounded bg-electric/10 border border-electric/25 text-electric">
                check-in · W{week + 1}
              </span>
            </div>
            <p className="text-[11px] text-text-muted mt-1">
              Re-read what you wrote. Then say what's changed.
            </p>
          </div>
        </div>
      </div>

      {/* Re-read the original thesis — the centerpiece, prominent but not loud */}
      <div className="rounded-xl border border-electric/30 bg-gradient-to-br from-electric/[0.06] via-dark-800/50 to-dark-800/30 p-4 space-y-3">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-electric" />
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-electric">
            Your thesis (W{buyWeek + 1})
          </p>
          <span className="ml-auto data-num text-[10px] text-text-muted">
            {weeksSinceBuy} {weeksSinceBuy === 1 ? 'week' : 'weeks'} ago
          </span>
        </div>
        <p className="text-xs font-semibold text-text-secondary leading-snug">
          {buyEntry.title}
        </p>
        <div className="space-y-2">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-light">
              Your case (then)
            </p>
            <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">
              {buyEntry.content}
            </p>
          </div>
          {buyEntry.bearCaseContent && (
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-warm">
                The opposing case (then)
              </p>
              <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">
                {buyEntry.bearCaseContent}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Context: price-since-buy + this week's event */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/[0.05] bg-dark-800/40 p-3 space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-text-muted font-bold">
            Price since your buy
          </p>
          <p className="data-num text-sm font-semibold text-text-primary">
            ${buyPrice.toFixed(2)}
            <span className="text-text-faint mx-1.5">→</span>${priceNow.toFixed(2)}
            <span className={`ml-2 text-[11px] font-bold ${priceDeltaTone}`}>
              {priceDeltaPct >= 0 ? '+' : ''}
              {priceDeltaPct.toFixed(2)}%
            </span>
          </p>
        </div>
        <div className="rounded-xl border border-white/[0.05] bg-dark-800/40 p-3 space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-text-muted font-bold">
            This week
          </p>
          <p className="text-[11px] text-text-secondary leading-relaxed line-clamp-3">
            {event.blurb}
          </p>
        </div>
      </div>

      {/* Prior check-ins, if any — small chain, not loud */}
      {priorCheckins.length > 0 && (
        <div className="rounded-xl border border-white/[0.05] bg-dark-800/30 p-3 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
            Prior check-ins on this thesis
          </p>
          <div className="space-y-1.5">
            {priorCheckins.map((c) => (
              <div
                key={c.id}
                className="flex items-start gap-2 text-[11px] leading-snug"
              >
                <span
                  className={`shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] px-1.5 py-0.5 rounded border ${priorChipTone(
                    c.checkinStatus,
                  )}`}
                >
                  {c.checkinStatus
                    ? checkinStatusLabel(c.checkinStatus)
                    : 'Unmarked'}
                </span>
                <span className="text-text-secondary line-clamp-2">{c.content}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* The check-in field — single textarea + status selector */}
      <div className="space-y-2">
        <div className="rounded-xl border border-electric/25 bg-gradient-to-br from-electric/[0.06] via-dark-800/50 to-dark-800/30 p-4 space-y-2">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-electric" />
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-electric">
              Required: your check-in
            </p>
          </div>
          <p className="text-sm text-text-primary leading-relaxed">{CHECKIN_PROMPT}</p>
          <p className="text-[11px] text-text-muted leading-relaxed">
            "Concrete about which part" is the move. Vague check-ins fail you next month, when you re-read this and can&apos;t tell what you actually meant.
          </p>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder={CHECKIN_PLACEHOLDER}
          className="w-full px-4 py-3 rounded-xl bg-dark-800/60 border border-white/[0.08] text-text-primary text-sm leading-relaxed focus:outline-none focus:border-electric/40 placeholder:text-text-faint resize-y"
          style={{ fontSize: '16px' }}
        />
        <p className={`text-[11px] px-1 ${lenOk ? 'text-green' : 'text-text-muted'}`}>
          {len} / {FIELD_MIN} chars{lenOk ? ' — ready' : ' minimum'}
        </p>
      </div>

      {/* Status selector */}
      <div className="space-y-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted px-1">
          Mark the thesis
        </p>
        <div className="grid grid-cols-1 gap-2">
          {STATUS_OPTIONS.map((opt) => {
            const selected = status === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setStatus(opt.id)}
                className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  selected ? opt.toneSelected : opt.tone
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="uppercase tracking-[0.14em]">
                    {checkinStatusLabel(opt.id)}
                  </span>
                </div>
                <p className="text-[11px] font-normal mt-0.5 leading-snug opacity-90 normal-case tracking-normal">
                  {opt.helper}
                </p>
              </button>
            );
          })}
        </div>
        <p className="text-[10px] text-text-faint italic leading-snug px-1">
          Your call, not the app&apos;s. A thesis can stay &ldquo;still holds&rdquo; through a 15% drawdown if nothing has actually been falsified.
        </p>
      </div>

      {/* Submit */}
      <motion.button
        onClick={handleSubmit}
        disabled={!canSubmit}
        whileHover={canSubmit ? { scale: 1.01, y: -1 } : undefined}
        whileTap={canSubmit ? { scale: 0.98 } : undefined}
        className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold transition-all ${
          canSubmit
            ? 'bg-gradient-to-r from-electric to-electric/80 text-dark-950 shadow-[0_8px_32px_-8px_rgba(56,189,248,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.7)] cursor-pointer'
            : 'bg-dark-800/60 border border-white/[0.06] text-text-muted cursor-not-allowed'
        }`}
      >
        {canSubmit ? (
          <>
            <Activity className="w-4 h-4" />
            Save check-in
            <ArrowRight className="w-4 h-4" />
          </>
        ) : (
          <>
            <Lock className="w-3.5 h-3.5" />
            {lockReason}
          </>
        )}
      </motion.button>

      <p className="text-[10px] text-text-faint italic text-center leading-snug px-4">
        Saved as a <span className="text-text-muted not-italic font-semibold">thesis_checkin</span> in your Journal, linked to your buy thesis. The chain — buy, check-ins, exit — surfaces on the track-record card later.
      </p>
    </div>
  );
}

function priorChipTone(s: CheckinStatus | undefined): string {
  switch (s) {
    case 'still_holds':
      return 'border-green/30 bg-green/[0.08] text-green';
    case 'fraying':
      return 'border-warm/30 bg-warm/[0.08] text-warm';
    case 'breaking':
      return 'border-red/30 bg-red/[0.08] text-red';
    default:
      return 'border-white/[0.06] bg-dark-800/40 text-text-muted';
  }
}
