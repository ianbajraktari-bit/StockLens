import { Scale, ShieldCheck, TrendingUp, Flag, Target, Calculator, Zap } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMarginsLesson: Lesson = {
  id: 'foundations-margins',
  emoji: '💡',
  title: 'What a Business Keeps',
  subtitle: 'Why earning money and keeping money are different skills',
  description:
    "Before you analyze any stock, you need one fundamental instinct: how much a business earns and how much it actually keeps are two very different things. You'll build that instinct fast — through quick drills, real calculations, and a real-world pitch you'll learn to tear apart.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['margins'],
  keyFacts: [],
  topics: [
    { label: 'Spotting which businesses keep more', icon: Zap },
    { label: 'Calculating margins from raw numbers', icon: Calculator },
    { label: 'Spotting red flags in a real pitch', icon: Flag },
    { label: 'Why thin margins don\'t survive surprises', icon: ShieldCheck },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: warm up the intuition with rapid binary taps
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Margin Intuition',
      topicIcon: Zap,
      intro: 'Tap which business keeps more per dollar. Go fast — this is gut, not math.',
      prompts: [
        {
          left: { label: 'Software app', sublabel: 'keeps 40¢ per $1' },
          right: { label: 'Bakery', sublabel: 'keeps 10¢ per $1' },
          correct: 'left',
          flash: 'Software is written once and served to millions — each new user costs almost nothing. Every loaf costs flour, labor, and oven time.',
        },
        {
          setup: 'Two bakeries, same $1,000 in daily sales.',
          left: { label: 'Bakery A', sublabel: 'spends $900' },
          right: { label: 'Bakery B', sublabel: 'spends $600' },
          correct: 'right',
          flash: 'Same sales. B keeps $400, A keeps $100. Four times stronger.',
        },
        {
          left: { label: 'Luxury handbags', sublabel: '45% margin' },
          right: { label: 'Discount grocer', sublabel: '2% margin' },
          correct: 'left',
          flash: 'Luxury keeps 45¢ on the dollar. Grocers live on volume, not strength.',
        },
        {
          left: { label: 'Airline', sublabel: 'keeps 4¢ per $1' },
          right: { label: 'Payment network', sublabel: 'keeps 50¢ per $1' },
          correct: 'right',
          flash: 'Payment networks process billions of transactions with minimal per-unit cost. Airlines burn fuel, pay crews, and maintain planes for every single flight.',
        },
        {
          left: { label: 'Auto manufacturer', sublabel: '6% margin' },
          right: { label: 'Enterprise software', sublabel: '30% margin' },
          correct: 'right',
          flash: 'Cars need steel, labor, and warranties for every unit. Software ships copies of code at near-zero cost.',
        },
        {
          left: { label: 'Power utility', sublabel: '20% margin' },
          right: { label: 'Used car dealer', sublabel: '4% margin' },
          correct: 'left',
          flash: 'Slow and steady utilities crush thin-margin resellers.',
        },
      ],
      takeaway:
        'Per-dollar keeping power varies wildly because of cost structure: businesses with low per-unit costs (software, networks) keep far more than those with high per-unit costs (food, manufacturing, airlines).',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: do the actual math on Bakery A
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Do The Math · Bakery A',
      topicIcon: Calculator,
      context: 'Bakery A sells $1,000 of bread per day. It spends $900 on flour, rent, and staff.',
      question: "What's its profit margin?",
      answer: 10,
      tolerance: 1,
      unit: '%',
      hint: '(sales − costs) ÷ sales',
      reveal:
        'Bakery A keeps $100 out of $1,000 — that\'s 10¢ on every dollar, a 10% margin. Any cost shock eats most of that sliver.',
      takeaway: 'Margin = (sales − costs) ÷ sales. Always work it out, even in your head.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: same drill, Bakery B — feel the contrast
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Do The Math · Bakery B',
      topicIcon: Calculator,
      context: 'Bakery B sells the same $1,000 per day — but only spends $600.',
      question: "What's Bakery B's profit margin?",
      answer: 40,
      tolerance: 1,
      unit: '%',
      reveal:
        '$400 kept out of $1,000 = 40% margin. Four times more resilient than Bakery A — on the exact same sales.',
      takeaway: 'Same revenue. Completely different strength. This is the whole point of the lesson.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: synthesize the two estimates into a verdict
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Verdict',
      topicIcon: Scale,
      context:
        'Bakery A: $1,000 in, $900 out → 10% margin.\nBakery B: $1,000 in, $600 out → 40% margin.',
      question: 'Which is the stronger business?',
      options: [
        'Equal — same daily sales',
        'Bakery B — it keeps 4x more per dollar',
        'Bakery A — higher costs mean better quality',
        'Need to know how many locations each has',
      ],
      correctIndex: 1,
      punchline:
        'Sales tell you size. Margin tells you strength. Bakery B has 4x more cash to save, hire, or survive a bad month.',
      wrongNudges: [
        'Same sales ≠ same strength. Look at what each one keeps.',
        '',
        'Spending more often means waste, not quality. Check the output, not the input.',
        'Locations multiply whatever each store keeps. Thin × 10 is still thin.',
      ],
      takeaway: 'Sales tell you size. Margin tells you strength.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap-the-signal: find the red flags in a real pitch
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Red Flag Drill',
      topicIcon: Flag,
      intro:
        'A restaurant owner is pitching you on investing. Tap the parts that should worry you — phrases that sound exciting but ignore what the business actually keeps.',
      passage: [
        { type: 'text', value: '"We grew ' },
        {
          type: 'chip',
          value: 'revenue 40%',
          signal: true,
          feedback:
            'Revenue growth without margin context is meaningless. A bigger thin-margin business is still thin.',
        },
        { type: 'text', value: ' last year! We now operate ' },
        {
          type: 'chip',
          value: 'five locations',
          signal: false,
          feedback: 'Number of locations is neutral on its own — not a red flag.',
        },
        { type: 'text', value: ' across the city. Our ' },
        {
          type: 'chip',
          value: 'ingredient costs are up 15%',
          signal: true,
          feedback:
            'Rising costs squeeze margin directly. Restaurants already run thin — this is the kind of shock that kills them.',
        },
        { type: 'text', value: ', but we\'re launching a ' },
        {
          type: 'chip',
          value: 'heavy marketing push',
          signal: true,
          feedback:
            'More marketing = more costs. If margin doesn\'t expand, it\'s just a treadmill of paid customers.',
        },
        { type: 'text', value: ' to bring in more customers. ' },
        {
          type: 'chip',
          value: "We don't track profit margin",
          signal: true,
          feedback:
            'If the owner doesn\'t know their margin, they don\'t know whether each new customer makes or loses money. Disqualifying.',
        },
        { type: 'text', value: ' but we expect to outgrow the industry average. We\'re raising capital to ' },
        {
          type: 'chip',
          value: 'expand fast',
          signal: true,
          feedback:
            'Expanding a thin-margin business multiplies the thinness. Scale doesn\'t fix bad unit economics — it amplifies them.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 4,
      reveal:
        'Every red flag in this pitch points to the same problem: nobody is watching what the business actually keeps. Revenue, locations, marketing, expansion — all noise without margin discipline.',
      takeaway:
        'Beware pitches that trumpet revenue and growth but go quiet on cost discipline, margin tracking, and unit economics.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Drill: survival drill — does it absorb a 20% cost shock?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Survival Drill',
      topicIcon: Target,
      intro:
        'Each business runs at the margin shown. Costs jump 20% overnight. Does it absorb the hit or get wiped out? Tap fast.',
      prompts: [
        {
          setup: 'Pizza shop · 5% margin',
          left: { label: 'Absorbs it' },
          right: { label: 'Wiped out' },
          correct: 'right',
          flash:
            '5% margin means costs are 95% of sales. Bumping those by 20% pushes costs to 114%. Done.',
        },
        {
          setup: 'SaaS company · 35% margin',
          left: { label: 'Absorbs it' },
          right: { label: 'Wiped out' },
          correct: 'left',
          flash: 'Costs go from 65% to 78%. Still keeps 22¢ per dollar. Software shrugs it off.',
        },
        {
          setup: 'Grocery chain · 2% margin',
          left: { label: 'Absorbs it' },
          right: { label: 'Wiped out' },
          correct: 'right',
          flash: 'A 2% cushion vs a 20% cost shock isn\'t a fight — it\'s a funeral.',
        },
        {
          setup: 'Luxury brand · 45% margin',
          left: { label: 'Absorbs it' },
          right: { label: 'Wiped out' },
          correct: 'left',
          flash: '45% margin eats the hit and still profits handsomely.',
        },
        {
          setup: 'Airline · 6% margin',
          left: { label: 'Absorbs it' },
          right: { label: 'Wiped out' },
          correct: 'right',
          flash: 'Airlines are structurally fragile. One fuel spike and they\'re underwater.',
        },
        {
          setup: 'Enterprise software · 50% margin',
          left: { label: 'Absorbs it' },
          right: { label: 'Wiped out' },
          correct: 'left',
          flash: '50% margin = nearly bulletproof against cost shocks.',
        },
      ],
      takeaway:
        'Thin margins look profitable — until the first cost shock. A cushion is insurance, not luxury.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: synthesize into the investor lesson
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Thinking Like an Investor',
      topicIcon: TrendingUp,
      context:
        'Two stocks trade at the same price.\n\nCompany A: Big electronics retailer. $50B in sales, keeps 1¢ per dollar.\nCompany B: Subscription software. $5B in sales, keeps 30¢ per dollar. Customers pay monthly.',
      question: 'Which is the better investment?',
      options: [
        'Company A — 10x the sales',
        'Company B — 30x the keeping power, with recurring income',
        "Equal — you can't compare across industries",
        "Company A — physical assets are more 'real'",
      ],
      correctIndex: 1,
      punchline:
        'Company B earns 3x more actual profit on 1/10 the sales — and that profit repeats monthly. This is exactly why software companies trade at 3-5x the valuation of retailers.',
      wrongNudges: [
        'Sales are size. Profit is strength. A 1¢ business can be smaller than a 30¢ one even at 10x the revenue.',
        '',
        'Every investment competes for the same dollar in your portfolio. Comparing across industries is the entire job.',
        'Stores depreciate. Code doesn\'t. "Real" physical assets are usually liabilities in disguise.',
      ],
      takeaway:
        "Investors don't buy sales. They buy per-dollar keeping power and how predictable it is.",
    },
  ],
  takeaways: [
    'How much a business sells and how much it keeps are two very different things — what it keeps is what matters.',
    'Profit margin = (sales − costs) ÷ sales. It\'s the share of every dollar the business actually pockets.',
    'Thin margins are fragile. A small cost shock can wipe out a thin-margin business while a high-margin one barely notices.',
    'Investors pay premium prices for businesses with high margins and predictable revenue — that\'s the foundation of stock valuation.',
    'You can spot margin strength. Next: the three layers of an income statement that tell you exactly where the money goes.',
  ],
  completionMessages: {
    perfect:
      "You've nailed the most fundamental concept in business analysis. Everything you learn from here builds on this instinct.",
    great:
      "Strong work. You understand that what a business keeps matters more than what it sells — that puts you ahead of most beginners.",
    good:
      "Good start. The core idea — margins matter more than revenue — will make everything else in investing click faster.",
    low:
      "Worth revisiting. This concept is the single most important foundation for everything else you'll learn about investing.",
  },
};
