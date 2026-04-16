import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, Zap, Lightbulb, Sparkles } from 'lucide-react';
import type { DrillStep as DrillStepType } from '../../data/lessons/types';
import {
  EASE_CINEMATIC,
  EASE_GAME_IN,
  SPRING_CELEBRATION,
  SPRING_FLUID,
  SPRING_TACTILE,
} from '../../lib/motion';

interface Props {
  step: DrillStepType;
  onDone: (score: { correct: number; total: number }) => void;
}

type Phase = 'running' | 'reveal' | 'done';

export default function DrillStep({ step, onDone }: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('running');
  const [picked, setPicked] = useState<'left' | 'right' | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const total = step.prompts.length;
  const prompt = step.prompts[index];
  const isCorrect = picked !== null && picked === prompt?.correct;

  function handlePick(side: 'left' | 'right') {
    if (phase !== 'running' || picked !== null) return;
    setPicked(side);
    setPhase('reveal');
    if (side === prompt.correct) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (index < total - 1) {
      setIndex((i) => i + 1);
      setPicked(null);
      setPhase('running');
    } else {
      setPhase('done');
    }
  }

  function handleContinue() {
    onDone({ correct: correctCount, total });
  }

  if (phase === 'done') {
    const ratio = total > 0 ? correctCount / total : 0;
    const headline =
      correctCount === total
        ? 'Perfect drill.'
        : correctCount >= total - 1
          ? 'Sharp instincts.'
          : correctCount >= total / 2
            ? 'Getting the feel.'
            : 'Keep building the intuition.';

    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE_CINEMATIC }}
        className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/25 to-transparent" />
        <div className="flex items-center gap-2">
          <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
            {step.topic}
          </span>
        </div>

        <div className="text-center space-y-3 py-2">
          <div className="flex items-baseline justify-center gap-1.5">
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={SPRING_CELEBRATION}
              className="display-num text-5xl text-text-primary leading-none"
            >
              {correctCount}
            </motion.span>
            <span className="display-num text-2xl text-text-muted leading-none">/ {total}</span>
          </div>
          {/* Segmented score gauge */}
          <div className="mx-auto max-w-xs flex items-stretch gap-[3px] h-2">
            {Array.from({ length: total }).map((_, i) => {
              const lit = i < correctCount;
              return (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0.3, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.05, ease: EASE_CINEMATIC }}
                  className={`flex-1 rounded-[2px] origin-bottom ${
                    lit
                      ? 'bg-gradient-to-t from-green/90 to-green-light shadow-[0_0_6px_rgba(74,222,128,0.4)]'
                      : 'bg-dark-700'
                  }`}
                />
              );
            })}
          </div>
          <p className="text-sm text-text-secondary">{headline}</p>
          <p className="text-[11px] text-text-faint display-num">
            {Math.round(ratio * 100)}% accuracy
          </p>
        </div>

        <div className="rounded-xl border border-warm/20 bg-warm/5 p-4 flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
          <p className="text-sm text-text-secondary leading-relaxed">{step.takeaway}</p>
        </div>

        <motion.button
          onClick={handleContinue}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          transition={SPRING_TACTILE}
          className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)]"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden">
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
            {step.topic}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-dark-900/50 border border-white/[0.04]">
          <Zap className="w-3 h-3 text-amber" />
          <span className="display-num text-[11px] font-semibold text-text-muted">
            {index + 1}
            <span className="text-text-faint"> / {total}</span>
          </span>
        </div>
      </div>

      {/* Segmented progress gauge */}
      <div className="flex items-stretch gap-[3px] h-1.5">
        {step.prompts.map((_, i) => {
          let tone = 'bg-dark-700';
          if (i < index) tone = 'bg-accent/80';
          else if (i === index) {
            tone =
              phase === 'reveal'
                ? isCorrect
                  ? 'bg-green shadow-[0_0_6px_rgba(34,197,94,0.5)]'
                  : 'bg-red shadow-[0_0_6px_rgba(239,68,68,0.5)]'
                : 'bg-accent-light';
          }
          return (
            <motion.div
              key={i}
              animate={{}}
              transition={{ duration: 0.25 }}
              className={`flex-1 rounded-[2px] transition-colors duration-300 ${tone}`}
            />
          );
        })}
      </div>

      {/* Intro on first prompt only */}
      {index === 0 && phase === 'running' && (
        <p className="text-sm text-text-secondary leading-relaxed">{step.intro}</p>
      )}

      {/* Current prompt */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease: EASE_GAME_IN }}
          className="space-y-4"
        >
          {prompt.setup && (
            <p className="text-base font-semibold text-text-primary text-center">
              {prompt.setup}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(['left', 'right'] as const).map((side) => {
              const choice = prompt[side];
              const isPicked = picked === side;
              const isThisCorrect = prompt.correct === side;
              const showResult = phase === 'reveal';
              const pickedWrong = showResult && isPicked && !isThisCorrect;

              // Celebrate correct on reveal with a subtle pulse ring.
              const celebrate = showResult && isThisCorrect;

              return (
                <motion.button
                  key={side}
                  onClick={() => handlePick(side)}
                  disabled={phase !== 'running'}
                  aria-label={`${choice.label}${choice.sublabel ? ` — ${choice.sublabel}` : ''}`}
                  whileHover={
                    phase === 'running' ? { y: -2, scale: 1.015 } : undefined
                  }
                  whileTap={phase === 'running' ? { scale: 0.97 } : undefined}
                  animate={
                    pickedWrong ? { x: [0, -5, 5, -3, 3, 0] } : undefined
                  }
                  transition={
                    pickedWrong
                      ? { duration: 0.4, ease: EASE_CINEMATIC }
                      : SPRING_FLUID
                  }
                  className={`relative rounded-xl border p-4 text-left min-h-[120px] flex flex-col justify-between overflow-hidden ${
                    celebrate
                      ? 'border-green/60 bg-gradient-to-br from-green/[0.14] to-green/[0.03]'
                      : pickedWrong
                        ? 'border-red/60 bg-gradient-to-br from-red/[0.12] to-red/[0.02]'
                        : showResult
                          ? 'border-border bg-dark-700 opacity-40'
                          : 'border-border bg-dark-700 hover:border-accent/40 hover:bg-dark-600 cursor-pointer'
                  }`}
                >
                  {/* Celebrate: subtle pulse ring on the correct card */}
                  {celebrate && (
                    <motion.span
                      aria-hidden
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.1, times: [0, 0.3, 1], ease: 'easeOut' }}
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        boxShadow: '0 0 0 0 rgba(74, 222, 128, 0.45)',
                        animation: 'pulse-ring 1.1s ease-out',
                        ['--pulse-color' as string]: 'rgba(74, 222, 128, 0.45)',
                      }}
                    />
                  )}

                  <div className="space-y-1 relative z-10">
                    <p className="text-sm font-semibold text-text-primary leading-snug">
                      {choice.label}
                    </p>
                    {choice.sublabel && (
                      <p className="text-xs text-text-muted leading-snug">{choice.sublabel}</p>
                    )}
                  </div>
                  {showResult && isThisCorrect && (
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ ...SPRING_CELEBRATION, delay: 0.08 }}
                      className="flex items-center gap-1.5 mt-2 relative z-10"
                    >
                      <div className="w-5 h-5 rounded-full bg-green/20 border border-green/40 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-light" strokeWidth={3} />
                      </div>
                      <span className="text-xs font-semibold text-green-light">Right</span>
                    </motion.div>
                  )}
                  {pickedWrong && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={SPRING_TACTILE}
                      className="flex items-center gap-1.5 mt-2 relative z-10"
                    >
                      <div className="w-5 h-5 rounded-full bg-red/20 border border-red/40 flex items-center justify-center">
                        <X className="w-3 h-3 text-red-light" strokeWidth={3} />
                      </div>
                      <span className="text-xs font-semibold text-red-light">Not this one</span>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Flash message + next button on reveal */}
          <AnimatePresence>
            {phase === 'reveal' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_GAME_IN, delay: 0.1 }}
                className="space-y-4"
              >
                <div
                  className={`rounded-xl border p-3.5 flex items-start gap-2.5 ${
                    isCorrect
                      ? 'border-green/25 bg-green/[0.06]'
                      : 'border-border bg-dark-900/60'
                  }`}
                >
                  {isCorrect ? (
                    <Sparkles className="w-4 h-4 text-green-light shrink-0 mt-0.5" />
                  ) : (
                    <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {prompt.flash}
                  </p>
                </div>
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  transition={SPRING_TACTILE}
                  className="w-full py-3 rounded-xl border border-border-light/40 bg-dark-700 hover:bg-dark-600 text-text-primary text-sm font-semibold cursor-pointer flex items-center justify-center gap-2"
                >
                  {index < total - 1 ? 'Next' : 'See Results'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
