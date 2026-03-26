import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Eye,
  AlertTriangle,
  ChevronRight,
  Check,
  Lock,
} from 'lucide-react';

interface StressTestProps {
  companyName: string;
  companyColor: string;
  userStance: 'bullish' | 'bearish' | 'unsure';
  stressTest: {
    questions: {
      id: string;
      question: string;
      hint?: string;
    }[];
    keyVariables: {
      variable: string;
      importance: 'critical' | 'high' | 'moderate';
      description: string;
    }[];
    sophisticatedView: {
      whatToWatch: string[];
      disconfirmingEvidence: string[];
      strongestCounter: string;
    };
  };
  locked: boolean;
  savedAnswers?: Record<string, string>;
  onComplete: (answers: Record<string, string>) => void;
}

const stanceConfig = {
  bullish: {
    label: 'Bullish',
    colorClass: 'text-green',
    bgClass: 'bg-green/15',
    borderClass: 'border-green/50',
  },
  bearish: {
    label: 'Bearish',
    colorClass: 'text-red',
    bgClass: 'bg-red/15',
    borderClass: 'border-red/50',
  },
  unsure: {
    label: 'Unsure',
    colorClass: 'text-amber',
    bgClass: 'bg-amber/15',
    borderClass: 'border-amber/50',
  },
};

const importanceBadge: Record<string, { text: string; bg: string; border: string }> = {
  critical: { text: 'text-red', bg: 'bg-red/10', border: 'border-red/30' },
  high: { text: 'text-amber', bg: 'bg-amber/10', border: 'border-amber/30' },
  moderate: { text: 'text-muted', bg: 'bg-dark-600', border: 'border-border' },
};

