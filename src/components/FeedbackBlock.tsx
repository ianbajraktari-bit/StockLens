import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

type Status = 'correct' | 'partial' | 'incorrect' | 'neutral';

interface FeedbackBlockProps {
  status: Status;
  title: string;
  feedback: string;
  followUpQuestion?: string;
}

const statusConfig: Record<
  Status,
  { icon: typeof CheckCircle; border: string; bg: string; iconColor: string }
> = {
  correct: {
    icon: CheckCircle,
    border: 'border-green/30',
    bg: 'bg-green-glow',
    iconColor: 'text-green',
  },
  partial: {
    icon: AlertTriangle,
    border: 'border-amber/30',
    bg: 'bg-amber-glow',
    iconColor: 'text-amber',
  },
  incorrect: {
    icon: XCircle,
    border: 'border-red/30',
    bg: 'bg-red-glow',
    iconColor: 'text-red',
  },
  neutral: {
    icon: Info,
    border: 'border-accent/30',
    bg: 'bg-accent-glow',
    iconColor: 'text-accent-light',
  },
};

export default function FeedbackBlock({
  status,
  title,
  feedback,
  followUpQuestion,
}: FeedbackBlockProps) {
  const { icon: Icon, border, bg, iconColor } = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`rounded-2xl border ${border} ${bg} px-6 py-5 sm:px-8 sm:py-6`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`${iconColor} mt-0.5 shrink-0`} size={20} />
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-text-primary">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
            {feedback}
          </p>
          {followUpQuestion && (
            <p className="mt-4 text-sm font-medium text-text-primary italic">
              {followUpQuestion}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
