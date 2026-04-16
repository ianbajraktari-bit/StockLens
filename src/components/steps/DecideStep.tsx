import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X, Lightbulb, Sparkles } from 'lucide-react';
import type { DecideStep as DecideStepType } from '../../data/lessons/types';
import {
  EASE_CINEMATIC,
  EASE_GAME_IN,
  SPRING_CELEBRATION,
  SPRING_FLUID,
  SPRING_TACTILE,
} from '../../lib/motion';

interface Props {
  step: DecideStepType;
  onDone: (score: { correct: number; total: number }) => void;
}

export default function DecideStep({ step, onDone }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selected === step.correctIndex;

  function handleSelect(i: number) {
    if (submitted) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
  }

  function handleContinue() {
    onDone({ correct: isCorrect ? 1 : 0, total: 1 });
  }

  const wrongNudge =
    submitted && !isCorrect && step.wrongNudges && selected !== null && selected < step.wrongNudges.length
      ? step.wrongNudges[selected]
      : null;

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      {/* Header */}
      <div className="flex items-center gap-2">
        <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
        <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
          {step.topic}
        </span>
      </div>

      {/* Context */}
      {step.context && (
        <div className="space-y-3">
          {step.context.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm text-text-secondary leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Question */}
      <p className="text-base font-semibold text-text-primary leading-snug">
        {step.question}
      </p>

      {/* Options */}
      <div className="space-y-2" role="radiogroup" aria-label={step.question}>
        {step.options.map((opt, i) => {
          const isSelected = selected === i;
          const isThisCorrect = i === step.correctIndex;
          const showResult = submitted;
          const celebrate = showResult && isThisCorrect;
          const pickedWrong = showResult && isSelected && !isThisCorrect;

          return (
            <motion.button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={submitted}
              role="radio"
              aria-checked={isSelected}
              whileHover={!submitted ? { y: -1, scale: 1.005 } : undefined}
              whileTap={!submitted ? { scale: 0.995 } : undefined}
              animate={pickedWrong ? { x: [0, -4, 4, -2, 2, 0] } : undefined}
              transition={
                pickedWrong
                  ? { duration: 0.35, ease: EASE_CINEMATIC }
                  : SPRING_FLUID
              }
              className={`relative w-full text-left rounded-2xl border p-4 overflow-hidden transition-all duration-300 ${
                celebrate
                  ? 'border-green/50 bg-gradient-to-br from-green/[0.1] via-green/[0.04] to-transparent shadow-[0_0_20px_-6px_rgba(34,197,94,0.3)]'
                  : pickedWrong
                    ? 'border-red/50 bg-gradient-to-br from-red/[0.1] via-red/[0.03] to-transparent'
                    : showResult
                      ? 'border-white/[0.03] bg-dark-700/40 opacity-40'
                      : isSelected
                        ? 'border-accent/50 bg-gradient-to-br from-accent/[0.12] to-accent/[0.03] cursor-pointer shadow-[0_0_20px_-6px_rgba(99,102,241,0.35)]'
                        : 'border-white/[0.06] bg-dark-700/60 hover:border-accent/30 hover:bg-dark-600/70 hover:shadow-[0_4px_16px_-6px_rgba(99,102,241,0.15)] cursor-pointer'
              }`}
            >
              {celebrate && (
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

              <div className="flex items-start gap-3 relative z-10">
                <motion.div
                  animate={
                    isSelected && !showResult
                      ? { scale: [1, 1.15, 1] }
                      : undefined
                  }
                  transition={SPRING_TACTILE}
                  className={`w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                    celebrate
                      ? 'bg-green border border-green'
                      : pickedWrong
                        ? 'bg-red border border-red'
                        : isSelected
                          ? 'border-2 border-accent bg-accent/30'
                          : 'border-2 border-dark-400'
                  }`}
                >
                  {celebrate && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  {pickedWrong && <X className="w-3 h-3 text-white" strokeWidth={3} />}
                  {isSelected && !showResult && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={SPRING_CELEBRATION}
                      className="w-2 h-2 rounded-full bg-accent-light"
                    />
                  )}
                </motion.div>
                <span className="text-sm text-text-primary leading-snug">{opt}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Reveal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_GAME_IN, delay: 0.1 }}
            className="space-y-3"
          >
            {wrongNudge && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="rounded-xl border border-red/25 bg-red/[0.06] p-4"
              >
                <p className="text-sm text-text-secondary leading-relaxed">{wrongNudge}</p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className={`rounded-xl border p-4 flex items-start gap-2.5 ${
                isCorrect
                  ? 'border-green/30 bg-gradient-to-br from-green/[0.08] to-transparent'
                  : 'border-accent/30 bg-gradient-to-br from-accent/[0.08] to-transparent'
              }`}
            >
              {isCorrect ? (
                <Sparkles className="w-4 h-4 text-green-light shrink-0 mt-0.5" />
              ) : (
                <div className="w-4 h-4 rounded-full bg-accent/20 border border-accent/40 shrink-0 mt-0.5 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-accent-light">!</span>
                </div>
              )}
              <p className="text-sm text-text-primary leading-relaxed font-medium">
                {step.punchline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="rounded-xl border border-warm/15 bg-gradient-to-br from-warm/[0.06] to-transparent p-4 flex items-start gap-2.5"
            >
              <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">{step.takeaway}</p>
            </motion.div>

            <motion.button
              onClick={handleContinue}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
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
          onClick={handleSubmit}
          disabled={selected === null}
          whileHover={selected !== null ? { scale: 1.015, y: -1 } : undefined}
          whileTap={selected !== null ? { scale: 0.97 } : undefined}
          transition={SPRING_TACTILE}
          className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
            selected !== null
              ? 'btn-glow bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)]'
              : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
          }`}
        >
          Submit
        </motion.button>
      )}
    </div>
  );
}
