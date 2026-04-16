import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Lightbulb, BookOpen } from 'lucide-react';
import type { WorkflowStepTemplate, AnalystStepContent } from '../../data/companies';

interface Props {
  template: WorkflowStepTemplate;
  content: AnalystStepContent;
  companyName: string;
  stepNumber: number;
  totalSteps: number;
  /** Prefill the textarea with a previously saved response. */
  savedResponse?: string;
  /** Called when the user submits. Parent can persist the text to storage. */
  onSubmit?: (text: string) => void;
  onDone: () => void;
}

/**
 * One step of the analyst workflow. Free-response input, then reveal of
 * the model answer and the "strong reasoning includes" criteria for
 * self-assessment. No grading — the user is comparing their own thinking.
 */
export default function AnalystStepComponent({
  template,
  content,
  companyName,
  stepNumber,
  totalSteps,
  savedResponse,
  onSubmit,
  onDone,
}: Props) {
  const [response, setResponse] = useState(savedResponse ?? '');
  const [submitted, setSubmitted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const prompt = template.prompt.replace(/{name}/g, companyName);
  const placeholder = template.placeholder.replace(/{name}/g, companyName);
  const canSubmit = response.trim().length >= template.minChars;
  const hasSavedResponse = (savedResponse ?? '').length > 0;

  function handleSubmit() {
    if (!canSubmit) return;
    onSubmit?.(response.trim());
    setSubmitted(true);
  }

  return (
    <div className="space-y-5">
      {/* Step header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-[11px] font-bold text-accent-light">
            {stepNumber}
          </div>
          <div>
            <h2 className="text-sm font-semibold text-text-primary">{template.title}</h2>
            <p className="text-[10px] text-text-muted">Step {stepNumber} of {totalSteps}</p>
          </div>
        </div>
        {hasSavedResponse && !submitted && (
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-warm/10 border border-warm/20 text-warm font-semibold uppercase tracking-wide">
            Saved draft
          </span>
        )}
      </div>

      {/* Prompt */}
      <motion.div
        key={`prompt-${template.kind}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm p-4 space-y-3"
      >
        <p className="text-sm text-text-primary leading-relaxed">{prompt}</p>

        {/* Hints toggle */}
        {template.hints.length > 0 && !submitted && (
          <div className="space-y-2">
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center gap-1.5 text-[11px] text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3 h-3" />
              {showHints ? 'Hide hints' : 'Show hints'}
            </button>
            <AnimatePresence>
              {showHints && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1 pl-4 overflow-hidden"
                >
                  {template.hints.map((hint, i) => (
                    <p key={i} className="text-[11px] text-text-secondary leading-relaxed">
                      • {hint}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.div>

      {/* Response input */}
      <div className="space-y-2">
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder={placeholder}
          disabled={submitted}
          rows={6}
          className={`w-full rounded-xl border bg-dark-900/40 backdrop-blur-sm p-3 text-sm text-text-primary placeholder-text-faint resize-none focus:outline-none transition-all duration-300 ${
            submitted
              ? 'border-white/[0.06]'
              : 'border-white/[0.08] focus:border-accent/50 focus:shadow-[0_0_24px_-8px_rgba(99,102,241,0.3)]'
          }`}
          style={{ fontSize: '16px' }}
        />
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-text-muted">
            {response.trim().length} / {template.minChars}+ characters
          </span>
          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 ${
                canSubmit
                  ? 'btn-glow bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_6px_24px_-6px_rgba(99,102,241,0.5)] hover:shadow-[0_8px_32px_-6px_rgba(99,102,241,0.6)]'
                  : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
              }`}
            >
              Submit
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Model answer reveal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {/* Strong reasoning criteria */}
            <div className="rounded-xl border border-green/20 bg-green/[0.04] p-4 space-y-2">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green" />
                <h3 className="text-[11px] font-semibold text-green uppercase tracking-wide">
                  Strong reasoning includes
                </h3>
              </div>
              <ul className="space-y-1.5 pl-1">
                {content.strongReasoningIncludes.map((criterion, i) => (
                  <li key={i} className="flex gap-2 text-[12px] text-text-primary leading-relaxed">
                    <span className="text-green shrink-0">✓</span>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-text-muted pt-1">
                Re-read your response and ask: did I cover these?
              </p>
            </div>

            {/* Model analysis */}
            <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-4 space-y-2">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent-light" />
                <h3 className="text-[11px] font-semibold text-accent-light uppercase tracking-wide">
                  One way to think about it
                </h3>
              </div>
              <p className="text-[12px] text-text-primary leading-relaxed whitespace-pre-wrap">
                {content.modelAnswer}
              </p>
              <p className="text-[10px] text-text-muted pt-1 italic">
                This isn't the "right answer" — it's a model for what a strong response could look like. Your reasoning may be better, or focus on different angles.
              </p>
            </div>

            {/* Next button */}
            <button
              onClick={onDone}
              className="btn-glow w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white text-sm font-bold cursor-pointer shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)] transition-shadow duration-300"
            >
              {stepNumber === totalSteps ? 'Finish Analysis' : 'Next Step'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
