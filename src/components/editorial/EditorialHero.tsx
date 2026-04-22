import { motion } from 'framer-motion';
import { ArrowRight, Brain, Target, Layers, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const VALUE_PROPS: { icon: LucideIcon; label: string; color: string }[] = [
  { icon: Brain, label: 'Think, don\'t memorize', color: 'text-accent-light' },
  { icon: Target, label: 'Real companies', color: 'text-warm' },
  { icon: Layers, label: '5 formats', color: 'text-green-light' },
];

export function EditorialHero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 mb-4">
      {/* Ambient grid */}
      <div className="editorial-grid-bg" aria-hidden />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.07] rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-signal/[0.05] rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light/80">
            Free &middot; No Account Required
          </span>
        </motion.div>

        {/* Oversized headline — Exaggerated Minimalism */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="editorial-headline font-black tracking-tighter leading-[0.95] text-text-primary"
        >
          Learn to Think
          <br />
          Like an{' '}
          <span className="editorial-gradient-word">Investor</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto"
        >
          Interactive lessons that teach reasoning — not memorization.
          <br className="hidden sm:block" />
          Analyze Apple, NVIDIA, and Costco with real data.
        </motion.p>

        {/* Value prop pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mt-8"
        >
          {VALUE_PROPS.map(({ icon: Icon, label, color }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE, delay: 0.5 + i * 0.08 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl
                         border border-white/[0.06] bg-dark-800/60 backdrop-blur-sm
                         text-[12px] font-medium text-text-secondary
                         hover:border-white/[0.12] hover:bg-dark-800/80 transition-all duration-300"
            >
              <Icon className={`w-3.5 h-3.5 ${color}`} />
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.65 }}
          className="mt-10"
        >
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                       bg-gradient-to-r from-accent via-accent to-signal/80
                       text-white text-base font-bold cursor-pointer
                       shadow-[0_8px_40px_-8px_rgba(99,102,241,0.7),0_0_0_1px_rgba(99,102,241,0.3)]
                       hover:shadow-[0_16px_60px_-8px_rgba(99,102,241,0.8),0_0_0_1px_rgba(99,102,241,0.5)]
                       transition-shadow duration-400"
          >
            Start Learning
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          <p className="mt-4 text-[11px] text-text-faint">
            38 lessons &middot; 16 analyst cases &middot; Daily practice
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default EditorialHero;
