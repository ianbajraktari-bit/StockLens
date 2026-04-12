import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const appleLesson: Lesson = {
  id: 'apple',
  emoji: '🍎',
  title: 'Apple Lesson',
  subtitle: 'Understanding a business before you invest',
  description:
    "Apple looks like five businesses — iPhone, Mac, iPad, Wearables, Services. But how much of it really depends on one product? You'll trace the hidden dependencies, stress-test the bull case, and decide whether $30 for every $1 of earnings is a fair price.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['margins', 'recurring_revenue', 'valuation', 'risk'],
  keyFacts: [
    { label: 'Market Cap', value: '~$3.4T', detail: 'One of the most valuable companies in the world' },
    { label: 'Annual Revenue', value: '~$391B', detail: 'iPhone accounts for roughly half of this' },
    { label: 'Services Revenue', value: '~$96B', detail: 'Recurring, high-margin, and growing ~14% year-over-year' },
    { label: 'Active Devices', value: '2.2 billion', detail: 'The installed base that powers the entire ecosystem' },
  ],
  topics: [
    { label: 'Tracing Apple\'s hidden iPhone dependency', icon: Target },
    { label: 'Stress-testing the Services bull case', icon: TrendingUp },
    { label: 'Identifying the structural risk to the premium', icon: ShieldAlert },
    { label: 'Making the investor judgment call at 30x', icon: BrainCircuit },
  ],
  storyArc: ['The Engine', 'The Bull Case', 'The Risk', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Apple revenue instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Revenue DNA',
      topicIcon: Zap,
      intro: 'Quick instincts about Apple\'s revenue. Tap fast.',
      prompts: [
        {
          setup: 'Which segment is more recurring?',
          left: { label: 'iPhone', sublabel: 'buy once every 3-4 years' },
          right: { label: 'Services', sublabel: 'monthly subscriptions + App Store' },
          correct: 'right',
          flash: 'iPhone is a one-time purchase. Services bills every month automatically.',
        },
        {
          setup: 'Which has higher profit margins?',
          left: { label: 'iPhone hardware', sublabel: '~35% margin' },
          right: { label: 'Services', sublabel: '~70% margin' },
          correct: 'right',
          flash: 'Software and digital services cost almost nothing to distribute. Double the margin of hardware.',
        },
        {
          setup: 'Which segment depends on the other?',
          left: { label: 'Services depends on iPhone', sublabel: 'customers need devices first' },
          right: { label: 'iPhone depends on Services', sublabel: 'services sell the hardware' },
          correct: 'left',
          flash: 'You need an Apple device before you can use Apple Services. iPhone is the gateway.',
        },
        {
          setup: 'Which protects Apple from competition?',
          left: { label: 'iPhone hardware specs', sublabel: 'better camera, faster chip' },
          right: { label: 'Ecosystem lock-in', sublabel: 'iMessage, AirDrop, app purchases' },
          correct: 'right',
          flash: 'Specs get matched every year. Switching costs from the ecosystem last for decades.',
        },
        {
          setup: 'If iPhone sales slow 20%, which is hit harder?',
          left: { label: 'Mac revenue' },
          right: { label: 'Services revenue' },
          correct: 'right',
          flash: 'Fewer iPhones = smaller installed base = fewer subscribers over time. Services growth needs iPhone growth.',
        },
        {
          setup: 'Which makes Apple look more like a software company?',
          left: { label: '$96B in Services at 70% margins' },
          right: { label: '$200B in iPhone at 35% margins' },
          correct: 'left',
          flash: 'Services has SaaS-level margins. That\'s what investors pay premium valuations for.',
        },
      ],
      takeaway:
        'Apple looks like a hardware company on the surface. But the premium valuation comes from Services — recurring, high-margin, and growing. The catch: it all depends on iPhone.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the real iPhone exposure
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Real iPhone Number',
      topicIcon: Calculator,
      context:
        'Apple\'s total revenue is $391B. iPhone is $200B directly. Services ($96B) exists because people own iPhones — every app purchase, subscription, and Google search payment flows through the device.',
      question: 'What % of Apple\'s revenue is iPhone-dependent when you add iPhone + Services?',
      answer: 76,
      tolerance: 5,
      unit: '%',
      hint: '($200B + $96B) ÷ $391B',
      reveal:
        '($200B + $96B) ÷ $391B = 76%. And that\'s conservative — Wearables (Apple Watch, AirPods) also depend on having an iPhone. Real exposure is 70-80%. Apple looks like five segments but runs on one engine.',
      takeaway: 'Don\'t count segments — trace dependencies. Apple\'s real iPhone exposure is ~75%, not the 50% it appears.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: the dependency concern
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Hidden Dependency',
      topicIcon: Target,
      context:
        'Apple has five revenue segments. But ~75% of total revenue traces back to iPhone ownership as the entry point.',
      question: 'As an investor, what concerns you most about this?',
      options: [
        'Nothing — iPhone is the best phone, so the dependency is safe',
        'If iPhone sales stall in a saturating market, the entire business — including Services — decelerates',
        'Apple should diversify into unrelated businesses',
        'Five segments means Apple is well-diversified regardless',
      ],
      correctIndex: 1,
      punchline:
        'In a saturating smartphone market where people hold phones 3-4 years, the engine that powers 75% of revenue is slowing. Everything downstream — especially the high-margin Services that justify the premium — depends on it.',
      wrongNudges: [
        'Being the best phone doesn\'t prevent market saturation. Even dominant products slow when everyone already has one.',
        '',
        'Unrelated diversification usually destroys value. Apple\'s strength IS the ecosystem — the risk is that the ecosystem depends on one product.',
        'Five segment names on a slide don\'t mean five independent businesses. Trace the dependencies.',
      ],
      takeaway: 'When you trace the dependencies, Apple\'s diversification is narrower than it looks — and the engine is showing its age.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Estimate: the Google risk
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Load-Bearing Deal',
      topicIcon: Calculator,
      context:
        'Google pays Apple ~$20B/year to be the default search engine on iPhones. This is near-pure profit — Apple does nothing except keep Google as the default. Services operating profit is roughly $67B.',
      question: 'What % of Services operating profit comes from this single deal?',
      answer: 30,
      tolerance: 5,
      unit: '%',
      hint: '$20B ÷ $67B',
      reveal:
        '$20B ÷ $67B ≈ 30%. Nearly a third of the profit from Apple\'s best segment comes from one deal — and courts have already ruled Google\'s search monopoly illegal. That deal is the load-bearing assumption inside the "Services premium" thesis.',
      takeaway: 'Every bull case has a load-bearing assumption. For Apple Services, it\'s the Google deal. Find the assumption, then stress-test it.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: the bull case pitch
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Stress-Test the Bull Case',
      topicIcon: Flag,
      intro:
        'An analyst pitches Apple as a "must-own" stock. Tap the assumptions that could break.',
      passage: [
        { type: 'text', value: '"Apple\'s Services segment is growing 14% with ' },
        {
          type: 'chip',
          value: '70% margins',
          signal: false,
          feedback: '70% margins are real and verifiable. This is a fact, not an assumption.',
        },
        { type: 'text', value: '. The ' },
        {
          type: 'chip',
          value: '2.2 billion device installed base',
          signal: false,
          feedback: 'The installed base is real. Not an assumption — it\'s a current fact.',
        },
        { type: 'text', value: ' ensures ' },
        {
          type: 'chip',
          value: 'Services will keep growing at 14%+',
          signal: true,
          feedback:
            'Assumes growth rate persists indefinitely. What if the installed base saturates? What if users resist more subscriptions? Growth rates don\'t last forever.',
        },
        { type: 'text', value: '. The ' },
        {
          type: 'chip',
          value: 'Google search deal is secure',
          signal: true,
          feedback:
            'Courts have already ruled Google\'s search monopoly illegal. This $20B/year deal — ~30% of Services profit — is actively under legal threat.',
        },
        { type: 'text', value: ' and the ' },
        {
          type: 'chip',
          value: 'App Store commission structure is untouchable',
          signal: true,
          feedback:
            'The EU\'s Digital Markets Act already forced changes. US antitrust suits are ongoing. The 30% commission is the most attacked part of the business model.',
        },
        { type: 'text', value: '. At 30x earnings, Apple is ' },
        {
          type: 'chip',
          value: 'fairly valued for a quality compounder',
          signal: true,
          feedback:
            'At 30x with only 8% earnings growth, you need Services to accelerate AND regulatory risk to stay contained. "Fairly valued" hides the margin of error.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'The facts are real (margins, installed base). The danger is in the assumptions: that growth persists, the Google deal survives, regulators back off, and 30x is fair for 8% growth. Every one of those could break.',
      takeaway:
        "When someone gives you a bull case, separate the facts from the assumptions. Facts are what's true today. Assumptions are what must stay true for the investment to work.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Drill: which risks are structural?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Risk Ranking',
      topicIcon: ShieldAlert,
      intro: 'Which risks threaten Apple\'s profit model directly? Tap "structural" or "manageable" for each.',
      prompts: [
        {
          setup: 'iPhone upgrade cycles slowing from 2 years to 3-4 years.',
          left: { label: 'Manageable' },
          right: { label: 'Structural' },
          correct: 'left',
          flash: 'Gradual headwind. Longer phone life actually helps Services by keeping users in the ecosystem longer.',
        },
        {
          setup: 'Antitrust ruling forces Apple to cut App Store commission from 30% to 15%.',
          left: { label: 'Manageable' },
          right: { label: 'Structural' },
          correct: 'right',
          flash: 'Directly halves the highest-margin revenue stream. This attacks the profit engine.',
        },
        {
          setup: 'Samsung launches a better camera phone.',
          left: { label: 'Manageable' },
          right: { label: 'Structural' },
          correct: 'left',
          flash: 'Spec competition is annual noise. Ecosystem lock-in (iMessage, apps) keeps most users from switching.',
        },
        {
          setup: 'Google search deal reduced from $20B to $10B by court order.',
          left: { label: 'Manageable' },
          right: { label: 'Structural' },
          correct: 'right',
          flash: '$10B in near-pure profit gone. Directly erodes the Services premium that justifies the valuation.',
        },
        {
          setup: 'China tensions lead to a 15% tariff on iPhones.',
          left: { label: 'Manageable' },
          right: { label: 'Structural' },
          correct: 'left',
          flash: 'A headwind Apple can manage through pricing, supply chain shifts to India/Vietnam. Not existential.',
        },
        {
          setup: 'EU forces Apple to allow third-party app stores, bypassing App Store fees.',
          left: { label: 'Manageable' },
          right: { label: 'Structural' },
          correct: 'right',
          flash: 'If developers can bypass the App Store, Apple loses its toll booth. Structural attack on the moat.',
        },
      ],
      takeaway:
        'Structural risks attack the profit model directly. Manageable risks are headwinds the business can absorb. Don\'t treat all risks equally.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: the investor call
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Investment Decision',
      topicIcon: BrainCircuit,
      context:
        'Apple trades at 30x earnings (S&P average: ~20x). Earnings grow ~8%/year. Services is the bull case, but the Google deal and App Store commissions are under regulatory attack. The ecosystem is sticky but iPhone-dependent.',
      question: 'What is the most thoughtful investor reaction?',
      options: [
        'Buy — Apple is a great business with a massive ecosystem',
        'Avoid — 30x is too expensive for 8% growth',
        'The premium might be justified by Services, but you need regulatory risk to stay contained and Services to keep accelerating — otherwise you\'re overpaying',
        'Wait for P/E to drop to 20x',
      ],
      correctIndex: 2,
      punchline:
        'A great business isn\'t automatically a great investment. At 30x, you need Services to compound AND regulators to back off. The quality is real — the question is whether the price already reflects it.',
      wrongNudges: [
        'Great business ≠ great stock at any price. You just identified real structural risks to the profit model. Ignoring them at the moment of decision undoes the analysis.',
        '',
        '',
        'There\'s no magic P/E where a stock becomes safe. 20x on a weakening business is worse than 30x on a strengthening one.',
      ],
      takeaway: 'The hardest skill: deciding whether the current price already reflects the quality you see, and what specific risks could break the thesis.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 8. Thinking step: synthesis
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Based on everything — Apple\'s revenue mix, the 75% iPhone dependency, Services growth, the Google deal risk, and the 30x valuation — does Apple look attractive right now? Write 1-2 sentences explaining your view.',
      placeholder:
        'e.g. "I think Apple is / isn\'t attractive because..."',
      modelAnswer:
        'Apple is a high-quality business with a sticky ecosystem and a fast-growing Services segment — but at 30x earnings, a lot of that quality is already priced in. I\'d want to see Services growth accelerate or regulatory risk diminish before paying this premium, because even a small disappointment could hurt the stock at this valuation.',
      strongReasoningIncludes: [
        'Weighs both strengths (ecosystem, Services margins) and risks (iPhone dependence, regulatory threat)',
        'Considers whether the current stock price already reflects the positives — not just whether the business is good',
        'Connects the valuation (30x) to what needs to go right for the investment to work',
      ],
    },
  ],
  takeaways: [
    'Trace the dependencies — Apple looks like five segments but ~75% traces back to iPhone.',
    'Every bull case has a load-bearing assumption. For Apple, it\'s the Google deal and App Store commissions.',
    'Structural risks (antitrust) are more dangerous than cyclical ones (upgrade slowdown). Don\'t treat all risks equally.',
    'A great business is not automatically a great investment — price and expectations matter as much as quality.',
  ],
  completionMessages: {
    perfect: 'Flawless. You analyzed the business, stress-tested the bull case, and made a real judgment call.',
    great: "Strong work. You're learning to think like an investor, not just a test-taker.",
    good: "Solid start. You're picking up the fundamentals — the judgment calls will get sharper with practice.",
    low: 'Good effort. Revisit the lesson to sharpen your instincts on tracing dependencies and stress-testing assumptions.',
  },
};
