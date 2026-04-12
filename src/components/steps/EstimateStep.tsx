import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, CheckCircle2, Lightbulb } from 'lucide-react';
import type { EstimateStep as EstimateStepType } from '../../data/lessons/types';

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

  const verdictCopy: Record<Verdict, { label: string; tone: string }> = {
    nailed: { label: 'Nailed it', tone: 'text-green' },
    close: { label: 'Close', tone: 'text-amber' },
    off: { label: 'Not quite', tone: 'text-red' },
  };

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
      <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
        {step.context}
      </p>

      {/* Question */}
      <p className="text-base font-semibold text-text-primary">{step.question}</p>

      {/* Hint */}
      {step.hint && !submitted && (
        <p className="text-xs text-text-muted italic">Hint: {step.hint}</p>
      )}

      {/* Input */}
      <div className="space-y-3">
        <div
          className={`relative rounded-xl border-2 transition-colors ${
            submitted
              ? verdict === 'nailed'
                ? 'border-green/60 bg-green/5'
                : verdict === 'close'
                  ? 'border-amber/60 bg-amber/5'
                  : 'border-red/60 bg-red/5'
              : 'border-border bg-dark-900/50 focus-within:border-accent/60'
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
            className="w-full bg-transparent px-5 py-4 text-2xl font-bold text-text-primary placeholder:text-text-muted placeholder:text-base placeholder:font-normal focus:outline-none tabular-nums"
          />
          {step.unit && value && (
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-text-secondary tabular-nums pointer-events-none">
              {step.unit}
            </span>
          )}
        </div>
      </div>

      {/* Reveal */}
      {submitted && verdict && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-dark-900/50 p-4">
            <div className="space-y-0.5">
              <p className="text-xs text-text-muted uppercase tracking-wide">You said</p>
              <p className="text-xl font-bold text-text-primary tabular-nums">
                {parsed}
                {step.unit ?? ''}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {verdict === 'nailed' && <CheckCircle2 className="w-4 h-4 text-green" />}
              {verdict !== 'nailed' && <Target className="w-4 h-4 text-text-muted" />}
              <span className={`text-xs font-semibold uppercase tracking-wide ${verdictCopy[verdict].tone}`}>
                {verdictCopy[verdict].label}
              </span>
            </div>
            <div className="space-y-0.5 text-right">
              <p className="text-xs text-text-muted uppercase tracking-wide">Answer</p>
              <p className="text-xl font-bold text-accent-light tabular-nums">
                {step.answer}
                {step.unit ?? ''}
              </p>
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">{step.reveal}</p>

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

      {!submitted && (
        <motion.button
          onClick={handleSubmit}
          disabled={!canSubmit}
          whileHover={canSubmit ? { scale: 1.01 } : {}}
          whileTap={canSubmit ? { scale: 0.98 } : {}}
          className={`w-full py-3 rounded-xl font-semibold transition-all ${
            canSubmit
              ? 'bg-accent hover:bg-accent-light text-white cursor-pointer'
              : 'bg-dark-600 text-text-muted cursor-not-allowed'
          }`}
        >
          Check
        </motion.button>
      )}
    </div>
  );
}
