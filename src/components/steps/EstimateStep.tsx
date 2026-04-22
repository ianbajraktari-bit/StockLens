import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Lightbulb, Sparkles } from 'lucide-react';
import type { EstimateStep as EstimateStepType } from '../../data/lessons/types';
import { ConfettiBurst } from '../../components/fx/ConfettiBurst';
import { ScreenFlash } from '../../components/fx/ScreenFlash';
import { useTilt } from '../../hooks/useTilt';
import {
  EASE_CINEMATIC,
  EASE_GAME_IN,
  SPRING_CELEBRATION,
  SPRING_TACTILE,
} from '../../lib/motion';

interface Props {
  step: EstimateStepType;
  onDone: (score: { correct: number; total: number }) => void;
}

type Verdict = 'nailed' | 'close' | 'off';

function judge(input: number, answer: number, tolerance: number): Verdict {
  const dist = Math.abs(input - answer);
  if (dist <= tolerance) return 'nailed';
  if (dist <= tolerance * 2) return 'close';
  return 'off';
}

const VERDICT_MAP: Record<
  Verdict,
  { label: string; tone: string; border: string; bg: string; flashTone: 'green' | 'red' | 'accent' }
> = {
  nailed: {
    label: 'Nailed it',
    tone: 'text-green-light',
    border: 'border-green/50',
    bg: 'bg-gradient-to-br from-green/[0.12] to-green/[0.02]',
    flashTone: 'green',
  },
  close: {
    label: 'Close',
    tone: 'text-amber',
    border: 'border-amber/50',
    bg: 'bg-gradient-to-br from-amber/[0.1] to-amber/[0.02]',
    flashTone: 'accent',
  },
  off: {
    label: 'Not quite',
    tone: 'text-red-light',
    border: 'border-red/50',
    bg: 'bg-gradient-to-br from-red/[0.1] to-red/[0.02]',
    flashTone: 'red',
  },
};

/* ── Bullseye SVG ── */
function Bullseye({
  verdict,
  proximityPct,
}: {
  verdict: Verdict;
  proximityPct: number;
}) {
  // Center of the bullseye
  const cx = 100;
  const cy = 100;
  // Rings: 3 concentric circles (radii 30, 60, 90)
  const rings = [90, 60, 30];
  const ringColors: Record<Verdict, string[]> = {
    nailed: [
      'rgba(34, 197, 94, 0.08)',
      'rgba(34, 197, 94, 0.15)',
      'rgba(34, 197, 94, 0.25)',
    ],
    close: [
      'rgba(245, 158, 11, 0.08)',
      'rgba(245, 158, 11, 0.12)',
      'rgba(245, 158, 11, 0.2)',
    ],
    off: [
      'rgba(239, 68, 68, 0.08)',
      'rgba(239, 68, 68, 0.12)',
      'rgba(239, 68, 68, 0.18)',
    ],
  };

  const ringStrokes: Record<Verdict, string> = {
    nailed: 'rgba(34, 197, 94, 0.3)',
    close: 'rgba(245, 158, 11, 0.25)',
    off: 'rgba(239, 68, 68, 0.2)',
  };

  const dotColors: Record<Verdict, string> = {
    nailed: '#22c55e',
    close: '#f59e0b',
    off: '#ef4444',
  };

  // Dot position: center = perfect, farther out = worse
  // proximityPct: 1 = exact match, 0 = very far
  const dotDistance = (1 - proximityPct) * 85; // max distance from center
  // Place at a slight angle for visual interest
  const angle = -35 * (Math.PI / 180);
  const dotX = cx + Math.cos(angle) * dotDistance;
  const dotY = cy + Math.sin(angle) * dotDistance;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      role="img"
      aria-label={`Accuracy bullseye showing ${verdict} result`}
    >
      {/* Concentric rings */}
      {rings.map((r, i) => (
        <motion.circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          fill={ringColors[verdict][i]}
          stroke={ringStrokes[verdict]}
          strokeWidth={1}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.15 + i * 0.1,
            ease: EASE_CINEMATIC,
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* Crosshairs */}
      <line
        x1={cx}
        y1={cy - 95}
        x2={cx}
        y2={cy + 95}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={1}
      />
      <line
        x1={cx - 95}
        y1={cy}
        x2={cx + 95}
        y2={cy}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={1}
      />

      {/* User's answer dot */}
      <motion.circle
        cx={dotX}
        cy={dotY}
        r={6}
        fill={dotColors[verdict]}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.6,
          ...SPRING_CELEBRATION,
        }}
        style={{ transformOrigin: `${dotX}px ${dotY}px` }}
      />

      {/* Glow ring around dot */}
      <motion.circle
        cx={dotX}
        cy={dotY}
        r={12}
        fill="none"
        stroke={dotColors[verdict]}
        strokeWidth={1.5}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 1],
          opacity: [0, 0.6, 0.25],
        }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: 'easeOut',
        }}
        style={{ transformOrigin: `${dotX}px ${dotY}px` }}
      />
    </svg>
  );
}

