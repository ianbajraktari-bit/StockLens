/**
 * RewardsPanel — the unified end-of-session reveal.
 *
 * Replaces the previous pattern of three loud stacked cards (XP + Level + Quests)
 * with one cohesive tabbed panel. Tabs: Grade / XP / Progress / Quests.
 *
 * Used by LessonRunner, ReviewSession, and AnalystSession. Each screen passes
 * whatever data it has — the panel adapts which tabs are visible.
 *
 * Design principles:
 *   - One surface, not three.
 *   - Cinematic motion, never frantic.
 *   - Numbers that animate like real dashboards (count-up, smooth bars).
 *   - Soft gradient accents, not loud glow walls.
 */
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Zap,
  ChevronUp,
  Trophy,
  Flame,
  Lightbulb,
  BarChart3,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react';
import { getLevelInfo, titleForLevel } from '../lib/xp';
import type { Quest, QuestStatus } from '../lib/quests';

export interface SkillDeltaView {
  skill: string;
  label: string;
  before: number;
  after: number;
  maxExposure: number;
}

export interface RewardsPanelProps {
  /** Hero heading (e.g. "Lesson Complete", "Analysis Complete", "Practice Complete"). */
  heading: string;
  /** Hero subheading (e.g. the lesson title or company name). */
  subheading?: string;

  // ── Grade tab ──────────────────────────────────────
  score?: { correct: number; total: number };
  stars?: 0 | 1 | 2 | 3;
  gradeMessage?: string;
  takeaways?: string[];
  /** Optional label shown above the score ring (e.g. "Daily Practice", "Analyst Mode"). */
  gradeEyebrow?: string;

  // ── XP tab ─────────────────────────────────────────
  /** XP awarded this session. 0 means the XP tab is hidden. */
  xpAwarded: number;
  xpBefore: number;
  xpAfter: number;
  levelBefore: number;
  levelAfter: number;

  // ── Progress tab ───────────────────────────────────
  streakBefore?: number;
  streakAfter?: number;
  skillDeltas?: SkillDeltaView[];
  /** Short sub-line for the progress tab (e.g. "3 of 38 lessons"). */
  progressCaption?: string;

  // ── Quests tab ─────────────────────────────────────
  /** Newly-earned quests from this session. */
  newQuests: Quest[];
  /** Near-complete quests — closest to done, shown as "up next". */
  upcomingQuests?: QuestStatus[];
}

type TabKey = 'grade' | 'xp' | 'progress' | 'quests';

const TAB_LABELS: Record<TabKey, string> = {
  grade: 'Grade',
  xp: 'XP',
  progress: 'Progress',
  quests: 'Quests',
};

