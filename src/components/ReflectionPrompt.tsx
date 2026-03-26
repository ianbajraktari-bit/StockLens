import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  Eye,
  CheckCircle2,
  PenLine,
  Sparkles,
} from 'lucide-react';
import type { Company } from '../data/types';

type Stance = 'bullish' | 'bearish' | 'neutral' | null;

interface ReflectionPromptProps {
  company: Company;
  savedDecision?: Stance;
  savedReflections?: {
    whatWouldMakeYouWrong: string;
    whatToWatchNextQuarter: string;
    keyRisk: string;
  } | null;
  onDecision: (decision: 'bullish' | 'bearish' | 'neutral') => void;
  onReflections: (reflections: {
    whatWouldMakeYouWrong: string;
    whatToWatchNextQuarter: string;
    keyRisk: string;
  }) => void;
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

export default function ReflectionPrompt({
  company,
  savedDecision,
  savedReflections,
  onDecision,
  onReflections,
}: ReflectionPromptProps) {
  const [stance, setStance] = useState<Stance>(savedDecision ?? null);
  const [reflectionStep, setReflectionStep] = useState<'decision' | 'reflect' | 'compare'>(
    savedReflections ? 'compare' : savedDecision ? 'reflect' : 'decision',
  );
  const [reflections, setReflections] = useState({
    whatWouldMakeYouWrong: savedReflections?.whatWouldMakeYouWrong ?? '',
    whatToWatchNextQuarter: savedReflections?.whatToWatchNextQuarter ?? '',
    keyRisk: savedReflections?.keyRisk ?? '',
  });

  const response = stance ? company.decisionResponses[stance] : null;
  const config = stance ? stanceConfig[stance] : null;

  function handleStanceSelect(s: 'bullish' | 'bearish' | 'neutral') {
    setStance(s);
    onDecision(s);
    setReflectionStep('reflect');
  }

  function handleSubmitReflections() {
    if (
      reflections.whatWouldMakeYouWrong.trim().length < 3 ||
      reflections.whatToWatchNextQuarter.trim().length < 3 ||
      reflections.keyRisk.trim().length < 3
    )
      return;
    onReflections(reflections);
    setReflectionStep('compare');
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          What's your view on {company.name}?
        </h3>
        <p className="text-sm text-text-secondary">
          This isn't about being right — it's about building a framework.
          Pick a stance, then stress-test your own thinking.
        </p>
      </div>

      {/* Stance selection */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {(Object.keys(stanceConfig) as Array<'bullish' | 'bearish' | 'neutral'>).map((key) => {
          const s = stanceConfig[key];
          const Icon = s.icon;
          const isActive = stance === key;
          return (
            <button
              key={key}
              onClick={() => handleStanceSelect(key)}
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
        {/* Reflection step */}
        {reflectionStep === 'reflect' && stance && config && (
          <motion.div
            key="reflect"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl border ${config.border} bg-gradient-to-b ${config.gradient} p-6 sm:p-8 space-y-5`}
          >
            <div className="flex items-center gap-3">
              <PenLine className={`w-5 h-5 ${config.text}`} />
              <h3 className={`text-lg font-bold ${config.text}`}>
                Stress-test your {stance} view
              </h3>
            </div>

            <p className="text-sm text-text-secondary">
              Before seeing the framework answer, write your own thinking.
              Good investors always know what could prove them wrong.
            </p>

            <div className="space-y-4">
              <ReflectionInput
                label="What would make you wrong?"
                placeholder="What evidence or development would invalidate your thesis?"
                value={reflections.whatWouldMakeYouWrong}
                onChange={(v) =>
                  setReflections((prev) => ({
                    ...prev,
                    whatWouldMakeYouWrong: v,
                  }))
                }
              />
              <ReflectionInput
                label="What would you need to see next quarter?"
                placeholder="What specific data point or trend would confirm your view?"
                value={reflections.whatToWatchNextQuarter}
                onChange={(v) =>
                  setReflections((prev) => ({
                    ...prev,
                    whatToWatchNextQuarter: v,
                  }))
                }
              />
              <ReflectionInput
                label="What is the key risk to your view?"
                placeholder="The single biggest threat to your thesis..."
                value={reflections.keyRisk}
                onChange={(v) =>
                  setReflections((prev) => ({ ...prev, keyRisk: v }))
                }
              />
            </div>

            <button
              onClick={handleSubmitReflections}
              disabled={
                reflections.whatWouldMakeYouWrong.trim().length < 3 ||
                reflections.whatToWatchNextQuarter.trim().length < 3 ||
                reflections.keyRisk.trim().length < 3
              }
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-accent/20 text-accent-light border border-accent/30 hover:bg-accent/30 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Compare with framework answer
            </button>
          </motion.div>
        )}

        {/* Compare step */}
        {reflectionStep === 'compare' && stance && config && response && (
          <motion.div
            key="compare"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            {/* User's reflections */}
            <div className={`rounded-2xl border ${config.border} bg-gradient-to-b ${config.gradient} p-6 space-y-4`}>
              <div className="flex items-center gap-3">
                <config.icon className={`w-5 h-5 ${config.text}`} />
                <h3 className={`text-lg font-bold ${config.text}`}>
                  Your {stance} thesis on {company.name}
                </h3>
              </div>

              {savedReflections && (
                <div className="space-y-3">
                  <ReflectionDisplay
                    label="What would make you wrong"
                    value={savedReflections.whatWouldMakeYouWrong}
                  />
                  <ReflectionDisplay
                    label="What to watch next quarter"
                    value={savedReflections.whatToWatchNextQuarter}
                  />
                  <ReflectionDisplay
                    label="Key risk"
                    value={savedReflections.keyRisk}
                  />
                </div>
              )}
            </div>

            {/* Framework answer */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent-light" />
                <h3 className="text-lg font-bold text-accent-light">
                  Framework answer
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReflectionInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-text-primary block mb-1.5">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-dark-700 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 resize-none leading-relaxed"
        rows={2}
      />
    </div>
  );
}

function ReflectionDisplay({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-dark-700/50 border border-border p-3">
      <p className="text-xs text-text-muted mb-1">{label}</p>
      <p className="text-sm text-text-secondary italic">"{value}"</p>
    </div>
  );
}
