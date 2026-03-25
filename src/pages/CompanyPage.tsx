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
} from 'lucide-react';
import { getCompanyById } from '../data/companies';
import SectionCard from '../components/SectionCard';
import MetricCard from '../components/MetricCard';
import RevenueBar from '../components/RevenueBar';
import PriceChart from '../components/PriceChart';
import DecisionPanel from '../components/DecisionPanel';

export default function CompanyPage() {
  const { id } = useParams<{ id: string }>();
  const company = id ? getCompanyById(id) : undefined;

  if (!company) return <Navigate to="/" replace />;

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
            <p className="text-lg text-text-secondary italic">
              "{company.tagline}"
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-text-muted">
              <Activity className="w-4 h-4" />
              <span>
                7 sections · ~10 min read · Interactive decision at the end
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analysis Sections */}
      <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
        {/* 1. Business Overview */}
        <SectionCard
          step={1}
          title="Understand the Business"
          subtitle="What does this company actually do?"
          icon={<Building2 className="w-5 h-5" />}
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
        </SectionCard>

        {/* 2. Key Financials */}
        <SectionCard
          step={2}
          title="Read the Financials"
          subtitle="Key numbers and what they actually mean"
          icon={<BarChart3 className="w-5 h-5" />}
        >
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
        </SectionCard>

        {/* 3. Valuation */}
        <SectionCard
          step={3}
          title="Think About Valuation"
          subtitle="Is the price reasonable for what you're getting?"
          icon={<Scale className="w-5 h-5" />}
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
            <div className="rounded-xl bg-dark-700 border border-border p-5">
              <h4 className="text-sm font-semibold text-text-primary mb-2">
                The Bottom Line on Valuation
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {company.valuation.summary}
              </p>
            </div>
          </div>
        </SectionCard>

        {/* 4. Bull vs Bear */}
        <SectionCard
          step={4}
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

        {/* 5. Market Expectations */}
        <SectionCard
          step={5}
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
              </div>
              <div className="rounded-xl border border-border bg-dark-700 p-5">
                <p className="text-sm text-text-muted mb-1">
                  Analyst Consensus
                </p>
                <p className="text-lg font-semibold text-text-primary">
                  {company.marketExpectations.analystConsensus}
                </p>
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

        {/* 6. Technical Context */}
        <SectionCard
          step={6}
          title="How the Stock Has Been Behaving"
          subtitle="Price context — not as a trading signal, but to understand market sentiment"
          icon={<Activity className="w-5 h-5" />}
        >
          <div className="space-y-6">
            <PriceChart
              data={company.technicalContext.priceHistory}
              color={company.color}
            />

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
          </div>
        </SectionCard>

        {/* 7. Your Decision */}
        <SectionCard
          step={7}
          title="Make Your Decision"
          subtitle="Now that you've done the work, what do you think?"
          icon={<Target className="w-5 h-5" />}
        >
          <DecisionPanel company={company} />
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
            All data is illustrative and hardcoded for demonstration.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
