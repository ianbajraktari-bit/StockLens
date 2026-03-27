import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ScenarioChoiceInputProps {
  scenarios: { id: string; label: string; description: string }[];
  selected: string | null;
  bestId?: string;
  disabled?: boolean;
  onSelect: (id: string) => void;
}

export default function ScenarioChoiceInput({
  scenarios,
  selected,
  bestId,
  disabled = false,
  onSelect,
}: ScenarioChoiceInputProps) {
  const getState = (id: string) => {
    if (!bestId) return id === selected ? 'selected' : 'default';
    if (id === bestId) return 'correct';
    if (id === selected && id !== bestId) return 'wrong';
    return 'default';
  };

  const stateStyles: Record<string, { border: string; bg: string; labelColor: string }> = {
    default: { border: 'border-border', bg: 'bg-dark-800', labelColor: 'text-text-muted' },
    selected: { border: 'border-accent', bg: 'bg-dark-800', labelColor: 'text-accent-light' },
    correct: { border: 'border-green', bg: 'bg-green/5', labelColor: 'text-green' },
    wrong: { border: 'border-red', bg: 'bg-red/5', labelColor: 'text-red' },
  };

  return (
    <div className="flex flex-col gap-3">
      {scenarios.map((scenario, index) => {
        const state = getState(scenario.id);
        const styles = stateStyles[state];

        return (
          <motion.button
            key={scenario.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.25 }}
            disabled={disabled}
            onClick={() => !disabled && onSelect(scenario.id)}
            className={`
              w-full text-left px-5 py-4 rounded-xl border
              transition-all duration-200
              ${styles.border} ${styles.bg}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-dark-400'}
              ${!disabled && state === 'default' ? 'hover:bg-dark-700' : ''}
            `}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`text-sm font-bold ${styles.labelColor}`}>
                {scenario.label}
              </span>
              {bestId && state === 'correct' && <Check className="w-4 h-4 text-green shrink-0" />}
              {bestId && state === 'wrong' && <X className="w-4 h-4 text-red shrink-0" />}
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {scenario.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
}
