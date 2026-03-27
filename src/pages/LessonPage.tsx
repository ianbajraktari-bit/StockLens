import { useState, useCallback, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { allModules } from '../data/modules';
import type { Lesson, Question, EvaluationResult } from '../data/lessonTypes';
import LessonShell from '../components/lesson/LessonShell';
import MultipleChoiceInput from '../components/lesson/MultipleChoiceInput';
import RankingInput from '../components/lesson/RankingInput';
import BullBearClassifyInput from '../components/lesson/BullBearClassifyInput';
import FreeResponseInput from '../components/lesson/FreeResponseInput';
import ScenarioChoiceInput from '../components/lesson/ScenarioChoiceInput';
import FeedbackCard from '../components/lesson/FeedbackCard';

// ── Per-lesson state ──────────────────────────────────────────────────
interface LessonState {
  answer: string | string[] | Record<string, string>;
  submitted: boolean;
  evaluation: EvaluationResult | null;
  revealed: boolean; // for deterministic Qs — show correct answer
}

function emptyState(question: Question): LessonState {
  if (question.type === 'ranking') {
    return { answer: question.items.map((i) => i.id), submitted: false, evaluation: null, revealed: false };
  }
  if (question.type === 'bull-bear-classify') {
    const init: Record<string, string> = {};
    return { answer: init, submitted: false, evaluation: null, revealed: false };
  }
  return { answer: '', submitted: false, evaluation: null, revealed: false };
}

// ── Storage helpers ───────────────────────────────────────────────────
const STORAGE_KEY = 'stocklens_lessons';

function loadLessonProgress(): Record<string, Record<string, LessonState>> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return {};
}

function saveLessonProgress(data: Record<string, Record<string, LessonState>>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* ignore */ }
}

