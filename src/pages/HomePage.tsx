import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { allLessons, type Lesson } from '../data/lessons';
import {
  getCompletedIds,
  getFirstUncompletedId,
  getSkillsProgress,
  getLessonStars,
  getStreak,
} from '../lib/progression';

const foundationsPhase1 = allLessons.filter((l) => l.tier === 'foundations-1');
const foundationsPhase2 = allLessons.filter((l) => l.tier === 'foundations-2');
const foundationLessons = [...foundationsPhase1, ...foundationsPhase2];
const companyLessons = allLessons.filter((l) => l.tier === 'company');

export default function HomePage() {
  const navigate = useNavigate();
  const completedIds = getCompletedIds();
  const nextId = getFirstUncompletedId();
  const skillsProgress = getSkillsProgress();
  const hasAnyProgress = skillsProgress.some((s) => s.exposure > 0);
  const streak = getStreak();
  const completedCount = completedIds.size;
  const totalCount = allLessons.length;
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  function handleStart() {
    const target = nextId ?? allLessons[0].id;
    navigate(`/lesson/${target}`);
  }

  function renderLessonCard(lesson: Lesson, index: number, sectionDelay: number, tierBorderColor: string) {
    const completed = completedIds.has(lesson.id);
    const isNext = lesson.id === nextId;
    const stars = completed ? getLessonStars(lesson.id) : null;

    return (
      <motion.button
        key={lesson.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: sectionDelay + index * 0.04 }}
        onClick={() => navigate(`/lesson/${lesson.id}`)}
        className={`group w-full text-left rounded-xl border p-4 transition-all duration-200 cursor-pointer border-l-[3px] ${tierBorderColor} ${
          isNext && !completed
            ? 'border-accent/40 bg-dark-800 hover:border-accent/60 shadow-[0_0_20px_rgba(99,102,241,0.06)]'
            : completed
              ? 'border-border bg-dark-800/50 hover:bg-dark-800/80 hover:border-border-light'
              : 'border-border bg-dark-800/70 hover:bg-dark-800 hover:border-border-light'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
              completed
                ? 'bg-green/10 border border-green/20'
                : isNext
                  ? 'bg-accent/15 border border-accent/25'
                  : 'bg-dark-700 border border-border'
            }`}
          >
            {completed ? (
              <CheckCircle2 className="w-5 h-5 text-green" />
            ) : (
              lesson.emoji
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
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent-light font-semibold shrink-0">
                  Up next
                </span>
              )}
            </div>
            <p className={`text-xs mt-0.5 ${completed ? 'text-text-muted' : 'text-text-secondary'}`}>
              {lesson.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {completed && stars !== null ? (
              <div className="flex items-center gap-0.5">
                {[0, 1, 2].map((i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < stars ? 'text-warm fill-warm' : 'text-dark-500'
                    }`}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-1 text-[10px] text-text-muted">
                <Clock className="w-3 h-3" />
                {lesson.estimatedMinutes}m
              </div>
            )}
            <ArrowRight
              className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                completed ? 'text-text-muted' : 'text-text-secondary'
              }`}
            />
          </div>
        </div>
      </motion.button>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Gradient background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent-light" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary tracking-tight">
                  StockLens
                </h1>
                <p className="text-xs text-text-muted">Learn to think like an investor</p>
              </div>
            </div>

            {/* Overall progress ring */}
            {hasAnyProgress && (
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18" cy="18" r="15" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      className="text-dark-700"
                    />
                    <circle
                      cx="18" cy="18" r="15" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeDasharray={`${progressPct * 0.942} 100`}
                      strokeLinecap="round"
                      className="text-accent-light"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-text-primary">
                    {progressPct}%
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Stats bar or hero for new users */}
          {hasAnyProgress ? (
            <div className="flex items-center gap-4 flex-wrap">
              {streak.current > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-1.5 text-xs"
                >
                  <Flame className="w-3.5 h-3.5 text-warm" />
                  <span className="text-warm font-semibold">{streak.current} day streak</span>
                </motion.div>
              )}
              <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                <span>{completedCount} of {totalCount} lessons</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                <BookOpen className="w-3.5 h-3.5 text-accent-light" />
                <span>{foundationLessons.filter(l => completedIds.has(l.id)).length} foundations</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                <Building2 className="w-3.5 h-3.5 text-warm" />
                <span>{companyLessons.filter(l => completedIds.has(l.id)).length} companies</span>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <p className="text-sm text-text-secondary leading-relaxed">
                Interactive lessons that teach you to analyze businesses and make investment
                decisions. Not memorization — real reasoning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { icon: Brain, label: 'Think, don\'t memorize', color: 'text-accent-light', bg: 'bg-accent/10 border-accent/20' },
                  { icon: Target, label: 'Real companies, real data', color: 'text-warm', bg: 'bg-warm/10 border-warm/20' },
                  { icon: Zap, label: '5 interactive formats', color: 'text-green', bg: 'bg-green/10 border-green/20' },
                ].map(({ icon: Icon, label, color, bg }) => (
                  <div key={label} className={`rounded-xl border p-3 ${bg} flex flex-col items-center gap-2 text-center`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className="text-[11px] text-text-secondary leading-tight font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Skills Progress — compact */}
        {hasAnyProgress && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-xl border border-border bg-dark-800/60 p-4 space-y-3"
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-accent-light" />
              <h2 className="text-xs font-semibold text-text-secondary">
                Skills Progress
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {skillsProgress.map((s) => {
                const pct = Math.min((s.exposure / s.maxExposure) * 100, 100);
                const complete = s.exposure >= s.maxExposure;
                return (
                  <div key={s.skill} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">{s.label}</span>
                      <span className={`text-[10px] font-medium ${complete ? 'text-green' : 'text-text-muted'}`}>
                        {complete ? 'Mastered' : `${s.exposure}/${s.maxExposure}`}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-dark-600 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          complete ? 'bg-green' : 'bg-accent/80'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Continue button for returning users */}
        {hasAnyProgress && nextId && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <button
              onClick={handleStart}
              className="w-full flex items-center gap-3 p-4 rounded-xl border border-accent/30 bg-accent/[0.06] hover:bg-accent/[0.1] transition-colors cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-accent-light" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary">Continue Learning</p>
                <p className="text-xs text-text-secondary truncate">
                  {allLessons.find(l => l.id === nextId)?.title}
                </p>
              </div>
            </button>
          </motion.div>
        )}

        {/* Foundations Phase 1 */}
        <section className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber" />
              <h2 className="text-sm font-semibold text-text-primary">
                Foundations
              </h2>
              <span className="text-[10px] text-text-muted">
                {foundationLessons.filter(l => completedIds.has(l.id)).length}/{foundationLessons.length}
              </span>
            </div>
          </motion.div>

          <div className="space-y-1.5">
            <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider px-1">
              Core Financial Vocabulary
            </p>
            {foundationsPhase1.map((lesson, i) =>
              renderLessonCard(lesson, i, 0.15, 'border-l-amber/30')
            )}
          </div>

          <div className="space-y-1.5 pt-2">
            <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider px-1">
              Investing Concepts
            </p>
            {foundationsPhase2.map((lesson, i) =>
              renderLessonCard(lesson, i, 0.25, 'border-l-accent/30')
            )}
          </div>
        </section>

        {/* Company Deep Dives */}
        <section className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-warm" />
              <h2 className="text-sm font-semibold text-text-primary">
                Company Deep Dives
              </h2>
              <span className="text-[10px] text-text-muted">
                {companyLessons.filter(l => completedIds.has(l.id)).length}/{companyLessons.length}
              </span>
            </div>
          </motion.div>

          <div className="space-y-1.5">
            {companyLessons.map((lesson, i) =>
              renderLessonCard(lesson, i, 0.35, 'border-l-warm/30')
            )}
          </div>
        </section>

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
