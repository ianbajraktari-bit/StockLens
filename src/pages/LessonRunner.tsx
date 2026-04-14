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
  TrendingUp,
} from 'lucide-react';
import DrillStep from '../components/steps/DrillStep';
import EstimateStep from '../components/steps/EstimateStep';
import TapStep from '../components/steps/TapStep';
import DecideStep from '../components/steps/DecideStep';
import ThinkingStepComponent from '../components/steps/ThinkingStepComponent';
import RewardsPanel from '../components/RewardsPanel';
import { type Lesson, type Skill, getLessonById } from '../data/lessons';
import {
  getNextLessonId,
  getSkillsProgress,
  getStreak,
  getSkillLabel,
} from '../lib/progression';
import { getLevelInfo, getTotalXp } from '../lib/xp';
import { getEarnedQuestSet, getQuestById, getQuestProgress, type Quest } from '../lib/quests';

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
    return (
      <div className="min-h-screen bg-dark-950">
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Lessons
            </button>

            {/* Lesson header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl shrink-0">
                {lesson.emoji}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    lesson.tier === 'company'
                      ? 'bg-warm/10 text-warm-light border border-warm/20'
                      : 'bg-accent/10 text-accent-light border border-accent/20'
                  }`}>
                    {lesson.tier === 'company' ? 'Company Deep Dive' : 'Foundations'}
                  </span>
                </div>
                <h1 className="text-xl font-bold text-text-primary">{lesson.title}</h1>
                <p className="text-sm text-text-secondary mt-0.5">{lesson.subtitle}</p>
              </div>
            </div>

            {/* Main card */}
            <div className="rounded-2xl border border-border bg-dark-800/60 overflow-hidden">
              {/* Description */}
              <div className="p-5">
                <p className="text-sm text-text-secondary leading-relaxed">{lesson.description}</p>
              </div>

              {/* Key facts — company lessons only */}
              {lesson.keyFacts.length > 0 && (
                <div className="border-t border-border px-5 py-4">
                  <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider mb-3">
                    Key facts
                    <span className="ml-1.5 font-normal normal-case tracking-normal text-text-faint">
                      ({lesson.dataAsOf})
                    </span>
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {lesson.keyFacts.map((fact, i) => (
                      <div key={i} className="rounded-lg bg-dark-900/50 border border-border p-3">
                        <p className="text-[10px] text-text-muted">{fact.label}</p>
                        <p className="text-sm font-bold text-text-primary mt-0.5">{fact.value}</p>
                        <p className="text-[10px] text-text-muted mt-1 leading-relaxed">
                          {fact.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topics */}
              <div className="border-t border-border px-5 py-4 space-y-2.5">
                {lesson.topics.map((topic, i) => {
                  const Icon = topic.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-dark-700 border border-border flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3 text-accent-light" />
                      </div>
                      <span className="text-xs text-text-primary">{topic.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Meta */}
              <div className="border-t border-border px-5 py-3 flex items-center gap-4 text-[10px] text-text-muted">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  {total} steps
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  ~{lesson.estimatedMinutes} min
                </span>
              </div>
            </div>

            <motion.button
              onClick={() => setPhase('running')}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Start Lesson
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
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
    <div className="min-h-screen bg-dark-950">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Header + Progress */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-8 h-8 rounded-lg bg-dark-800 border border-border flex items-center justify-center hover:bg-dark-700 transition-colors cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-text-secondary" />
            </button>

            {/* Segmented progress bar */}
            <div className="flex-1 flex items-center gap-0.5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1.5 rounded-full overflow-hidden bg-dark-700"
                >
                  <motion.div
                    className={`h-full rounded-full ${
                      i < stepIndex ? 'bg-accent' : i === stepIndex ? 'bg-accent-light' : ''
                    }`}
                    initial={false}
                    animate={{ width: i <= stepIndex ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs text-text-muted tabular-nums shrink-0">
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
  const stars = (ratio === 1 ? 3 : ratio >= 0.75 ? 2 : ratio >= 0.5 ? 1 : 0) as 0 | 1 | 2 | 3;
  const isPerfect = ratio === 1;

  const nextId = getNextLessonId(lesson.id);
  const nextLesson = nextId ? getLessonById(nextId) : undefined;

  const skillDeltas = snapshot?.skillDeltas ?? [];
  const xpAwarded = snapshot ? snapshot.xpAfter - snapshot.xpBefore : 0;
  const newQuests = snapshot?.newQuests ?? [];

  // Near-complete quests (exclude just-earned and fully-locked)
  const upcomingQuests = getQuestProgress()
    .filter((q) => !q.earned && q.progressPct > 0 && !newQuests.find((nq) => nq.id === q.quest.id))
    .sort((a, b) => b.progressPct - a.progressPct)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">
      {/* Ambient scene glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
        {isPerfect && (
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-warm/[0.05] blur-[120px]" />
        )}
      </div>

      {/* Confetti overlay for perfect scores */}
      {isPerfect && <Confetti />}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-2xl mx-auto px-4 py-8 space-y-4"
      >
        <RewardsPanel
          heading={isPerfect ? 'Perfect!' : 'Lesson Complete'}
          subheading={lesson.title}
          score={{ correct: correctTotal, total: maxTotal }}
          stars={stars}
          gradeMessage={completionMessage}
          takeaways={lesson.takeaways}
          gradeEyebrow={lesson.tier === 'company' ? 'Company Deep Dive' : 'Foundations'}
          xpAwarded={xpAwarded}
          xpBefore={snapshot?.xpBefore ?? 0}
          xpAfter={snapshot?.xpAfter ?? 0}
          levelBefore={snapshot?.levelBefore ?? 1}
          levelAfter={snapshot?.levelAfter ?? 1}
          streakBefore={snapshot?.streakBefore}
          streakAfter={snapshot?.streakAfter}
          skillDeltas={skillDeltas}
          newQuests={newQuests}
          upcomingQuests={upcomingQuests}
        />

        {/* Next lesson preview card */}
        {nextLesson && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.75 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onNext(nextLesson.id)}
            className="group w-full text-left rounded-xl border border-accent/40 bg-gradient-to-br from-accent/[0.12] to-accent/[0.04] hover:from-accent/[0.18] hover:to-accent/[0.06] p-4 transition-colors cursor-pointer shadow-[0_0_24px_rgba(99,102,241,0.08)]"
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
        <div className="flex gap-2">
          <button
            onClick={onHome}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-dark-800/60 hover:bg-dark-800 text-text-secondary text-xs font-semibold transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </button>
          <button
            onClick={onRestart}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-dark-800/60 hover:bg-dark-800 text-text-muted text-xs font-semibold transition-colors cursor-pointer"
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
