import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Flame,
  Home,
  RotateCcw,
  Sparkles,
  Target,
} from 'lucide-react';
import DrillStep from '../components/steps/DrillStep';
import EstimateStep from '../components/steps/EstimateStep';
import TapStep from '../components/steps/TapStep';
import DecideStep from '../components/steps/DecideStep';
import RewardsPanel from '../components/RewardsPanel';
import {
  getScheduledDailyPractice,
  getReviewPoolSize,
  getTodayResult,
  saveDailyPracticeResult,
  DAILY_PRACTICE_SIZE,
  type ScheduledReviewItem,
} from '../lib/review';
import {
  recordItemResult,
  getReviewStats,
  type PriorityReason,
} from '../lib/spacedRepetition';
import { getStreak } from '../lib/progression';
import { getLevelInfo, getTotalXp } from '../lib/xp';
import { getQuestProgress, type Quest } from '../lib/quests';

type Phase = 'intro' | 'running' | 'complete';

export default function ReviewSession() {
  const navigate = useNavigate();

  // Freeze today's items for this session — don't re-derive on every render.
  const items = useMemo<ScheduledReviewItem[]>(() => getScheduledDailyPractice(), []);
  const poolSize = useMemo(() => getReviewPoolSize(), []);
  const existingResult = useMemo(() => getTodayResult(), []);
  const initialStats = useMemo(() => getReviewStats(), []);

  const [phase, setPhase] = useState<Phase>(
    existingResult ? 'complete' : 'intro',
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(
    existingResult?.correct ?? 0,
  );
  const [maxTotal, setMaxTotal] = useState(existingResult?.total ?? 0);
  const [streakBefore, setStreakBefore] = useState<number | null>(null);
  const [streakAfter, setStreakAfter] = useState<number | null>(null);
  const [xpAwarded, setXpAwarded] = useState(0);
  const [xpBefore, setXpBefore] = useState(0);
  const [xpAfter, setXpAfter] = useState(0);
  const [levelBefore, setLevelBefore] = useState(1);
  const [levelAfter, setLevelAfter] = useState(1);
  const [newQuests, setNewQuests] = useState<Quest[]>([]);

  const total = items.length;
  const current = items[stepIndex];

  function handleStepDone(score: { correct: number; total: number }) {
    // Record per-item SR outcome. "Pass" = perfect on this step. Anything
    // less resets the item to Leitner box 0 so it surfaces tomorrow.
    const passed = score.total > 0 && score.correct === score.total;
    const item = items[stepIndex];
    if (item) {
      recordItemResult(item.itemId, passed);
    }

    const newCorrect = correctTotal + score.correct;
    const newMax = maxTotal + score.total;
    setCorrectTotal(newCorrect);
    setMaxTotal(newMax);
    if (stepIndex < total - 1) {
      setStepIndex((i) => i + 1);
    } else {
      // Capture BEFORE state (xp + streak + levels) for the RewardsPanel.
      const xpPre = getTotalXp();
      const streakPre = getStreak().current;
      const levelPre = getLevelInfo(xpPre).level;

      // Persist + update streak + award XP + evaluate quests (happens inside
      // saveDailyPracticeResult — returns the full reward envelope).
      const reward = saveDailyPracticeResult(newCorrect, newMax);
      const xpPost = getTotalXp();
      const levelPost = getLevelInfo(xpPost).level;

      setStreakBefore(streakPre);
      setStreakAfter(getStreak().current);
      setXpAwarded(reward.xp?.awarded ?? 0);
      setXpBefore(xpPre);
      setXpAfter(xpPost);
      setLevelBefore(levelPre);
      setLevelAfter(levelPost);
      setNewQuests(reward.quests.map((q) => q.quest));
      setPhase('complete');
    }
  }

  function handleRestart() {
    // "Try again" — re-run the same items but do NOT overwrite the saved
    // result. Run the session in-memory; on completion we'll save again
    // (saveDailyPracticeResult overwrites), which is fine.
    setStepIndex(0);
    setCorrectTotal(0);
    setMaxTotal(0);
    setStreakAfter(null);
    setPhase('running');
  }

  // ─── Empty pool — user hasn't completed any lessons yet ────────────
  if (items.length === 0 && phase !== 'complete') {
    return (
      <div className="min-h-screen bg-dark-950">
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-dark-800/60 p-6 space-y-4 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6 text-accent-light" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-primary">
                No review material yet
              </h1>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                Daily Practice pulls questions from lessons you've already
                completed. Finish at least one lesson to unlock your first
                review session.
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Pick a lesson
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // ─── Intro ─────────────────────────────────────────────────────────
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
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </button>

            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-warm/10 border border-warm/25 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-warm" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-warm/10 text-warm-light border border-warm/20">
                    Daily Practice
                  </span>
                </div>
                <h1 className="text-xl font-bold text-text-primary">
                  Today's Review
                </h1>
                <p className="text-sm text-text-secondary mt-0.5">
                  {total} question{total === 1 ? '' : 's'} from lessons you've
                  already completed
                </p>
              </div>
            </div>

            {/* Why this matters card */}
            <div className="rounded-2xl border border-border bg-dark-800/60 overflow-hidden">
              <div className="p-5">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Spaced repetition is how knowledge becomes instinct. Each
                  day, we pull a fresh mix of questions from the material
                  you've learned — the ideas you haven't seen in a while will
                  surface first.
                </p>
              </div>
              <div className="border-t border-border px-5 py-4 grid grid-cols-3 gap-3">
                <Stat
                  icon={<Sparkles className="w-3.5 h-3.5 text-accent-light" />}
                  label="Today's set"
                  value={`${total} / ${DAILY_PRACTICE_SIZE}`}
                />
                <Stat
                  icon={<Target className="w-3.5 h-3.5 text-warm" />}
                  label="Review pool"
                  value={`${poolSize}`}
                  sub="questions"
                />
                <Stat
                  icon={<Flame className="w-3.5 h-3.5 text-warm" />}
                  label="Streak"
                  value={`${getStreak().current}`}
                  sub="day"
                />
              </div>

              {/* Today's mix — SR priority breakdown */}
              <div className="border-t border-border px-5 py-4 space-y-2">
                <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">
                  Today's mix
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {summarizeReasons(items).map(({ reason, count }) => (
                    <ReasonPill key={reason} reason={reason} count={count} />
                  ))}
                </div>
                {initialStats.tracked > 0 && (
                  <p className="text-[10px] text-text-muted pt-1">
                    <span className="text-green font-semibold">
                      {initialStats.mastered}
                    </span>{' '}
                    mastered
                    {initialStats.wrong > 0 && (
                      <>
                        {' • '}
                        <span className="text-red font-semibold">
                          {initialStats.wrong}
                        </span>{' '}
                        flagged
                      </>
                    )}
                    {' • '}
                    <span className="text-warm font-semibold">
                      {initialStats.due}
                    </span>{' '}
                    due
                  </p>
                )}
              </div>

              {/* Preview of source lessons */}
              <div className="border-t border-border px-5 py-4 space-y-2">
                <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">
                  Pulled from
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Map(items.map((it) => [it.lessonId, it])).values(),
                  ).map((it) => (
                    <div
                      key={it.lessonId}
                      className="flex items-center gap-1.5 rounded-lg bg-dark-900/50 border border-border px-2 py-1"
                    >
                      <span className="text-xs">{it.lessonEmoji}</span>
                      <span className="text-[11px] text-text-secondary">
                        {it.lessonTitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => setPhase('running')}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Start Daily Practice
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // ─── Complete ──────────────────────────────────────────────────────
  if (phase === 'complete') {
    const ratio = maxTotal > 0 ? correctTotal / maxTotal : 0;
    const stars = (ratio === 1 ? 3 : ratio >= 0.75 ? 2 : ratio >= 0.5 ? 1 : 0) as 0 | 1 | 2 | 3;
    const message =
      ratio === 1
        ? 'Perfect. You have the reflexes.'
        : ratio >= 0.75
          ? 'Sharp work. The material is sticking.'
          : ratio >= 0.5
            ? 'Solid — and the misses are what review is for.'
            : 'Good that you showed up. The ones you missed are flagged for tomorrow.';

    // If user just completed (not re-viewing), we captured streakAfter.
    const alreadyDone = existingResult != null && streakAfter == null;

    // Near-complete quests (exclude just-earned and fully-locked)
    const upcomingQuests = getQuestProgress()
      .filter(
        (q) => !q.earned && q.progressPct > 0 && !newQuests.find((nq) => nq.id === q.quest.id),
      )
      .sort((a, b) => b.progressPct - a.progressPct)
      .slice(0, 3);

    return (
      <div className="relative min-h-screen bg-dark-950 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0"
        >
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-2xl mx-auto px-4 py-8 space-y-4"
        >
          <RewardsPanel
            heading={alreadyDone ? "Today's Practice" : 'Daily Practice Complete'}
            subheading={
              alreadyDone
                ? 'You already wrapped this up today — come back tomorrow for a new set.'
                : 'Spaced repetition compounds. Come back tomorrow for a fresh mix.'
            }
            score={{ correct: correctTotal, total: maxTotal }}
            stars={stars}
            gradeMessage={message}
            gradeEyebrow="Daily Practice"
            xpAwarded={xpAwarded}
            xpBefore={xpBefore}
            xpAfter={xpAfter}
            levelBefore={levelBefore}
            levelAfter={levelAfter}
            streakBefore={streakBefore ?? undefined}
            streakAfter={streakAfter ?? undefined}
            newQuests={newQuests}
            upcomingQuests={upcomingQuests}
          />

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => navigate('/')}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-dark-800/60 hover:bg-dark-800 text-text-secondary text-xs font-semibold transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </button>
            <button
              onClick={handleRestart}
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

  // ─── Running a step ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-dark-950">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Header + progress */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="w-8 h-8 rounded-lg bg-dark-800 border border-border flex items-center justify-center hover:bg-dark-700 transition-colors cursor-pointer shrink-0"
              aria-label="Exit daily practice"
            >
              <ArrowLeft className="w-4 h-4 text-text-secondary" />
            </button>

            <div className="flex-1 flex items-center gap-0.5">
              {items.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1.5 rounded-full overflow-hidden bg-dark-700"
                >
                  <motion.div
                    className={`h-full rounded-full ${
                      i < stepIndex
                        ? 'bg-accent'
                        : i === stepIndex
                          ? 'bg-accent-light'
                          : ''
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

          {/* Provenance + SR reason — which lesson this step is from, why it's in the mix */}
          {current && (
            <div className="flex items-center gap-2 text-[11px] text-text-muted flex-wrap">
              <span className="text-sm">{current.lessonEmoji}</span>
              <span className="truncate">From: {current.lessonTitle}</span>
              <span className="text-text-faint">•</span>
              <ReasonPill reason={current.reason} />
            </div>
          )}
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
            {current?.step.kind === 'drill' && (
              <DrillStep step={current.step} onDone={handleStepDone} />
            )}
            {current?.step.kind === 'estimate' && (
              <EstimateStep step={current.step} onDone={handleStepDone} />
            )}
            {current?.step.kind === 'tap' && (
              <TapStep step={current.step} onDone={handleStepDone} />
            )}
            {current?.step.kind === 'decide' && (
              <DecideStep step={current.step} onDone={handleStepDone} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Small intro stat cell
// ─────────────────────────────────────────────────────────────────────

function Stat({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1 text-[10px] text-text-muted uppercase tracking-wider">
        {icon}
        <span>{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-base font-bold text-text-primary tabular-nums">
          {value}
        </span>
        {sub && <span className="text-[10px] text-text-muted">{sub}</span>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// SR reason pill — shows why an item is in today's mix
// ─────────────────────────────────────────────────────────────────────

const REASON_STYLE: Record<
  PriorityReason,
  { color: string; label: string }
> = {
  wrong: {
    color: 'bg-red/10 text-red border-red/30',
    label: 'Missed last time',
  },
  due: {
    color: 'bg-warm/10 text-warm border-warm/30',
    label: 'Due for review',
  },
  new: {
    color: 'bg-accent/10 text-accent-light border-accent/30',
    label: 'New',
  },
  upcoming: {
    color: 'bg-dark-700 text-text-muted border-border',
    label: 'Refresher',
  },
};

function ReasonPill({
  reason,
  count,
}: {
  reason: PriorityReason;
  count?: number;
}) {
  const style = REASON_STYLE[reason];
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${style.color}`}
    >
      {style.label}
      {count !== undefined && (
        <span className="tabular-nums opacity-80">×{count}</span>
      )}
    </span>
  );
}

/** Groups items by reason and returns counts for the intro summary. */
function summarizeReasons(
  items: ScheduledReviewItem[],
): { reason: PriorityReason; count: number }[] {
  const counts = new Map<PriorityReason, number>();
  for (const it of items) {
    counts.set(it.reason, (counts.get(it.reason) ?? 0) + 1);
  }
  // Order: wrong → due → new → upcoming (matches priority order).
  const order: PriorityReason[] = ['wrong', 'due', 'new', 'upcoming'];
  return order
    .filter((r) => counts.has(r))
    .map((r) => ({ reason: r, count: counts.get(r) ?? 0 }));
}
