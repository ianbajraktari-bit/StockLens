import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  step: number;
  title: string;
  subtitle: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function SectionCard({
  step,
  title,
  subtitle,
  icon,
  children,
}: SectionCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-2xl border border-border bg-dark-800 overflow-hidden"
    >
      <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-border flex items-center gap-4">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium text-accent-light uppercase tracking-widest mb-0.5">
            Step {step}
          </p>
          <h2 className="text-xl font-semibold text-text-primary leading-tight">
            {title}
          </h2>
          <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="px-6 py-6 sm:px-8 sm:py-8">{children}</div>
    </motion.section>
  );
}
