import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { glossary } from '../data/glossary';

const categories = [
  { id: 'valuation', label: 'Valuation Metrics' },
  { id: 'financial', label: 'Financial Metrics' },
  { id: 'technical', label: 'Technical Indicators' },
  { id: 'market', label: 'Market Concepts' },
] as const;

export default function GlossarySection() {
  const [activeCategory, setActiveCategory] = useState<string>('valuation');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = glossary.filter((t) => t.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setExpandedTerm(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-accent/20 text-accent-light border border-accent/30'
                : 'bg-dark-700 text-text-secondary border border-border hover:border-dark-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filteredTerms.map((term) => {
          const isExpanded = expandedTerm === term.term;
          return (
            <div
              key={term.term}
              className="rounded-xl border border-border bg-dark-700 overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedTerm(isExpanded ? null : term.term)
                }
                className="w-full flex items-center justify-between p-4 text-left cursor-pointer hover:bg-dark-600 transition-colors"
              >
                <span className="text-sm font-semibold text-text-primary">
                  {term.term}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-text-muted transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-3 border-t border-border pt-3">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {term.definition}
                      </p>
                      {term.formula && (
                        <div className="rounded-lg bg-dark-800 border border-border p-3">
                          <p className="text-xs text-text-muted mb-1 uppercase tracking-wider font-medium">
                            Formula
                          </p>
                          <p className="text-sm text-accent-light font-mono">
                            {term.formula}
                          </p>
                        </div>
                      )}
                      {term.example && (
                        <div className="rounded-lg bg-accent/5 border border-accent/10 p-3">
                          <p className="text-xs text-accent-light mb-1 uppercase tracking-wider font-medium">
                            Example
                          </p>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {term.example}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