// ── Evaluate helper ───────────────────────────────────────────────────
async function evaluateAnswer(
  question: Question,
  answer: string | string[] | Record<string, string>,
): Promise<EvaluationResult> {
  const body: Record<string, unknown> = { questionType: question.type, answer };

  if (question.type === 'free-response') {
    body.rubric = question.rubric;
  } else if (question.type === 'multiple-choice') {
    body.correctAnswer = question.correctId;
    body.explanation = question.explanation;
  } else if (question.type === 'select-best') {
    body.correctAnswer = question.bestId;
    body.explanation = question.explanation;
  } else if (question.type === 'scenario-choice') {
    body.correctAnswer = question.bestId;
    body.explanation = question.explanation;
  } else if (question.type === 'ranking') {
    body.correctAnswer = question.correctOrder;
    body.explanation = question.explanation;
  } else if (question.type === 'bull-bear-classify') {
    // For bull-bear, we score each statement
    const classifications = answer as Record<string, string>;
    const correct = question.correctClassification;
    let right = 0;
    const total = question.statements.length;
    for (const s of question.statements) {
      if (classifications[s.id] === correct[s.id]) right++;
    }
    const score = Math.round((right / total) * 10);
    return {
      score,
      maxScore: 10,
      gotRight: right > 0 ? `You correctly classified ${right} out of ${total} statements.` : '',
      missing: right < total ? `${total - right} statement(s) were classified incorrectly.` : '',
      strongerFraming: question.explanation,
      followUp: undefined,
    };
  }

  try {
    const res = await fetch('/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error('Eval failed');
    return await res.json();
  } catch {
    // Fallback: basic client-side evaluation
    return {
      score: 5,
      maxScore: 10,
      gotRight: 'Answer submitted.',
      missing: 'Could not reach evaluation server.',
      strongerFraming: '',
    };
  }
}

// ── Main component ────────────────────────────────────────────────────
export default function LessonPage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const mod = moduleId ? allModules[moduleId] : undefined;

  // All lesson states for this module
  const [lessonStates, setLessonStates] = useState<Record<string, LessonState>>(() => {
    if (!mod) return {};
    const saved = loadLessonProgress()[mod.id];
    if (saved) return saved;
    const init: Record<string, LessonState> = {};
    for (const lesson of mod.lessons) {
      init[lesson.id] = emptyState(lesson.question);
    }
    return init;
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (!mod) return 0;
    // Resume at first incomplete lesson
    const saved = loadLessonProgress()[mod.id];
    if (!saved) return 0;
    const idx = mod.lessons.findIndex((l) => !saved[l.id]?.submitted);
    return idx === -1 ? mod.lessons.length - 1 : idx;
  });

  const [evaluating, setEvaluating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Persist on change
  useEffect(() => {
    if (!mod) return;
    const all = loadLessonProgress();
    all[mod.id] = lessonStates;
    saveLessonProgress(all);
  }, [lessonStates, mod]);

  // Scroll to top on lesson change
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const updateAnswer = useCallback(
    (lessonId: string, answer: string | string[] | Record<string, string>) => {
      setLessonStates((prev) => ({
        ...prev,
        [lessonId]: { ...prev[lessonId], answer },
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (lesson: Lesson) => {
      const state = lessonStates[lesson.id];
      if (!state || state.submitted) return;

      setEvaluating(true);
      try {
        const evaluation = await evaluateAnswer(lesson.question, state.answer);
        setLessonStates((prev) => ({
          ...prev,
          [lesson.id]: { ...prev[lesson.id], submitted: true, evaluation, revealed: true },
        }));
      } finally {
        setEvaluating(false);
      }
    },
    [lessonStates],
  );

  if (!mod) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-muted mb-4">Module not found.</p>
          <Link to="/" className="text-accent-light hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  const lessons = mod.lessons;
  const lesson = lessons[currentIndex];
  const state = lessonStates[lesson.id] ?? emptyState(lesson.question);
  const completedCount = lessons.filter((l) => lessonStates[l.id]?.submitted).length;

  // Can submit?
  const canSubmit = (() => {
    if (state.submitted || evaluating) return false;
    const q = lesson.question;
    if (q.type === 'multiple-choice' || q.type === 'select-best' || q.type === 'scenario-choice') {
      return typeof state.answer === 'string' && state.answer !== '';
    }
    if (q.type === 'free-response') {
      return typeof state.answer === 'string' && state.answer.trim().length >= 20;
    }
    if (q.type === 'ranking') {
      return Array.isArray(state.answer) && state.answer.length > 0;
    }
    if (q.type === 'bull-bear-classify') {
      const classifications = state.answer as Record<string, string>;
      return q.statements.every((s) => classifications[s.id] != null);
    }
    return false;
  })();

  // ── Render question input ──────────────────────────────────────────
  function renderQuestionInput(q: Question) {
    switch (q.type) {
      case 'multiple-choice':
        return (
          <>
            <p className="text-sm font-medium text-text-primary mb-4">{q.prompt}</p>
            <MultipleChoiceInput
              options={q.options}
              selected={typeof state.answer === 'string' ? state.answer : null}
              correctId={state.revealed ? q.correctId : undefined}
              disabled={state.submitted}
              onSelect={(id) => updateAnswer(lesson.id, id)}
            />
          </>
        );
      case 'select-best':
        return (
          <>
            <p className="text-sm font-medium text-text-primary mb-4">{q.prompt}</p>
            <MultipleChoiceInput
              options={q.options}
              selected={typeof state.answer === 'string' ? state.answer : null}
              correctId={state.revealed ? q.bestId : undefined}
              disabled={state.submitted}
              onSelect={(id) => updateAnswer(lesson.id, id)}
            />
          </>
        );
      case 'scenario-choice':
        return (
          <>
            <p className="text-sm font-medium text-text-primary mb-4">{q.prompt}</p>
            <ScenarioChoiceInput
              scenarios={q.scenarios}
              selected={typeof state.answer === 'string' ? state.answer : null}
              bestId={state.revealed ? q.bestId : undefined}
              disabled={state.submitted}
              onSelect={(id) => updateAnswer(lesson.id, id)}
            />
          </>
        );
      case 'free-response':
        return (
          <>
            <p className="text-sm font-medium text-text-primary mb-4">{q.prompt}</p>
            <FreeResponseInput
              value={typeof state.answer === 'string' ? state.answer : ''}
              hint={q.hint}
              disabled={state.submitted}
              minLength={20}
              onChange={(v) => updateAnswer(lesson.id, v)}
            />
          </>
        );
      case 'ranking':
        return (
          <>
            <p className="text-sm font-medium text-text-primary mb-4">{q.prompt}</p>
            <RankingInput
              items={q.items}
              order={Array.isArray(state.answer) ? state.answer as string[] : q.items.map((i) => i.id)}
              correctOrder={state.revealed ? q.correctOrder : undefined}
              disabled={state.submitted}
              onReorder={(newOrder) => updateAnswer(lesson.id, newOrder)}
            />
          </>
        );
      case 'bull-bear-classify':
        return (
          <>
            <p className="text-sm font-medium text-text-primary mb-4">{q.prompt}</p>
            <BullBearClassifyInput
              statements={q.statements}
              classifications={
                (typeof state.answer === 'object' && !Array.isArray(state.answer))
                  ? state.answer as Record<string, 'bull' | 'bear' | 'neutral' | null>
                  : {}
              }
              correctClassification={state.revealed ? q.correctClassification : undefined}
              disabled={state.submitted}
              onClassify={(id, value) => {
                const prev = (typeof state.answer === 'object' && !Array.isArray(state.answer))
                  ? state.answer as Record<string, string>
                  : {};
                updateAnswer(lesson.id, { ...prev, [id]: value });
              }}
            />
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen pt-16" ref={contentRef}>
      {/* Top navigation bar */}
      <div className="sticky top-16 z-30 border-b border-border bg-dark-900/95 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{mod.name}</span>
          </button>

          {/* Lesson dots */}
          <div className="flex items-center gap-1.5">
            {lessons.map((l, i) => {
              const ls = lessonStates[l.id];
              const isCompleted = ls?.submitted;
              const isCurrent = i === currentIndex;
              const isLocked = i > 0 && !lessonStates[lessons[i - 1].id]?.submitted;

              return (
                <button
                  key={l.id}
                  disabled={isLocked}
                  onClick={() => !isLocked && setCurrentIndex(i)}
                  title={l.title}
                  className={`
                    w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold
                    transition-all duration-200
                    ${isLocked ? 'bg-dark-700 text-dark-500 cursor-not-allowed' : 'cursor-pointer'}
                    ${isCurrent && !isCompleted ? 'bg-accent text-white ring-2 ring-accent/30' : ''}
                    ${isCompleted ? 'bg-green/15 text-green' : ''}
                    ${!isCurrent && !isCompleted && !isLocked ? 'bg-dark-700 text-text-muted hover:bg-dark-600' : ''}
                  `}
                >
                  {isLocked ? (
                    <Lock className="w-3 h-3" />
                  ) : isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    i + 1
                  )}
                </button>
              );
            })}
          </div>

          {/* Score */}
          <span className="text-xs text-text-muted">
            {completedCount}/{lessons.length}
          </span>
        </div>
      </div>

      {/* Lesson content */}
      <div className="px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <LessonShell
              lessonNumber={currentIndex + 1}
              totalLessons={lessons.length}
              title={lesson.title}
              objective={lesson.objective}
              whyItMatters={lesson.whyItMatters}
              context={lesson.context}
              evidence={lesson.evidence}
              isComplete={state.submitted}
              canSubmit={canSubmit}
              onSubmit={() => handleSubmit(lesson)}
              submitLabel={evaluating ? 'Evaluating...' : 'Submit Answer'}
              feedback={
                state.evaluation ? (
                  <FeedbackCard
                    evaluation={state.evaluation}
                    questionType={lesson.question.type}
                  />
                ) : undefined
              }
            >
              {renderQuestionInput(lesson.question)}
            </LessonShell>

            {/* Navigation after submission */}
            {state.submitted && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="max-w-2xl mx-auto mt-6 flex justify-between items-center"
              >
                {currentIndex > 0 && (
                  <button
                    onClick={() => setCurrentIndex((i) => i - 1)}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>
                )}
                <div className="flex-1" />
                {currentIndex < lessons.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex((i) => i + 1)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-light transition-colors cursor-pointer"
                  >
                    Next Lesson
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green/15 text-green text-sm font-semibold hover:bg-green/25 transition-colors no-underline"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Module Complete
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
