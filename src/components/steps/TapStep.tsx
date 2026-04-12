import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Flag, Check, X, Lightbulb } from 'lucide-react';
import type { TapStep as TapStepType } from '../../data/lessons/types';

interface Props {
  step: TapStepType;
  onDone: (score: { correct: number; total: number }) => void;
}

export default function TapStep({ step, onDone }: Props) {
  const [tapped, setTapped] = useState<Record<number, 'right' | 'wrong'>>({});
  const [lastTap, setLastTap] = useState<{ index: number; feedback: string; right: boolean } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const totalSignals = step.passage.reduce(
    (acc, seg) => acc + (seg.type === 'chip' && seg.signal ? 1 : 0),
    0
  );
  const foundSignals = Object.entries(tapped).filter(([i, v]) => {
    const seg = step.passage[Number(i)];
    return v === 'right' && seg.type === 'chip' && seg.signal;
  }).length;
  const wrongTaps = Object.values(tapped).filter((v) => v === 'wrong').length;

  const canFinish = foundSignals >= step.requiredSignals;

  function handleChipTap(index: number) {
    if (submitted || tapped[index]) return;
    const seg = step.passage[index];
    if (seg.type !== 'chip') return;
    const right = seg.signal;
    setTapped((prev) => ({ ...prev, [index]: right ? 'right' : 'wrong' }));
    setLastTap({ index, feedback: seg.feedback, right });
  }

  function handleFinish() {
    setSubmitted(true);
  }

  function handleContinue() {
    onDone({
      correct: foundSignals,
      total: totalSignals,
    });
  }

  return (
    <div className="rounded-2xl border border-border bg-dark-800/60 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <step.topicIcon className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-xs font-semibold text-accent-light uppercase tracking-wide">
            {step.topic}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flag className="w-3 h-3 text-amber" />
          <span className="text-xs font-semibold text-text-muted tabular-nums">
            {foundSignals}/{step.requiredSignals}
          </span>
        </div>
      </div>

      {/* Intro */}
      <p className="text-sm text-text-secondary leading-relaxed">{step.intro}</p>

      {/* Passage */}
      <div className="rounded-xl border border-border bg-dark-900/50 p-5 leading-loose text-base text-text-primary">
        {step.passage.map((seg, i) => {
          if (seg.type === 'text') {
            return <span key={i}>{seg.value}</span>;
          }
          const state = tapped[i];
          const isUntapped = !state;
          const wasRight = state === 'right';
          const wasWrong = state === 'wrong';
          return (
            <button
              key={i}
              onClick={() => handleChipTap(i)}
              disabled={submitted || !!state}
              className={`inline px-2 py-1 mx-0.5 rounded-lg font-medium transition-all duration-150 ${
                isUntapped
                  ? 'bg-dark-700 text-text-primary border-b-2 border-dotted border-accent/50 hover:bg-dark-600 hover:border-accent cursor-pointer'
                  : wasRight
                    ? 'bg-green/15 text-green border-b-2 border-green'
                    : 'bg-red/15 text-red border-b-2 border-red line-through decoration-red/40'
              }`}
            >
              {seg.value}
              {wasRight && <Check className="inline w-3 h-3 ml-1" />}
              {wasWrong && <X className="inline w-3 h-3 ml-1" />}
            </button>
          );
        })}
      </div>

      {/* Last tap feedback */}
      <AnimatePresence mode="wait">
        {lastTap && !submitted && (
          <motion.div
            key={lastTap.index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`rounded-xl border p-3.5 ${
              lastTap.right
                ? 'border-green/30 bg-green/5'
                : 'border-red/30 bg-red/5'
            }`}
          >
            <p className="text-sm text-text-secondary leading-relaxed">{lastTap.feedback}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats */}
      {!submitted && (
        <div className="flex items-center justify-between text-xs text-text-muted">
          <span>
            {foundSignals < step.requiredSignals
              ? `Find ${step.requiredSignals - foundSignals} more red flag${step.requiredSignals - foundSignals === 1 ? '' : 's'}`
              : 'All required red flags found'}
          </span>
          {wrongTaps > 0 && (
            <span className="text-red/70">{wrongTaps} wrong tap{wrongTaps === 1 ? '' : 's'}</span>
          )}
        </div>
      )}

      {/* Reveal after finish */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          <p className="text-sm text-text-secondary leading-relaxed">{step.reveal}</p>
          <div className="rounded-xl border border-warm/20 bg-warm/5 p-4 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-warm shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">{step.takeaway}</p>
          </div>
          <motion.button
            onClick={handleContinue}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}

      {!submitted && (
        <motion.button
          onClick={handleFinish}
          disabled={!canFinish}
          whileHover={canFinish ? { scale: 1.01 } : {}}
          whileTap={canFinish ? { scale: 0.98 } : {}}
          className={`w-full py-3 rounded-xl font-semibold transition-all ${
            canFinish
              ? 'bg-accent hover:bg-accent-light text-white cursor-pointer'
              : 'bg-dark-600 text-text-muted cursor-not-allowed'
          }`}
        >
          {canFinish ? 'Done' : 'Keep looking'}
        </motion.button>
      )}
    </div>
  );
}
