import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Lightbulb, Building2, CheckCircle2 } from 'lucide-react';
import LessonPage from './pages/LessonPage';
import { allLessons, type Lesson } from './data/lessons';

const STORAGE_KEY = 'stocklens-completed';

function getCompletedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

function markCompleted(id: string): void {
  const ids = getCompletedIds();
  ids.add(id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

const foundationLessons = allLessons.filter((l) => l.id.startsWith('foundations-'));
const companyLessons = allLessons.filter((l) => !l.id.startsWith('foundations-'));

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedIds, setCompletedIds] = useState<Set<string>>(getCompletedIds);

  const handleComplete = useCallback((lessonId: string) => {
    markCompleted(lessonId);
    setCompletedIds(getCompletedIds());
  }, []);

  if (selectedLesson) {
    return (
      <LessonPage
        key={selectedLesson.id}
        lesson={selectedLesson}
        onBack={() => setSelectedLesson(null)}
        onComplete={handleComplete}
      />
    );
  }

  // Find the first uncompleted lesson in order
  const nextLessonId = allLessons.find((l) => !completedIds.has(l.id))?.id ?? null;

  function renderLessonCard(lesson: Lesson, animDelay: number) {
    const isCompleted = completedIds.has(lesson.id);
    const isNext = lesson.id === nextLessonId;

    return (
      <motion.div
        key={lesson.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: animDelay }}
        className={`rounded-2xl border p-6 space-y-4 ${
          isNext
            ? 'border-accent/40 bg-dark-800'
            : isCompleted
              ? 'border-border bg-dark-800/60'
              : 'border-border bg-dark-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
            isCompleted ? 'bg-green/15' : 'bg-accent/20'
          }`}>
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-green" />
            ) : (
              lesson.emoji
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className={`text-lg font-bold ${isCompleted ? 'text-text-secondary' : 'text-text-primary'}`}>
                {lesson.title}
              </h2>
              {isCompleted && (
                <span className="text-xs text-green font-medium">Completed</span>
              )}
              {isNext && !isCompleted && (
                <span className="text-xs text-accent-light font-medium">Up next</span>
              )}
            </div>
            <p className={`text-sm ${isCompleted ? 'text-text-muted' : 'text-text-secondary'}`}>
              {lesson.subtitle}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {lesson.topics.slice(0, 3).map((topic, j) => {
            const Icon = topic.icon;
            return (
              <div key={j} className="flex items-center gap-2.5">
                <Icon className="w-3.5 h-3.5 text-text-muted" />
                <span className="text-xs text-text-secondary">{topic.label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">
            {lesson.questions.length} questions · ~{lesson.estimatedMinutes} min
          </span>
          <motion.button
            onClick={() => setSelectedLesson(lesson)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              isCompleted
                ? 'bg-dark-700 hover:bg-dark-600 text-text-secondary border border-border'
                : 'bg-accent hover:bg-accent-light text-white'
            }`}
          >
            {isCompleted ? 'Redo' : 'Start'}
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-accent-light" />
            <h1 className="text-2xl font-bold text-text-primary">StockLens</h1>
          </div>
          <p className="text-sm text-text-secondary">
            Learn to analyze stocks like a real investor. Start with the foundations, then apply what you learn to real companies.
          </p>
        </motion.div>

        {/* Foundations section */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="space-y-1"
          >
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-accent-light" />
              <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wide">Start Here — Foundations</h2>
            </div>
            <p className="text-xs text-text-muted">
              Build the core intuitions you need before analyzing any stock. No jargon — just common sense.
            </p>
          </motion.div>

          {foundationLessons.map((lesson, i) =>
            renderLessonCard(lesson, 0.1 + i * 0.08)
          )}
        </div>

        {/* Company lessons section */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="space-y-1"
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent-light" />
              <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wide">Apply It — Company Lessons</h2>
            </div>
            <p className="text-xs text-text-muted">
              Use what you learned in the foundations to analyze real companies like an investor.
            </p>
          </motion.div>

          {companyLessons.map((lesson, i) =>
            renderLessonCard(lesson, 0.35 + i * 0.08)
          )}
        </div>
      </div>
    </div>
  );
}
