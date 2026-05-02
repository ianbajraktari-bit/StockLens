import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  ChevronRight,
  Compass,
  Library,
  Lock,
  Skull,
  Target,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { allLessons } from '../data/lessons';
import { allCompanies } from '../data/companies';
import {
  getCompletedIds,
  getCompletedAnalyses,
  getCompanyResponseCount,
} from '../lib/progression';
import { getReviewPoolSize, hasCompletedToday } from '../lib/review';

const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * The Library — the resource layer of the Hub. Browseable shelves of every
 * piece of reference material the user can pull from: lessons, company
 * profiles, daily practice, and (future) failure cases. Library is for
 * *consulting*; the Desk and Floor are for *doing*.
 */
export default function LibraryPage() {
  const navigate = useNavigate();

  const completedIds = useMemo(() => getCompletedIds(), []);
  const analysesCompleted = useMemo(() => getCompletedAnalyses(), []);
  const reviewPoolSize = useMemo(() => getReviewPoolSize(), []);
  const dailyDoneToday = useMemo(() => hasCompletedToday(), []);

  const lessonStats = {
    total: allLessons.length,
    completed: [...completedIds].filter((id) =>
      allLessons.some((l) => l.id === id),
    ).length,
    foundationsCount: allLessons.filter((l) => l.tier !== 'company').length,
    companyLessonsCount: allLessons.filter((l) => l.tier === 'company').length,
  };

  const companyStats = {
    total: allCompanies.length,
    completed: analysesCompleted.size,
    inProgress: allCompanies.filter((c) => {
      const n = getCompanyResponseCount(c.id);
      return n > 0 && n < 7;
    }).length,
  };

  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      <div className="scene-mesh" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full blur-[110px] bg-accent/[0.06]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[320px] rounded-full blur-[80px] bg-signal/[0.04]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-6 space-y-6">
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
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-accent/25 via-accent/10 to-signal/[0.05] border border-accent/30 shadow-[0_0_28px_-4px_rgba(99,102,241,0.25)]">
              <Library className="w-5 h-5 text-accent-light" />
            </div>
            <div>
              <h1 className="text-[22px] font-extrabold text-text-primary leading-tight tracking-tight">
                Library
              </h1>
              <p className="text-xs text-text-secondary mt-0.5">
                Consult these like reference material — pull what you need, when you need it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Shelves */}
        <div className="space-y-3">
          <Shelf
            icon={BookOpen}
            tone="accent"
            title="Lessons"
            subtitle={`${lessonStats.foundationsCount} foundations · ${lessonStats.companyLessonsCount} company deep dives`}
            statValue={`${lessonStats.completed}/${lessonStats.total}`}
            statLabel="completed"
            onClick={() => navigate('/?tab=learn')}
          />

          <Shelf
            icon={Building2}
            tone="warm"
            title="Companies"
            subtitle={`${companyStats.total} real businesses across every major sector — write a 7-step memo on any of them`}
            statValue={`${companyStats.completed}/${companyStats.total}`}
            statLabel={
              companyStats.inProgress > 0
                ? `analyzed · ${companyStats.inProgress} in progress`
                : 'analyzed'
            }
            onClick={() => navigate('/analyst')}
          />

          <Shelf
            icon={Zap}
            tone="signal"
            title="Daily Practice"
            subtitle={
              reviewPoolSize > 0
                ? `${reviewPoolSize} questions in your review pool · ${dailyDoneToday ? "today's session done" : 'today is open'}`
                : 'Complete a lesson to start building your review pool'
            }
            statValue={dailyDoneToday ? '✓' : reviewPoolSize > 0 ? '5' : '—'}
            statLabel={dailyDoneToday ? 'today' : reviewPoolSize > 0 ? "today's mix" : 'unlocks soon'}
            onClick={() => navigate('/review/daily')}
            disabled={reviewPoolSize === 0}
          />

          {/* Failure Cases — placeholder shelf for Phase 3 content */}
          <Shelf
            icon={Skull}
            tone="muted"
            title="Failure Cases"
            subtitle="Enron, Lehman, Sears, WeWork — wins teach less than losses"
            statValue="—"
            statLabel="Phase 3"
            comingSoon
          />

          {/* Tools — placeholder shelf */}
          <Shelf
            icon={Target}
            tone="muted"
            title="Tools"
            subtitle="DCF, multiples, screeners, calendars — calculators that show their work"
            statValue="—"
            statLabel="Phase 4"
            comingSoon
          />
        </div>

        {/* Footer note */}
        <div className="rounded-xl border border-white/[0.04] bg-dark-800/30 p-4 space-y-1.5">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-accent-light" />
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
              How to use the Library
            </p>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            The Library is the *resource* layer — concepts, companies, practice, and tools you
            consult on demand. The actual work happens on the <span className="text-accent-light font-semibold">Floor</span> (the simulator,
            coming next) and lands in your <span className="text-accent-light font-semibold">Journal</span>. Lessons aren&apos;t the goal —
            they&apos;re the manual.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Shelf — a single library card
