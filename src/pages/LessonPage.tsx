import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Trophy, RotateCcw } from 'lucide-react';
import QuestionBlock from '../components/QuestionBlock';
import FeedbackBlock from '../components/FeedbackBlock';
import { appleQuestions } from '../data/questions';

type Phase = 'answering' | 'feedback' | 'complete';

export default function LessonPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>('answering');
  const [score, setScore] = useState(0);

  const total = appleQuestions.length;
  const question = appleQuestions[currentQ];

  function handleSelect(index: number) {
    if (phase !== 'answering') return;
    setSelectedIndex(index);
  }

  function handleSubmit() {
    if (selectedIndex === null) return;
    if (selectedIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
    setPhase('feedback');
  }

  function handleContinue() {
    if (currentQ < total - 1) {
      setCurrentQ((q) => q + 1);
      setSelectedIndex(null);
      setPhase('answering');
    } else {
      setPhase('complete');
    }
  }

  function handleRestart() {
    setCurrentQ(0);
    setSelectedIndex(null);
    setPhase('answering');
    setScore(0);
  }

  if (phase === 'complete') {
    const perfect = score === total;
    const message = perfect
      ? "Flawless. You've got a strong grasp of the fundamentals."
      : score >= 2
        ? "Solid work. You're building real investing intuition."
        : "Good start — revisiting the lesson will strengthen your foundation.";

    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8 text-accent-light" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary">Lesson Complete</h1>
          <div className="rounded-2xl border border-border bg-dark-800 p-6 space-y-3">
            <p className="text-4xl font-bold text-accent-light">{score} / {total}</p>
            <p className="text-sm text-text-secondary">{message}</p>
          </div>
          <motion.button
            onClick={handleRestart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Restart Lesson
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-accent-light" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary">Apple Lesson</h1>
            <p className="text-xs text-text-muted">Learn the fundamentals of stock analysis</p>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-text-muted">
            <span>Question {currentQ + 1} of {total}</span>
            <span>{score} correct so far</span>
          </div>
          <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={false}
              animate={{ width: `${((currentQ + (phase === 'feedback' ? 1 : 0)) / total) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-dark-800 p-6 space-y-6"
          >
            <QuestionBlock
              question={question}
              selectedIndex={selectedIndex}
              locked={phase === 'feedback'}
              onSelect={handleSelect}
            />

            {/* Submit button (before answering) */}
            {phase === 'answering' && (
              <motion.button
                onClick={handleSubmit}
                disabled={selectedIndex === null}
                whileHover={selectedIndex !== null ? { scale: 1.01 } : {}}
                whileTap={selectedIndex !== null ? { scale: 0.98 } : {}}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  selectedIndex !== null
                    ? 'bg-accent hover:bg-accent-light text-white cursor-pointer'
                    : 'bg-dark-600 text-text-muted cursor-not-allowed'
                }`}
              >
                Submit Answer
              </motion.button>
            )}

            {/* Feedback */}
            {phase === 'feedback' && selectedIndex !== null && (
              <FeedbackBlock
                question={question}
                selectedIndex={selectedIndex}
                onContinue={handleContinue}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
