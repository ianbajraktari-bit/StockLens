import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import type { Company } from '../data/types';

type Stance = 'bullish' | 'bearish' | 'neutral' | null;

interface DecisionPanelProps {
  company: Company;
}

const stanceConfig = {
  bullish: {
    label: 'Bullish',
    icon: TrendingUp,
    gradient: 'from-green/20 to-transparent',
    border: 'border-green/30',
    bg: 'bg-green/10',
    text: 'text-green',
    description: "I think this stock is going higher",
  },
  bearish: {
    label: 'Bearish',
    icon: TrendingDown,
    gradient: 'from-red/20 to-transparent',
    border: 'border-red/30',
    bg: 'bg-red/10',
    text: 'text-red',
    description: "I think this stock is going lower",
  },
  neutral: {
    label: 'Neutral',
    icon: Minus,
    gradient: 'from-amber/20 to-transparent',
    border: 'border-amber/30',
    bg: 'bg-amber/10',
    text: 'text-amber',
    description: "I'm not sure either way",
  },
};

export default function DecisionPanel({ company }: DecisionPanelProps) {
  const [stance, setStance] = useState<Stance>(null);

  const response = stance ? company.decisionResponses[stance] : null;
  const config = stance ? stanceConfig[stance] : null;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          What's your view on {company.name}?
        </h3>
        <p className="text-sm text-text-secondary">
          This isn't about being right — it's about having a framework. Pick a
          stance and see what you'd need to believe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {(Object.keys(stanceConfig) as Stance[]).filter(Boolean).map((key) => {
          const s = stanceConfig[key!];
          const Icon = s.icon;
          const isActive = stance === key;
          return (
            <button
              key={key}
              onClick={() => setStance(key)}
              className={`group relative rounded-xl border p-5 text-left transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? `${s.border} ${s.bg}`
                    : 'border-border bg-dark-700 hover:border-dark-400'
                }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon
                  className={`w-5 h-5 ${isActive ? s.text : 'text-text-muted'}`}
                />
                <span
                  className={`font-semibold ${isActive ? s.text : 'text-text-primary'}`}
                >
                  {s.label}
                </span>
              </div>
              <p className="text-sm text-text-secondary">{s.description}</p>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {response && config && (
          <motion.div
            key={stance}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`rounded-2xl border ${config.border} bg-gradient-to-b ${config.gradient} p-6 sm:p-8 space-y-6`}
          >
            <div className="flex items-center gap-3">
              <config.icon className={`w-6 h-6 ${config.text}`} />
              <h3 className={`text-xl font-bold ${config.text}`}>
                You're {stance} on {company.name}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    For this view to be correct, you need...
                  </h4>
                  <ul className="space-y-2">
                    {response.whatNeedsToHappen.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-secondary leading-relaxed pl-4 border-l-2 border-dark-500"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Biggest risk to your thesis
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {response.biggestRisk}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Key metric to watch
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {response.keyMetricToWatch}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
