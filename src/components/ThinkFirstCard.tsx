import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ChevronDown, Check } from 'lucide-react';

interface ThinkFirstCardProps {
  questionId: string;
  question: string;
  hint?: string;
  savedAnswer?: string;
  onAnswer: (questionId: string, answer: string) => void;
  children: React.ReactNode;
}

export default function ThinkFirstCard({
  questionId,
  question,
  hint,
  savedAnswer,
  onAnswer,
  children,
}: ThinkFirstCardProps) {
  const [answer, setAnswer] = useState(savedAnswer || '');
  const [revealed, setRevealed] = useState(!!savedAnswer);
  const [submitted, setSubmitted] = useState(!!savedAnswer);

  function handleSubmit() {
    if (answer.trim().length < 3) return;
    setSubmitted(true);
    onAnswer(questionId, answer.trim());
  }

  function handleReveal() {
    setRevealed(true);
  }

  return (
    <div className="space-y-4">
      {/* Question prompt */}
      <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
            <Brain className="w-4 h-4 text-accent-light" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-1">
              Think first
            </p>
            <p className="text-base text-text-primary font-medium leading-relaxed">
              {question}
            </p>
            {hint && (
              <p className="text-sm text-text-muted mt-1 italic">{hint}</p>
            )}
          </div>
        </div>

        {!submitted && (
          <div className="mt-4 space-y-3">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your thinking here..."
              className="w-full bg-dark-700 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 resize-none leading-relaxed"
              rows={3}
            />
            <button
              onClick={handleSubmit}
              disabled={answer.trim().length < 3}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-accent/20 text-accent-light border border-accent/30 hover:bg-accent/30 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit my thinking
            </button>
          </div>
        )}

        {submitted && !revealed && (
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2 text-green text-sm">
              <Check className="w-4 h-4" />
              <span>Your answer recorded</span>
            </div>
            <button
              onClick={handleReveal}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-dark-700 text-text-primary border border-border hover:border-dark-400 transition-all cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" />
              Reveal the analysis
            </button>
          </div>
        )}

        {submitted && revealed && (
          <div className="mt-3 pt-3 border-t border-accent/10">
            <p className="text-xs text-text-muted mb-1">Your answer:</p>
            <p className="text-sm text-text-secondary italic">"{answer}"</p>
          </div>
        )}
      </div>

      {/* Revealed content */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
