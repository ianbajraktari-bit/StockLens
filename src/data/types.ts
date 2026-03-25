export interface Company {
  id: string;
  name: string;
  ticker: string;
  logo: string;
  sector: string;
  tagline: string;
  color: string;

  // Section 1: Business Overview
  business: {
    description: string;
    howItMakesMoneyTitle: string;
    revenueStreams: { name: string; percentage: number; description: string }[];
    competitiveAdvantage: string;
  };

  // Section 2: Key Financials
  financials: {
    metrics: {
      label: string;
      value: string;
      explanation: string;
      sentiment: 'positive' | 'neutral' | 'negative';
    }[];
  };

  // Section 3: Valuation
  valuation: {
    metrics: {
      label: string;
      value: string;
      industryAvg: string;
      explanation: string;
    }[];
    summary: string;
  };

  // Section 4: Bull vs Bear
  bullCase: { title: string; points: string[] };
  bearCase: { title: string; points: string[] };

  // Section 5: Market Expectations
  marketExpectations: {
    impliedGrowth: string;
    analystConsensus: string;
    pricedIn: string[];
    notPricedIn: string[];
  };

  // Section 6: Technical Context
  technicalContext: {
    rsi: number;
    rsiInterpretation: string;
    trendDescription: string;
    volatilityNote: string;
    priceHistory: { month: string; price: number }[];
  };

  // Section 7: Decision Responses
  decisionResponses: {
    bullish: {
      whatNeedsToHappen: string[];
      biggestRisk: string;
      keyMetricToWatch: string;
    };
    bearish: {
      whatNeedsToHappen: string[];
      biggestRisk: string;
      keyMetricToWatch: string;
    };
    neutral: {
      whatNeedsToHappen: string[];
      biggestRisk: string;
      keyMetricToWatch: string;
    };
  };
}
