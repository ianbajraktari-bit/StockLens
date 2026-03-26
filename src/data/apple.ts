import type { Company } from './types';

export const apple: Company = {
  id: 'apple',
  name: 'Apple',
  ticker: 'AAPL',
  logo: '🍎',
  sector: 'Technology & AI',
  sectorId: 'technology',
  investmentType: 'Mature Tech Compounder',
  tagline: 'The ecosystem that 2.5 billion devices — and Wall Street — cannot quit',
  color: '#a855f7',
  lastUpdated: 'March 2026',

  whatMattersNow: {
    title: 'What Matters Right Now',
    drivers: [
      {
        label: 'Apple Intelligence as an upgrade catalyst',
        description:
          'Apple\'s on-device AI features require newer hardware, potentially triggering a multi-year iPhone refresh cycle. Whether Apple Intelligence meaningfully differentiates from Google and Samsung AI offerings will determine if this catalyst is real or overhyped.',
        category: 'company-specific',
      },
      {
        label: 'Services revenue growth sustainability',
        description:
          'Services hit $30B/quarter at 14% growth, now representing 24% of revenue with 70%+ margins. The trajectory of this segment is the single most important variable for Apple\'s re-rating from hardware company to platform company.',
        category: 'company-specific',
      },
      {
        label: 'App Store regulatory pressure',
        description:
          'The EU Digital Markets Act and potential U.S. legislation could force Apple to reduce App Store commissions or allow sideloading. This directly threatens the highest-margin component of Services — the revenue stream driving the entire valuation narrative.',
        category: 'geopolitical',
      },
      {
        label: 'China market dynamics',
        description:
          'China represents ~17% of revenue and is under competitive pressure from Huawei\'s resurgence. Any escalation in U.S.-China tensions could simultaneously disrupt supply chains and demand, making China both a growth market and a risk factor.',
        category: 'geopolitical',
      },
    ],
  },

  whatChanged: {
    summary:
      'Apple\'s narrative has shifted from "iPhone dependency" to "platform transition." The Services business is redefining how the market values Apple, while Apple Intelligence is creating a potential new upgrade cycle.',
    changes: [
      {
        label: 'Services: becoming the valuation anchor',
        direction: 'positive',
        description:
          'Services revenue reached a record $30B/quarter, growing 14% YoY. The mix shift toward high-margin recurring revenue is the primary reason Apple\'s P/E has expanded from the low-20s to 31x over the past two years.',
      },
      {
        label: 'iPhone 16 cycle: stronger than expected',
        direction: 'positive',
        description:
          'iPhone revenue grew 23% in Q1 FY2026, driven by Apple Intelligence features and pent-up upgrade demand. This eased concerns that the smartphone market was saturated.',
      },
      {
        label: 'Gross margins: at multi-year highs',
        direction: 'positive',
        description:
          'Gross margin of 48.2% is well above Apple\'s historical 38-42% range, driven by Services mix and Apple Silicon efficiencies. This margin expansion has room to continue if Services keeps growing as a share of total revenue.',
      },
      {
        label: 'Regulatory overhang: growing',
        direction: 'negative',
        description:
          'The EU is actively enforcing the Digital Markets Act against Apple, and U.S. antitrust scrutiny is intensifying. The risk of forced commission reductions on the App Store has increased materially over the past year.',
      },
    ],
  },

  business: {
    description:
      "Apple designs, manufactures, and sells consumer electronics, software, and services. Its product lineup — iPhone, Mac, iPad, Apple Watch, and AirPods — is unified by a tightly integrated software ecosystem (iOS, macOS, watchOS) that creates deep user loyalty and significant switching costs. With 2.5 billion active devices worldwide, Apple has built one of the largest and most engaged installed bases in technology. Increasingly, the company's growth story is shifting from hardware units to monetizing that installed base through high-margin services such as the App Store, Apple Music, iCloud, Apple TV+, and Apple Pay.",
    howItMakesMoneyTitle: 'How Apple Makes Money',
    revenueStreams: [
      {
        name: 'iPhone',
        percentage: 52,
        description:
          'The flagship product and primary revenue driver. iPhone generated 23% year-over-year growth in Q1 FY2026, fueled by the iPhone 16 cycle and Apple Intelligence features driving upgrades across the installed base.',
      },
      {
        name: 'Services',
        percentage: 24,
        description:
          'App Store, Apple Music, iCloud, AppleCare, Apple TV+, Apple Pay, and licensing (including the Google search deal). Services hit a record $30 billion per quarter in Q1 FY2026, growing 14% year-over-year. This segment carries gross margins above 70%, making it the most profitable part of the business.',
      },
      {
        name: 'Mac',
        percentage: 6,
        description:
          'MacBook, iMac, and Mac Pro lines. The transition to Apple Silicon (M-series chips) has strengthened margins and performance differentiation versus Windows PCs.',
      },
      {
        name: 'iPad',
        percentage: 6,
        description:
          'iPad and iPad Pro. A mature product line with periodic refresh cycles. The M-series chip integration has positioned iPad Pro as a laptop alternative for certain workflows.',
      },
      {
        name: 'Wearables & Accessories',
        percentage: 6,
        description:
          'Apple Watch, AirPods, and accessories. These products deepen ecosystem engagement and provide recurring upgrade cycles, though growth has moderated.',
      },
      {
        name: 'Other Products & Services',
        percentage: 6,
        description:
          'Apple Vision Pro, licensing revenue, and other emerging categories. Vision Pro remains a niche product, but represents Apple\'s long-term bet on spatial computing.',
      },
    ],
    competitiveAdvantage:
      "Apple's moat is its ecosystem. Hardware, software, and services are designed to work seamlessly together, creating switching costs that compound with every additional Apple device a customer owns. An iPhone user with AirPods, an Apple Watch, iCloud storage, and App Store subscriptions faces significant friction in moving to Android. This lock-in effect drives a 93%+ retention rate and enables premium pricing. Additionally, Apple's vertical integration — designing its own chips (M-series, A-series), operating systems, and increasingly its own cellular modems — gives it control over the full technology stack, resulting in performance and efficiency advantages that competitors relying on third-party components struggle to match.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (TTM)',
        value: '~$460B',
        explanation:
          'Apple generated approximately $460 billion in trailing twelve-month revenue, with FY2025 full-year revenue of $416 billion and Q1 FY2026 setting a record at $143.8 billion. The acceleration reflects strong iPhone 16 demand and continued Services momentum.',
        sentiment: 'positive',
      },
      {
        label: 'Gross Margin',
        value: '48.2%',
        explanation:
          'Gross margin of 48.2% is well above Apple\'s historical average of 38-42%. The improvement is driven by the growing mix of high-margin Services revenue (70%+ margins) and the cost efficiencies of Apple Silicon. For a hardware-centric company, this margin profile is exceptional.',
        sentiment: 'positive',
      },
      {
        label: 'Net Income (Q1 FY26)',
        value: '$42.1B',
        explanation:
          'A record quarterly net income figure, demonstrating Apple\'s ability to convert revenue growth into bottom-line profit. The combination of operating leverage, Services mix shift, and disciplined cost management is expanding profitability.',
        sentiment: 'positive',
      },
      {
        label: 'Services Revenue',
        value: '$30B/quarter',
        explanation:
          'Services revenue reached a record $30 billion in Q1 FY2026, growing 14% year-over-year. This segment now represents nearly a quarter of total revenue and carries margins roughly twice those of hardware. The Services trajectory is central to Apple\'s valuation re-rating from a hardware company to a platform company.',
        sentiment: 'positive',
      },
      {
        label: 'EPS (TTM)',
        value: '$7.92',
        explanation:
          'Earnings per share of $7.92 on a trailing twelve-month basis. Aggressive share buybacks — Apple has repurchased over $600 billion in stock over the past decade — continue to reduce the share count and amplify per-share earnings growth beyond what revenue growth alone would suggest.',
        sentiment: 'positive',
      },
      {
        label: 'Active Device Installed Base',
        value: '2.5B devices',
        explanation:
          'The installed base of 2.5 billion active Apple devices is the foundation for everything. Each device is a potential Services customer. As this base grows and engagement deepens, the recurring revenue opportunity expands correspondingly. This metric matters more than any single quarter\'s iPhone shipments.',
        sentiment: 'positive',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '31.45x',
        industryAvg: '25x',
        explanation:
          'At 31.45 times earnings, Apple trades at a premium to the broader tech sector. This premium reflects the market\'s recognition of Apple as a high-quality compounder with predictable cash flows, rather than a high-growth speculative name. The question is whether Services growth can sustain this multiple.',
      },
      {
        label: 'EV/EBITDA',
        value: '23.46x',
        industryAvg: '18x',
        explanation:
          'The enterprise-value-to-EBITDA multiple of 23.46x is elevated relative to hardware peers but more in line with software and platform companies. This reflects the market\'s view that Apple is transitioning toward a higher-margin, more recurring-revenue business model.',
      },
      {
        label: 'Forward P/E',
        value: '28.88x',
        industryAvg: '22x',
        explanation:
          'The forward P/E of 28.88x implies analysts expect roughly 8-9% earnings growth over the next twelve months. This is a reasonable expectation given the Services ramp and iPhone cycle, though it leaves limited room for disappointment.',
      },
      {
        label: 'Market Cap',
        value: '$3.64T',
        industryAvg: 'N/A',
        explanation:
          'At $3.64 trillion, Apple is one of the most valuable companies in the world. To grow the stock meaningfully from here requires either multiple expansion (unlikely at current levels) or sustained earnings growth. At this scale, even strong results can feel priced in.',
      },
    ],
    summary:
      'Apple\'s valuation reflects a business in transition — from a cyclical hardware company to a platform with recurring, high-margin revenue streams. The premium multiple is justified if Services continues to grow at mid-teens rates and the installed base keeps expanding. However, at $3.64 trillion, the margin of safety is thin. Investors are paying for execution certainty, and any stumble in iPhone demand or Services deceleration would pressure the multiple.',
  },

  bullCase: {
    title: 'The Case for Apple',
    points: [
      'The Services business is still in the early stages of monetizing a 2.5 billion-device installed base. At $120 billion in annual Services revenue, Apple is generating only about $48 per active device per year — there is substantial room to increase wallet share through new offerings and price increases.',
      'Apple Intelligence (on-device AI features) is creating a meaningful upgrade cycle, as users with older devices need newer hardware to access AI capabilities. This could drive a multi-year iPhone refresh wave similar to the 5G cycle.',
      'Gross margin expansion has room to continue as Services grows from 24% to a potentially larger share of revenue. Each percentage point of mix shift toward Services adds meaningfully to overall profitability.',
      'Apple\'s capital return program is unmatched — the company has returned over $700 billion to shareholders through buybacks and dividends. The shrinking share count provides a persistent tailwind to per-share earnings growth.',
      'The health and financial services ecosystems (Apple Watch health monitoring, Apple Pay, Apple Card, Savings) represent early-stage platforms that could become significant revenue contributors over the next five years.',
    ],
  },

  bearCase: {
    title: 'The Case Against Apple',
    points: [
      'iPhone revenue concentration remains a risk — at 52% of sales, any disruption to the smartphone market (saturation, economic downturn, competitive pressure from Samsung or Chinese manufacturers) directly impacts the top line.',
      'Regulatory pressure on the App Store is intensifying globally. The EU Digital Markets Act, potential US legislation, and court rulings could force Apple to reduce App Store commissions or allow sideloading, threatening the highest-margin component of Services.',
      'Apple Intelligence has been slow to roll out and has not yet demonstrated a clear differentiation advantage over Google\'s or Samsung\'s AI offerings. If AI features become commoditized, the upgrade catalyst weakens.',
      'China remains both a critical market (~17% of revenue) and a geopolitical risk. Domestic competitors like Huawei have regained share, and any escalation in US-China tensions could disrupt supply chains and demand simultaneously.',
      'At a $3.64 trillion market cap with a 31x P/E, Apple needs to deliver flawless execution just to meet expectations. The stock is priced for perfection, which means the risk-reward is asymmetric to the downside on any negative surprise.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~9-11% annual earnings growth for the next 3 years',
    analystConsensus: 'Buy (average price target ~$297)',
    pricedIn: [
      'Continued mid-teens Services growth through FY2027',
      'Stable iPhone market share with periodic upgrade cycle tailwinds',
      'Ongoing margin expansion from Services mix shift',
      'Aggressive share buyback program continuing at $90B+ annually',
    ],
    notPricedIn: [
      'A meaningful App Store regulatory ruling that forces commission reductions below 15%',
      'Apple Intelligence becoming a genuine platform differentiator that accelerates the upgrade cycle beyond current estimates',
      'A significant deterioration in China demand due to geopolitical escalation or competitive losses to Huawei',
      'A new product category (AR glasses, home robotics) achieving iPhone-like adoption curves',
    ],
  },

  technicalContext: {
    rsi: 52,
    rsiInterpretation:
      'An RSI of 52 is essentially neutral, indicating the stock is neither overbought nor oversold. After pulling back from December highs, Apple has found a support level and is consolidating, which suggests the market is awaiting a catalyst for the next directional move.',
    trendDescription:
      'Apple staged a strong rally from April through December 2025, rising from $175 to $255 — a 46% gain. The stock has since pulled back approximately 3% from those highs, trading in a range between $238 and $255. This consolidation after a significant run-up is a typical pattern that often resolves in the direction of the prior trend.',
    volatilityNote:
      'Apple tends to be less volatile than most mega-cap tech peers, given its diversified revenue base and massive buyback program that provides a floor under the stock. Expect 2-4% moves around earnings reports and product launches, with day-to-day movement typically in the 1-2% range.',
    priceHistory: [
      { month: 'Apr 25', price: 175 },
      { month: 'May 25', price: 195 },
      { month: 'Jun 25', price: 210 },
      { month: 'Jul 25', price: 222 },
      { month: 'Aug 25', price: 215 },
      { month: 'Sep 25', price: 228 },
      { month: 'Oct 25', price: 235 },
      { month: 'Nov 25', price: 242 },
      { month: 'Dec 25', price: 255 },
      { month: 'Jan 26', price: 243 },
      { month: 'Feb 26', price: 238 },
      { month: 'Mar 26', price: 248 },
    ],
  },

  thinkFirstQuestions: {
    businessRisk: 'Apple has 2.5 billion active devices and a 93%+ retention rate. With that kind of lock-in, what do you think is the biggest risk to the business over the next 5 years?',
    valuationView: 'Apple trades at 31x earnings. Services is growing at 14% with 70%+ margins, but iPhone still represents 52% of revenue. Is this a hardware company or a platform company? Does it matter for the valuation?',
    narrativeShift: 'Apple\'s story has shifted from "iPhone dependency" to "platform transition" as Services grows. What specifically changed in the business that enabled this re-rating?',
  },

  scenarioDefaults: {
    currentRevenue: 460,
    currentMargin: 30,
    currentMultiple: 31,
    currentMarketCap: 3640,
  },

  valuationImplied: {
    currentPE: '31x',
    implications: [
      'Services revenue continues growing at 12-15% annually, reaching 30%+ of total revenue within 2-3 years',
      'Apple Intelligence drives a meaningful iPhone upgrade cycle, sustaining hardware revenue growth in the high single digits',
      'App Store regulatory risks (EU DMA, potential U.S. legislation) do not materially compress Services margins below 65%',
      'The installed base continues expanding, particularly in emerging markets like India, providing a growing foundation for Services monetization',
    ],
    summary: 'At 31x earnings, you are paying for a successful platform transition — from cyclical hardware company to recurring-revenue ecosystem. If Services reaches 30% of revenue, the blended margin profile justifies 35x+. If regulatory action compresses App Store margins, the premium unwinds quickly.',
  },

  chartNarrative: [
    { month: 'Apr 25', event: 'Recovery from tariff-driven selloff as supply chain fears eased' },
    { month: 'May 25', event: 'Strong rally on iPhone 16 demand data exceeding expectations' },
    { month: 'Jul 25', event: 'Apple Intelligence announcement at WWDC drove upgrade cycle optimism' },
    { month: 'Aug 25', event: 'Brief pullback on China competitive concerns as Huawei gained share' },
    { month: 'Dec 25', event: 'New highs on record Q1 FY2026 revenue of $143.8B' },
    { month: 'Jan 26', event: 'Pullback as EU DMA enforcement intensified against App Store' },
    { month: 'Mar 26', event: 'Recovery as Services momentum and AI features sustained upgrade demand' },
  ],

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'Services revenue needs to maintain 12-15% year-over-year growth, demonstrating that the monetization of the installed base is still accelerating rather than approaching saturation.',
        'Apple Intelligence must drive a measurable uplift in iPhone upgrade rates, visible in Q2 and Q3 FY2026 results as users on older models transition to AI-capable hardware.',
        'Gross margins need to continue expanding toward 50%+ as the Services revenue mix increases, validating the platform company narrative that supports the premium valuation.',
        'The installed base needs to keep growing, particularly in emerging markets like India, to prove that Apple\'s addressable market is still expanding.',
      ],
      biggestRisk:
        'App Store regulation is the most underappreciated threat to the bull case. A forced reduction in the 30% commission rate would directly compress the highest-margin revenue stream and could remove 5-10% from Services gross profit, undermining the entire margin expansion thesis.',
      keyMetricToWatch:
        'Services revenue growth rate. As long as Services grows above 12% annually and approaches 30% of total revenue, the re-rating from hardware company to platform company continues and the premium multiple is justified.',
    },
    bearish: {
      whatNeedsToHappen: [
        'iPhone upgrade cycles need to elongate further, with consumers finding insufficient reason to replace devices every 3-4 years, particularly if Apple Intelligence features are eventually backported to older models.',
        'Regulatory actions in the EU and potentially the US need to force meaningful App Store commission reductions, directly impacting the most profitable segment.',
        'China revenue needs to decline as Huawei and other domestic competitors recapture market share with increasingly capable devices that leverage local AI ecosystems.',
        'AI feature parity across Android and iOS needs to eliminate the potential upgrade catalyst, making Apple Intelligence a non-factor in purchase decisions.',
      ],
      biggestRisk:
        'The bear case fails if Apple successfully launches a new product category — whether AR glasses, a home device, or a health platform — that reignites the growth narrative and opens a new multi-hundred-billion-dollar market. Apple has done this before (iPod, iPhone, Watch), and dismissing the possibility is a recurring mistake bears have made.',
      keyMetricToWatch:
        'iPhone revenue growth rate and China segment performance. If iPhone growth turns negative for two consecutive quarters or China revenue declines more than 10%, the bear case gains significant momentum.',
    },
    neutral: {
      whatNeedsToHappen: [
        'Apple delivers steady but unspectacular results — high single-digit earnings growth, stable margins, and no major product surprises — justifying a hold but not providing a catalyst for re-rating.',
        'The stock trades within a range as the market debates whether the Services growth story merits a higher multiple or whether the hardware maturity story merits a lower one.',
        'Regulatory developments proceed slowly, creating ongoing uncertainty without a definitive resolution that would force a re-pricing.',
      ],
      biggestRisk:
        'Apple tends to reward patience. The stock has historically compounded through periods of pessimism, driven by buybacks and Services growth. A neutral stance risks missing a breakout if a new product cycle or AI monetization strategy exceeds expectations. Conversely, the valuation is full enough that holding through a correction could be painful.',
      keyMetricToWatch:
        'The ratio of Services revenue to total revenue. If this metric moves from 24% toward 30% over the next two years, it validates the platform transition thesis and the stock likely re-rates higher. If it stalls, the premium multiple is harder to defend.',
    },
  },
};
