import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Target,
  BarChart3,
  TrendingUp,
  Quote,
  GitCompare,
} from 'lucide-react';

interface EvidenceItem {
  content: string;
  source?: string;
  type: 'stat' | 'trend' | 'quote' | 'comparison';
}

interface LessonShellProps {
  lessonNumber: number;
  totalLessons: number;
  title: string;
  objective: string;
  whyItMatters: string;
  context: string;
  evidence?: EvidenceItem[];
  children: React.ReactNode;
  feedback?: React.ReactNode;
  isComplete: boolean;
  onSubmit: () => void;
  canSubmit: boolean;
  submitLabel?: string;
}

const evidenceConfig: Record<
  EvidenceItem['type'],
  { border: string; icon: typeof BarChart3; iconColor: string }
> = {
  stat: { border: 'border-l-accent', icon: BarChart3, iconColor: 'text-accent-light' },
  trend: { border: 'border-l-green', icon: TrendingUp, iconColor: 'text-green' },
  quote: { border: 'border-l-amber', icon: Quote, iconColor: 'text-amber' },
  comparison: { border: 'border-l-red', icon: GitCompare, iconColor: 'text-red' },
};

export default function LessonShell({
  lessonNumber,
  totalLessons,
  title,
  objective,
  whyItMatters,
  context,
  evidence,
  children,
  feedback,
  isComplete,
  onSubmit,
  canSubmit,
  submitLabel = 'Submit',
}: LessonShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="max-w-2xl mx-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent-light text-xs font-semibold tracking-wide">
          Lesson {lessonNumber} of {totalLessons}
          {isComplete && <Check className="w-3.5 h-3.5 text-green" />}
        </span>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.3 }}
        className="text-xl font-bold text-text-primary mb-2 leading-tight"
      >
        {title}
      </motion.h1>

      {/* Objective */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex items-start gap-2 mb-2"
      >
        <Target className="w-3.5 h-3.5 text-accent-light mt-0.5 shrink-0" />
        <p className="text-xs text-accent-light leading-relaxed">
          {objective}
        </p>
      </motion.div>

      {/* Why it matters */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="text-sm text-text-muted italic mb-5 leading-relaxed"
      >
        {whyItMatters}
      </motion.p>

      {/* Context */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-sm text-text-secondary leading-relaxed mb-5"
      >
        {context}
      </motion.div>

      {/* Evidence Cards */}
      {evidence && evidence.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          className="flex flex-col gap-2 mb-5"
        >
          {evidence.map((item, index) => {
            const config = evidenceConfig[item.type];
            const Icon = config.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.06, duration: 0.25 }}
                className={`
                  flex items-start gap-3 px-4 py-3 rounded-lg
                  border border-border border-l-[3px] ${config.border}
                  bg-dark-800
                `}
              >
                <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${config.iconColor}`} />
                <div className="min-w-0">
                  <p className="text-sm text-text-primary leading-relaxed">
                    {item.content}
                  </p>
                  {item.source && (
                    <p className="text-[11px] text-text-muted mt-1">
                      {item.source}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Divider */}
      <div className="h-px bg-border mb-6" />

      {/* Question Input (children) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.3 }}
        className="mb-6"
      >
        {children}
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="mb-6"
      >
        <button
          onClick={onSubmit}
          disabled={!canSubmit}
          className={`
            w-full py-3 rounded-xl text-sm font-semibold
            transition-all duration-200
            ${
              canSubmit
                ? 'bg-accent text-white hover:bg-accent-light cursor-pointer shadow-lg shadow-accent/20'
                : 'bg-dark-500 text-text-muted cursor-not-allowed'
            }
          `}
        >
          {submitLabel}
        </button>
      </motion.div>

      {/* Feedback Section */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 16, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 16, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
