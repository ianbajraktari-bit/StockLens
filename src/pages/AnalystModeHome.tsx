import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Clock,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Pencil,
} from 'lucide-react';
import { allCompanies, WORKFLOW_STEPS, type CompanyProfile } from '../data/companies';
import { getCompanyResponseCount, getCompletedAnalyses } from '../lib/progression';

const DIFFICULTY_COLORS = {
  intro: 'text-accent-light bg-accent/10 border-accent/20',
  standard: 'text-warm bg-warm/10 border-warm/20',
  advanced: 'text-green bg-green/10 border-green/20',
} as const;

const DIFFICULTY_LABELS = {
  intro: 'Intro',
  standard: 'Standard',
  advanced: 'Advanced',
} as const;

export default function AnalystModeHome() {
  const navigate = useNavigate();
  const completed = getCompletedAnalyses();
  const inProgressCount = allCompanies.reduce((acc, c) => {
    if (completed.has(c.id)) return acc;
    return acc + (getCompanyResponseCount(c.id) > 0 ? 1 : 0);
  }, 0);

  function renderCompanyCard(c: CompanyProfile, index: number) {
    const isComplete = completed.has(c.id);
    const responseCount = getCompanyResponseCount(c.id);
    const totalSteps = WORKFLOW_STEPS.length;
    const inProgress = !isComplete && responseCount > 0;

    return (
      <motion.button
        key={c.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
        onClick={() => navigate(`/analyst/${c.id}`)}
        className="group w-full text-left rounded-2xl border border-white/[0.06] bg-dark-800/40 hover:bg-dark-800/70 hover:border-white/[0.1] p-4 transition-all duration-300 cursor-pointer backdrop-blur-sm relative overflow-hidden"
      >
        <div className="flex items-start gap-3">
          {/* Emoji / logo block */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
              isComplete
                ? 'bg-green/10 border border-green/20'
                : inProgress
                  ? 'bg-warm/10 border border-warm/20'
                  : 'bg-dark-700 border border-border'
            }`}
          >
            {isComplete ? (
              <CheckCircle2 className="w-6 h-6 text-green" />
            ) : inProgress ? (
              <Pencil className="w-5 h-5 text-warm" />
            ) : (
              c.emoji
            )}
          </div>

          <div className="flex-1 min-w-0 space-y-2">
            {/* Title row */}
            <div className="flex items-start gap-2 justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-semibold text-text-primary">{c.name}</h3>
                  <span className="text-[10px] font-mono text-text-muted">{c.ticker}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full border font-semibold ${DIFFICULTY_COLORS[c.difficulty]}`}>
                    {DIFFICULTY_LABELS[c.difficulty]}
                  </span>
                </div>
                <p className="text-[10px] text-text-muted mt-0.5">{c.sector}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-colors shrink-0" />
            </div>

            {/* One-liner */}
            <p className="text-xs text-text-secondary leading-relaxed">{c.oneLiner}</p>

            {/* Meta */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1 text-[10px] text-text-muted">
                <Clock className="w-3 h-3" />
                {c.estimatedMinutes}m
              </div>
              <div className="text-[10px] text-text-muted">
                {c.dataAsOf}
              </div>
              {inProgress && (
                <div className="flex items-center gap-1 text-[10px] text-warm font-semibold">
                  <Pencil className="w-3 h-3" />
                  {responseCount}/{totalSteps} saved
                </div>
              )}
              {isComplete && (
                <div className="flex items-center gap-1 text-[10px] text-green font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  Analyzed
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.button>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 relative">
      <div className="scene-mesh" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </motion.button>

        {/* Editorial header */}
        <section className="relative overflow-hidden py-8 sm:py-12">
          <div className="editorial-grid-bg" aria-hidden />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/[0.06] rounded-full blur-[100px] pointer-events-none" aria-hidden />

          <div className="relative z-10 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06]"
            >
              <Target className="w-3.5 h-3.5 text-accent-light" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-light/80">
                Capstone
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="text-3xl sm:text-4xl font-black tracking-tighter leading-[0.95] text-text-primary"
            >
              Analyst{' '}
              <span className="editorial-gradient-word">Mode</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto"
            >
              Pick a company. Walk through 7 steps — Business, Drivers, Moat, Risks,
              Valuation, Thesis, Verdict. Write your own analysis, then compare against
              a model answer.
            </motion.p>

            {/* Completion status */}
            {(completed.size > 0 || inProgressCount > 0) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs"
              >
                {completed.size > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green/20 bg-green/[0.06]">
                    <TrendingUp className="w-3.5 h-3.5 text-green" />
                    <span className="text-text-secondary font-medium">
                      {completed.size}/{allCompanies.length} analyzed
                    </span>
                  </div>
                )}
                {inProgressCount > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warm/20 bg-warm/[0.06]">
                    <Pencil className="w-3.5 h-3.5 text-warm" />
                    <span className="text-text-secondary font-medium">
                      {inProgressCount} in progress
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* How it works — compact info panel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-white/[0.06] bg-dark-800/40 backdrop-blur-sm p-4 space-y-2"
        >
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-light" />
            <h2 className="text-[11px] font-semibold text-accent-light uppercase tracking-wide">
              How this works
            </h2>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            No grading — this is a training ground for your own reasoning.
            The goal: when you finish a company here, you've actually thought
            through it as an investor would.
          </p>
        </motion.div>

        {/* Company list */}
        <section className="space-y-3">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">
            Choose a Company
          </h2>
          <div className="space-y-2">
            {allCompanies.map((c, i) => renderCompanyCard(c, i))}
          </div>
        </section>

        <div className="text-center py-6 border-t border-white/[0.04]">
          <p className="text-[10px] text-text-faint">
            Analyst Mode — self-assessed reasoning practice. Not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
