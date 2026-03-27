import { motion } from 'framer-motion';

interface FreeResponseInputProps {
  value: string;
  hint?: string;
  disabled?: boolean;
  minLength?: number;
  onChange: (value: string) => void;
}

export default function FreeResponseInput({
  value,
  hint,
  disabled = false,
  minLength = 0,
  onChange,
}: FreeResponseInputProps) {
  const remaining = minLength - value.length;
  const isReady = remaining <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={disabled ? 'opacity-50' : ''}
    >
      {hint && (
        <p className="text-sm text-text-muted italic mb-2 leading-relaxed">
          {hint}
        </p>
      )}

      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          rows={5}
          placeholder="Type your response..."
          className={`
            w-full rounded-xl border border-border bg-dark-800 px-4 py-3
            text-sm text-text-primary placeholder:text-text-muted/50
            leading-relaxed resize-y
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
            transition-colors duration-200
            ${disabled ? 'cursor-not-allowed' : ''}
          `}
        />

        <div className="flex items-center justify-between mt-2 px-1">
          <span
            className={`text-xs font-medium ${
              isReady ? 'text-green' : 'text-text-muted'
            }`}
          >
            {isReady ? 'Ready' : `${remaining} more character${remaining !== 1 ? 's' : ''}`}
          </span>
          <span className="text-xs text-text-muted">
            {value.length}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
