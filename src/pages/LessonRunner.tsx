import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Home,
  Sparkles,
  Clock,
  Star,
  Flame,
  TrendingUp,
  BarChart3,
  Zap,
  ChevronUp,
  ChevronDown,
  Calendar,
  Trophy,
  Lightbulb,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import DrillStep from '../components/steps/DrillStep';
import EstimateStep from '../components/steps/EstimateStep';
import TapStep from '../components/steps/TapStep';
import DecideStep from '../components/steps/DecideStep';
import ThinkingStepComponent from '../components/steps/ThinkingStepComponent';
import { type Lesson, type Skill, getLessonById } from '../data/lessons';
import {
  getNextLessonId,
  getSkillsProgress,
  getStreak,
  getSkillLabel,
} from '../lib/progression';
import { getLevelInfo, getTotalXp, titleForLevel } from '../lib/xp';
import { getEarnedQuestSet, getQuestById, type Quest } from '../lib/quests';

interface SkillDelta {
  skill: Skill;
  label: string;
  before: number;
  after: number;
  maxExposure: number;
}

interface CompletionSnapshot {
  skillDeltas: SkillDelta[];
  streakBefore: number;
  streakAfter: number;
  xpBefore: number;
  xpAfter: number;
  levelBefore: number;
  levelAfter: number;
  newQuests: Quest[];
}

type Phase = 'intro' | 'running' | 'complete';

interface Props {
  lesson: Lesson;
  onBack: () => void;
  onComplete?: (lessonId: string, correct: number, total: number) => void;
}

