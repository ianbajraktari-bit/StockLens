import { motion } from 'framer-motion';
import { Award, Brain, Target, Shield, BarChart3 } from 'lucide-react';

interface ProgressTrackerProps {
  scorecard: {
    companiesAnalyzed: number;
    companiesCompleted: number;
    decisionsMade: number;
    reflectionsWritten: number;
    scenariosExplored: number;
    thinkFirstAnswered: number;
    totalSections: number;
  };
}

export default function ProgressTracker({ scorecard }: ProgressTrackerProps) {
  const dimensions = [
    {
      label: 'Thesis Clarity',
      description: 'Formed clear investment views',
      value: scorecard.decisionsMade,
      max: 7,
      icon: Target,
      color: 'text-green',
    },
    {
      label: 'Risk Identification',
      description: 'Stress-tested your thinking',
      value: scorecard.reflectionsWritten,
      max: 7,
      icon: Shield,
      color: 'text-red',
    },
    {
      label: 'Valuation Awareness',
      description: 'Explored scenario outcomes',
      value: scorecard.scenariosExplored,
      max: 7,
      icon: BarChart3,
      color: 'text-amber',
    },
    {
      label: 'Evidence Quality',
      description: 'Engaged with analysis prompts',
      value: scorecard.thinkFirstAnswered,
      max: 21, // 3 per company
      icon: Brain,
      color: 'text-accent-light',
    },
  ];

  const overallProgress =
    scorecard.companiesAnalyzed > 0
      ? Math.round(
          (dimensions.reduce(
            (sum, d) => sum + Math.min(d.value / d.max, 1),
            0,
          ) /
            dimensions.length) *
            100,
        )
      : 0;

  if (scorecard.companiesAnalyzed === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-dark-800 p-6 space-y-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-accent-light" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary">
              Your Progress
            </h3>
            <p className="text-xs text-text-muted">
              {scorecard.companiesCompleted} of 7 companies completed
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-accent-light">
            {overallProgress}%
          </p>
          <p className="text-xs text-text-muted">Overall</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {dimensions.map((dim) => {
          const pct = Math.min((dim.value / dim.max) * 100, 100);
          const Icon = dim.icon;
          return (
            <div
              key={dim.label}
              className="rounded-xl border border-border bg-dark-700 p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-3.5 h-3.5 ${dim.color}`} />
                <span className="text-xs font-semibold text-text-primary">
                  {dim.label}
                </span>
              </div>
              <div className="h-1.5 bg-dark-500 rounded-full overflow-hidden mb-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
              <p className="text-[10px] text-text-muted">{dim.description}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
