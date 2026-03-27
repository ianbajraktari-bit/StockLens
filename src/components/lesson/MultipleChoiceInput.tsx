import { motion } from 'framer-motion';

interface MultipleChoiceInputProps {
  options: { id: string; text: string }[];
  selected: string | null;
  correctId?: string;
  disabled?: boolean;
  onSelect: (id: string) => void;
}

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function MultipleChoiceInput({
  options,
  selected,
  correctId,
  disabled = false,
  onSelect,
}: MultipleChoiceInputProps) {
  const getOptionState = (id: string) => {
    if (!correctId) {
      return id === selected ? 'selected' : 'default';
    }
    if (id === correctId) return 'correct';
    if (id === selected && id !== correctId) return 'wrong';
    return 'default';
  };

  const stateStyles: Record<string, { border: string; bg: string; circle: string; circleBg: string }> = {
    default: {
      border: 'border-border',
      bg: 'bg-dark-800',
      circle: 'text-text-muted',
      circleBg: 'bg-dark-700',
    },
    selected: {
      border: 'border-accent',
      bg: 'bg-dark-800',
      circle: 'text-accent-light',
      circleBg: 'bg-accent/15',
    },
    correct: {
      border: 'border-green',
      bg: 'bg-green/5',
      circle: 'text-green',
      circleBg: 'bg-green/15',
    },
    wrong: {
      border: 'border-red',
      bg: 'bg-red/5',
      circle: 'text-red',
      circleBg: 'bg-red/15',
    },
  };

  return (
    <div className="flex flex-col gap-3">
      {options.map((option, index) => {
        const state = getOptionState(option.id);
        const styles = stateStyles[state];

        return (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.25 }}
            disabled={disabled}
            onClick={() => !disabled && onSelect(option.id)}
            className={`
              flex items-center gap-4 w-full px-4 py-3.5 rounded-xl border text-left
              transition-all duration-200
              ${styles.border} ${styles.bg}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-dark-400'}
              ${!disabled && state === 'default' ? 'hover:bg-dark-700' : ''}
            `}
          >
            <span
              className={`
                flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold shrink-0
                ${styles.circleBg} ${styles.circle}
              `}
            >
              {letters[index]}
            </span>
            <span className="text-sm text-text-primary leading-relaxed">
              {option.text}
            </span>
            {correctId && state === 'correct' && (
              <svg className="w-5 h-5 ml-auto text-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
            {correctId && state === 'wrong' && (
              <svg className="w-5 h-5 ml-auto text-red shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
