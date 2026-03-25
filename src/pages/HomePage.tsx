import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BookOpen, Brain, Zap } from 'lucide-react';
import { companies } from '../data/companies';

const investmentTypeColors: Record<string, string> = {
  'High Expectations Growth': 'bg-green/10 text-green border-green/20',
  'Margin Expansion Story': 'bg-amber/10 text-amber border-amber/20',
  'Quality Compounder': 'bg-accent/10 text-accent-light border-accent/20',
  'Mature Tech Compounder': 'bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/20',
  'Cyclical Leader': 'bg-[#003087]/10 text-[#6b9fff] border-[#003087]/30',
  'Toll Booth Monopoly': 'bg-[#1a1f71]/10 text-[#8b8fff] border-[#1a1f71]/30',
  'Platform Transformation': 'bg-[#0071dc]/10 text-[#5ba8ff] border-[#0071dc]/30',
};

export default function HomePage() {
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
              <Brain className="w-3.5 h-3.5 text-accent-light" />
              <span className="text-xs font-medium text-accent-light">
                Investment Learning Framework
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6">
              Learn to think like
              <br />
              <span className="text-accent-light">an investor</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mb-4">
              Don't just look at stock prices. Understand the business, evaluate
              the numbers, weigh the arguments, and form your own view.
            </p>
            <p className="text-base text-text-muted leading-relaxed max-w-2xl">
              Each company represents a different type of investment problem.
              Growth, value, turnaround, compounder — learn to recognize the
              patterns and think through what matters.
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
              title: 'Understand the business',
              desc: 'Learn what the company does, how it makes money, and what gives it staying power.',
            },
            {
              icon: TrendingUp,
              title: 'Evaluate the numbers',
              desc: 'Key financial and valuation metrics explained in plain English — what they mean and when they mislead.',
            },
            {
              icon: Brain,
              title: 'Form your own view',
              desc: "Make a decision and see what you'd need to believe, what could go wrong, and what to watch next.",
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

      {/* Company Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Pick a company to analyze
          </h2>
          <p className="text-text-secondary mb-8">
            Seven companies, each representing a different investment type. Start
            with whatever interests you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company, i) => (
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ backgroundColor: `${company.color}15` }}
                  >
                    {company.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {company.name}
                    </h3>
                    <p className="text-sm text-text-muted">{company.ticker}</p>
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
          ))}
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
