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
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-signal/10 border border-accent/25 flex items-center justify-center shadow-[0_0_20px_-4px_rgba(99,102,241,0.3)]">
              <Target className="w-6 h-6 text-accent-light" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold text-text-primary tracking-tight">Analyst Mode</h1>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-gradient-to-r from-accent/15 to-signal/10 text-accent-light font-bold uppercase tracking-[0.12em] border border-accent/20">
                  Capstone
                </span>
              </div>
              <p className="text-xs text-text-muted">Apply everything you've learned to real companies</p>
            </div>
          </div>

          <div className="rounded-2xl border border-accent/15 bg-gradient-to-br from-accent/[0.06] to-transparent p-4 space-y-2 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent-light" />
              <h2 className="text-[11px] font-semibold text-accent-light uppercase tracking-wide">
                How this works
              </h2>
            </div>
            <p className="text-xs text-text-primary leading-relaxed">
              Pick a company. Walk through 7 steps — Business, Drivers, Moat, Risks, Valuation, Thesis, Verdict. Write your own answer for each, then compare against a model analysis. No grading — this is a training ground for your own reasoning. The goal is that when you finish a company in here, you've actually thought through it as an investor would.
            </p>
          </div>

          {/* Completion status */}
          {(completed.size > 0 || inProgressCount > 0) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
              {completed.size > 0 && (
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-green" />
                  <span className="text-text-secondary">
                    {completed.size} of {allCompanies.length} analyzed
                  </span>
                </div>
              )}
              {inProgressCount > 0 && (
                <div className="flex items-center gap-1.5">
                  <Pencil className="w-3.5 h-3.5 text-warm" />
                  <span className="text-text-secondary">
                    {inProgressCount} in progress
                  </span>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Company list */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
            Companies
          </h2>
          <div className="space-y-2">
            {allCompanies.map((c, i) => renderCompanyCard(c, i))}
          </div>
        </section>

        <div className="text-center py-6 border-t border-border">
          <p className="text-[10px] text-text-faint">
            Analyst Mode — self-assessed reasoning practice. Not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
