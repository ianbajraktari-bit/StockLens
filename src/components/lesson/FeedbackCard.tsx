import { motion } from 'framer-motion';
import { Check, AlertTriangle, Lightbulb, Brain } from 'lucide-react';

interface FeedbackCardProps {
  evaluation: {
    score: number;
    maxScore: number;
    gotRight: string;
    missing: string;
    strongerFraming: string;
    followUp?: string;
  };
  questionType: string;
}

function ScoreRing({ score, maxScore }: { score: number; maxScore: number }) {
  const pct = score / maxScore;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct);

  const color =
    score >= maxScore * 0.7
      ? 'text-green'
      : score >= maxScore * 0.5
        ? 'text-amber'
        : 'text-red';

  const strokeColor =
    score >= maxScore * 0.7
      ? '#22c55e'
      : score >= maxScore * 0.5
        ? '#f59e0b'
        : '#ef4444';

  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 88 88">
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="#1e293b"
          strokeWidth="5"
        />
        <motion.circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xl font-bold ${color}`}>
          {score}/{maxScore}
        </span>
      </div>
    </div>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.1, duration: 0.3, ease: 'easeOut' as const },
  }),
};

const sections: {
  key: string;
  label: string;
  Icon: typeof Check;
  borderColor: string;
  iconColor: string;
  iconBg: string;
  bold?: boolean;
  dashed?: boolean;
}[] = [
  {
    key: 'gotRight',
    label: 'What you got right',
    Icon: Check,
    borderColor: 'border-l-green',
    iconColor: 'text-green',
    iconBg: 'bg-green/10',
  },
  {
    key: 'missing',
    label: 'What was missing',
    Icon: AlertTriangle,
    borderColor: 'border-l-amber',
    iconColor: 'text-amber',
    iconBg: 'bg-amber/10',
  },
  {
    key: 'strongerFraming',
    label: 'Stronger framing',
    Icon: Lightbulb,
    borderColor: 'border-l-accent',
    iconColor: 'text-accent-light',
    iconBg: 'bg-accent/10',
    bold: true,
  },
  {
    key: 'followUp',
    label: 'Follow-up challenge',
    Icon: Brain,
    borderColor: 'border-l-text-muted',
    iconColor: 'text-text-secondary',
    iconBg: 'bg-dark-700',
    dashed: true,
  },
];

export default function FeedbackCard({ evaluation, questionType }: FeedbackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-border bg-dark-800 p-6"
    >
      {/* Score Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-1"
      >
        <ScoreRing score={evaluation.score} maxScore={evaluation.maxScore} />
      </motion.div>

      <p className="text-center text-xs text-text-muted mb-5 capitalize">
        {questionType}
      </p>

      {/* Feedback Sections */}
      <div className="flex flex-col gap-3">
        {sections.map((section, i) => {
          const content = evaluation[section.key as keyof typeof evaluation];
          if (!content || typeof content !== 'string') return null;

          const { Icon, label, borderColor, iconColor, iconBg, bold, dashed } = section;

          return (
            <motion.div
              key={section.key}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className={`
                flex items-start gap-3 rounded-lg bg-dark-900/60 px-4 py-3
                border-l-[3px] ${borderColor}
                ${dashed ? 'border-dashed' : ''}
              `}
            >
              <span className={`shrink-0 mt-0.5 p-1 rounded ${iconBg}`}>
                <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    bold ? 'text-text-primary font-medium' : 'text-text-secondary'
                  }`}
                >
                  {content}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
