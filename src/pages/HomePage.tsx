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
import { CountUp } from '../components/hud/CountUp';
import { GlassPanel } from '../components/hud/GlassPanel';
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

const TIER_COLORS = {
  'foundations-1': 'rgba(99, 102, 241, 0.4)',
  'foundations-2': 'rgba(245, 158, 11, 0.4)',
  company: 'rgba(34, 197, 94, 0.4)',
} as const;

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
    <div className="min-h-screen bg-dark-950">
      {/* Ambient scene glow — subtle aurora wash */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-signal/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
          className="py-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center
                            bg-gradient-to-br from-accent/20 to-accent/[0.04]
                            border border-accent/30
                            shadow-[0_0_16px_-4px_rgba(99,102,241,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
              <TrendingUp className="w-5 h-5 text-accent-light" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-text-primary tracking-tight leading-none">
                StockLens
              </h1>
              <p className="text-[10px] text-text-muted mt-0.5 font-medium tracking-wide">
                Think like an investor
              </p>
            </div>
          </div>

          {hasAnyProgress && (
            <div className="flex items-center gap-2">
              {streak.current > 0 && (
                <div
                  className={`hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-warm/10 border border-warm/25 text-[11px] font-semibold text-warm ${
                    streak.current >= 3
                      ? 'shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                      : ''
                  }`}
                >
                  <Flame className="w-3 h-3" />
                  <span className="tabular-nums">{streak.current}</span>
                </div>
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

        {/* Sticky tab bar */}
        <div className="sticky top-0 z-10 -mx-4 px-4 py-2 bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.04]">
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
        <div className="text-center py-6 border-t border-border">
          <p className="text-[10px] text-text-faint">
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
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-text-primary tabular-nums">
        {level}
      </span>
    </div>
  );
}

function OnboardingHero({ onStart }: { onStart: () => void }) {
  const props = [
    {
      icon: Brain,
      title: "Think, don't memorize",
      sub: 'Every step forces reasoning, not recall.',
      color: 'text-accent-light',
      glow: 'bg-accent/10 border-accent/25',
    },
    {
      icon: Target,
      title: 'Real companies, real data',
      sub: 'Apple, NVIDIA, Costco — actual financials.',
      color: 'text-warm',
      glow: 'bg-warm/10 border-warm/25',
    },
    {
      icon: Layers,
      title: '5 interactive formats',
      sub: 'Drills, estimates, signal-finding, decisions, synthesis.',
      color: 'text-green',
      glow: 'bg-green/10 border-green/25',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_CINEMATIC, delay: 0.08 }}
      className="mb-6"
    >
      <GlassPanel tone="accent" aurora scanlines className="px-5 pt-6 pb-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-light/80 mb-2">
          Welcome to StockLens
        </p>
        <h2 className="text-xl font-bold text-text-primary tracking-tight leading-snug">
          Learn to analyze businesses<br />
          <span className="text-accent-light">like a real investor.</span>
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed mt-2 max-w-md">
          Interactive lessons that teach reasoning — not memorization.
          Free, no account required.
        </p>

        <div className="hairline my-4" aria-hidden />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {props.map(({ icon: Icon, title, sub, color, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.08, ease: EASE_CINEMATIC }}
              className={`rounded-xl border p-3.5 ${glow} space-y-1.5`}
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <p className="text-[12px] font-semibold text-text-primary leading-snug">{title}</p>
              <p className="text-[11px] text-text-muted leading-snug">{sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={onStart}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold cursor-pointer mt-4 shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)]"
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
      className="relative grid grid-cols-4 gap-0.5 rounded-xl p-1
                 bg-gradient-to-b from-dark-800/80 to-dark-900/80
                 border border-white/[0.06]
                 backdrop-blur-xl
                 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
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
            className="relative flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg text-[11px] font-semibold cursor-pointer"
          >
            {isActive && (
              <motion.span
                layoutId="tabbar-active-pill"
                className="absolute inset-0 rounded-lg
                           bg-gradient-to-b from-accent/20 to-accent/[0.06]
                           border border-accent/35
                           shadow-[0_0_20px_-4px_rgba(99,102,241,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]"
                transition={SPRING_FLUID}
              />
            )}
            <span
              className={`relative flex items-center gap-1.5 transition-colors duration-200 ${
                isActive ? 'text-accent-light' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.dot && !isActive && (
                <span
                  className="absolute -top-0.5 -right-2 w-1.5 h-1.5 rounded-full bg-accent-light shadow-[0_0_6px_rgba(129,140,248,0.7)]"
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
  const tierKey = (lesson.tier ?? 'foundations-1') as keyof typeof TIER_COLORS;
  const tierColor = TIER_COLORS[tierKey];

  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: EASE_CINEMATIC,
        delay: Math.min(index, 10) * 0.03,
      }}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.008 }}
      whileTap={{ scale: 0.995 }}
      style={{ borderLeftColor: tierColor }}
      className={`group w-full text-left rounded-xl border border-l-[3px] p-4 cursor-pointer transition-shadow duration-200 ${
        isNext && !completed
          ? 'border-accent/40 bg-gradient-to-br from-dark-800 to-dark-800/60 hover:border-accent/60 hover:shadow-[0_8px_32px_-8px_rgba(99,102,241,0.2)] shadow-[0_2px_12px_-4px_rgba(99,102,241,0.1)]'
          : completed
            ? 'border-border bg-dark-800/40 hover:bg-dark-800/70 hover:border-border-light hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.3)]'
            : 'border-border bg-dark-800/60 hover:bg-dark-800/90 hover:border-border-light hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.3)]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors duration-200 ${
            completed
              ? 'bg-green/10 border border-green/25'
              : isNext
                ? 'bg-accent/15 border border-accent/30 shadow-[0_0_12px_-4px_rgba(99,102,241,0.3)]'
                : 'bg-dark-700 border border-border group-hover:border-border-light'
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
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent-light font-bold uppercase tracking-[0.1em] shrink-0 border border-accent/25">
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
        <div className="flex items-center gap-2.5 shrink-0">
          {completed && stars !== null ? (
            <div className="flex items-center gap-0.5">
              {[0, 1, 2].map((i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < stars ? 'text-warm fill-warm drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]' : 'text-dark-500'
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
            className={`w-4 h-4 transition-all duration-200 group-hover:translate-x-1 ${
              isNext && !completed
                ? 'text-accent-light'
                : completed
                  ? 'text-text-muted'
                  : 'text-text-secondary'
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
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center border"
            style={{
              backgroundColor: accentColor.replace('0.4)', '0.1)'),
              borderColor: accentColor.replace('0.4)', '0.25)'),
            }}
          >
            <Icon className="w-3.5 h-3.5" style={{ color: accentColor.replace('0.4)', '1)') }} />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-text-primary">{label}</h3>
            <span
              className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-[0.1em] ${badgeColor}`}
            >
              {badge}
            </span>
          </div>
        </div>
        <span className="display-num text-[10px] text-text-muted font-medium">
          {count}/{total}
        </span>
      </div>
      {/* Section completion bar */}
      <div className="h-[3px] rounded-full bg-dark-700/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct * 100}%` }}
          transition={{ duration: 0.7, ease: EASE_CINEMATIC, delay: 0.15 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accentColor.replace('0.4)', '0.7)')}, ${accentColor.replace('0.4)', '1)')})`,
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_CINEMATIC }}
          onClick={onStart}
          className="group w-full flex items-center gap-3 p-4 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/[0.1] via-accent/[0.04] to-transparent hover:from-accent/[0.14] transition-all cursor-pointer text-left overflow-hidden relative"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-11 h-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
            <ArrowRight className="w-5 h-5 text-accent-light" />
          </div>
          <div className="relative flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-accent-light/80">
              Continue
            </p>
            <p className="text-sm font-semibold text-text-primary truncate mt-0.5">
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
          <span className="tabular-nums">
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
        className={`text-lg font-bold tabular-nums leading-none ${toneClasses.value}`}
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
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: EASE_CINEMATIC,
        delay: 0.04 + Math.min(index, 6) * 0.03,
      }}
      onClick={onClick}
      className={`group relative rounded-xl border p-3 text-left transition-all cursor-pointer overflow-hidden ${
        completed
          ? 'border-green/30 bg-green/[0.05] hover:bg-green/[0.08]'
          : inProgress
            ? 'border-accent/30 bg-accent/[0.05] hover:bg-accent/[0.08]'
            : 'border-border bg-dark-800/50 hover:bg-dark-800 hover:border-border-light'
      }`}
    >
      <div className="flex items-start gap-2">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 ${
            completed
              ? 'bg-green/10 border border-green/20'
              : inProgress
                ? 'bg-accent/10 border border-accent/20'
                : 'bg-dark-700 border border-border'
          }`}
        >
          {completed ? (
            <CheckCircle2 className="w-4 h-4 text-green" />
          ) : (
            company.emoji
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-[11px] font-bold text-text-primary truncate">
              {company.ticker}
            </p>
            <span className="text-[9px] text-text-muted">•</span>
            <p className="text-[10px] text-text-muted truncate">
              {company.sector}
            </p>
          </div>
          <p className="text-[11px] text-text-secondary truncate mt-0.5">
            {company.name}
          </p>
          {inProgress && (
            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="flex-1 h-1 rounded-full bg-dark-700 overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent/70"
                  style={{ width: `${(progressCount / 7) * 100}%` }}
                />
              </div>
              <span className="text-[9px] text-accent-light font-semibold tabular-nums">
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
          <span className="text-[10px] text-text-muted ml-auto tabular-nums">
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
                    className={`text-[10px] font-medium tabular-nums ${
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
        className={`text-base font-bold tabular-nums mt-1 leading-none ${toneClasses.text}`}
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
        <span className="text-[10px] text-text-muted font-medium tabular-nums">
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
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: EASE_CINEMATIC,
        delay: 0.05 + Math.min(index, 6) * 0.03,
      }}
      className={`relative rounded-xl border p-3 overflow-hidden ${
        earned
          ? 'border-warm/40 bg-gradient-to-br from-warm/[0.14] to-warm/[0.04] shadow-[0_0_14px_rgba(245,158,11,0.1)]'
          : locked
            ? 'border-border bg-dark-900/40'
            : 'border-accent/25 bg-gradient-to-br from-accent/[0.08] to-transparent'
      }`}
    >
      <div className="flex items-start gap-2.5">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
            earned
              ? 'bg-warm/20 border border-warm/40'
              : locked
                ? 'bg-dark-800 border border-border'
                : 'bg-accent/15 border border-accent/30'
          }`}
        >
          {locked ? (
            <Lock className="w-3.5 h-3.5 text-text-faint" />
          ) : (
            <Icon
              className={`w-3.5 h-3.5 ${
                earned ? 'text-warm' : 'text-accent-light'
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

      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 h-1 rounded-full bg-dark-700 overflow-hidden">
          <div
            className={`h-full rounded-full ${
              earned ? 'bg-warm' : 'bg-accent/70'
            }`}
            style={{ width: `${progressPct * 100}%` }}
          />
        </div>
        <span
          className={`text-[9px] font-semibold tabular-nums shrink-0 ${
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
  const segments = 24;
  const filledSegments = Math.round(pct * segments);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_CINEMATIC }}
    >
      <GlassPanel tone="accent" aurora scanlines noise={false} className="px-5 py-5">
        {/* Header row: level badge + title + XP total */}
        <div className="flex items-center gap-4">
          {/* Level badge with pulse ring */}
          <div className="relative shrink-0">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={SPRING_CELEBRATION}
              className="relative w-[68px] h-[68px] rounded-2xl flex items-center justify-center
                         bg-gradient-to-br from-accent/25 via-accent/10 to-transparent
                         border border-accent/40
                         shadow-[0_0_24px_-4px_rgba(99,102,241,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <span className="display-num text-[30px] text-accent-light leading-none">
                {levelInfo.level}
              </span>
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-md
                               bg-dark-900/90 border border-accent/30
                               text-[8px] font-bold uppercase tracking-[0.18em] text-accent-light">
                LVL
              </span>
            </motion.div>
          </div>

          {/* Title + XP total */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-light/80">
              Rank
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-text-primary truncate mt-0.5">
              {levelInfo.title}
            </h3>
            <div className="flex items-baseline gap-1.5 mt-1">
              <CountUp
                value={levelInfo.totalXp}
                duration={1.1}
                format={(n) => n.toLocaleString()}
                className="display-num text-[22px] text-text-primary leading-none"
              />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                XP
              </span>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="hairline my-4" aria-hidden />

        {/* Segmented progression gauge */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em]">
            <span className="text-text-muted">
              Progress to Lv <span className="text-text-secondary">{levelInfo.level + 1}</span>
            </span>
            <span className="display-num text-text-secondary tabular-nums normal-case tracking-normal text-[11px]">
              {levelInfo.xpIntoLevel}
              <span className="text-text-faint"> / {levelInfo.xpSpanOfLevel}</span>
            </span>
          </div>

          {/* Segmented bar */}
          <div className="relative h-2.5 flex items-stretch gap-[2px]">
            {Array.from({ length: segments }).map((_, i) => {
              const active = i < filledSegments;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleY: 0.4 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.015, ease: EASE_CINEMATIC }}
                  className={`flex-1 rounded-[2px] origin-bottom ${
                    active
                      ? 'bg-gradient-to-t from-accent/90 to-accent-light shadow-[0_0_6px_rgba(129,140,248,0.45)]'
                      : 'bg-dark-700/80'
                  }`}
                />
              );
            })}
          </div>

          {/* Fine data line */}
          <div className="flex justify-between text-[10px] text-text-faint tabular-nums">
            <span>{Math.round(pct * 100)}% complete</span>
            <span>{levelInfo.xpToNextLevel} XP remaining</span>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
}