export default function RewardsPanel(props: RewardsPanelProps) {
  const {
    heading,
    subheading,
    score,
    stars,
    gradeMessage,
    takeaways,
    gradeEyebrow,
    xpAwarded,
    xpBefore,
    xpAfter,
    levelBefore,
    levelAfter,
    streakBefore,
    streakAfter,
    skillDeltas,
    progressCaption,
    newQuests,
    upcomingQuests,
  } = props;

  const hasGrade = score != null || (takeaways && takeaways.length > 0);
  const hasXp = xpAwarded > 0;
  const streakChanged =
    streakBefore != null && streakAfter != null && streakAfter !== streakBefore;
  const hasSkills = (skillDeltas?.length ?? 0) > 0;
  const hasProgress = streakChanged || hasSkills || progressCaption != null;
  const hasQuests = newQuests.length > 0 || (upcomingQuests?.length ?? 0) > 0;

  const tabs = useMemo(() => {
    const out: TabKey[] = [];
    if (hasGrade) out.push('grade');
    if (hasXp) out.push('xp');
    if (hasProgress) out.push('progress');
    if (hasQuests) out.push('quests');
    return out;
  }, [hasGrade, hasXp, hasProgress, hasQuests]);

  const [active, setActive] = useState<TabKey>(() => tabs[0] ?? 'grade');

  // If the initial tab list changes (edge case), snap back to first valid.
  useEffect(() => {
    if (!tabs.includes(active) && tabs[0]) setActive(tabs[0]);
  }, [tabs, active]);

  const leveledUp = levelAfter > levelBefore;
  const isPerfect = score != null && score.total > 0 && score.correct === score.total;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full rounded-2xl border border-border/70 bg-gradient-to-b from-dark-800/80 to-dark-900/80 backdrop-blur-sm overflow-hidden"
    >
      {/* Ambient glow — extremely subtle */}
      <div
        aria-hidden
        className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[240px] rounded-full blur-[100px] pointer-events-none ${
          leveledUp
            ? 'bg-warm/[0.08]'
            : isPerfect
              ? 'bg-accent/[0.1]'
              : 'bg-accent/[0.05]'
        }`}
      />

      {/* ─── Hero header ─────────────────────────────────── */}
      <header className="relative px-6 pt-7 pb-5 text-center space-y-3">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.05 }}
          className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center ${
            leveledUp
              ? 'bg-gradient-to-br from-warm/25 to-warm/5 border border-warm/40 shadow-[0_0_30px_-6px_rgba(245,158,11,0.5)]'
              : isPerfect
                ? 'bg-gradient-to-br from-accent/25 to-accent/5 border border-accent/40 shadow-[0_0_30px_-6px_rgba(99,102,241,0.5)]'
                : 'bg-gradient-to-br from-accent/15 to-accent/[0.03] border border-accent/25'
          }`}
        >
          {leveledUp ? (
            <Trophy className="w-7 h-7 text-warm" />
          ) : isPerfect ? (
            <Sparkles className="w-7 h-7 text-accent-light" />
          ) : (
            <CheckCircle2 className="w-7 h-7 text-accent-light" />
          )}
        </motion.div>
        <div className="space-y-0.5">
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            {heading}
          </h2>
          {subheading && (
            <p className="text-xs text-text-muted">{subheading}</p>
          )}
        </div>

        {/* Compact at-a-glance summary strip — seen regardless of active tab */}
        <SummaryStrip
          score={score}
          stars={stars}
          xpAwarded={xpAwarded}
          leveledUp={leveledUp}
          levelAfter={levelAfter}
          newQuestCount={newQuests.length}
          streakAfter={streakAfter}
        />
      </header>

      {/* ─── Tab strip ───────────────────────────────────── */}
      {tabs.length > 1 && (
        <div className="relative px-3 border-t border-border/50">
          <div className="flex items-center justify-center gap-1 pt-2">
            {tabs.map((t) => (
              <TabButton
                key={t}
                label={TAB_LABELS[t]}
                active={active === t}
                onClick={() => setActive(t)}
                badge={t === 'quests' && newQuests.length > 0 ? newQuests.length : undefined}
                pulse={t === 'xp' && leveledUp}
              />
            ))}
          </div>
        </div>
      )}

      {/* ─── Tab body ────────────────────────────────────── */}
      <div className="relative px-5 pb-6 pt-4 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {active === 'grade' && (
              <GradeTab
                score={score}
                stars={stars}
                message={gradeMessage}
                takeaways={takeaways}
                eyebrow={gradeEyebrow}
              />
            )}
            {active === 'xp' && (
              <XpTab
                xpAwarded={xpAwarded}
                xpBefore={xpBefore}
                xpAfter={xpAfter}
                levelBefore={levelBefore}
                levelAfter={levelAfter}
              />
            )}
            {active === 'progress' && (
              <ProgressTab
                streakBefore={streakBefore}
                streakAfter={streakAfter}
                skillDeltas={skillDeltas}
                caption={progressCaption}
              />
            )}
            {active === 'quests' && (
              <QuestsTab newQuests={newQuests} upcoming={upcomingQuests ?? []} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

// ─────────────────────────────────────────────────────────────────
// Tab button
// ─────────────────────────────────────────────────────────────────

function TabButton({
  label,
  active,
  onClick,
  badge,
  pulse,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: number;
  pulse?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3.5 py-2 rounded-lg text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
        active
          ? 'text-text-primary'
          : 'text-text-muted hover:text-text-secondary'
      }`}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        {label}
        {badge != null && (
          <span className="inline-flex items-center justify-center min-w-[16px] h-[16px] px-1 rounded-full bg-warm/25 text-warm text-[9px] font-bold data-num">
            {badge}
          </span>
        )}
        {pulse && !active && (
          <span className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse" />
        )}
      </span>
      {active && (
        <motion.span
          layoutId="rewards-tab-pill"
          className="absolute inset-0 rounded-lg bg-dark-700/70 border border-border/60"
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        />
      )}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────
// Summary strip — always visible above tabs
// ─────────────────────────────────────────────────────────────────

function SummaryStrip({
  score,
  stars,
  xpAwarded,
  leveledUp,
  levelAfter,
  newQuestCount,
  streakAfter,
}: {
  score?: { correct: number; total: number };
  stars?: 0 | 1 | 2 | 3;
  xpAwarded: number;
  leveledUp: boolean;
  levelAfter: number;
  newQuestCount: number;
  streakAfter?: number;
}) {
  const items: { icon: React.ReactNode; label: string; key: string }[] = [];
  if (score && score.total > 0) {
    items.push({
      key: 'score',
      icon: <Star className="w-3 h-3 text-warm" fill={stars && stars > 0 ? 'currentColor' : 'none'} />,
      label: `${score.correct}/${score.total}`,
    });
  }
  if (xpAwarded > 0) {
    items.push({
      key: 'xp',
      icon: <Zap className="w-3 h-3 text-accent-light" />,
      label: `+${xpAwarded} XP`,
    });
  }
  if (leveledUp) {
    items.push({
      key: 'lvl',
      icon: <ChevronUp className="w-3 h-3 text-warm" strokeWidth={3} />,
      label: `Lv ${levelAfter}`,
    });
  }
  if (newQuestCount > 0) {
    items.push({
      key: 'q',
      icon: <Trophy className="w-3 h-3 text-warm" />,
      label: `${newQuestCount} quest${newQuestCount > 1 ? 's' : ''}`,
    });
  }
  if (streakAfter != null && streakAfter > 0) {
    items.push({
      key: 'streak',
      icon: <Flame className="w-3 h-3 text-warm" />,
      label: `${streakAfter}-day streak`,
    });
  }
  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-3 py-1.5 rounded-full bg-dark-900/70 border border-border/60 text-[11px] text-text-secondary data-num"
    >
      {items.map((item, i) => (
        <span key={item.key} className="flex items-center gap-1">
          {item.icon}
          <span className="font-medium">{item.label}</span>
          {i < items.length - 1 && <span className="text-border-light ml-2">·</span>}
        </span>
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Grade tab
// ─────────────────────────────────────────────────────────────────

function GradeTab({
  score,
  stars,
  message,
  takeaways,
  eyebrow,
}: {
  score?: { correct: number; total: number };
  stars?: 0 | 1 | 2 | 3;
  message?: string;
  takeaways?: string[];
  eyebrow?: string;
}) {
  const ratio = score && score.total > 0 ? score.correct / score.total : 0;
  const hasScore = score != null && score.total > 0;

  return (
    <div className="space-y-5">
      {hasScore && (
        <div className="space-y-3">
          {eyebrow && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted text-center">
              {eyebrow}
            </p>
          )}
          <div className="flex items-baseline justify-center gap-2">
            <CountUp
              value={score!.correct}
              className="text-4xl font-bold text-text-primary data-num"
            />
            <span className="text-base text-text-muted data-num">/ {score!.total}</span>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${ratio * 100}%` }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className={`h-full rounded-full ${
                  ratio >= 0.75 ? 'bg-green' : ratio >= 0.5 ? 'bg-amber' : 'bg-red'
                }`}
              />
            </div>
            <div className="mt-1.5 text-[10px] text-text-muted data-num text-center">
              {Math.round(ratio * 100)}% accuracy
            </div>
          </div>
          {stars != null && (
            <div className="flex items-center justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -25 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 14,
                    delay: 0.25 + i * 0.08,
                  }}
                >
                  <Star
                    className={`w-5 h-5 ${
                      i < stars ? 'text-warm fill-warm drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]' : 'text-dark-500'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          )}
          {message && (
            <p className="text-xs text-text-secondary text-center leading-relaxed max-w-md mx-auto">
              {message}
            </p>
          )}
        </div>
      )}

      {takeaways && takeaways.length > 0 && (
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
            <Lightbulb className="w-3 h-3 text-warm" />
            Key takeaways
          </div>
          <ul className="space-y-1.5">
            {takeaways.map((t, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed"
              >
                <span className="w-1 h-1 rounded-full bg-accent-light shrink-0 mt-1.5" />
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// XP tab
// ─────────────────────────────────────────────────────────────────

function XpTab({
  xpAwarded,
  xpBefore,
  xpAfter,
  levelBefore,
  levelAfter,
}: {
  xpAwarded: number;
  xpBefore: number;
  xpAfter: number;
  levelBefore: number;
  levelAfter: number;
}) {
  const before = getLevelInfo(xpBefore);
  const after = getLevelInfo(xpAfter);
  const crossed = levelAfter > levelBefore;
  const startPct = crossed ? 0 : before.progressPct * 100;
  const endPct = after.progressPct * 100;

  return (
    <div className="space-y-5">
      {/* Hero XP number */}
      <div className="text-center space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-light">
          XP Earned
        </p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold text-text-primary data-num">+</span>
          <CountUp
            value={xpAwarded}
            className="text-4xl font-bold text-text-primary data-num"
          />
        </div>
        <p className="text-[11px] text-text-muted data-num">
          {xpAfter.toLocaleString()} total
        </p>
      </div>

      {/* Level bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] text-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-md bg-dark-700 border border-border-light/40 flex items-center justify-center text-[10px] font-bold text-text-secondary data-num">
              {after.level}
            </span>
            <span className="text-text-secondary font-medium">{titleForLevel(after.level)}</span>
          </span>
          <span className="data-num">
            {after.xpIntoLevel}/{after.xpSpanOfLevel} XP
          </span>
        </div>
        <div className="relative h-2 rounded-full bg-dark-700 overflow-hidden">
          <motion.div
            initial={{ width: `${startPct}%` }}
            animate={{ width: `${endPct}%` }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
          />
          {/* Shimmer sweep */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
            className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm pointer-events-none"
          />
        </div>
        <p className="text-[10px] text-text-faint text-center data-num">
          {after.xpToNextLevel} to Lv {after.level + 1}
        </p>
      </div>

      {/* Level-up callout */}
      {crossed && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="relative rounded-xl border border-warm/30 bg-gradient-to-br from-warm/[0.1] to-transparent p-3.5 overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-10 h-10 rounded-xl bg-warm/15 border border-warm/35 flex items-center justify-center shrink-0"
            >
              <ChevronUp className="w-5 h-5 text-warm" strokeWidth={2.8} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-warm">
                  Level Up
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-warm/15 text-warm font-semibold data-num">
                  {levelBefore} → {levelAfter}
                </span>
              </div>
              <p className="text-sm font-semibold text-text-primary mt-0.5">
                You are now a {titleForLevel(levelAfter)}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Progress tab
// ─────────────────────────────────────────────────────────────────

function ProgressTab({
  streakBefore,
  streakAfter,
  skillDeltas,
  caption,
}: {
  streakBefore?: number;
  streakAfter?: number;
  skillDeltas?: SkillDeltaView[];
  caption?: string;
}) {
  const streakIncreased =
    streakBefore != null && streakAfter != null && streakAfter > streakBefore && streakAfter > 0;

  return (
    <div className="space-y-5">
      {caption && (
        <p className="text-xs text-text-secondary text-center leading-relaxed">{caption}</p>
      )}

      {streakIncreased && streakAfter != null && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="rounded-xl border border-warm/25 bg-gradient-to-r from-warm/[0.08] to-transparent p-3.5 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-warm drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-warm data-num">
                Day {streakAfter}
              </span>
              <span className="text-[10px] font-semibold text-warm/80 uppercase tracking-[0.14em]">
                streak
              </span>
            </div>
            <p className="text-[11px] text-text-secondary mt-0.5 leading-snug">
              {streakBefore === 0
                ? 'You started a learning streak. Come back tomorrow to keep it alive.'
                : `Up from ${streakBefore}. Keep the fire burning.`}
            </p>
          </div>
        </motion.div>
      )}

      {skillDeltas && skillDeltas.length > 0 && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
            <BarChart3 className="w-3 h-3 text-accent-light" />
            Skills leveled
          </div>
          <div className="space-y-2.5">
            {skillDeltas.map((d, i) => (
              <SkillRow key={d.skill} delta={d} index={i} />
            ))}
          </div>
        </div>
      )}

      {!streakIncreased && (!skillDeltas || skillDeltas.length === 0) && !caption && (
        <p className="text-xs text-text-muted text-center italic py-4">
          No progress milestones this round.
        </p>
      )}
    </div>
  );
}

function SkillRow({ delta, index }: { delta: SkillDeltaView; index: number }) {
  const beforePct = Math.min((delta.before / delta.maxExposure) * 100, 100);
  const afterPct = Math.min((delta.after / delta.maxExposure) * 100, 100);
  const gained = delta.after > delta.before;
  const mastered = delta.after >= delta.maxExposure;
  const baseDelay = 0.2 + index * 0.08;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-primary font-medium">{delta.label}</span>
        <div className="flex items-center gap-1.5 text-[10px] data-num">
          {gained && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: baseDelay + 0.4 }}
              className="font-bold text-accent-light"
            >
              +{delta.after - delta.before}
            </motion.span>
          )}
          <span className={mastered ? 'text-green font-semibold' : 'text-text-muted'}>
            {mastered ? 'Mastered' : `${delta.after}/${delta.maxExposure}`}
          </span>
        </div>
      </div>
      <div className="relative h-1.5 rounded-full bg-dark-700 overflow-hidden">
        <motion.div
          initial={{ width: `${beforePct}%` }}
          animate={{ width: `${afterPct}%` }}
          transition={{ duration: 0.7, delay: baseDelay, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-y-0 left-0 rounded-full ${
            mastered ? 'bg-green' : 'bg-gradient-to-r from-accent to-accent-light'
          }`}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Quests tab
// ─────────────────────────────────────────────────────────────────

function QuestsTab({
  newQuests,
  upcoming,
}: {
  newQuests: Quest[];
  upcoming: QuestStatus[];
}) {
  return (
    <div className="space-y-5">
      {newQuests.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-warm">
            <Trophy className="w-3 h-3" />
            Unlocked ({newQuests.length})
          </div>
          <div className="space-y-1.5">
            {newQuests.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-warm/25 bg-gradient-to-r from-warm/[0.08] to-transparent p-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-warm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1.5">
                      <p className="text-sm font-semibold text-text-primary truncate">
                        {q.title}
                      </p>
                      <span className="text-[10px] text-warm font-semibold data-num shrink-0">
                        +{q.xp} XP
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted truncate">{q.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {upcoming.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Up Next
          </div>
          <div className="space-y-1.5">
            {upcoming.slice(0, 3).map((q) => {
              const Icon = q.quest.icon;
              const pct = Math.round(q.progressPct * 100);
              const locked = q.progressPct === 0;
              return (
                <div
                  key={q.quest.id}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-dark-900/40 p-3"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      locked
                        ? 'bg-dark-800 border border-border'
                        : 'bg-accent/10 border border-accent/25'
                    }`}
                  >
                    {locked ? (
                      <Lock className="w-3.5 h-3.5 text-text-faint" />
                    ) : (
                      <Icon className="w-4 h-4 text-accent-light" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-[12px] font-semibold text-text-primary truncate">
                        {q.quest.title}
                      </p>
                      <span className="text-[10px] text-text-muted data-num shrink-0">
                        {q.current}/{q.target}
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-dark-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent/70"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {newQuests.length === 0 && upcoming.length === 0 && (
        <p className="text-xs text-text-muted text-center italic py-4">
          Keep going — every quest is within reach.
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CountUp — smooth animated numeric
// ─────────────────────────────────────────────────────────────────

function CountUp({
  value,
  className,
  duration = 0.9,
}: {
  value: number;
  className?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Respect reduced-motion — snap to final value.
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const durationMs = duration * 1000;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutExpo for sporty feel
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <span className={className}>{display}</span>;
}
