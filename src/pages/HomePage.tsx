import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  Brain,
  Target,
  Flame,
  Calendar,
  Trophy,
  Lock,
  Award,
  Layers,
  NotebookPen,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { allLessons, type Lesson } from '../data/lessons';
import { allCompanies, type CompanyProfile } from '../data/companies';
import {
  getCompletedIds,
  getFirstUncompletedId,
  getSkillsProgress,
  getStreak,
  getCompletedAnalyses,
  getCompanyResponseCount,
  getCompanyLastActivity,
} from '../lib/progression';
import {
  getReviewPoolSize,
  hasCompletedToday,
  getTodayResult,
  DAILY_PRACTICE_SIZE,
} from '../lib/review';
import { getLevelInfo } from '../lib/xp';
import { getQuestProgress, type QuestStatus } from '../lib/quests';
import {
  getJournalStats,
  getAllEntries,
  entryTypeLabel,
  type JournalEntry,
} from '../lib/journal';
import { CountUp } from '../components/hud/CountUp';
import { GlassPanel } from '../components/hud/GlassPanel';
import { TickerBar } from '../components/hud/TickerBar';
import { LivePulse } from '../components/hud/LivePulse';
import {
  SPRING_CELEBRATION,
  SPRING_FLUID,
} from '../lib/motion';

const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

function greetingForHour(h: number): string {
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

// ─────────────────────────────────────────────────────────────────────
// HomePage shell — vertical "morning open" desk
// ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const navigate = useNavigate();
  const completedIds = getCompletedIds();
  const nextId = getFirstUncompletedId();
  const skillsProgress = getSkillsProgress();
  const hasAnyProgress = skillsProgress.some((s) => s.exposure > 0);
  const streak = getStreak();
  const completedCount = completedIds.size;
  const totalCount = allLessons.length;
  const analysesCompleted = getCompletedAnalyses();
  const reviewPoolSize = getReviewPoolSize();
  const dailyDoneToday = hasCompletedToday();
  const todayResult = dailyDoneToday ? getTodayResult() : null;
  const levelInfo = getLevelInfo();
  const questProgress = getQuestProgress();
  const questsEarned = questProgress.filter((q) => q.earned).length;
  const journalStats = getJournalStats();
  const recentEntries = getAllEntries().slice(0, 4);

  const nextLesson: Lesson | null = nextId
    ? allLessons.find((l) => l.id === nextId) ?? null
    : null;

  const inProgressAnalyses = allCompanies
    .filter(
      (c) =>
        getCompanyResponseCount(c.id) > 0 && !analysesCompleted.has(c.id),
    )
    .map((c) => ({
      company: c,
      lastActivity: getCompanyLastActivity(c.id) ?? '',
      responseCount: getCompanyResponseCount(c.id),
    }))
    .sort((a, b) => b.lastActivity.localeCompare(a.lastActivity));
  const topInProgress = inProgressAnalyses[0] ?? null;

  function handleStart() {
    const target = nextId ?? allLessons[0].id;
    navigate(`/lesson/${target}`);
  }

  return (
    <div className="min-h-screen bg-dark-950 relative">
      {/* Ambient scene — mesh gradient + floating orbs */}
      <div className="scene-mesh" aria-hidden />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Atmospheric ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 border-b border-white/[0.04] bg-dark-950/40 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <TickerBar />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <DeskHeader
          levelInfo={levelInfo}
          streak={streak}
          journalCount={journalStats.total}
          hasAnyProgress={hasAnyProgress}
          onJournal={() => navigate('/journal')}
        />

        {!hasAnyProgress && <OnboardingHero onStart={handleStart} />}

        {/* Hub mode strip — always present, anchors the new shape */}
        <ModeStrip
          journalCount={journalStats.total}
          onLibrary={() => navigate('/library')}
          onFloor={() => navigate('/floor')}
          onJournal={() => navigate('/journal')}
        />

        <div className="py-6 pb-12 space-y-10">
          {hasAnyProgress && (
            <TodaySection
              nextLesson={nextLesson}
              onContinueLesson={handleStart}
              reviewPoolSize={reviewPoolSize}
              dailyDoneToday={dailyDoneToday}
              todayResult={todayResult}
              streak={streak}
              onStartPractice={() => navigate('/review/daily')}
              topInProgress={topInProgress}
              onResumeAnalysis={(id) => navigate(`/analyst/${id}`)}
              onBrowseAnalyst={() => navigate('/analyst')}
            />
          )}

          {hasAnyProgress && (
            <JournalSection
              entries={recentEntries}
              total={journalStats.total}
              onOpen={() => navigate('/journal')}
              onEntry={(entry) => {
                if (entry.companyId) {
                  navigate(`/analyst/${entry.companyId}`);
                  return;
                }
                if (entry.lessonId) {
                  navigate(`/lesson/${entry.lessonId}`);
                  return;
                }
                navigate('/journal');
              }}
            />
          )}

          <ProgressSection
            levelInfo={levelInfo}
            questsEarned={questsEarned}
            questProgress={questProgress}
            skillsProgress={skillsProgress}
            streak={streak}
            completedCount={completedCount}
            totalCount={totalCount}
            analysesCount={analysesCompleted.size}
            hasAnyProgress={hasAnyProgress}
          />
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-white/[0.04]">
          <p className="text-[10px] text-text-faint tracking-wide">
            StockLens — A learning tool, not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// DeskHeader — branding + greeting + journal pill + level ring
// ─────────────────────────────────────────────────────────────────────

function DeskHeader({
  levelInfo,
  streak,
  journalCount,
  hasAnyProgress,
  onJournal,
}: {
  levelInfo: ReturnType<typeof getLevelInfo>;
  streak: { current: number };
  journalCount: number;
  hasAnyProgress: boolean;
  onJournal: () => void;
}) {
  const greeting = greetingForHour(new Date().getHours());

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_CINEMATIC }}
      className="pt-5 pb-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-accent/25 via-accent/10 to-signal/10
                          border border-white/[0.08]
                          shadow-[0_0_20px_-4px_rgba(99,102,241,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
            <TrendingUp className="w-5 h-5 text-accent-light" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white/[0.06]" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none">
              <span className="gradient-text">StockLens</span>
            </h1>
            <p className="text-[10px] text-text-muted mt-0.5 font-medium tracking-widest uppercase">
              Investor Education
            </p>
          </div>
        </div>

        {hasAnyProgress && (
          <div className="flex items-center gap-2.5">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={SPRING_FLUID}
              onClick={onJournal}
              whileHover={{ y: -1, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-accent-light
                bg-gradient-to-br from-accent/12 to-accent/[0.03]
                border border-accent/25 cursor-pointer
                shadow-[0_0_14px_-4px_rgba(99,102,241,0.25)] hover:border-accent/45 transition-colors"
              aria-label={`Open journal — ${journalCount} ${journalCount === 1 ? 'entry' : 'entries'}`}
            >
              <NotebookPen className="w-3.5 h-3.5" />
              <span className="data-num">{journalCount}</span>
              <span className="hidden sm:inline text-[9px] font-bold uppercase tracking-widest text-accent-light/70">
                Journal
              </span>
            </motion.button>
            {streak.current > 0 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={SPRING_FLUID}
                className={`hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-warm
                  bg-gradient-to-br from-warm/15 to-warm/[0.03]
                  border border-warm/20
                  shadow-[0_0_16px_-4px_rgba(245,158,11,0.2)] ${
                  streak.current >= 7
                    ? 'shadow-[0_0_20px_-2px_rgba(245,158,11,0.35)]'
                    : ''
                }`}
                aria-label={`Day ${streak.current} streak active`}
              >
                <LivePulse tone="warm" />
                <Flame className={`w-3.5 h-3.5 ${streak.current >= 3 ? 'drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]' : ''}`} />
                <span className="data-num">{streak.current}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-warm/70">Day</span>
              </motion.div>
            )}
            <LevelBadgeRing
              level={levelInfo.level}
              progressPct={levelInfo.progressPct}
            />
          </div>
        )}
      </div>

      {hasAnyProgress && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_CINEMATIC, delay: 0.12 }}
          className="mt-5"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-light/70">
            {greeting}
          </p>
          <p className="text-base text-text-secondary mt-1.5 leading-relaxed">
            Your desk is ready —{' '}
            <span className="text-text-primary font-semibold">
              {levelInfo.title}
            </span>
            .
          </p>
        </motion.div>
      )}
    </motion.header>
  );
}

