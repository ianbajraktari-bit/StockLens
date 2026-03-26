import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, HelpCircle, ChevronDown, Send } from 'lucide-react';

interface ThesisEntryProps {
  companyName: string;
  companyLogo: string;
  companyColor: string;
  hook: {
    headline: string;
    subheadline: string;
    criticalFacts: { label: string; value: string; context: string }[];
    initialPrompt: string;
  };
  savedStance?: 'bullish' | 'bearish' | 'unsure' | null;
  savedReason?: string;
  onComplete: (stance: 'bullish' | 'bearish' | 'unsure', reason: string) => void;
}

type Stance = 'bullish' | 'bearish' | 'unsure';

const stanceConfig: Record<Stance, { label: string; icon: typeof TrendingUp; colorClass: string; bgClass: string; borderClass: string; glowClass: string }> = {
  bullish: {
    label: 'Bullish',
    icon: TrendingUp,
    colorClass: 'text-green',
    bgClass: 'bg-green/15',
    borderClass: 'border-green/50',
    glowClass: 'shadow-[0_0_20px_rgba(34,197,94,0.15)]',
  },
  bearish: {
    label: 'Bearish',
    icon: TrendingDown,
    colorClass: 'text-red',
    bgClass: 'bg-red/15',
    borderClass: 'border-red/50',
    glowClass: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]',
  },
  unsure: {
    label: 'Unsure',
    icon: HelpCircle,
    colorClass: 'text-amber',
    bgClass: 'bg-amber/15',
    borderClass: 'border-amber/50',
    glowClass: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]',
  },
};

export default function ThesisEntry({
  companyLogo,
  companyColor,
  hook,
  savedStance,
  savedReason,
  onComplete,
}: ThesisEntryProps) {
  const isCompleted = !!(savedStance && savedReason);

  const [stance, setStance] = useState<Stance | null>(savedStance ?? null);
  const [reason, setReason] = useState(savedReason ?? '');
  const [submitted, setSubmitted] = useState(isCompleted);

  useEffect(() => {
    if (savedStance) setStance(savedStance);
    if (savedReason) {
      setReason(savedReason);
      setSubmitted(true);
    }
  }, [savedStance, savedReason]);

  const canSubmit = stance && reason.trim().length >= 10;

  const handleSubmit = () => {
    if (!stance || !canSubmit) return;
    setSubmitted(true);
    onComplete(stance, reason.trim());
  };

  // ── Completed summary ──
  if (submitted && stance) {
    const cfg = stanceConfig[stance];
    const Icon = cfg.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border bg-dark-800 p-6"
      >
        {/* Header row */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{companyLogo}</span>
          <h2 className="text-lg font-bold text-text-primary tracking-tight">{hook.headline}</h2>
        </div>

        {/* Stance + reason summary */}
        <div className={`rounded-xl border ${cfg.borderClass} ${cfg.bgClass} p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <Icon className={`h-4 w-4 ${cfg.colorClass}`} />
            <span className={`text-sm font-semibold ${cfg.colorClass}`}>{cfg.label}</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{reason}</p>
        </div>

        {/* Continue indicator */}
        <motion.div
          className="flex items-center justify-center gap-1 mt-4 text-text-muted"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium">Continue</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.div>
      </motion.div>
    );
  }

  // ── Active state ──
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border bg-dark-800 overflow-hidden"
    >
      {/* ── Cinematic header ── */}
      <div className="relative px-8 pt-10 pb-8">
        {/* Subtle gradient glow */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${companyColor}40 0%, transparent 70%)`,
          }}
        />

        <div className="relative">
          <motion.div
            className="text-4xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {companyLogo}
          </motion.div>
          <motion.h1
            className="text-3xl font-extrabold text-text-primary tracking-tight leading-tight mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {hook.headline}
          </motion.h1>
          <motion.p
            className="text-base text-text-muted max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {hook.subheadline}
          </motion.p>
        </div>
      </div>

      {/* ── Critical facts grid ── */}
      <div className="px-8 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {hook.criticalFacts.slice(0, 4).map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
              className="rounded-xl border border-dark-500 bg-dark-700/60 px-4 py-3"
            >
              <p className="text-xl font-bold text-text-primary tracking-tight leading-none mb-1">
                {fact.value}
              </p>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-0.5">
                {fact.label}
              </p>
              <p className="text-xs text-text-muted/70 leading-snug">{fact.context}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Stance selection ── */}
      <div className="px-8 pb-6">
        <motion.p
          className="text-sm font-semibold text-text-secondary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          What's your initial read?
        </motion.p>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.4 }}
        >
          {(Object.keys(stanceConfig) as Stance[]).map((key) => {
            const cfg = stanceConfig[key];
            const Icon = cfg.icon;
            const isSelected = stance === key;

            return (
              <button
                key={key}
                onClick={() => setStance(key)}
                className={`
                  flex-1 flex items-center justify-center gap-2 rounded-xl border py-3 px-4
                  text-sm font-semibold transition-all duration-200 cursor-pointer
                  ${
                    isSelected
                      ? `${cfg.bgClass} ${cfg.borderClass} ${cfg.colorClass} ${cfg.glowClass}`
                      : 'border-dark-500 text-text-muted hover:border-dark-400 hover:text-text-secondary'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {cfg.label}
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* ── Reason textarea (reveals after stance) ── */}
      <AnimatePresence>
        {stance && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                {hook.initialPrompt}
              </p>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Share your reasoning…"
                rows={3}
                className="
                  w-full rounded-xl border border-dark-500 bg-dark-700/60 px-4 py-3
                  text-sm text-text-primary placeholder:text-text-muted/50
                  focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                  resize-none transition-colors
                "
              />
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-text-muted">
                  {reason.trim().length < 10
                    ? `${10 - reason.trim().length} more characters needed`
                    : 'Ready to submit'}
                </span>
                <AnimatePresence>
                  {canSubmit && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      onClick={handleSubmit}
                      className="
                        flex items-center gap-2 rounded-lg bg-accent px-4 py-2
                        text-sm font-semibold text-white cursor-pointer
                        hover:bg-accent-light transition-colors
                      "
                    >
                      <Send className="h-3.5 w-3.5" />
                      Submit
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
