import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BookOpen, Brain, Zap, CheckCircle2, Lock, GraduationCap } from 'lucide-react';
import { companies } from '../data/companies';
import ProgressTracker from '../components/ProgressTracker';
import { useProgress } from '../hooks/useProgress';
import { TIERS } from '../data/lessonTypes';
import { getModulesByTier } from '../data/modules';

const investmentTypeColors: Record<string, string> = {
  'High Expectations Growth': 'bg-green/10 text-green border-green/20',
  'Margin Expansion Story': 'bg-amber/10 text-amber border-amber/20',
  'Quality Compounder': 'bg-accent/10 text-accent-light border-accent/20',
  'Mature Tech Compounder': 'bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/20',
  'Cyclical Leader': 'bg-[#003087]/10 text-[#6b9fff] border-[#003087]/30',
  'Toll Booth Monopoly': 'bg-[#1a1f71]/10 text-[#8b8fff] border-[#1a1f71]/30',
  'Platform Transformation': 'bg-[#0071dc]/10 text-[#5ba8ff] border-[#0071dc]/30',
};

// Load lesson progress from localStorage
function getLessonCompletionCount(moduleId: string): number {
  try {
    const stored = localStorage.getItem('stocklens_lessons');
    if (!stored) return 0;
    const data = JSON.parse(stored);
    const moduleData = data[moduleId];
    if (!moduleData) return 0;
    return Object.values(moduleData).filter((s: unknown) => (s as { submitted?: boolean })?.submitted).length;
  } catch {
    return 0;
  }
}

export default function HomePage() {
  const { getScorecard, getCompanyProgress } = useProgress();
  const scorecard = getScorecard();
  const modulesByTier = getModulesByTier();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <GraduationCap className="w-3.5 h-3.5 text-accent-light" />
              <span className="text-xs font-medium text-accent-light">
                Interactive Investment Training
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6">
              Learn to think like
              <br />
              <span className="text-accent-light">an investor</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mb-4">
              Don't just read about investing — practice it. Answer real questions,
              get scored feedback, and build genuine analytical skill.
            </p>
            <p className="text-base text-text-muted leading-relaxed max-w-2xl">
              Progress through 4 tiers from fundamentals to expert-level synthesis.
              Each lesson tests your thinking before revealing the answer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: BookOpen,
              title: 'Read the evidence',
              desc: 'Each lesson presents real data — revenue, margins, trends, competitive dynamics — then asks you a question.',
            },
            {
              icon: TrendingUp,
              title: 'Think first, then learn',
              desc: 'Answer before seeing the framework answer. Get scored feedback: what you got right, what was missing, how to think sharper.',
            },
            {
              icon: Brain,
              title: 'Build real skill',
              desc: 'Progress through tiers as your scores improve. Each company teaches different investing concepts through varied question types.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-dark-800 p-5 flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <item.icon className="w-4.5 h-4.5 text-accent-light" />
              </div>
              <h3 className="text-base font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Learning Path / Tier Map ── */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Learning Path
          </h2>
          <p className="text-text-secondary mb-8">
            Master investing concepts tier by tier. Complete lessons to unlock the next level.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {TIERS.map((tier, tierIdx) => {
            const modules = modulesByTier[tier.id] || [];
            const isLocked = tierIdx > 0 && modules.length === 0; // Future tiers with no modules yet
            const hasModules = modules.length > 0;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: tierIdx * 0.08 }}
              >
                {/* Tier header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                  <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                    {tier.label}
                  </h3>
                  {isLocked && <Lock className="w-3.5 h-3.5 text-text-muted" />}
                  <span className="text-xs text-text-muted">
                    {tier.description}
                  </span>
                </div>

                {hasModules ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {modules.map((mod) => {
                      const completed = getLessonCompletionCount(mod.id);
                      const total = mod.lessons.length;
                      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
                      const isModComplete = completed === total;

                      return (
                        <Link
                          key={mod.id}
                          to={`/learn/${mod.id}`}
                          className="group block rounded-2xl border border-border bg-dark-800 p-5 no-underline transition-all duration-300 hover:border-dark-400 hover:bg-dark-700"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 relative"
                              style={{ backgroundColor: `${mod.color}15` }}
                            >
                              {mod.logo}
                              {isModComplete && (
                                <CheckCircle2 className="w-4 h-4 text-green absolute -top-1 -right-1" />
                              )}
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-text-primary">
                                {mod.name}
                              </h4>
                              <p className="text-xs text-text-muted">
                                {mod.ticker} · {total} lessons
                              </p>
                            </div>
                          </div>

                          <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
                            {mod.description}
                          </p>

                          {/* Progress bar */}
                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[11px] text-text-muted font-medium">
                                {completed}/{total} completed
                              </span>
                              <span className="text-[11px] text-text-muted">{pct}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-dark-600 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: mod.color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: mod.color }}>
                            {completed === 0 ? 'Start learning' : isModComplete ? 'Review lessons' : 'Continue'}
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-dark-500 bg-dark-800/50 px-6 py-8 text-center">
                    <Lock className="w-5 h-5 text-text-muted mx-auto mb-2" />
                    <p className="text-sm text-text-muted">
                      More companies coming soon. Complete earlier tiers to unlock.
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <ProgressTracker scorecard={scorecard} />
      </section>

      {/* Company Cards (existing deep-dive experiences) */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Deep Dive Analyses
          </h2>
          <p className="text-text-secondary mb-8">
            Interactive company case studies. Each walks you through a full investment thesis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company, i) => {
            const compProgress = getCompanyProgress(company.id);
            const isCompleted = !!compProgress.completedAt;
            const isStarted = compProgress.sectionsCompleted.length > 0 || !!compProgress.decision;

            return (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                to={`/company/${company.id}`}
                className="group block rounded-2xl border border-border bg-dark-800 p-6 no-underline transition-all duration-300 hover:border-dark-400 hover:bg-dark-700 h-full"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 relative"
                    style={{ backgroundColor: `${company.color}15` }}
                  >
                    {company.logo}
                    {isCompleted && (
                      <CheckCircle2 className="w-4 h-4 text-green absolute -top-1 -right-1" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {company.name}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {company.ticker}
                      {isStarted && !isCompleted && ' · In progress'}
                      {isCompleted && ' · Completed'}
                    </p>
                  </div>
                </div>

                {/* Investment Type Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${
                      investmentTypeColors[company.investmentType] ||
                      'bg-dark-700 text-text-secondary border-border'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    {company.investmentType}
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-1">
                  {company.sector}
                </p>
                <p className="text-sm text-text-muted italic mb-4 line-clamp-2">
                  "{company.tagline}"
                </p>
                <div className="flex items-center gap-2 text-accent-light text-sm font-medium group-hover:gap-3 transition-all">
                  Start analysis
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            StockLens — A learning tool, not financial advice.
          </p>
          <p className="text-sm text-text-muted">
            Data is illustrative and hardcoded for demo purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
