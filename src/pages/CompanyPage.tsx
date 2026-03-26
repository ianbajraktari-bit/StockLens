import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  BarChart3,
  Scale,
  Swords,
  Globe,
  Activity,
  Target,
  Zap,
  TrendingUp as TrendUp,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
} from 'lucide-react';
import { getCompanyById } from '../data/companies';
import SectionCard from '../components/SectionCard';
import MetricCard from '../components/MetricCard';
import RevenueBar from '../components/RevenueBar';
import PriceChart from '../components/PriceChart';
import ThinkFirstCard from '../components/ThinkFirstCard';
import LiveQuote from '../components/LiveQuote';
import SourceBadge from '../components/SourceBadge';
import ScenarioSliders from '../components/ScenarioSliders';
import ValuationImplied from '../components/ValuationImplied';
import ReflectionPrompt from '../components/ReflectionPrompt';
import { useProgress } from '../hooks/useProgress';

const categoryLabels: Record<string, string> = {
  industry: 'Industry',
  macro: 'Macro',
  geopolitical: 'Geopolitical',
  'company-specific': 'Company',
};

const categoryColors: Record<string, string> = {
  industry: 'bg-accent/15 text-accent-light border-accent/20',
  macro: 'bg-amber/15 text-amber border-amber/20',
  geopolitical: 'bg-red/15 text-red border-red/20',
  'company-specific': 'bg-green/15 text-green border-green/20',
};

