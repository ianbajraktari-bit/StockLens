import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CalendarClock,
  ChartLine,
  CircleDollarSign,
  ClipboardList,
  Lock,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * The Floor — the simulator. Phase 2 placeholder.
 *
 * This page exists in Phase 1 so users (and future Claude sessions) can
 * see the shape of the Hub even before the simulator is built. It also
 * sets a clear, specific expectation about what's coming so we don't
 * arrive at Phase 2 and start arguing about scope.
 */
export default function FloorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      <div className="scene-mesh" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full blur-[110px] bg-warm/[0.06]" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[320px] rounded-full blur-[80px] bg-accent/[0.04]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Back nav */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Home
        </button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
          className="space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-warm/25 via-warm/10 to-transparent border border-warm/30 shadow-[0_0_28px_-4px_rgba(245,158,11,0.25)]">
              <ChartLine className="w-5 h-5 text-warm" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-dark-900 border border-warm/40 flex items-center justify-center">
                <Lock className="w-2 h-2 text-warm" />
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-[22px] font-extrabold text-text-primary leading-tight tracking-tight">
                  The Floor
                </h1>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-md bg-warm/12 text-warm border border-warm/20">
                  Phase 2
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1 leading-snug">
                The simulator. Live portfolio. Forced rationale on every move. Coming next.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What it is */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC, delay: 0.05 }}
          className="rounded-2xl border border-warm/20 bg-gradient-to-br from-warm/[0.05] via-dark-800/60 to-dark-800/40 backdrop-blur-sm p-5 space-y-3"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-warm" />
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-warm">
              What this will be
            </p>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            A fictional fund — $100,000 starting capital, a real watchlist, time advancing one
            simulated week per day. Each week brings a curated event: an earnings print, a
            competitive shift, a macro shock. You decide buy / sell / hold and write the
            rationale before you can submit. Every decision feeds your journal and your
            track record.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            This is the layer no other investing app builds — because it&apos;s the only one
            that forces you to commit before you know how it ends. That&apos;s where emotional
            discipline gets built.
          </p>
        </motion.div>

        {/* Mechanics preview */}
        <div className="space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted px-1">
            What you&apos;ll do here
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <PreviewTile
              icon={CircleDollarSign}
              title="Manage a real-feel portfolio"
              detail="$100K, your own picks, real-feel constraints."
            />
            <PreviewTile
              icon={CalendarClock}
              title="Live through compressed time"
              detail="One in-app week per day. Earnings happen. Things shift."
            />
            <PreviewTile
              icon={ClipboardList}
              title="Write a memo for every move"
              detail="Buy / sell / hold — defended in writing or not allowed."
            />
            <PreviewTile
              icon={ShieldAlert}
              title="Argue both sides"
              detail="Every bull case requires the bear case before submission."
            />
            <PreviewTile
              icon={TrendingUp}
              title="Build a track record"
              detail="Predictions vs. what actually happened — over months."
            />
            <PreviewTile
              icon={Brain}
              title="Surface your own biases"
              detail="The patterns you fall for, made visible to you."
            />
          </div>
        </div>

        {/* Why */}
        <div className="rounded-xl border border-white/[0.04] bg-dark-800/30 p-4 space-y-1.5">
          <div className="flex items-center gap-2">
            <Target className="w-3.5 h-3.5 text-accent-light" />
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
              Why this exists
            </p>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Reading about cycles, drawdowns, and emotional discipline doesn&apos;t build
            them — only living through them does. The Floor lets you live through them on a
            timeline you can actually finish, with stakes that feel real because the writing
            is real.
          </p>
        </div>

        {/* CTA back to existing surfaces */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => navigate('/library')}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-white/[0.06] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1] text-text-secondary text-xs font-semibold transition-all cursor-pointer backdrop-blur-sm"
          >
            Browse the Library
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => navigate('/journal')}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-accent/25 bg-gradient-to-r from-accent/[0.1] to-accent/[0.03] hover:from-accent/[0.15] text-accent-light text-xs font-bold transition-all cursor-pointer backdrop-blur-sm"
          >
            Open Journal
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PreviewTile({
  icon: Icon,
  title,
  detail,
}: {
  icon: LucideIcon;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-dark-800/40 p-3.5 space-y-1.5 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-warm/10 border border-warm/25 flex items-center justify-center shrink-0">
          <Icon className="w-3.5 h-3.5 text-warm" />
        </div>
        <p className="text-xs font-bold text-text-primary leading-tight">{title}</p>
      </div>
      <p className="text-[11px] text-text-muted leading-snug pl-9">{detail}</p>
    </div>
  );
}
