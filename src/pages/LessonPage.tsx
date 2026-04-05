import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Trophy, RotateCcw, ArrowRight, ArrowLeft, Lightbulb, PenLine, CheckCircle2 } from 'lucide-react';
import QuestionBlock from '../components/QuestionBlock';
import FeedbackBlock from '../components/FeedbackBlock';
import type { Lesson } from '../data/lessons';

type Phase = 'intro' | 'answering' | 'feedback' | 'thinking' | 'thinking-revealed' | 'complete';

interface LessonPageProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete?: (lessonId: string) => void;
}

export default function LessonPage({ lesson, onBack, onComplete }: LessonPageProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>('intro');
  const [score, setScore] = useState(0);
  const [thinkingText, setThinkingText] = useState('');
  const [gutDone, setGutDone] = useState(false);
  const [gutPick, setGutPick] = useState<number | null>(null);
  const gutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = lesson.questions.length;
  const question = lesson.questions[currentQ];

  useEffect(() => {
    if (phase === 'complete') {
      onComplete?.(lesson.id);
    }
  }, [phase, lesson.id, onComplete]);

  // Clean up gut check timer on unmount or question change
  useEffect(() => {
    return () => {
      if (gutTimerRef.current) clearTimeout(gutTimerRef.current);
    };
  }, [currentQ]);

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

  function handleGutPick(index: number) {
    setGutPick(index);
    gutTimerRef.current = setTimeout(() => setGutDone(true), 500);
  }

  function handleContinue() {
    if (currentQ < total - 1) {
      setCurrentQ((q) => q + 1);
      setSelectedIndex(null);
      setGutDone(false);
      setGutPick(null);
      setPhase('answering');
    } else if (lesson.thinkingStep) {
      setPhase('thinking');
    } else {
      setPhase('complete');
    }
  }

  function handleRestart() {
    setCurrentQ(0);
    setSelectedIndex(null);
    setPhase('intro');
    setScore(0);
    setThinkingText('');
    setGutDone(false);
    setGutPick(null);
  }

  function getCompletionMessage(): string {
    const { completionMessages: m } = lesson;
    if (score === total) return m.perfect;
    if (score >= total * 0.75) return m.great;
    if (score >= total * 0.5) return m.good;
    return m.low;
  }

  // --- Intro screen ---
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
            {/* Back link */}
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Lessons
            </button>

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg">
                {lesson.emoji}
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">{lesson.title}</h1>
                <p className="text-sm text-text-secondary">{lesson.subtitle}</p>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-2xl border border-border bg-dark-800 p-6 space-y-5">
              <p className="text-sm text-text-secondary leading-relaxed">
                {lesson.description}
              </p>

              {/* Key facts */}
              {lesson.keyFacts.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-text-muted font-semibold uppercase tracking-wide">
                    Key facts
                    <span className="ml-1.5 font-normal normal-case tracking-normal">({lesson.dataAsOf})</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {lesson.keyFacts.map((fact, i) => (
                      <div key={i} className="rounded-lg border border-border bg-dark-900/50 p-3">
                        <p className="text-xs text-text-muted mb-0.5">{fact.label}</p>
                        <p className="text-base font-bold text-text-primary">{fact.value}</p>
                        <p className="text-xs text-text-secondary mt-1 leading-relaxed">{fact.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What you'll learn */}
              <div className="space-y-3">
                <p className="text-xs text-text-muted font-semibold uppercase tracking-wide">What you'll learn</p>
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
                <span>{total} questions · ~{lesson.estimatedMinutes} minutes</span>
              </div>
            </div>

            {/* Start button */}
            <motion.button
              onClick={() => setPhase('answering')}
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

  // --- Thinking step ---
  if ((phase === 'thinking' || phase === 'thinking-revealed') && lesson.thinkingStep) {
    const step = lesson.thinkingStep;
    const isRevealed = phase === 'thinking-revealed';
    const canSubmit = thinkingText.trim().length >= 10;

    return (
      <div className="min-h-screen bg-dark-900">
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-base">
                {lesson.emoji}
              </div>
              <div>
                <h1 className="text-lg font-bold text-text-primary">{lesson.title}</h1>
                <p className="text-xs text-text-muted">{lesson.subtitle}</p>
              </div>
            </div>

            {/* Thinking prompt card */}
            <div className="rounded-2xl border border-border bg-dark-800 p-6 space-y-5">
              <div className="flex items-center gap-2">
                <PenLine className="w-4 h-4 text-accent-light" />
                <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">
                  Your Investor View
                </span>
              </div>

              <p className="text-base font-semibold text-text-primary leading-relaxed">
                {step.prompt}
              </p>

              <textarea
                value={thinkingText}
                onChange={(e) => setThinkingText(e.target.value)}
                placeholder={step.placeholder}
                disabled={isRevealed}
                rows={4}
                className={`w-full rounded-xl border border-border bg-dark-900 p-4 text-sm text-text-primary placeholder-text-muted leading-relaxed resize-none focus:outline-none focus:border-accent/50 transition-colors ${
                  isRevealed ? 'opacity-80' : ''
                }`}
              />

              {!isRevealed && (
                <motion.button
                  onClick={() => setPhase('thinking-revealed')}
                  disabled={!canSubmit}
                  whileHover={canSubmit ? { scale: 1.01 } : {}}
                  whileTap={canSubmit ? { scale: 0.98 } : {}}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    canSubmit
                      ? 'bg-accent hover:bg-accent-light text-white cursor-pointer'
                      : 'bg-dark-600 text-text-muted cursor-not-allowed'
                  }`}
                >
                  Submit My View
                </motion.button>
              )}

              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Model answer */}
                  <div className="rounded-xl border border-green/30 bg-green/5 p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green" />
                      <span className="text-xs font-semibold text-green uppercase tracking-wide">
                        Strong Model Answer
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.modelAnswer}
                    </p>
                  </div>

                  {/* What strong reasoning includes */}
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-accent-light" />
                      <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">
                        What Strong Reasoning Includes
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {step.strongReasoningIncludes.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent-light shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-sm text-text-secondary leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Continue to results */}
                  <motion.button
                    onClick={() => setPhase('complete')}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer"
                  >
                    See Results
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // --- Completion screen ---
  if (phase === 'complete') {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg space-y-6"
        >
          {/* Trophy + score */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8 text-accent-light" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary">Lesson Complete</h1>
            <div className="rounded-2xl border border-border bg-dark-800 p-6 space-y-3">
              <p className="text-4xl font-bold text-accent-light">{score} / {total}</p>
              <p className="text-sm text-text-secondary">{getCompletionMessage()}</p>
            </div>
          </div>

          {/* What you learned */}
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

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              onClick={handleRestart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Restart Lesson
            </motion.button>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-dark-800 hover:bg-dark-700 text-text-secondary font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              All Lessons
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- Quiz flow ---
  const TopicIcon = question.topicIcon;

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-base">
            {lesson.emoji}
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary">{lesson.title}</h1>
            <p className="text-xs text-text-muted">{lesson.subtitle}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-text-muted">
            <span>
              Step {currentQ + 1} of {total}
              {lesson.storyArc?.[currentQ] && (
                <span className="text-accent-light font-medium"> · {lesson.storyArc[currentQ]}</span>
              )}
            </span>
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
            key={`${currentQ}-${phase === 'feedback' ? 'fb' : 'q'}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-dark-800 p-6 space-y-5"
          >
            {/* Topic label */}
            <div className="flex items-center gap-2">
              <TopicIcon className="w-3.5 h-3.5 text-accent-light" />
              <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">
                {question.topic}
              </span>
            </div>

            {/* Gut check — shown before the full question */}
            {phase === 'answering' && question.gutCheck && !gutDone ? (
              <div className="space-y-4">
                {question.context && (
                  <p className="text-sm text-text-secondary leading-relaxed">{question.context}</p>
                )}
                <p className="text-base font-semibold text-text-primary">{question.gutCheck.prompt}</p>
                <div className="space-y-2">
                  {question.gutCheck.options.map((opt, i) => (
                    <motion.button
                      key={i}
                      onClick={() => gutPick === null && handleGutPick(i)}
                      whileTap={gutPick === null ? { scale: 0.98 } : {}}
                      className={`w-full text-left rounded-xl border p-3.5 transition-all duration-200 ${
                        gutPick === i
                          ? 'border-accent/50 bg-accent/10'
                          : gutPick !== null
                            ? 'border-border bg-dark-700 opacity-40'
                            : 'border-border bg-dark-700 hover:border-dark-400 cursor-pointer'
                      }`}
                    >
                      <span className="text-sm text-text-primary">{opt}</span>
                    </motion.button>
                  ))}
                </div>
                <p className="text-xs text-text-muted italic">{question.gutCheck.nudge}</p>
              </div>
            ) : phase === 'feedback' && selectedIndex !== null ? (
              /* Feedback phase — collapsed question, just show feedback */
              <>
                <p className="text-sm text-text-muted">{question.question}</p>
                <FeedbackBlock
                  question={question}
                  selectedIndex={selectedIndex}
                  onContinue={handleContinue}
                  isLast={currentQ === total - 1}
                  gutCheckPick={gutDone ? gutPick : null}
                />
              </>
            ) : (
              /* Answering phase — show full question */
              <>
                <QuestionBlock
                  question={question}
                  selectedIndex={selectedIndex}
                  locked={false}
                  onSelect={handleSelect}
                />

                {/* Submit button */}
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
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
