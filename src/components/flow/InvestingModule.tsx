import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Brain, CheckCircle2, Lightbulb, Send } from 'lucide-react';

interface InvestingModuleProps {
  module: {
    id: string;
    title: string;
    question: string;
    context: string;
    evidence: { content: string; source?: string }[];
    frameworkAnswer: string;
    keyInsight: string;
    insightType: 'positive' | 'negative' | 'neutral';
  };
  moduleNumber: number;
  totalModules: number;
  locked: boolean;
  savedAnswer?: string;
  onComplete: (moduleId: string, answer: string) => void;
}

const insightStyles: Record<'positive' | 'negative' | 'neutral', { border: string; text: string; bg: string }> = {
  positive: { border: 'border-l-green', text: 'text-green', bg: 'bg-green/5' },
  negative: { border: 'border-l-red', text: 'text-amber', bg: 'bg-amber/5' },
  neutral: { border: 'border-l-accent', text: 'text-accent-light', bg: 'bg-accent/5' },
};

export default function InvestingModule({
  module,
  moduleNumber,
  totalModules,
  locked,
  savedAnswer,
  onComplete,
}: InvestingModuleProps) {
  const [answer, setAnswer] = useState(savedAnswer ?? '');
  const [submitted, setSubmitted] = useState(!!savedAnswer);
  const [showFramework, setShowFramework] = useState(!!savedAnswer);

  useEffect(() => {
    if (savedAnswer) {
      setAnswer(savedAnswer);
      setSubmitted(true);
      setShowFramework(true);
    }
  }, [savedAnswer]);

  const canSubmit = answer.trim().length >= 10;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
    onComplete(module.id, answer.trim());
    // Reveal framework answer after a brief delay
    setTimeout(() => setShowFramework(true), 300);
  };

  // ── LOCKED state ──
  if (locked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-dark-600 bg-dark-800/60 px-5 py-4 opacity-50"
      >
        <div className="flex items-center gap-3">
          <Lock className="h-4 w-4 text-text-muted flex-shrink-0" />
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs font-mono text-text-muted flex-shrink-0">
              {String(moduleNumber).padStart(2, '0')}/{String(totalModules).padStart(2, '0')}
            </span>
            <span className="text-sm font-medium text-text-muted truncate">{module.title}</span>
          </div>
          <span className="ml-auto text-xs text-text-muted/60 flex-shrink-0 hidden sm:inline">
            Complete previous section to unlock
          </span>
        </div>
      </motion.div>
    );
  }

  // ── COMPLETED state ──
  if (submitted) {
    const insight = insightStyles[module.insightType];

    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border bg-dark-800 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-5 pb-4">
          <div className="flex items-center justify-center h-6 w-6 rounded-md bg-accent/15">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent-light" />
          </div>
          <span className="text-xs font-mono text-text-muted">
            {String(moduleNumber).padStart(2, '0')}/{String(totalModules).padStart(2, '0')}
          </span>
          <h3 className="text-sm font-bold text-text-primary">{module.title}</h3>
        </div>

        {/* User's answer */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-6 mb-4"
        >
          <div className="rounded-xl border border-dark-500 bg-dark-700/40 px-4 py-3">
            <p className="text-xs font-medium text-text-muted mb-1.5">Your analysis</p>
            <p className="text-sm text-text-secondary leading-relaxed italic">"{answer}"</p>
          </div>
        </motion.div>

        {/* Framework answer reveal */}
        <AnimatePresence>
          {showFramework && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-6 mb-4"
            >
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Framework View
              </p>
              <div className="rounded-xl border-l-2 border-l-accent border border-dark-500 bg-dark-700/30 px-4 py-3">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {module.frameworkAnswer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Insight callout */}
        <AnimatePresence>
          {showFramework && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mx-6 mb-6"
            >
              <div
                className={`
                  rounded-xl border-l-2 ${insight.border} border border-dark-500
                  ${insight.bg} px-4 py-3
                `}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb className={`h-3.5 w-3.5 ${insight.text}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${insight.text}`}>
                    Key Insight
                  </span>
                </div>
                <p className="text-sm text-text-primary leading-relaxed font-medium">
                  {module.keyInsight}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // ── ACTIVE state ──
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border bg-dark-800 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-2">
        <div className="flex items-center justify-center rounded-md bg-accent/15 px-2 py-0.5">
          <span className="text-xs font-mono font-bold text-accent-light">
            {String(moduleNumber).padStart(2, '0')}
          </span>
        </div>
        <span className="text-xs text-text-muted">of {totalModules}</span>
        <h3 className="text-base font-bold text-text-primary tracking-tight">{module.title}</h3>
      </div>

      {/* Context */}
      <div className="px-6 pb-4">
        <p className="text-sm text-text-muted italic leading-relaxed">{module.context}</p>
      </div>

      {/* Evidence cards */}
      <div className="px-6 pb-5">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          Evidence
        </p>
        <div className="space-y-2">
          {module.evidence.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
              className="rounded-lg border-l-2 border-l-accent/40 border border-dark-500 bg-dark-700/40 px-4 py-2.5"
            >
              <p className="text-sm text-text-secondary leading-relaxed">{item.content}</p>
              {item.source && (
                <p className="text-[10px] text-text-muted/60 mt-1 font-mono">{item.source}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="px-6 pb-4">
        <div className="flex items-start gap-2.5">
          <Brain className="h-4 w-4 text-accent-light mt-0.5 flex-shrink-0" />
          <p className="text-sm font-semibold text-text-primary leading-relaxed">
            {module.question}
          </p>
        </div>
      </div>

      {/* Answer textarea */}
      <div className="px-6 pb-6">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Think it through…"
          rows={3}
          className="
            w-full rounded-xl border border-dark-500 bg-dark-700/60 px-4 py-3
            text-sm text-text-primary placeholder:text-text-muted/50
            focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
            resize-none transition-colors
          "
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-text-muted">
            {answer.trim().length < 10
              ? `${10 - answer.trim().length} more characters needed`
              : 'Ready to commit'}
          </span>
          <AnimatePresence>
            {canSubmit && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={handleSubmit}
                className="
                  flex items-center gap-2 rounded-lg bg-accent px-4 py-2
                  text-sm font-semibold text-white cursor-pointer
                  hover:bg-accent-light transition-colors
                "
              >
                <Send className="h-3.5 w-3.5" />
                Commit your answer
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
