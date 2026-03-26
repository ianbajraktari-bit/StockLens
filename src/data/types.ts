export interface Company {
  id: string;
  name: string;
  ticker: string;
  logo: string;
  sector: string;
  sectorId: string;
  investmentType: string;
  tagline: string;
  color: string;
  lastUpdated: string;

  // What Matters Right Now
  whatMattersNow: {
    title: string;
    drivers: {
      label: string;
      description: string;
      category: 'industry' | 'macro' | 'geopolitical' | 'company-specific';
    }[];
  };

  // What Changed
  whatChanged: {
    summary: string;
    changes: {
      label: string;
      direction: 'positive' | 'negative' | 'mixed';
      description: string;
    }[];
  };

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

  // Interactive: Think First questions
  thinkFirstQuestions: {
    businessRisk: string;
    valuationView: string;
    narrativeShift: string;
  };

  // Interactive: Scenario config
  scenarioDefaults: {
    currentRevenue: number; // in billions
    currentMargin: number; // operating margin %
    currentMultiple: number; // P/E
    currentMarketCap: number; // in billions
  };

  // Interactive: Valuation implications
  valuationImplied: {
    currentPE: string;
    implications: string[];
    summary: string;
  };

  // Interactive: Chart narrative events
  chartNarrative: {
    month: string;
    event: string;
  }[];

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

  // Interactive flow data (redesigned experience)
  flowData?: FlowData;
}

// ── Interactive Flow Types ──────────────────────────────────────────

export interface FlowData {
  hook: FlowHook;
  modules: FlowModule[];
  scenarioLab: FlowScenarioLab;
  stressTest: FlowStressTest;
  debrief: FlowDebrief;
}

export interface FlowHook {
  headline: string;
  subheadline: string;
  criticalFacts: {
    label: string;
    value: string;
    context: string;
  }[];
  initialPrompt: string;
}

export interface FlowModule {
  id: string;
  title: string;
  question: string;
  context: string;
  evidence: {
    content: string;
    source?: string;
  }[];
  frameworkAnswer: string;
  keyInsight: string;
  insightType: 'positive' | 'negative' | 'neutral';
}

export interface FlowScenarioLab {
  intro: string;
  currentRevenue: number;
  currentMarketCap: number;
  defaults: { revenueGrowth: number; operatingMargin: number; multiple: number };
  presets: {
    name: 'bull' | 'base' | 'bear';
    growth: number;
    margin: number;
    multiple: number;
    narrative: string;
  }[];
  marketImplied: {
    narrative: string;
    growth: string;
    margin: string;
    multiple: string;
  };
}

export interface FlowStressTest {
  questions: {
    id: string;
    question: string;
    hint?: string;
  }[];
  keyVariables: {
    variable: string;
    importance: 'critical' | 'high' | 'moderate';
    description: string;
  }[];
  sophisticatedView: {
    whatToWatch: string[];
    disconfirmingEvidence: string[];
    strongestCounter: string;
  };
}

export interface FlowDebrief {
  frameworkLabel: string;
  synthesis: string;
  strongestBull: string;
  strongestBear: string;
  marketBelief: string;
  whereMarketWrong: string;
  bestForInvestor: string;
  whatChangesConclusion: string[];
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  color: string;
  macroFactors: {
    factor: string;
    impact: string;
    relevance: 'high' | 'medium' | 'low';
  }[];
  geopoliticalRisks: string[];
  keyIndicators: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  formula?: string;
  example?: string;
  category: 'valuation' | 'financial' | 'technical' | 'market';
}
