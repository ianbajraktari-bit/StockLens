import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const amazonLesson: Lesson = {
  id: 'amazon',
  emoji: '📦',
  title: 'Amazon Lesson',
  subtitle: 'Two businesses wearing one stock ticker',
  description:
    "Amazon looks like the world\'s biggest retailer. But strip away the boxes and the real profit engine is a cloud computing business most customers never see. You'll trace where the money actually comes from, calculate the profit inversion, and decide whether the stock price reflects a retailer or a tech company.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['margins', 'business_drivers', 'valuation', 'risk'],
  keyFacts: [
    { label: 'Annual Revenue', value: '~$620B', detail: 'The largest online retailer in the world by far' },
    { label: 'AWS Revenue', value: '~$105B', detail: 'Only 17% of total revenue — but the real story' },
    { label: 'AWS Operating Margin', value: '~37%', detail: 'Cloud margins dwarf the retail business' },
    { label: 'Retail Operating Margin', value: '~3%', detail: 'Razor-thin margins on $515B in sales' },
  ],
  topics: [
    { label: 'Finding the real profit engine inside Amazon', icon: Target },
    { label: 'Why 17% of revenue drives 60% of profit', icon: TrendingUp },
    { label: 'What happens if the two businesses diverge', icon: ShieldAlert },
    { label: 'Is the stock priced as a retailer or a tech company?', icon: BrainCircuit },
  ],
  storyArc: ['The Two Businesses', 'The Profit Inversion', 'The Risk', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Amazon business instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Business DNA',
      topicIcon: Zap,
      intro: 'Quick instincts about how Amazon actually makes money. Tap fast.',
      prompts: [
        {
          setup: 'Which segment has higher profit margins?',
          left: { label: 'Retail / e-commerce', sublabel: '~3% operating margin' },
          right: { label: 'AWS (cloud computing)', sublabel: '~37% operating margin' },
          correct: 'right',
          flash: 'AWS keeps 37 cents of every dollar. Retail keeps 3 cents. The margin difference is 12x.',
        },
        {
          setup: 'Which segment generates more revenue?',
          left: { label: 'Retail', sublabel: '~$515B/year' },
          right: { label: 'AWS', sublabel: '~$105B/year' },
          correct: 'left',
          flash: 'Retail is 5x larger by revenue. But revenue isn\'t profit — and that\'s the whole lesson.',
        },
        {
          setup: 'Which is more like a subscription business?',
          left: { label: 'Retail', sublabel: 'customers buy per order' },
          right: { label: 'AWS', sublabel: 'companies pay monthly for cloud services' },
          correct: 'right',
          flash: 'AWS revenue is recurring — companies sign multi-year contracts and build their infrastructure on it. Retail is transactional.',
        },
        {
          setup: 'Which has higher switching costs?',
          left: { label: 'Retail', sublabel: 'customers can shop anywhere' },
          right: { label: 'AWS', sublabel: 'migrating servers is painful and expensive' },
          correct: 'right',
          flash: 'Moving your entire tech infrastructure off AWS takes months and millions. Switching your online shopping takes one click.',
        },
        {
          setup: 'If you had to pick one segment to own, which generates more profit?',
          left: { label: 'Retail at $515B revenue' },
          right: { label: 'AWS at $105B revenue' },
          correct: 'right',
          flash: 'AWS: $105B × 37% ≈ $39B operating profit. Retail: $515B × 3% ≈ $15B. The smaller segment generates 2.5x more profit.',
        },
        {
          setup: 'Amazon\'s stock is priced at ~60x earnings. That P/E reflects:',
          left: { label: 'A retail company', sublabel: 'retail average is 20-25x' },
          right: { label: 'A cloud/tech company', sublabel: 'cloud average is 40-60x' },
          correct: 'right',
          flash: 'At 60x, the market is pricing Amazon like a tech company. If AWS growth slows, that multiple has nowhere to hide.',
        },
      ],
      takeaway:
        'Amazon looks like a retailer but is priced like a tech company. The stock\'s value depends on which business you think you\'re buying.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the profit inversion
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Profit Inversion',
      topicIcon: Calculator,
      context:
        'Amazon\'s total operating profit is roughly $65B. AWS generates about $39B of that from only $105B in revenue. The retail business generates about $15B from $515B in revenue. Advertising and other segments make up the rest.',
      question: 'What % of Amazon\'s operating profit comes from AWS?',
      answer: 60,
      tolerance: 8,
      unit: '%',
      hint: '$39B ÷ $65B',
      reveal:
        '$39B ÷ $65B ≈ 60%. A segment that\'s 17% of revenue generates 60% of the profit. This is the Amazon inversion: the business customers see (boxes, Prime, same-day delivery) is mostly a breakeven operation. The profit comes from a B2B cloud platform most consumers don\'t know exists.',
      takeaway: 'Revenue and profit can tell completely different stories. AWS is 17% of revenue but 60% of profit. If you don\'t know this, you don\'t understand Amazon.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: retail margin reality
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Retail Reality',
      topicIcon: Calculator,
      context:
        'Amazon\'s retail operation does $515B in revenue and earns roughly $15B in operating profit. For context, Walmart earns about a 4% operating margin. Amazon\'s retail margins have historically been even lower — often near zero — as the company reinvests aggressively in logistics, delivery speed, and Prime.',
      question: 'What is Amazon retail\'s operating margin?',
      answer: 3,
      tolerance: 1,
      unit: '%',
      hint: '$15B ÷ $515B',
      reveal:
        '$15B ÷ $515B ≈ 2.9%. Three cents on every dollar. This isn\'t failure — it\'s strategy. Amazon deliberately runs retail at minimal margins to maximize market share and customer lock-in. But it means the retail operation has almost no room for error. A small cost increase or demand slowdown can push retail margins negative.',
      takeaway: 'Amazon retail\'s ~3% margin is deliberate but fragile. The strategy works only because AWS profits subsidize the thin-margin retail operation.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: the Amazon bull case
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Stress-Test the Bull Case',
      topicIcon: Flag,
      intro: 'An analyst pitches Amazon as a "generational compounder." Tap the assumptions that could break.',
      passage: [
        { type: 'text', value: '"Amazon has ' },
        {
          type: 'chip',
          value: '200+ million Prime members',
          signal: false,
          feedback: 'Current subscriber count is a verifiable fact.',
        },
        { type: 'text', value: ' and ' },
        {
          type: 'chip',
          value: 'AWS is the #1 cloud platform with 31% market share',
          signal: false,
          feedback: 'Current market position is a fact. The question is whether it holds.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'AWS will maintain 30%+ growth as enterprises migrate to cloud',
          signal: true,
          feedback: 'Cloud migration is real, but AWS growth has already decelerated from 40%+ to ~19%. Microsoft Azure and Google Cloud are closing the gap. Sustained 30% assumes competitors don\'t win share.',
        },
        { type: 'text', value: ' The retail business will ' },
        {
          type: 'chip',
          value: 'steadily expand margins as logistics scale improves',
          signal: true,
          feedback: 'Amazon has promised retail margin expansion for years. It happens slowly and inconsistently. Logistics costs (labor, fuel, last-mile delivery) tend to rise with inflation. "Steadily" is optimistic.',
        },
        { type: 'text', value: '. The advertising business is ' },
        {
          type: 'chip',
          value: 'a high-margin profit engine growing 20%+',
          signal: false,
          feedback: 'Amazon\'s ad business (~$50B run rate, ~60% margins) is quietly becoming a third profit pillar — already larger than YouTube\'s ad revenue. This is a verifiable growth trend, not just an assumption.',
        },
        { type: 'text', value: '. At 60x earnings, Amazon is ' },
        {
          type: 'chip',
          value: 'fairly valued for a company with this much optionality',
          signal: true,
          feedback: '60x on a company where 83% of revenue comes from a 3%-margin retail operation is aggressive. "Optionality" is real but the price assumes most of that option value is realized.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'The facts are real (Prime members, AWS leadership, ad business). The assumptions: that AWS maintains 30%+ growth against intensifying competition, that retail margins expand despite structural cost pressures, and that 60x is fair when the core revenue engine earns 3%. Each assumption needs to hold.',
      takeaway: 'Amazon\'s bull case rests on AWS growth sustaining and retail margins expanding. Both are plausible — but neither is guaranteed. At 60x, you need most of it to go right.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Drill: risk sorting
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Risk Sorting',
      topicIcon: ShieldAlert,
      intro: 'Each risk threatens Amazon. Does it hit the retail side or the AWS side?',
      prompts: [
        {
          setup: 'Microsoft Azure grows share from 24% to 30%, eating into AWS dominance.',
          left: { label: 'Retail risk' },
          right: { label: 'AWS risk', sublabel: 'profit engine threatened' },
          correct: 'right',
          flash: 'AWS market share has held around 31% while Azure grew from ~20% to ~25%. The gap is narrowing, not widening — and this directly attacks the segment that generates 60% of profit.',
        },
        {
          setup: 'Fuel and labor costs rise 15% due to inflation.',
          left: { label: 'Retail risk', sublabel: '3% margin under pressure' },
          right: { label: 'AWS risk' },
          correct: 'left',
          flash: 'Logistics costs hit retail directly. At 3% margins, a 15% cost increase could push the entire retail operation into the red.',
        },
        {
          setup: 'A recession causes enterprises to cut IT spending by 20%.',
          left: { label: 'Retail risk' },
          right: { label: 'AWS risk', sublabel: 'cloud spending contracts' },
          correct: 'right',
          flash: 'Enterprise IT budgets get cut in recessions. AWS revenue decelerates and the 60% profit engine stalls.',
        },
        {
          setup: 'Antitrust regulators force Amazon to stop favoring its own products in search results.',
          left: { label: 'Retail risk', sublabel: 'marketplace advantage weakened' },
          right: { label: 'AWS risk' },
          correct: 'left',
          flash: 'Amazon\'s retail advantage partly comes from controlling the platform and the products on it. Regulation weakens that position.',
        },
        {
          setup: 'Temu and Shein capture budget-conscious consumers with ultra-cheap direct-from-factory shipping.',
          left: { label: 'Retail risk', sublabel: 'low-end competition' },
          right: { label: 'AWS risk' },
          correct: 'left',
          flash: 'New competitors attacking the price-sensitive end of Amazon\'s retail base. Doesn\'t touch AWS, but pressures the already-thin retail margins.',
        },
        {
          setup: 'Google Cloud offers aggressive pricing, undercutting AWS by 30% on compute.',
          left: { label: 'Retail risk' },
          right: { label: 'AWS risk', sublabel: 'pricing power erodes' },
          correct: 'right',
          flash: 'Price wars in cloud compress AWS margins. If the 37% operating margin drops to 25%, AWS profit falls by a third even without losing customers.',
        },
      ],
      takeaway: 'Amazon has two distinct risk surfaces. Retail risks are annoying but survivable. AWS risks are existential — because that\'s where the profit lives.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: the two-business question
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Core Question',
      topicIcon: ShieldAlert,
      context:
        'AWS growth has decelerated from 40%+ to ~19%. Azure is closing the gap. Meanwhile, retail margins remain thin and face pressure from inflation and new competitors. The ad business is growing fast but is still much smaller than AWS.',
      question: 'What is the biggest risk to Amazon\'s stock at 60x earnings?',
      options: [
        'Retail competition from Temu and Shein eroding market share',
        'AWS growth decelerating further as Azure and Google Cloud close the gap — because 60% of profit depends on it',
        'Antitrust regulation breaking up the company',
        'Rising logistics costs pushing retail margins negative',
      ],
      correctIndex: 1,
      punchline:
        'Retail risks matter, but they hit a 3%-margin business. AWS deceleration hits the 37%-margin business that generates 60% of profit. At 60x earnings, the stock is priced for AWS to keep compounding. If cloud growth slows to 10-15%, the entire valuation framework breaks.',
      wrongNudges: [
        'Retail competition is real but Amazon\'s logistics moat and Prime ecosystem provide strong defense. And retail is only 3% margin — the stock price barely depends on it.',
        '',
        'Antitrust is a tail risk — possible but unlikely in the near term. The more probable risk is market-driven: AWS growth simply decelerating as the market matures.',
        'Logistics costs pressure retail margins, but retail at 3% is already near breakeven. The stock isn\'t priced for retail margins — it\'s priced for AWS growth.',
      ],
      takeaway: 'When two businesses live under one stock, the risk that matters is the one that threatens the profit engine. For Amazon, that\'s AWS.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: the investor call
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Investment Decision',
      topicIcon: BrainCircuit,
      context:
        'Amazon trades at ~60x earnings. AWS is 17% of revenue but 60% of profit, growing ~19%. Retail is 83% of revenue but earns 3% margins. The ad business is a bright spot but smaller. Azure is gaining share.',
      question: 'What is the most thoughtful investor stance?',
      options: [
        'Buy — Amazon is the everything company and will dominate for decades',
        'Avoid — 60x for a company that\'s mostly a low-margin retailer is insane',
        'The stock is really a bet on AWS. If you believe cloud growth reaccelerates and AWS holds its lead, 60x could work. If Azure keeps closing the gap, the premium unwinds — regardless of how many boxes ship',
        'Wait for a pullback — 60x is too high right now but the business is great',
      ],
      correctIndex: 2,
      punchline:
        'Amazon at 60x is an AWS bet wearing a retail disguise. The boxes, the Prime memberships, the warehouses — that\'s the sideshow. Your investment thesis lives or dies with cloud computing. Know what you\'re actually buying.',
      wrongNudges: [
        '"Will dominate for decades" ignores that AWS growth is already decelerating and Azure is gaining share. Dominance is never guaranteed — especially in tech.',
        '',
        '',
        'A pullback from 60x to 45x still requires AWS to keep compounding. If cloud growth slows to 10-15%, even 45x is expensive. The thesis matters more than the entry price.',
      ],
      takeaway: 'When a company has two businesses, figure out which one drives the stock price. For Amazon, every investment decision should start and end with AWS.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 8. Thinking step: synthesis
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Amazon is two businesses: a $515B retailer earning 3% margins and a $105B cloud platform earning 37% margins. AWS generates 60% of profit but growth is decelerating as Azure closes the gap. At 60x earnings, the stock is priced as a tech company. Would you buy Amazon here? Write 1-2 sentences on what must go right.',
      placeholder:
        'e.g. "I would / wouldn\'t buy Amazon because..."',
      modelAnswer:
        'Amazon is a bet on AWS sustaining cloud dominance while the retail operation stays out of trouble. At 60x, I need AWS growth to reaccelerate and margins to hold against Azure and Google Cloud pricing pressure. The ad business is a genuine tailwind, but the core question is whether the cloud profit engine keeps compounding — because the retail operation can\'t justify this valuation on its own.',
      strongReasoningIncludes: [
        'Identifies that the stock is really an AWS bet, not a retail bet',
        'Addresses the specific risk of AWS growth deceleration and competitive pressure from Azure',
        'Connects the 60x valuation to what must go right — not just whether Amazon is a "good company"',
      ],
    },
  ],
  takeaways: [
    'Amazon is two businesses: a breakeven retailer and a high-margin cloud platform. The stock is priced for the cloud business.',
    'AWS is 17% of revenue but 60% of profit — the profit inversion. If you don\'t know this, you don\'t understand what you\'re buying.',
    'Retail risks are survivable. AWS risks are existential. Always identify which business drives the stock price.',
    'At 60x earnings, you\'re betting that AWS maintains dominance and growth reaccelerates. "Amazon is a great company" is not a thesis — "AWS will compound at 25%+" is.',
  ],
  completionMessages: {
    perfect: 'Flawless. You saw through the retail disguise and analyzed the real profit engine.',
    great: 'Strong work. You understand that Amazon at 60x is a cloud bet, not a retail bet.',
    good: 'Good start. The key insight — two businesses, one stock — will sharpen every analysis you do from here.',
    low: 'Worth revisiting. Amazon is the best example of why revenue and profit tell different stories.',
  },
};
