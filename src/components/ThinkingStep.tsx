import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Company } from '../data/types';

interface ThinkingStepProps {
  company: Company;
}

export default function ThinkingStep({ company }: ThinkingStepProps) {
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { prompt, modelAnswer, strongReasoningIncludes } =
    company.thinkingStep;

  return (
    <div className="space-y-5">
      <p className="text-text-secondary leading-relaxed text-base">{prompt}</p>

      {!submitted ? (
        <div className="space-y-4">
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your investor view here..."
            rows={3}
            className="w-full rounded-xl border border-border bg-dark-700 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-y"
          />
          <button
            onClick={() => setSubmitted(true)}
            disabled={response.trim().length === 0}
            className="rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit my view
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          {/* User's response shown back */}
          <div className="rounded-xl border border-border bg-dark-700 p-5">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Your response
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {response}
            </p>
          </div>

          {/* Model answer */}
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
            <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-2">
              Model answer
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {modelAnswer}
            </p>
          </div>

          {/* What strong reasoning includes */}
          <div className="rounded-xl border border-border bg-dark-700 p-5">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              Strong reasoning includes
            </p>
            <ul className="space-y-2">
              {strongReasoningIncludes.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-text-secondary leading-relaxed flex items-start gap-2"
                >
                  <span className="text-accent-light mt-0.5 shrink-0">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
