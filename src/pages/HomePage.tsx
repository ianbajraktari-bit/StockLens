import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Building2,
  CheckCircle2,
  Lock,
  BarChart3,
} from 'lucide-react';
import { allLessons, type Lesson } from '../data/lessons';
import {
  getCompletedIds,
  isLessonUnlocked,
  getFirstUncompletedId,
  getSkillsProgress,
} from '../lib/progression';

const foundationLessons = allLessons.filter(
  (l) => l.tier === 'foundations-1' || l.tier === 'foundations-2'
);
const companyLessons = allLessons.filter((l) => l.tier === 'company');

export default function HomePage() {
  const navigate = useNavigate();
  const completedIds = getCompletedIds();
  const nextId = getFirstUncompletedId();
  const skillsProgress = getSkillsProgress();
  const hasAnyProgress = skillsProgress.some((s) => s.exposure > 0);

  function handleStart() {
    const target = nextId ?? allLessons[0].id;
    navigate(`/lesson/${target}`);
  }

  function renderLessonCard(lesson: Lesson, delay: number) {
    const completed = completedIds.has(lesson.id);
    const unlocked = isLessonUnlocked(lesson.id);
    const isNext = lesson.id === nextId;

    return (
      <motion.button
        key={lesson.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        onClick={() => unlocked && navigate(`/lesson/${lesson.id}`)}
        disabled={!unlocked}
        className={`w-full text-left rounded-2xl border p-5 space-y-3 transition-colors ${
          !unlocked
            ? 'border-border bg-dark-800/40 opacity-50 cursor-not-allowed'
            : isNext
              ? 'border-accent/40 bg-dark-800 cursor-pointer hover:border-accent/60'
              : completed
                ? 'border-border bg-dark-800/60 cursor-pointer hover:border-dark-400'
                : 'border-border bg-dark-800 cursor-pointer hover:border-dark-400'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${
              !unlocked
                ? 'bg-dark-700'
                : completed
                  ? 'bg-green/15'
                  : 'bg-accent/20'
            }`}
          >
            {!unlocked ? (
              <Lock className="w-4 h-4 text-text-muted" />
            ) : completed ? (
              <CheckCircle2 className="w-5 h-5 text-green" />
            ) : (
              lesson.emoji
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3
                className={`text-base font-semibold truncate ${
                  !unlocked
                    ? 'text-text-muted'
                    : completed
                      ? 'text-text-secondary'
                      : 'text-text-primary'
                }`}
              >
                {lesson.title}
              </h3>
              {completed && (
                <span className="text-xs text-green font-medium shrink-0">Done</span>
              )}
              {isNext && !completed && (
                <span className="text-xs text-accent-light font-medium shrink-0">
                  Up next
                </span>
              )}
            </div>
            <p
              className={`text-sm mt-0.5 ${
                !unlocked ? 'text-text-muted' : 'text-text-secondary'
              }`}
            >
              {lesson.subtitle}
            </p>
          </div>
          {unlocked && (
            <ArrowRight
              className={`w-4 h-4 shrink-0 ${
                completed ? 'text-text-muted' : 'text-text-secondary'
              }`}
            />
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span>
            {lesson.steps.length} beats
          </span>
          <span>~{lesson.estimatedMinutes} min</span>
          {lesson.dataAsOf && <span>{lesson.dataAsOf}</span>}
        </div>
      </motion.button>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent-light" />
            </div>
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">
              StockLens
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-text-primary font-semibold">
              Learn to think like an investor
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Build real investing intuition through interactive lessons. Start with
              the fundamentals, then apply what you learn to analyze real companies.
            </p>
          </div>
          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer"
          >
            {hasAnyProgress ? 'Continue Learning' : 'Start Learning'}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Skills Progress */}
        {hasAnyProgress && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent-light" />
              <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                Skills Progress
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-dark-800 p-5">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {skillsProgress.map((s) => (
                  <div key={s.skill} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">{s.label}</span>
                      <span className="text-xs text-text-muted">
                        {s.exposure}/{s.maxExposure}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          s.exposure >= s.maxExposure ? 'bg-green' : 'bg-accent'
                        }`}
                        style={{
                          width: `${Math.min((s.exposure / s.maxExposure) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Foundations */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="space-y-1"
          >
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-accent-light" />
              <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                Foundations
              </h2>
            </div>
            <p className="text-xs text-text-muted">
              Build core intuitions before analyzing any stock.
            </p>
          </motion.div>

          <div className="space-y-2">
            {foundationLessons.map((lesson, i) =>
              renderLessonCard(lesson, 0.15 + i * 0.06)
            )}
          </div>
        </div>

        {/* Company Deep Dives */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.35 }}
            className="space-y-1"
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent-light" />
              <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                Company Deep Dives
              </h2>
            </div>
            <p className="text-xs text-text-muted">
              Apply what you learned to analyze real companies.
              {!companyLessons.some((l) => isLessonUnlocked(l.id)) && (
                <span> Complete all foundations to unlock.</span>
              )}
            </p>
          </motion.div>

          <div className="space-y-2">
            {companyLessons.map((lesson, i) =>
              renderLessonCard(lesson, 0.4 + i * 0.06)
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-text-muted">
            StockLens — A learning tool, not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
