import { motion } from 'framer-motion';
import { Zap, Calculator, Search, Brain, PenTool } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface BentoCard {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  glow: string;
  span: 1 | 2;
}

const CARDS: BentoCard[] = [
  {
    icon: Zap,
    title: 'Drills',
    description: 'Rapid binary choices that build pattern recognition. Tap left or right — get instant feedback.',
    accent: 'text-accent-light',
    glow: 'hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.4)]',
    span: 2,
  },
  {
    icon: Calculator,
    title: 'Estimates',
    description: 'Commit to a number before seeing the answer. Builds calibration.',
    accent: 'text-electric',
    glow: 'hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.4)]',
    span: 1,
  },
  {
    icon: Search,
    title: 'Signal Finding',
    description: 'Spot red flags and key signals hidden in real financial text.',
    accent: 'text-warm',
    glow: 'hover:shadow-[0_0_40px_-8px_rgba(245,158,11,0.4)]',
    span: 1,
  },
  {
    icon: Brain,
    title: 'Decisions',
    description: 'Multiple choice with a punchline. Every wrong answer is a real cognitive trap.',
    accent: 'text-signal',
    glow: 'hover:shadow-[0_0_40px_-8px_rgba(167,139,250,0.4)]',
    span: 1,
  },
  {
    icon: PenTool,
    title: 'Synthesis',
    description: 'Write your own investment thesis. Compare against a model analysis — no AI grading.',
    accent: 'text-green',
    glow: 'hover:shadow-[0_0_40px_-8px_rgba(34,197,94,0.4)]',
    span: 1,
  },
];

export function BentoShowcase() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-6"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-1.5">
          How You'll Learn
        </p>
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
          Five ways to sharpen your thinking
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-2.5">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 + i * 0.07 }}
            className={`group relative rounded-2xl border border-white/[0.06]
                        bg-dark-800/50 backdrop-blur-sm p-5 cursor-default
                        hover:border-white/[0.12] hover:bg-dark-800/70
                        transition-all duration-400
                        ${card.glow}
                        ${card.span === 2 ? 'col-span-2' : 'col-span-2 sm:col-span-1'}`}
          >
            {/* Inner glow on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 30% 20%, ${accentToRgba(card.accent, 0.06)}, transparent 70%)`,
              }}
              aria-hidden
            />

            <div className="relative z-10">
              <div className={`w-10 h-10 rounded-xl border border-white/[0.06] bg-dark-700/60
                              flex items-center justify-center mb-3.5
                              group-hover:border-white/[0.12] transition-colors duration-300`}>
                <card.icon className={`w-5 h-5 ${card.accent}`} />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">{card.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function accentToRgba(accentClass: string, alpha: number): string {
  const map: Record<string, string> = {
    'text-accent-light': `rgba(129, 140, 248, ${alpha})`,
    'text-electric': `rgba(56, 189, 248, ${alpha})`,
    'text-warm': `rgba(245, 158, 11, ${alpha})`,
    'text-signal': `rgba(167, 139, 250, ${alpha})`,
    'text-green': `rgba(34, 197, 94, ${alpha})`,
  };
  return map[accentClass] ?? `rgba(99, 102, 241, ${alpha})`;
}

export default BentoShowcase;
