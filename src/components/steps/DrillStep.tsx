import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, Zap, Lightbulb } from 'lucide-react';
import type { DrillStep as DrillStepType } from '../../data/lessons/types';

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
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-border bg-dark-800/60 p-6 space-y-5"
      >
        <div className="flex items-center gap-2">
          <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">
            {step.topic}
          </span>
        </div>

        <div className="text-center space-y-2 py-4">
          <p className="text-4xl font-bold text-text-primary">
            {correctCount}<span className="text-text-muted">/{total}</span>
          </p>
          <p className="text-sm text-text-secondary">
            {correctCount === total
              ? 'Perfect drill.'
              : correctCount >= total - 1
                ? 'Sharp instincts.'
                : correctCount >= total / 2
                  ? 'Getting the feel.'
                  : 'Keep building the intuition.'}
          </p>
        </div>

        <div className="rounded-xl border border-warm/20 bg-warm/5 p-4 flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
          <p className="text-sm text-text-secondary leading-relaxed">{step.takeaway}</p>
        </div>

        <motion.button
          onClick={handleContinue}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-dark-800/60 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">
            {step.topic}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-amber" />
          <span className="text-xs font-semibold text-text-muted tabular-nums">
            {index + 1}/{total}
          </span>
        </div>
      </div>

      {/* Drill progress dots */}
      <div className="flex items-center gap-1.5">
        {step.prompts.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i < index
                ? 'bg-accent'
                : i === index
                  ? phase === 'reveal'
                    ? isCorrect
                      ? 'bg-green'
                      : 'bg-red'
                    : 'bg-accent-light'
                  : 'bg-dark-600'
            }`}
          />
        ))}
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
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {prompt.setup && (
            <p className="text-base font-semibold text-text-primary text-center">
              {prompt.setup}
            </p>
          )}

          <div className="grid grid-cols-2 gap-3">
            {(['left', 'right'] as const).map((side) => {
              const choice = prompt[side];
              const isPicked = picked === side;
              const isThisCorrect = prompt.correct === side;
              const showResult = phase === 'reveal';
              return (
                <motion.button
                  key={side}
                  onClick={() => handlePick(side)}
                  disabled={phase !== 'running'}
                  whileTap={phase === 'running' ? { scale: 0.97 } : {}}
                  className={`rounded-xl border p-4 text-left transition-all min-h-[120px] flex flex-col justify-between ${
                    showResult && isThisCorrect
                      ? 'border-green/60 bg-green/10'
                      : showResult && isPicked && !isThisCorrect
                        ? 'border-red/60 bg-red/10'
                        : showResult
                          ? 'border-border bg-dark-700 opacity-40'
                          : 'border-border bg-dark-700 hover:border-dark-400 hover:bg-dark-600 cursor-pointer'
                  }`}
                >
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-text-primary leading-snug">
                      {choice.label}
                    </p>
                    {choice.sublabel && (
                      <p className="text-xs text-text-muted leading-snug">{choice.sublabel}</p>
                    )}
                  </div>
                  {showResult && isThisCorrect && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <Check className="w-3.5 h-3.5 text-green" />
                      <span className="text-xs font-semibold text-green">Right</span>
                    </div>
                  )}
                  {showResult && isPicked && !isThisCorrect && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <X className="w-3.5 h-3.5 text-red" />
                      <span className="text-xs font-semibold text-red">Not this one</span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Flash message + next button on reveal */}
          <AnimatePresence>
            {phase === 'reveal' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <p className="text-sm text-text-secondary leading-relaxed text-center px-2">
                  {prompt.flash}
                </p>
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl border border-border bg-dark-700 hover:bg-dark-600 text-text-primary text-sm font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
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
