import { useMemo, useState } from 'react';
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
  History,
  ChevronDown,
  ChevronUp,
  Trash2,
} from 'lucide-react';
import { getCompanyById, WORKFLOW_STEPS } from '../data/companies';
import AnalystStepComponent from '../components/analyst/AnalystStepComponent';
import {
  clearCompanyResponses,
  getCompanyResponses,
  markAnalysisComplete,
  saveAnalystResponse,
  type SavedAnalystResponse,
} from '../lib/progression';

type Phase = 'intro' | 'running' | 'complete';

export default function AnalystSession() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = id ? getCompanyById(id) : undefined;

  const [phase, setPhase] = useState<Phase>('intro');
  const [stepIndex, setStepIndex] = useState(0);
  const [savedResponses, setSavedResponses] = useState<Record<string, SavedAnalystResponse>>(
    () => (id ? getCompanyResponses(id) : {}),
  );
  const [showPastAnswers, setShowPastAnswers] = useState(false);

  const hasPriorWork = Object.keys(savedResponses).length > 0;
  const priorStepCount = Object.keys(savedResponses).length;
  const lastActivity = useMemo(() => {
    const stamps = Object.values(savedResponses).map((r) => r.submittedAt);
    if (stamps.length === 0) return null;
    const latest = stamps.sort().at(-1);
    if (!latest) return null;
    return new Date(latest).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }, [savedResponses]);

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
    // Resume at first unanswered step if the user has prior work; otherwise start fresh.
    const firstUnanswered = WORKFLOW_STEPS.findIndex((t) => !savedResponses[t.kind]);
    setStepIndex(firstUnanswered === -1 ? 0 : firstUnanswered);
  }

  function handleStepSubmit(text: string) {
    if (!currentTemplate) return;
    saveAnalystResponse(company!.id, currentTemplate.kind, text);
    setSavedResponses((prev) => ({
      ...prev,
      [currentTemplate.kind]: { text, submittedAt: new Date().toISOString() },
    }));
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
    // Preserve saved responses on redo — the user may want them as drafts to revise.
    setPhase('intro');
    setStepIndex(0);
  }

  function handleClearResponses() {
    if (!company) return;
    const ok = window.confirm(
      `Clear your saved responses for ${company.name}? This can't be undone.`,
    );
    if (!ok) return;
    clearCompanyResponses(company.id);
    setSavedResponses({});
    setShowPastAnswers(false);
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

              {/* Past answers — only shown if the user has prior saved responses */}
              {hasPriorWork && (
                <div className="rounded-xl border border-warm/20 bg-warm/[0.04] p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <History className="w-3.5 h-3.5 text-warm" />
                      <h2 className="text-[11px] font-semibold text-warm uppercase tracking-wide">
                        Your Prior Work
                      </h2>
                    </div>
                    <span className="text-[10px] text-text-muted">
                      {priorStepCount} of {totalSteps} step{priorStepCount === 1 ? '' : 's'} · last saved {lastActivity}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    You've worked on this before. Your previous answers are saved as drafts — you can review them below, edit and resubmit, or keep what you wrote.
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setShowPastAnswers((s) => !s)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-dark-800 border border-border hover:border-border-light text-[11px] text-text-primary font-semibold cursor-pointer transition-colors"
                    >
                      {showPastAnswers ? (
                        <>
                          <ChevronUp className="w-3 h-3" />
                          Hide past answers
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3 h-3" />
                          Review past answers
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleClearResponses}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-dark-800 border border-border hover:border-red/40 text-[11px] text-text-muted hover:text-red font-semibold cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      Start Fresh
                    </button>
                  </div>
                  <AnimatePresence>
                    {showPastAnswers && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-2 overflow-hidden"
                      >
                        {WORKFLOW_STEPS.map((t, i) => {
                          const saved = savedResponses[t.kind];
                          if (!saved) return null;
                          return (
                            <div
                              key={t.kind}
                              className="rounded-lg border border-border bg-dark-900/60 p-3 space-y-1.5"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-mono text-text-muted">
                                    {i + 1}.
                                  </span>
                                  <span className="text-[11px] font-semibold text-text-primary">
                                    {t.title}
                                  </span>
                                </div>
                                <span className="text-[9px] text-text-faint">
                                  {new Date(saved.submittedAt).toLocaleDateString(undefined, {
                                    month: 'short',
                                    day: 'numeric',
                                  })}
                                </span>
                              </div>
                              <p className="text-[11px] text-text-secondary leading-relaxed whitespace-pre-wrap">
                                {saved.text}
                              </p>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                {hasPriorWork ? (priorStepCount === totalSteps ? 'Review & Revise' : 'Resume Analysis') : 'Start Analysis'}
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
                key={currentTemplate.kind}
                template={currentTemplate}
                content={currentContent}
                companyName={company.name}
                stepNumber={stepIndex + 1}
                totalSteps={totalSteps}
                savedResponse={savedResponses[currentTemplate.kind]?.text}
                onSubmit={handleStepSubmit}
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
