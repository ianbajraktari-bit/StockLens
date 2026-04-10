import { Search, Activity, Anchor, TrendingUp, Calculator, Zap, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsDriversLesson: Lesson = {
  id: 'foundations-drivers',
  emoji: '🔍',
  title: 'What Actually Drives a Business',
  subtitle: 'Learning to look underneath the headline numbers',
  description:
    "Two businesses can both grow 20% — for completely different reasons. You'll learn to trace revenue back to the one input that actually moved, spot the difference between durable and fragile growth, and tear apart a founder's pitch to find out if they understand their own business.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'Why the same growth can mean very different things', icon: Search },
    { label: 'Tracing revenue to the input that moved', icon: Calculator },
    { label: 'Retention: the driver that keeps businesses alive', icon: Anchor },
    { label: 'How investors evaluate growth quality', icon: TrendingUp },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: which growth source is stickier?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Growth Source Intuition',
      topicIcon: Zap,
      intro: 'Both businesses grew 20%. Tap the one whose growth is stickier — harder to reverse.',
      prompts: [
        {
          setup: 'Two restaurants, both grew 20%.',
          left: { label: 'Restaurant A', sublabel: 'more customers walking in' },
          right: { label: 'Restaurant B', sublabel: 'same customers spending more' },
          correct: 'right',
          flash: 'New foot traffic can vanish. Customers choosing to spend more signals real value.',
        },
        {
          setup: 'Two SaaS companies, both grew 25%.',
          left: { label: 'Company A', sublabel: 'existing users upgrading plans' },
          right: { label: 'Company B', sublabel: 'heavy ad spend on new sign-ups' },
          correct: 'left',
          flash: 'Upgrades come from product love. Ad-driven sign-ups disappear when the budget dries up.',
        },
        {
          setup: 'Two gyms, both grew 15%.',
          left: { label: 'Gym A', sublabel: 'raised prices 15%' },
          right: { label: 'Gym B', sublabel: 'members visiting more often, buying add-ons' },
          correct: 'right',
          flash: 'Price hikes can push people away. Customers spending more voluntarily is the strongest signal.',
        },
        {
          setup: 'Two e-commerce stores, both grew 30%.',
          left: { label: 'Store A', sublabel: 'repeat orders up 40%' },
          right: { label: 'Store B', sublabel: 'one viral product spike' },
          correct: 'left',
          flash: 'Viral spikes fade. Repeat-order growth compounds.',
        },
        {
          setup: 'Two tutoring services, both grew 20%.',
          left: { label: 'Service A', sublabel: 'students booking more sessions' },
          right: { label: 'Service B', sublabel: 'a new location in a different city' },
          correct: 'left',
          flash: 'More sessions per student = deeper engagement. New locations are expensive gambles.',
        },
        {
          setup: 'Two streaming platforms, both added 1M users.',
          left: { label: 'Platform A', sublabel: 'free trial conversions via ads' },
          right: { label: 'Platform B', sublabel: 'word-of-mouth referrals' },
          correct: 'right',
          flash: 'Referrals cost nothing and signal product quality. Paid trials often churn fast.',
        },
      ],
      takeaway:
        "Growth that comes from existing customers going deeper is almost always stickier than growth from acquiring new ones. Always ask how a business grew, not just how much.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: trace this month's revenue
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Revenue Math · This Month',
      topicIcon: Calculator,
      context:
        'You own a tutoring business. This month:\n• 40 students enrolled\n• Each averages 3 sessions\n• You charge $200 per session',
      question: "What's this month's revenue?",
      answer: 24000,
      tolerance: 1000,
      unit: '$',
      hint: 'students × sessions × price',
      reveal:
        '40 × 3 × $200 = $24,000. Revenue is just three inputs multiplied together. When revenue changes, one of these inputs moved.',
      takeaway: 'Revenue is an output. Always decompose it into the inputs that drive it.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: trace last month's revenue
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Revenue Math · Last Month',
      topicIcon: Calculator,
      context:
        'Same tutoring business, last month:\n• 40 students (same)\n• 3.5 sessions per student (higher)\n• $200 per session (same)',
      question: "What was last month's revenue?",
      answer: 28000,
      tolerance: 1000,
      unit: '$',
      reveal:
        '40 × 3.5 × $200 = $28,000. Revenue dropped $4,000 this month — but students and price didn\'t change. Only one input moved: sessions per student.',
      takeaway: "When revenue changes, don't panic at the headline. Find which input moved.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: which input is the key driver?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Find the Driver',
      topicIcon: Activity,
      context:
        'This month: 40 students × 3 sessions × $200 = $24,000\nLast month: 40 students × 3.5 sessions × $200 = $28,000\n\nRevenue dropped $4,000. New inquiries actually went up (15 vs. 12 last month).',
      question: 'What caused the revenue drop?',
      options: [
        "Fewer interested students — demand is falling",
        "Price is too high — students are going elsewhere",
        "Sessions per student dropped — the same 40 students are coming less often",
        "Need more students — 40 isn't enough",
      ],
      correctIndex: 2,
      punchline:
        'Students and price didn\'t change. Inquiries went up. The only input that moved was sessions per student: 3.5 → 3. That\'s the key driver — the one number you should actually be watching.',
      wrongNudges: [
        "Inquiries went up, not down. Demand is growing — the problem is per-student engagement.",
        "Price stayed at $200. It didn't move at all.",
        '',
        "Student count is exactly 40. The decline happened with the same number of students — the problem is per-student behavior.",
      ],
      takeaway:
        'The key driver is the specific input that actually moved. Find it, and you know exactly where to focus.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: diagnose a founder's pitch
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Pitch Diagnosis',
      topicIcon: Flag,
      intro:
        "A business owner pitches you for a $100K investment. Tap the parts of his pitch that show he doesn't understand what drives his own business.",
      passage: [
        { type: 'text', value: '"We ' },
        {
          type: 'chip',
          value: 'grew revenue 30%',
          signal: true,
          feedback:
            'A headline number with no explanation of what drove it. Was it new customers? Higher prices? One big contract? Without knowing the driver, you can\'t tell if this growth will continue.',
        },
        { type: 'text', value: ' last year! Our ' },
        {
          type: 'chip',
          value: 'product is great',
          signal: true,
          feedback:
            '"Great product" is a feeling, not a metric. What does the data say? Usage frequency? Retention rate? NPS score? Vague claims without evidence should worry you.',
        },
        { type: 'text', value: ' and ' },
        {
          type: 'chip',
          value: 'customers love us',
          signal: true,
          feedback:
            'How do you know? What\'s the retention rate? How often do they use the product? "Customers love us" without data is a red flag, not a selling point.',
        },
        { type: 'text', value: '. We\'re ' },
        {
          type: 'chip',
          value: 'hiring fast',
          signal: false,
          feedback: 'Hiring isn\'t inherently a red flag — growth often requires staff. Not the problem here.',
        },
        { type: 'text', value: ' and expanding to three new markets. ' },
        {
          type: 'chip',
          value: "This is going to be huge",
          signal: true,
          feedback:
            'Enthusiasm without mechanism. He can\'t tell you what specific input drives the business, but he\'s confident it\'ll be huge. That disconnect is the core red flag.',
        },
        { type: 'text', value: '!"' },
      ],
      requiredSignals: 3,
      reveal:
        "This owner gave you headlines, feelings, and enthusiasm — but never identified the driver. He can't tell you what input to watch, which means he won't see trouble coming until it's too late.",
      takeaway:
        "If a business owner can't tell you the specific thing that drives their business, they don't really understand it. And if they don't understand it, you shouldn't invest.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Drill: retention math — grow or shrink?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'The Retention Engine',
      topicIcon: Anchor,
      intro:
        'Each subscription business acquires new customers at the rate shown. Does it grow this month, or shrink?',
      prompts: [
        {
          setup: '5,000 subscribers. Loses 400/month (8%). Adds 300 new.',
          left: { label: 'Grows' },
          right: { label: 'Shrinks' },
          correct: 'right',
          flash: 'Loses 400, adds 300 = net -100. The leaky bucket drains faster than it fills.',
        },
        {
          setup: '5,000 subscribers. Loses 50/month (1%). Adds 100 new.',
          left: { label: 'Grows' },
          right: { label: 'Shrinks' },
          correct: 'left',
          flash: 'Loses 50, adds 100 = net +50. Low churn + modest acquisition = steady growth.',
        },
        {
          setup: '10,000 subscribers. Loses 1,500/month (15%). Adds 1,500 new.',
          left: { label: 'Grows' },
          right: { label: 'Shrinks' },
          correct: 'right',
          flash: 'Flat! But spending a fortune to replace 1,500 subscribers just to stand still is a treadmill, not a business.',
        },
        {
          setup: '2,000 subscribers. Loses 20/month (1%). Adds 60 new.',
          left: { label: 'Grows' },
          right: { label: 'Shrinks' },
          correct: 'left',
          flash: 'Loses 20, adds 60 = net +40. Low churn turns even modest acquisition into real growth.',
        },
        {
          setup: '8,000 subscribers. Loses 800/month (10%). Adds 700 new.',
          left: { label: 'Grows' },
          right: { label: 'Shrinks' },
          correct: 'right',
          flash: 'Net -100. High churn devours acquisition. This business needs to fix retention before spending more on marketing.',
        },
        {
          setup: '3,000 subscribers. Loses 30/month (1%). Adds 0 new.',
          left: { label: 'Grows' },
          right: { label: 'Shrinks' },
          correct: 'right',
          flash: 'Even at 1% churn, zero acquisition means slow decline. But 2,970 still paying is a solid floor.',
        },
      ],
      takeaway:
        'Retention is the engine. Low churn makes every new customer compound. High churn makes every new customer a replacement. Fix the leak before pouring in more water.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: which pitch earns your confidence?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Thinking Like an Investor',
      topicIcon: TrendingUp,
      context:
        'Two founders pitch you.\n\nOwner A: "We grew 30%. Product is great, customers love us, hiring fast. This is going to be huge."\n\nOwner B: "We grew 14%. Our key driver is weekly usage — up from 3 to 4 times per week. When usage rises, renewals follow. Renewals are 85% of revenue. As long as usage stays above 3, growth is predictable."',
      question: 'Which pitch gives you more confidence?',
      options: [
        'Owner A — 30% growth speaks for itself',
        "Owner B — she identified the driver, showed it's improving, and explained the causal chain",
        'Owner A — "customers love us" is all that matters',
        "Neither — need financial statements first",
      ],
      correctIndex: 1,
      punchline:
        "Owner B gave you a thesis: usage drives renewals, renewals drive revenue, and usage is going up. Owner A gave you a headline and enthusiasm. If Owner A's growth stalls, he won't know why. Owner B will.",
      wrongNudges: [
        '30% growth with no explanation of the driver could be a one-time spike. Without understanding the mechanism, you can\'t predict if it continues.',
        '',
        '"Customers love us" without data is a feeling, not a fact. Owner B showed the data that proves engagement is rising.',
        'Financial statements are backward-looking. Owner B is telling you the forward-looking story: what drives the business and whether it\'s getting stronger.',
      ],
      takeaway:
        "The best investors don't just ask 'how much?' — they ask 'what drives this, and is the driver getting stronger?' A business with a known, improving key driver is dramatically more predictable.",
    },
  ],
  takeaways: [
    'The same growth rate can come from very different sources — always ask how a business grew, not just how much.',
    "Revenue is an output. When it changes, decompose it into inputs and find the one that moved. That's the key driver.",
    "For subscription businesses, the key driver is usually retention. High churn devours growth; low churn compounds it.",
    "Before investing, ask the owner to identify the one thing that drives the business. If they can't, that's a red flag.",
  ],
  completionMessages: {
    perfect:
      "Excellent. You can already look past headline numbers and find what actually makes a business tick. That's the core skill of fundamental analysis.",
    great:
      "Strong work. You're learning to ask 'what drives this?' instead of just 'how much?' — that separates real analysis from surface-level number reading.",
    good:
      'Good foundation. The habit of tracing revenue back to its driver will make every company lesson much easier to understand.',
    low:
      "Worth revisiting. Every company you'll analyze in later lessons has one or two key drivers — once you can spot them, everything else falls into place.",
  },
};
