import { motion } from 'framer-motion';
import {
  Award,
  TrendingUp,
  TrendingDown,
  Globe,
  AlertTriangle,
  User,
  ArrowRight,
} from 'lucide-react';
import { Lock } from 'lucide-react';

interface FrameworkDebriefProps {
  companyName: string;
  companyColor: string;
  userStance: 'bullish' | 'bearish' | 'unsure';
  debrief: {
    frameworkLabel: string;
    synthesis: string;
    strongestBull: string;
    strongestBear: string;
    marketBelief: string;
    whereMarketWrong: string;
    bestForInvestor: string;
    whatChangesConclusion: string[];
  };
  locked: boolean;
}

const stanceDisplay: Record<
  string,
  { label: string; colorClass: string; bgClass: string; borderClass: string }
> = {
  bullish: {
    label: 'bullish',
    colorClass: 'text-green',
    bgClass: 'bg-green/15',
    borderClass: 'border-green/50',
  },
  bearish: {
    label: 'bearish',
    colorClass: 'text-red',
    bgClass: 'bg-red/15',
    borderClass: 'border-red/50',
  },
  unsure: {
    label: 'unsure',
    colorClass: 'text-amber',
    bgClass: 'bg-amber/15',
    borderClass: 'border-amber/50',
  },
};

interface InsightCardProps {
  icon: React.ElementType;
  title: string;
  content: string;
  borderColor: string;
  iconColor: string;
  delay: number;
}

function InsightCard({
  icon: Icon,
  title,
  content,
  borderColor,
  iconColor,
  delay,
}: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: 'easeOut' }}
      className={`rounded-lg border-l-3 bg-dark-800/80 px-5 py-4 ${borderColor}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${iconColor}`} />
        <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-text-secondary">{content}</p>
    </motion.div>
  );
}

export default function FrameworkDebrief({
  companyName,
  companyColor,
  userStance,
  debrief,
  locked,
}: FrameworkDebriefProps) {
  const stance = stanceDisplay[userStance];

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
            <Award className="h-4 w-4 text-text-muted" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-text-secondary">
              Framework Debrief
            </span>
            <Lock className="h-3 w-3 text-text-muted" />
            <span className="text-xs text-text-muted">
              Complete the stress test to unlock
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  // --- UNLOCKED STATE ---
  const insightCards: InsightCardProps[] = [
    {
      icon: TrendingUp,
      title: 'Strongest Bull Case',
      content: debrief.strongestBull,
      borderColor: 'border-green',
      iconColor: 'text-green',
      delay: 0.6,
    },
    {
      icon: TrendingDown,
      title: 'Strongest Bear Case',
      content: debrief.strongestBear,
      borderColor: 'border-red',
      iconColor: 'text-red',
      delay: 0.7,
    },
    {
      icon: Globe,
      title: 'What the Market Believes',
      content: debrief.marketBelief,
      borderColor: 'border-accent',
      iconColor: 'text-accent-light',
      delay: 0.8,
    },
    {
      icon: AlertTriangle,
      title: 'Where the Market Could Be Wrong',
      content: debrief.whereMarketWrong,
      borderColor: 'border-amber',
      iconColor: 'text-amber',
      delay: 0.9,
    },
    {
      icon: User,
      title: 'Who This Setup Suits',
      content: debrief.bestForInvestor,
      borderColor: 'border-accent',
      iconColor: 'text-accent-light',
      delay: 1.0,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${companyColor}15` }}
          >
            <Award className="h-4.5 w-4.5 text-accent-light" />
          </div>
          <h3 className="text-base font-semibold text-text-primary">
            A Disciplined Framework View
          </h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          This is not the correct answer. This is one rigorous way to think
          about it.
        </p>
      </div>

      {/* User stance context */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-sm text-text-secondary"
      >
        You entered this analysis{' '}
        <span
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${stance.colorClass} ${stance.bgClass} ${stance.borderClass}`}
        >
          {stance.label}
        </span>
        .
      </motion.div>

      {/* Framework Label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex justify-center"
      >
        <span
          className="rounded-full border px-5 py-2 text-sm font-bold tracking-wide"
          style={{
            color: companyColor,
            backgroundColor: `${companyColor}12`,
            borderColor: `${companyColor}40`,
          }}
        >
          {debrief.frameworkLabel}
        </span>
      </motion.div>

      {/* Synthesis */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-[15px] leading-relaxed text-text-primary"
      >
        {debrief.synthesis}
      </motion.p>

      {/* Insight cards */}
      <div className="space-y-3">
        {insightCards.map((card) => (
          <InsightCard key={card.title} {...card} />
        ))}
      </div>

      {/* What Would Change This View */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.45 }}
        className="space-y-3 rounded-xl border border-border/50 bg-dark-800/60 p-5"
      >
        <h4 className="text-sm font-semibold text-text-primary">
          What Would Change This View
        </h4>
        <ul className="space-y-2">
          {debrief.whatChangesConclusion.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.08 }}
              className="flex items-start gap-2.5 text-sm leading-snug text-text-secondary"
            >
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-light" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Footer disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pt-2 text-center text-[11px] text-text-muted"
      >
        This analysis is for learning purposes. It does not constitute financial
        advice.
      </motion.p>
    </motion.div>
  );
}
