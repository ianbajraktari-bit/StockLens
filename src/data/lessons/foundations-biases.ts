import { TrendingDown, Scale, Anchor, Compass, Calculator, Zap, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsBiasesLesson: Lesson = {
  id: 'foundations-biases',
  emoji: '🧠',
  title: 'Your Brain vs. Your Portfolio',
  subtitle: 'Why your instincts are the biggest risk to your returns',
  description:
    "Your brain was built to survive, not invest. In this lesson, you'll feel how loss aversion hijacks your decisions, do the math on why losses hit harder than gains, and diagnose real investor mistakes that cost real money.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['behavioral_biases'],
  keyFacts: [],
  topics: [
    { label: 'Separating price noise from real information', icon: Zap },
    { label: 'The math behind why losses feel worse', icon: Calculator },
    { label: 'Spotting the disposition effect in action', icon: Anchor },
    { label: 'Building a process that beats instinct', icon: Compass },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: signal or noise?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Signal or Noise?',
      topicIcon: Zap,
      intro:
        "Your stock dropped. Is this a reason to act — or just noise? Tap fast.",
      prompts: [
        {
          setup: 'Stock dropped 20%. Business unchanged — revenue growing, customers loyal.',
          left: { label: 'Noise' },
          right: { label: 'Signal' },
          correct: 'left',
          flash: 'Nothing about the business changed. The price moved, not the value.',
        },
        {
          setup: 'Stock dropped 15%. Their biggest customer (40% of revenue) just left.',
          left: { label: 'Noise' },
          right: { label: 'Signal' },
          correct: 'right',
          flash: 'Losing 40% of revenue is real information. The business got weaker.',
        },
        {
          setup: 'Stock dropped 10%. Headlines say "market crash — investors panic."',
          left: { label: 'Noise' },
          right: { label: 'Signal' },
          correct: 'left',
          flash: 'The whole market dropped. Your company\'s fundamentals didn\'t change.',
        },
        {
          setup: 'Stock dropped 25%. CEO resigned amid an accounting scandal.',
          left: { label: 'Noise' },
          right: { label: 'Signal' },
          correct: 'right',
          flash: 'Accounting scandals destroy trust and often reveal hidden problems. Real signal.',
        },
        {
          setup: 'Stock dropped 8%. A competitor launched a similar product.',
          left: { label: 'Noise' },
          right: { label: 'Signal' },
          correct: 'right',
          flash: 'New competition is real information — it could erode margins and market share.',
        },
        {
          setup: 'Stock dropped 12%. Interest rates rose 0.25%. Business has zero debt.',
          left: { label: 'Noise' },
          right: { label: 'Signal' },
          correct: 'left',
          flash: 'Rate hikes matter for indebted companies. This business has no debt — the drop is just market mood.',
        },
      ],
      takeaway:
        'Before reacting to a price drop, ask one question: "Did anything about the business actually change?" If yes, it\'s signal. If no, it\'s noise — and noise is not a reason to act.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the loss math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Drop',
      topicIcon: Calculator,
      context:
        'You invested $10,000 in a well-researched stock. It drops 20%.',
      question: "What's your position worth now?",
      answer: 8000,
      tolerance: 200,
      unit: '$',
      hint: '$10,000 × (1 − 0.20)',
      reveal:
        '$10,000 × 0.80 = $8,000. You lost $2,000. But here\'s the trap: getting back to $10,000 from $8,000 is harder than it sounds.',
      takeaway: 'A 20% drop takes you to $8,000. Now comes the part that surprises most people.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: the recovery math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Recovery Trap',
      topicIcon: Calculator,
      context:
        'Your stock is now worth $8,000 after a 20% drop. To get back to your original $10,000...',
      question: 'What percentage gain does the stock need?',
      answer: 25,
      tolerance: 2,
      unit: '%',
      hint: '$2,000 ÷ $8,000',
      reveal:
        '$2,000 ÷ $8,000 = 25%. A 20% loss requires a 25% gain just to break even. Losses and gains are not symmetrical — and that asymmetry is exactly why your brain panics during drops.',
      takeaway: 'Losses and recoveries are asymmetric. A 20% loss needs a 25% gain. A 50% loss needs a 100% gain. This is why your brain treats drops as emergencies.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: the 20% drop
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The 20% Drop',
      topicIcon: TrendingDown,
      context:
        "Your stock is down 20%. You feel the urge to sell.\n\nBut: revenue is still growing, customers are still loyal, management hasn't changed. The only thing different is the price.",
      question: "What's the most disciplined response?",
      options: [
        'Sell immediately — stop the bleeding',
        'Revisit why you bought. If those reasons still hold, the drop is noise',
        "Wait until it gets back to your purchase price, then sell",
        "Buy more — it's on sale",
      ],
      correctIndex: 1,
      punchline:
        "A price drop is a question, not a command. Ask: 'Did anything about the business change?' If the answer is no, the only thing that changed is your feelings — and feelings shouldn't run your portfolio.",
      wrongNudges: [
        'Selling to "stop the bleeding" is loss aversion in action. You crystallize the loss without checking if anything real changed.',
        '',
        'Your purchase price is a historical accident. The stock doesn\'t know what you paid. Waiting for an arbitrary number is managing your ego, not your money.',
        "A 20% drop isn't automatically a discount. Sometimes the market is correcting an overvaluation. Buying more without rechecking the thesis is just as reactive as panic-selling.",
      ],
      takeaway: "The disciplined investor treats price drops as questions to investigate, not alarms to react to.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: the disposition effect in action
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Disposition Trap',
      topicIcon: Flag,
      intro:
        'An investor is explaining her plan for two stocks. Tap every piece of reasoning driven by her purchase price instead of business fundamentals.',
      passage: [
        { type: 'text', value: '"Stock A is at $150, ' },
        {
          type: 'chip',
          value: 'up 50% from what I paid',
          signal: true,
          feedback:
            'Her purchase price is irrelevant to Stock A\'s current value. Anchoring on her entry point, not the business quality.',
        },
        { type: 'text', value: '. The company is firing on all cylinders — revenue growing, margins expanding. But ' },
        {
          type: 'chip',
          value: "I want to lock in my profit",
          signal: true,
          feedback:
            'Selling a winning business to "lock in profit" is cutting a flower to preserve it. The business is getting stronger — that\'s a reason to hold, not sell.',
        },
        { type: 'text', value: ' before it drops back down.\n\nStock B is at $70, ' },
        {
          type: 'chip',
          value: 'down 30% from what I paid',
          signal: true,
          feedback:
            "Again anchoring on purchase price. The stock's value depends on the business today, not what she paid months ago.",
        },
        { type: 'text', value: '. Customers are leaving and the CEO just resigned. But ' },
        {
          type: 'chip',
          value: "I'll hold until it gets back to $100",
          signal: true,
          feedback:
            'Waiting for a broken business to reach an arbitrary price is hope disguised as strategy. The business is deteriorating — $100 is her number, not the stock\'s.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'I never sell at a loss',
          signal: true,
          feedback:
            '"Never sell at a loss" sounds disciplined but guarantees you\'ll hold broken businesses forever. Real discipline is selling when the thesis breaks, regardless of gain or loss.',
        },
        { type: 'text', value: ' — it\'s my rule."' },
      ],
      requiredSignals: 4,
      reveal:
        "Every decision she's making is driven by what she paid, not what the businesses are worth today. She's selling the winner (strong business) and holding the loser (broken business) — the exact opposite of what the fundamentals say to do. This pattern is called the disposition effect.",
      takeaway:
        'The disposition effect makes investors sell winners too early and hold losers too long — because the pain of realizing a loss is worse than the pleasure of a gain. Your purchase price should never drive your decision.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Drill: sell or hold?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Sell or Hold?',
      topicIcon: Scale,
      intro:
        'For each stock, decide based on the business — not the price you paid. Tap fast.',
      prompts: [
        {
          setup: 'Up 60%. Revenue accelerating, new product launch succeeding.',
          left: { label: 'Hold' },
          right: { label: 'Sell' },
          correct: 'left',
          flash: 'The business is getting stronger. Selling because it\'s "up a lot" is cutting your flowers.',
        },
        {
          setup: 'Down 40%. Customers leaving, two major lawsuits pending.',
          left: { label: 'Hold' },
          right: { label: 'Sell' },
          correct: 'right',
          flash: 'The business is deteriorating. Holding because "it\'ll come back" is watering weeds.',
        },
        {
          setup: 'Down 25%. Market crashed broadly. Your company\'s fundamentals unchanged.',
          left: { label: 'Hold' },
          right: { label: 'Sell' },
          correct: 'left',
          flash: 'The business didn\'t change — the market\'s mood did. This is noise.',
        },
        {
          setup: 'Up 10%. Main competitor just launched a clearly superior product.',
          left: { label: 'Hold' },
          right: { label: 'Sell' },
          correct: 'right',
          flash: 'A superior competitor is a fundamental change. The gain is irrelevant — the thesis may be broken.',
        },
        {
          setup: 'Down 15%. They just landed their biggest contract ever.',
          left: { label: 'Hold' },
          right: { label: 'Sell' },
          correct: 'left',
          flash: 'Business got stronger while price dropped. This might be an opportunity, not a problem.',
        },
        {
          setup: 'Up 100%. Revenue flat for 3 years, no new products, insiders selling.',
          left: { label: 'Hold' },
          right: { label: 'Sell' },
          correct: 'right',
          flash: 'A 100% gain with flat fundamentals and insider selling is a red flag. Price moved up, but value didn\'t.',
        },
      ],
      takeaway:
        'The decision to sell or hold should come from one question: "Is the business getting stronger or weaker?" Not "Am I up or down?"',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: process beats instinct
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Process Beats Instinct',
      topicIcon: Compass,
      context:
        "The market has dropped 25% in six months. Headlines are dire. Friends are selling.\n\nThree investors respond:\n\n• Investor A sells everything. Plans to buy back \"when things calm down.\"\n• Investor B checks prices every hour to \"react quickly.\"\n• Investor C pulls out a notebook written before the crash: why she owns each stock, what would make her sell, and her plan for a 25% drop.",
      question: 'Which investor has the best defense against their own brain?',
      options: [
        'Investor A — selling removes the risk',
        'Investor B — fast reactions catch opportunities',
        "Investor C — her decisions were made when she was calm, so panic can't rewrite them",
        'All three are reasonable in a crash',
      ],
      correctIndex: 2,
      punchline:
        "Investor C doesn't need better instincts during the crash — she just follows the plan her calm self already made. That's the only reliable defense against loss aversion.",
      wrongNudges: [
        '"Buy back when things calm down" almost never works. Markets recover before headlines do — by the time it feels safe, the best prices are gone.',
        'Checking prices hourly activates loss aversion on every glance. The less you check, the less your brain can interfere.',
        '',
        'Having a written plan is measurably better than having no plan. Your calm self is a better decision-maker than your panicked self.',
      ],
      takeaway:
        "The best investors aren't the ones with the best instincts — they're the ones whose decisions were already made before the panic hit. Write your plan when you're calm. Follow it when you're not.",
    },
  ],
  takeaways: [
    'Losses feel roughly 2x as painful as equivalent gains feel good — this is loss aversion, and it distorts nearly every investing decision unless you watch for it.',
    "A falling price isn't new information. Before reacting, ask whether anything about the business actually changed.",
    "Your purchase price is irrelevant to what a stock is worth today. The disposition effect makes investors sell winners early and hold losers too long.",
    "Your best defense isn't better instincts — it's a process built in calm moments. Write down your reasoning, set sell criteria in advance, and check prices less often.",
    'You\'ve learned to manage your instincts. Next: what makes some businesses nearly impossible to compete with.',
  ],
  completionMessages: {
    perfect:
      "You've nailed it. Knowing that your brain is the problem is the first step to solving it. Most investors never learn this — you now have a head start.",
    great:
      "Strong instincts about your instincts. You're already ahead of most investors just by knowing how loss aversion works.",
    good:
      'Good foundation. Watch for the pull of loss aversion in yourself — the first time you feel it during a real drop, this lesson will click.',
    low:
      "Worth revisiting. The hardest part of investing isn't the math — it's keeping your brain from sabotaging your decisions.",
  },
};
