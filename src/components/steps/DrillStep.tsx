import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
} from 'framer-motion';
import { Check, X, ArrowRight, Zap, Lightbulb, Sparkles } from 'lucide-react';
import type { DrillStep as DrillStepType } from '../../data/lessons/types';
import {
  EASE_CINEMATIC,
  EASE_GAME_IN,
  SPRING_CELEBRATION,
  SPRING_FLUID,
  SPRING_TACTILE,
} from '../../lib/motion';
import { ConfettiBurst } from '../fx/ConfettiBurst';
import { ScreenFlash } from '../fx/ScreenFlash';

interface Props {
  step: DrillStepType;
  onDone: (score: { correct: number; total: number }) => void;
}

type Phase = 'running' | 'reveal' | 'done';

const SWIPE_THRESHOLD = 80;

export default function DrillStep({ step, onDone }: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('running');
  const [picked, setPicked] = useState<'left' | 'right' | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [flashTone, setFlashTone] = useState<'green' | 'red'>('green');
  const [showFlash, setShowFlash] = useState(false);
  const [exitX, setExitX] = useState(0);

  const dragX = useMotionValue(0);
  const cardRotate = useTransform(dragX, [-200, 0, 200], [-12, 0, 12]);
  const leftGlow = useTransform(dragX, [-SWIPE_THRESHOLD, 0], [1, 0]);
  const rightGlow = useTransform(dragX, [0, SWIPE_THRESHOLD], [0, 1]);

  const total = step.prompts.length;
  const prompt = step.prompts[index];
  const isCorrect = picked !== null && picked === prompt?.correct;

  function commitAnswer(side: 'left' | 'right') {
    if (phase !== 'running' || picked !== null) return;
    setPicked(side);
    setPhase('reveal');
    const correct = side === prompt.correct;
    if (correct) setCorrectCount((c) => c + 1);
    setFlashTone(correct ? 'green' : 'red');
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 400);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (phase !== 'running' || picked !== null) return;
    if (info.offset.x < -SWIPE_THRESHOLD) {
      setExitX(-300);
      commitAnswer('left');
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      setExitX(300);
      commitAnswer('right');
    }
  }

  function handlePick(side: 'left' | 'right') {
    setExitX(side === 'left' ? -200 : 200);
    commitAnswer(side);
  }

  function handleNext() {
    if (index < total - 1) {
      setIndex((i) => i + 1);
      setPicked(null);
      setPhase('running');
      setExitX(0);
      dragX.set(0);
    } else {
      setPhase('done');
    }
  }

  function handleContinue() {
    onDone({ correct: correctCount, total });
  }

  if (phase === 'done') {
    const ratio = total > 0 ? correctCount / total : 0;
    const isPerfect = correctCount === total;
    const headline = isPerfect
      ? 'Perfect drill.'
      : correctCount >= total - 1
        ? 'Sharp instincts.'
        : correctCount >= total / 2
          ? 'Getting the feel.'
          : 'Keep building the intuition.';

    return (
      <>
        <ConfettiBurst show={isPerfect} />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_CINEMATIC }}
          className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/25 to-transparent" />
          <div className="flex items-center gap-2">
            <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
            <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
              {step.topic}
            </span>
          </div>

          <div className="text-center space-y-3 py-2">
            <div className="flex items-baseline justify-center gap-1.5">
              <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={SPRING_CELEBRATION}
                className="display-num text-5xl text-text-primary leading-none"
              >
                {correctCount}
              </motion.span>
              <span className="display-num text-2xl text-text-muted leading-none">/ {total}</span>
            </div>
            <div className="mx-auto max-w-xs flex items-stretch gap-[3px] h-2">
              {Array.from({ length: total }).map((_, i) => {
                const lit = i < correctCount;
                return (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0.3, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.05, ease: EASE_CINEMATIC }}
                    className={`flex-1 rounded-[2px] origin-bottom ${
                      lit
                        ? 'bg-gradient-to-t from-green/90 to-green-light shadow-[0_0_6px_rgba(74,222,128,0.4)] progress-glow'
                        : 'bg-dark-700'
                    }`}
                  />
                );
              })}
            </div>
            <p className="text-sm text-text-secondary">{headline}</p>
            <p className="text-[11px] text-text-faint display-num">
              {Math.round(ratio * 100)}% accuracy
            </p>
          </div>

          <div className="rounded-xl border border-warm/15 bg-gradient-to-br from-warm/[0.06] to-transparent p-4 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">{step.takeaway}</p>
          </div>

          <motion.button
            onClick={handleContinue}
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING_TACTILE}
            className="btn-glow w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-bold cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)] transition-shadow duration-300 press-squish"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <ScreenFlash show={showFlash} tone={flashTone} />
      <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
            <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
              {step.topic}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-dark-900/50 border border-white/[0.04]">
            <Zap className="w-3 h-3 text-amber" />
            <span className="display-num text-[11px] font-semibold text-text-muted">
              {index + 1}
              <span className="text-text-faint"> / {total}</span>
            </span>
          </div>
        </div>

        {/* Segmented progress gauge */}
        <div className="flex items-stretch gap-[3px] h-1.5">
          {step.prompts.map((_, i) => {
            let tone = 'bg-dark-700';
            if (i < index) tone = 'bg-accent/80';
            else if (i === index) {
              tone =
                phase === 'reveal'
                  ? isCorrect
                    ? 'bg-green shadow-[0_0_6px_rgba(34,197,94,0.5)]'
                    : 'bg-red shadow-[0_0_6px_rgba(239,68,68,0.5)]'
                  : 'bg-accent-light progress-glow';
            }
            return (
              <div
                key={i}
                className={`flex-1 rounded-[2px] transition-colors duration-300 ${tone}`}
              />
            );
          })}
        </div>

        {/* Intro on first prompt only */}
        {index === 0 && phase === 'running' && (
          <p className="text-sm text-text-secondary leading-relaxed">{step.intro}</p>
        )}

        {/* Swipe indicators */}
        {phase === 'running' && (
          <div className="flex items-center justify-between text-[10px] text-text-faint px-1">
            <motion.span style={{ opacity: leftGlow }} className="text-accent-light font-semibold">
              ← {prompt.left.label}
            </motion.span>
            <span className="text-text-faint/50">swipe or tap</span>
            <motion.span style={{ opacity: rightGlow }} className="text-accent-light font-semibold">
              {prompt.right.label} →
            </motion.span>
          </div>
        )}

        {/* Current prompt — swipeable card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: exitX || -100, rotate: exitX > 0 ? 8 : -8 }}
            transition={{ duration: 0.3, ease: EASE_GAME_IN }}
            className="space-y-4"
          >
            {prompt.setup && (
              <motion.p
                drag={phase === 'running' && picked === null ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                style={{
                  x: phase === 'running' ? dragX : 0,
                  rotate: phase === 'running' ? cardRotate : 0,
                }}
                className="text-base font-semibold text-text-primary text-center swipe-card py-2"
              >
                {prompt.setup}
              </motion.p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(['left', 'right'] as const).map((side) => {
                const choice = prompt[side];
                const isPicked = picked === side;
                const isThisCorrect = prompt.correct === side;
                const showResult = phase === 'reveal';
                const pickedWrong = showResult && isPicked && !isThisCorrect;
                const celebrate = showResult && isThisCorrect;

                return (
                  <motion.button
                    key={side}
                    onClick={() => handlePick(side)}
                    disabled={phase !== 'running'}
                    aria-label={`${choice.label}${choice.sublabel ? ` — ${choice.sublabel}` : ''}`}
                    whileHover={
                      phase === 'running' ? { y: -3, scale: 1.02 } : undefined
                    }
                    whileTap={phase === 'running' ? { scale: 0.95 } : undefined}
                    animate={
                      pickedWrong
                        ? { x: [0, -6, 6, -4, 4, 0] }
                        : celebrate
                          ? { scale: [1, 1.04, 1] }
                          : undefined
                    }
                    transition={
                      pickedWrong
                        ? { duration: 0.4, ease: EASE_CINEMATIC }
                        : SPRING_FLUID
                    }
                    className={`relative rounded-2xl border p-4 text-left min-h-[120px] flex flex-col justify-between overflow-hidden transition-all duration-300 tilt-card glow-on-hover ${
                      celebrate
                        ? 'border-green/50 bg-gradient-to-br from-green/[0.15] via-green/[0.06] to-transparent shadow-[0_0_30px_-6px_rgba(34,197,94,0.4)] answer-flash-correct'
                        : pickedWrong
                          ? 'border-red/50 bg-gradient-to-br from-red/[0.12] via-red/[0.04] to-transparent answer-flash-wrong'
                          : showResult
                            ? 'border-white/[0.03] bg-dark-700/40 opacity-40'
                            : 'border-white/[0.06] bg-dark-700/60 hover:border-accent/35 hover:bg-dark-600/70 cursor-pointer'
                    }`}
                  >
                    {celebrate && (
                      <motion.span
                        aria-hidden
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.1, times: [0, 0.3, 1], ease: 'easeOut' }}
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          animation: 'pulse-ring 1.1s ease-out',
                          ['--pulse-color' as string]: 'rgba(74, 222, 128, 0.45)',
                        }}
                      />
                    )}

                    <div className="space-y-1 relative z-10">
                      <p className="text-sm font-semibold text-text-primary leading-snug">
                        {choice.label}
                      </p>
                      {choice.sublabel && (
                        <p className="text-xs text-text-muted leading-snug">{choice.sublabel}</p>
                      )}
                    </div>
                    {showResult && isThisCorrect && (
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ ...SPRING_CELEBRATION, delay: 0.08 }}
                        className="flex items-center gap-1.5 mt-2 relative z-10"
                      >
                        <div className="w-5 h-5 rounded-full bg-green/20 border border-green/40 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-light" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-semibold text-green-light">Right</span>
                      </motion.div>
                    )}
                    {pickedWrong && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={SPRING_TACTILE}
                        className="flex items-center gap-1.5 mt-2 relative z-10"
                      >
                        <div className="w-5 h-5 rounded-full bg-red/20 border border-red/40 flex items-center justify-center">
                          <X className="w-3 h-3 text-red-light" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-semibold text-red-light">Not this one</span>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Flash message + next button on reveal */}
            <AnimatePresence>
              {phase === 'reveal' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE_GAME_IN, delay: 0.1 }}
                  className="space-y-4"
                >
                  <div
                    className={`rounded-xl border p-3.5 flex items-start gap-2.5 backdrop-blur-sm ${
                      isCorrect
                        ? 'border-green/20 bg-gradient-to-br from-green/[0.06] to-transparent'
                        : 'border-white/[0.05] bg-dark-900/40'
                    }`}
                  >
                    {isCorrect ? (
                      <Sparkles className="w-4 h-4 text-green-light shrink-0 mt-0.5" />
                    ) : (
                      <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {prompt.flash}
                    </p>
                  </div>
                  <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    transition={SPRING_TACTILE}
                    className="w-full py-3 rounded-xl border border-white/[0.08] bg-dark-700/60 hover:bg-dark-600/80 hover:border-white/[0.12] text-text-primary text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-200 press-squish"
                  >
                    {index < total - 1 ? 'Next' : 'See Results'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