// ─────────────────────────────────────────────────────────────────────

interface ShelfProps {
  icon: LucideIcon;
  tone: 'accent' | 'warm' | 'signal' | 'muted';
  title: string;
  subtitle: string;
  statValue: string;
  statLabel: string;
  onClick?: () => void;
  disabled?: boolean;
  comingSoon?: boolean;
}

function Shelf({
  icon: Icon,
  tone,
  title,
  subtitle,
  statValue,
  statLabel,
  onClick,
  disabled,
  comingSoon,
}: ShelfProps) {
  const palette = paletteFor(tone);
  const interactive = onClick != null && !disabled && !comingSoon;

  const inner = (
    <div className="w-full text-left flex items-center gap-4 p-4 sm:p-5">
      <div
        className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${palette.iconWrap}`}
      >
        <Icon className={`w-5 h-5 ${palette.iconColor}`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <p className="text-base font-bold text-text-primary leading-tight">
            {title}
          </p>
          {comingSoon && (
            <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-md bg-dark-700/80 border border-white/[0.06] text-text-muted">
              <Lock className="w-2.5 h-2.5" />
              {statLabel}
            </span>
          )}
        </div>
        <p className="text-xs text-text-secondary leading-snug truncate">{subtitle}</p>
      </div>

      <div className="hidden sm:block text-right shrink-0">
        <p className={`text-lg font-extrabold data-num leading-none ${palette.statColor}`}>
          {statValue}
        </p>
        <p className="text-[10px] text-text-muted mt-1 uppercase tracking-wider">
          {!comingSoon && statLabel}
        </p>
      </div>

      <div className="shrink-0 ml-1">
        {comingSoon ? (
          <ChevronRight className="w-4 h-4 text-text-faint" />
        ) : (
          <ArrowRight
            className={`w-4 h-4 transition-transform ${
              interactive ? 'text-text-secondary group-hover:translate-x-0.5' : 'text-text-faint'
            }`}
          />
        )}
      </div>
    </div>
  );

  const className = `group rounded-2xl border ${palette.cardBorder} ${palette.cardBg} overflow-hidden transition-all duration-300 ${
    interactive
      ? 'cursor-pointer hover:shadow-[0_8px_28px_-10px_rgba(99,102,241,0.25)] hover:-translate-y-0.5'
      : disabled
        ? 'opacity-60 cursor-not-allowed'
        : 'opacity-75 cursor-default'
  }`;

  if (interactive) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: EASE_CINEMATIC }}
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.99 }}
        className={`${className} w-full text-left`}
      >
        {inner}
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE_CINEMATIC }}
      className={className}
    >
      {inner}
    </motion.div>
  );
}

function paletteFor(tone: 'accent' | 'warm' | 'signal' | 'muted'): {
  iconWrap: string;
  iconColor: string;
  statColor: string;
  cardBorder: string;
  cardBg: string;
} {
  switch (tone) {
    case 'accent':
      return {
        iconWrap: 'bg-accent/12 border-accent/30',
        iconColor: 'text-accent-light',
        statColor: 'text-accent-light',
        cardBorder: 'border-accent/20',
        cardBg: 'bg-gradient-to-br from-accent/[0.06] via-dark-800/60 to-dark-800/40 backdrop-blur-sm',
      };
    case 'warm':
      return {
        iconWrap: 'bg-warm/12 border-warm/30',
        iconColor: 'text-warm',
        statColor: 'text-warm',
        cardBorder: 'border-warm/20',
        cardBg: 'bg-gradient-to-br from-warm/[0.06] via-dark-800/60 to-dark-800/40 backdrop-blur-sm',
      };
    case 'signal':
      return {
        iconWrap: 'bg-signal/12 border-signal/30',
        iconColor: 'text-accent-light',
        statColor: 'text-accent-light',
        cardBorder: 'border-signal/20',
        cardBg: 'bg-gradient-to-br from-signal/[0.06] via-dark-800/60 to-dark-800/40 backdrop-blur-sm',
      };
    case 'muted':
      return {
        iconWrap: 'bg-dark-700/80 border-white/[0.06]',
        iconColor: 'text-text-muted',
        statColor: 'text-text-muted',
        cardBorder: 'border-white/[0.04]',
        cardBg: 'bg-dark-800/30 backdrop-blur-sm',
      };
  }
}

