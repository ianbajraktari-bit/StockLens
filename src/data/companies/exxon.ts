import type { CompanyProfile } from './types';

export const exxonProfile: CompanyProfile = {
  id: 'exxon',
  ticker: 'XOM',
  name: 'ExxonMobil',
  emoji: '⛽',
  sector: 'Energy — Integrated Oil & Gas',
  oneLiner: 'The disciplined supermajor — low-cost production, a Guyana windfall, and capital returns over growth',
  description:
    "ExxonMobil is the largest US-based integrated oil & gas company — producing ~4.6 million barrels of oil-equivalent per day, refining crude into fuels and chemicals, and returning enormous amounts of capital to shareholders. After a brutal 2014-2020 stretch of value destruction, ExxonMobil reset around capital discipline: it produces from only its lowest-cost barrels (Permian shale, Guyana offshore), returns most free cash flow via dividends and buybacks, and has quietly become one of the strongest balance sheets in the sector. The core question is not whether Exxon executes — it does — but whether oil demand peaks in 10 years or 30, and whether the returns Exxon generates between now and then justify owning a sunset industry.",
  dataAsOf: 'FY 2024',
  difficulty: 'standard',
  estimatedMinutes: 12,
  keyFacts: [
    { label: 'Revenue', value: '~$340B', detail: 'FY2024 — down from 2022 peak, reflecting lower crude prices' },
    { label: 'Production', value: '~4.6M boepd', detail: 'Oil + gas production, growing from Permian + Guyana' },
    { label: 'Free Cash Flow', value: '~$30B+', detail: 'Funds dividend + buyback program; highly correlated to oil prices' },
    { label: 'Breakeven Oil Price', value: '~$35/bbl', detail: 'Cost to cover dividend + capex; among the lowest in supermajors' },
    { label: 'Dividend + Buyback', value: '~$35B/year', detail: '~8% of market cap returned annually at typical oil prices' },
    { label: 'P/E Ratio', value: '~12-14x', detail: 'Earnings very cyclical — multiple swings with oil price' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "ExxonMobil is an integrated oil & gas company operating across three segments. (1) Upstream — exploring for and producing oil and gas. This is where the bulk of profits comes from, and profitability is largely determined by realized oil/gas prices minus production cost per barrel. (2) Energy Products — refining crude oil into gasoline, diesel, jet fuel, and marketing them. Margins move with refining 'crack spreads' — the gap between refined product prices and crude input cost. (3) Chemical — producing petrochemicals and specialty products from oil/gas feedstock. Roughly: Upstream drives earnings volatility and upside; Downstream + Chemical provide counter-cyclical earnings that can partially offset low crude prices. The integrated model means Exxon captures value at every stage, and the vertical structure provides a measure of stability versus a pure E&P (exploration & production) company.",
      strongReasoningIncludes: [
        'Identifies the three segments — upstream, downstream/refining, chemicals',
        'Explains upstream earnings are tied to oil/gas prices',
        'Notes the integrated structure provides some counter-cyclical balance',
      ],
    },
    drivers: {
      modelAnswer:
        "Oil and gas prices are the dominant driver — everything else is second-order. That said, three specific levers matter for Exxon beyond the commodity. (1) Permian + Guyana production growth. These are Exxon's two best barrels (~$35/bbl breakeven). Volume growth from these basins alone can add $3-5B of annual operating cash flow as they scale. (2) Refining margins. Margins on refined products depend on global capacity utilization — tight capacity (as in 2022-24) means fat refining spreads; overcapacity compresses them. (3) Chemicals cycle. Margins here tend to move opposite to crude (cheap feedstock = better chemical margins), providing some hedge. Secondary: LNG export capacity (growing structurally), Pioneer acquisition synergies ($2B+/year target), and the dividend which sets a floor on downside. Long-term: how fast oil demand peaks and the path after.",
      strongReasoningIncludes: [
        'Identifies oil/gas prices as the dominant driver',
        'Names Permian or Guyana growth as a specific volume lever',
        'References refining or chemicals margin cyclicality',
      ],
    },
    moat: {
      modelAnswer:
        "Exxon's moat is scale + low-cost asset base + integrated operating expertise. (1) Low-cost assets: Exxon's production breakeven (~$35/bbl) is among the lowest of any supermajor. When oil drops to $50, Exxon is still profitable while higher-cost producers (marginal US shale, Canadian oil sands) are bleeding. That cost structure is the result of decades of investment choices and geological luck. (2) Scale and integration: Exxon can run massive projects (Guyana's multiple FPSOs, Permian at scale) that smaller competitors can't. (3) Technical expertise: Exxon's reservoir engineering, deepwater operations, and refining complexity advantages are real — Guyana production came online faster and cheaper than almost any megaproject in oil history. (4) Relationships with petro-states and governments that take decades to build. What Exxon does NOT have is pricing power on the commodity — oil is a commodity, and Exxon is a price-taker. The moat is a cost moat, not a pricing moat.",
      strongReasoningIncludes: [
        'Identifies low-cost asset base as the primary moat',
        'References scale, technical expertise, or specific assets (Guyana, Permian)',
        'Acknowledges oil is a commodity — moat is on cost, not price',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks. (1) Sustained low oil prices. Breakeven is ~$35/bbl, but the dividend + buyback program is calibrated for ~$60/bbl oil. Sustained prices below $50 means dividend coverage tightens and buybacks slow. A sustained oil collapse (as in 2015-16 or 2020) can halve the stock. (2) Energy transition acceleration. If EV adoption accelerates faster than expected (China already at 40%+ of new car sales), oil demand could peak earlier than consensus (2030 vs. 2035+). Terminal-value discount would compress the multiple even if near-term earnings are fine. (3) Stranded asset risk. Exxon continues to invest in long-lived projects (deepwater, LNG, Permian) with 20-30 year payback horizons. If demand collapses, some of these become uneconomic. (4) Geopolitical production disruption or OPEC dynamics. A real price war between Saudi Arabia and non-OPEC producers could drop prices to $40 for an extended period. A quieter risk: regulatory — climate disclosure requirements, windfall taxes, and litigation around climate change.",
      strongReasoningIncludes: [
        'Names oil price risk — including the possibility of sustained lows',
        'Identifies energy transition / demand peak as a structural risk',
        'References a specific risk (stranded assets, regulation, OPEC dynamics)',
      ],
    },
    valuation: {
      modelAnswer:
        "ExxonMobil trades at ~12-14x forward earnings — cheap in absolute terms, but this is a cyclical business and multiples are deceptive: earnings at the peak of an oil cycle trade at lower multiples because the market knows they'll mean-revert. On through-cycle earnings, Exxon is probably closer to 15-16x. The more useful metric here is the capital return yield: Exxon returns ~8% of its market cap annually via dividend + buybacks when oil is in the $60-80 range. The valuation is attractive if you believe oil stays in that corridor for a decade and energy transition is gradual rather than abrupt. It compresses if oil drops sustainably below $50 (capital returns get cut) or if the market re-rates oil as a terminal-declining industry (multiples contract even at unchanged earnings).",
      strongReasoningIncludes: [
        'Identifies Exxon as cyclical with earnings tied to oil price',
        'References the capital return yield, not just P/E',
        'Notes the tension between current cash generation and terminal value',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Exxon is a cash machine with a moat priced for pessimism. Capital discipline is real — gone are the growth-for-growth's-sake megaprojects of the 2000s. Permian + Guyana provide low-cost barrel growth for at least a decade, and Pioneer integration adds meaningful synergies. The dividend ($4/share+) is one of the most secure in the S&P 500, and the buyback program structurally shrinks share count. At 13x earnings with an 8% capital return yield, you're paid handsomely to wait for the energy transition to play out, and most sophisticated forecasts have oil demand growing until at least 2030.\n\nBEAR THESIS: Oil's terminal decline is closer than the bull case admits, and Exxon is making capex bets with 20-30 year payback horizons in an industry whose demand may peak in 10. Chinese EV penetration is reshaping demand faster than anyone modeled three years ago. Every dollar Exxon invests in new capacity may be a dollar of stranded asset value. Meanwhile ESG-driven divestment continues to shrink the buyer pool, and the multiple will keep compressing structurally regardless of near-term earnings. At 13x earnings on peak-cycle profits, this looks cheap but isn't.",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References oil demand trajectory, capital discipline, or energy transition',
        'The thesis is falsifiable by observable data (oil price, EV share, capex)',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: MODEST BUY — this is a 'sleep well at night' dividend compounder for investors who want energy exposure without betting on a commodity price explosion. Exxon's combination of low-cost production, strong balance sheet, and enormous capital return program makes it defensible at a wide range of oil prices. I'd add on weakness (any stretch where oil drops to ~$60 and Exxon trades below ~11x earnings). I'd trim if oil rallies above $100 and Exxon runs above 16x — these are the cycle tops, and the entire sector derates predictably. Watch quarterly: Permian + Guyana production growth (core thesis), dividend coverage at strip prices, capex discipline, and any announcement of major new frontier investments (which would be a bad sign — back to the old bad habits).",
      strongReasoningIncludes: [
        'Commits to a specific action (buy, hold, trim)',
        'Names specific oil price or multiple thresholds',
        'The thresholds are observable from public data',
      ],
    },
  },
};
