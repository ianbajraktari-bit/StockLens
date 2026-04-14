import type { CompanyProfile } from './types';

export const visaProfile: CompanyProfile = {
  id: 'visa',
  ticker: 'V',
  name: 'Visa',
  emoji: '💳',
  sector: 'Financial Services',
  oneLiner: 'The toll booth on global card payments — a near-duopoly with Mastercard',
  description:
    "Visa isn\'t a bank and doesn\'t lend money. It runs the network that connects 4 billion cards to 100 million merchants, taking a tiny fee on every swipe. The business has ~65% operating margins, near-zero marginal cost per transaction, and one of the most durable moats in any sector. But the stock is rarely cheap, regulators circle constantly, and fintech disruptors claim they\'ll route around the rails. Can Visa\'s tollbooth model survive the next decade?",
  dataAsOf: 'FY 2024',
  difficulty: 'intro',
  estimatedMinutes: 10,
  keyFacts: [
    { label: 'Revenue', value: '~$36B', detail: 'Global network fees and services' },
    { label: 'Operating Margin', value: '~65%', detail: 'One of the highest in any industry — almost no marginal cost per transaction' },
    { label: 'Cards Issued', value: '~4.5B', detail: 'More than one Visa card for every two humans on earth' },
    { label: 'Merchants', value: '~100M', detail: 'Merchants worldwide that accept Visa' },
    { label: 'P/E Ratio', value: '~28-32x', detail: 'Premium multiple for premium moat — rarely trades cheap' },
    { label: 'Market Share', value: '~50%+ of card payments', detail: 'In a duopoly with Mastercard (~30%); AmEx and Discover are smaller players' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Visa operates a payments network — it does NOT issue cards, lend money, or hold deposits. When you swipe a Visa card, Visa\'s network routes the transaction between your bank (the issuer), the merchant\'s bank (the acquirer), and the merchant — in roughly 2 seconds. Visa takes a small fee per transaction (a few cents plus ~0.1% of the amount). Customers are banks (who pay Visa to use the network and issue cards under Visa\'s brand) and merchants (who pay acceptance fees). Revenue is almost entirely fee-based and scales directly with total transaction volume across the network — more swipes, more revenue, almost no extra cost.",
      strongReasoningIncludes: [
        'Clearly distinguishes Visa from a bank — Visa doesn\'t lend or hold money',
        'Explains the tollbooth / fee-per-transaction model',
        'Identifies the two-sided customer base: banks (issuers) and merchants',
      ],
    },
    drivers: {
      modelAnswer:
        "Two drivers dominate Visa\'s revenue: (1) Total payment volume (dollars spent through the network) — grows with consumer spending, global GDP, and cash-to-card conversion in emerging markets. (2) Transaction count — grows as more purchases shift from cash to cards and from cards to digital wallets (which still often route through Visa). Secondary drivers: cross-border volume (higher fees on international transactions, very high margin), and value-added services (fraud tools, data analytics, sold to banks). The biggest tailwind is the structural decline of cash globally — every cash payment that becomes a card payment is a Visa revenue event.",
      strongReasoningIncludes: [
        'Identifies payment volume (or transaction count) as the primary driver',
        'Connects cash-to-card conversion (secular trend) to revenue growth',
        'References cross-border volume, emerging markets, or a specific secondary driver',
      ],
    },
    moat: {
      modelAnswer:
        "Visa has possibly the strongest moat of any public company. It\'s a classic two-sided network effect: merchants accept Visa because cardholders have Visa cards; cardholders want Visa cards because merchants accept them. Each new merchant makes the card more valuable; each new cardholder makes acceptance more valuable. Building a competing network requires simultaneously signing up millions of merchants AND billions of cardholders — which is why Mastercard is the only true peer (and why American Express stays smaller despite trying for 70+ years). Secondary moat: scale economics — infrastructure cost is roughly fixed, so Visa\'s per-transaction cost is a fraction of what a new entrant would face. Third moat: the regulatory / compliance infrastructure (fraud prevention, security, global settlement) is itself hard to replicate.",
      strongReasoningIncludes: [
        'Identifies network effects (two-sided) as the primary moat',
        'Explains WHY new entrants can\'t replicate the network — chicken-and-egg problem',
        'References scale economies, global infrastructure, or regulatory moat as secondary',
      ],
    },
    risks: {
      modelAnswer:
        "Three real risks. (1) Regulatory pressure on interchange fees. Visa\'s fees are capped in the EU and parts of Asia; US pressure is rising. A legislated cap could compress margins permanently. (2) Alternative payment rails. Real-time payment networks (FedNow in the US, UPI in India, PIX in Brazil) let banks transfer money directly without touching Visa. In India, UPI has already dramatically slowed Visa\'s growth — this model could spread. (3) Stablecoins and crypto rails. If stablecoin payments achieve consumer adoption, they route around card networks entirely. Still mostly theoretical, but the risk is structural, not cyclical. A quieter risk: Visa\'s growth depends on the cash-to-card thesis, and in some markets cash is being skipped altogether for digital wallets that don\'t use Visa.",
      strongReasoningIncludes: [
        'Identifies regulatory / interchange-fee risk',
        'Names at least one specific alternative rail (UPI, FedNow, PIX, real-time payments, stablecoins)',
        'Frames risks as structural, not just "competition" or "recession"',
      ],
    },
    valuation: {
      modelAnswer:
        "Visa is priced as a premium-quality compounder — roughly 28-32x forward earnings, rarely lower. That\'s a significant premium to the market P/E of ~20x, and the market has assigned this premium consistently for a decade because of the quality attributes: 65% operating margins, minimal capex, near-infinite returns on reinvested capital, and a moat that investors trust. The valuation assumes ~10% annual revenue growth, margin stability, and that the regulatory / alternative-rails risks remain manageable. This is correct pricing if you believe those assumptions hold. It\'s wrong if (a) regulators cut interchange fees meaningfully, or (b) real-time payments genuinely displace card volume in large markets. At 30x, there\'s not a lot of margin of safety — you\'re paying full price for quality.",
      strongReasoningIncludes: [
        'Identifies the valuation as premium-quality / compounder, not cheap or turnaround',
        'Notes the P/E is elevated vs. market and explains why the market grants a premium',
        'Mentions what specifically has to be true for the valuation to hold',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Visa sits on top of the most durable network effect in business history, with 65%+ operating margins and structural tailwinds (cash-to-card conversion, cross-border travel, e-commerce growth). The business compounds at 10-12% revenue growth with almost no required capex, meaning 95%+ of profits are free cash flow. At 30x earnings, the multiple is expensive but justified — Visa has beaten the market most years because quality keeps reasserting itself. This is what a \"pay up for quality\" investment looks like.\n\nBEAR THESIS: The card network is being routed around in real time. India\'s UPI handles $2T+ in transactions annually that would have been Visa volume a decade ago. FedNow in the US, PIX in Brazil, and similar systems are rolling out globally. Interchange fees are under regulatory attack in multiple jurisdictions. Meanwhile Visa trades at 30x earnings — a multiple that requires everything to keep working. The risk-reward at this price is asymmetric to the downside: limited upside if the bull case plays out, significant downside if real-time payments or regulation meaningfully compress the fee.",
      strongReasoningIncludes: [
        'Commits to a clear bull or bear case',
        'References either the network-effect moat (bull) or real-time payments / regulation (bear)',
        'The case is specific enough to be falsified by a named event or metric',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: BUY on weakness, or PASS at current prices. Visa is one of the highest-quality businesses public investors can own, but at 30x earnings there\'s little room for error. I\'d be a confident buyer below 22-24x earnings (which happens every few years during market fear). I\'d pass at 30x+ unless I had a specific thesis for accelerating growth. What would change my verdict: (a) a meaningful regulatory ruling on interchange fees in the US — could compress the multiple by 20-30% overnight; (b) evidence that real-time payments are taking significant share of US or European volume, not just emerging markets; (c) a market-wide de-rating pulling Visa below 24x, at which point it becomes a long-term buy-and-hold.",
      strongReasoningIncludes: [
        'Commits to a specific action (buy, pass, or \"wait for X price/multiple\")',
        'Names a measurable condition that would change the decision',
        'The condition is observable (price, multiple, regulatory ruling, volume data)',
      ],
    },
  },
};
