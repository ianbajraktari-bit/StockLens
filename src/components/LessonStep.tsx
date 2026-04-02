import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface LessonStepProps {
  title: string;
  content: ReactNode;
  onContinue: () => void;
}

export default function LessonStep({
  title,
  content,
  onContinue,
}: LessonStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="rounded-2xl border border-border bg-dark-800 px-6 py-6 sm:px-8 sm:py-8"
    >
      <h2 className="text-xl font-semibold text-text-primary mb-4">{title}</h2>
      <div className="text-sm text-text-secondary leading-relaxed mb-6">
        {content}
      </div>
      <button
        onClick={onContinue}
        className="px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors cursor-pointer"
      >
        Continue
      </button>
    </motion.div>
  );
}
