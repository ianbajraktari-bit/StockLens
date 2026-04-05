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
      question: 'Where does the majority of Costco\'s operating profit come from?',
      options: [
        'Markup on bulk groceries and household goods',
        'Membership fees — which are only 2% of revenue but ~70% of operating profit',
        'Costco\'s private-label Kirkland Signature brand',
        'E-commerce sales and delivery fees',
      ],
      correctIndex: 1,
      explanation:
        'This is the most counterintuitive fact in retail. Costco\'s entire merchandise operation — $260B in sales — essentially breaks even on purpose. The company caps markups at 14-15% (vs. 25-50% at typical retailers). Almost all the profit comes from membership fees: $4.8B in annual fees with minimal cost to collect. This means Costco\'s real product isn\'t groceries — it\'s access. The low prices are the marketing.',
      wrongExplanations: [
        'Costco deliberately keeps merchandise markups razor-thin (1-2% operating margin). This is the core insight most people miss: the retail operation is not a profit center, it\'s a member benefit. Assuming normal retail margins here means you\'ve missed what makes the business model unique.',
        '',
        'Kirkland Signature is a powerful loyalty tool and accounts for ~25% of sales, but it\'s sold at the same thin margins as everything else. It strengthens the value proposition but doesn\'t change where profit comes from.',
        'E-commerce is growing 20%+ but is still a small contributor to profits. Costco\'s model is built around high-volume warehouse visits, not delivery. Overweighting e-commerce here shows a misunderstanding of the core business.',
      ],
      takeaway: 'Don\'t assume every retailer makes money the same way. Costco\'s profit engine is membership fees, not product markup — understanding this changes how you value the entire business.',
    },
    {
      topic: 'Investor Quality',
      topicIcon: TrendingUp,
      question: 'Why does Costco trade at 55x earnings when most retailers trade at 15-22x?',
      options: [
        'Costco is growing much faster than other retailers',
        'The membership model creates predictable, recurring profit with 93% retention — investors pay a premium for that consistency',
        'Costco has no real competitors',
        'The stock is simply overvalued and will eventually correct',
      ],
      correctIndex: 1,
      explanation:
        'Costco grows at 7% — solid but not spectacular. The premium isn\'t about growth speed. It\'s about growth quality. A 93% renewal rate makes profit predictable year after year. Membership fee increases drop almost entirely to the bottom line. The business is recession-resistant — in downturns, consumers trade down to Costco for value. Wall Street pays more for a dollar of earnings it can count on than for a dollar that might disappear. That predictability premium is what separates Costco\'s valuation from a normal retailer.',
      wrongExplanations: [
        'Costco\'s 7% growth is good for retail but not exceptional. Plenty of companies grow faster and trade at lower multiples. If growth rate alone explained the premium, many other stocks would be more expensive. The premium is about the quality and predictability of that growth, not the speed.',
        '',
        'Costco has real competitors — Walmart, Sam\'s Club, Amazon, BJ\'s. But none have replicated the membership economics at this scale. Having competitors doesn\'t prevent a premium, as long as the competitive advantage is durable.',
        'Calling any stock "simply overvalued" without understanding why the market values it that way isn\'t analysis — it\'s an opinion. Costco has traded at a premium for 20 years and rewarded holders who understood why. Bears who\'ve called it overvalued at 30x, 40x, and 50x have all been wrong so far.',
      ],
      takeaway: 'Valuation reflects quality, not just growth. A business with highly predictable, recurring profit can deserve a premium for years — the key is understanding what you\'re actually paying for.',
    },
    {
      topic: 'Risk & Bear Case',
      topicIcon: ShieldAlert,
      question: 'What is the most realistic risk to a Costco investment, even if the business keeps executing well?',
      options: [
        'Amazon will take all of Costco\'s customers',
        'Valuation compression — the 55x P/E could shrink to 40x even while earnings grow, causing significant losses',
        'Membership fees are too low to sustain the business',
        'Costco will run out of locations to build new warehouses',
      ],
      correctIndex: 1,
      explanation:
        'This is the most important risk for any premium-valued stock: you can be right about the business and still lose money on the stock. If Costco\'s P/E compressed from 55x to 40x — still above the retail average — the stock would drop ~27% even with growing earnings. This can happen when interest rates rise, when investors rotate to cheaper stocks, or when growth merely slows from "steady" to "modest." The business doesn\'t need to fail. The expectations just need to downshift.',
      wrongExplanations: [
        'Amazon has been competing with Costco for years and Costco keeps growing. The treasure-hunt in-store experience, bulk pricing, and membership psychology create a shopping occasion that e-commerce struggles to replicate. This is the lazy bear case — it sounds scary but doesn\'t match the data.',
        '',
        'Membership fees are the profit engine precisely because they\'re modest enough that members barely notice them relative to the savings. The model works because the fee feels small. There\'s no sustainability issue — there\'s room for periodic increases.',
        'Costco has ~900 warehouses globally but significant international runway. The US may slow down, but Japan, China, Europe, and other markets are still early. Location constraints are a 10-year concern, not a near-term risk.',
      ],
      takeaway: 'For premium-valued stocks, the biggest risk isn\'t business failure — it\'s valuation compression. You can be right about every fundamental and still lose money if the market stops paying a premium multiple.',
    },
    {
      topic: 'Think Like an Investor',
      topicIcon: BrainCircuit,
      context:
        'Costco trades at 55x earnings — 2.5x the retail average. It\'s growing at a steady 7%. The membership model is proven, with 93% renewal and 130M+ cardholders. The company has rewarded shareholders for 20+ years and punished every bear who called it overvalued. But at today\'s price, you\'re paying a historically extreme premium for a business that — however excellent — grows earnings at single digits.',
      question: 'A friend says: "Costco is always expensive. You either accept the premium or you never own it." How do you evaluate this?',
      options: [
        '"They\'re right — Costco\'s quality means the premium is permanent. Just buy it whenever."',
        '"It\'s a retailer trading at 55x. That\'s irrational. Stay away."',
        '"The premium has been justified by execution so far, but 55x still means you\'re vulnerable to multiple compression if anything slows — even slightly. You need to decide whether the consistency is rare enough to be worth that risk."',
        '"Wait for a recession to buy it cheaper."',
      ],
      correctIndex: 2,
      explanation:
        'Costco is the hardest kind of stock to evaluate because the bears have been wrong for 20 years — but that doesn\'t mean valuation doesn\'t matter. At 55x, you\'re paying for many years of perfect execution. The business probably will keep executing, but "probably" at this price means even a small disappointment is expensive. The right framework is: acknowledge the premium is partially deserved, but understand that you\'re accepting valuation risk in exchange for business quality. That\'s a conscious trade-off, not a certainty.',
      wrongExplanations: [
        '"Just buy it whenever" ignores that valuation always matters eventually. Costco dropped 40% in 2022 even as the business performed fine — the multiple compressed. Quality protects you from business risk, but it doesn\'t protect you from overpaying. Price still matters, even for great companies.',
        '',
        'Calling a 20-year premium "irrational" suggests you know better than every institutional investor who has studied this stock. The premium exists for real reasons — predictability, defensive characteristics, membership economics. Dismissing it without engaging with those reasons isn\'t skepticism, it\'s laziness.',
        'Costco is one of the most recession-resistant businesses in existence — consumers actually increase spending there during downturns. Waiting for a recession might not give you the discount you expect. Thesis-based investing beats event-based guessing.',
      ],
      takeaway: 'Some stocks deserve a permanent premium — but "deserves a premium" and "deserves any premium" are different things. The best investors acknowledge quality while still demanding that the price makes sense for the risk.',
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
