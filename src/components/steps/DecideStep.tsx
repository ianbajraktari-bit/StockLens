import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X, Lightbulb, Sparkles } from 'lucide-react';
import type { DecideStep as DecideStepType } from '../../data/lessons/types';
import { ConfettiBurst } from '../../components/fx/ConfettiBurst';
import { ScreenFlash } from '../../components/fx/ScreenFlash';
import {
  EASE_CINEMATIC,
  EASE_GAME_IN,
  SPRING_CELEBRATION,
  SPRING_FLUID,
  SPRING_TACTILE,
} from '../../lib/motion';

interface Props {
  step: DecideStepType;
  onDone: (score: { correct: number; total: number }) => void;
}

/**
 * Inline tilt handler for individual option cards.
 * We can't use the useTilt hook in a loop, so we do it manually per-element.
 */
function applyTilt(e: React.MouseEvent, el: HTMLElement, maxTilt = 6) {
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const tiltX = (0.5 - y) * maxTilt * 2;
  const tiltY = (x - 0.5) * maxTilt * 2;
  el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
}

function resetTilt(el: HTMLElement) {
  el.style.transform =
    'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
}

export default function DecideStep({ step, onDone }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const isCorrect = selected === step.correctIndex;

  const setOptionRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      optionRefs.current[index] = el;
    },
    [],
  );

  function handleSelect(i: number) {
    if (submitted) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
    setShowFlash(true);
    if (selected === step.correctIndex) {
      setShowConfetti(true);
    }
  }

  function handleContinue() {
    onDone({ correct: isCorrect ? 1 : 0, total: 1 });
  }

  const wrongNudge =
    submitted &&
    !isCorrect &&
    step.wrongNudges &&
    selected !== null &&
    selected < step.wrongNudges.length
      ? step.wrongNudges[selected]
      : null;

  // Determine which options to show after submission
  function shouldShowOption(i: number): boolean {
    if (!submitted) return true;
    // Always show the correct answer
    if (i === step.correctIndex) return true;
    // Show the user's wrong pick
    if (i === selected) return true;
    // Collapse everything else
    return false;
  }

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <ConfettiBurst show={showConfetti} />
      <ScreenFlash show={showFlash} tone={isCorrect ? 'green' : 'red'} />

      {/* Header */}
      <div className="flex items-center gap-2">
        <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
        <span className="text-[11px] font-bold text-accent-light uppercase tracking-[0.16em]">
          {step.topic}
        </span>
      </div>

      {/* Context */}
      {step.context && (
        <div className="space-y-3">
          {step.context.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm text-text-secondary leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Question */}
      <p className="text-base font-semibold text-text-primary leading-snug">
        {step.question}
      </p>

      {/* Options */}
      <div className="space-y-2" role="radiogroup" aria-label={step.question}>
        <AnimatePresence initial={false}>
          {step.options.map((opt, i) => {
            const isSelected = selected === i;
            const isThisCorrect = i === step.correctIndex;
            const showResult = submitted;
            const celebrate = showResult && isThisCorrect;
            const pickedWrong = showResult && isSelected && !isThisCorrect;
            const visible = shouldShowOption(i);

            if (!visible) {
              return (
                <motion.div
                  key={i}
                  initial={{ height: 'auto', opacity: 1 }}
                  animate={{ height: 0, opacity: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4, ease: EASE_CINEMATIC, delay: 0.15 }}
                  className="overflow-hidden"
                />
              );
            }

            return (
              <motion.button
                key={i}
                ref={setOptionRef(i)}
                onClick={() => handleSelect(i)}
                disabled={submitted}
                role="radio"
                aria-checked={isSelected}
                layout
                onMouseMove={(e) => {
                  if (submitted) return;
                  const el = optionRefs.current[i];
                  if (el) applyTilt(e, el, 5);
                }}
                onMouseLeave={() => {
                  const el = optionRefs.current[i];
                  if (el) resetTilt(el);
                }}
                animate={
                  pickedWrong
                    ? { x: [0, -6, 6, -3, 3, 0] }
                    : undefined
                }
                transition={
                  pickedWrong
                    ? { duration: 0.4, ease: EASE_CINEMATIC }
                    : SPRING_FLUID
                }
                className={`tilt-card relative w-full text-left rounded-2xl border p-4 overflow-hidden transition-all duration-300 ${
                  celebrate
                    ? 'border-green/50 bg-gradient-to-br from-green/[0.12] via-green/[0.05] to-transparent shadow-[0_0_30px_-6px_rgba(34,197,94,0.4)]'
                    : pickedWrong
                      ? 'border-red/50 bg-gradient-to-br from-red/[0.12] via-red/[0.04] to-transparent shadow-[0_0_20px_-6px_rgba(239,68,68,0.3)]'
                      : showResult
                        ? 'border-white/[0.03] bg-dark-700/40 opacity-40'
                        : isSelected
                          ? 'border-accent/60 bg-gradient-to-br from-accent/[0.15] to-accent/[0.04] cursor-pointer shadow-[0_8px_32px_-8px_rgba(99,102,241,0.45),0_0_0_1px_rgba(99,102,241,0.3)] scale-[1.03]'
                          : 'border-white/[0.06] bg-dark-700/60 hover:border-accent/30 hover:bg-dark-600/70 hover:shadow-[0_4px_16px_-6px_rgba(99,102,241,0.15)] cursor-pointer'
                }`}
                style={
                  !submitted
                    ? { transformStyle: 'preserve-3d' as const }
                    : undefined
                }
              >
                {/* Celebration pulse overlay */}
                {celebrate && (
                  <motion.span
                    aria-hidden
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.2, 1.4] }}
                    transition={{
                      duration: 1.2,
                      times: [0, 0.3, 1],
                      ease: 'easeOut',
                    }}
                    className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-green/40"
                  />
                )}

                {/* Selection glow animation */}
                {isSelected && !showResult && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      boxShadow: [
                        'inset 0 0 20px -8px rgba(99,102,241,0.3)',
                        'inset 0 0 30px -8px rgba(99,102,241,0.5)',
                        'inset 0 0 20px -8px rgba(99,102,241,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}

                <div className="flex items-start gap-3 relative z-10 tilt-inner">
                  <motion.div
                    animate={
                      isSelected && !showResult
                        ? { scale: [1, 1.15, 1] }
                        : undefined
                    }
                    transition={SPRING_TACTILE}
                    className={`w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                      celebrate
                        ? 'bg-green border border-green'
                        : pickedWrong
                          ? 'bg-red border border-red'
                          : isSelected
                            ? 'border-2 border-accent bg-accent/30'
                            : 'border-2 border-dark-400'
                    }`}
                  >
                    {celebrate && (
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={SPRING_CELEBRATION}
                      >
                        <Check
                          className="w-3 h-3 text-white"
                          strokeWidth={3}
                        />
                      </motion.div>
                    )}
                    {pickedWrong && (
                      <motion.div
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={SPRING_CELEBRATION}
                      >
                        <X className="w-3 h-3 text-white" strokeWidth={3} />
                      </motion.div>
                    )}
                    {isSelected && !showResult && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={SPRING_CELEBRATION}
                        className="w-2 h-2 rounded-full bg-accent-light"
                      />
                    )}
                  </motion.div>
                  <span className="text-sm text-text-primary leading-snug">
                    {opt}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Reveal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_GAME_IN, delay: 0.25 }}
            className="space-y-3"
          >
            {/* Wrong nudge */}
            {wrongNudge && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                className="rounded-xl border border-red/25 bg-red/[0.06] p-4"
              >
                <p className="text-sm text-text-secondary leading-relaxed">
                  {wrongNudge}
                </p>
              </motion.div>
            )}

            {/* Punchline — dramatic blur-to-focus slide-up */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                ease: EASE_GAME_IN,
                delay: 0.4,
              }}
              className={`rounded-xl border p-5 flex items-start gap-3 ${
                isCorrect
                  ? 'border-green/30 bg-gradient-to-br from-green/[0.1] via-green/[0.03] to-transparent shadow-[0_4px_24px_-8px_rgba(34,197,94,0.2)]'
                  : 'border-accent/30 bg-gradient-to-br from-accent/[0.1] via-accent/[0.03] to-transparent shadow-[0_4px_24px_-8px_rgba(99,102,241,0.2)]'
              }`}
            >
              {isCorrect ? (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={SPRING_CELEBRATION}
                >
                  <Sparkles className="w-5 h-5 text-green-light shrink-0 mt-0.5" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={SPRING_CELEBRATION}
                  className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 shrink-0 mt-0.5 flex items-center justify-center"
                >
                  <span className="text-[10px] font-bold text-accent-light">
                    !
                  </span>
                </motion.div>
              )}
              <p className="text-sm text-text-primary leading-relaxed font-medium">
                {step.punchline}
              </p>
            </motion.div>

            {/* Takeaway */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.6 }}
              className="rounded-xl border border-warm/15 bg-gradient-to-br from-warm/[0.06] to-transparent p-4 flex items-start gap-2.5"
            >
              <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.takeaway}
              </p>
            </motion.div>

            {/* Continue button */}
            <motion.button
              onClick={handleContinue}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-bold cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)] transition-shadow duration-300"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit button (pre-reveal) */}
      {!submitted && (
        <motion.button
          onClick={handleSubmit}
          disabled={selected === null}
          whileHover={selected !== null ? { scale: 1.015, y: -1 } : undefined}
          whileTap={selected !== null ? { scale: 0.97 } : undefined}
          transition={SPRING_TACTILE}
          className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
            selected !== null
              ? 'btn-glow bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)]'
              : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
          }`}
        >
          Submit
        </motion.button>
      )}
    </div>
  );
}