// ─────────────────────────────────────────────────────────────────────
// LevelBadgeRing — small ring badge in the header
// ─────────────────────────────────────────────────────────────────────

function LevelBadgeRing({
  level,
  progressPct,
}: {
  level: number;
  progressPct: number;
}) {
  return (
    <div
      className="relative w-11 h-11"
      aria-label={`Level ${level}, ${Math.round(progressPct * 100)} percent to next level`}
    >
      <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-dark-700"
        />
        <motion.circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-accent-light"
          initial={{ strokeDasharray: '0 100' }}
          animate={{ strokeDasharray: `${progressPct * 94.2} 100` }}
          transition={{ duration: 0.9, ease: EASE_CINEMATIC, delay: 0.2 }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-text-primary data-num">
        {level}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// ModeStrip — the Hub mode strip (Library / Floor / Journal)
// ─────────────────────────────────────────────────────────────────────

function ModeStrip({
  journalCount,
  onLibrary,
  onFloor,
  onJournal,
}: {
  journalCount: number;
  onLibrary: () => void;
  onFloor: () => void;
  onJournal: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_CINEMATIC, delay: 0.1 }}
      className="grid grid-cols-3 gap-2 mb-3"
      role="navigation"
      aria-label="App modes"
    >
      <ModeTile
        icon={Layers}
        label="Library"
        sub="Lessons · companies · tools"
        tone="accent"
        onClick={onLibrary}
      />
      <ModeTile
        icon={TrendingUp}
        label="Floor"
        sub="Simulator · Phase 2"
        tone="warm"
        locked
        onClick={onFloor}
      />
      <ModeTile
        icon={Brain}
        label="Journal"
        sub={journalCount === 0 ? 'Start writing' : `${journalCount} ${journalCount === 1 ? 'entry' : 'entries'}`}
        tone="signal"
        onClick={onJournal}
      />
    </motion.div>
  );
}

function ModeTile({
  icon: Icon,
  label,
  sub,
  tone,
  locked,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  sub: string;
  tone: 'accent' | 'warm' | 'signal';
  locked?: boolean;
  onClick: () => void;
}) {
  const palette =
    tone === 'accent'
      ? {
          border: 'border-accent/25',
          bg: 'from-accent/[0.08] via-dark-800/60 to-dark-800/40',
          iconWrap: 'bg-accent/15 border-accent/30',
          iconColor: 'text-accent-light',
          labelColor: 'text-text-primary',
        }
      : tone === 'warm'
        ? {
            border: 'border-warm/25',
            bg: 'from-warm/[0.08] via-dark-800/60 to-dark-800/40',
            iconWrap: 'bg-warm/15 border-warm/30',
            iconColor: 'text-warm',
            labelColor: 'text-text-primary',
          }
        : {
            border: 'border-signal/25',
            bg: 'from-signal/[0.08] via-dark-800/60 to-dark-800/40',
            iconWrap: 'bg-signal/15 border-signal/30',
            iconColor: 'text-accent-light',
            labelColor: 'text-text-primary',
          };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING_FLUID}
      className={`relative rounded-2xl border ${palette.border} bg-gradient-to-br ${palette.bg} backdrop-blur-sm p-3 text-left cursor-pointer overflow-hidden hover:shadow-[0_8px_24px_-10px_rgba(99,102,241,0.25)] transition-shadow`}
    >
      <div className="flex items-start gap-2.5">
        <div
          className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${palette.iconWrap}`}
        >
          <Icon className={`w-4 h-4 ${palette.iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className={`text-xs font-bold leading-tight ${palette.labelColor}`}>
              {label}
            </p>
            {locked && (
              <Lock className="w-2.5 h-2.5 text-warm/80" />
            )}
          </div>
          <p className="text-[10px] text-text-muted mt-0.5 leading-snug truncate">
            {sub}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// OnboardingHero — only for brand-new users
// ─────────────────────────────────────────────────────────────────────

function OnboardingHero({ onStart }: { onStart: () => void }) {
  const props = [
    {
      icon: Brain,
      title: "Think, don't memorize",
      sub: 'Every interaction forces reasoning.',
      color: 'text-accent-light',
      bg: 'from-accent/15 to-accent/[0.02]',
      border: 'border-accent/20',
    },
    {
      icon: Target,
      title: 'Real companies',
      sub: 'Apple, NVIDIA, Costco — real data.',
      color: 'text-warm',
      bg: 'from-warm/12 to-warm/[0.02]',
      border: 'border-warm/20',
    },
    {
      icon: Layers,
      title: '5 formats',
      sub: 'Drills, estimates, decisions & more.',
      color: 'text-green-light',
      bg: 'from-green/12 to-green/[0.02]',
      border: 'border-green/20',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_CINEMATIC, delay: 0.08 }}
      className="mb-8"
    >
      <GlassPanel tone="accent" aurora scanlines className="px-6 pt-8 pb-6">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-light/70 mb-3"
        >
          Welcome to StockLens
        </motion.p>

        {/* Headline with gradient text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-[1.15]"
        >
          Learn to invest
          <br />
          <span className="gradient-text-animated">like a real analyst.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-sm text-text-secondary leading-relaxed mt-3 max-w-md"
        >
          Interactive lessons that teach reasoning — not memorization.
          Free, no account required.
        </motion.p>

        <div className="hairline my-5" aria-hidden />

        {/* Value prop cards */}
        <div className="grid grid-cols-3 gap-2">
          {props.map(({ icon: Icon, title, sub, color, bg, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease: EASE_CINEMATIC }}
              className={`rounded-xl border ${border} bg-gradient-to-br ${bg} p-3 space-y-2 backdrop-blur-sm`}
            >
              <div className={`w-7 h-7 rounded-lg bg-dark-900/60 border border-white/[0.06] flex items-center justify-center`}>
                <Icon className={`w-3.5 h-3.5 ${color}`} />
              </div>
              <p className="text-[11px] font-bold text-text-primary leading-tight">{title}</p>
              <p className="text-[10px] text-text-muted leading-snug">{sub}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          onClick={onStart}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          whileHover={{ scale: 1.015, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="btn-glow w-full flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl
                     bg-gradient-to-r from-accent via-accent to-signal/80
                     text-white text-sm font-bold cursor-pointer mt-5
                     shadow-[0_8px_32px_-8px_rgba(99,102,241,0.7),0_0_0_1px_rgba(99,102,241,0.3)]
                     hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.8),0_0_0_1px_rgba(99,102,241,0.4)]
                     transition-shadow duration-300"
        >
          Start Learning
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </GlassPanel>
    </motion.section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section eyebrow — shared across desk sections
// ─────────────────────────────────────────────────────────────────────

function SectionEyebrow({
  eyebrow,
  headline,
  sub,
  action,
}: {
  eyebrow: string;
  headline: string;
  sub?: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-light/80">
          {eyebrow}
        </p>
        <h2 className="text-lg font-bold text-text-primary mt-1 tracking-tight">
          {headline}
        </h2>
        {sub && (
          <p className="text-xs text-text-muted mt-1 leading-relaxed">{sub}</p>
        )}
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="text-[10px] font-bold uppercase tracking-wide text-accent-light hover:text-accent transition-colors cursor-pointer flex items-center gap-1 shrink-0"
        >
          {action.label}
          <ArrowRight className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// TodaySection — Continue lesson + Daily practice + Resume analysis
// ─────────────────────────────────────────────────────────────────────

function TodaySection({
  nextLesson,
  onContinueLesson,
  reviewPoolSize,
  dailyDoneToday,
  todayResult,
  streak,
  onStartPractice,
  topInProgress,
  onResumeAnalysis,
  onBrowseAnalyst,
}: {
  nextLesson: Lesson | null;
  onContinueLesson: () => void;
  reviewPoolSize: number;
  dailyDoneToday: boolean;
  todayResult: { correct: number; total: number } | null;
  streak: { current: number };
  onStartPractice: () => void;
  topInProgress:
    | { company: CompanyProfile; responseCount: number; lastActivity: string }
    | null;
  onResumeAnalysis: (companyId: string) => void;
  onBrowseAnalyst: () => void;
}) {
  return (
    <section aria-label="Today" className="space-y-4">
      <SectionEyebrow
        eyebrow="Today"
        headline="Pick up where you left off."
        sub="Three things ready for you right now."
      />

      <div className="space-y-3">
        <ContinueLessonCard
          lesson={nextLesson}
          onClick={onContinueLesson}
        />
        <DailyPracticeCard
          reviewPoolSize={reviewPoolSize}
          dailyDoneToday={dailyDoneToday}
          todayResult={todayResult}
          streak={streak}
          onStart={onStartPractice}
        />
        <ResumeAnalysisCard
          topInProgress={topInProgress}
          onResume={onResumeAnalysis}
          onBrowse={onBrowseAnalyst}
        />
      </div>
    </section>
  );
}

function ContinueLessonCard({
  lesson,
  onClick,
}: {
  lesson: Lesson | null;
  onClick: () => void;
}) {
  if (!lesson) {
    return (
      <div className="rounded-2xl border border-green/25 bg-gradient-to-br from-green/[0.08] via-dark-800/50 to-transparent p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-green/15 border border-green/30 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-6 h-6 text-green" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green/80">
            Curriculum complete
          </p>
          <p className="text-sm font-bold text-text-primary mt-0.5">
            Every lesson finished. The library is yours to revisit.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_CINEMATIC }}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      className="group w-full flex items-center gap-4 p-5 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.1] via-accent/[0.04] to-transparent hover:from-accent/[0.14] transition-all duration-300 cursor-pointer text-left overflow-hidden relative shadow-[0_4px_24px_-8px_rgba(99,102,241,0.2)] hover:shadow-[0_8px_40px_-8px_rgba(99,102,241,0.3)]"
    >
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent/25 to-accent/[0.05] border border-accent/30 flex items-center justify-center shrink-0 shadow-[0_0_16px_-4px_rgba(99,102,241,0.3)]">
        <span className="text-lg leading-none">{lesson.emoji}</span>
      </div>
      <div className="relative flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-light/70">
          Continue lesson
        </p>
        <p className="text-sm font-bold text-text-primary truncate mt-0.5">
          {lesson.title}
        </p>
        <p className="text-xs text-text-muted truncate">
          {lesson.subtitle}
        </p>
      </div>
      <div className="relative flex flex-col items-end gap-1 shrink-0">
        <div className="flex items-center gap-1 text-[10px] text-text-muted">
          <Clock className="w-3 h-3" />
          {lesson.estimatedMinutes}m
        </div>
        <ArrowRight className="w-4 h-4 text-accent-light group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.button>
  );
}

function DailyPracticeCard({
  reviewPoolSize,
  dailyDoneToday,
  todayResult,
  streak,
  onStart,
}: {
  reviewPoolSize: number;
  dailyDoneToday: boolean;
  todayResult: { correct: number; total: number } | null;
  streak: { current: number };
  onStart: () => void;
}) {
  if (reviewPoolSize === 0) {
    return (
      <div className="rounded-2xl border border-white/[0.05] bg-dark-800/40 p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-dark-700/60 border border-white/[0.06] flex items-center justify-center shrink-0">
          <Lock className="w-5 h-5 text-text-muted" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
            Daily Practice
          </p>
          <p className="text-sm font-bold text-text-primary mt-0.5">
            Locked until your first lesson is complete.
          </p>
          <p className="text-xs text-text-muted mt-1 leading-relaxed">
            Practice draws from questions you've already seen.
          </p>
        </div>
      </div>
    );
  }

  const practiceSize = Math.min(DAILY_PRACTICE_SIZE, reviewPoolSize);

  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_CINEMATIC, delay: 0.05 }}
      onClick={onStart}
      whileHover={{ y: -2, scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      className={`group w-full text-left rounded-2xl border transition-all cursor-pointer overflow-hidden relative ${
        dailyDoneToday
          ? 'border-green/30 bg-gradient-to-br from-green/[0.1] via-green/[0.03] to-transparent hover:from-green/[0.14]'
          : 'border-accent/40 bg-gradient-to-br from-accent/[0.12] via-accent/[0.04] to-transparent hover:from-accent/[0.16] shadow-[0_0_24px_rgba(99,102,241,0.08)]'
      }`}
    >
      <div
        className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none ${
          dailyDoneToday ? 'bg-green/10' : 'bg-accent/15'
        }`}
      />
      <div className="relative p-5 space-y-3">
        <div className="flex items-start gap-3">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              dailyDoneToday
                ? 'bg-green/15 border border-green/30'
                : 'bg-accent/15 border border-accent/30 shadow-[0_0_14px_rgba(99,102,241,0.2)]'
            }`}
          >
            {dailyDoneToday ? (
              <CheckCircle2 className="w-6 h-6 text-green" />
            ) : (
              <Calendar className="w-6 h-6 text-accent-light" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-light/70">
                Daily practice
              </p>
              {dailyDoneToday ? (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-green/15 text-green font-bold uppercase tracking-wide">
                  Done
                </span>
              ) : (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent-light font-bold uppercase tracking-wide">
                  Ready
                </span>
              )}
            </div>
            <p className="text-sm font-bold text-text-primary mt-0.5">
              {dailyDoneToday && todayResult
                ? `Scored ${todayResult.correct}/${todayResult.total} today.`
                : `${practiceSize} questions · ~3 min.`}
            </p>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              {dailyDoneToday
                ? 'Come back tomorrow for a fresh set.'
                : 'Spaced repetition surfaces what you’re about to forget.'}
            </p>
          </div>
          <ArrowRight
            className={`w-5 h-5 transition-all shrink-0 ${
              dailyDoneToday
                ? 'text-text-muted group-hover:text-green'
                : 'text-text-muted group-hover:text-accent-light'
            } group-hover:translate-x-0.5`}
          />
        </div>

        {!dailyDoneToday && streak.current > 0 && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-warm/[0.08] border border-warm/20">
            <Flame
              className={`w-3.5 h-3.5 text-warm ${
                streak.current >= 3
                  ? 'drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]'
                  : ''
              }`}
            />
            <span className="text-[11px] text-warm font-semibold">
              Complete today to keep your {streak.current}-day streak alive
            </span>
          </div>
        )}
      </div>
    </motion.button>
  );
}

function ResumeAnalysisCard({
  topInProgress,
  onResume,
  onBrowse,
}: {
  topInProgress:
    | { company: CompanyProfile; responseCount: number; lastActivity: string }
    | null;
  onResume: (companyId: string) => void;
  onBrowse: () => void;
}) {
  if (!topInProgress) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE_CINEMATIC, delay: 0.1 }}
        onClick={onBrowse}
        whileHover={{ y: -2, scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="group w-full text-left rounded-2xl border border-warm/25 bg-gradient-to-br from-warm/[0.08] via-dark-800/40 to-transparent hover:from-warm/[0.12] transition-all cursor-pointer overflow-hidden relative"
      >
        <div className="relative p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(245,158,11,0.2)]">
            <Target className="w-6 h-6 text-warm" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-warm/80">
              Analyst desk
            </p>
            <p className="text-sm font-bold text-text-primary mt-0.5">
              No analysis in progress.
            </p>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              Pick a company and walk through the 7-step workflow.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-warm group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>
      </motion.button>
    );
  }

  const { company, responseCount } = topInProgress;
  const pct = Math.min((responseCount / 7) * 100, 100);

  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_CINEMATIC, delay: 0.1 }}
      onClick={() => onResume(company.id)}
      whileHover={{ y: -2, scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      className="group w-full text-left rounded-2xl border border-warm/30 bg-gradient-to-br from-warm/[0.1] via-warm/[0.03] to-transparent hover:from-warm/[0.14] transition-all cursor-pointer overflow-hidden relative shadow-[0_4px_24px_-10px_rgba(245,158,11,0.25)]"
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-warm/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm/40 to-transparent" />
      <div className="relative p-5 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0 text-lg">
            {company.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-warm/80">
              Resume analysis
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <p className="data-num text-[12px] font-bold text-text-primary">
                {company.ticker}
              </p>
              <p className="text-sm font-bold text-text-primary truncate">
                {company.name}
              </p>
            </div>
            <p className="text-xs text-text-muted mt-1 truncate uppercase tracking-wide">
              {company.sector}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-warm group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex-1 h-1.5 rounded-full bg-dark-700/60 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: EASE_CINEMATIC, delay: 0.15 }}
              className="h-full rounded-full bg-gradient-to-r from-warm/80 to-warm shadow-[0_0_6px_rgba(245,158,11,0.35)]"
            />
          </div>
          <span className="data-num text-[10px] text-warm font-bold shrink-0">
            {responseCount}/7 steps
          </span>
        </div>
      </div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// JournalSection — last 3-4 entries + composer link
// ─────────────────────────────────────────────────────────────────────

function JournalSection({
  entries,
  total,
  onOpen,
  onEntry,
}: {
  entries: JournalEntry[];
  total: number;
  onOpen: () => void;
  onEntry: (entry: JournalEntry) => void;
}) {
  return (
    <section aria-label="Recent journal" className="space-y-4">
      <SectionEyebrow
        eyebrow="Recent journal"
        headline="What you've been writing."
        sub="Memos, reflections, and notes — your research artifact."
        action={{ label: `All ${total}`, onClick: onOpen }}
      />

      {entries.length === 0 ? (
        <button
          onClick={onOpen}
          className="group w-full rounded-2xl border border-dashed border-accent/25 bg-dark-800/30 hover:bg-dark-800/50 hover:border-accent/45 p-5 flex items-center gap-4 cursor-pointer text-left transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0">
            <NotebookPen className="w-5 h-5 text-accent-light" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-text-primary">
              Nothing in the journal yet.
            </p>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              Reflections, analyst memos, and free notes all land here.
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent-light group-hover:translate-x-0.5 transition-all" />
        </button>
      ) : (
        <div className="space-y-2">
          {entries.map((entry, i) => (
            <JournalEntryRow
              key={entry.id}
              entry={entry}
              index={i}
              onClick={() => onEntry(entry)}
            />
          ))}
          <button
            onClick={onOpen}
            className="group w-full rounded-xl border border-accent/20 bg-accent/[0.04] hover:bg-accent/[0.08] hover:border-accent/35 p-3 flex items-center justify-center gap-2 text-xs font-semibold text-accent-light cursor-pointer transition-colors"
          >
            <NotebookPen className="w-3.5 h-3.5" />
            Open journal · new entry
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
}

function JournalEntryRow({
  entry,
  index,
  onClick,
}: {
  entry: JournalEntry;
  index: number;
  onClick: () => void;
}) {
  const label = entryTypeLabel(entry.type);
  const date = new Date(entry.updatedAt);
  const dateLabel = isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  const preview = entry.content.trim().split('\n')[0]?.slice(0, 120) ?? '';

  return (
    <motion.button
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: EASE_CINEMATIC,
        delay: Math.min(index, 6) * 0.04,
      }}
      onClick={onClick}
      whileHover={{ y: -1, scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      className="group w-full text-left rounded-xl border border-white/[0.05] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1] p-3.5 cursor-pointer transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/20 flex items-center justify-center shrink-0">
          <NotebookPen className="w-3.5 h-3.5 text-accent-light" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent-light font-bold uppercase tracking-wide">
              {label}
            </span>
            <p className="text-xs font-bold text-text-primary truncate">
              {entry.title || 'Untitled'}
            </p>
            {dateLabel && (
              <span className="text-[10px] text-text-faint ml-auto data-num shrink-0">
                {dateLabel}
              </span>
            )}
          </div>
          {preview && (
            <p className="text-[11px] text-text-muted mt-1 leading-snug line-clamp-2">
              {preview}
            </p>
          )}
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-text-faint group-hover:text-text-muted group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
      </div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// ProgressSection — LevelShowcase + stats + skills + quests
// ─────────────────────────────────────────────────────────────────────

function ProgressSection({
  levelInfo,
  questsEarned,
  questProgress,
  skillsProgress,
  streak,
  completedCount,
  totalCount,
  analysesCount,
  hasAnyProgress,
}: {
  levelInfo: ReturnType<typeof getLevelInfo>;
  questsEarned: number;
  questProgress: QuestStatus[];
  skillsProgress: {
    skill: string;
    label: string;
    exposure: number;
    maxExposure: number;
  }[];
  streak: { current: number };
  completedCount: number;
  totalCount: number;
  analysesCount: number;
  hasAnyProgress: boolean;
}) {
  if (!hasAnyProgress) {
    return (
      <section aria-label="Your progress" className="space-y-4">
        <SectionEyebrow
          eyebrow="Your progress"
          headline="Your investor profile."
          sub="Level, skills, streaks, and quests appear once you start."
        />
        <div className="rounded-2xl border border-border bg-dark-800/50 p-8 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-dark-700 border border-border flex items-center justify-center">
            <Award className="w-6 h-6 text-text-muted" />
          </div>
          <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
            Complete your first lesson to start building your investor profile.
            XP, skill mastery, and quests all track automatically.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Your progress" className="space-y-5">
      <SectionEyebrow
        eyebrow="Your progress"
        headline="The long arc of getting sharper."
        sub="Level, streak, skills, and quests."
      />

      <LevelShowcase levelInfo={levelInfo} />

      <div className="hairline" aria-hidden />

      <div className="grid grid-cols-4 gap-2">
        <ProfileStat
          icon={Flame}
          value={streak.current}
          label="day streak"
          tone="warm"
          highlight={streak.current >= 3}
        />
        <ProfileStat
          icon={CheckCircle2}
          value={completedCount}
          label={`of ${totalCount} lessons`}
          tone="green"
        />
        <ProfileStat
          icon={Target}
          value={analysesCount}
          label="analyzed"
          tone="accent"
        />
        <ProfileStat
          icon={Trophy}
          value={questsEarned}
          label={`of ${questProgress.length} quests`}
          tone="warm"
        />
      </div>

      {/* Skills */}
      <div className="rounded-xl border border-border bg-dark-800/60 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-3.5 h-3.5 text-accent-light" />
          <h3 className="text-xs font-semibold text-text-secondary">
            Skills
          </h3>
          <span className="text-[10px] text-text-muted ml-auto data-num">
            {skillsProgress.filter((s) => s.exposure >= s.maxExposure).length}/
            {skillsProgress.length} mastered
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
          {skillsProgress.map((s) => {
            const pct = Math.min((s.exposure / s.maxExposure) * 100, 100);
            const complete = s.exposure >= s.maxExposure;
            return (
              <div key={s.skill} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">{s.label}</span>
                  <span
                    className={`text-[10px] font-medium data-num ${
                      complete ? 'text-green' : 'text-text-muted'
                    }`}
                  >
                    {complete ? 'Mastered' : `${s.exposure}/${s.maxExposure}`}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{
                      duration: 0.7,
                      ease: EASE_CINEMATIC,
                      delay: 0.15,
                    }}
                    className={`h-full rounded-full ${
                      complete ? 'bg-green' : 'bg-accent/80'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quests */}
      <QuestsPanel quests={questProgress} earned={questsEarned} />

      {/* Library nudge — small footer in the progress section */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-text-muted pt-1">
        <Sparkles className="w-3 h-3 text-accent-light/70" />
        Want to browse all lessons or companies? Open the{' '}
        <span className="text-accent-light font-semibold">Library</span> above.
      </div>
    </section>
  );
}

function ProfileStat({
  icon: Icon,
  value,
  label,
  tone,
  highlight,
}: {
  icon: LucideIcon;
  value: number;
  label: string;
  tone: 'warm' | 'green' | 'accent';
  highlight?: boolean;
}) {
  const toneClasses =
    tone === 'warm'
      ? {
          text: 'text-warm',
          bg: 'bg-warm/[0.06] border-warm/20',
          icon: highlight
            ? 'text-warm drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]'
            : 'text-warm',
        }
      : tone === 'green'
        ? {
            text: 'text-green',
            bg: 'bg-green/[0.05] border-green/20',
            icon: 'text-green',
          }
        : {
            text: 'text-accent-light',
            bg: 'bg-accent/[0.05] border-accent/20',
            icon: 'text-accent-light',
          };

  return (
    <div
      className={`rounded-xl border p-2.5 text-center ${toneClasses.bg}`}
    >
      <Icon className={`w-3.5 h-3.5 mx-auto ${toneClasses.icon}`} />
      <div
        className={`text-base font-bold data-num mt-1 leading-none ${toneClasses.text}`}
      >
        {value}
      </div>
      <div className="text-[9px] text-text-muted mt-1 leading-tight">
        {label}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Quests panel
// ─────────────────────────────────────────────────────────────────────

function QuestsPanel({
  quests,
  earned,
}: {
  quests: QuestStatus[];
  earned: number;
}) {
  const sorted = [...quests].sort((a, b) => {
    if (a.earned !== b.earned) return a.earned ? -1 : 1;
    if (a.earned && b.earned) return 0;
    return b.progressPct - a.progressPct;
  });

  return (
    <div className="space-y-3">
      <div className="border-l-[3px] border-l-warm/50 pl-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-warm" />
          <h3 className="text-sm font-semibold text-text-primary">Quests</h3>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-warm/10 text-warm font-medium">
            Milestones
          </span>
        </div>
        <span className="text-[10px] text-text-muted font-medium data-num">
          {earned}/{quests.length} earned
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {sorted.map((q, i) => (
          <QuestTile key={q.quest.id} status={q} index={i} />
        ))}
      </div>
    </div>
  );
}

function QuestTile({
  status,
  index,
}: {
  status: QuestStatus;
  index: number;
}) {
  const { quest, current, target, earned, progressPct } = status;
  const Icon = quest.icon;
  const locked = !earned && progressPct === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.35,
        ease: EASE_CINEMATIC,
        delay: 0.05 + Math.min(index, 6) * 0.04,
      }}
      className={`relative rounded-2xl border p-3.5 overflow-hidden transition-all duration-300 ${
        earned
          ? 'border-warm/30 bg-gradient-to-br from-warm/[0.12] via-warm/[0.04] to-transparent shadow-[0_0_20px_-6px_rgba(245,158,11,0.2)]'
          : locked
            ? 'border-white/[0.04] bg-dark-900/30'
            : 'border-accent/20 bg-gradient-to-br from-accent/[0.06] to-transparent'
      }`}
    >
      {earned && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm/40 to-transparent" />
      )}

      <div className="flex items-start gap-2.5">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
            earned
              ? 'bg-gradient-to-br from-warm/25 to-warm/[0.05] border border-warm/30 shadow-[0_0_10px_-3px_rgba(245,158,11,0.3)]'
              : locked
                ? 'bg-dark-800/60 border border-white/[0.05]'
                : 'bg-accent/12 border border-accent/25'
          }`}
        >
          {locked ? (
            <Lock className="w-3.5 h-3.5 text-text-faint" />
          ) : (
            <Icon
              className={`w-3.5 h-3.5 ${
                earned ? 'text-warm drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]' : 'text-accent-light'
              }`}
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className={`text-[11px] font-bold leading-tight ${
              earned
                ? 'text-warm'
                : locked
                  ? 'text-text-muted'
                  : 'text-text-primary'
            }`}
          >
            {quest.title}
          </p>
          <p className="text-[10px] text-text-muted leading-tight mt-0.5 line-clamp-2">
            {quest.description}
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-dark-700/50 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPct * 100}%` }}
            transition={{ duration: 0.6, ease: EASE_CINEMATIC, delay: 0.1 }}
            className={`h-full rounded-full ${
              earned
                ? 'bg-gradient-to-r from-warm/80 to-warm shadow-[0_0_6px_rgba(245,158,11,0.4)]'
                : 'bg-gradient-to-r from-accent/60 to-accent-light/70'
            }`}
          />
        </div>
        <span
          className={`text-[9px] font-bold data-num shrink-0 ${
            earned ? 'text-warm' : locked ? 'text-text-faint' : 'text-text-muted'
          }`}
        >
          {earned ? `+${quest.xp} XP` : `${current}/${target}`}
        </span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// LevelShowcase — HUD-style hero for the progress section
// ─────────────────────────────────────────────────────────────────────

function LevelShowcase({
  levelInfo,
}: {
  levelInfo: ReturnType<typeof getLevelInfo>;
}) {
  const pct = Math.max(0, Math.min(1, levelInfo.progressPct));
  const segments = 20;
  const filledSegments = Math.round(pct * segments);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_CINEMATIC }}
    >
      <GlassPanel tone="accent" aurora scanlines noise={false} className="px-6 py-6">
        {/* Header row: level badge + title + XP total */}
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={SPRING_CELEBRATION}
              className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center
                         bg-gradient-to-br from-accent/30 via-accent/15 to-signal/10
                         border border-accent/40
                         shadow-[0_0_32px_-4px_rgba(99,102,241,0.5),0_0_60px_-8px_rgba(99,102,241,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
            >
              <span className="display-num text-[32px] text-accent-light leading-none drop-shadow-[0_0_8px_rgba(129,140,248,0.4)]">
                {levelInfo.level}
              </span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-lg
                               bg-dark-900/95 border border-accent/30
                               text-[8px] font-bold uppercase tracking-[0.2em] text-accent-light
                               shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                LVL
              </span>
            </motion.div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-light/60">
              Rank
            </p>
            <h3 className="text-lg font-bold tracking-tight text-text-primary truncate mt-0.5">
              {levelInfo.title}
            </h3>
            <div className="flex items-baseline gap-2 mt-1.5">
              <CountUp
                value={levelInfo.totalXp}
                duration={1.1}
                format={(n) => n.toLocaleString()}
                className="display-num text-[24px] text-text-primary leading-none"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-light/50">
                XP
              </span>
            </div>
          </div>
        </div>

        <div className="hairline my-5" aria-hidden />

        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em]">
            <span className="text-text-muted">
              Progress to Lv <span className="text-text-secondary">{levelInfo.level + 1}</span>
            </span>
            <span className="display-num text-text-secondary data-num normal-case tracking-normal text-[11px]">
              {levelInfo.xpIntoLevel}
              <span className="text-text-faint"> / {levelInfo.xpSpanOfLevel}</span>
            </span>
          </div>

          <div className="relative h-3 flex items-stretch gap-[2px]">
            {Array.from({ length: segments }).map((_, i) => {
              const active = i < filledSegments;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleY: 0.3 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.02, ease: EASE_CINEMATIC }}
                  className={`flex-1 rounded-[3px] origin-bottom ${
                    active
                      ? 'bg-gradient-to-t from-accent via-accent-light to-signal/60 shadow-[0_0_8px_rgba(129,140,248,0.5)]'
                      : 'bg-dark-700/60'
                  }`}
                />
              );
            })}
          </div>

          <div className="flex justify-between text-[10px] text-text-faint data-num">
            <span>{Math.round(pct * 100)}% complete</span>
            <span>{levelInfo.xpToNextLevel} XP remaining</span>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
}
