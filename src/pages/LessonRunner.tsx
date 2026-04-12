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
      <div className="min-h-screen bg-dark-900">
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

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg">
                {lesson.emoji}
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">{lesson.title}</h1>
                <p className="text-sm text-text-secondary">{lesson.subtitle}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-dark-800 p-6 space-y-5">
              <p className="text-sm text-text-secondary leading-relaxed">{lesson.description}</p>

              {lesson.keyFacts.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-text-muted font-semibold uppercase tracking-wide">
                    Key facts
                    <span className="ml-1.5 font-normal normal-case tracking-normal">
                      ({lesson.dataAsOf})
                    </span>
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {lesson.keyFacts.map((fact, i) => (
                      <div key={i} className="rounded-lg border border-border bg-dark-900/50 p-3">
                        <p className="text-xs text-text-muted mb-0.5">{fact.label}</p>
                        <p className="text-base font-bold text-text-primary">{fact.value}</p>
                        <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                          {fact.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <p className="text-xs text-text-muted font-semibold uppercase tracking-wide">
                  What you'll learn
                </p>
                {lesson.topics.map((topic, i) => {
                  const Icon = topic.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-dark-700 border border-border flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-accent-light" />
                      </div>
                      <span className="text-sm text-text-primary">{topic.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-xs text-text-muted">
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  {total} interactive beats · ~{lesson.estimatedMinutes} minutes
                </span>
              </div>
            </div>

            <motion.button
              onClick={() => setPhase('running')}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
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
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg space-y-6"
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8 text-accent-light" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary">Lesson Complete</h1>
            <div className="rounded-2xl border border-border bg-dark-800 p-6 space-y-3">
              <p className="text-4xl font-bold text-accent-light tabular-nums">
                {correctTotal}
                <span className="text-text-muted">/{maxTotal}</span>
              </p>
              <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ratio * 100}%` }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`h-full rounded-full ${ratio >= 0.75 ? 'bg-green' : ratio >= 0.5 ? 'bg-amber' : 'bg-red'}`}
                />
              </div>
              <p className="text-sm text-text-secondary">{getCompletionMessage()}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-dark-800 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-accent-light" />
              <p className="text-sm font-semibold text-text-primary">What you learned</p>
            </div>
            <div className="space-y-3">
              {lesson.takeaways.map((takeaway, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent-light shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {(() => {
              const nextId = getNextLessonId(lesson.id);
              const nextLesson = nextId ? getLessonById(nextId) : undefined;
              if (nextLesson) {
                return (
                  <motion.button
                    onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer"
                  >
                    Next Lesson
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                );
              }
              return null;
            })()}
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-dark-800 hover:bg-dark-700 text-text-secondary font-semibold transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-dark-800 hover:bg-dark-700 text-text-muted font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Redo
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────
  // Running a step
  // ─────────────────────────────────────────────────────────────────────
  const progressPct = total > 0 ? (stepIndex / total) * 100 : 0;

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-dark-800 border border-border flex items-center justify-center hover:bg-dark-700 transition-colors cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-text-secondary" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-text-primary truncate">{lesson.title}</h1>
            <p className="text-xs text-text-muted truncate">{lesson.subtitle}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-text-muted">
            <span>
              Beat {stepIndex + 1} of {total}
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent-light" />
              {correctTotal} correct
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={false}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.3 }}
            />
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
