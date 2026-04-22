import { TrendingUp, TrendingDown } from 'lucide-react';

/**
 * TickerBar — atmospheric running ticker that reinforces curriculum
 * concepts in fintech-terminal format. The deltas are stylistic
 * (not real market data) and present investing principles visually.
 *
 * Paired gains/losses map to pedagogy:
 *   + concepts that build wealth (moats, margins, recurring rev)
 *   − concepts that destroy it (debt, bias, churn)
 */

type Tape = { label: string; delta: string; up: boolean };

const DEFAULT_TAPES: Tape[] = [
  { label: 'MARGINS',       delta: '+18.2%', up: true  },
  { label: 'DEBT LOAD',     delta: '-6.4%',  up: false },
  { label: 'RECURRING REV', delta: '+24.1%', up: true  },
  { label: 'MOAT STRENGTH', delta: '+11.7%', up: true  },
  { label: 'CHURN',         delta: '-8.9%',  up: false },
  { label: 'CASH FLOW',     delta: '+15.3%', up: true  },
  { label: 'BIAS EXPOSURE', delta: '-4.2%',  up: false },
  { label: 'VALUATION',     delta: '+3.1%',  up: true  },
  { label: 'EXPECTATIONS',  delta: '+7.5%',  up: true  },
  { label: 'CONCENTRATION', delta: '-2.8%',  up: false },
  { label: 'COMPOUNDING',   delta: '+32.0%', up: true  },
  { label: 'FEES',          delta: '-1.6%',  up: false },
];

export function TickerBar({
  tapes = DEFAULT_TAPES,
  className = '',
}: {
  tapes?: Tape[];
  className?: string;
}) {
  // Duplicate once so the -50% translate loop is seamless
  const sequence = [...tapes, ...tapes];

  return (
    <div
      className={`ticker-viewport relative py-2 ${className}`}
      aria-hidden="true"
    >
      <div className="ticker-track">
        {sequence.map((t, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider ${
              t.up ? 'tape-up' : 'tape-down'
            }`}
          >
            <span className="text-text-muted/80">{t.label}</span>
            {t.up ? (
              <TrendingUp className="w-3 h-3 chip-arrow" />
            ) : (
              <TrendingDown className="w-3 h-3 chip-arrow" />
            )}
            <span className="data-num text-[11px]">{t.delta}</span>
            <span className="text-white/10 ml-3">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TickerBar;
