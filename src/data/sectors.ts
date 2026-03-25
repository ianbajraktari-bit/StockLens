import type { Sector } from './types';

export const sectors: Sector[] = [
  {
    id: 'technology',
    name: 'Technology & AI',
    description:
      'The technology sector encompasses companies that design, develop, and distribute technology-based goods and services. It includes semiconductor manufacturers, software platforms, cloud infrastructure providers, and consumer electronics companies. In 2024–2026, the sector has been defined by the rapid buildout of artificial intelligence infrastructure, with hundreds of billions of dollars flowing into GPU clusters, data centers, and AI-capable cloud platforms.',
    color: '#6366f1',
    macroFactors: [
      {
        factor: 'Interest Rates & Monetary Policy',
        impact:
          'Technology stocks, particularly high-growth names, are highly sensitive to interest rates. Higher rates increase the discount rate applied to future cash flows, compressing valuations. The Federal Reserve\'s rate path directly influences whether investors favor growth stocks (lower rates) or rotate into value and fixed income (higher rates). The 2022–2023 rate hiking cycle caused significant multiple compression across the sector.',
        relevance: 'high',
      },
      {
        factor: 'AI Infrastructure Spending Cycle',
        impact:
          'The current AI capital expenditure cycle is the largest technology investment wave since the cloud buildout of the 2010s. Hyperscalers (Microsoft, Google, Amazon, Meta) have collectively committed over $300 billion in annual capex for 2026, primarily for AI training and inference infrastructure. The sustainability and ROI of this spending cycle is the defining debate for the sector. If AI delivers on productivity promises, this capex will generate substantial returns. If adoption disappoints, it could trigger a spending pullback reminiscent of the 2000 telecom bust.',
        relevance: 'high',
      },
      {
        factor: 'Semiconductor Export Controls',
        impact:
          'U.S. restrictions on advanced chip exports to China directly affect companies like NVIDIA, AMD, and their supply chains. These controls limit the total addressable market for cutting-edge AI chips and have prompted China to accelerate domestic semiconductor development. The regulatory landscape continues to evolve, with potential expansion of restrictions creating ongoing uncertainty for chipmakers\' revenue forecasts.',
        relevance: 'high',
      },
      {
        factor: 'Antitrust & Regulatory Pressure',
        impact:
          'Major technology platforms face intensifying regulatory scrutiny in both the U.S. and European Union. The EU\'s Digital Markets Act and ongoing U.S. antitrust cases against Google and Apple could impose structural remedies that affect business models. Regulation of AI is in its early stages, and the emerging framework will shape which companies can deploy AI at scale and how.',
        relevance: 'medium',
      },
    ],
    geopoliticalRisks: [
      'Taiwan Strait tensions threaten the global semiconductor supply chain — TSMC produces over 90% of the world\'s most advanced chips, and any disruption would cascade across the entire technology ecosystem.',
      'U.S.-China technology decoupling is creating parallel technology ecosystems, forcing companies to choose between markets and increasing compliance costs.',
      'European data sovereignty regulations (GDPR enforcement, data localization requirements) add operational complexity and cost for global technology companies.',
      'Escalating cyber warfare risks create both demand for cybersecurity solutions and potential vulnerabilities for technology infrastructure.',
    ],
    keyIndicators: [
      'Federal Reserve interest rate decisions and forward guidance',
      'Hyperscaler quarterly capex figures and capex guidance',
      'Semiconductor Equipment Manufacturers\' billings data (SEMI)',
      'Cloud infrastructure revenue growth rates (AWS, Azure, GCP)',
      'U.S. Department of Commerce export control announcements',
    ],
  },
  {
    id: 'consumer',
    name: 'Consumer & Retail',
    description:
      'The consumer and retail sector spans companies that sell goods and services directly to consumers, from e-commerce platforms and warehouse retailers to quick-service restaurants and athletic brands. The sector is closely tied to consumer spending patterns, which represent approximately 70% of U.S. GDP. Companies in this sector are evaluated on their ability to drive same-store sales growth, manage inventory efficiently, and build brand loyalty in an increasingly competitive and digitally transformed marketplace.',
    color: '#f59e0b',
    macroFactors: [
      {
        factor: 'Consumer Confidence & Spending',
        impact:
          'Consumer spending drives the top line for every company in this sector. Key indicators include the Consumer Confidence Index, personal consumption expenditures, and retail sales data. In periods of economic strength, discretionary spending (Nike, premium dining) outperforms. During downturns, value-oriented retailers (Walmart, Costco) and essential spending (McDonald\'s value menu) tend to show relative resilience.',
        relevance: 'high',
      },
      {
        factor: 'Inflation & Input Costs',
        impact:
          'Food, labor, transportation, and raw material costs directly affect margins across the sector. Companies with pricing power — strong brands, loyal customer bases, or unique value propositions — can pass costs to consumers more effectively. Those without pricing power face margin compression. The post-pandemic inflationary period has been a real-time test of which companies possess genuine pricing power.',
        relevance: 'high',
      },
      {
        factor: 'Tariffs & Trade Policy',
        impact:
          'Tariffs on imported goods directly impact cost structures for retailers and brands. Companies with diversified supply chains or domestic manufacturing capabilities are better positioned. The 2025–2026 tariff environment has been particularly volatile, with IEEPA tariffs affecting consumer goods pricing and prompting legal challenges from major retailers.',
        relevance: 'high',
      },
      {
        factor: 'Labor Market Conditions',
        impact:
          'The labor market affects the sector from both sides: as a cost input (employee wages are a major expense for retailers and restaurants) and as a demand driver (employment levels and wage growth directly influence consumer spending power). Minimum wage increases, unionization trends, and labor availability all factor into operational planning and margin forecasts.',
        relevance: 'medium',
      },
      {
        factor: 'E-Commerce Penetration & Digital Transformation',
        impact:
          'The ongoing shift from physical to digital commerce continues to reshape the sector. Companies investing in omnichannel capabilities, last-mile delivery, and digital advertising are capturing share, while those dependent on foot traffic face structural headwinds. Same-day delivery expectations and the integration of AI into personalized shopping experiences are raising the bar for competitive participation.',
        relevance: 'medium',
      },
    ],
    geopoliticalRisks: [
      'Global supply chain disruptions — whether from conflicts, pandemics, or natural disasters — can cause inventory shortages and cost spikes across the retail sector.',
      'Currency fluctuations affect international revenue for global brands. A strong U.S. dollar reduces the value of foreign earnings when converted back to dollars.',
      'Trade tensions with China and Southeast Asia, where much of the world\'s consumer goods manufacturing is concentrated, create ongoing cost and sourcing uncertainty.',
      'Geopolitical instability in oil-producing regions affects transportation and logistics costs, which flow through to retail prices.',
    ],
    keyIndicators: [
      'U.S. Consumer Confidence Index (Conference Board)',
      'Monthly Retail Sales Report (U.S. Census Bureau)',
      'Consumer Price Index (CPI) — particularly food and apparel',
      'Employment Situation Report (BLS) — wage growth data',
      'Same-store / comparable sales growth across major retailers',
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Payments',
    description:
      'The financial sector includes banks, investment firms, insurance companies, asset managers, and payment networks. These institutions serve as the intermediaries through which capital flows in the global economy. The sector is uniquely sensitive to interest rates, regulatory policy, and economic cycles. Financial companies\' earnings are closely tied to lending activity, capital markets volumes (M&A, IPOs), asset valuations, and consumer credit health.',
    color: '#22c55e',
    macroFactors: [
      {
        factor: 'Interest Rate Environment',
        impact:
          'Interest rates are the single most important macroeconomic variable for the financial sector. Banks earn a "net interest margin" — the spread between what they pay depositors and what they charge borrowers. Rising rates generally expand this spread, boosting bank profitability. However, sharply rising rates can also slow loan demand, increase credit losses, and cause mark-to-market losses on bond portfolios (as demonstrated during the 2023 regional banking crisis). The current rate environment directly shapes earnings forecasts for every financial institution.',
        relevance: 'high',
      },
      {
        factor: 'Credit Cycle & Default Rates',
        impact:
          'The credit cycle — the expansion and contraction of lending standards and borrower defaults — is fundamental to bank profitability. During economic expansions, defaults are low and banks expand lending. During recessions, defaults rise and banks increase loan loss provisions, directly reducing earnings. Consumer credit card delinquency rates, corporate default rates, and commercial real estate vacancy rates are key indicators of where the credit cycle stands.',
        relevance: 'high',
      },
      {
        factor: 'Capital Markets Activity',
        impact:
          'Investment banking revenues (M&A advisory, equity and debt underwriting) are cyclical and highly sensitive to market conditions and CEO confidence. The 2024–2025 period saw a recovery in dealmaking after a 2022–2023 drought. Higher M&A activity benefits investment banks (Goldman Sachs, JPMorgan\'s CIB division) and generates fee revenue for asset managers involved in transaction financing.',
        relevance: 'high',
      },
      {
        factor: 'Regulatory Capital Requirements',
        impact:
          'Basel III endgame rules, stress testing requirements, and capital adequacy regulations determine how much capital banks must hold against their assets. Stricter requirements limit the amount of lending and investment a bank can undertake, directly affecting profitability and return on equity. Regulatory changes can alter the competitive landscape significantly.',
        relevance: 'medium',
      },
      {
        factor: 'Digital Payments & Fintech Competition',
        impact:
          'The secular shift from cash to digital payments benefits payment networks (Visa, Mastercard) and companies with digital payment ecosystems. Global digital payment volumes continue to grow at high single digits annually, driven by e-commerce growth, emerging market adoption, and the proliferation of contactless payment infrastructure. Fintech challengers add competitive pressure but also expand the overall payments market.',
        relevance: 'medium',
      },
    ],
    geopoliticalRisks: [
      'International sanctions regimes (Russia, Iran, others) affect cross-border banking operations, payment processing, and compliance costs for global financial institutions.',
      'Sovereign debt concerns in major economies (rising U.S. deficit, European fiscal pressures) can affect bond markets and bank balance sheets.',
      'Cryptocurrency regulation remains in flux globally, creating both opportunities and compliance risks for financial institutions navigating digital asset integration.',
      'Geopolitical conflicts disrupt capital flows and increase demand for safe-haven assets, affecting investment portfolio performance and trading volumes.',
    ],
    keyIndicators: [
      'Federal Funds Rate and Federal Reserve policy statements',
      'Yield curve shape (2-year vs. 10-year Treasury spread)',
      'Consumer credit delinquency and charge-off rates',
      'M&A and IPO volume data (Dealogic, Bloomberg)',
      'Global payment volume growth (Visa/Mastercard network data)',
    ],
  },
];

export function getSectorById(id: string): Sector | undefined {
  return sectors.find((s) => s.id === id);
}
