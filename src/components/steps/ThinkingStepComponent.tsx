import { useState } from 'react';
import { motion } from 'framer-motion';
import { PenLine, CheckCircle2, Lightbulb, ArrowRight } from 'lucide-react';
import type { ThinkingStepNew } from '../../data/lessons/types';

interface Props {
  step: ThinkingStepNew;
  onDone: (score: { correct: number; total: number }) => void;
}

export default function ThinkingStepComponent({ step, onDone }: Props) {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = text.trim().length >= 10;

  function handleSubmit() {
    if (!canSubmit) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-5"
      >
        <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-3">
          <div className="flex items-center gap-2">
            <PenLine className="w-4 h-4 text-accent-light" />
            <p className="text-sm font-semibold text-text-primary">Your answer</p>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">
            {text}
          </p>
        </div>

        <div className="rounded-2xl border border-warm/20 bg-dark-800/60 p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-warm" />
            <p className="text-sm font-semibold text-text-primary">Example strong answer</p>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{step.modelAnswer}</p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-3">
          <p className="text-xs text-text-muted font-semibold uppercase tracking-wide">
            Strong reasoning includes
          </p>
          <div className="space-y-2.5">
            {step.strongReasoningIncludes.map((criterion, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green mt-0.5 shrink-0" />
                <p className="text-sm text-text-secondary leading-relaxed">{criterion}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          onClick={() => onDone({ correct: 1, total: 1 })}
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
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-4">
        <div className="flex items-center gap-2">
          <PenLine className="w-4 h-4 text-accent-light" />
          <p className="text-sm font-semibold text-text-primary">Your turn</p>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{step.prompt}</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={step.placeholder}
          rows={4}
          autoFocus
          className="w-full rounded-xl border border-border bg-dark-900/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted resize-none focus:outline-none focus:border-accent/50"
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-text-muted">
            {text.trim().length < 10
              ? `${10 - text.trim().length} more characters`
              : 'Ready to submit'}
          </p>
          <motion.button
            onClick={handleSubmit}
            disabled={!canSubmit}
            whileHover={canSubmit ? { scale: 1.02 } : {}}
            whileTap={canSubmit ? { scale: 0.98 } : {}}
            className={`px-5 py-2 rounded-xl font-semibold text-sm transition-colors ${
              canSubmit
                ? 'bg-accent hover:bg-accent-light text-white cursor-pointer'
                : 'bg-dark-700 border border-border text-text-muted cursor-not-allowed opacity-50'
            }`}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