export default function StressTest({
  companyName,
  companyColor,
  userStance,
  stressTest,
  locked,
  savedAnswers,
  onComplete,
}: StressTestProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { questions, keyVariables, sophisticatedView } = stressTest;
  const stance = stanceConfig[userStance];
  const isRevealed = !!savedAnswers || submitted;
  const displayAnswers = savedAnswers || answers;

  const handleNext = useCallback(() => {
    const qId = questions[currentStep].id;
    const updated = { ...answers, [qId]: currentAnswer };
    setAnswers(updated);
    setCurrentAnswer('');

    if (currentStep < questions.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setSubmitted(true);
      onComplete(updated);
    }
  }, [answers, currentAnswer, currentStep, questions, onComplete]);

  // --- LOCKED STATE ---
  if (locked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border/50 bg-dark-800/60 px-5 py-4 opacity-50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-dark-700">
            <Shield className="h-4 w-4 text-text-muted" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-text-secondary">
              Stress Test
            </span>
            <Lock className="h-3 w-3 text-text-muted" />
            <span className="text-xs text-text-muted">
              Complete the Scenario Lab to unlock
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  // --- REVEALED STATE ---
  if (isRevealed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${companyColor}15` }}
          >
            <Shield className="h-4.5 w-4.5 text-accent-light" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary">
              Stress-Test Your Thesis
            </h3>
            <div className="mt-0.5 flex items-center gap-2">
              <Check className="h-3 w-3 text-green" />
              <span className="text-xs text-text-muted">Completed</span>
            </div>
          </div>
        </div>

        {/* User's answers — compact Q&A stack */}
        <div className="space-y-2">
          {questions.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-lg border border-border/40 bg-dark-800/80 px-4 py-3"
            >
              <p className="text-xs font-medium text-text-secondary">
                {q.question}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-text-primary">
                {displayAnswers[q.id]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sophisticated Investor View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 rounded-xl border border-border/60 bg-dark-800/90 p-5"
        >
          <h4 className="text-sm font-semibold tracking-wide text-accent-light uppercase">
            Sophisticated Investor View
          </h4>

          {/* What to Watch */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Eye className="h-3.5 w-3.5 text-accent-light" />
              <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">
                What to Watch
              </span>
            </div>
            <div className="space-y-1.5 pl-5.5">
              {sophisticatedView.whatToWatch.map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="text-sm leading-snug text-text-primary"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Disconfirming Evidence */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">
                Disconfirming Evidence
              </span>
            </div>
            <div className="space-y-1.5 pl-5.5">
              {sophisticatedView.disconfirmingEvidence.map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.07 }}
                  className="text-sm leading-snug text-amber/90"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Strongest Counterargument — the punch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="rounded-lg border-l-3 border-red bg-dark-700/80 px-5 py-4"
          >
            <p className="mb-1.5 text-xs font-semibold tracking-wide text-red/80 uppercase">
              Strongest Counterargument
            </p>
            <p className="text-[15px] leading-relaxed text-text-primary">
              {sophisticatedView.strongestCounter}
            </p>
          </motion.div>
        </motion.div>

        {/* Key Variables */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="space-y-3"
        >
          <h4 className="text-xs font-semibold tracking-wide text-text-secondary uppercase">
            Key Variables to Monitor
          </h4>
          <div className="space-y-2">
            {keyVariables.map((kv, i) => {
              const badge = importanceBadge[kv.importance];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.08 }}
                  className="flex items-start gap-3 rounded-lg border border-border/30 bg-dark-800/60 px-4 py-3"
                >
                  <span
                    className={`mt-0.5 shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase ${badge.text} ${badge.bg} ${badge.border}`}
                  >
                    {kv.importance}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-primary">
                      {kv.variable}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-text-muted">
                      {kv.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // --- ACTIVE STATE (stepped question flow) ---
  const currentQuestion = questions[currentStep];
  const canProceed = currentAnswer.trim().length >= 10;
  const isLast = currentStep === questions.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-5"
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${companyColor}15` }}
          >
            <Shield className="h-4.5 w-4.5 text-accent-light" />
          </div>
          <h3 className="text-base font-semibold text-text-primary">
            Stress-Test Your Thesis
          </h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          You said you&apos;re{' '}
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${stance.colorClass} ${stance.bgClass} ${stance.borderClass}`}
          >
            {stance.label}
          </span>{' '}
          on {companyName}. Now find the holes in your own thinking.
        </p>
      </div>

      {/* Previously answered questions — collapsed */}
      <AnimatePresence mode="popLayout">
        {Object.entries(answers).map(([qId, answer]) => {
          const q = questions.find((q) => q.id === qId);
          if (!q) return null;
          return (
            <motion.div
              key={qId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-lg border border-border/30 bg-dark-800/50 px-4 py-3"
            >
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-text-secondary">
                    {q.question}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-sm text-text-muted">
                    {answer}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Current question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="space-y-3 rounded-xl border border-border/60 bg-dark-800/80 p-5"
        >
          {/* Progress */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-muted">
              Question {currentStep + 1} of {questions.length}
            </span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-5 rounded-full transition-colors ${
                    i < currentStep
                      ? 'bg-accent'
                      : i === currentStep
                        ? 'bg-accent-light'
                        : 'bg-dark-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question text */}
          <p className="text-sm font-semibold leading-snug text-text-primary">
            {currentQuestion.question}
          </p>

          {currentQuestion.hint && (
            <p className="text-xs italic leading-relaxed text-text-muted">
              {currentQuestion.hint}
            </p>
          )}

          {/* Textarea */}
          <textarea
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder="Think carefully before answering..."
            rows={3}
            className="w-full resize-none rounded-lg border border-border/50 bg-dark-700/60 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
          />

          {/* Next / Submit button */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-text-muted">
              {currentAnswer.trim().length < 10
                ? `${10 - currentAnswer.trim().length} more characters needed`
                : ''}
            </span>
            <motion.button
              whileHover={canProceed ? { scale: 1.02 } : {}}
              whileTap={canProceed ? { scale: 0.98 } : {}}
              onClick={handleNext}
              disabled={!canProceed}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                canProceed
                  ? 'bg-accent text-white shadow-[0_0_16px_rgba(99,102,241,0.2)] hover:bg-accent-light'
                  : 'cursor-not-allowed bg-dark-600 text-text-muted'
              }`}
            >
              {isLast ? 'Submit & reveal' : 'Next'}
              <ChevronRight className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
