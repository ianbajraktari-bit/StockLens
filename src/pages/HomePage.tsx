import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Building2,
  CheckCircle2,
  BarChart3,
  Clock,
  BookOpen,
  Brain,
  Target,
  Zap,
  Star,
  Flame,
  GraduationCap,
  Calendar,
  Trophy,
  Lock,
  Search,
  Award,
  Layers,
  Sparkles,
  ChevronRight,
  NotebookPen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { allLessons, type Lesson } from '../data/lessons';
import { allCompanies, type CompanyProfile } from '../data/companies';
import {
  getCompletedIds,
  getFirstUncompletedId,
  getSkillsProgress,
  getLessonStars,
  getStreak,
  getCompletedAnalyses,
  getCompanyResponseCount,
} from '../lib/progression';
import {
  getReviewPoolSize,
  hasCompletedToday,
  getTodayResult,
  DAILY_PRACTICE_SIZE,
} from '../lib/review';
import { getReviewStats } from '../lib/spacedRepetition';
import { getLevelInfo } from '../lib/xp';
import { getQuestProgress, type QuestStatus } from '../lib/quests';
import { getJournalStats } from '../lib/journal';
import { CountUp } from '../components/hud/CountUp';
import { GlassPanel } from '../components/hud/GlassPanel';
import { TickerBar } from '../components/hud/TickerBar';
import { LivePulse } from '../components/hud/LivePulse';
import {
  SPRING_CELEBRATION,
  SPRING_FLUID,
} from '../lib/motion';

// ─────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────

const foundationsPhase1 = allLessons.filter((l) => l.tier === 'foundations-1');
const foundationsPhase2 = allLessons.filter((l) => l.tier === 'foundations-2');
const companyLessons = allLessons.filter((l) => l.tier === 'company');

type TabId = 'learn' | 'practice' | 'analyze' | 'progress';

const TAB_STORAGE_KEY = 'stocklens-home-tab';
const VALID_TABS: TabId[] = ['learn', 'practice', 'analyze', 'progress'];
const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

function getInitialTab(hasNext: boolean): TabId {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(TAB_STORAGE_KEY);
    if (stored && (VALID_TABS as string[]).includes(stored)) {
      return stored as TabId;
    }
  }
  return hasNext ? 'learn' : 'progress';
}

