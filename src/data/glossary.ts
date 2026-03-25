import type { GlossaryTerm } from './types';

export const glossary: GlossaryTerm[] = [
  // Valuation Metrics
  {
    term: 'P/E Ratio (Price-to-Earnings)',
    definition:
      'The P/E ratio measures how much investors are willing to pay for each dollar of a company\'s earnings. It is calculated by dividing the current stock price by the earnings per share (EPS). A higher P/E indicates that investors expect higher future growth, while a lower P/E may suggest the stock is undervalued — or that growth prospects are limited. The P/E ratio is most useful when compared to peers within the same industry, as different sectors carry structurally different valuations.',
    formula: 'P/E = Stock Price / Earnings Per Share (EPS)',
    example:
      'If a stock trades at $100 and earns $5 per share, its P/E is 20x — meaning investors pay $20 for every $1 of current earnings.',
    category: 'valuation',
  },
  {
    term: 'EV/EBITDA (Enterprise Value to EBITDA)',
    definition:
      'EV/EBITDA compares a company\'s total enterprise value (market capitalization plus debt, minus cash) to its earnings before interest, taxes, depreciation, and amortization. Unlike P/E, this metric accounts for a company\'s capital structure, making it particularly useful for comparing firms with different debt levels. It is the preferred valuation metric among institutional investors and M&A professionals because it provides a cleaner picture of operating performance regardless of how a company is financed.',
    formula: 'EV/EBITDA = (Market Cap + Total Debt - Cash) / EBITDA',
    example:
      'A company with an EV of $500M and EBITDA of $50M has an EV/EBITDA of 10x. If its peer trades at 15x, the company may be relatively undervalued.',
    category: 'valuation',
  },
  {
    term: 'Price/Sales Ratio (P/S)',
    definition:
      'The Price-to-Sales ratio measures how much investors are paying per dollar of a company\'s revenue. Unlike the P/E ratio, P/S can be applied to companies that are not yet profitable, making it especially relevant for high-growth technology companies. A lower P/S ratio can indicate better value, but context matters — companies with higher profit margins typically command higher P/S ratios because a greater share of each revenue dollar flows to shareholders.',
    formula: 'P/S = Market Capitalization / Total Revenue (TTM)',
    example:
      'A company with a $10B market cap and $2B in annual revenue has a P/S of 5x. A software company might trade at 15x sales, while a retailer might trade at 0.5x.',
    category: 'valuation',
  },
  {
    term: 'PEG Ratio (Price/Earnings to Growth)',
    definition:
      'The PEG ratio refines the P/E ratio by incorporating expected earnings growth. It divides the P/E ratio by the projected annual earnings growth rate. A PEG of 1.0 is often considered fair value — the company\'s P/E is proportional to its growth rate. A PEG below 1.0 suggests the stock may be undervalued relative to its growth, while a PEG above 2.0 may indicate the market is pricing in more growth than fundamentals support. The metric is most reliable when applied to companies with stable, predictable growth.',
    formula: 'PEG = P/E Ratio / Annual EPS Growth Rate (%)',
    example:
      'A stock with a P/E of 30 and expected earnings growth of 30% per year has a PEG of 1.0. The same P/E with only 15% growth yields a PEG of 2.0, suggesting it may be overpriced for its growth.',
    category: 'valuation',
  },
  {
    term: 'Market Capitalization',
    definition:
      'Market capitalization represents the total market value of a company\'s outstanding shares. It is the primary measure of a company\'s size in the public markets. Companies are commonly categorized as mega-cap (>$200B), large-cap ($10B–$200B), mid-cap ($2B–$10B), small-cap ($300M–$2B), or micro-cap (<$300M). Market cap influences index inclusion, institutional investment mandates, and liquidity characteristics.',
    formula: 'Market Cap = Current Stock Price × Total Shares Outstanding',
    example:
      'A company with 1 billion shares outstanding trading at $150 per share has a market cap of $150 billion, placing it in the large-cap category.',
    category: 'valuation',
  },
  {
    term: 'Enterprise Value (EV)',
    definition:
      'Enterprise value represents the theoretical takeover price of a company — what an acquirer would need to pay to purchase the entire business. It includes market capitalization plus all debt obligations, minus cash and equivalents. EV is a more comprehensive measure of a company\'s total value than market cap alone because it accounts for the capital structure. A company with significant cash reserves will have a lower EV relative to its market cap, while a highly leveraged company will have a higher EV.',
    formula: 'EV = Market Cap + Total Debt - Cash & Cash Equivalents',
    category: 'valuation',
  },

  // Financial Metrics
  {
    term: 'Revenue (TTM)',
    definition:
      'TTM stands for "Trailing Twelve Months" and refers to the total revenue a company has generated over the most recent twelve-month period. Using TTM rather than annual figures provides a more current picture of a company\'s financial performance, as it incorporates the latest quarterly data. Revenue — also called "top line" — represents the total amount of money a company brings in from its business activities before any expenses are deducted.',
    category: 'financial',
  },
  {
    term: 'Gross Margin',
    definition:
      'Gross margin measures the percentage of revenue that remains after subtracting the direct costs of producing goods or services (cost of goods sold, or COGS). It indicates how efficiently a company converts revenue into gross profit. Higher gross margins suggest stronger pricing power, a more favorable cost structure, or a product mix that skews toward higher-value offerings. Software companies typically have gross margins of 70–85%, while retailers operate at 20–40%.',
    formula: 'Gross Margin = (Revenue - Cost of Goods Sold) / Revenue × 100',
    category: 'financial',
  },
  {
    term: 'Operating Margin',
    definition:
      'Operating margin measures the percentage of revenue remaining after deducting all operating expenses, including cost of goods sold, selling and administrative costs, and research and development. It reflects the profitability of a company\'s core business operations, excluding interest payments and taxes. A rising operating margin over time typically indicates improving operational efficiency or growing economies of scale.',
    formula: 'Operating Margin = Operating Income / Revenue × 100',
    category: 'financial',
  },
  {
    term: 'Net Income',
    definition:
      'Net income — also referred to as the "bottom line" — is the total profit remaining after all expenses have been deducted from revenue, including operating costs, interest, taxes, depreciation, and any one-time charges. It represents the earnings available to shareholders and is the basis for calculating earnings per share (EPS). Investors analyze net income trends to assess whether a company is becoming more or less profitable over time.',
    formula: 'Net Income = Revenue - All Expenses (COGS, Operating, Interest, Taxes)',
    category: 'financial',
  },
  {
    term: 'Free Cash Flow (FCF)',
    definition:
      'Free cash flow represents the cash a company generates after accounting for capital expenditures required to maintain or expand its asset base. FCF is considered one of the most important financial metrics because it measures the actual cash available to return to shareholders (via dividends or buybacks), repay debt, or reinvest in the business. Unlike net income, FCF is difficult to manipulate through accounting choices, making it a more reliable measure of financial health.',
    formula: 'FCF = Operating Cash Flow - Capital Expenditures',
    category: 'financial',
  },
  {
    term: 'EBITDA',
    definition:
      'EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It is a widely used measure of a company\'s operating performance that strips out the effects of financing decisions (interest), tax environments (taxes), and accounting practices (depreciation and amortization). EBITDA is sometimes used as a proxy for operating cash flow, though it does not account for capital expenditure requirements or changes in working capital.',
    formula: 'EBITDA = Operating Income + Depreciation + Amortization',
    category: 'financial',
  },
  {
    term: 'Return on Equity (ROE)',
    definition:
      'Return on equity measures how effectively a company uses shareholder capital to generate profits. It is expressed as a percentage and indicates how many dollars of profit are produced for every dollar of equity invested. An ROE above 15% is generally considered strong. However, a high ROE driven by excessive leverage (debt) may be less sustainable than one achieved through operational efficiency. Comparing ROE across companies within the same industry provides the most meaningful insight.',
    formula: 'ROE = Net Income / Shareholders\' Equity × 100',
    category: 'financial',
  },
  {
    term: 'Earnings Per Share (EPS)',
    definition:
      'Earnings per share divides a company\'s net income by its total number of outstanding shares, expressing profitability on a per-share basis. Diluted EPS includes the potential impact of stock options, convertible securities, and other instruments that could increase the share count. EPS growth is one of the primary drivers of stock price appreciation over time, and consistently beating analyst EPS estimates typically results in positive stock price reactions.',
    formula: 'EPS = Net Income / Weighted Average Shares Outstanding',
    category: 'financial',
  },
  {
    term: 'Capital Expenditure (CapEx)',
    definition:
      'Capital expenditures are funds a company uses to acquire, upgrade, or maintain physical assets such as property, buildings, data centers, or equipment. CapEx is a critical measure because it represents the investment required to sustain and grow a business. Companies in capital-intensive industries (semiconductors, cloud computing, energy) typically have high CapEx relative to revenue. Investors monitor the relationship between CapEx and revenue growth to assess whether capital is being deployed efficiently.',
    formula: 'CapEx is found on the Cash Flow Statement under "Investing Activities"',
    category: 'financial',
  },

  // Technical Indicators
  {
    term: 'RSI (Relative Strength Index)',
    definition:
      'The Relative Strength Index is a momentum oscillator that measures the speed and magnitude of recent price changes on a scale from 0 to 100. Readings above 70 are generally considered "overbought," suggesting the stock may be due for a pullback. Readings below 30 are considered "oversold," suggesting potential for a rebound. RSI is most effective when used in conjunction with other indicators and fundamental analysis, rather than as a standalone signal.',
    formula: 'RSI = 100 - [100 / (1 + Average Gain / Average Loss)] over 14 periods',
    category: 'technical',
  },
  {
    term: '52-Week High/Low',
    definition:
      'The 52-week high and low represent the highest and lowest prices at which a stock has traded during the past year. These levels often serve as psychological reference points for investors. A stock trading near its 52-week high may indicate strong momentum but could also suggest limited near-term upside. A stock near its 52-week low may represent a value opportunity or reflect deteriorating fundamentals — further analysis is required to distinguish between the two.',
    category: 'technical',
  },
  {
    term: 'Beta',
    definition:
      'Beta measures a stock\'s volatility relative to the overall market (typically the S&P 500). A beta of 1.0 means the stock moves in line with the market. A beta greater than 1.0 indicates higher volatility — for example, a stock with a beta of 1.5 is expected to move 50% more than the market in either direction. A beta below 1.0 indicates lower volatility. Beta is an important consideration for portfolio construction and risk management.',
    category: 'technical',
  },

  // Market Concepts
  {
    term: 'Bull Market / Bear Market',
    definition:
      'A bull market is a sustained period of rising asset prices, typically defined as a gain of 20% or more from a recent low. A bear market is the inverse — a decline of 20% or more from a recent high. The terms originate from the way each animal attacks: a bull thrusts its horns upward, while a bear swipes its paws downward. Understanding market cycles is essential because valuations, investor sentiment, and risk tolerance all shift significantly between bull and bear regimes.',
    category: 'market',
  },
  {
    term: 'Priced In',
    definition:
      'When the market has already "priced in" an event or outcome, it means that the expected impact is already reflected in the current stock price. Efficient market theory holds that stock prices incorporate all available information. In practice, stocks move not on what happens, but on what happens relative to expectations. A company can report strong earnings and still see its stock decline if those earnings were already expected. Finding opportunities where the market has mispriced expectations — either too optimistic or too pessimistic — is the foundation of active investing.',
    category: 'market',
  },
  {
    term: 'Analyst Consensus',
    definition:
      'Analyst consensus represents the average recommendation and price target from Wall Street research analysts covering a particular stock. Common ratings include Strong Buy, Buy, Hold, Sell, and Strong Sell. The consensus price target reflects the average expected stock price over the next 12 months. While analyst research provides useful frameworks and financial models, consensus estimates tend to be backward-looking and are often revised after price moves rather than before. The distribution of opinions (how many disagree with consensus) is often more informative than the consensus itself.',
    category: 'market',
  },
  {
    term: 'Dividend Yield',
    definition:
      'Dividend yield expresses a company\'s annual dividend payment as a percentage of its current stock price. It represents the income return on an investment, separate from any capital appreciation. Companies with established, growing dividend streams are often referred to as "dividend aristocrats." A high yield can be attractive but may also indicate a declining stock price or an unsustainable payout. The payout ratio (dividends as a percentage of earnings) helps assess sustainability.',
    formula: 'Dividend Yield = Annual Dividends Per Share / Stock Price × 100',
    category: 'market',
  },
  {
    term: 'Short Interest',
    definition:
      'Short interest represents the total number of shares that investors have sold short — a strategy that profits when the stock price declines. High short interest (typically above 10% of float) may indicate widespread bearish sentiment, but it can also set up a "short squeeze" if the stock rises, forcing short sellers to buy shares to cover their positions, further driving the price upward. Short interest data is published biweekly and is used as a contrarian indicator by some investors.',
    category: 'market',
  },
  {
    term: 'Moat (Competitive Advantage)',
    definition:
      'Derived from Warren Buffett\'s investment philosophy, a "moat" refers to a company\'s sustainable competitive advantage that protects it from competitors. Common moat types include: network effects (platforms become more valuable as more users join), switching costs (it is expensive or inconvenient for customers to leave), cost advantages (structural ability to produce at lower cost), intangible assets (brands, patents, regulatory licenses), and efficient scale (a market only profitably supports a limited number of competitors). The durability and width of a company\'s moat is a primary determinant of long-term investment returns.',
    category: 'market',
  },
];
