import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import LessonPage from './pages/LessonPage';
import { allLessons, type Lesson } from './data/lessons';

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  if (selectedLesson) {
    return (
      <LessonPage
        key={selectedLesson.id}
        lesson={selectedLesson}
        onBack={() => setSelectedLesson(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
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
            Learn to analyze stocks like a real investor. Pick a lesson to start.
          </p>
        </motion.div>

        {/* Lesson cards */}
        <div className="space-y-4">
          {allLessons.map((lesson, i) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-dark-800 p-6 space-y-4"
            >
              {/* Title row */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg">
                  {lesson.emoji}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-text-primary">{lesson.title}</h2>
                  <p className="text-sm text-text-secondary">{lesson.subtitle}</p>
                </div>
              </div>

              {/* Topics preview */}
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

              {/* Meta + start */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">
                  {lesson.questions.length} questions · ~{lesson.estimatedMinutes} min
                </span>
                <motion.button
                  onClick={() => setSelectedLesson(lesson)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Start
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
