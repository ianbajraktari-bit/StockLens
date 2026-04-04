import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenLine, CheckCircle2, Lightbulb } from 'lucide-react';

interface ThinkingStepProps {
  companyName: string;
  prompt: string;
  modelAnswer: string;
  strongReasoningPoints: string[];
}

export default function ThinkingStep({
  companyName,
  prompt,
  modelAnswer,
  strongReasoningPoints,
}: ThinkingStepProps) {
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = response.trim().length >= 10;

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <PenLine className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
        <div>
          <h4 className="font-semibold text-text-primary mb-1">
            Pause and think: {companyName}
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            {prompt}
          </p>
        </div>
      </div>

      {!submitted ? (
        <div className="space-y-3">
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write 1–2 sentences explaining your view..."
            rows={3}
            className="w-full rounded-xl border border-border bg-dark-700 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 resize-none"
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-text-muted">
              {response.trim().length < 10
                ? 'Write at least a couple of sentences.'
                : 'Ready to submit.'}
            </p>
            <button
              onClick={() => setSubmitted(true)}
              disabled={!canSubmit}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer
                ${
                  canSubmit
                    ? 'bg-accent/20 border border-accent/30 text-accent-light hover:bg-accent/30'
                    : 'bg-dark-700 border border-border text-text-muted cursor-not-allowed'
                }`}
            >
              Submit my thinking
            </button>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* User's response shown back */}
            <div className="rounded-xl border border-border bg-dark-700 p-4">
              <p className="text-xs text-text-muted mb-2 font-medium uppercase tracking-wider">
                Your response
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {response}
              </p>
            </div>

            {/* Model answer */}
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-light" />
                <p className="text-sm font-semibold text-accent-light">
                  Example of strong reasoning
                </p>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {modelAnswer}
              </p>
            </div>

            {/* What strong reasoning includes */}
            <div className="rounded-xl border border-border bg-dark-800 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-amber" />
                <p className="text-sm font-semibold text-text-primary">
                  What strong reasoning should include
                </p>
              </div>
              <ul className="space-y-2">
                {strongReasoningPoints.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed pl-4 border-l-2 border-accent/20"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
