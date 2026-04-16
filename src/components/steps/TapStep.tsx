import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Flag, X, Lightbulb, Sparkles } from 'lucide-react';
import type { TapStep as TapStepType } from '../../data/lessons/types';
import {
  EASE_CINEMATIC,
  EASE_GAME_IN,
  SPRING_CELEBRATION,
  SPRING_TACTILE,
  SPRING_FLUID,
} from '../../lib/motion';

interface Props {
  step: TapStepType;
  onDone: (score: { correct: number; total: number }) => void;
}

export default function TapStep({ step, onDone }: Props) {
  const [tapped, setTapped] = useState<Record<number, 'right' | 'wrong'>>({});
  const [lastTap, setLastTap] = useState<{ index: number; feedback: string; right: boolean } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const totalSignals = step.passage.reduce(
    (acc, seg) => acc + (seg.type === 'chip' && seg.signal ? 1 : 0),
    0
  );
  const foundSignals = Object.entries(tapped).filter(([i, v]) => {
    const seg = step.passage[Number(i)];
    return v === 'right' && seg.type === 'chip' && seg.signal;
  }).length;
  const wrongTaps = Object.values(tapped).filter((v) => v === 'wrong').length;

  const canFinish = foundSignals >= step.requiredSignals;
  const progressPct = step.requiredSignals > 0 ? foundSignals / step.requiredSignals : 0;

  function handleChipTap(index: number) {
    if (submitted || tapped[index]) return;
    const seg = step.passage[index];
    if (seg.type !== 'chip') return;
    const right = seg.signal;
    setTapped((prev) => ({ ...prev, [index]: right ? 'right' : 'wrong' }));
    setLastTap({ index, feedback: seg.feedback, right });
  }

  function handleFinish() {
    setSubmitted(true);
  }

  function handleContinue() {
    onDone({
      correct: foundSignals,
      total: totalSignals,
    });
  }

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/25 to-transparent" />
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
            {step.topic}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-dark-900/50 border border-white/[0.04]">
          <Flag className="w-3 h-3 text-amber" />
          <span className="display-num text-[11px] font-semibold text-text-muted">
            {foundSignals}
            <span className="text-text-faint"> / {step.requiredSignals}</span>
          </span>
        </div>
      </div>

      {/* Signal progress gauge */}
      <div className="flex items-stretch gap-[3px] h-1.5">
        {Array.from({ length: step.requiredSignals }).map((_, i) => {
          const lit = i < foundSignals;
          return (
            <motion.div
              key={i}
              animate={lit ? { scaleY: [1, 1.4, 1] } : undefined}
              transition={lit ? { duration: 0.25, ease: EASE_CINEMATIC } : undefined}
              className={`flex-1 rounded-[2px] transition-colors duration-300 ${
                lit
                  ? 'bg-amber shadow-[0_0_6px_rgba(245,158,11,0.5)]'
                  : 'bg-dark-700'
              }`}
            />
          );
        })}
      </div>

      {/* Intro */}
      <p className="text-sm text-text-secondary leading-relaxed">{step.intro}</p>

      {/* Passage */}
      <div className="rounded-xl border border-white/[0.05] bg-dark-900/40 backdrop-blur-sm p-5 leading-loose text-base text-text-primary">
        {step.passage.map((seg, i) => {
          if (seg.type === 'text') {
            return <span key={i}>{seg.value}</span>;
          }
          const state = tapped[i];
          const isUntapped = !state;
          const wasRight = state === 'right';
          const wasWrong = state === 'wrong';
          return (
            <motion.button
              key={i}
              onClick={() => handleChipTap(i)}
              disabled={submitted || !!state}
              aria-label={`${isUntapped ? 'Tap to check: ' : wasRight ? 'Flagged: ' : 'Not a flag: '}${seg.value}`}
              whileHover={isUntapped ? { y: -1, scale: 1.03 } : undefined}
              whileTap={isUntapped ? { scale: 0.96 } : undefined}
              animate={wasWrong ? { x: [0, -3, 3, -1.5, 1.5, 0] } : undefined}
              transition={
                wasWrong
                  ? { duration: 0.3, ease: EASE_CINEMATIC }
                  : SPRING_FLUID
              }
              className={`inline px-2.5 py-1 mx-0.5 rounded-lg font-medium transition-all duration-200 ${
                isUntapped
                  ? 'bg-dark-700/80 text-text-primary border-b-2 border-dotted border-accent/50 hover:bg-accent/[0.12] hover:border-accent hover:shadow-[0_2px_12px_-4px_rgba(99,102,241,0.3)] cursor-pointer'
                  : wasRight
                    ? 'bg-amber/15 text-amber border-b-2 border-amber shadow-[0_2px_8px_-3px_rgba(245,158,11,0.3)]'
                    : 'bg-dark-600/60 text-text-muted border-b-2 border-dark-500 line-through'
              }`}
            >
              {seg.value}
              {wasRight && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={SPRING_CELEBRATION}
                >
                  <Flag className="inline w-3 h-3 ml-1" />
                </motion.span>
              )}
              {wasWrong && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={SPRING_TACTILE}
                >
                  <X className="inline w-3 h-3 ml-1" />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Last tap feedback */}
      <AnimatePresence mode="wait">
        {lastTap && !submitted && (
          <motion.div
            key={lastTap.index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: EASE_GAME_IN }}
            className={`rounded-xl border p-3.5 flex items-start gap-2.5 ${
              lastTap.right
                ? 'border-amber/30 bg-gradient-to-br from-amber/[0.08] to-transparent'
                : 'border-border bg-dark-900/60'
            }`}
          >
            {lastTap.right ? (
              <Sparkles className="w-4 h-4 text-amber shrink-0 mt-0.5" />
            ) : (
              <X className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
            )}
            <p className="text-sm text-text-secondary leading-relaxed">{lastTap.feedback}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats */}
      {!submitted && (
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-text-muted">
            {foundSignals < step.requiredSignals
              ? `Find ${step.requiredSignals - foundSignals} more signal${step.requiredSignals - foundSignals === 1 ? '' : 's'}`
              : 'All signals found'}
          </span>
          <div className="flex items-center gap-3">
            {wrongTaps > 0 && (
              <span className="text-red/70 display-num">
                {wrongTaps} miss{wrongTaps === 1 ? '' : 'es'}
              </span>
            )}
            <span className="text-text-faint display-num">
              {Math.round(progressPct * 100)}%
            </span>
          </div>
        </div>
      )}

      {/* Reveal after finish */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_GAME_IN, delay: 0.1 }}
            className="space-y-3"
          >
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-sm text-text-secondary leading-relaxed"
            >
              {step.reveal}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="rounded-xl border border-warm/15 bg-gradient-to-br from-warm/[0.06] to-transparent p-4 flex items-start gap-2.5"
            >
              <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">{step.takeaway}</p>
            </motion.div>
            <motion.button
              onClick={handleContinue}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
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

      {!submitted && (
        <motion.button
          onClick={handleFinish}
          disabled={!canFinish}
          whileHover={canFinish ? { scale: 1.015, y: -1 } : undefined}
          whileTap={canFinish ? { scale: 0.97 } : undefined}
          transition={SPRING_TACTILE}
          className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
            canFinish
              ? 'btn-glow bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)]'
              : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
          }`}
        >
          {canFinish ? 'Done' : 'Keep looking'}
        </motion.button>
      )}
    </div>
  );
}
