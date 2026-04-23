import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenLine, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import type { ThinkingStepNew } from '../../data/lessons/types';
import {
  EASE_CINEMATIC,
  EASE_GAME_IN,
  SPRING_TACTILE,
} from '../../lib/motion';
import { ScreenFlash } from '../fx/ScreenFlash';

interface Props {
  step: ThinkingStepNew;
  onDone: (score: { correct: number; total: number }) => void;
}

export default function ThinkingStepComponent({ step, onDone }: Props) {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const canSubmit = text.trim().length >= 10;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  function handleSubmit() {
    if (!canSubmit) return;
    setSubmitted(true);
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 500);
  }

  function handleTilt(e: React.MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) scale3d(1.01, 1.01, 1.01)`;
  }

  function handleTiltReset() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }

  if (submitted) {
    return (
      <>
        <ScreenFlash show={showFlash} tone="accent" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_CINEMATIC }}
          className="space-y-4"
        >
          {/* User's answer */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASE_GAME_IN, delay: 0.1 }}
            className="rounded-2xl border border-accent/20 bg-dark-800/50 backdrop-blur-sm p-5 space-y-2 tilt-card glow-on-hover"
            ref={cardRef}
            onMouseMove={handleTilt}
            onMouseLeave={handleTiltReset}
          >
            <div className="flex items-center gap-2">
              <PenLine className="w-4 h-4 text-accent-light" />
              <p className="text-xs font-bold text-accent-light uppercase tracking-[0.14em]">Your Answer</p>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">
              {text}
            </p>
          </motion.div>

          {/* Model answer — dramatic reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: EASE_CINEMATIC, delay: 0.3 }}
            className="rounded-2xl border border-warm/20 bg-gradient-to-br from-warm/[0.08] via-warm/[0.02] to-transparent backdrop-blur-sm p-5 space-y-2"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-warm" />
              <p className="text-xs font-bold text-warm uppercase tracking-[0.14em]">Model Analysis</p>
            </div>
            <p className="text-sm text-text-primary leading-relaxed">{step.modelAnswer}</p>
          </motion.div>

          {/* Criteria checklist */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_CINEMATIC, delay: 0.5 }}
            className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-5 space-y-3"
          >
            <p className="text-[10px] text-text-muted font-bold uppercase tracking-[0.16em]">
              Strong reasoning includes
            </p>
            <div className="space-y-2">
              {step.strongReasoningIncludes.map((criterion, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-green mt-0.5 shrink-0" />
                  <p className="text-sm text-text-secondary leading-relaxed">{criterion}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.button
            onClick={() => onDone({ correct: 1, total: 1 })}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            whileHover={{ scale: 1.015, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glow w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-bold cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)] transition-shadow duration-300"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
      className="space-y-4"
    >
      <div
        ref={cardRef}
        onMouseMove={handleTilt}
        onMouseLeave={handleTiltReset}
        className="rounded-2xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-6 space-y-4 tilt-card"
      >
        <div className="flex items-center gap-2">
          <PenLine className="w-4 h-4 text-accent-light" />
          <p className="text-xs font-bold text-accent-light uppercase tracking-[0.14em]">Synthesize</p>
        </div>

        <p className="text-base font-semibold text-text-primary leading-snug">{step.prompt}</p>

        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={step.placeholder}
            rows={5}
            autoFocus
            className="w-full rounded-xl border-2 border-white/[0.06] bg-dark-900/40 backdrop-blur-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-muted resize-none focus:outline-none focus:border-accent/40 focus:shadow-[0_0_30px_-8px_rgba(99,102,241,0.35)] transition-all duration-300"
            style={{ minHeight: 120 }}
          />
          <AnimatePresence>
            {text.length > 0 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-3 right-3 text-[10px] display-num text-text-faint"
              >
                {wordCount} word{wordCount !== 1 ? 's' : ''}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-text-muted">
            {text.trim().length < 10
              ? `${10 - text.trim().length} more characters`
              : 'Ready'}
          </p>
          <motion.button
            onClick={handleSubmit}
            disabled={!canSubmit}
            whileHover={canSubmit ? { scale: 1.02, y: -1 } : undefined}
            whileTap={canSubmit ? { scale: 0.96 } : undefined}
            transition={SPRING_TACTILE}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 press-squish ${
              canSubmit
                ? 'btn-glow bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_6px_24px_-6px_rgba(99,102,241,0.5)]'
                : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
            }`}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
