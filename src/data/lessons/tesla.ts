import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const teslaLesson: Lesson = {
  id: 'tesla',
  emoji: '⚡',
  title: 'Tesla Lesson',
  subtitle: 'Car company, tech company, or something else entirely?',
  description:
    "Tesla sells about 1.8 million cars a year and trades at a higher valuation than the next ten automakers combined. Either the market sees something in Tesla that traditional auto analysis completely misses — or it's one of the most overvalued stocks in history. You'll dig into the margins, the growth story, and the massive bet on businesses that don't exist yet.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['margins', 'valuation', 'risk', 'behavioral_biases'],
  keyFacts: [
    { label: 'Market Cap', value: '~$800B', detail: 'Larger than Toyota, VW, GM, Ford, BMW, Mercedes, Honda, Hyundai combined' },
    { label: 'Annual Revenue', value: '~$97B', detail: 'About 80% from vehicle sales — the rest from energy and services' },
    { label: 'Auto Gross Margin', value: '~18%', detail: 'Down from 28% in 2022 after aggressive price cuts' },
    { label: 'P/E Ratio', value: '~120x', detail: 'Vs. ~8x for Toyota and ~6x for Ford' },
  ],
  topics: [
    { label: 'Where Tesla actually makes money today', icon: Target },
    { label: 'Why margins collapsed and what it means', icon: TrendingUp },
    { label: 'The optionality bet: FSD, robotaxi, energy, robots', icon: ShieldAlert },
    { label: 'What 120x earnings demands from the future', icon: BrainCircuit },
  ],
  storyArc: ['The Business Today', 'The Margin Problem', 'The Optionality Bet', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Tesla business instincts
    //
    // Why a drill first: surfaces common misconceptions about where
    // Tesla's money actually comes from vs. the narrative.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Business DNA',
      topicIcon: Zap,
      intro: 'Quick instincts about Tesla\'s business today — not what it might become, but what it is right now.',
      prompts: [
        {
          setup: 'Where does ~80% of Tesla\'s revenue come from?',
          left: { label: 'Selling cars', sublabel: 'Model 3, Y, S, X, Cybertruck' },
          right: { label: 'Software & energy', sublabel: 'FSD, Megapack, solar' },
          correct: 'left',
          flash: 'Tesla is a car company today. ~$78B of ~$97B in revenue comes from vehicle sales. Everything else is still early.',
        },
        {
          setup: 'How do Tesla\'s margins compare to traditional automakers?',
          left: { label: 'Much higher', sublabel: 'tech-like margins' },
          right: { label: 'Converging', sublabel: 'getting closer to normal' },
          correct: 'right',
          flash: 'Tesla\'s auto gross margin has fallen from 28% in 2022 to ~18% after price cuts. Traditional automakers sit at 10-20%. The gap is closing fast.',
        },
        {
          setup: 'Tesla\'s vehicle deliveries in 2024 vs. 2023:',
          left: { label: 'Grew', sublabel: 'kept expanding' },
          right: { label: 'Declined', sublabel: 'first-ever drop' },
          correct: 'right',
          flash: 'Deliveries fell ~1% in 2024 — the first annual decline in Tesla\'s history. Growth stalled while the stock price assumed acceleration.',
        },
        {
          setup: 'Tesla sells ~1.8M cars/year. Toyota sells ~10M. Tesla\'s market cap is:',
          left: { label: 'Smaller than Toyota', sublabel: 'fewer cars = lower value' },
          right: { label: 'Much larger than Toyota', sublabel: '$800B vs. $250B' },
          correct: 'right',
          flash: 'Tesla is worth 3x Toyota while selling 1/5 the cars. The market isn\'t valuing Tesla as a car company — it\'s pricing in something far bigger.',
        },
        {
          setup: 'What\'s Tesla\'s biggest revenue growth driver right now?',
          left: { label: 'Energy storage', sublabel: 'Megapack deployments surging' },
          right: { label: 'Full Self-Driving', sublabel: 'software subscriptions' },
          correct: 'left',
          flash: 'Energy storage revenue roughly doubled from ~$6B to ~$12B (annualized run rate). FSD revenue is still small and inconsistent — it\'s a future bet, not a current driver. Energy is the real growth story today.',
        },
      ],
      takeaway: 'Tesla is a car company that sells 1.8M vehicles a year with declining growth and compressing margins. Everything else — FSD, robotaxi, energy, robots — is optionality the market is pricing in.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the margin compression
    //
    // Why an estimate: makes the margin collapse tangible by
    // calculating how much profit disappeared from price cuts.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Margin Problem',
      topicIcon: Calculator,
      context:
        'In 2022, Tesla had ~28% auto gross margin on ~$72B in auto revenue.\n\nIn 2024, after aggressive price cuts to maintain volume, auto gross margin fell to ~18% on ~$78B in auto revenue.\n\nAuto gross profit = Revenue × Margin\n• 2022: $72B × 28% = $20.2B\n• 2024: $78B × 18% = $14.0B',
      question: 'How much gross profit did Tesla lose from the margin compression (in $B)?',
      answer: 6,
      tolerance: 1,
      unit: '$B',
      hint: '$20.2B − $14.0B',
      reveal:
        '$20.2B − $14.0B = $6.2B in lost gross profit. Revenue grew $6B — but gross profit shrank $6B. Tesla sold more cars, earned less money. This is the core tension: price cuts drove volume but destroyed the premium margins that justified a tech-company valuation. If margins keep falling, Tesla becomes a normal automaker with an abnormal stock price.',
      takeaway: 'Growing revenue while shrinking profit is a red flag. Tesla\'s price cuts kept deliveries up but erased $6B in gross profit — proving that volume and profitability can move in opposite directions.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: the price-cut tradeoff
    //
    // Why a decide: this is a genuine strategic dilemma with no
    // obviously right answer. Forces investor-level thinking.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Strategic Gamble',
      topicIcon: Target,
      context:
        'Tesla faces a choice every quarter: maintain premium prices (protect margins but lose market share to cheaper Chinese EVs and legacy automakers) or cut prices (keep volume but sacrifice the margins that justify its valuation).\n\nIn 2023-2024, Tesla chose price cuts. Margins fell from 28% to 18%. Deliveries stayed roughly flat. Competitors kept gaining share anyway.',
      question: 'As an investor, what\'s the most concerning part of this situation?',
      options: [
        'Tesla cut prices aggressively and still couldn\'t grow deliveries — the price cuts bought volume maintenance, not growth, while destroying margins',
        'The price cuts were smart — higher volume always wins in the auto industry',
        'Margins will recover naturally once competition stabilizes',
        'None of this matters because Tesla\'s value is in FSD and robotaxi, not car sales',
      ],
      correctIndex: 0,
      punchline:
        'Price cuts are supposed to buy growth. Tesla cut prices significantly and deliveries still declined in 2024. That\'s the worst outcome: sacrificing margins without gaining volume. It suggests the demand ceiling may be closer than the stock price assumes.',
      wrongNudges: [
        '',
        'Higher volume wins only if margins stay healthy enough to fund operations. Toyota sells 10M cars at 10% margin and makes more total profit than Tesla. Volume without margin is a race to the bottom.',
        'Margins rarely "recover naturally" in competitive markets. Every major automaker now has EVs. BYD sells more EVs than Tesla at lower prices. The competitive pressure is structural, not temporary.',
        'Car sales are 80% of Tesla\'s revenue today. If the core business deteriorates, the company has less cash to fund FSD, robotaxi, and everything else. The future bets depend on the present business.',
      ],
      takeaway: 'The worst outcome for any business: cutting prices AND losing growth. It suggests a demand problem that price alone can\'t solve — and it undermines the margins that funded Tesla\'s future bets.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: reading Tesla's bull narrative
    //
    // Why a tap: Tesla's bull case is a cascade of future businesses.
    // The user needs to separate what's real revenue today from
    // what's a bet on something that doesn't exist yet.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Optionality Bet',
      topicIcon: Flag,
      intro: 'A Tesla bull is making the case. Tap the claims that rely on businesses that don\'t meaningfully exist yet.',
      passage: [
        { type: 'text', value: '"Tesla is the most undervalued company in the world. ' },
        {
          type: 'chip',
          value: 'Energy storage revenue doubled last year and Megapack has a massive backlog',
          signal: false,
          feedback: 'This is real. Energy storage grew from ~$6B to ~$12B annualized — Tesla\'s fastest-growing segment with tangible demand and a deep order backlog. It\'s not a bet — it\'s happening.',
        },
        { type: 'text', value: '. But that\'s just the start. ' },
        {
          type: 'chip',
          value: 'Full Self-Driving will generate $100B+ in recurring software revenue',
          signal: true,
          feedback: 'FSD currently generates minimal revenue and still requires driver supervision. Here\'s a simple way to value a bet like this: probability it works × profit if it does. If you think FSD has a 30% chance of hitting $50B in revenue, its expected value is $15B. At 10% probability, it\'s $5B. The probability estimate changes everything — and jumping from "supervised beta" to "$100B" assumes near-certainty.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'The robotaxi network will make Tesla the most valuable company on Earth',
          signal: true,
          feedback: 'Tesla has announced robotaxi plans repeatedly since 2019 with no commercial service operating. A robotaxi network requires fully autonomous driving, regulatory approval city by city, fleet management, and insurance infrastructure. This is years away at best.',
        },
        { type: 'text', value: '. Meanwhile, ' },
        {
          type: 'chip',
          value: 'Tesla has the best EV manufacturing cost structure — about $36K cost per vehicle',
          signal: false,
          feedback: 'This is real. Tesla\'s manufacturing efficiency is a genuine competitive advantage. Their cost per vehicle is among the lowest in the EV industry, giving them pricing flexibility.',
        },
        { type: 'text', value: '. And don\'t forget — ' },
        {
          type: 'chip',
          value: 'Optimus humanoid robots could be a $10 trillion market for Tesla',
          signal: true,
          feedback: 'Optimus is a prototype that can barely walk reliably. Projecting a $10 trillion market for a product that doesn\'t commercially exist is pure speculation. This is years (possibly decades) from meaningful revenue.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Tesla\'s Supercharger network is becoming the industry standard — even Ford and GM adopted it',
          signal: false,
          feedback: 'Real competitive advantage. The Supercharger network (NACS) is becoming the North American standard. This is a genuine moat that generates revenue and locks in customers.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'Tesla has real advantages: manufacturing efficiency, energy storage growth (~$6B to ~$12B), and the Supercharger network. But the bull case for an $800B+ valuation leans heavily on FSD, robotaxis, and robots — businesses that generate little to no revenue today. To value optionality bets: estimate probability of success × potential profit. At high probabilities these bets are worth hundreds of billions. At low probabilities, they\'re worth very little. The question isn\'t whether these could be huge — it\'s what probability you assign, and whether the stock price already assumes near-certainty.',
      takeaway: 'Separate what a company does today from what it might do tomorrow. Real businesses (energy, manufacturing edge, Superchargers) are different from optionality bets (FSD, robotaxi, Optimus). Both have value — but only one has evidence.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Estimate: what does 120x P/E require?
    //
    // Why an estimate: makes the valuation concrete. What does the
    // stock price actually need from the future to make sense?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'What the Price Demands',
      topicIcon: Calculator,
      context:
        'Tesla trades at ~120x earnings. The market average is ~20x. For Tesla\'s current price to look "normal," earnings need to grow until 120x becomes 20x.\n\nCurrent net income: ~$7B/year\nCurrent market cap: ~$800B\n\nAt 20x, $800B market cap requires: $800B ÷ 20 = $40B in net income.\n\nTesla currently earns ~$7B in net income.',
      question: 'By what multiple must Tesla\'s net income grow to justify the current price at a market P/E?',
      answer: 5.7,
      tolerance: 0.5,
      unit: 'x',
      hint: '$40B ÷ $7B',
      reveal:
        '$40B ÷ $7B = 5.7x. Tesla needs to nearly 6x its net income — from $7B to $40B — just for the current price to look fairly valued at a market multiple. For context: Toyota earns ~$25B in net income. Tesla would need to earn significantly more than Toyota while selling a fraction of the cars. This is only possible if high-margin software (FSD), energy, or entirely new businesses contribute massive profit.',
      takeaway: 'At 120x earnings, Tesla\'s stock price requires net income to 6x just to reach a normal valuation. That means the market is pricing in massive profit from businesses that barely exist today.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: the investment judgment
    //
    // Why a decide last: the final synthesis. The user must weigh
    // everything — margins, competition, optionality, valuation.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Judgment Call',
      topicIcon: BrainCircuit,
      context:
        'Here\'s the full picture:\n\n• 80% of revenue from cars. Margins falling. Deliveries declining.\n• Energy storage growing fast but still ~10% of revenue.\n• FSD, robotaxi, and Optimus: huge potential, minimal current revenue.\n• 120x P/E requires earnings to 6x.\n• Manufacturing cost advantage is real.\n• Brand loyalty is intense but polarizing.',
      question: 'What\'s the most thoughtful investor stance on Tesla?',
      options: [
        'Sell — the auto business is deteriorating, and the future bets are too speculative to justify 120x earnings',
        'The valuation only makes sense if you believe FSD/robotaxi will work AND generate enormous profit within 5 years. That\'s a high-conviction technology bet, not a stock analysis',
        'Buy — Tesla\'s manufacturing scale and vertical integration give it a cost advantage competitors can\'t replicate, so margins will recover',
        'Wait for margins to stabilize, then reassess — the transition period makes the stock un-analyzable',
      ],
      correctIndex: 1,
      punchline:
        'Tesla at 120x is not a stock you can evaluate with normal financial analysis. It\'s a technology bet: either FSD/robotaxi unlock software-like margins on a massive scale, or the stock is dramatically overvalued as a car company. There\'s no middle ground at this price.',
      wrongNudges: [
        'The bear case is legitimate — but "sell" dismisses optionality entirely. Energy storage is real and growing. FSD could work. The honest answer is that the outcome depends on technology bets that can\'t be modeled with traditional tools.',
        '',
        'The cost advantage is real — but it\'s already in the current 18% margin, which is good for a carmaker but not exceptional for a tech company. Even if margins recover to 22-24%, the car business alone generates maybe $15-18B in gross profit. That doesn\'t close the gap to $40B in net income needed to justify 120x. Cost advantages explain survival, not an $800B valuation.',
        'Waiting is reasonable but avoids the real question. Tesla\'s price already reflects expectations about the future. Understanding what\'s priced in matters whether you buy, sell, or hold.',
      ],
      takeaway: 'Some stocks aren\'t traditional stock analysis — they\'re technology bets. At 120x earnings, Tesla requires conviction about FSD, robotaxi, or energy generating massive profit. Without that conviction, the price can\'t be justified by the car business alone.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Thinking: synthesize the full picture
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'A friend says: "Tesla is the future — I\'m putting 50% of my portfolio in it." Based on what you\'ve learned, what would you tell them? Consider the current business, the margin trend, the valuation, and the optionality bets.',
      placeholder: 'I would tell them that...',
      modelAnswer:
        'I\'d acknowledge that Tesla has real competitive advantages — manufacturing efficiency, Supercharger dominance, and genuine energy storage growth. But I\'d push back on the 50% concentration. At 120x earnings, the stock needs earnings to 6x just to reach a normal valuation. That\'s only possible if FSD or robotaxi become massive, profitable businesses — which hasn\'t happened yet. The core auto business has declining deliveries and compressing margins. Putting 50% of your portfolio on what is essentially a technology bet means you need to be right about self-driving AND the timeline AND the monetization. If any one of those doesn\'t pan out, you\'re holding a car company stock at 120x earnings. The right question isn\'t "is Tesla a great company?" — it\'s "is this price right given what needs to happen?"',
      strongReasoningIncludes: [
        'Acknowledges Tesla\'s real advantages while noting the auto business is deteriorating',
        'Connects the 120x valuation to specific requirements — what needs to be true for the price to make sense',
        'Addresses the concentration risk of putting 50% in a single stock that depends on unproven technology bets',
      ],
    },
  ],
  takeaways: [
    'Tesla is 80% a car company today, with falling margins and flat deliveries. The stock price reflects something much bigger than the current business.',
    'Price cuts bought volume but destroyed margins — from 28% to 18%. Revenue grew while profit shrank, the worst kind of tradeoff.',
    'The bull case depends on FSD, robotaxi, and Optimus — businesses with huge potential but minimal current revenue. Energy storage is the one future bet already delivering.',
    'At 120x earnings, Tesla needs to 6x its profit to reach a market-average valuation. That\'s a technology bet, not a stock analysis.',
  ],
  completionMessages: {
    perfect: 'Flawless. You can now see through the Tesla narrative to the actual numbers — and articulate what the price demands.',
    great: 'Strong analysis. Separating what Tesla is from what it might become is the key skill for evaluating high-growth stocks.',
    good: 'Good foundation. Tesla is one of the hardest stocks to analyze because the narrative is so powerful. Keep questioning what\'s priced in.',
    low: 'Worth revisiting. Tesla teaches the most important lesson in investing: the difference between a great company and a great stock depends entirely on price.',
  },
};