// ─────────────────────────────────────────────────────────────────────
// HomePage shell
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
  const reviewStats = getReviewStats();
  const levelInfo = getLevelInfo();
  const questProgress = getQuestProgress();
  const questsEarned = questProgress.filter((q) => q.earned).length;
  const journalStats = getJournalStats();

  const [activeTab, setActiveTab] = useState<TabId>(() =>
    getInitialTab(Boolean(nextId)),
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(TAB_STORAGE_KEY, activeTab);
    } catch {
      // ignore storage failures (private mode, quota)
    }
  }, [activeTab]);

  const practiceDue = reviewPoolSize > 0 && !dailyDoneToday;

  function handleStart() {
    const target = nextId ?? allLessons[0].id;
    navigate(`/lesson/${target}`);
  }

  const tabs: { id: TabId; label: string; icon: LucideIcon; dot?: boolean }[] = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Zap, dot: practiceDue },
    { id: 'analyze', label: 'Analyze', icon: Search },
    { id: 'progress', label: 'Progress', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-dark-950 relative">
      {/* Ambient scene — mesh gradient + floating orbs */}
      <div className="scene-mesh" aria-hidden />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Atmospheric ticker — signature fintech-terminal touch */}
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
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_CINEMATIC }}
          className="py-5 flex items-center justify-between"
        >
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
                onClick={() => navigate('/journal')}
                whileHover={{ y: -1, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-accent-light
                  bg-gradient-to-br from-accent/12 to-accent/[0.03]
                  border border-accent/25 cursor-pointer
                  shadow-[0_0_14px_-4px_rgba(99,102,241,0.25)] hover:border-accent/45 transition-colors"
                aria-label={`Open journal — ${journalStats.total} ${journalStats.total === 1 ? 'entry' : 'entries'}`}
              >
                <NotebookPen className="w-3.5 h-3.5" />
                <span className="data-num">{journalStats.total}</span>
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
        </motion.header>

        {/* Onboarding hero — only for brand-new users */}
        {!hasAnyProgress && (
          <OnboardingHero onStart={handleStart} />
        )}

        {/* Hub mode strip — introduces the new Library / Floor / Journal shape */}
        <ModeStrip
          journalCount={journalStats.total}
          onLibrary={() => navigate('/library')}
          onFloor={() => navigate('/floor')}
          onJournal={() => navigate('/journal')}
        />

        {/* Sticky tab bar */}
        <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 bg-dark-950/60 backdrop-blur-2xl border-b border-white/[0.04]">
          <TabBar
            tabs={tabs}
            active={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Tab content */}
        <div className="py-6 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE_CINEMATIC }}
            >
              {activeTab === 'learn' && (
                <LearnTab
                  completedIds={completedIds}
                  nextId={nextId}
                  onStart={handleStart}
                  onLessonClick={(id) => navigate(`/lesson/${id}`)}
                />
              )}
              {activeTab === 'practice' && (
                <PracticeTab
                  reviewPoolSize={reviewPoolSize}
                  dailyDoneToday={dailyDoneToday}
                  todayResult={todayResult}
                  reviewStats={reviewStats}
                  streak={streak}
                  onStart={() => navigate('/review/daily')}
                  onGoLearn={() => setActiveTab('learn')}
                />
              )}
              {activeTab === 'analyze' && (
                <AnalyzeTab
                  analysesCompleted={analysesCompleted}
                  onGoAnalystMode={() => navigate('/analyst')}
                  onCompanyClick={(id) => navigate(`/analyst/${id}`)}
                />
              )}
              {activeTab === 'progress' && (
                <ProgressTab
                  levelInfo={levelInfo}
                  questsEarned={questsEarned}
                  questProgress={questProgress}
                  skillsProgress={skillsProgress}
                  streak={streak}
                  completedCount={completedCount}
                  totalCount={totalCount}
                  analysesCount={analysesCompleted.size}
                />
              )}
            </motion.div>
          </AnimatePresence>
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
// Header helpers
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
// Tab bar — sliding pill indicator via framer-motion layoutId
// ─────────────────────────────────────────────────────────────────────

function TabBar({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: TabId; label: string; icon: LucideIcon; dot?: boolean }[];
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Home sections"
      className="relative grid grid-cols-4 gap-0.5 rounded-2xl p-1
                 bg-dark-900/70
                 border border-white/[0.06]
                 backdrop-blur-2xl
                 shadow-[0_4px_32px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className="relative flex items-center justify-center gap-1.5 px-2 py-3 rounded-xl text-[11px] font-semibold cursor-pointer"
          >
            {isActive && (
              <motion.span
                layoutId="tabbar-active-pill"
                className="absolute inset-0 rounded-xl
                           bg-gradient-to-b from-accent/25 via-accent/[0.1] to-accent/[0.04]
                           border border-accent/30
                           shadow-[0_0_24px_-4px_rgba(99,102,241,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]"
                transition={SPRING_FLUID}
              />
            )}
            <span
              className={`relative flex items-center gap-1.5 transition-colors duration-200 ${
                isActive ? 'text-accent-light' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
              {tab.dot && !isActive && (
                <span
                  className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-accent-light shadow-[0_0_8px_rgba(129,140,248,0.8)]"
                  aria-hidden
                />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Shared: section eyebrow + lesson card
// ─────────────────────────────────────────────────────────────────────

function TabIntro({
  eyebrow,
  headline,
  sub,
}: {
  eyebrow: string;
  headline: string;
  sub?: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent-light/80">
        {eyebrow}
      </p>
      <h2 className="text-lg font-bold text-text-primary mt-1 tracking-tight">
        {headline}
      </h2>
      {sub && (
        <p className="text-xs text-text-muted mt-1 leading-relaxed">{sub}</p>
      )}
    </div>
  );
}

function LessonCard({
  lesson,
  completed,
  isNext,
  stars,
  onClick,
  index,
}: {
  lesson: Lesson;
  completed: boolean;
  isNext: boolean;
  stars: number | null;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: EASE_CINEMATIC,
        delay: Math.min(index, 10) * 0.04,
      }}
      onClick={onClick}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }}
      className={`group w-full text-left rounded-2xl border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden spotlight ${
        isNext && !completed
          ? 'spotlight-accent border-accent/40 bg-gradient-to-br from-accent/[0.08] via-dark-800/80 to-dark-800/40 hover:border-accent/60 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_40px_-8px_rgba(99,102,241,0.35)]'
          : completed
            ? 'border-white/[0.05] bg-dark-800/30 hover:bg-dark-800/50 hover:border-white/[0.08]'
            : 'border-white/[0.05] bg-dark-800/50 hover:bg-dark-800/70 hover:border-white/[0.1] hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]'
      }`}
    >
      {/* Subtle top highlight on next card */}
      {isNext && !completed && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      )}

      <div className="flex items-center gap-3.5">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 transition-all duration-300 ${
            completed
              ? 'bg-green/10 border border-green/20 shadow-[0_0_10px_-4px_rgba(34,197,94,0.3)]'
              : isNext
                ? 'bg-gradient-to-br from-accent/20 to-accent/[0.05] border border-accent/30 shadow-[0_0_16px_-4px_rgba(99,102,241,0.35)]'
                : 'bg-dark-700/80 border border-white/[0.06] group-hover:border-white/[0.1] group-hover:bg-dark-600/80'
          }`}
        >
          {completed ? (
            <CheckCircle2 className="w-5 h-5 text-green" />
          ) : (
            <span className="text-base">{lesson.emoji}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3
              className={`text-sm font-semibold truncate ${
                completed ? 'text-text-secondary' : 'text-text-primary'
              }`}
            >
              {lesson.title}
            </h3>
            {isNext && !completed && (
              <span className="text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-[0.12em] shrink-0
                               bg-gradient-to-r from-accent/20 to-signal/15 text-accent-light border border-accent/25
                               shadow-[0_0_8px_-2px_rgba(99,102,241,0.3)]">
                Next
              </span>
            )}
          </div>
          <p
            className={`text-xs mt-0.5 leading-snug ${
              completed ? 'text-text-muted' : 'text-text-secondary'
            }`}
          >
            {lesson.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {completed && stars !== null ? (
            <div className="flex items-center gap-0.5">
              {[0, 1, 2].map((i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 transition-all ${
                    i < stars
                      ? 'text-warm fill-warm drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]'
                      : 'text-dark-500'
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-1 text-[10px] text-text-muted display-num">
              <Clock className="w-3 h-3" />
              {lesson.estimatedMinutes}m
            </div>
          )}
          <ArrowRight
            className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5 ${
              isNext && !completed
                ? 'text-accent-light'
                : completed
                  ? 'text-text-faint group-hover:text-text-muted'
                  : 'text-text-muted group-hover:text-text-secondary'
            }`}
          />
        </div>
      </div>
    </motion.button>
  );
}

function SectionHeader({
  icon: Icon,
  label,
  badge,
  badgeColor,
  accentColor,
  count,
  total,
}: {
  icon: LucideIcon;
  label: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  count: number;
  total: number;
}) {
  const pct = total > 0 ? count / total : 0;
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center border shadow-sm"
            style={{
              backgroundColor: accentColor.replace('0.4)', '0.12)').replace('0.5)', '0.12)'),
              borderColor: accentColor.replace('0.4)', '0.2)').replace('0.5)', '0.2)'),
              boxShadow: `0 0 12px -4px ${accentColor}`,
            }}
          >
            <Icon className="w-4 h-4" style={{ color: accentColor.replace('0.4)', '1)').replace('0.5)', '1)') }} />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-text-primary">{label}</h3>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-[0.12em] ${badgeColor}`}
            >
              {badge}
            </span>
          </div>
        </div>
        <span className="display-num text-[10px] text-text-muted font-medium">
          {count}/{total}
        </span>
      </div>
      {/* Section completion bar — gradient with glow */}
      <div className="h-1 rounded-full bg-dark-700/60 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct * 100}%` }}
          transition={{ duration: 0.8, ease: EASE_CINEMATIC, delay: 0.15 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accentColor.replace('0.4)', '0.6)').replace('0.5)', '0.6)')}, ${accentColor.replace('0.4)', '1)').replace('0.5)', '1)')})`,
            boxShadow: pct > 0 ? `0 0 8px ${accentColor}` : 'none',
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// LEARN TAB — curriculum
// ─────────────────────────────────────────────────────────────────────

function LearnTab({
  completedIds,
  nextId,
  onStart,
  onLessonClick,
}: {
  completedIds: Set<string>;
  nextId: string | null;
  onStart: () => void;
  onLessonClick: (id: string) => void;
}) {
  const phase1Completed = foundationsPhase1.filter((l) =>
    completedIds.has(l.id),
  ).length;
  const phase2Completed = foundationsPhase2.filter((l) =>
    completedIds.has(l.id),
  ).length;
  const companyCompleted = companyLessons.filter((l) =>
    completedIds.has(l.id),
  ).length;
  const nextLesson = nextId
    ? allLessons.find((l) => l.id === nextId)
    : null;

  return (
    <section id="panel-learn" role="tabpanel" className="space-y-6">
      <TabIntro
        eyebrow="Curriculum"
        headline="Master the vocabulary, then apply it."
        sub="Foundations build the mental models. Deep dives test them on real companies."
      />

      {nextLesson && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
          onClick={onStart}
          whileHover={{ y: -2, scale: 1.005 }}
          whileTap={{ scale: 0.995 }}
          className="group w-full flex items-center gap-4 p-5 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.1] via-accent/[0.04] to-transparent hover:from-accent/[0.14] transition-all duration-300 cursor-pointer text-left overflow-hidden relative shadow-[0_4px_24px_-8px_rgba(99,102,241,0.2)] hover:shadow-[0_8px_40px_-8px_rgba(99,102,241,0.3)]"
        >
          {/* Glow orb */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent/25 to-accent/[0.05] border border-accent/30 flex items-center justify-center shrink-0 shadow-[0_0_16px_-4px_rgba(99,102,241,0.3)]">
            <ArrowRight className="w-5 h-5 text-accent-light group-hover:translate-x-0.5 transition-transform" />
          </div>
          <div className="relative flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-light/70">
              Continue
            </p>
            <p className="text-sm font-bold text-text-primary truncate mt-0.5">
              {nextLesson.title}
            </p>
            <p className="text-xs text-text-muted truncate">
              {nextLesson.subtitle}
            </p>
          </div>
          <div className="relative flex items-center gap-1 text-[10px] text-text-muted shrink-0">
            <Clock className="w-3 h-3" />
            {nextLesson.estimatedMinutes}m
          </div>
        </motion.button>
      )}

      <div className="space-y-3">
        <SectionHeader
          icon={Lightbulb}
          label="Core Financial Vocabulary"
          badge="Phase 1"
          badgeColor="bg-accent/10 text-accent-light"
          accentColor="rgba(99, 102, 241, 0.5)"
          count={phase1Completed}
          total={foundationsPhase1.length}
        />
        <div className="space-y-1.5">
          {foundationsPhase1.map((lesson, i) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              completed={completedIds.has(lesson.id)}
              isNext={lesson.id === nextId}
              stars={completedIds.has(lesson.id) ? getLessonStars(lesson.id) : null}
              onClick={() => onLessonClick(lesson.id)}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <SectionHeader
          icon={GraduationCap}
          label="Investing Concepts"
          badge="Phase 2"
          badgeColor="bg-amber/10 text-amber"
          accentColor="rgba(245, 158, 11, 0.5)"
          count={phase2Completed}
          total={foundationsPhase2.length}
        />
        <div className="space-y-1.5">
          {foundationsPhase2.map((lesson, i) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              completed={completedIds.has(lesson.id)}
              isNext={lesson.id === nextId}
              stars={completedIds.has(lesson.id) ? getLessonStars(lesson.id) : null}
              onClick={() => onLessonClick(lesson.id)}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <SectionHeader
          icon={Building2}
          label="Company Deep Dives"
          badge="Applied"
          badgeColor="bg-green/10 text-green"
          accentColor="rgba(34, 197, 94, 0.5)"
          count={companyCompleted}
          total={companyLessons.length}
        />
        <div className="space-y-1.5">
          {companyLessons.map((lesson, i) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              completed={completedIds.has(lesson.id)}
              isNext={lesson.id === nextId}
              stars={completedIds.has(lesson.id) ? getLessonStars(lesson.id) : null}
              onClick={() => onLessonClick(lesson.id)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// PRACTICE TAB — the review dojo
// ─────────────────────────────────────────────────────────────────────

function PracticeTab({
  reviewPoolSize,
  dailyDoneToday,
  todayResult,
  reviewStats,
  streak,
  onStart,
  onGoLearn,
}: {
  reviewPoolSize: number;
  dailyDoneToday: boolean;
  todayResult: { correct: number; total: number } | null;
  reviewStats: { tracked: number; mastered: number; due: number; wrong: number };
  streak: { current: number };
  onStart: () => void;
  onGoLearn: () => void;
}) {
  if (reviewPoolSize === 0) {
    return (
      <section id="panel-practice" role="tabpanel" className="space-y-6">
        <TabIntro
          eyebrow="Review Dojo"
          headline="Sharpen what you've learned."
          sub="Your personal rehearsal room, powered by spaced repetition."
        />
        <div className="rounded-2xl border border-border bg-dark-800/50 p-8 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-dark-700 border border-border flex items-center justify-center">
            <Lock className="w-6 h-6 text-text-muted" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Locked — for now
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm mx-auto">
              Daily Practice pulls questions from lessons you've completed.
              Finish your first lesson and it unlocks immediately.
            </p>
          </div>
          <button
            onClick={onGoLearn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-light text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Start a lesson
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    );
  }

  const practiceSize = Math.min(DAILY_PRACTICE_SIZE, reviewPoolSize);

  return (
    <section id="panel-practice" role="tabpanel" className="space-y-6">
      <TabIntro
        eyebrow="Review Dojo"
        headline="Sharpen what you've learned."
        sub="Spaced repetition surfaces what you're about to forget. Miss something and it comes back tomorrow."
      />

      {/* Stats trio */}
      <div className="grid grid-cols-3 gap-2">
        <DojoStat
          label="Flagged"
          value={reviewStats.wrong}
          tone="red"
          caption="missed last time"
        />
        <DojoStat
          label="Due today"
          value={reviewStats.due}
          tone="accent"
          caption="ready to review"
        />
        <DojoStat
          label="Mastered"
          value={reviewStats.mastered}
          tone="green"
          caption="locked in"
        />
      </div>

      {/* Primary CTA */}
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE_CINEMATIC, delay: 0.05 }}
        onClick={onStart}
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
        <div className="relative p-5 space-y-4">
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
                <h3 className="text-base font-bold text-text-primary">
                  Daily Practice
                </h3>
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
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                {dailyDoneToday && todayResult
                  ? `You scored ${todayResult.correct}/${todayResult.total} today. Come back tomorrow for a fresh set.`
                  : `${practiceSize} questions today — mixed from everything you've completed. ~3 min.`}
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
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-warm/8 border border-warm/20">
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

      {/* Pool context */}
      <div className="rounded-xl border border-border bg-dark-800/40 p-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-text-muted" />
          <h3 className="text-xs font-semibold text-text-secondary">
            How the dojo picks questions
          </h3>
        </div>
        <ul className="space-y-1.5 text-[11px] text-text-muted leading-relaxed">
          <li className="flex gap-2">
            <span className="text-red shrink-0 font-bold">•</span>
            <span>
              <span className="text-red font-semibold">Missed</span> questions
              come back tomorrow — no escape.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent-light shrink-0 font-bold">•</span>
            <span>
              <span className="text-accent-light font-semibold">Due</span>{' '}
              questions surface on a Leitner schedule (1 → 30 days).
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-green shrink-0 font-bold">•</span>
            <span>
              <span className="text-green font-semibold">Mastered</span>{' '}
              questions go quiet so you focus on weak spots.
            </span>
          </li>
        </ul>
      </div>

      {/* Pool size footer */}
      <div className="flex items-center justify-between text-[10px] text-text-faint pt-1">
        <span>
          {reviewStats.tracked > 0
            ? `${reviewStats.tracked} questions tracked in your review history`
            : `${reviewPoolSize} questions available in the pool`}
        </span>
        {streak.current > 0 && (
          <span className="data-num">
            Current streak: {streak.current}d
          </span>
        )}
      </div>
    </section>
  );
}

function DojoStat({
  label,
  value,
  tone,
  caption,
}: {
  label: string;
  value: number;
  tone: 'red' | 'accent' | 'green';
  caption: string;
}) {
  const toneClasses =
    tone === 'red'
      ? { value: 'text-red', border: 'border-red/25 bg-red/[0.05]' }
      : tone === 'green'
        ? { value: 'text-green', border: 'border-green/25 bg-green/[0.05]' }
        : {
            value: 'text-accent-light',
            border: 'border-accent/25 bg-accent/[0.05]',
          };

  return (
    <div
      className={`rounded-xl border p-3 ${toneClasses.border} text-center`}
    >
      <div
        className={`text-lg font-bold data-num leading-none ${toneClasses.value}`}
      >
        {value}
      </div>
      <div className="text-[10px] text-text-secondary font-semibold mt-1.5 uppercase tracking-wide">
        {label}
      </div>
      <div className="text-[9px] text-text-muted mt-0.5 leading-tight">
        {caption}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// ANALYZE TAB — the research desk
// ─────────────────────────────────────────────────────────────────────

function AnalyzeTab({
  analysesCompleted,
  onGoAnalystMode,
  onCompanyClick,
}: {
  analysesCompleted: Set<string>;
  onGoAnalystMode: () => void;
  onCompanyClick: (id: string) => void;
}) {
  // Pick a teaser set — 6 companies, preferring intro/standard for new analysts
  const teaserCompanies = [...allCompanies]
    .sort((a, b) => {
      const order = { intro: 0, standard: 1, advanced: 2 } as const;
      return order[a.difficulty] - order[b.difficulty];
    })
    .slice(0, 6);

  const inProgressCount = allCompanies.filter((c) => {
    const n = getCompanyResponseCount(c.id);
    return n > 0 && !analysesCompleted.has(c.id);
  }).length;

  const workflowSteps = [
    'Business',
    'Drivers',
    'Moat',
    'Risks',
    'Valuation',
    'Thesis',
    'Verdict',
  ];

  return (
    <section id="panel-analyze" role="tabpanel" className="space-y-6">
      <TabIntro
        eyebrow="Research Desk"
        headline="Form a thesis on real companies."
        sub="Pick any company and walk through a 7-step analyst workflow. The same structure a real portfolio manager uses."
      />

      {/* Editorial CTA card */}
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE_CINEMATIC }}
        onClick={onGoAnalystMode}
        className="group w-full text-left rounded-2xl border border-warm/30 bg-gradient-to-br from-warm/[0.1] via-warm/[0.03] to-accent/[0.04] hover:from-warm/[0.14] transition-all cursor-pointer overflow-hidden relative"
      >
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-warm/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(245,158,11,0.2)]">
              <Target className="w-6 h-6 text-warm" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-bold text-text-primary">
                  Analyst Mode
                </h3>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-warm/20 text-warm font-bold uppercase tracking-wide">
                  Capstone
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                {allCompanies.length} companies across every major sector. Each
                analysis saves as you go — resume, revise, compare.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-warm group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Workflow preview */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {workflowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold text-text-secondary px-2 py-1 rounded-md bg-dark-800/70 border border-border">
                  {step}
                </span>
                {i < workflowSteps.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-text-faint" />
                )}
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div className="flex items-center gap-3 text-[10px] text-text-muted flex-wrap pt-1">
            <span className="flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              {allCompanies.length} companies
            </span>
            <span className="text-text-faint">•</span>
            <span className="flex items-center gap-1 text-green">
              <CheckCircle2 className="w-3 h-3" />
              {analysesCompleted.size} analyzed
            </span>
            {inProgressCount > 0 && (
              <>
                <span className="text-text-faint">•</span>
                <span className="flex items-center gap-1 text-accent-light">
                  <Layers className="w-3 h-3" />
                  {inProgressCount} in progress
                </span>
              </>
            )}
            <span className="text-text-faint">•</span>
            <span>~10-14 min each</span>
          </div>
        </div>
      </motion.button>

      {/* Company teaser grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-text-muted" />
            <h3 className="text-xs font-semibold text-text-secondary">
              Start with one of these
            </h3>
          </div>
          <button
            onClick={onGoAnalystMode}
            className="text-[10px] font-semibold text-accent-light hover:text-accent uppercase tracking-wide transition-colors cursor-pointer flex items-center gap-1"
          >
            All {allCompanies.length}
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {teaserCompanies.map((company, i) => (
            <CompanyTile
              key={company.id}
              company={company}
              completed={analysesCompleted.has(company.id)}
              progressCount={getCompanyResponseCount(company.id)}
              onClick={() => onCompanyClick(company.id)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyTile({
  company,
  completed,
  progressCount,
  onClick,
  index,
}: {
  company: CompanyProfile;
  completed: boolean;
  progressCount: number;
  onClick: () => void;
  index: number;
}) {
  const inProgress = progressCount > 0 && !completed;

  return (
    <motion.button
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.35,
        ease: EASE_CINEMATIC,
        delay: 0.04 + Math.min(index, 6) * 0.04,
      }}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }}
      className={`group relative rounded-2xl border p-3.5 text-left transition-all duration-300 cursor-pointer overflow-hidden spotlight ${
        completed
          ? 'border-green/25 bg-gradient-to-br from-green/[0.08] to-dark-800/50 hover:from-green/[0.12] shadow-[0_0_16px_-8px_rgba(34,197,94,0.2)]'
          : inProgress
            ? 'spotlight-accent border-accent/25 bg-gradient-to-br from-accent/[0.08] to-dark-800/50 hover:from-accent/[0.12]'
            : 'border-white/[0.05] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1]'
      }`}
    >
      {/* Top edge highlight */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
        completed ? 'via-green/30' : inProgress ? 'via-accent/25' : 'via-white/[0.06]'
      } to-transparent`} />

      <div className="flex items-start gap-2.5">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
            completed
              ? 'bg-green/12 border border-green/20 shadow-[0_0_8px_-2px_rgba(34,197,94,0.3)]'
              : inProgress
                ? 'bg-accent/12 border border-accent/20'
                : 'bg-dark-700/70 border border-white/[0.06]'
          }`}
        >
          {completed ? (
            <CheckCircle2 className="w-4.5 h-4.5 text-green" />
          ) : (
            company.emoji
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="data-num text-[11px] font-bold text-text-primary truncate">
              {company.ticker}
            </p>
            <span className={`inline-block h-2.5 w-0.5 rounded-[1px] ${
              completed ? 'candle-accent' : inProgress ? 'bg-accent/60' : 'bg-white/15'
            }`} aria-hidden />
            <p className="text-[10px] text-text-muted truncate uppercase tracking-wide">
              {company.sector}
            </p>
          </div>
          <p className="text-[11px] text-text-secondary truncate mt-0.5">
            {company.name}
          </p>
          {inProgress && (
            <div className="mt-2 flex items-center gap-1.5">
              <div className="flex-1 h-1.5 rounded-full bg-dark-700/60 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(progressCount / 7) * 100}%` }}
                  transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
                  className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent-light/80 shadow-[0_0_6px_rgba(99,102,241,0.4)]"
                />
              </div>
              <span className="data-num text-[9px] text-accent-light font-bold">
                {progressCount}/7
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// PROGRESS TAB — the character sheet
// ─────────────────────────────────────────────────────────────────────

function ProgressTab({
  levelInfo,
  questsEarned,
  questProgress,
  skillsProgress,
  streak,
  completedCount,
  totalCount,
  analysesCount,
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
}) {
  const hasAnyProgress = skillsProgress.some((s) => s.exposure > 0);

  if (!hasAnyProgress) {
    return (
      <section id="panel-progress" role="tabpanel" className="space-y-6">
        <TabIntro
          eyebrow="Character Sheet"
          headline="Your investor profile."
          sub="Track level, skills, streaks, and quests as you grow."
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
    <section id="panel-progress" role="tabpanel" className="space-y-6">
      <TabIntro
        eyebrow="Character Sheet"
        headline="Your investor profile."
        sub="Level, streak, skills, and quests — the long arc of getting sharper."
      />

      {/* Level + XP showcase — HUD surface */}
      <LevelShowcase levelInfo={levelInfo} />

      <div className="hairline" aria-hidden />

      {/* Stats row */}
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
      {/* Top glow line for earned quests */}
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
// LevelShowcase — HUD-style hero for the character sheet
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
          {/* Level badge — large, glowing */}
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

          {/* Title + XP total */}
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

        {/* Segmented progression gauge */}
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