/* ── Rolling number animation ── */
function RollingNumber({
  value,
  unit,
  className,
}: {
  value: number;
  unit?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-baseline overflow-hidden ${className ?? ''}`}>
      <motion.span
        className="display-num font-bold inline-block"
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: [48, -12, 4, 0], opacity: [0, 1, 1, 1] }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.5, 0.8, 1],
        }}
      >
        {value}
        {unit ?? ''}
      </motion.span>
    </span>
  );
}

export default function EstimateStep({ step, onDone }: Props) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref: tiltRef, onMouseMove: handleTiltMove, onMouseLeave: handleTiltLeave } = useTilt(8);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
  const canSubmit = !submitted && !Number.isNaN(parsed);

  function handleSubmit() {
    if (!canSubmit) return;
    const v = judge(parsed, step.answer, step.tolerance);
    setVerdict(v);
    setSubmitted(true);
    setShowFlash(true);
    if (v === 'nailed') {
      setShowConfetti(true);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  }

  function handleContinue() {
    onDone({
      correct: verdict === 'nailed' || verdict === 'close' ? 1 : 0,
      total: 1,
    });
  }

  // Proximity: 1 = exact, 0 = far
  const range = step.tolerance * 4;
  const dist = submitted ? Math.abs(parsed - step.answer) : 0;
  const proximityPct = submitted ? Math.max(0, Math.min(1, 1 - dist / range)) : 0;

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <ConfettiBurst show={showConfetti} />
      <ScreenFlash
        show={showFlash}
        tone={verdict ? VERDICT_MAP[verdict].flashTone : 'green'}
      />

      {/* Header */}
      <div className="flex items-center gap-2">
        <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
        <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
          {step.topic}
        </span>
      </div>

      {/* Context */}
      <div className="space-y-3">
        {step.context.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm text-text-secondary leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Question */}
      <p className="text-base font-semibold text-text-primary leading-snug">
        {step.question}
      </p>

      {/* Hint */}
      {step.hint && !submitted && (
        <p className="text-[11px] text-text-muted italic flex items-center gap-1.5">
          <Target className="w-3 h-3 text-text-faint" />
          {step.hint}
        </p>
      )}

      {/* Input with tilt */}
      <div className="space-y-3">
        <div
          ref={tiltRef}
          onMouseMove={handleTiltMove}
          onMouseLeave={handleTiltLeave}
          className="tilt-card"
        >
          <motion.div
            animate={
              submitted && verdict === 'off'
                ? { x: [0, -6, 6, -3, 3, 0] }
                : undefined
            }
            transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
            className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
              submitted && verdict
                ? `border-2 ${VERDICT_MAP[verdict].border} ${VERDICT_MAP[verdict].bg}`
                : 'border-2 border-transparent'
            }`}
            style={
              !submitted && inputFocused
                ? {
                    borderImage:
                      'linear-gradient(135deg, rgba(99,102,241,0.6), rgba(129,140,248,0.3), rgba(99,102,241,0.6)) 1',
                    animation: 'glow-border-spin 3s linear infinite',
                  }
                : !submitted
                  ? { borderColor: 'rgba(255,255,255,0.06)' }
                  : undefined
            }
          >
            {/* Animated gradient border overlay when focused */}
            {!submitted && inputFocused && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  boxShadow: [
                    '0 0 20px -4px rgba(99,102,241,0.3), inset 0 0 20px -8px rgba(99,102,241,0.15)',
                    '0 0 32px -4px rgba(129,140,248,0.4), inset 0 0 28px -8px rgba(129,140,248,0.2)',
                    '0 0 20px -4px rgba(99,102,241,0.3), inset 0 0 20px -8px rgba(99,102,241,0.15)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            <div className="relative bg-dark-900/60 backdrop-blur-sm rounded-xl">
              <input
                ref={inputRef}
                type="text"
                inputMode="decimal"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                disabled={submitted}
                placeholder="Type your answer"
                className="w-full bg-transparent px-5 py-4 text-xl sm:text-2xl font-bold text-text-primary placeholder:text-text-muted placeholder:text-base placeholder:font-normal focus:outline-none display-num"
              />
              {step.unit && value && (
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold text-text-secondary display-num pointer-events-none">
                  {step.unit}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reveal */}
      <AnimatePresence>
        {submitted && verdict && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_GAME_IN, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Comparison card with bullseye */}
            <div
              className={`relative rounded-xl border ${VERDICT_MAP[verdict].border} ${VERDICT_MAP[verdict].bg} p-4 overflow-hidden`}
            >
              {verdict === 'nailed' && (
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.3, 1.5],
                  }}
                  transition={{
                    duration: 1.2,
                    times: [0, 0.3, 1],
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 rounded-xl pointer-events-none border-2 border-green/40"
                />
              )}

              <div className="relative z-10">
                {/* You said vs Answer — with rolling number */}
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-text-muted uppercase tracking-[0.14em] font-semibold">
                      You said
                    </p>
                    <p className="display-num text-xl font-bold text-text-primary">
                      {parsed}
                      {step.unit ?? ''}
                    </p>
                  </div>

                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={SPRING_CELEBRATION}
                    className="flex items-center gap-1.5"
                  >
                    {verdict === 'nailed' ? (
                      <Sparkles className="w-4 h-4 text-green-light" />
                    ) : (
                      <Target className="w-4 h-4 text-text-muted" />
                    )}
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.12em] ${VERDICT_MAP[verdict].tone}`}
                    >
                      {VERDICT_MAP[verdict].label}
                    </span>
                  </motion.div>

                  <div className="space-y-0.5 text-right">
                    <p className="text-[10px] text-text-muted uppercase tracking-[0.14em] font-semibold">
                      Answer
                    </p>
                    <div className="text-xl font-bold text-accent-light overflow-hidden h-8 flex items-center justify-end">
                      <RollingNumber
                        value={step.answer}
                        unit={step.unit}
                        className="text-xl text-accent-light"
                      />
                    </div>
                  </div>
                </div>

                {/* Bullseye visualization */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-28 h-28 shrink-0">
                    <Bullseye verdict={verdict} proximityPct={proximityPct} />
                  </div>
                  <div className="flex-1 space-y-2">
                    {/* Proximity bar */}
                    <div className="relative h-1.5 rounded-full bg-dark-700/80 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${proximityPct * 100}%` }}
                        transition={{
                          duration: 0.8,
                          ease: EASE_CINEMATIC,
                          delay: 0.3,
                        }}
                        className={`h-full rounded-full ${
                          verdict === 'nailed'
                            ? 'bg-green shadow-[0_0_8px_rgba(34,197,94,0.5)]'
                            : verdict === 'close'
                              ? 'bg-amber shadow-[0_0_8px_rgba(245,158,11,0.4)]'
                              : 'bg-red/70'
                        }`}
                      />
                    </div>
                    <p className="text-[10px] text-text-faint display-num">
                      {dist === 0
                        ? 'Exact match'
                        : `Off by ${dist}${step.unit ?? ''}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reveal text */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-sm text-text-secondary leading-relaxed"
            >
              {step.reveal}
            </motion.p>

            {/* Takeaway */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="rounded-xl border border-warm/15 bg-gradient-to-br from-warm/[0.06] to-transparent p-4 flex items-start gap-2.5"
            >
              <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.takeaway}
              </p>
            </motion.div>

            {/* Continue */}
            <motion.button
              onClick={handleContinue}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-bold cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)] transition-shadow duration-300"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit button (pre-reveal) */}
      {!submitted && (
        <motion.button
          onClick={handleSubmit}
          disabled={!canSubmit}
          whileHover={canSubmit ? { scale: 1.015, y: -1 } : undefined}
          whileTap={canSubmit ? { scale: 0.97 } : undefined}
          transition={SPRING_TACTILE}
          className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
            canSubmit
              ? 'btn-glow bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)]'
              : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
          }`}
        >
          Check
        </motion.button>
      )}
    </div>
  );
}
