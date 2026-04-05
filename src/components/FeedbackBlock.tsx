import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Info, Lightbulb, MessageCircle, ChevronDown } from 'lucide-react';
import type { QuizQuestion } from '../data/lessons';

interface FeedbackBlockProps {
  question: QuizQuestion;
  selectedIndex: number;
  onContinue: () => void;
  isLast: boolean;
  gutCheckPick?: number | null;
}

export default function FeedbackBlock({ question, selectedIndex, onContinue, isLast, gutCheckPick }: FeedbackBlockProps) {
  const isCorrect = selectedIndex === question.correctIndex;
  const hasPunchline = !!question.punchline;
  const [showDetails, setShowDetails] = useState(false);
  const gutReflection = gutCheckPick != null && question.gutCheck?.reflections
    ? question.gutCheck.reflections[gutCheckPick]
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Gut check reflection */}
      {gutReflection && (
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-accent-light" />
            <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">Your Gut Instinct</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{gutReflection}</p>
        </div>
      )}

      {/* Result banner */}
      <div className={`rounded-xl border p-4 ${
        isCorrect
          ? 'border-green/30 bg-green/10'
          : 'border-red/30 bg-red/10'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          {isCorrect
            ? <CheckCircle2 className="w-5 h-5 text-green" />
            : <XCircle className="w-5 h-5 text-red" />
          }
          <span className={`font-semibold ${isCorrect ? 'text-green' : 'text-red'}`}>
            {isCorrect ? 'Correct!' : 'Not quite'}
          </span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {hasPunchline ? question.punchline : question.explanation}
        </p>
      </div>

      {/* Collapsible details — only when punchline exists */}
      {hasPunchline && (
        <div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
            {showDetails ? 'Hide details' : 'See why'}
          </button>
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-3">
                  {/* Full explanation */}
                  <div className="rounded-lg border border-border bg-dark-800 p-3">
                    <p className="text-sm text-text-secondary leading-relaxed">{question.explanation}</p>
                  </div>

                  {/* Why wrong options are weaker */}
                  <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Why the other options are weaker</p>
                  {question.wrongExplanations.map((exp, i) => {
                    if (!exp) return null;
                    const wasSelected = i === selectedIndex;
                    return (
                      <div key={i} className={`flex items-start gap-2 rounded-lg border p-3 ${
                        wasSelected ? 'border-red/20 bg-red/5' : 'border-border bg-dark-800'
                      }`}>
                        <Info className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                        <p className="text-sm text-text-secondary">
                          <span className={`font-medium ${wasSelected ? 'text-red/80' : 'text-text-muted'}`}>"{question.options[i]}"</span> — {exp}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Legacy full display — when no punchline (other lessons) */}
      {!hasPunchline && (
        <div className="space-y-2">
          <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Why the other options are weaker</p>
          {question.wrongExplanations.map((exp, i) => {
            if (!exp) return null;
            const wasSelected = i === selectedIndex;
            return (
              <div key={i} className={`flex items-start gap-2 rounded-lg border p-3 ${
                wasSelected ? 'border-red/20 bg-red/5' : 'border-border bg-dark-800'
              }`}>
                <Info className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                <p className="text-sm text-text-secondary">
                  <span className={`font-medium ${wasSelected ? 'text-red/80' : 'text-text-muted'}`}>"{question.options[i]}"</span> — {exp}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Investor takeaway */}
      <div className="flex items-start gap-2.5 rounded-xl border border-accent/20 bg-accent/5 p-4">
        <Lightbulb className="w-4 h-4 text-accent-light mt-0.5 shrink-0" />
        <div>
          <p className="text-xs text-accent-light font-semibold uppercase tracking-wide mb-1">Investor Takeaway</p>
          <p className="text-sm text-text-primary leading-relaxed">{question.takeaway}</p>
        </div>
      </div>

      {/* Continue button */}
      <motion.button
        onClick={onContinue}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer"
      >
        {isLast ? 'See Results' : 'Continue'}
      </motion.button>
    </motion.div>
  );
}
