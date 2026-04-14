import type { CompanyProfile } from './types';

export const cocaColaProfile: CompanyProfile = {
  id: 'cocacola',
  ticker: 'KO',
  name: 'Coca-Cola',
  emoji: '🥤',
  sector: 'Consumer Staples — Beverages',
  oneLiner: "The textbook consumer staple — brand-dominated, distribution-moated, and slowly adapting to a post-sugar world",
  description:
    "Coca-Cola is the most iconic consumer brand in history and a canonical example of what Buffett calls a 'wide moat' business. It owns or licenses ~500 beverage brands (Coke, Sprite, Smartwater, Fairlife, Costa Coffee, Topo Chico) and operates primarily as a concentrate seller — Coke sells syrup to bottlers who mix, bottle, and distribute. That asset-light model produces ~30% operating margins and consistent free cash flow, funding 62 consecutive years of dividend increases. But soda consumption has been in structural decline for 20 years, healthy-option competition is intensifying, and GLP-1 drugs may reduce consumer caloric demand long-term. Is Coca-Cola still the default dividend compounder, or a slow-decaying brand?",
  dataAsOf: 'FY 2024',
  difficulty: 'intro',
  estimatedMinutes: 10,
  keyFacts: [
    { label: 'Revenue', value: '~$47B', detail: 'FY2024 — grew ~3% YoY, mostly on pricing' },
    { label: 'Operating Margin', value: '~30%', detail: 'High for a beverage company — reflects the concentrate model' },
    { label: 'Dividend Streak', value: '62 years', detail: 'Consecutive annual dividend increases — a Dividend King' },
    { label: 'Organic Revenue Growth', value: '~8-10%', detail: 'Longer-term algorithm — mostly pricing, modest volume' },
    { label: 'International Mix', value: '~70%+ of volume', detail: 'Heavily international — FX is a real headwind' },
    { label: 'P/E Ratio', value: '~22-25x', detail: 'Premium to staples peers for brand quality and consistency' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Coca-Cola is fundamentally a concentrate manufacturer and brand licensor, not a bottler. The model: Coke produces the flavor concentrate ('the formula') and sells it to a global network of independent bottlers. The bottlers add water, sweetener, and carbonation, package the product, and distribute it. Coke keeps the high-margin concentrate revenue; bottlers handle the capital-intensive, lower-margin logistics. This is why Coke's operating margin is ~30% while Coca-Cola bottlers typically earn ~7-10%. Revenue is ~70% international by volume, with operations in 200+ countries. The portfolio has diversified far beyond red-can Coca-Cola: sparkling soft drinks are ~70% of volume, but water (Smartwater, Dasani), sports/energy drinks (Powerade, BodyArmor), dairy (Fairlife), and coffee (Costa) are the growth segments. Fairlife alone grew ~30%+ in 2024.",
      strongReasoningIncludes: [
        'Identifies the concentrate / bottler-partner model as the core business',
        'Distinguishes Coke\'s high-margin concentrate role from the bottlers',
        'Notes the product portfolio is broader than just Coca-Cola the soda',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers. (1) Pricing. Coke has been a master of raising prices 4-6% annually with minimal volume hit — consumers barely notice a 10-cent increase on a $2 bottle. Pricing has been the bulk of revenue growth for a decade. (2) Emerging market volume growth. While US soda volume is flat-to-down, markets like India, Africa, and Southeast Asia still grow high-single-digits on rising per-capita income. (3) Portfolio mix shift — the fastest-growing brands (Fairlife dairy, Smartwater, BodyArmor, Topo Chico) are higher-margin and growing faster than legacy soda. Shifting the mix toward these categories compounds organic growth. Secondary drivers: foreign exchange (negative headwind of 4-6% most years), Costa Coffee monetization (still underperforming), and zero-sugar Coke growth (the one bright spot in soda volumes). Note what is NOT a primary driver: new product introductions. Coke's record with Dasani Sparkling, Coke Energy, etc. is mediocre; mix shift comes from acquisitions more than invention.",
      strongReasoningIncludes: [
        'Identifies pricing as the dominant revenue driver',
        'References emerging market volume or portfolio mix shift',
        'Acknowledges limited organic volume growth in developed markets',
      ],
    },
    moat: {
      modelAnswer:
        "Coca-Cola has one of the cleanest wide moats in any industry. (1) Brand. Coca-Cola is the most recognized brand on earth — built over 130+ years, reinforced by billions of dollars of annual marketing, effectively unassailable. Consumers pay a premium for Coke over a generic cola without conscious thought. (2) Distribution. The global bottler network (~225 bottling partners across 200+ countries) is a physical asset that would take decades and tens of billions to replicate. Coke is available within arm's reach in essentially every country on earth. (3) Scale in marketing. Coke spends ~$4B/year on marketing — few competitors can maintain that level, which entrenches the brand. (4) Shelf space and restaurant partnerships. Coke has exclusive pouring rights at McDonald's, Burger King, and thousands of other chains — switching costs (logistics, contracts) are real. What Coke does NOT have is a functional or switching-cost moat for the consumer. A consumer CAN switch to Pepsi tomorrow with zero cost. The moat is purely brand and distribution, not friction.",
      strongReasoningIncludes: [
        'Identifies brand and distribution network as the primary moat',
        'References the scale of global marketing and bottling relationships',
        'Acknowledges this is a brand moat, not a switching-cost or technical moat',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks, mostly structural and slow. (1) Secular decline in soda consumption. US carbonated soft drink volume has been down or flat for 20 years; younger consumers drink less soda. This trend continues in developed markets and is starting to appear in middle-income countries as they develop. (2) Healthier-option competition. Local brands, private label, and new categories (energy drinks, functional beverages, flavored waters) are all taking share from legacy soda. (3) GLP-1 weight-loss drugs. Consumers on Ozempic/Zepbound reduce caloric intake — early data suggests beverage consumption is disproportionately affected. If 20-40M Americans are on GLP-1s in 10 years, that could structurally reduce the sweet-drink market. (4) Regulatory risk — sugar taxes (already in effect in several countries), advertising restrictions for children, and potential expansion of GLP-1 access. A quieter risk: FX exposure. Coke's 70% international footprint means a strong dollar is a persistent drag on reported earnings.",
      strongReasoningIncludes: [
        'Identifies secular decline in soda as a structural risk',
        'References GLP-1 drugs, healthier competition, or sugar tax regulation',
        'Notes the risks are slow-moving rather than cyclical',
      ],
    },
    valuation: {
      modelAnswer:
        "Coca-Cola trades at ~22-25x forward earnings — a premium to consumer staples peers (~20x average) and to the market. The premium reflects: (a) consistent mid-to-high single-digit EPS growth, (b) a 60+ year dividend streak that attracts income investors willing to pay up, (c) a recession-proof earnings profile, and (d) brand quality that justifies 'just own it forever' positioning in many portfolios. The multiple assumes Coke can continue 5-7% organic revenue growth (mostly pricing), margin stability, and steady buybacks. If GLP-1s or healthier alternatives meaningfully accelerate soda decline, the multiple compresses toward 18-20x — significant downside even with flat-to-slightly-growing earnings. If the transition is gradual (as all prior secular shifts in soda have been), the multiple is defensible. This is 'priced for durability' rather than growth.",
      strongReasoningIncludes: [
        'Identifies Coca-Cola as defensive / quality compounder, not growth or value',
        'Notes the multiple premium is for consistency and dividend, not growth rate',
        'References the specific downside case (faster secular decline → multiple compression)',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Coca-Cola is the textbook 'own it forever' stock. 60+ years of dividend increases, 30% operating margins, essentially no business model risk, and a portfolio quietly transitioning from soda to faster-growing categories (Fairlife, BodyArmor, Smartwater). Emerging market growth provides a multi-decade volume tailwind. Pricing power is structural — Coke has raised prices every year for 50 years with minimal backlash. At 23x earnings with a 3% dividend yield and buybacks on top, you get a 8-10% total return with minimal drawdown risk. This is the definitional defensive compounder.\n\nBEAR THESIS: Coca-Cola is a slow-decaying brand priced for stability it may not deliver. Soda volume has been falling in developed markets for 20 years and now faces two new headwinds — GLP-1s suppressing consumption and Gen Z drinking markedly less soda than prior generations. Fairlife and BodyArmor are nice growth stories but too small (~5% of revenue) to offset core decline. At 23x earnings — a significant market premium — Coke is priced like a 10-year treasury alternative, not a company whose core product is in long-term structural decline. Multiple compression alone, without any earnings miss, could drive meaningful underperformance.",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References soda decline, GLP-1 impact, or brand durability',
        'The thesis is specific enough that a named trend could confirm or refute it',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: HOLD — a classic 'boring compounder' that fits many portfolios but doesn't scream 'buy now.' If you already own it for the dividend / stability profile, the case for selling is thin. If you're considering buying it, I'd wait for either (a) a broader staples derating that brings the forward multiple below 20x, or (b) clear evidence that the Fairlife / BodyArmor / Topo Chico growth engine is getting big enough (say, 15%+ of revenue) to offset soda decline. I'd get more concerned if: GLP-1 data shows a sustained 5%+ drop in beverage consumption among users; US CSD volume decline accelerates to 3%+ annually (vs. ~1% historical); or FX creates a multi-year double-digit EPS headwind. For new investors prioritizing total return over stability, there are probably better opportunities elsewhere — but as a sleep-well-at-night holding, Coke is hard to fault.",
      strongReasoningIncludes: [
        'Commits to a specific action (hold, buy, pass)',
        'Names specific conditions (multiple, growth portfolio size, volume trends)',
        'The conditions are observable from quarterly data',
      ],
    },
  },
};
