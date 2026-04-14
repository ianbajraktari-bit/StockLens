import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Flame,
  Home,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Star,
  Target,
  Trophy,
} from 'lucide-react';
import DrillStep from '../components/steps/DrillStep';
import EstimateStep from '../components/steps/EstimateStep';
import TapStep from '../components/steps/TapStep';
import DecideStep from '../components/steps/DecideStep';
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
  const [streakAfter, setStreakAfter] = useState<number | null>(null);

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
      // Persist + update streak (happens inside saveDailyPracticeResult).
      saveDailyPracticeResult(newCorrect, newMax);
      setStreakAfter(getStreak().current);
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
    const stars = ratio === 1 ? 3 : ratio >= 0.75 ? 2 : ratio >= 0.5 ? 1 : 0;
    const isPerfect = ratio === 1;
    const message =
      ratio === 1
        ? 'Perfect. You have the reflexes.'
        : ratio >= 0.75
          ? 'Sharp work. The material is sticking.'
          : ratio >= 0.5
            ? 'Solid — and the misses are what review is for.'
            : 'Good that you showed up. The ones you missed are flagged for tomorrow.';

    // If user just completed (not re-viewing), we captured streakAfter.
    // Otherwise fall back to current streak.
    const displayedStreak = streakAfter ?? getStreak().current;
    const alreadyDone = existingResult != null && streakAfter == null;

    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-2xl space-y-5"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ${
                isPerfect
                  ? 'bg-gradient-to-br from-warm/25 to-warm/5 border border-warm/40'
                  : 'bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30'
              }`}
            >
              <Trophy
                className={`w-10 h-10 ${
                  isPerfect ? 'text-warm' : 'text-accent-light'
                }`}
              />
            </motion.div>

            <div>
              <h1 className="text-2xl font-bold text-text-primary">
                {alreadyDone ? "Today's Practice" : 'Daily Practice Complete'}
              </h1>
              <p className="text-sm text-text-secondary mt-1">
                {alreadyDone
                  ? 'You already wrapped this up today — come back tomorrow for a new set.'
                  : 'Come back tomorrow for a new set.'}
              </p>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                    delay: 0.3 + i * 0.1,
                  }}
                >
                  <Star
                    className={`w-7 h-7 ${
                      i < stars ? 'text-warm fill-warm' : 'text-dark-500'
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Score */}
            <div className="rounded-xl border border-border bg-dark-800/60 p-5 space-y-3 mx-auto max-w-xs">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-4 h-4 text-accent-light" />
                <p className="text-3xl font-bold text-text-primary tabular-nums">
                  {correctTotal}
                  <span className="text-text-muted text-lg">/{maxTotal}</span>
                </p>
              </div>
              <div className="h-2 rounded-full bg-dark-600 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ratio * 100}%` }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`h-full rounded-full ${
                    ratio >= 0.75
                      ? 'bg-green'
                      : ratio >= 0.5
                        ? 'bg-amber'
                        : 'bg-red'
                  }`}
                />
              </div>
              <p className="text-xs text-text-secondary">{message}</p>
            </div>
          </div>

          {/* Streak callout */}
          {displayedStreak > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 16,
                delay: 0.45,
              }}
              className="rounded-xl border border-warm/30 bg-gradient-to-r from-warm/[0.12] to-warm/[0.04] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-warm drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-warm tabular-nums">
                      Day {displayedStreak}
                    </span>
                    <span className="text-xs font-semibold text-warm/80 uppercase tracking-wider">
                      streak
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-0.5">
                    Daily practice keeps the streak alive — a few minutes a day
                    beats an hour once a week.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Reminder — what tomorrow looks like */}
          <div className="rounded-xl border border-border bg-dark-800/60 p-5 space-y-2.5">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-warm" />
              <p className="text-xs font-semibold text-text-primary">
                Why this works
              </p>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Spaced repetition compounds. A question you've seen five times
              across weeks becomes a reflex — a question you've seen once is
              still fragile. Showing up daily is the work.
            </p>
          </div>

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
