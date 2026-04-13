import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X, Lightbulb } from 'lucide-react';
import type { DecideStep as DecideStepType } from '../../data/lessons/types';

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
    <div className="rounded-2xl border border-border bg-dark-800/60 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
        <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">
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
      <p className="text-base font-semibold text-text-primary">{step.question}</p>

      {/* Options */}
      <div className="space-y-2">
        {step.options.map((opt, i) => {
          const isSelected = selected === i;
          const isThisCorrect = i === step.correctIndex;
          const showResult = submitted;
          return (
            <motion.button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={submitted}
              whileTap={!submitted ? { scale: 0.99 } : {}}
              className={`w-full text-left rounded-xl border p-4 transition-all ${
                showResult && isThisCorrect
                  ? 'border-green/60 bg-green/10'
                  : showResult && isSelected && !isThisCorrect
                    ? 'border-red/60 bg-red/10'
                    : showResult
                      ? 'border-border bg-dark-700 opacity-40'
                      : isSelected
                        ? 'border-accent/60 bg-accent/10 cursor-pointer'
                        : 'border-border bg-dark-700 hover:border-dark-400 hover:bg-dark-600 cursor-pointer'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                    showResult && isThisCorrect
                      ? 'bg-green'
                      : showResult && isSelected && !isThisCorrect
                        ? 'bg-red'
                        : isSelected
                          ? 'border-2 border-accent'
                          : 'border-2 border-dark-400'
                  }`}
                >
                  {showResult && isThisCorrect && <Check className="w-3 h-3 text-white" />}
                  {showResult && isSelected && !isThisCorrect && <X className="w-3 h-3 text-white" />}
                </div>
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {wrongNudge && (
              <div className="rounded-xl border border-red/30 bg-red/5 p-4">
                <p className="text-sm text-text-secondary leading-relaxed">{wrongNudge}</p>
              </div>
            )}

            <div className="rounded-xl border border-accent/30 bg-accent/5 p-4">
              <p className="text-sm text-text-primary leading-relaxed font-medium">
                {step.punchline}
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
        )}
      </AnimatePresence>

      {!submitted && (
        <motion.button
          onClick={handleSubmit}
          disabled={selected === null}
          whileHover={selected !== null ? { scale: 1.01 } : {}}
          whileTap={selected !== null ? { scale: 0.98 } : {}}
          className={`w-full py-3 rounded-xl font-semibold transition-all ${
            selected !== null
              ? 'bg-accent hover:bg-accent-light text-white cursor-pointer'
              : 'bg-dark-700 border border-border text-text-muted cursor-not-allowed opacity-50'
          }`}
        >
          Submit
        </motion.button>
      )}
    </div>
  );
}
