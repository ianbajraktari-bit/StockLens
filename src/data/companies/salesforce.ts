import type { CompanyProfile } from './types';

export const salesforceProfile: CompanyProfile = {
  id: 'salesforce',
  ticker: 'CRM',
  name: 'Salesforce',
  emoji: '☁️',
  sector: 'Enterprise SaaS',
  oneLiner: 'The default CRM for enterprise — now pivoting from growth to profitability',
  description:
    "Salesforce basically invented enterprise SaaS. It's the CRM system of record for most of the Fortune 500, with deep integrations into sales, service, marketing, and analytics workflows. For 20 years it grew 20%+ a year, largely by acquiring other SaaS companies (Slack, Tableau, MuleSoft). Then activist investors arrived in 2023, forced a cost reset, and the story flipped overnight from 'grow at any cost' to 'prove you can compound margins.' Now the question is whether Salesforce can reignite growth with AI (Agentforce) or whether it's a mature utility-like business masquerading as tech.",
  dataAsOf: 'FY 2025',
  difficulty: 'standard',
  estimatedMinutes: 12,
  keyFacts: [
    { label: 'Revenue', value: '~$37.9B', detail: 'FY2025 — grew ~9% YoY, slowest in company history' },
    { label: 'Operating Margin', value: '~20% GAAP / ~33% non-GAAP', detail: 'Transformed from ~2% GAAP in FY22 after activist-driven cost reset' },
    { label: 'Remaining Performance Obligation', value: '~$63B', detail: 'Contracted future revenue — a leading indicator of near-term growth' },
    { label: 'Free Cash Flow', value: '~$12.4B', detail: 'Strongly positive and growing — the bull-case anchor' },
    { label: 'Growth Rate', value: '~8-10%', detail: 'Decelerating from 20%+ pre-2023 — the central tension of the stock' },
    { label: 'P/E Ratio', value: '~28-32x fwd', detail: 'Reasonable if margins keep expanding, rich if growth keeps decelerating' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Salesforce sells subscription software that enterprises use to manage their customer relationships — sales pipelines, customer service tickets, marketing campaigns, and increasingly, analytics and data unification. The core 'Sales Cloud' and 'Service Cloud' are the flagship products; around those sit acquisitions turned into product lines: Slack (team messaging), Tableau (analytics), MuleSoft (data integration), and the newer Data Cloud + Agentforce (AI agents). Customers pay per user per month, in multi-year contracts. Revenue is ~95% subscription and highly recurring. The business makes money because once a 10,000-person sales organization runs on Salesforce, ripping it out means retraining thousands of reps, rebuilding dashboards, and risking months of lost productivity — so they don't.",
      strongReasoningIncludes: [
        'Identifies the core SaaS / subscription business model',
        'Recognizes CRM (Sales Cloud + Service Cloud) as the anchor, with adjacencies around it',
        'Mentions recurring revenue or contract-based revenue, not one-time sales',
      ],
    },
    drivers: {
      modelAnswer:
        "Two drivers dominate. (1) Seat expansion within existing customers — enterprise sales teams grow, adopt more Salesforce modules (service, marketing, analytics), and Salesforce charges per seat. This is the 'land and expand' motion and historically drove 2/3 of growth. (2) New logo wins — harder now because most of the Fortune 2000 is already a customer. Secondary drivers: price increases (Salesforce raised prices ~9% in 2023 — unusual, and signals they're optimizing what they have rather than chasing new growth); Data Cloud attach (companies paying extra to unify data across their Salesforce instances); and Agentforce, the new AI agent product, which is the growth-reacceleration bet. The quiet truth: Salesforce's growth is now more about per-customer ARPU than new customers.",
      strongReasoningIncludes: [
        'Identifies seat expansion / cross-sell as primary growth mechanism',
        'Recognizes new-logo growth is maturing — market is largely penetrated',
        'References a specific newer driver (Data Cloud, Agentforce, price increases)',
      ],
    },
    moat: {
      modelAnswer:
        "Salesforce's moat is switching costs — possibly the highest in enterprise software. A large Salesforce deployment involves millions of custom records, hundreds of custom workflows, integrations with dozens of other systems, and sales reps trained on a specific UI. Moving off is a multi-year, multi-million-dollar project that also carries execution risk (deals get lost in transit). The AppExchange ecosystem — thousands of third-party apps that plug into Salesforce — deepens this lock-in because customers build their operations on top of it. Secondary moat: brand and enterprise trust, which in B2B sales really does matter. What Salesforce does NOT have is a cost advantage or a network effect — Microsoft Dynamics, HubSpot, and newer startups compete on functionality, and Salesforce has lost share at the low end.",
      strongReasoningIncludes: [
        'Identifies switching costs as the primary moat',
        'Notes ecosystem / AppExchange or data stickiness as reinforcement',
        'Acknowledges the moat holds better at the high end than the low end',
      ],
    },
    risks: {
      modelAnswer:
        "Three risks. (1) AI-native challengers. The next CRM might not look like the current CRM — agent-based systems could let companies rebuild CRM workflows with small teams and modern tooling, bypassing Salesforce entirely. Salesforce's Agentforce is defense against this, but it's unclear if incumbents or startups win the agent layer. (2) Microsoft bundling. Dynamics 365 is increasingly bundled into Microsoft enterprise deals, and Microsoft has the distribution Salesforce lacks. This is a slow share erosion, not a cliff, but it's real. (3) Growth deceleration becomes structural. If revenue growth settles below 8%, Salesforce is a utility-like business priced like tech — the multiple compresses. A quieter risk: the acquisition strategy has been capital-intensive, and activists will push back on any new mega-deal, meaning inorganic growth is off the table.",
      strongReasoningIncludes: [
        'Names AI / agent-based disruption as a structural risk',
        'References Microsoft Dynamics or a specific competitive threat',
        'Identifies the growth-deceleration / re-rating risk',
      ],
    },
    valuation: {
      modelAnswer:
        "Salesforce trades at ~28-32x forward earnings — not cheap, not expensive, fair for a high-quality mature SaaS compounder. The multiple implies: growth stabilizes around 8-10%, non-GAAP margins keep expanding toward 35%+, and free cash flow compounds at low-teens. If Agentforce reaccelerates revenue growth back to 12%+, the multiple expands and this stock works well. If growth decelerates below 8% and Microsoft keeps taking share, the multiple compresses toward 20x — meaningful downside. The key valuation tension: Salesforce looks like a cash-flow compounder today (great FCF, growing margins), but trades at a growth multiple. Either the growth thesis is right, or the multiple needs to come down.",
      strongReasoningIncludes: [
        'Identifies Salesforce as mature SaaS / compounder, not growth or turnaround',
        'Names a specific assumption embedded in the price (growth rate, margin expansion)',
        'Frames the tension between growth-priced multiple and mature-business reality',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Salesforce is early innings of the biggest margin expansion story in enterprise software. The activist-driven cost reset proved margins can nearly double from where they were, and free cash flow is compounding at 15%+. Meanwhile Agentforce gives Salesforce a credible AI story — it can sell AI agents that plug directly into the customer data it already holds, which no startup can easily replicate. At 30x earnings with $12B+ of free cash flow growing, you're paying a reasonable price for a durable cash machine with re-acceleration optionality.\n\nBEAR THESIS: The growth story is over and everyone is in denial. Salesforce grew ~9% last year, and the product is maturing — the Fortune 500 is already a customer. AI disruption is real and asymmetric: if agent-based systems work, Salesforce's per-seat pricing model gets compressed (you need fewer seats); if they don't work, Salesforce invested heavily and gained nothing. Microsoft's Dynamics is the most dangerous long-term competitor, and its bundling power is underestimated. At 30x earnings, this stock is priced like growth but acting like a utility — and eventually utilities get utility multiples.",
      strongReasoningIncludes: [
        'Commits to a clear bull or bear case',
        'References a specific metric or product (Agentforce, margin expansion, growth deceleration)',
        'The thesis is falsifiable with near-term observable data',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: MODEST BUY or HOLD — this is a classic 'quality at a fair price' situation, not a screaming opportunity. The downside looks limited given the cash generation, the upside depends on Agentforce and margin expansion actually delivering. I'd size this smaller than a conviction bet, and watch two things: (1) quarterly revenue growth — if it drops below 8% for two consecutive quarters, the thesis is impaired and the multiple will compress; (2) Agentforce adoption metrics — if customers aren't buying it, the AI story fails and Salesforce is pricier than it looks. A meaningful Microsoft win in a big Fortune 100 CRM replacement would also be a red flag. I'd turn more bullish below 25x forward earnings.",
      strongReasoningIncludes: [
        'Commits to a specific action (buy, hold, pass, or wait)',
        'Names at least one specific metric to monitor',
        'The monitoring signal is observable from earnings releases or public data',
      ],
    },
  },
};
