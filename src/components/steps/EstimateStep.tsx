import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Lightbulb, Sparkles } from 'lucide-react';
import type { EstimateStep as EstimateStepType } from '../../data/lessons/types';
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

const VERDICT_MAP: Record<Verdict, { label: string; tone: string; border: string; bg: string; icon: string }> = {
  nailed: {
    label: 'Nailed it',
    tone: 'text-green-light',
    border: 'border-green/50',
    bg: 'bg-gradient-to-br from-green/[0.12] to-green/[0.02]',
    icon: 'green',
  },
  close: {
    label: 'Close',
    tone: 'text-amber',
    border: 'border-amber/50',
    bg: 'bg-gradient-to-br from-amber/[0.1] to-amber/[0.02]',
    icon: 'amber',
  },
  off: {
    label: 'Not quite',
    tone: 'text-red-light',
    border: 'border-red/50',
    bg: 'bg-gradient-to-br from-red/[0.1] to-red/[0.02]',
    icon: 'red',
  },
};

export default function EstimateStep({ step, onDone }: Props) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
  const canSubmit = !submitted && !Number.isNaN(parsed);

  function handleSubmit() {
    if (!canSubmit) return;
    setVerdict(judge(parsed, step.answer, step.tolerance));
    setSubmitted(true);
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

  // Proximity bar: visual distance between user answer and correct answer
  const range = step.tolerance * 4; // total visual range
  const dist = submitted ? Math.abs(parsed - step.answer) : 0;
  const proximityPct = submitted ? Math.max(0, Math.min(1, 1 - dist / range)) : 0;

  return (
    <div className="rounded-2xl border border-border bg-dark-800/60 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
        <span className="text-[11px] font-semibold text-accent-light uppercase tracking-[0.14em]">
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

      {/* Input */}
      <div className="space-y-3">
        <motion.div
          animate={
            submitted && verdict === 'off'
              ? { x: [0, -4, 4, -2, 2, 0] }
              : undefined
          }
          transition={{ duration: 0.35, ease: EASE_CINEMATIC }}
          className={`relative rounded-xl border-2 transition-colors overflow-hidden ${
            submitted && verdict
              ? `${VERDICT_MAP[verdict].border} ${VERDICT_MAP[verdict].bg}`
              : 'border-border bg-dark-900/50 focus-within:border-accent/60 focus-within:shadow-[0_0_16px_-8px_rgba(99,102,241,0.5)]'
          }`}
        >
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={submitted}
            placeholder="Type your answer"
            className="w-full bg-transparent px-5 py-4 text-xl sm:text-2xl font-bold text-text-primary placeholder:text-text-muted placeholder:text-base placeholder:font-normal focus:outline-none display-num"
          />
          {step.unit && value && (
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold text-text-secondary display-num pointer-events-none">
              {step.unit}
            </span>
          )}
        </motion.div>
      </div>

      {/* Reveal */}
      <AnimatePresence>
        {submitted && verdict && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_GAME_IN, delay: 0.1 }}
            className="space-y-4"
          >
            {/* You vs Answer comparison */}
            <div className={`relative rounded-xl border ${VERDICT_MAP[verdict].border} ${VERDICT_MAP[verdict].bg} p-4 overflow-hidden`}>
              {verdict === 'nailed' && (
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.1, times: [0, 0.3, 1], ease: 'easeOut' }}
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    animation: 'pulse-ring 1.1s ease-out',
                    ['--pulse-color' as string]: 'rgba(74, 222, 128, 0.45)',
                  }}
                />
              )}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <p className="text-[10px] text-text-muted uppercase tracking-[0.14em] font-semibold">You said</p>
                  <p className="display-num text-xl font-bold text-text-primary">
                    {parsed}{step.unit ?? ''}
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
                  <span className={`text-xs font-bold uppercase tracking-[0.12em] ${VERDICT_MAP[verdict].tone}`}>
                    {VERDICT_MAP[verdict].label}
                  </span>
                </motion.div>
                <div className="space-y-0.5 text-right">
                  <p className="text-[10px] text-text-muted uppercase tracking-[0.14em] font-semibold">Answer</p>
                  <p className="display-num text-xl font-bold text-accent-light">
                    {step.answer}{step.unit ?? ''}
                  </p>
                </div>
              </div>

              {/* Proximity bar */}
              <div className="relative mt-3 h-1.5 rounded-full bg-dark-700/80 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${proximityPct * 100}%` }}
                  transition={{ duration: 0.8, ease: EASE_CINEMATIC, delay: 0.2 }}
                  className={`h-full rounded-full ${
                    verdict === 'nailed'
                      ? 'bg-green shadow-[0_0_8px_rgba(34,197,94,0.5)]'
                      : verdict === 'close'
                        ? 'bg-amber shadow-[0_0_8px_rgba(245,158,11,0.4)]'
                        : 'bg-red/70'
                  }`}
                />
              </div>
              <p className="text-[10px] text-text-faint mt-1 text-center display-num">
                {dist === 0 ? 'Exact match' : `Off by ${dist}${step.unit ?? ''}`}
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-sm text-text-secondary leading-relaxed"
            >
              {step.reveal}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="rounded-xl border border-warm/20 bg-warm/[0.05] p-4 flex items-start gap-2.5"
            >
              <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">{step.takeaway}</p>
            </motion.div>

            <motion.button
              onClick={handleContinue}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)]"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted && (
        <motion.button
          onClick={handleSubmit}
          disabled={!canSubmit}
          whileHover={canSubmit ? { scale: 1.01 } : undefined}
          whileTap={canSubmit ? { scale: 0.97 } : undefined}
          transition={SPRING_TACTILE}
          className={`w-full py-3 rounded-xl font-semibold transition-colors ${
            canSubmit
              ? 'bg-accent hover:bg-accent-light text-white cursor-pointer shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)]'
              : 'bg-dark-700 border border-border text-text-muted cursor-not-allowed opacity-50'
          }`}
        >
          Check
        </motion.button>
      )}
    </div>
  );
}
