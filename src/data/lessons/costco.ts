import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const costcoLesson: Lesson = {
  id: 'costco',
  emoji: '🏪',
  title: 'Costco Lesson',
  subtitle: 'When paying a premium for consistency might be the smart move',
  description:
    "Costco is the most expensive retailer in the world — and it has been for years. The bears have always been wrong. You'll unpack the membership flywheel, calculate what investors are really paying for, and decide whether 55x earnings for 7% growth is genius or insanity.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['margins', 'recurring_revenue', 'moats', 'valuation'],
  keyFacts: [
    { label: 'Market Cap', value: '~$460B', detail: 'The most valuable retailer in the world by far' },
    { label: 'Annual Revenue', value: '~$265B', detail: 'Growing ~7% annually — steady, not flashy' },
    { label: 'Membership Revenue', value: '~$4.8B', detail: 'Only 2% of revenue but ~70% of operating profit' },
    { label: 'Renewal Rate', value: '93%', detail: 'Among the highest retention rates in any industry' },
  ],
  topics: [
    { label: 'Unpacking the membership flywheel', icon: Target },
    { label: 'Why investors pay 55x for 7% growth', icon: TrendingUp },
    { label: 'The real risk to premium stocks', icon: ShieldAlert },
    { label: 'Deciding whether "always expensive" is still worth it', icon: BrainCircuit },
  ],
  storyArc: ['The Flywheel', 'The Premium', 'The Risk', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Costco business model instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Business Model DNA',
      topicIcon: Zap,
      intro: 'Quick instincts about how Costco actually works. Tap fast.',
      prompts: [
        {
          setup: 'Where does Costco actually make its profit?',
          left: { label: 'Merchandise sales', sublabel: '3.7% operating margin' },
          right: { label: 'Membership fees', sublabel: '~100% margin, $4.8B/year' },
          correct: 'right',
          flash: 'Membership fees are ~70% of operating profit. The retail operation essentially breaks even on purpose.',
        },
        {
          setup: 'Why does Costco cap markups at 14-15%?',
          left: { label: 'They can\'t charge more', sublabel: 'competition forces it' },
          right: { label: 'Low prices drive memberships', sublabel: 'the prices ARE the marketing' },
          correct: 'right',
          flash: 'Costco spends almost nothing on advertising. The unbeatable prices are the ad — they drive sign-ups and renewals.',
        },
        {
          setup: 'A 93% renewal rate means:',
          left: { label: 'Customers are satisfied', sublabel: 'nice but vague' },
          right: { label: 'Next year\'s profit is nearly locked in', sublabel: 'annuity-like revenue' },
          correct: 'right',
          flash: 'Satisfaction is nice. 93% renewal means Costco knows within ~7% how much profit it\'ll earn next year. That\'s what investors pay for.',
        },
        {
          setup: 'Why can\'t competitors copy Costco\'s model?',
          left: { label: 'The prices are too low to profit', sublabel: 'without membership economics' },
          right: { label: 'Costco has exclusive suppliers', sublabel: 'no one else can get the products' },
          correct: 'left',
          flash: 'Match Costco\'s prices without the membership model and you just lose money. Sam\'s Club has tried for 40 years.',
        },
        {
          setup: 'Costco raises membership fees every 5-7 years. What happens?',
          left: { label: 'Members leave', sublabel: 'price-sensitive customers churn' },
          right: { label: 'Renewals barely flinch', sublabel: '93% holds through increases' },
          correct: 'right',
          flash: 'When you raise prices and nobody leaves, that\'s pricing power. Each fee increase adds hundreds of millions in pure profit.',
        },
        {
          setup: 'What type of revenue is this?',
          left: { label: 'Recurring', sublabel: 'membership auto-renews yearly' },
          right: { label: 'Transactional', sublabel: 'depends on per-visit spending' },
          correct: 'left',
          flash: 'Memberships renew automatically. That\'s recurring, predictable, high-margin revenue — the kind investors pay premiums for.',
        },
      ],
      takeaway:
        'Costco\'s real product isn\'t groceries — it\'s membership access. The retail operation is a breakeven marketing engine for a high-margin recurring revenue business.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: membership as % of profit
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Profit Engine',
      topicIcon: Calculator,
      context:
        'Costco\'s total operating profit is ~$7B. Merchandise markup barely covers operating costs. Membership fees bring in ~$4.8B at near-100% margin (no cost to collect). The rest comes from the thin merchandise margin.',
      question: 'What % of Costco\'s operating profit comes from membership fees?',
      answer: 69,
      tolerance: 8,
      unit: '%',
      hint: '$4.8B ÷ $7B',
      reveal:
        '$4.8B ÷ $7B ≈ 69%. Nearly 70% of profit comes from a revenue line that\'s only 2% of total revenue. This is the Costco inversion: the $265B retail operation exists to protect the $4.8B membership stream. The tail wags the dog — and investors love it.',
      takeaway: 'The most important revenue line isn\'t always the biggest. Costco\'s $4.8B in memberships matters more than its $260B in merchandise.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: what 55x really means
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Premium Price Tag',
      topicIcon: Calculator,
      context:
        'Costco trades at 55x earnings. The retail sector average is ~22x. Costco grows at 7% annually — not a high-growth company. Investors don\'t pay 55x for 7% growth — they pay it for near-certainty. A 93% renewal rate means the profit base is almost annuity-like.',
      question: 'How many times more expensive is Costco vs. the average retailer? (55 ÷ 22)',
      answer: 2.5,
      tolerance: 0.3,
      unit: 'x',
      hint: '55 ÷ 22',
      reveal:
        '2.5x the average retailer. You\'re paying a 150% premium over normal retail for the predictability of the membership model. At 7% growth, the math only works if that premium is deserved — if you believe 93% renewals mean this year\'s profit will compound for decades, not just next year.',
      takeaway: 'At 2.5x the sector valuation, you\'re not buying a retailer — you\'re buying a prediction that consistency will compound. If that prediction is wrong, you overpaid.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: the Costco bull case
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Stress-Test the Bull Case',
      topicIcon: Flag,
      intro:
        'An analyst pitches Costco as a "must-own compounder." Tap the assumptions that could break.',
      passage: [
        { type: 'text', value: '"Costco has a ' },
        {
          type: 'chip',
          value: '93% membership renewal rate',
          signal: false,
          feedback: 'Current renewal rate is a verifiable fact. This is data, not an assumption.',
        },
        { type: 'text', value: ' and ' },
        {
          type: 'chip',
          value: '$4.8B in membership fees',
          signal: false,
          feedback: 'Current membership revenue is a fact.',
        },
        { type: 'text', value: '. The renewal rate ' },
        {
          type: 'chip',
          value: 'will stay above 90% indefinitely',
          signal: true,
          feedback:
            'The rate has been stable for 15+ years — but "indefinitely" is an assumption. A recession deeper than 2008, or a generational shift in shopping habits, could test it.',
        },
        { type: 'text', value: '. International expansion to ' },
        {
          type: 'chip',
          value: '300+ overseas warehouses will replicate US economics',
          signal: true,
          feedback:
            'Japan and Korea worked well. But China, Europe, and new markets may not replicate US-level loyalty or membership economics. International execution is uncertain.',
        },
        { type: 'text', value: '. Costco is ' },
        {
          type: 'chip',
          value: 'recession-resistant',
          signal: false,
          feedback:
            'Historically true. Costco gained members during 2008 and COVID. This is a demonstrated pattern, not just a claim.',
        },
        { type: 'text', value: ', and fee increases every 5-7 years mean ' },
        {
          type: 'chip',
          value: 'profit growth is guaranteed without losing members',
          signal: true,
          feedback:
            '"Guaranteed" is too strong. Fee increases have worked historically, but each one is a test of pricing power. At some point, the absolute fee level may cross a threshold.',
        },
        { type: 'text', value: '. At 55x, Costco is ' },
        {
          type: 'chip',
          value: 'fairly valued for a quality compounder',
          signal: true,
          feedback:
            '55x for 7% growth means you need near-perfect execution for 10+ years. "Fairly valued" hides how much can go wrong at this multiple.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'The facts are strong (renewal rate, recession resistance, membership economics). The danger is extrapolating them indefinitely: international markets replicate US success, fee increases never hit a ceiling, and 55x is fair for 7% growth. Quality is real — the question is the price.',
      takeaway:
        'Great businesses make great pitches sound bulletproof. Your job is to find the assumptions that must stay true for the price to work.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Drill: risk sorting
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Risk Ranking',
      topicIcon: ShieldAlert,
      intro: 'Each risk threatens a Costco investor. Tap whether it\'s likely or unlikely over 3-5 years.',
      prompts: [
        {
          setup: 'Interest rates stay elevated, compressing valuation multiples on expensive stocks.',
          left: { label: 'Likely', sublabel: 'macro conditions are shifting' },
          right: { label: 'Unlikely', sublabel: 'rates will come back down' },
          correct: 'left',
          flash: 'Multiple compression is the most probable bear case. 55x to 40x = 27% price drop, zero business deterioration.',
        },
        {
          setup: 'Renewal rate drops from 93% to 85%.',
          left: { label: 'Likely' },
          right: { label: 'Unlikely', sublabel: 'hasn\'t happened in 15+ years' },
          correct: 'right',
          flash: 'The rate survived 2008 and COVID. It\'s the most stable metric in the business. Possible but improbable.',
        },
        {
          setup: 'US membership growth plateaus as most addressable households are already members.',
          left: { label: 'Likely', sublabel: 'domestic saturation is coming' },
          right: { label: 'Unlikely' },
          correct: 'left',
          flash: 'Most of Costco\'s US addressable market is already tapped. Future member growth depends on international execution.',
        },
        {
          setup: 'Amazon or Walmart breaks the membership model with a better alternative.',
          left: { label: 'Likely' },
          right: { label: 'Unlikely', sublabel: '40 years of failed attempts' },
          correct: 'right',
          flash: 'Sam\'s Club has tried for 40 years. Amazon competes on convenience, not Costco\'s bulk-value-trust niche.',
        },
        {
          setup: 'Wage inflation squeezes the already-thin 3.7% operating margin.',
          left: { label: 'Likely', sublabel: 'chronic pressure' },
          right: { label: 'Unlikely' },
          correct: 'left',
          flash: 'Real but manageable. Costco has absorbed wage increases for decades. The margin has been stable at 3.5-4% for 20 years.',
        },
        {
          setup: 'Investors simply decide 55x is too much and re-rate the stock to 40x.',
          left: { label: 'Likely', sublabel: 'macro sentiment shifts' },
          right: { label: 'Unlikely' },
          correct: 'left',
          flash: 'The most probable path to significant losses. The business doesn\'t need to stumble — the math just needs to change.',
        },
      ],
      takeaway:
        'The most dangerous risks aren\'t the ones that do the most damage — they\'re the ones most likely to actually happen. Multiple compression is more probable than business deterioration.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: the macro risk
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Real Bear Case',
      topicIcon: ShieldAlert,
      context:
        'It\'s 6 months from now. Costco reports a solid quarter: revenue up 7%, renewals at 93%. The stock drops 18% because interest rates rose and investors rotated out of expensive stocks. The business is executing perfectly.',
      question: 'What is the most thoughtful investor response?',
      options: [
        'Sell — the stock is going down, something must be wrong',
        'Buy more — the business is fine, the drop is irrational',
        'Hold and reassess — the business is executing, but the drop reflects a real change in what investors will pay for consistency',
        'Ignore the price — good businesses always recover',
      ],
      correctIndex: 2,
      punchline:
        'The business did nothing wrong. The market decided to pay less for the same earnings. Selling panics on intact fundamentals. Buying assumes the old multiple returns. The right move: re-evaluate whether the new price compensates you for the risk of further compression.',
      wrongNudges: [
        'Selling because the price dropped ignores that the fundamentals are perfectly intact. This is how investors lock in losses that would have been temporary.',
        'Buying aggressively assumes 55x was normal and will return. But higher rates may mean 40x is the new normal — that\'s a macro bet, not a Costco bet.',
        '',
        'Ignoring price sounds disciplined but is actually lazy. The drop tells you something real about what consistency is worth in a higher-rate environment.',
      ],
      takeaway: 'Premium stocks can drop without business deterioration. The skill is re-evaluating at the new price, not panicking or dismissing.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: the investor call
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Investment Decision',
      topicIcon: BrainCircuit,
      context:
        'Costco trades at 55x earnings — 2.5x the retail sector. Growth is 7%. The renewal rate is 93%. The membership model is genuinely rare. The bears have been wrong for 20 years. But at 55x, you\'re vulnerable to multiple compression even if the business is perfect.',
      question: 'What is the most thoughtful investor stance?',
      options: [
        'Buy — 20 years of the bears being wrong proves the premium is justified',
        'Avoid — 55x for 7% growth is objectively too expensive',
        'The quality is real and the premium may be deserved — but at 55x, you need perfect execution AND a friendly rate environment. Size the position modestly because even being right about the business doesn\'t protect you from multiple compression',
        'Wait for a cheaper price — 55x will eventually come down',
      ],
      correctIndex: 2,
      punchline:
        '"Always expensive" has rewarded holders for 20 years. But at 55x and 7% growth, you\'re paying so much for consistency that you\'ve eliminated most of your upside. The quality is real — the question is whether the price leaves any room for you to win.',
      wrongNudges: [
        '"Bears have been wrong" is backward-looking. The macro environment (rates, multiples) has changed. Past returns don\'t guarantee future returns.',
        '',
        '',
        'There\'s no magic price where Costco becomes "cheap." If you wait for 30x, the business you\'re buying may be different. The skill is sizing the position for the risk.',
      ],
      takeaway: 'Some stocks deserve a premium. The investor\'s job isn\'t to decide if it\'s "cheap" — it\'s to decide whether the premium leaves any room for you to profit given the risks.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 8. Thinking step: synthesis
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Costco trades at 55x earnings — the most expensive major retailer in the world — yet it has rewarded holders for 20 years. Given the membership economics, the 93% renewal rate, and the recession-resistant model, would you pay today\'s premium? Write 1-2 sentences explaining what makes you comfortable or uncomfortable with this trade-off.',
      placeholder:
        'e.g. "I would / wouldn\'t pay 55x for Costco because..."',
      modelAnswer:
        'I\'d be willing to own Costco at a premium — the membership model is genuinely rare, retention is exceptional, and the recession resilience gives it a defensive quality most stocks lack. But I\'d size the position modestly, because at 55x earnings I\'m vulnerable to multiple compression even if the business executes perfectly. The quality is real; the question is whether I\'m paying so much for consistency that I\'ve eliminated most of my upside.',
      strongReasoningIncludes: [
        'Engages with why the premium might be deserved (membership economics, predictability, recession resilience)',
        'Acknowledges the specific risk of multiple compression — being right about the business but still losing money at this valuation',
        'Takes a position on the trade-off rather than defaulting to "it depends"',
      ],
    },
  ],
  takeaways: [
    'Costco\'s real product is membership access, not merchandise. The $265B retail operation exists to protect the $4.8B membership stream.',
    'At 2.5x the sector valuation, you\'re buying a prediction that consistency compounds for decades. If that prediction is wrong, you overpaid.',
    'The most dangerous risk for premium stocks isn\'t business failure — it\'s the market deciding to pay a lower multiple for the same earnings.',
    'Some stocks deserve a premium. The investor\'s job is sizing the position for the risk, not waiting for a "cheap" price that may never come.',
  ],
  completionMessages: {
    perfect: "Flawless. You understood that Costco's puzzle isn't about whether it's great — it's about whether the price leaves room to win.",
    great: "Strong work. You're learning that premium valuations aren't automatically wrong — but they demand a different kind of risk assessment.",
    good: "Solid start. The hardest lesson: some expensive stocks deserve to be expensive. The challenge is knowing how much premium is too much.",
    low: "Good effort. Costco is uniquely difficult because 'too expensive' has been wrong for 20 years. Revisit to understand why.",
  },
};
