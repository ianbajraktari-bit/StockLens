import { Scale, ShieldCheck, TrendingUp, Target, Zap, Search } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMarginsLesson: Lesson = {
  id: 'foundations-margins',
  emoji: '💡',
  title: 'What a Business Keeps',
  subtitle: 'Why Microsoft keeps 68¢ per dollar and Costco keeps 3¢ — and both are brilliant',
  description:
    'Margin — the percentage of revenue a business keeps as profit — is the single best number for understanding business quality. But here\'s the twist: a higher margin isn\'t always better. This lesson teaches you when 3% is genius and when 60% is fragile.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['margins'],
  keyFacts: [],
  topics: [
    { label: 'What margins are and why they matter', icon: Scale },
    { label: 'Why higher isn\'t always better', icon: ShieldCheck },
    { label: 'Which businesses survive a crisis', icon: TrendingUp },
    { label: 'Real company margin comparisons', icon: Target },
  ],
  steps: [
    // Hook with a surprising estimation
    {
      kind: 'estimate',
      topic: 'Margin Intuition',
      topicIcon: Scale,
      context:
        'A "profit margin" is the percentage of every revenue dollar a business keeps as profit. If a company has $100M in revenue and $25M in profit, its margin is 25%.\n\nGrocery stores are one of the most common businesses in America. Kroger, Albertsons, Whole Foods — collectively they sell hundreds of billions in food every year.',
      question: 'What profit margin do you think a typical grocery store operates at?',
      answer: 3,
      tolerance: 3,
      unit: '%',
      hint: 'Think about how competitive grocery pricing is',
      reveal:
        'About 1.5–3%. For every $100 in groceries you buy, the store keeps roughly $2-3 as profit. The rest goes to suppliers, rent, employees, electricity, spoilage, and theft. Grocery is a brutal business — massive revenue, razor-thin margins. Now compare that to Microsoft at 36% net margin — it keeps $36 out of every $100. Same concept, wildly different businesses.',
      takeaway: 'Margins vary enormously by industry. Grocery stores keep ~2-3%. Software companies keep ~25-35%. This difference tells you almost everything about business quality.',
    },

    // Decide with genuine nuance
    {
      kind: 'decide',
      topic: 'The Margin Paradox',
      topicIcon: ShieldCheck,
      context:
        'Two real companies:\n\nMicrosoft: $245B revenue, $88B profit → 36% net margin\nCostco: $254B revenue, $6.7B profit → 2.6% net margin\n\nMicrosoft keeps 36 cents of every dollar. Costco keeps less than 3 cents. Both are considered extraordinary businesses. Both have made investors rich for decades.',
      question: 'How can Costco be a great business at 2.6% margin when Microsoft has 36%?',
      options: [
        'Costco isn\'t actually a great business — Microsoft is just better in every way',
        'Costco\'s low margin is its strategy: near-cost pricing drives 93% membership renewal, and memberships ARE the profit',
        'Costco will eventually raise margins to be more like Microsoft',
        'Low margins don\'t matter if revenue is high enough',
      ],
      correctIndex: 1,
      punchline:
        'Costco\'s "low margin" is a feature, not a bug. They deliberately sell products near cost so members feel they\'re getting incredible deals — which makes them renew year after year (93% renewal rate). The real profit comes from $4.8B in membership fees, which cost almost nothing to collect. The entire product business is a customer acquisition machine for the membership business.',
      wrongNudges: [
        'Costco\'s stock has returned 650% over 15 years. Its business model is intentionally different from Microsoft\'s — comparing them on margin alone misses the point.',
        '',
        'Costco has deliberately kept margins low for 40+ years. Raising prices would break the value proposition that drives membership renewals. The low margin IS the strategy.',
        'It\'s not just about "high enough revenue." $254B in revenue at 2.6% margin is fragile if costs rise. What makes Costco special is that its REAL product (membership) has near-100% margins.',
      ],
      takeaway: 'Margin tells you how a business makes money, not whether it\'s good. Costco at 2.6% is brilliant because low margins are the strategy. A struggling retailer at 2.6% is dying. Context is everything.',
    },

    // Drill: escalating difficulty, real-world trade-offs
    {
      kind: 'drill',
      topic: 'Margin Matchups',
      topicIcon: Zap,
      intro: 'For each pair, pick the business with higher profit margins. These get tricky — high margins aren\'t always where you expect.',
      prompts: [
        {
          setup: 'A software company that sells downloadable apps vs. a restaurant chain',
          left: { label: 'Software', sublabel: 'digital product, no physical costs' },
          right: { label: 'Restaurant', sublabel: 'food, rent, staff, waste' },
          correct: 'left',
          flash: 'Software margins are typically 25-40%. Restaurant margins are 3-9%. Once software is built, each additional copy costs almost nothing. Each additional meal costs ingredients, labor, and energy.',
        },
        {
          setup: 'Coca-Cola (sells syrup to bottlers) vs. Walmart (sells everything to everyone)',
          left: { label: 'Coca-Cola', sublabel: 'sells concentrated syrup' },
          right: { label: 'Walmart', sublabel: 'massive retail scale' },
          correct: 'left',
          flash: 'Coca-Cola\'s net margin is ~23%. Walmart\'s is ~2.4%. Coke sells syrup (cheap to make, sold at huge markup) to bottlers who handle the expensive part — manufacturing, shipping, refrigeration. Brilliant business model.',
        },
        {
          setup: 'Visa (payment network) vs. JPMorgan Chase (the bank that issues Visa cards)',
          left: { label: 'Visa', sublabel: 'processes the transaction' },
          right: { label: 'JPMorgan', sublabel: 'lends the money' },
          correct: 'left',
          flash: 'Visa\'s net margin is ~55%. JPMorgan\'s is ~30%. Visa doesn\'t lend money or take credit risk — it just processes the transaction and takes a tiny cut. JPMorgan lends real money and sometimes doesn\'t get it back. Less risk = higher margins.',
        },
        {
          setup: 'Hermès (luxury handbags, $10,000+) vs. Nike (athletic shoes, $80-200)',
          left: { label: 'Hermès', sublabel: 'ultra-luxury, limited supply' },
          right: { label: 'Nike', sublabel: 'mass-market athletic brand' },
          correct: 'left',
          flash: 'Hermès net margin: ~30%. Nike: ~11%. Hermès sells scarcity — a Birkin bag has a waitlist. When you can charge $10,000 for a handbag and people BEG to buy it, margins are extraordinary. Nike has to spend billions on marketing and compete on price.',
        },
        {
          setup: 'A cloud storage company (growing 50%/year, burning cash) vs. a profitable insurance company (growing 5%/year, 15% margin)',
          left: { label: 'Cloud company', sublabel: 'high growth, negative margin' },
          right: { label: 'Insurance company', sublabel: 'low growth, solid margin' },
          correct: 'right',
          flash: 'Trick question. Negative margins mean NO profit — every dollar in is a dollar (plus more) out. The cloud company is betting that growth will eventually produce margins. Maybe. But the insurance company is making real money today. Growth without margins is a promise, not a result.',
        },
      ],
      takeaway: 'Business model determines margins. Networks (Visa) and luxury (Hermès) have the highest. Retail and restaurants have the lowest. But negative margins — burning cash for growth — is the biggest risk of all.',
    },

    // Tap: find which business survives a crisis
    {
      kind: 'tap',
      topic: 'The Recession Test',
      topicIcon: Search,
      intro: 'A recession hits and every company\'s revenue drops 15%. Below are six businesses with their pre-recession margins. Tap the ones that SURVIVE the revenue drop without going into the red.',
      passage: [
        { type: 'chip', value: 'Software company: 35% margin', signal: true, feedback: 'A 15% revenue drop on 35% margins still leaves ~20% margin. This business survives easily — software has almost no variable costs, so margins compress but don\'t disappear.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Grocery chain: 2% margin', signal: false, feedback: 'A 15% revenue drop wipes out a 2% margin instantly. This business goes into the red. Razor-thin margins have zero room for error — one bad quarter and you\'re losing money.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Payment network: 55% margin', signal: true, feedback: 'Even with 15% less transaction volume, a 55% margin business stays very profitable. This is why investors pay premium prices for high-margin companies — they survive anything.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Restaurant chain: 6% margin', signal: false, feedback: 'A 15% revenue drop (fewer diners) with fixed costs like rent and staff pushes this below zero. Restaurants are among the first businesses to fail in recessions because margins are too thin to absorb shocks.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Luxury brand: 30% margin', signal: true, feedback: 'Even luxury takes a hit in recessions, but a 30% margin can absorb a 15% revenue decline and still profit. Luxury customers are also less price-sensitive, so revenue might not drop as much.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Airline: 5% margin', signal: false, feedback: 'Airlines have massive fixed costs (planes, fuel contracts, staff) and tiny margins. A 15% revenue drop is catastrophic — this is why airlines frequently go bankrupt in recessions.' },
      ],
      requiredSignals: 3,
      reveal:
        'The 35%, 55%, and 30% margin businesses survive. The 2%, 6%, and 5% margin businesses likely go red. This is why margins matter beyond just "profitability" — they\'re a survival metric. High-margin businesses can weather storms. Low-margin businesses need everything to go right just to break even.',
      takeaway: 'Margins aren\'t just about profitability — they\'re about survival. A company with 35% margins can survive a recession. A company with 3% margins might not survive a bad quarter.',
    },

    // Thinking: synthesis
    {
      kind: 'thinking',
      prompt: 'Your friend is comparing two stocks. Company A has 45% profit margins. Company B has 5% margins. Your friend says "A is obviously the better investment." In 2-3 sentences, explain why they might be wrong — and when a 5% margin company could be a better investment.',
      placeholder: 'Think about Costco vs Microsoft — when are low margins a strategy vs a weakness? What else matters besides margin level?',
      modelAnswer:
        'Margins alone don\'t determine investment quality. A 5% margin company could be a better investment if its margins are expanding (going from 3% to 5% to 8%), if its business model intentionally uses low margins to drive customer loyalty (like Costco\'s membership model), or if it\'s growing revenue so fast that even a thin margin produces enormous profit. Meanwhile, a 45% margin company could be a bad investment if those margins are SHRINKING — perhaps competition is forcing price cuts, or their technology advantage is eroding. The direction and sustainability of margins matters more than the level. And context is everything: 5% is amazing for a grocery chain but terrible for a software company.',
      strongReasoningIncludes: [
        'Explains that margin direction (expanding vs shrinking) matters more than the absolute level',
        'Gives a concrete example of when low margins are a deliberate strategy, not a weakness',
        'Mentions that the "right" margin depends on the industry or business model',
      ],
    },
  ],
  takeaways: [
    'Profit margin = profit ÷ revenue. It tells you how many cents a business keeps from every dollar. Grocery stores keep ~2-3¢. Software companies keep 25-35¢.',
    'Higher margins aren\'t always better. Costco\'s 2.6% margin is a strategy — low prices drive 93% membership renewal. A struggling retailer at 2.6% is dying.',
    'Margins are a survival metric. A 35% margin business survives a recession. A 3% margin business might not survive a bad quarter.',
    'Margin direction matters more than margin level. A company going from 5% to 15% is improving. One going from 40% to 25% is deteriorating.',
  ],
  completionMessages: {
    perfect: 'Perfect. You now understand margins at a level most individual investors never reach — not just the number, but the context.',
    great: 'Strong work. You can see that margins aren\'t just math — they\'re the difference between businesses that survive and those that don\'t.',
    good: 'Good grasp of the basics. Remember: margin level matters, but direction and context matter more.',
    low: 'Worth revisiting. Margins are one of the most important concepts in investing — they show up in every company analysis.',
  },
};
