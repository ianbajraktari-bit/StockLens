import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Trophy,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Home,
  Sparkles,
  Clock,
  Star,
} from 'lucide-react';
import DrillStep from '../components/steps/DrillStep';
import EstimateStep from '../components/steps/EstimateStep';
import TapStep from '../components/steps/TapStep';
import DecideStep from '../components/steps/DecideStep';
import ThinkingStepComponent from '../components/steps/ThinkingStepComponent';
import { type Lesson, getLessonById } from '../data/lessons';
import { getNextLessonId } from '../lib/progression';

type Phase = 'intro' | 'running' | 'complete';

interface Props {
  lesson: Lesson;
  onBack: () => void;
  onComplete?: (lessonId: string) => void;
}

export default function LessonRunner({ lesson, onBack, onComplete }: Props) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('intro');
  const [stepIndex, setStepIndex] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(0);
  const [maxTotal, setMaxTotal] = useState(0);

  const steps = lesson.steps ?? [];
  const total = steps.length;
  const currentStep = steps[stepIndex];

  useEffect(() => {
    if (phase === 'complete') {
      onComplete?.(lesson.id);
    }
  }, [phase, lesson.id, onComplete]);

  function handleStepDone(score: { correct: number; total: number }) {
    setCorrectTotal((c) => c + score.correct);
    setMaxTotal((m) => m + score.total);
    if (stepIndex < total - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setPhase('complete');
    }
  }

  function handleRestart() {
    setStepIndex(0);
    setCorrectTotal(0);
    setMaxTotal(0);
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
    const ratio = maxTotal > 0 ? correctTotal / maxTotal : 0;
    const stars = ratio === 1 ? 3 : ratio >= 0.75 ? 2 : ratio >= 0.5 ? 1 : 0;

    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg space-y-6"
        >
          {/* Celebration */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center mx-auto"
            >
              <Trophy className="w-10 h-10 text-accent-light" />
            </motion.div>

            <div>
              <h1 className="text-2xl font-bold text-text-primary">Lesson Complete</h1>
              <p className="text-sm text-text-secondary mt-1">{lesson.title}</p>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.3 + i * 0.1 }}
                >
                  <Star
                    className={`w-7 h-7 ${
                      i < stars
                        ? 'text-warm fill-warm'
                        : 'text-dark-500'
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
                    ratio >= 0.75 ? 'bg-green' : ratio >= 0.5 ? 'bg-amber' : 'bg-red'
                  }`}
                />
              </div>
              <p className="text-xs text-text-secondary">{getCompletionMessage()}</p>
            </div>
          </div>

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
                  transition={{ delay: 0.5 + i * 0.08 }}
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

          {/* Actions */}
          <div className="flex flex-col gap-2">
            {(() => {
              const nextId = getNextLessonId(lesson.id);
              const nextLesson = nextId ? getLessonById(nextId) : undefined;
              if (nextLesson) {
                return (
                  <motion.button
                    onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Next: {nextLesson.title}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                );
              }
              return null;
            })()}
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
                Redo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
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