export default function CompanyPage() {
  const { id } = useParams<{ id: string }>();
  const company = id ? getCompanyById(id) : undefined;
  const {
    getCompanyProgress,
    markSectionCompleted,
    saveThinkFirstAnswer,
    saveDecision,
    saveReflections,
    saveScenarioConfig,
  } = useProgress();

  if (!company) return <Navigate to="/" replace />;

  const progress = getCompanyProgress(company.id);

  return (
    <div className="min-h-screen pt-16">
      {/* Company Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${company.color}, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${company.color}15` }}
              >
                {company.logo}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  {company.name}
                </h1>
                <p className="text-text-muted">
                  {company.ticker} · {company.sector}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold border"
                style={{
                  backgroundColor: `${company.color}12`,
                  borderColor: `${company.color}30`,
                  color: company.color,
                }}
              >
                <Zap className="w-3.5 h-3.5" />
                {company.investmentType}
              </span>
            </div>

            <p className="text-lg text-text-secondary italic mb-4">
              "{company.tagline}"
            </p>

            {/* Live Quote */}
            <div className="mt-6">
              <LiveQuote ticker={company.ticker} companyColor={company.color} />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-text-muted">
              <Activity className="w-4 h-4" />
              <span>
                Interactive analysis · Think first, then reveal · ~15 min
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analysis Sections */}
      <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
        {/* 1. Business Overview — Think First */}
        <SectionCard
          step={1}
          title="Understand the Business"
          subtitle="What does this company actually do?"
          icon={<Building2 className="w-5 h-5" />}
        >
          <ThinkFirstCard
            questionId="businessRisk"
            question={company.thinkFirstQuestions.businessRisk}
            hint="Consider competition, regulation, technology shifts, and customer behavior."
            savedAnswer={progress.thinkFirstAnswers.businessRisk}
            onAnswer={(qId, answer) => {
              saveThinkFirstAnswer(company.id, qId, answer);
              markSectionCompleted(company.id, 'business');
            }}
          >
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed text-base">
                {company.business.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {company.business.howItMakesMoneyTitle}
                </h3>
                <div className="space-y-5">
                  {company.business.revenueStreams.map((stream) => (
                    <RevenueBar
                      key={stream.name}
                      name={stream.name}
                      percentage={stream.percentage}
                      description={stream.description}
                      color={company.color}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-accent/5 border border-accent/10 p-5">
                <h4 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-2">
                  Competitive Advantage
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {company.business.competitiveAdvantage}
                </p>
              </div>
            </div>
          </ThinkFirstCard>
        </SectionCard>

        {/* 2. What Matters Right Now */}
        <SectionCard
          step={2}
          title="What Matters Right Now"
          subtitle="The key drivers investors are watching most closely"
          icon={<Zap className="w-5 h-5" />}
        >
          <div className="space-y-4">
            {company.whatMattersNow.drivers.map((driver, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-dark-700 p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[driver.category]}`}
                  >
                    {categoryLabels[driver.category]}
                  </span>
                  <h4 className="text-sm font-semibold text-text-primary">
                    {driver.label}
                  </h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* 3. What Changed — Think First */}
        <SectionCard
          step={3}
          title="What Changed"
          subtitle="How the investment narrative is evolving"
          icon={<TrendUp className="w-5 h-5" />}
        >
          <ThinkFirstCard
            questionId="narrativeShift"
            question={company.thinkFirstQuestions.narrativeShift}
            hint="Think about what the market believed 6-12 months ago versus today."
            savedAnswer={progress.thinkFirstAnswers.narrativeShift}
            onAnswer={(qId, answer) => {
              saveThinkFirstAnswer(company.id, qId, answer);
              markSectionCompleted(company.id, 'whatChanged');
            }}
          >
            <div className="space-y-5">
              <p className="text-text-secondary leading-relaxed text-base">
                {company.whatChanged.summary}
              </p>
              <div className="space-y-3">
                {company.whatChanged.changes.map((change, i) => {
                  const directionIcon =
                    change.direction === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-green" />
                    ) : change.direction === 'negative' ? (
                      <ArrowDownRight className="w-4 h-4 text-red" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-amber" />
                    );
                  const directionBorder =
                    change.direction === 'positive'
                      ? 'border-l-green/50'
                      : change.direction === 'negative'
                        ? 'border-l-red/50'
                        : 'border-l-amber/50';

                  return (
                    <div
                      key={i}
                      className={`rounded-xl border border-border bg-dark-700 p-5 ${directionBorder}`}
                      style={{ borderLeftWidth: '3px' }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {directionIcon}
                        <h4 className="text-sm font-semibold text-text-primary">
                          {change.label}
                        </h4>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {change.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ThinkFirstCard>
        </SectionCard>

        {/* 4. Key Financials */}
        <SectionCard
          step={4}
          title="Read the Financials"
          subtitle="Key numbers and what they actually mean"
          icon={<BarChart3 className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <SourceBadge
                source={`${company.name} filings`}
                date={company.lastUpdated}
                label="reported"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {company.financials.metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  explanation={metric.explanation}
                  sentiment={metric.sentiment}
                />
              ))}
            </div>
          </div>
        </SectionCard>

        {/* 5. Valuation — Think First + Scenario Tool */}
        <SectionCard
          step={5}
          title="Think About Valuation"
          subtitle="Is the price reasonable for what you're getting?"
          icon={<Scale className="w-5 h-5" />}
        >
          <ThinkFirstCard
            questionId="valuationView"
            question={company.thinkFirstQuestions.valuationView}
            hint="Consider what the price implies about future growth, margins, and competitive position."
            savedAnswer={progress.thinkFirstAnswers.valuationView}
            onAnswer={(qId, answer) => {
              saveThinkFirstAnswer(company.id, qId, answer);
              markSectionCompleted(company.id, 'valuation');
            }}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {company.valuation.metrics.map((metric) => (
                  <MetricCard
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    explanation={metric.explanation}
                    industryAvg={metric.industryAvg}
                  />
                ))}
              </div>

              {/* Valuation Implications */}
              <ValuationImplied
                companyName={company.name}
                currentPE={company.valuationImplied.currentPE}
                implications={company.valuationImplied.implications}
                summary={company.valuationImplied.summary}
              />

              <div className="rounded-xl bg-dark-700 border border-border p-5">
                <h4 className="text-sm font-semibold text-text-primary mb-2">
                  The Bottom Line on Valuation
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {company.valuation.summary}
                </p>
              </div>
            </div>
          </ThinkFirstCard>
        </SectionCard>

        {/* 6. Scenario Builder */}
        <SectionCard
          step={6}
          title="Build Your Scenario"
          subtitle="Adjust assumptions and see how they affect the implied outcome"
          icon={<BarChart3 className="w-5 h-5" />}
        >
          <ScenarioSliders
            companyName={company.name}
            currentRevenue={company.scenarioDefaults.currentRevenue}
            currentMargin={company.scenarioDefaults.currentMargin}
            currentMultiple={company.scenarioDefaults.currentMultiple}
            currentMarketCap={company.scenarioDefaults.currentMarketCap}
            defaults={progress.scenarioConfig ?? undefined}
            onConfigChange={(config) =>
              saveScenarioConfig(company.id, config)
            }
          />
        </SectionCard>

        {/* 7. Bull vs Bear */}
        <SectionCard
          step={7}
          title="Weigh the Arguments"
          subtitle="Every investment has two sides — here's each case made honestly"
          icon={<Swords className="w-5 h-5" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-green/20 bg-green/5 p-5">
              <h3 className="text-green font-semibold mb-4 flex items-center gap-2">
                <span className="text-lg">↑</span> {company.bullCase.title}
              </h3>
              <ul className="space-y-3">
                {company.bullCase.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed pl-4 border-l-2 border-green/30"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red/20 bg-red/5 p-5">
              <h3 className="text-red font-semibold mb-4 flex items-center gap-2">
                <span className="text-lg">↓</span> {company.bearCase.title}
              </h3>
              <ul className="space-y-3">
                {company.bearCase.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed pl-4 border-l-2 border-red/30"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* 8. Market Expectations */}
        <SectionCard
          step={8}
          title="What's Already Priced In"
          subtitle="Understanding what the market expects helps you find where it might be wrong"
          icon={<Globe className="w-5 h-5" />}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-dark-700 p-5">
                <p className="text-sm text-text-muted mb-1">Implied Growth</p>
                <p className="text-lg font-semibold text-text-primary">
                  {company.marketExpectations.impliedGrowth}
                </p>
                <SourceBadge source="Consensus estimates" label="consensus" />
              </div>
              <div className="rounded-xl border border-border bg-dark-700 p-5">
                <p className="text-sm text-text-muted mb-1">
                  Analyst Consensus
                </p>
                <p className="text-lg font-semibold text-text-primary">
                  {company.marketExpectations.analystConsensus}
                </p>
                <SourceBadge source="Wall Street consensus" label="consensus" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-dark-700 p-5">
                <h4 className="text-sm font-semibold text-text-primary mb-3">
                  Already priced in
                </h4>
                <ul className="space-y-2">
                  {company.marketExpectations.pricedIn.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-text-muted mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                <h4 className="text-sm font-semibold text-accent-light mb-3">
                  Not yet priced in (potential catalysts)
                </h4>
                <ul className="space-y-2">
                  {company.marketExpectations.notPricedIn.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-accent-light mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 9. Stock Behavior — Narrative Chart */}
        <SectionCard
          step={9}
          title="How the Stock Has Been Behaving"
          subtitle="What the market believed at each move, not just the price"
          icon={<Activity className="w-5 h-5" />}
        >
          <div className="space-y-6">
            <PriceChart
              data={company.technicalContext.priceHistory}
              color={company.color}
            />

            {/* Chart narrative */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-text-primary mb-2">
                What drove the moves
              </h4>
              {company.chartNarrative.map((event, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="text-text-muted font-mono text-xs shrink-0 mt-0.5 w-16">
                    {event.month}
                  </span>
                  <p className="text-text-secondary leading-relaxed">
                    {event.event}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-dark-700 p-4">
                <p className="text-sm text-text-muted mb-1">RSI</p>
                <p className="text-2xl font-bold text-text-primary">
                  {company.technicalContext.rsi}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {company.technicalContext.rsi > 70
                    ? 'Overbought territory'
                    : company.technicalContext.rsi < 30
                      ? 'Oversold territory'
                      : 'Neutral range'}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-dark-700 p-4 sm:col-span-2">
                <p className="text-sm text-text-muted mb-1">What this means</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {company.technicalContext.rsiInterpretation}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-dark-700 p-4">
                <p className="text-sm font-medium text-text-primary mb-1">
                  Trend
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {company.technicalContext.trendDescription}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-dark-700 p-4">
                <p className="text-sm font-medium text-text-primary mb-1">
                  Volatility
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {company.technicalContext.volatilityNote}
                </p>
              </div>
            </div>

            <SourceBadge
              source="Hardcoded sample data"
              date={company.lastUpdated}
              label="estimated"
            />
          </div>
        </SectionCard>

        {/* 10. Your Decision — Enhanced with Reflections */}
        <SectionCard
          step={10}
          title="Make Your Decision"
          subtitle="Form a view, stress-test it, then compare with a framework answer"
          icon={<Target className="w-5 h-5" />}
        >
          <ReflectionPrompt
            company={company}
            savedDecision={progress.decision}
            savedReflections={progress.reflections}
            onDecision={(decision) => {
              saveDecision(company.id, decision);
              markSectionCompleted(company.id, 'decision');
            }}
            onReflections={(reflections) => {
              saveReflections(company.id, reflections);
              markSectionCompleted(company.id, 'reflections');
            }}
          />
        </SectionCard>

        {/* Page Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12 space-y-3"
        >
          <p className="text-sm text-text-muted">
            This analysis is for learning purposes only and does not constitute
            financial advice.
          </p>
          <p className="text-sm text-text-muted">
            Hardcoded data is illustrative. Live data sourced from Yahoo Finance
            where available.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
