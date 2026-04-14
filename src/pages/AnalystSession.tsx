import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Target,
  BarChart3,
  CheckCircle2,
  Award,
  RefreshCw,
  Home as HomeIcon,
} from 'lucide-react';
import { getCompanyById, WORKFLOW_STEPS } from '../data/companies';
import AnalystStepComponent from '../components/analyst/AnalystStepComponent';
import { markAnalysisComplete } from '../lib/progression';

type Phase = 'intro' | 'running' | 'complete';

export default function AnalystSession() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = id ? getCompanyById(id) : undefined;

  const [phase, setPhase] = useState<Phase>('intro');
  const [stepIndex, setStepIndex] = useState(0);

  if (!company) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-text-secondary">Company not found.</p>
          <button
            onClick={() => navigate('/analyst')}
            className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold cursor-pointer"
          >
            Back to Analyst Mode
          </button>
        </div>
      </div>
    );
  }

  const totalSteps = WORKFLOW_STEPS.length;
  const currentTemplate = WORKFLOW_STEPS[stepIndex];
  const currentContent = currentTemplate ? company.workflow[currentTemplate.kind] : null;
  const progressPct = ((stepIndex + (phase === 'complete' ? 1 : 0)) / totalSteps) * 100;

  function handleStart() {
    setPhase('running');
    setStepIndex(0);
  }

  function handleStepDone() {
    if (stepIndex < totalSteps - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      markAnalysisComplete(company!.id);
      setPhase('complete');
    }
  }

  function handleRedo() {
    setPhase('intro');
    setStepIndex(0);
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Back + progress bar (hidden during intro for clean look) */}
        {phase !== 'intro' && (
          <div className="space-y-3">
            <button
              onClick={() => navigate('/analyst')}
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Exit Analysis
            </button>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-dark-700 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-[10px] font-semibold text-text-secondary">
                {phase === 'complete' ? totalSteps : stepIndex + 1}/{totalSteps}
              </span>
            </div>
            {/* Step strip for orientation */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {WORKFLOW_STEPS.map((t, i) => {
                const done = phase === 'complete' || i < stepIndex;
                const current = phase === 'running' && i === stepIndex;
                return (
                  <div
                    key={t.kind}
                    className={`flex-1 min-w-0 text-[9px] text-center px-1.5 py-1 rounded border transition-colors ${
                      done
                        ? 'border-green/30 bg-green/5 text-green'
                        : current
                          ? 'border-accent/40 bg-accent/10 text-accent-light font-semibold'
                          : 'border-border bg-dark-800/50 text-text-muted'
                    }`}
                  >
                    {t.shortLabel}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* ------------------ INTRO ------------------ */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {/* Back to picker */}
              <button
                onClick={() => navigate('/analyst')}
                className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Pick a Different Company
              </button>

              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-dark-800 border border-border flex items-center justify-center text-3xl">
                    {company.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-xl font-bold text-text-primary tracking-tight">
                        {company.name}
                      </h1>
                      <span className="text-[11px] font-mono text-text-muted">({company.ticker})</span>
                    </div>
                    <p className="text-[11px] text-text-muted">{company.sector} • {company.dataAsOf}</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Key facts */}
              <div className="rounded-xl border border-border bg-dark-800/60 p-4 space-y-3">
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-accent-light" />
                  <h2 className="text-[11px] font-semibold text-text-secondary uppercase tracking-wide">
                    Key Facts
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {company.keyFacts.map((fact) => (
                    <div key={fact.label} className="space-y-0.5">
                      <p className="text-[10px] text-text-muted uppercase tracking-wide">
                        {fact.label}
                      </p>
                      <p className="text-sm font-semibold text-text-primary">{fact.value}</p>
                      <p className="text-[10px] text-text-muted leading-snug">{fact.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The workflow steps preview */}
              <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-4 space-y-3">
                <div className="flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-accent-light" />
                  <h2 className="text-[11px] font-semibold text-accent-light uppercase tracking-wide">
                    What You'll Do
                  </h2>
                </div>
                <ol className="space-y-1.5">
                  {WORKFLOW_STEPS.map((t, i) => (
                    <li key={t.kind} className="flex gap-3 text-xs text-text-primary">
                      <span className="text-text-muted shrink-0 font-mono">{i + 1}.</span>
                      <div className="flex-1">
                        <span className="font-semibold">{t.title}</span>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="text-[11px] text-text-muted leading-relaxed pt-1">
                  Each step is free-response. Write your own answer, then compare against a model analysis. This is reasoning practice, not grading.
                </p>
              </div>

              <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Start Analysis
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}

          {/* ------------------ RUNNING ------------------ */}
          {phase === 'running' && currentTemplate && currentContent && (
            <motion.div
              key={`step-${stepIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <AnalystStepComponent
                template={currentTemplate}
                content={currentContent}
                companyName={company.name}
                stepNumber={stepIndex + 1}
                totalSteps={totalSteps}
                onDone={handleStepDone}
              />
            </motion.div>
          )}

          {/* ------------------ COMPLETE ------------------ */}
          {phase === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              <div className="rounded-xl border border-green/30 bg-green/[0.06] p-6 space-y-3 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-green/15 border border-green/30 flex items-center justify-center">
                  <Award className="w-7 h-7 text-green" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-text-primary">
                    Analysis Complete
                  </h2>
                  <p className="text-xs text-text-secondary">
                    You just reasoned through {company.name} ({company.ticker}) end-to-end.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                  <span className="text-[11px] text-green font-semibold">
                    All 7 steps finished
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-dark-800/60 p-4 space-y-2">
                <h3 className="text-[11px] font-semibold text-text-secondary uppercase tracking-wide">
                  What to do next
                </h3>
                <ul className="space-y-1.5 text-xs text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-accent-light">→</span>
                    <span>Re-read your Thesis step. Is it specific enough to be wrong?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-light">→</span>
                    <span>Check {company.ticker}'s most recent 10-K on SEC EDGAR. Did you miss any risks?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-light">→</span>
                    <span>Pick another company. Repeating the workflow is what turns theory into reflex.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={handleRedo}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-dark-800 hover:bg-dark-700 text-text-primary text-sm font-semibold transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  Redo This Company
                </button>
                <button
                  onClick={() => navigate('/analyst')}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  Next Company
                </button>
              </div>

              <button
                onClick={() => navigate('/')}
                className="w-full flex items-center justify-center gap-1.5 text-xs text-text-muted hover:text-text-secondary cursor-pointer transition-colors py-2"
              >
                <HomeIcon className="w-3.5 h-3.5" />
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
