import type { CompanyProfile } from './types';

export const jpmorganProfile: CompanyProfile = {
  id: 'jpmorgan',
  ticker: 'JPM',
  name: 'JPMorgan Chase',
  emoji: '🏦',
  sector: 'Banking',
  oneLiner: "America's most important bank — a four-business conglomerate with scale nobody else has",
  description:
    "JPMorgan is the largest US bank by assets (~$4.1T) and runs four very different businesses under one roof: consumer banking, investment banking, asset & wealth management, and commercial banking. The business is deeply cyclical — profits move with interest rates, credit losses, and capital markets activity — but JPMorgan's diversification means different engines fire in different environments. Jamie Dimon has built it into the one bank regulators call first in a crisis, which confers a 'too big to fail' funding advantage worth billions. Is it a forever compounder at a reasonable price, or a cyclical bank one recession away from a big credit reset?",
  dataAsOf: 'FY 2024',
  difficulty: 'standard',
  estimatedMinutes: 13,
  keyFacts: [
    { label: 'Total Assets', value: '~$4.1T', detail: 'Largest US bank; roughly 15% of all US bank assets' },
    { label: 'Net Income', value: '~$58B', detail: 'FY2024 — highest profits of any US bank ever' },
    { label: 'Return on Tangible Equity', value: '~21%', detail: 'Best-in-class — peers average 10-15%' },
    { label: 'CET1 Capital Ratio', value: '~15.7%', detail: 'Well above regulatory minimum — capital cushion for downturns' },
    { label: 'Deposits', value: '~$2.4T', detail: 'Massive low-cost funding base; scale advantage vs. smaller banks' },
    { label: 'P/E Ratio', value: '~12-14x', detail: 'Modest premium to bank peers — reflects quality, not euphoria' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "JPMorgan is four businesses stapled together. (1) Consumer & Community Banking — ~40% of revenue — branches, credit cards (Chase brand), mortgages, auto loans. This is the retail deposit engine. (2) Corporate & Investment Bank — ~35% — M&A advisory, underwriting stock and bond issuances, trading. Highly cyclical, high-margin in good years. (3) Asset & Wealth Management — ~15% — managing money for institutions and rich individuals, earning fees on ~$5T+ of assets. (4) Commercial Banking — ~10% — serving mid-size companies. The fundamental bank model: take in cheap deposits, lend them out or invest them at higher rates, earn the spread (net interest income), plus fees for services. JPMorgan earns more of its revenue from fees than most banks, which stabilizes it through rate cycles.",
      strongReasoningIncludes: [
        'Identifies that JPMorgan has multiple business segments, not one',
        'Explains net interest income (deposits in, loans out, earn the spread) as the core model',
        'Mentions fee income (investment banking, asset management) as a meaningful diversifier',
      ],
    },
    drivers: {
      modelAnswer:
        "Three macro drivers dominate. (1) Interest rates and the yield curve. JPMorgan's net interest income is roughly $90B — rate changes move earnings meaningfully. Higher rates expand the spread on loans funded by low-cost deposits; a very flat or inverted curve compresses it. (2) Credit losses. When the economy rolls over, credit card charge-offs and commercial loan defaults rise, and JPMorgan has to set aside billions in loan loss provisions — directly reducing earnings. (3) Capital markets activity. Investment banking fees (M&A, IPOs) and trading revenue swing widely with market conditions — a bull market lifts these; a 2022-style freeze crushes them. Secondary drivers: deposit growth (competition for deposits is real post-SVB), fintech share losses at the margin, and Basel III capital rules that could force banks to hold more capital (ROE headwind).",
      strongReasoningIncludes: [
        'Identifies interest rates as a primary driver',
        'Names credit losses / loan loss provisions as cyclical',
        'References capital markets activity or fee income cyclicality',
      ],
    },
    moat: {
      modelAnswer:
        "JPMorgan's moat is scale + diversification + implicit government backing. (1) Scale: $4.1T in assets spreads fixed costs (tech, compliance, branches) across a huge revenue base, so JPMorgan's per-unit cost of running a bank is lower than nearly any competitor. (2) Deposit franchise: ~$2.4T in mostly low-rate deposits is a funding moat — no new bank can replicate Chase's retail footprint. (3) Too-big-to-fail status: JPM borrows cheaper in wholesale markets than peers because the market assumes government support in a crisis. That's worth tens of billions in lifetime cost of capital. (4) Cross-sell: clients of one segment (e.g., wealth management) often flow into another (e.g., commercial banking), creating switching costs. What JPMorgan does NOT have is a pricing moat — deposits, mortgages, and loans are commoditized at the margin.",
      strongReasoningIncludes: [
        'Identifies scale and/or deposit franchise as the primary moat',
        'References too-big-to-fail funding advantage OR regulatory moat',
        'Acknowledges individual products are commoditized — moat is at the franchise level',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks. (1) A real credit cycle. The 2020-2024 period had unusually low credit losses. Normalized credit costs alone could pull earnings down 15-20%, and a real recession adds another 20-30% on top. Bank earnings can halve in a true downturn — this is still a bank. (2) Regulatory capital increases. Basel III endgame rules, if implemented aggressively, could force JPMorgan to hold another ~$50B in capital, compressing ROE by 2-3 percentage points permanently. (3) Key-person risk. Jamie Dimon has led JPMorgan for 20 years and is widely credited with its superior execution; succession is a real overhang the market currently ignores. (4) Deposit competition / fintech. Post-SVB, deposit costs are rising; Apple Cash, Robinhood, and other fintechs skim deposits from traditional banks. A quieter risk: geopolitical or commercial real estate shock — JPM has meaningful CRE exposure that could reprice.",
      strongReasoningIncludes: [
        'Names credit cycle / loan loss normalization as a structural risk',
        'Identifies regulatory capital risk or a Dimon succession risk',
        'References deposit competition, CRE, or another specific non-cyclical risk',
      ],
    },
    valuation: {
      modelAnswer:
        "JPMorgan trades at ~12-14x forward earnings and ~2.3x tangible book value — a modest premium to bank peers (most trade at 10-12x earnings, 1.2-1.8x book). The premium reflects JPMorgan's consistently higher ROTCE (~21% vs. peer ~12%) and the market's belief that scale will keep widening the quality gap. The valuation is NOT stretched, but it's also NOT cheap for a cyclical business. Historically, US banks trade at 8-10x earnings in recessions and 15-18x in bull markets; JPM is currently in the upper half of this range. The multiple is defensible if credit stays benign and the rate environment doesn't compress NII meaningfully. It compresses hard if we get a real recession (a $15-20B loan-loss provision quarter is not implausible) — bank earnings are the thing, and bank earnings move.",
      strongReasoningIncludes: [
        'Identifies JPM as cyclical / quality bank, not pure growth or value',
        'References the P/E or P/book premium to bank peers',
        'Notes that bank earnings (and multiples) are cyclical — this is not a stable utility',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: JPMorgan is the 'it just keeps winning' of US banking. Every banking crisis widens its share — 2008 (bought Bear Stearns, WaMu), 2023 (bought First Republic). ROTCE has been 20%+ for two years running, and the scale-cost gap vs. smaller banks keeps compounding. Capital returns (dividends + buybacks) run ~$30B+ per year. At 13x earnings on $60B+ of annual profit, this is a quality compounder trading for a modest premium to peers — fair price, no bubble.\n\nBEAR THESIS: It's still a bank. After two consecutive years of record profits, the next move in credit losses is up, not down. Provision expense jumped over $10B in 2024 already; a real recession could easily push that toward $30B+, and that flows straight through earnings. Meanwhile JPMorgan trades at the high end of its historical valuation range at peak earnings — classic 'top of the cycle' setup. Dimon will step down within the next few years, removing a factor the market has relied on. At 13x peak earnings for a cyclical business, the risk-reward is asymmetric down.",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References a specific cyclical dynamic (credit, rates, capital markets)',
        'The case is falsifiable by a named metric (NII, ROTCE, loan losses)',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: HOLD or MODEST BUY — JPMorgan is the best house on the banking block, but don't overpay. A diversified portfolio should probably own some US banking exposure, and if you're going to own one, this is the one. I'd add on weakness — specifically if the forward P/E drops below ~10x (which usually happens when credit fear spikes). I'd trim above ~15x, which has historically been the cyclical top for high-quality banks. Watch two things: (1) quarterly net charge-offs and provision expense — inflection points in credit matter more than headline earnings; (2) CET1 capital ratio — if regulators force it toward 17%+, ROE compresses structurally and the premium multiple is harder to justify.",
      strongReasoningIncludes: [
        'Commits to a specific action (hold, buy, trim, wait)',
        'Names a specific valuation or credit metric threshold',
        'The metric is reported in earnings releases or regulatory filings',
      ],
    },
  },
};
