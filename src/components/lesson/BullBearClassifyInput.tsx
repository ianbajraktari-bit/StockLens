import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Check, X } from 'lucide-react';

interface BullBearClassifyInputProps {
  statements: { id: string; text: string }[];
  classifications: Record<string, 'bull' | 'bear' | 'neutral' | null>;
  correctClassification?: Record<string, 'bull' | 'bear' | 'neutral'>;
  disabled?: boolean;
  onClassify: (id: string, value: 'bull' | 'bear' | 'neutral') => void;
}

const classButtons = [
  {
    value: 'bull' as const,
    label: 'Bull',
    icon: TrendingUp,
    activeColor: 'bg-green/15 text-green border-green',
    hoverColor: 'hover:bg-green/10 hover:text-green',
  },
  {
    value: 'bear' as const,
    label: 'Bear',
    icon: TrendingDown,
    activeColor: 'bg-red/15 text-red border-red',
    hoverColor: 'hover:bg-red/10 hover:text-red',
  },
  {
    value: 'neutral' as const,
    label: 'Neutral',
    icon: Minus,
    activeColor: 'bg-amber/15 text-amber border-amber',
    hoverColor: 'hover:bg-amber/10 hover:text-amber',
  },
] as const;

export default function BullBearClassifyInput({
  statements,
  classifications,
  correctClassification,
  disabled = false,
  onClassify,
}: BullBearClassifyInputProps) {
  return (
    <div className="flex flex-col gap-4">
      {statements.map((statement, index) => {
        const current = classifications[statement.id] ?? null;
        const correct = correctClassification?.[statement.id];
        const isCorrect = correct != null && current === correct;
        const isWrong = correct != null && current !== correct;

        return (
          <motion.div
            key={statement.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.25 }}
            className={`
              rounded-xl border bg-dark-800 p-4
              ${isCorrect ? 'border-green/40' : isWrong ? 'border-red/40' : 'border-border'}
              ${disabled ? 'opacity-50' : ''}
            `}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-sm text-text-primary leading-relaxed">
                {statement.text}
              </p>
              {correct != null && (
                <span className="shrink-0 mt-0.5">
                  {isCorrect ? (
                    <Check className="w-4 h-4 text-green" />
                  ) : (
                    <X className="w-4 h-4 text-red" />
                  )}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              {classButtons.map((btn) => {
                const isSelected = current === btn.value;
                const Icon = btn.icon;

                return (
                  <button
                    key={btn.value}
                    disabled={disabled}
                    onClick={() => !disabled && onClassify(statement.id, btn.value)}
                    className={`
                      flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium
                      transition-all duration-150
                      ${
                        isSelected
                          ? btn.activeColor
                          : `border-border text-text-muted ${!disabled ? `${btn.hoverColor} cursor-pointer` : 'cursor-not-allowed'}`
                      }
                      ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {btn.label}
                  </button>
                );
              })}
            </div>

            {correct != null && isWrong && (
              <p className="mt-2 text-xs text-text-muted">
                Correct: <span className="text-text-secondary capitalize">{correct}</span>
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
