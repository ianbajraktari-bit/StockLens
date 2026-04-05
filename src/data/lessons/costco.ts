import { Target, TrendingUp, ShieldAlert, BrainCircuit } from 'lucide-react';
import type { Lesson } from './types';

export const costcoLesson: Lesson = {
  id: 'costco',
  emoji: '🏪',
  title: 'Costco Lesson',
  subtitle: 'When paying a premium for consistency might be the smart move',
  description:
    "Costco is one of the most expensive stocks in retail — and it has been for years. In this lesson, you'll learn why the membership model is so unusual, why Wall Street pays a premium for boring consistency, what could actually go wrong, and how to decide whether a stock that always looks expensive can still be worth buying.",
  estimatedMinutes: 3,
  dataAsOf: 'Q1 2025',
  keyFacts: [
    { label: 'Market Cap', value: '~$460B', detail: 'The most valuable retailer in the world by far' },
    { label: 'Annual Revenue', value: '~$265B', detail: 'Growing ~7% annually — steady, not flashy' },
    { label: 'Membership Revenue', value: '~$4.8B', detail: 'Only 2% of revenue but ~70% of operating profit' },
    { label: 'Renewal Rate', value: '93%', detail: 'Among the highest retention rates in any industry' },
  ],
  topics: [
    { label: 'How Costco\'s unusual business model actually works', icon: Target },
    { label: 'Why investors pay a premium for boring consistency', icon: TrendingUp },
    { label: 'What could actually break the Costco thesis', icon: ShieldAlert },
    { label: 'Deciding whether "always expensive" can still be worth it', icon: BrainCircuit },
  ],
  questions: [
    {
      topic: 'The Business',
      topicIcon: Target,
      context:
        'Costco caps product markups at 14-15%, far below the 25-50% typical of retailers. Its operating margin is just 3.7% on merchandise — the retail operation essentially breaks even on purpose. Almost all profit comes from membership fees ($4.8B annually). Walmart runs 25% markups and earns a ~4% operating margin on merchandise itself.',
      question: 'Why is deliberately running the retail operation at near-breakeven a competitive advantage rather than a weakness?',
      options: [
        'It isn\'t — Costco should raise markups to increase profit like Walmart does',
        'Low markups make prices unbeatable, which drives membership sign-ups and renewals — and memberships are where the real profit lives',
        'Breaking even on merchandise means Costco doesn\'t need to worry about inventory management',
        'Low margins keep competitors from wanting to enter the warehouse retail market',
      ],
      correctIndex: 1,
      explanation:
        'This is the Costco flywheel: low prices drive traffic → traffic drives membership sign-ups → memberships create pure-profit recurring revenue → that profit funds even lower prices. The breakeven retail operation isn\'t a sacrifice — it\'s the marketing. Costco spends almost nothing on advertising because the prices are the advertisement. A 93% renewal rate proves members feel they save more than the fee costs. Any competitor who tries to match Costco\'s prices without the membership model simply loses money. That\'s why this "weakness" is actually the moat.',
      wrongExplanations: [
        'Raising markups would destroy the entire model. Costco\'s value proposition is that members get near-wholesale prices. If markups rose to Walmart levels, members would stop renewing — and membership fees are 70% of operating profit. Optimizing merchandise margins while killing membership economics is like fixing the faucet by burning down the house. This answer reveals a misunderstanding of what the business actually sells.',
        '',
        'Breakeven doesn\'t mean inventory doesn\'t matter — Costco is actually exceptional at inventory management. It carries only ~3,700 SKUs (vs. 30,000+ at Walmart), which means higher volume per item, better supplier negotiations, and faster turnover. The low margin is deliberate strategy, not operational carelessness.',
        'Low margins don\'t deter competitors — Sam\'s Club, BJ\'s, and Amazon have all entered the space. The real barrier isn\'t that the margins are unattractive; it\'s that replicating the membership flywheel at scale requires decades of trust-building that competitors can\'t shortcut. Walmart has tried with Sam\'s Club for 40 years and hasn\'t matched Costco\'s renewal rates or member loyalty.',
      ],
      takeaway: 'Some businesses win by choosing not to maximize the obvious revenue line. When you see unusually low margins, don\'t assume weakness — ask whether the company is using that margin as a strategic weapon to build something more valuable.',
    },
    {
      topic: 'Investor Quality',
      topicIcon: TrendingUp,
      context:
        'Costco trades at 55x earnings — 2.5x the retail average. Bulls offer several justifications: (1) The 93% membership renewal rate makes profit highly predictable. (2) Costco is recession-resistant — it actually gains members during downturns as consumers trade down for value. (3) International expansion is still early (~300 of 900+ warehouses are outside the US). (4) Membership fee increases every 5-7 years add hundreds of millions in pure profit with minimal churn.',
      question: 'Which of these bull arguments is most important for justifying the current 55x valuation?',
      options: [
        'International expansion — opening new warehouses globally is Costco\'s biggest growth driver',
        'Membership fee increases — the ability to raise prices without losing customers proves pricing power',
        'Recession resilience — Costco gains customers when the economy weakens, making it a rare defensive growth stock',
        'The 93% renewal rate — it makes the profit base almost annuity-like, which is what investors are actually paying 55x for',
      ],
      correctIndex: 3,
      explanation:
        'All four arguments have merit, but the renewal rate is the foundation everything else rests on. International expansion matters, but only if new markets replicate the loyalty that drives renewals. Fee increases work, but only because the renewal rate proves members won\'t leave. Recession resilience is real, but it\'s a consequence of the value proposition that keeps renewals high. At 55x, investors aren\'t paying for growth — Costco only grows at 7%. They\'re paying for near-certainty that this year\'s profit will still be there next year, and the year after. The renewal rate is the metric that underwrites that certainty.',
      wrongExplanations: [
        'International expansion adds growth, but it\'s execution-heavy and uncertain — new markets may not replicate US-level loyalty. Japan and Korea have worked well; China and Europe are harder. If you\'re paying 55x primarily for international expansion, you\'re paying a premium for unproven execution. Growth can justify high multiples, but Costco\'s premium is about predictability, not growth speed.',
        'Fee increases are a powerful profit lever, but they happen infrequently (every 5-7 years) and add ~$500M in a business earning $7B+. They demonstrate pricing power, which matters — but pricing power is a consequence of the loyalty that the renewal rate measures, not the other way around. The fee increase works because the renewal rate is 93%; if renewals dropped to 80%, a fee increase would accelerate churn, not profit.',
        'Recession resilience is a genuine differentiator, but recessions are episodic — they happen every 7-10 years. A stock doesn\'t trade at 55x for something that matters 15% of the time. Recession resilience is a bonus, not the core thesis. Investors paying 55x need a reason that holds in normal years too, and that reason is the predictable, renewable profit base.',
        '',
      ],
      takeaway: 'When a stock trades at a premium, identify the single metric that most justifies it. Every other bull argument is either downstream of that metric or secondary to it. For Costco, everything flows from the renewal rate.',
    },
    {
      topic: 'Risk & Bear Case',
      topicIcon: ShieldAlert,
      context:
        'You\'re building a bear case for Costco. Consider these risks: (1) Interest rates staying higher for longer — expensive stocks get punished most when risk-free rates rise, because investors demand more from equities. (2) Membership growth plateauing in the US — most of Costco\'s addressable domestic households may already be members. (3) Wage inflation — Costco\'s employee-friendly culture means labor costs rise faster than peers, squeezing already-thin merchandise margins. (4) A single bad renewal quarter — if the renewal rate dips from 93% to 89%, it signals the value proposition is weakening.',
      question: 'Which risk is most likely to cause significant losses for a Costco investor over the next 3-5 years?',
      options: [
        'Higher interest rates compressing the valuation multiple — at 55x, even a modest re-rating to 40x means a ~27% price drop with no change in the business',
        'US membership saturation — if domestic member growth stalls, Costco becomes dependent on international expansion that may not replicate US economics',
        'Wage inflation eroding margins — Costco\'s 3.7% operating margin has very little room to absorb rising labor costs',
        'A renewal rate decline — even a small drop would undermine the entire premium valuation thesis built on predictability',
      ],
      correctIndex: 0,
      explanation:
        'All four risks are real, but multiple compression is the most likely to actually happen and cause significant losses. Costco has traded at 55x because investors accepted low yields on "safe" growth stocks when interest rates were near zero. With rates higher, the opportunity cost of paying 55x for 7% growth increases — investors can get 4-5% from risk-free bonds. A re-rating from 55x to 40x (still above the retail average) would cause a ~27% stock decline even while earnings grow. The business doesn\'t need to stumble; the math just needs to change. This is the most probable bear case because it depends on macro conditions, not Costco-specific failure.',
      wrongExplanations: [
        '',
        'US membership growth is slowing, but saturation is a 10-year concern, not a 3-5 year catalyst. Costco can still add warehouses in underserved US markets, grow revenue per member through fee increases, and expand internationally. Saturation would be a problem if domestic growth were the only driver — but at 300+ international warehouses with room to grow, it\'s a headwind, not a crisis.',
        'Wage inflation is a real cost pressure, but Costco has managed it for decades. The company has always paid above industry average — that\'s part of the model. Higher wages reduce turnover, reduce theft, and improve productivity. Costco\'s operating margin has been remarkably stable at 3.5-4% for 20 years despite consistent wage increases. This risk is chronic, not acute — it\'s already baked into the model.',
        'A renewal rate decline would be devastating if it happened — but it almost certainly won\'t over 3-5 years. The rate has been above 90% for over 15 years and barely flinched during the 2008 recession or COVID. It\'s the most anchored metric in the business. Building a bear case on the least likely scenario is poor risk assessment — focus on what\'s probable, not what\'s catastrophic.',
      ],
      takeaway: 'The most dangerous risks aren\'t always the ones that would do the most damage — they\'re the ones most likely to actually happen. For premium stocks, macro-driven multiple compression is more probable than business deterioration.',
    },
    {
      topic: 'Think Like an Investor',
      topicIcon: BrainCircuit,
      context:
        'It\'s 6 months from now. Costco reports a solid quarter: revenue up 7%, comps up 6.5%, renewals steady at 93%. The stock drops 18% in a month — not because of anything Costco did, but because interest rates rose and investors rotated out of expensive stocks into cheaper ones. Your Costco position is now significantly underwater. The business is executing exactly as expected.',
      question: 'What is the most thoughtful investor response?',
      options: [
        'Sell immediately — the stock is going down, so something must be wrong with the business',
        'Buy more aggressively — the business is fine, so the drop is irrational and you should back up the truck',
        'Hold and reassess — the business is executing, but the drop reflects a real change in what investors are willing to pay for consistency. You need to decide if the new price adequately compensates you for the risk that the multiple could compress further',
        'Ignore the price entirely — if the business is good, the stock will eventually recover',
      ],
      correctIndex: 2,
      explanation:
        'This scenario is the defining challenge of owning premium stocks. The business did nothing wrong — the market simply decided to pay less for the same earnings. Selling on price action alone ignores that the fundamentals are intact. Buying aggressively assumes the old multiple will return, but higher rates may mean 55x was the anomaly and 40-45x is the new normal. Ignoring price entirely is naive — the multiple compression reflects a real change in the cost of capital. The right response is to re-evaluate whether the new price offers adequate compensation for the remaining risk that multiples could compress further. This is the hardest skill in investing: updating your view without panicking or dismissing.',
      wrongExplanations: [
        'Selling because the stock went down is pure price-action thinking. You\'ve just confirmed the business is healthy — revenue growing, comps strong, renewals steady. If the fundamentals haven\'t changed, the drop is a valuation event, not a business event. Selling after a valuation compression on a healthy business is how investors lock in losses that would have been temporary.',
        'Buying aggressively assumes the old valuation will return — but there\'s no law that says it must. If interest rates stay higher, investors may permanently demand lower multiples for growth stocks. Costco at 40x might be the new normal, not a temporary dip. Backing up the truck requires conviction that the multiple will re-expand, and that\'s a macro bet, not a Costco bet. Aggressive buying on a thesis of "it\'ll go back to where it was" is anchoring bias, not analysis.',
        '',
        'Ignoring price entirely sounds disciplined but is actually lazy. The price drop tells you something real: the market is re-pricing what consistency is worth in a higher-rate environment. A long-term holder still needs to ask whether their capital is best deployed in a stock that might stay compressed for years. "The business is good, so ignore the price" is faith, not investing.',
      ],
      takeaway: 'Owning premium stocks means accepting that price declines can happen without business deterioration. The skill isn\'t ignoring drops or panicking — it\'s re-evaluating whether the new price offers a reasonable trade-off for the risks that remain.',
    },
  ],
  thinkingStep: {
    prompt:
      'Costco trades at 55x earnings — the most expensive major retailer in the world — yet it has rewarded long-term holders for 20 years. The bears have always been wrong. Given the membership economics, the 93% renewal rate, and the recession-resistant model, would you pay today\'s premium to own Costco? Write 1–2 sentences explaining what makes you comfortable or uncomfortable with this trade-off.',
    placeholder:
      'e.g. "I would / wouldn\'t pay 55x for Costco because..."',
    modelAnswer:
      'I\'d be willing to own Costco at a premium — the membership model is genuinely rare, the retention is exceptional, and the recession resilience gives it a defensive quality most stocks lack. But I\'d want to size the position modestly, because at 55x earnings I\'m vulnerable to multiple compression even if the business executes perfectly. The quality is real; the question is whether I\'m paying so much for consistency that I\'ve eliminated most of my upside.',
    strongReasoningIncludes: [
      'Engages with why the premium might be deserved (membership economics, predictability, recession resilience) rather than dismissing it as "too expensive"',
      'Acknowledges the specific risk of multiple compression — that you can be right about the business and still lose money on the stock at this valuation',
      'Takes a position on the trade-off between business quality and valuation risk, rather than defaulting to "it depends"',
    ],
  },
  takeaways: [
    'Not every business makes money the way you\'d expect — Costco\'s real product is membership access, not merchandise.',
    'Valuation premiums can be justified by quality, predictability, and resilience — not every expensive stock is overvalued.',
    'The biggest risk for premium stocks isn\'t business failure — it\'s the market deciding to pay a lower multiple for the same earnings.',
    'Some stocks deserve a premium. The investor\'s job is to decide whether the current premium is reasonable for the risk, not whether the stock is "cheap."',
  ],
  completionMessages: {
    perfect: "Flawless. You understood that Costco's valuation puzzle isn't about whether it's a great business — it's about whether the price is right for the quality.",
    great: "Strong work. You're learning that premium valuations aren't automatically wrong — but they do demand a different kind of risk assessment.",
    good: "Solid start. The hardest lesson in investing is that some expensive stocks deserve to be expensive — the challenge is knowing how much premium is too much.",
    low: "Good effort. Costco is uniquely difficult because the obvious answer (too expensive) has been wrong for 20 years. Revisit the lesson to understand why.",
  },
};
