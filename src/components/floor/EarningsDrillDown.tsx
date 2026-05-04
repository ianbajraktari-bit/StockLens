import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, FileSearch, Lock, Newspaper } from 'lucide-react';
import type { CompanyProfile } from '../../data/companies';
import type { WeekEvent } from '../../data/floor';

const FIELD_MIN = 30;

export const EARNINGS_HEADLINE_PROMPT =
  "What's the headline surprise — revenue, EPS, or guide? Be specific about magnitude and direction.";
export const EARNINGS_GUIDE_PROMPT =
  'What changed about the forward guide vs. last quarter, and how should it move your model?';
export const EARNINGS_MARKET_PROMPT =
  "What's the market over- or underweighting in this print? Where's the consensus wrong?";

const HEADLINE_PLACEHOLDER =
  "e.g., 'Revenue beat by 1.2%, but the real surprise is the FY guide raise — DM ARR growth re-accelerated to 12.8%.'";
const GUIDE_PLACEHOLDER =
  "e.g., 'Last quarter's guide implied a deceleration into H2; this one walks that back. My DCF should pull forward ~$300M of revenue.'";
const MARKET_PLACEHOLDER =
  "e.g., 'Sell-side is still anchored on Figma share-loss. They're underweighting Firefly enterprise traction in the call commentary.'";

interface Props {
  company: CompanyProfile;
  event: WeekEvent;
  week: number;
  onCancel: () => void;
  onSubmit: (input: {
    headline: string;
    guide: string;
    market: string;
  }) => void;
}

/**
 * Earnings drill-down — the structured-engagement gate that sits between
 * an earnings-week event and a trade decision. Three small required
 * fields, each targeting a different cognitive operation: read the print,
 * compare to prior guide, identify market mispricing. The friction is
 * the feature.
 */
export default function EarningsDrillDown({
  company,
  event,
  week,
  onCancel,
  onSubmit,
}: Props) {
  const [headline, setHeadline] = useState('');
  const [guide, setGuide] = useState('');
  const [market, setMarket] = useState('');

  const headlineLen = headline.trim().length;
  const guideLen = guide.trim().length;
  const marketLen = market.trim().length;

  const headlineOk = headlineLen >= FIELD_MIN;
  const guideOk = guideLen >= FIELD_MIN;
  const marketOk = marketLen >= FIELD_MIN;
  const canSubmit = headlineOk && guideOk && marketOk;

  // Microcopy on the locked Submit — name the first incomplete field.
  const lockReason = useMemo(() => {
    if (!headlineOk) {
      return `Write ${Math.max(0, FIELD_MIN - headlineLen)} more chars on the headline surprise`;
    }
    if (!guideOk) {
      return `Write ${Math.max(0, FIELD_MIN - guideLen)} more chars on the guide change`;
    }
    if (!marketOk) {
      return `Write ${Math.max(0, FIELD_MIN - marketLen)} more chars on the market mispricing`;
    }
    return '';
  }, [headlineOk, guideOk, marketOk, headlineLen, guideLen, marketLen]);

  function handleSubmit() {
    if (!canSubmit) return;
    onSubmit({
      headline: headline.trim(),
      guide: guide.trim(),
      market: market.trim(),
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
          <div className="w-12 h-12 rounded-xl bg-dark-800/60 border border-warm/30 flex items-center justify-center text-2xl">
            {company.emoji}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg font-bold text-text-primary tracking-tight">
                Read the print — {company.name}
              </h1>
              <span className="data-num text-[11px] text-accent-light font-bold px-1.5 py-0.5 rounded border border-accent/20 bg-accent/[0.06]">
                {company.ticker}
              </span>
              <span className="text-[9px] uppercase tracking-wide font-bold px-1.5 py-0.5 rounded bg-warm/10 border border-warm/25 text-warm">
                earnings · W{week + 1}
              </span>
            </div>
            <p className="text-[11px] text-text-muted mt-1">
              Three fields. Each one a different cognitive move. Trade comes after.
            </p>
          </div>
        </div>
      </div>

      {/* The print itself */}
      <div className="rounded-xl border border-warm/25 bg-gradient-to-br from-warm/[0.05] via-dark-800/50 to-dark-800/30 p-4 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <Newspaper className="w-3.5 h-3.5 text-warm" />
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-warm">
            The print
          </p>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{event.blurb}</p>
      </div>

      {/* Field 1 — headline surprise */}
      <EarningsField
        index={1}
        prompt={EARNINGS_HEADLINE_PROMPT}
        helper="What number actually moved the stock? Magnitude (in % or $) and direction matter — vague is fine here is not."
        value={headline}
        onChange={setHeadline}
        placeholder={HEADLINE_PLACEHOLDER}
        len={headlineLen}
        ok={headlineOk}
      />

      {/* Field 2 — guide change */}
      <EarningsField
        index={2}
        prompt={EARNINGS_GUIDE_PROMPT}
        helper="The print is one quarter; the guide is the next four. A flat guide after a beat is bearish. A walk-up after a miss is bullish."
        value={guide}
        onChange={setGuide}
        placeholder={GUIDE_PLACEHOLDER}
        len={guideLen}
        ok={guideOk}
      />

      {/* Field 3 — market mispricing */}
      <EarningsField
        index={3}
        prompt={EARNINGS_MARKET_PROMPT}
        helper="If consensus already had this number, there's no edge. The edge is in what the call commentary said that the model doesn't capture yet."
        value={market}
        onChange={setMarket}
        placeholder={MARKET_PLACEHOLDER}
        len={marketLen}
        ok={marketOk}
      />

      {/* Submit */}
      <motion.button
        onClick={handleSubmit}
        disabled={!canSubmit}
        whileHover={canSubmit ? { scale: 1.01, y: -1 } : undefined}
        whileTap={canSubmit ? { scale: 0.98 } : undefined}
        className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold transition-all ${
          canSubmit
            ? 'bg-gradient-to-r from-warm to-warm/80 text-dark-950 shadow-[0_8px_32px_-8px_rgba(245,158,11,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(245,158,11,0.7)] cursor-pointer'
            : 'bg-dark-800/60 border border-white/[0.06] text-text-muted cursor-not-allowed'
        }`}
      >
        {canSubmit ? (
          <>
            <FileSearch className="w-4 h-4" />
            Save earnings note
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
        Saved as an <span className="text-text-muted not-italic font-semibold">earnings_note</span> in your Journal. You can revisit this print later and write a fresh take — every interpretation is kept.
      </p>
    </div>
  );
}

function EarningsField({
  index,
  prompt,
  helper,
  value,
  onChange,
  placeholder,
  len,
  ok,
}: {
  index: number;
  prompt: string;
  helper: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  len: number;
  ok: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="rounded-xl border border-white/[0.06] bg-dark-800/40 p-4 space-y-1.5">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
          Field {index} of 3
        </p>
        <p className="text-sm text-text-primary leading-relaxed font-semibold">
          {prompt}
        </p>
        <p className="text-[11px] text-text-muted leading-relaxed">{helper}</p>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-dark-800/60 border border-white/[0.08] text-text-primary text-sm leading-relaxed focus:outline-none focus:border-warm/40 placeholder:text-text-faint resize-y"
        style={{ fontSize: '16px' }}
      />
      <p
        className={`text-[11px] px-1 ${ok ? 'text-green' : 'text-text-muted'}`}
      >
        {len} / {FIELD_MIN} chars{ok ? ' — ready' : ' minimum'}
      </p>
    </div>
  );
}
