import { Factory, BarChart3, Search, Shield, Gauge, Target } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsSectorsLesson: Lesson = {
  id: 'foundations-sectors',
  emoji: '🏭',
  title: 'Comparing Industries',
  subtitle:
    'Why a great company in a bad industry can be worse than an average company in a great one',
  description:
    "Not all industries are created equal. Some have structural advantages baked in — high margins, recurring revenue, pricing power. Others are brutal no matter how well you execute. You'll learn to compare sectors, spot cyclical traps, and understand why picking your industry matters more than picking your company.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['business_drivers', 'margins'],
  keyFacts: [],
  topics: [
    { label: 'Why some industries structurally earn more', icon: Factory },
    { label: 'What drives different sectors', icon: Search },
    { label: 'Cyclical vs defensive businesses', icon: Shield },
    { label: 'Choosing your battlefield before your stock', icon: Target },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Industry DNA — which industry has higher margins?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Industry DNA',
      topicIcon: Factory,
      intro:
        'Two industries. Tap the one with structurally higher profit margins. Think about cost structure, not individual companies.',
      prompts: [
        {
          left: { label: 'Software', sublabel: 'digital products' },
          right: { label: 'Airlines', sublabel: 'passenger travel' },
          correct: 'left',
          flash:
            'Software is written once and distributed infinitely at near-zero cost. Airlines burn fuel, pay crews, and maintain planes on every single flight.',
        },
        {
          left: { label: 'Payment networks', sublabel: 'transaction processing' },
          right: { label: 'Restaurants', sublabel: 'food service' },
          correct: 'left',
          flash:
            'Payment networks skim a tiny fee on billions of transactions with almost no physical cost. Restaurants pay for ingredients, labor, and rent on every plate served.',
        },
        {
          left: { label: 'Pharmaceuticals', sublabel: 'patented drugs' },
          right: { label: 'Grocery stores', sublabel: 'food retail' },
          correct: 'left',
          flash:
            'A patented drug costs pennies to manufacture but sells for hundreds. Grocers compete on razor-thin margins because every store sells the same milk and bread.',
        },
        {
          left: { label: 'Cloud infrastructure', sublabel: 'computing services' },
          right: { label: 'Retail', sublabel: 'physical stores' },
          correct: 'left',
          flash:
            'Cloud providers build infrastructure once and rent it to millions. Retailers lease real estate, stock inventory, and staff registers for every location.',
        },
        {
          left: { label: 'Insurance', sublabel: 'risk underwriting' },
          right: { label: 'Auto manufacturing', sublabel: 'vehicle production' },
          correct: 'left',
          flash:
            'Insurers collect premiums upfront and invest the float. Auto manufacturers spend thousands in steel, labor, and logistics for every car that rolls off the line.',
        },
        {
          left: { label: 'Luxury brands', sublabel: 'premium goods' },
          right: { label: 'Commodity chemicals', sublabel: 'bulk materials' },
          correct: 'left',
          flash:
            'Luxury brands command prices far above production cost because of brand power. Commodity chemicals are interchangeable — buyers shop purely on price.',
        },
      ],
      takeaway:
        'Industry structure sets the margin ceiling. Businesses with low per-unit costs (software, payments, pharma) structurally keep more per dollar than those with high per-unit costs (airlines, groceries, manufacturing).',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: The Industry Ceiling
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Industry Ceiling',
      topicIcon: BarChart3,
      context:
        'The BEST airline in the world has a 10% profit margin — it earns $5B on $50B revenue. An AVERAGE software company has a 25% profit margin — it earns $2.5B on $10B revenue.',
      question:
        'How many cents per dollar does the average software company keep?',
      answer: 25,
      tolerance: 3,
      unit: '%',
      hint: 'profit ÷ revenue',
      reveal:
        "The best airline barely matches an average software company's margin. Industry structure sets a ceiling — no amount of execution can overcome a structurally thin industry. Pick your industry before you pick your stock.",
      takeaway:
        'The best company in a bad industry often earns less per dollar than an average company in a good one. Structure beats execution.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: What Drives Each Sector
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What Drives Each Sector',
      topicIcon: Search,
      context:
        'Every industry has a primary driver:\n\n• Tech: innovation speed, switching costs, network effects\n• Banks: interest rate spread, credit quality, regulation\n• Energy: commodity prices, supply/demand, geopolitics\n• Consumer: brand strength, pricing power, consumer sentiment\n\nA bank\'s profits just jumped 20%.',
      question: 'The most likely reason is:',
      options: [
        'They launched a great new product',
        'Interest rates rose, widening their lending spread',
        'They cut costs aggressively',
        'Their stock price went up',
      ],
      correctIndex: 1,
      punchline:
        "Every industry has a primary driver. For banks it's rates. For energy it's oil prices. For tech it's product cycles. Before you analyze a company, understand what moves its industry — because the industry tide lifts or sinks all boats.",
      wrongNudges: [
        "Banks rarely grow 20% from product launches. Their profits are dominated by the spread between what they pay depositors and what they charge borrowers — and that spread is driven by interest rates.",
        '',
        "Cost-cutting rarely produces a 20% profit jump. Banks' biggest lever is the rate environment, which moves all banks' profits at once.",
        "A stock price going up doesn't increase a company's profits. It reflects what investors think about future profits — it doesn't cause them.",
      ],
      takeaway:
        "Before analyzing a company, understand what moves its industry. A bank's profits depend more on interest rates than on anything its CEO does.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: The Sector Trap — find structural problems in a pitch
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Sector Trap',
      topicIcon: Gauge,
      intro:
        'An analyst is pitching you on "the best airline in the world." Tap the phrases that reveal structural industry problems — things that won\'t change no matter how good the company is.',
      passage: [
        { type: 'text', value: '"This is the most well-run airline in the industry. It has ' },
        {
          type: 'chip',
          value: 'award-winning customer service',
          signal: false,
          feedback:
            'Good service is nice, but it doesn\'t fix the industry\'s structural economics. Not a red flag on its own.',
        },
        { type: 'text', value: ' and a ' },
        {
          type: 'chip',
          value: 'new fleet of fuel-efficient planes',
          signal: false,
          feedback:
            'Better planes help at the margin, but fuel efficiency doesn\'t eliminate fuel dependence. This is an improvement, not a structural fix.',
        },
        { type: 'text', value: '. However, ' },
        {
          type: 'chip',
          value: 'razor-thin 6% margins leave no room for error',
          signal: true,
          feedback:
            'A 6% margin means 94 cents of every dollar goes to costs. One bad quarter and profits vanish entirely. This is a structural ceiling, not a management failure.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Fuel costs are 30% of revenue and completely uncontrollable',
          signal: true,
          feedback:
            'When your single biggest cost is a commodity you can\'t control, your profits are hostage to global oil markets. No CEO can fix this.',
        },
        { type: 'text', value: ' ' },
        {
          type: 'chip',
          value: 'Customers choose on price — zero brand loyalty for most routes',
          signal: true,
          feedback:
            'When customers treat your product as interchangeable, you can\'t raise prices. Zero pricing power means margins stay permanently thin.',
        },
        { type: 'text', value: ' And ' },
        {
          type: 'chip',
          value: 'a single recession cuts travel demand 30-40%',
          signal: true,
          feedback:
            'Extreme demand sensitivity means revenue can crater overnight while fixed costs (planes, gates, crews) remain. This is structural fragility.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        "This airline might be excellent at what it does — but what it does is compete in a structurally brutal industry. Warren Buffett famously said investors would have been better off if someone had shot down the Wright Brothers' plane.",
      takeaway:
        'A great company in a structurally bad industry is still trapped by that structure. Thin margins, uncontrollable costs, and zero pricing power are industry problems, not company problems.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Drill: Cyclical vs Defensive
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Cyclical vs Defensive',
      topicIcon: Shield,
      intro:
        'A recession hits. Which business holds up better? Tap the one that keeps earning through the downturn.',
      prompts: [
        {
          setup: 'Recession hits the economy.',
          left: { label: 'Cloud subscriptions', sublabel: 'businesses need their tools' },
          right: { label: 'Auto dealerships', sublabel: 'big discretionary purchase' },
          correct: 'left',
          flash:
            'Companies cancel car fleets before they cancel the software that runs their business. Subscriptions stick; big purchases get postponed.',
        },
        {
          setup: 'Consumer spending drops sharply.',
          left: { label: 'Grocery stores', sublabel: 'people still eat' },
          right: { label: 'Luxury retailers', sublabel: '$500 handbags' },
          correct: 'left',
          flash:
            'People cut luxuries first and essentials last. Grocery revenue barely dips while luxury spending can crater 30%+.',
        },
        {
          setup: 'Unemployment rises to 8%.',
          left: { label: 'Healthcare', sublabel: 'people still get sick' },
          right: { label: 'Construction', sublabel: 'new buildings and homes' },
          correct: 'left',
          flash:
            'You don\'t postpone a heart surgery. But developers freeze construction projects the moment demand softens.',
        },
        {
          setup: 'GDP contracts for two quarters.',
          left: { label: 'Electric utilities', sublabel: 'lights stay on' },
          right: { label: 'Semiconductor equipment', sublabel: 'chip factory tools' },
          correct: 'left',
          flash:
            'Everyone still uses electricity. But chip makers delay billion-dollar factory upgrades the instant the outlook dims.',
        },
        {
          setup: 'Housing market cools.',
          left: { label: 'Toothpaste maker', sublabel: 'daily essential' },
          right: { label: 'Investment bank', sublabel: 'deals and trading' },
          correct: 'left',
          flash:
            'You brush your teeth in a recession. But IPOs, mergers, and trading volumes all collapse when markets freeze.',
        },
        {
          setup: 'Oil prices spike, inflation jumps.',
          left: { label: 'Waste management', sublabel: 'trash doesn\'t stop' },
          right: { label: 'Airlines', sublabel: 'fuel is 30% of costs' },
          correct: 'left',
          flash:
            'Garbage collection is non-negotiable. Airlines get hit twice: fuel costs spike AND passengers cut back on travel.',
        },
      ],
      takeaway:
        'Defensive businesses sell what people can\'t stop buying (food, healthcare, utilities, software they depend on). Cyclical businesses sell what people postpone when times get tough (cars, luxury, construction, travel).',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Estimate: The Cycle Tax
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Cycle Tax',
      topicIcon: BarChart3,
      context:
        'A cyclical company (auto manufacturer) earns $5B in a good year and loses $1B in a bad year. Business cycles last roughly 5 years: 3 good years, 2 bad years.',
      question: "What's the average annual profit over a full cycle?",
      answer: 2.6,
      tolerance: 0.5,
      unit: '$B',
      hint: '(3 × $5B + 2 × −$1B) ÷ 5',
      reveal:
        "Cyclical companies look incredible at the peak and terrifying at the trough. The mistake is buying at peak earnings (when the P/E looks cheap) and selling at trough earnings (when the P/E looks expensive). Cyclicals require you to think in averages, not snapshots.",
      takeaway:
        'Never value a cyclical company on a single year\'s earnings. Use the average across a full cycle — the "mid-cycle" earnings — or you\'ll buy high and sell low.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: Picking Your Battlefield
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Picking Your Battlefield',
      topicIcon: Target,
      context:
        'You have $10,000 to invest in one stock.\n\nCompany A: Best-managed airline. 10% margin, cyclical, commodity pricing.\nCompany B: Average cloud software company. 25% margin, recurring revenue, switching costs, 30x P/E.\nCompany C: Dominant payment network. 50% margin, network effects, 35x P/E.',
      question: 'Which question matters MOST before choosing?',
      options: [
        'Which has the lowest P/E ratio?',
        'Which industry has structural advantages that protect profits through cycles?',
        'Which company grew fastest last year?',
        'Which stock analysts recommend most?',
      ],
      correctIndex: 1,
      punchline:
        "Industry structure is destiny. A dominant company in a structurally advantaged industry (high margins, recurring revenue, switching costs) will almost always outperform a brilliantly managed company in a structurally disadvantaged one. Pick your battlefield before you pick your soldier.",
      wrongNudges: [
        'A low P/E on a cyclical, thin-margin business often means you\'re buying at peak earnings right before profits collapse. Cheap can be a trap.',
        '',
        'Last year\'s growth in a cyclical industry might be the peak. Growth without structural advantages is fragile and unrepeatable.',
        'Analyst recommendations follow momentum, not structure. They\'ll recommend the airline at the top of the cycle and downgrade it at the bottom.',
      ],
      takeaway:
        'The single most important investment question isn\'t "which company?" — it\'s "which industry?" Structure determines the ceiling for every company within it.',
    },
  ],
  takeaways: [
    'Industry structure sets margin ceilings. The best company in a structurally bad industry often earns less per dollar than an average company in a great one.',
    'Every sector has a primary driver — rates for banks, oil for energy, product cycles for tech. Know the driver before you analyze the company.',
    'Defensive businesses (essentials) hold up in recessions. Cyclical businesses (discretionary spending) can lose 30-40% of revenue overnight.',
    'Pick your industry before you pick your stock. Structural advantages like high margins, recurring revenue, and switching costs matter more than brilliant management.',
  ],
  completionMessages: {
    perfect:
      'You understand industry structure — the invisible force that determines which companies can thrive and which are fighting gravity. That puts you ahead of most investors.',
    great:
      'Strong sector intuition. You can see the structural ceiling above industries and know to check it before falling in love with any individual company.',
    good:
      'Good start on thinking in sectors. Keep building this instinct — the habit of asking "what industry is this?" before "what company is this?" will save you from many traps.',
    low:
      'Worth revisiting. Industry structure is one of the most overlooked factors in investing — once you see it, you\'ll never analyze a stock the same way again.',
  },
};