export default function LessonRunner({ lesson, onBack, onComplete }: Props) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('intro');
  const [stepIndex, setStepIndex] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(0);
  const [maxTotal, setMaxTotal] = useState(0);
  // Collapsible key facts — default collapsed for company deep dives so advanced
  // lessons don't dump a wall of data before the user starts thinking.
  const [factsOpen, setFactsOpen] = useState(false);
  const [snapshot, setSnapshot] = useState<CompletionSnapshot | null>(null);

  const steps = lesson.steps ?? [];
  const total = steps.length;
  const currentStep = steps[stepIndex];

  function handleStepDone(score: { correct: number; total: number }) {
    const newCorrect = correctTotal + score.correct;
    const newMax = maxTotal + score.total;
    setCorrectTotal(newCorrect);
    setMaxTotal(newMax);
    if (stepIndex < total - 1) {
      setStepIndex((i) => i + 1);
    } else {
      // Capture BEFORE state so we can animate the RPG-style "gain"
      const lessonSkills = lesson.skills ?? [];
      const progressBefore = getSkillsProgress();
      const streakBefore = getStreak().current;
      const xpBefore = getTotalXp();
      const levelBefore = getLevelInfo(xpBefore).level;
      const questsBefore = getEarnedQuestSet();

      // Fire onComplete — this mutates localStorage (markCompleted + updateStreak
      // + awardLessonCompletion + evaluateQuests)
      onComplete?.(lesson.id, newCorrect, newMax);

      // Capture AFTER state
      const progressAfter = getSkillsProgress();
      const streakAfter = getStreak().current;
      const xpAfter = getTotalXp();
      const levelAfter = getLevelInfo(xpAfter).level;
      const questsAfter = getEarnedQuestSet();

      const skillDeltas: SkillDelta[] = lessonSkills.map((skill) => {
        const beforeEntry = progressBefore.find((s) => s.skill === skill);
        const afterEntry = progressAfter.find((s) => s.skill === skill);
        return {
          skill,
          label: getSkillLabel(skill),
          before: beforeEntry?.exposure ?? 0,
          after: afterEntry?.exposure ?? 0,
          maxExposure: afterEntry?.maxExposure ?? beforeEntry?.maxExposure ?? 1,
        };
      });

      // New quests = questsAfter - questsBefore
      const newQuests: Quest[] = [];
      for (const id of questsAfter) {
        if (!questsBefore.has(id)) {
          const q = getQuestById(id);
          if (q) newQuests.push(q);
        }
      }

      setSnapshot({
        skillDeltas,
        streakBefore,
        streakAfter,
        xpBefore,
        xpAfter,
        levelBefore,
        levelAfter,
        newQuests,
      });
      setPhase('complete');
    }
  }

  function handleRestart() {
    setStepIndex(0);
    setCorrectTotal(0);
    setMaxTotal(0);
    setSnapshot(null);
    setPhase('intro');
  }

  function getCompletionMessage(): string {
    const { completionMessages: m } = lesson;
    const ratio = maxTotal > 0 ? correctTotal / maxTotal : 0;
    if (ratio === 1) return m.perfect;
    if (ratio >= 0.75) return m.great;
    if (ratio >= 0.5) return m.good;
    return m.low;
  }

  // ─────────────────────────────────────────────────────────────────────
  // Intro screen
  // ─────────────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    const isCompany = lesson.tier === 'company';
    const hasFacts = lesson.keyFacts.length > 0;
    const tierLabel = isCompany
      ? 'Company Deep Dive'
      : lesson.tier === 'foundations-2'
        ? 'Investing Concepts'
        : 'Foundations';

    return (
      <div className="min-h-screen bg-dark-950 relative overflow-hidden">
        {/* Ambient scene */}
        <div className="scene-mesh" />
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[100px] ${
            isCompany ? 'bg-warm/[0.06]' : 'bg-accent/[0.06]'
          }`} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[80px] bg-signal/[0.04]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Lessons
          </motion.button>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 border ${
                  isCompany
                    ? 'bg-gradient-to-br from-warm/25 via-warm/10 to-transparent border-warm/30 shadow-[0_0_28px_-4px_rgba(245,158,11,0.25)]'
                    : 'bg-gradient-to-br from-accent/25 via-accent/10 to-signal/[0.05] border-accent/30 shadow-[0_0_28px_-4px_rgba(99,102,241,0.25)]'
                }`}
              >
                {lesson.emoji}
              </motion.div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full ${
                      isCompany
                        ? 'bg-warm/12 text-warm border border-warm/20'
                        : 'bg-accent/12 text-accent-light border border-accent/20'
                    }`}
                  >
                    {tierLabel}
                  </span>
                </div>
                <h1 className="text-[22px] font-extrabold text-text-primary leading-tight tracking-tight">
                  {lesson.title}
                </h1>
                <p className="text-sm text-text-secondary mt-1 leading-snug">
                  {lesson.subtitle}
                </p>
              </div>
            </div>

            {/* Meta chip row */}
            <div className="flex items-center gap-2 flex-wrap">
              <MetaChip icon={BookOpen} value={`${total} steps`} />
              <MetaChip icon={Clock} value={`~${lesson.estimatedMinutes} min`} />
              {lesson.dataAsOf && (
                <MetaChip icon={Calendar} value={lesson.dataAsOf} />
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-sm text-text-secondary leading-relaxed"
          >
            {lesson.description}
          </motion.p>

          {/* Topics */}
          {lesson.topics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
              className="space-y-2"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
                What you&apos;ll cover
              </p>
              <div className="flex items-center gap-1.5 flex-wrap">
                {lesson.topics.map((topic, i) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-dark-800/50 border border-white/[0.06] backdrop-blur-sm"
                    >
                      <Icon className="w-3 h-3 text-accent-light" />
                      <span className="text-[11px] text-text-primary font-medium">
                        {topic.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Key facts — collapsible disclosure (company/advanced lessons) */}
          {hasFacts && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
              <button
                onClick={() => setFactsOpen((v) => !v)}
                aria-expanded={factsOpen}
                aria-controls="key-facts-panel"
                className="group w-full flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1] transition-all px-4 py-3.5 cursor-pointer text-left backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-dark-700/80 border border-white/[0.06] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-3.5 h-3.5 text-accent-light" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-text-primary">
                    Key facts
                  </p>
                  <p className="text-[10px] text-text-muted mt-0.5">
                    {lesson.keyFacts.length} data points
                    {lesson.dataAsOf && ` · ${lesson.dataAsOf}`}
                    {' · '}
                    {factsOpen ? 'tap to collapse' : 'tap to reveal'}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: factsOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 text-text-muted group-hover:text-text-secondary"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {factsOpen && (
                  <motion.div
                    id="key-facts-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {lesson.keyFacts.map((fact, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                            delay: Math.min(i, 6) * 0.03,
                          }}
                          className="rounded-lg bg-dark-900/60 border border-border p-3"
                        >
                          <p className="text-[10px] text-text-muted">{fact.label}</p>
                          <p className="text-sm font-bold text-text-primary mt-0.5 tabular-nums">
                            {fact.value}
                          </p>
                          <p className="text-[10px] text-text-muted mt-1 leading-relaxed">
                            {fact.detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Start CTA */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            onClick={() => setPhase('running')}
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`btn-glow w-full py-4 rounded-2xl font-bold text-sm cursor-pointer flex items-center justify-center gap-2.5 text-white transition-shadow duration-300 ${
              isCompany
                ? 'bg-gradient-to-r from-warm via-warm to-amber shadow-[0_8px_32px_-8px_rgba(245,158,11,0.5),0_0_0_1px_rgba(245,158,11,0.25)] hover:shadow-[0_12px_40px_-8px_rgba(245,158,11,0.6)]'
                : 'bg-gradient-to-r from-accent via-accent to-signal/80 shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6),0_0_0_1px_rgba(99,102,241,0.25)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)]'
            }`}
          >
            Start Lesson
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────
  // Completion screen
  // ─────────────────────────────────────────────────────────────────────
  if (phase === 'complete') {
    return (
      <CompletionScreen
        lesson={lesson}
        correctTotal={correctTotal}
        maxTotal={maxTotal}
        snapshot={snapshot}
        completionMessage={getCompletionMessage()}
        onRestart={handleRestart}
        onHome={() => navigate('/')}
        onNext={(id) => navigate(`/lesson/${id}`)}
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────
  // Running a step
  // ─────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-dark-950 relative">
      <div className="scene-mesh" />
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Header + Progress */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-8 h-8 rounded-xl bg-dark-800/60 border border-white/[0.06] flex items-center justify-center hover:bg-dark-700 hover:border-white/[0.1] transition-all cursor-pointer shrink-0 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 text-text-secondary" />
            </button>

            {/* Segmented progress bar */}
            <div className="flex-1 flex items-center gap-[3px]">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1.5 rounded-full overflow-hidden bg-dark-700/60"
                >
                  <motion.div
                    className={`h-full rounded-full ${
                      i < stepIndex
                        ? 'bg-accent shadow-[0_0_4px_rgba(99,102,241,0.4)]'
                        : i === stepIndex
                          ? 'bg-accent-light shadow-[0_0_6px_rgba(129,140,248,0.5)]'
                          : ''
                    }`}
                    initial={false}
                    animate={{ width: i <= stepIndex ? '100%' : '0%' }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-text-muted tabular-nums shrink-0 px-2 py-1 rounded-lg bg-dark-800/40 border border-white/[0.04]">
              <Sparkles className="w-3 h-3 text-accent-light" />
              {correctTotal}
            </div>
          </div>
        </div>

        {/* Step body */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            {currentStep?.kind === 'drill' && (
              <DrillStep step={currentStep} onDone={handleStepDone} />
            )}
            {currentStep?.kind === 'estimate' && (
              <EstimateStep step={currentStep} onDone={handleStepDone} />
            )}
            {currentStep?.kind === 'tap' && (
              <TapStep step={currentStep} onDone={handleStepDone} />
            )}
            {currentStep?.kind === 'decide' && (
              <DecideStep step={currentStep} onDone={handleStepDone} />
            )}
            {currentStep?.kind === 'thinking' && (
              <ThinkingStepComponent step={currentStep} onDone={handleStepDone} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Completion screen — extracted component
// ─────────────────────────────────────────────────────────────────────

interface CompletionScreenProps {
  lesson: Lesson;
  correctTotal: number;
  maxTotal: number;
  snapshot: CompletionSnapshot | null;
  completionMessage: string;
  onRestart: () => void;
  onHome: () => void;
  onNext: (nextLessonId: string) => void;
}

function CompletionScreen({
  lesson,
  correctTotal,
  maxTotal,
  snapshot,
  completionMessage,
  onRestart,
  onHome,
  onNext,
}: CompletionScreenProps) {
  const ratio = maxTotal > 0 ? correctTotal / maxTotal : 0;
  const stars = ratio === 1 ? 3 : ratio >= 0.75 ? 2 : ratio >= 0.5 ? 1 : 0;
  const isPerfect = ratio === 1;

  const nextId = getNextLessonId(lesson.id);
  const nextLesson = nextId ? getLessonById(nextId) : undefined;

  const streakIncreased =
    snapshot != null && snapshot.streakAfter > snapshot.streakBefore && snapshot.streakAfter > 0;

  const skillDeltas = snapshot?.skillDeltas ?? [];
  const xpAwarded = snapshot ? snapshot.xpAfter - snapshot.xpBefore : 0;
  const leveledUp = snapshot != null && snapshot.levelAfter > snapshot.levelBefore;
  const newQuests = snapshot?.newQuests ?? [];

  return (
    <div className="relative min-h-screen bg-dark-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Ambient glow */}
      <div className="scene-mesh" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] ${
          isPerfect ? 'bg-warm/[0.08]' : 'bg-accent/[0.06]'
        }`} />
      </div>

      {/* Confetti overlay for perfect scores */}
      {isPerfect && <Confetti />}

      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-2xl space-y-5"
      >
        {/* Celebration header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
            className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto ${
              isPerfect
                ? 'bg-gradient-to-br from-warm/30 via-warm/15 to-transparent border border-warm/40 shadow-[0_0_40px_-8px_rgba(245,158,11,0.4)]'
                : 'bg-gradient-to-br from-accent/25 via-accent/10 to-transparent border border-accent/30 shadow-[0_0_40px_-8px_rgba(99,102,241,0.3)]'
            }`}
          >
            <Trophy className={`w-10 h-10 ${isPerfect ? 'text-warm drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'text-accent-light'}`} />
          </motion.div>

          <div>
            <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">
              {isPerfect ? 'Perfect!' : 'Lesson Complete'}
            </h1>
            <p className="text-sm text-text-secondary mt-1">{lesson.title}</p>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.3 + i * 0.12 }}
              >
                <Star
                  className={`w-8 h-8 ${
                    i < stars
                      ? 'text-warm fill-warm drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                      : 'text-dark-500'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Score */}
          <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-5 space-y-3 mx-auto max-w-xs">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-4 h-4 text-accent-light" />
              <p className="text-3xl font-extrabold text-text-primary tabular-nums">
                {correctTotal}
                <span className="text-text-muted text-lg font-bold">/{maxTotal}</span>
              </p>
            </div>
            <div className="h-2.5 rounded-full bg-dark-600/60 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${ratio * 100}%` }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-full ${
                  ratio >= 0.75
                    ? 'bg-gradient-to-r from-green to-green-light shadow-[0_0_8px_rgba(34,197,94,0.4)]'
                    : ratio >= 0.5
                      ? 'bg-gradient-to-r from-amber to-warm shadow-[0_0_8px_rgba(245,158,11,0.4)]'
                      : 'bg-gradient-to-r from-red to-red-light'
                }`}
              />
            </div>
            <p className="text-xs text-text-secondary">{completionMessage}</p>
          </div>
        </div>

        {/* XP earned — the progression hook */}
        {xpAwarded > 0 && snapshot && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.4 }}
            className="rounded-2xl border border-accent/25 bg-gradient-to-r from-accent/[0.1] to-accent/[0.03] p-4 backdrop-blur-sm shadow-[0_0_20px_-8px_rgba(99,102,241,0.2)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(99,102,241,0.25)]">
                <Zap className="w-5 h-5 text-accent-light" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-accent-light tabular-nums">
                    +{xpAwarded} XP
                  </span>
                  <span className="text-[11px] text-text-muted">
                    ({snapshot.xpAfter.toLocaleString()} total)
                  </span>
                </div>
                <XpProgressBar xp={snapshot.xpAfter} prevXp={snapshot.xpBefore} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Level up celebration */}
        {leveledUp && snapshot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.5 }}
            className="relative rounded-xl border border-warm/40 bg-gradient-to-br from-warm/[0.2] via-warm/[0.06] to-transparent p-4 overflow-hidden"
          >
            <div className="absolute -top-10 -right-8 w-32 h-32 bg-warm/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 rounded-xl bg-warm/25 border border-warm/50 flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(245,158,11,0.4)]"
              >
                <ChevronUp className="w-6 h-6 text-warm" strokeWidth={3} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-warm">
                    Level up!
                  </span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-warm/15 text-warm font-semibold tabular-nums">
                    Lv {snapshot.levelBefore} → {snapshot.levelAfter}
                  </span>
                </div>
                <p className="text-sm font-bold text-text-primary mt-0.5">
                  You are now a {titleForLevel(snapshot.levelAfter)}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Newly-earned quests */}
        {newQuests.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.55 }}
            className="space-y-2"
          >
            {newQuests.map((quest, i) => {
              const QuestIcon = quest.icon;
              return (
                <motion.div
                  key={quest.id}
                  initial={{ opacity: 0, scale: 0.95, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 18,
                    delay: 0.6 + i * 0.1,
                  }}
                  className="rounded-xl border border-warm/40 bg-gradient-to-r from-warm/[0.14] to-warm/[0.04] p-4 flex items-center gap-3 shadow-[0_0_14px_rgba(245,158,11,0.1)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-warm/20 border border-warm/40 flex items-center justify-center shrink-0">
                    <QuestIcon className="w-5 h-5 text-warm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm">
                        Quest unlocked
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-warm/15 text-warm font-semibold tabular-nums">
                        +{quest.xp} XP
                      </span>
                    </div>
                    <p className="text-sm font-bold text-text-primary mt-0.5">
                      {quest.title}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {quest.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Streak increment callout */}
        {streakIncreased && snapshot && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.45 }}
            className="relative rounded-xl border border-warm/30 bg-gradient-to-r from-warm/[0.12] to-warm/[0.04] p-4 overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, -8, 8, -6, 6, 0] }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
                className="w-11 h-11 rounded-xl bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0"
              >
                <Flame className="w-5 h-5 text-warm drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-warm tabular-nums">
                    Day {snapshot.streakAfter}
                  </span>
                  <span className="text-xs font-semibold text-warm/80 uppercase tracking-wider">
                    streak!
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-0.5">
                  {snapshot.streakBefore === 0
                    ? 'You started a learning streak. Come back tomorrow to keep it alive.'
                    : `Up from ${snapshot.streakBefore}. Keep the fire burning.`}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Skill progress — RPG level-up moment */}
        {skillDeltas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.55 }}
            className="rounded-xl border border-border bg-dark-800/60 p-5 space-y-4"
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent-light" />
              <p className="text-xs font-semibold text-text-primary">Skills you leveled up</p>
            </div>

            <div className="space-y-3">
              {skillDeltas.map((delta, i) => (
                <SkillLevelUpRow key={delta.skill} delta={delta} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Takeaways */}
        <div className="rounded-xl border border-border bg-dark-800/60 p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-warm" />
            <p className="text-xs font-semibold text-text-primary">Key takeaways</p>
          </div>
          <div className="space-y-2.5">
            {lesson.takeaways.map((takeaway, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + i * 0.08 }}
                className="flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-bold text-accent-light shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">{takeaway}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next lesson preview card */}
        {nextLesson && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.75 }}
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onNext(nextLesson.id)}
            className="group w-full text-left rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.1] to-accent/[0.03] hover:from-accent/[0.15] p-4 transition-all duration-300 cursor-pointer shadow-[0_4px_24px_-8px_rgba(99,102,241,0.15)] hover:shadow-[0_8px_32px_-8px_rgba(99,102,241,0.25)] relative overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-dark-900/60 border border-accent/30 flex items-center justify-center text-2xl shrink-0">
                {nextLesson.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-accent-light">
                    Up next
                  </span>
                  <span
                    className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                      nextLesson.tier === 'company'
                        ? 'bg-warm/10 text-warm-light border border-warm/20'
                        : nextLesson.tier === 'foundations-2'
                          ? 'bg-amber/10 text-amber border border-amber/20'
                          : 'bg-accent/10 text-accent-light border border-accent/20'
                    }`}
                  >
                    {nextLesson.tier === 'company'
                      ? 'Company'
                      : nextLesson.tier === 'foundations-2'
                        ? 'Phase 2'
                        : 'Phase 1'}
                  </span>
                </div>
                <p className="text-sm font-semibold text-text-primary truncate">
                  {nextLesson.title}
                </p>
                <p className="text-xs text-text-secondary truncate mt-0.5">
                  {nextLesson.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-1 text-text-secondary group-hover:text-accent-light transition-colors shrink-0">
                <TrendingUp className="w-4 h-4" />
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.button>
        )}

        {/* Secondary actions */}
        <div className="flex gap-2.5">
          <button
            onClick={onHome}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-white/[0.06] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1] text-text-secondary text-xs font-semibold transition-all cursor-pointer backdrop-blur-sm"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </button>
          <button
            onClick={onRestart}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-white/[0.06] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1] text-text-muted text-xs font-semibold transition-all cursor-pointer backdrop-blur-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try Again
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Skill level-up row — animated before/after bar
// ─────────────────────────────────────────────────────────────────────

