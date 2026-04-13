import { Swords, Castle, Eye, TrendingUp, Zap, Calculator } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMoatsLesson: Lesson = {
  id: 'foundations-moats',
  emoji: '🏰',
  title: 'What Keeps Winners Winning',
  subtitle: 'Why some great businesses stay great — and others get caught',
  description:
    "Some businesses dominate for decades. Others flame out after a few good years. The difference is almost never luck — it's whether the business has a structural defense competitors can't copy. You'll learn to spot the four types of moats, calculate what they're worth, and tell a real moat from a fake one.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['moats'],
  keyFacts: [],
  topics: [
    { label: 'Why winners lose when they have no defense', icon: Swords },
    { label: 'The four most common moats', icon: Castle },
    { label: 'How to tell a real moat from a fake one', icon: Eye },
    { label: 'Why moats translate into valuation premiums', icon: TrendingUp },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: which business survives a competitor?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Moat Intuition',
      topicIcon: Zap,
      intro: 'A well-funded competitor enters each market. Tap which business keeps its customers.',
      prompts: [
        {
          setup: 'Competitor opens across the street.',
          left: { label: 'Generic burger stand', sublabel: 'same menu as anyone' },
          right: { label: 'Cult-favorite with secret sauce', sublabel: 'customers drive 20 min for it' },
          correct: 'right',
          flash: 'Customers come for something only this stand has. Generic gets undercut instantly.',
        },
        {
          setup: 'A rival launches with better features.',
          left: { label: 'Project management app', sublabel: '8 years of team data stored' },
          right: { label: 'Note-taking app', sublabel: 'easy to export, no lock-in' },
          correct: 'left',
          flash: 'Switching means migrating 8 years of workflows. The note app loses users in a week.',
        },
        {
          setup: 'A cheaper alternative appears.',
          left: { label: 'Payment network', sublabel: 'accepted by millions of merchants' },
          right: { label: 'New fintech card', sublabel: 'accepted at 200 stores' },
          correct: 'left',
          flash: 'Merchants accept what customers carry. Customers carry what merchants accept. Impossible to break.',
        },
        {
          setup: 'Both sell the same commodity product.',
          left: { label: 'Small manufacturer', sublabel: '$50 per unit cost' },
          right: { label: 'Giant manufacturer', sublabel: '$28 per unit cost' },
          correct: 'right',
          flash: 'Scale crushes unit costs. The small player can\'t match the price and survive.',
        },
        {
          setup: 'A startup copies the product exactly.',
          left: { label: '130-year-old soda brand', sublabel: 'identity, nostalgia, trust' },
          right: { label: 'New energy drink', sublabel: 'trendy but 2 years old' },
          correct: 'left',
          flash: 'You can copy a formula. You can\'t copy 130 years of brand identity overnight.',
        },
        {
          setup: 'Competitor offers 20% lower prices.',
          left: { label: 'Accounting software', sublabel: 'stores 5 years of client data' },
          right: { label: 'Freelance marketplace', sublabel: 'easy to switch platforms' },
          correct: 'left',
          flash: 'Migrating financial data is terrifying. The marketplace loses freelancers to the first discount.',
        },
      ],
      takeaway:
        'Some businesses can be copied in a week. Others would take years and billions. That gap is the moat.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the cost of no moat
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Cost of No Moat',
      topicIcon: Calculator,
      context:
        'A generic burger stand earns $500,000/year. A cheaper competitor opens across the street. Customers have no reason to stay — the food is identical. Revenue drops 60%.',
      question: "What's the stand's new annual revenue?",
      answer: 200000,
      tolerance: 25000,
      unit: '$',
      hint: '$500,000 × (1 − 0.60)',
      reveal:
        '$500,000 × 0.40 = $200,000. That\'s what happens when customers can leave for free. The cult-favorite stand across town? It barely noticed the competitor. The difference is a moat.',
      takeaway: 'Without a structural defense, profits evaporate the moment competition arrives.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Drill: name the moat type
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Name the Moat',
      topicIcon: Castle,
      intro: 'Each business has a moat. Tap the type that best describes it.',
      prompts: [
        {
          setup: 'Enterprise software with years of customer data. Switching means retraining staff and migrating files.',
          left: { label: 'Switching costs' },
          right: { label: 'Network effects' },
          correct: 'left',
          flash: 'The pain of leaving keeps customers locked in. Classic switching costs.',
        },
        {
          setup: 'Social media platform. More users → more content → more users.',
          left: { label: 'Brand' },
          right: { label: 'Network effects' },
          correct: 'right',
          flash: 'Each new user makes the product more valuable for everyone. That\'s network effects.',
        },
        {
          setup: '130-year-old soda. Customers buy it for identity and nostalgia, not taste.',
          left: { label: 'Brand' },
          right: { label: 'Scale' },
          correct: 'left',
          flash: 'Decades of trust and emotional connection that money can\'t buy overnight.',
        },
        {
          setup: 'Warehouse retailer buying in massive quantities. Unit cost 40% below competitors.',
          left: { label: 'Switching costs' },
          right: { label: 'Scale' },
          correct: 'right',
          flash: 'Volume drives unit costs down. Smaller competitors simply can\'t match the price.',
        },
        {
          setup: 'Payment network: millions of merchants accept it because billions carry it.',
          left: { label: 'Network effects' },
          right: { label: 'Brand' },
          correct: 'left',
          flash: 'Two-sided network. Merchants need cardholders. Cardholders need merchants. Unbreakable loop.',
        },
        {
          setup: 'Cloud platform where developers build apps on proprietary APIs. Moving means rewriting everything.',
          left: { label: 'Scale' },
          right: { label: 'Switching costs' },
          correct: 'right',
          flash: 'Proprietary APIs create code-level lock-in. Switching costs in their purest form.',
        },
      ],
      takeaway:
        'The four moats — switching costs, network effects, brand, and scale — each work differently, but they all share one trait: they\'re structural, not personal.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: real vs fake moat
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Real vs. Fake Moat',
      topicIcon: Eye,
      intro:
        'A fitness studio owner is pitching her business as "moat-protected." Tap the claims that sound like moats but aren\'t structural.',
      passage: [
        { type: 'text', value: '"Our advantage is our ' },
        {
          type: 'chip',
          value: 'celebrity trainer',
          signal: true,
          feedback:
            'One person = one dependency. If she leaves, the "moat" walks out with her. Real moats survive when key people leave.',
        },
        { type: 'text', value: ' — she has 2 million followers and everyone joins because of her. We\'ve had ' },
        {
          type: 'chip',
          value: 'viral growth',
          signal: true,
          feedback:
            'Viral growth is a tailwind, not a moat. It can reverse as fast as it started. Ask: what stops a competitor from going viral next?',
        },
        { type: 'text', value: ' for the past year. We ' },
        {
          type: 'chip',
          value: 'charge premium prices',
          signal: false,
          feedback: 'Premium pricing can be a sign of brand strength. Not a red flag on its own.',
        },
        { type: 'text', value: ' because we\'re ' },
        {
          type: 'chip',
          value: 'the hottest studio in town',
          signal: true,
          feedback:
            '"Hottest" is a moment, not a moat. Trends fade. What structural advantage keeps customers when the next hot thing opens?',
        },
        { type: 'text', value: '. No competitor can match our ' },
        {
          type: 'chip',
          value: 'Instagram presence',
          signal: true,
          feedback:
            'Social media presence is marketing, not a moat. Another studio can build a following with the right influencer. No structural lock-in.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'Every claimed advantage lives in one person, a trend, or a social media account. None are structural. If the trainer leaves, the trend fades, or a competitor goes viral — this business has nothing holding customers in.',
      takeaway:
        'A real moat survives when the founder leaves, the trend fades, and a well-funded competitor attacks. If it doesn\'t pass all three tests, it\'s not a moat.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Estimate: the moat premium
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Moat Premium',
      topicIcon: Calculator,
      context:
        'Two companies both earn $100M in profit.\n\nCompany X (no moat): Investors pay 10x earnings → valued at $1B.\nCompany Y (strong moat): Investors pay 35x earnings.',
      question: "What's Company Y's valuation?",
      answer: 3500,
      tolerance: 200,
      unit: '$M',
      hint: '$100M × 35',
      reveal:
        '$100M × 35 = $3.5 billion. Same profit, but the moat-protected business is worth 3.5x more. Investors pay that premium because they can count on those profits for years — the moat protects them.',
      takeaway: 'Moats don\'t just protect profits — they multiply what investors will pay for them.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: same earnings, different futures
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Same Profit, Different Value',
      topicIcon: TrendingUp,
      context:
        'Company X: $100M profit, trendy consumer gadget. Three new competitors this quarter. Expects to cut prices next year.\n\nCompany Y: $100M profit, specialty software for law firms. Customers stay 8+ years. No firm has switched away in 3 years. Thousands of case files stored.',
      question: 'Both earn $100M today. Why would a smart investor pay 3.5x more for Company Y?',
      options: [
        "A dollar of profit is a dollar of profit — they're worth the same",
        "Company Y's moat makes future profits nearly certain — investors pay for predictability",
        'Software is always worth more than hardware',
        "Company X has more upside since it's in a growing market",
      ],
      correctIndex: 1,
      punchline:
        "Investors don't buy today's profit — they buy future profits. Company Y's switching costs make those profits nearly guaranteed. Company X's could evaporate next quarter.",
      wrongNudges: [
        'Same profit today, but wildly different probability of the same profit next year. That probability difference is the entire valuation gap.',
        '',
        'Industry doesn\'t determine value — moat does. Some hardware businesses (like chip equipment maker ASML) have enormous moats.',
        'A "growing market" with no moat means competitors grow too. Growth without defense just means more people competing for the same pie.',
      ],
      takeaway:
        'The most successful investors in history built careers on one idea: find businesses with durable moats and pay a fair price for them.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: the moat test
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Moat Test',
      topicIcon: Swords,
      context:
        'Before investing in any business, you now have a single question to ask.',
      question: 'What is the most important question for evaluating a moat?',
      options: [
        '"Is the business growing fast?"',
        '"What stops a competitor from taking these customers — and would that defense survive if the founder left?"',
        '"Does the business have a famous brand?"',
        '"Is the business in a large market?"',
      ],
      correctIndex: 1,
      punchline:
        'Growth, brand, and market size are all noise without the structural test. If a well-funded competitor can take your customers tomorrow, nothing else matters.',
      wrongNudges: [
        'Growth without defense attracts competitors who erode the growth. The moat comes first.',
        '',
        'Famous brands can be moats — but not all brands are. The question is whether the brand creates structural lock-in, not just recognition.',
        'A large market with no moat means more competition, not more safety.',
      ],
      takeaway:
        'Every investment starts with one question: what stops a competitor from taking these customers? Everything else — growth, brand, market — only matters if the answer is convincing.',
    },
  ],
  takeaways: [
    'A moat is whatever stops a competitor from taking your customers. Without one, profits will eventually get squeezed.',
    "The four most common moats are switching costs, network effects, brand, and scale. They're all structural, not personal.",
    'Real moats survive when people, trends, and competitors change. Fake moats depend on a person, a fad, or a moment.',
    'Moats translate directly into valuation. Investors pay a premium for profits they can count on for years.',
    'You can spot moats. Next: the tool that tells you whether a stock is actually cheap or expensive.',
  ],
  completionMessages: {
    perfect:
      "You've nailed the single most important concept in long-term investing. Every great investor built their career on finding durable moats.",
    great:
      "Strong work. You can tell the difference between a business that will stay strong and one that's about to be squeezed.",
    good:
      'Good foundation. Keep asking "what stops a competitor?" on every business you look at.',
    low:
      'Worth revisiting. The difference between a real moat and a fake one gets easier with practice.',
  },
};