/** Animated XP bar showing progress toward the next level. */
function XpProgressBar({ xp, prevXp }: { xp: number; prevXp: number }) {
  const before = getLevelInfo(prevXp);
  const after = getLevelInfo(xp);
  const crossed = after.level > before.level;
  // If user crossed a level, animate from 0 (the new level started fresh).
  // Otherwise animate from the old progress fraction up to the new one.
  const startPct = crossed ? 0 : before.progressPct * 100;
  const endPct = after.progressPct * 100;

  return (
    <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden mt-1.5 relative">
      <motion.div
        initial={{ width: `${startPct}%` }}
        animate={{ width: `${endPct}%` }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.55 }}
        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
      />
    </div>
  );
}

function SkillLevelUpRow({ delta, index }: { delta: SkillDelta; index: number }) {
  const beforePct = Math.min((delta.before / delta.maxExposure) * 100, 100);
  const afterPct = Math.min((delta.after / delta.maxExposure) * 100, 100);
  const gained = delta.after > delta.before;
  const mastered = delta.after >= delta.maxExposure;
  const baseDelay = 0.65 + index * 0.12;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-text-primary">{delta.label}</span>
        <div className="flex items-center gap-1.5">
          {gained && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: baseDelay + 0.45 }}
              className="text-[10px] font-bold text-accent-light tabular-nums"
            >
              +1
            </motion.span>
          )}
          <span
            className={`text-[10px] font-medium tabular-nums ${
              mastered ? 'text-green' : 'text-text-muted'
            }`}
          >
            {mastered ? 'Mastered' : `${delta.after}/${delta.maxExposure}`}
          </span>
        </div>
      </div>
      <div className="relative h-2 rounded-full bg-dark-600 overflow-hidden">
        {/* Before bar — shown instantly */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${beforePct}%` }}
          transition={{ duration: 0.3, delay: baseDelay }}
          className="absolute inset-y-0 left-0 rounded-full bg-accent/50"
        />
        {/* After bar — animates forward */}
        <motion.div
          initial={{ width: `${beforePct}%` }}
          animate={{ width: `${afterPct}%` }}
          transition={{ duration: 0.6, delay: baseDelay + 0.25, ease: 'easeOut' }}
          className={`absolute inset-y-0 left-0 rounded-full ${
            mastered ? 'bg-green' : 'bg-accent-light'
          }`}
        />
        {/* Shimmer at the tip when gained */}
        {gained && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.9, delay: baseDelay + 0.4 }}
            style={{ left: `${afterPct}%` }}
            className="absolute inset-y-0 -translate-x-1/2 w-6 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm"
          />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Confetti — lightweight framer-motion piece-shower for perfect scores
// ─────────────────────────────────────────────────────────────────────

const CONFETTI_COLORS = [
  '#6366f1', // accent
  '#818cf8', // accent-light
  '#22c55e', // green
  '#f59e0b', // warm
  '#f1f5f9', // text-primary
];

function Confetti() {
  // Respect prefers-reduced-motion — render nothing if the user has opted out
  const reducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const pieces = useMemo(() => {
    const count = 28;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.35,
      duration: 1.8 + Math.random() * 1.4,
      size: 6 + Math.random() * 6,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      rotateEnd: (Math.random() - 0.5) * 720,
      drift: (Math.random() - 0.5) * 80,
    }));
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -40, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ['-10%', '110%'],
            x: [0, p.drift],
            opacity: [0, 1, 1, 0],
            rotate: [0, p.rotateEnd],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
            times: [0, 0.1, 0.85, 1],
          }}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.4,
            backgroundColor: p.color,
            borderRadius: 2,
          }}
          className="absolute top-0 block"
        />
      ))}
    </div>
  );
}

function MetaChip({
  icon: Icon,
  value,
}: {
  icon: LucideIcon;
  value: string;
}) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-dark-800/70 border border-border text-[10px] text-text-secondary">
      <Icon className="w-3 h-3 text-text-muted" />
      <span className="font-medium">{value}</span>
    </div>
  );
}
