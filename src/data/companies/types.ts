// =====================================================================
// Analyst Mode — Company profiles for the capstone analysis workflow.
//
// The point: give users a NEW company (not in the main curriculum) and
// walk them through applying everything they learned — Business,
// Drivers, Moat, Risks, Valuation, Thesis, Verdict. Free-response, self-
// assessed against a model analysis. No grading.
// =====================================================================

/** The seven steps of an analyst workflow. Order matters. */
export type AnalystStepKind =
  | 'business'   // What is it and how does it make money?
  | 'drivers'    // What drives revenue growth?
  | 'moat'       // Durable competitive advantage?
  | 'risks'      // What could structurally hurt this business?
  | 'valuation'  // Is it priced for growth, value, or turnaround?
  | 'thesis'     // Bull case or bear case?
  | 'verdict';   // Buy, pass, or need more info?

export interface AnalystStepContent {
  /** The company-specific model answer the user compares to after submitting. */
  modelAnswer: string;
  /** 3 criteria for "what strong reasoning includes" — used for self-assessment. */
  strongReasoningIncludes: string[];
}

export interface CompanyKeyFact {
  label: string;
  value: string;
  detail: string;
}

export interface CompanyProfile {
  id: string;
  /** Stock ticker, uppercase. */
  ticker: string;
  /** Full company name. */
  name: string;
  emoji: string;
  /** Short sector label — "Software", "Consumer", etc. */
  sector: string;
  /** 1-line description of the company for the picker card. */
  oneLiner: string;
  /** 2-3 sentences for the session intro. */
  description: string;
  /** The quarter/year this data represents. */
  dataAsOf: string;
  /** Difficulty rating for the picker — intuitive vs. requires deep reasoning. */
  difficulty: 'intro' | 'standard' | 'advanced';
  /** Estimated minutes to complete. */
  estimatedMinutes: number;
  /** Real data the user reasons from. Shown in the session sidebar/header. */
  keyFacts: CompanyKeyFact[];
  /** Company-specific content for each of the 7 workflow steps. */
  workflow: Record<AnalystStepKind, AnalystStepContent>;
}

// =====================================================================
// Workflow template — shared prompts across all companies.
// Each company provides its own model answer and criteria for each step.
// =====================================================================

export interface WorkflowStepTemplate {
  kind: AnalystStepKind;
  title: string;
  shortLabel: string;
  /** The prompt question, with a `{name}` token that gets replaced. */
  prompt: string;
  placeholder: string;
  /** Optional hints shown before the user starts writing. */
  hints: string[];
  /** Minimum response length to submit. */
  minChars: number;
}

export const WORKFLOW_STEPS: WorkflowStepTemplate[] = [
  {
    kind: 'business',
    title: 'The Business',
    shortLabel: 'Business',
    prompt:
      'In 2-3 sentences, explain what {name} actually does and how it makes money. Pretend you\'re telling a smart friend who has never heard of it.',
    placeholder:
      'Example: "They sell X to Y, charging Z. Most of their money comes from..."',
    hints: [
      'Name the product or service, the customer, and the pricing model.',
      'If you can\'t explain it simply, you don\'t understand it yet.',
    ],
    minChars: 60,
  },
  {
    kind: 'drivers',
    title: 'Revenue Drivers',
    shortLabel: 'Drivers',
    prompt:
      'What are the 2-3 factors that MOST drive {name}\'s revenue growth or decline? Not symptoms — root causes.',
    placeholder:
      'Example: "1) Number of paying customers, 2) average price per customer, 3) ..."',
    hints: [
      'A "driver" is a variable that, if it moves, directly moves revenue.',
      'Good drivers: units × price. Volume × spend-per-user. Active users × ARPU.',
      'Avoid vague drivers like "brand" or "execution" — those are effects, not drivers.',
    ],
    minChars: 50,
  },
  {
    kind: 'moat',
    title: 'The Moat',
    shortLabel: 'Moat',
    prompt:
      'Does {name} have a durable competitive advantage (a moat)? If yes, what type — scale, brand, switching costs, network effects, or something else? If no, explain why it\'s exposed.',
    placeholder:
      'Example: "Yes — switching costs. Customers who use X would have to rebuild Y..."',
    hints: [
      'Four classic moat types: scale, brand, switching costs, network effects.',
      'A moat is about why competitors CAN\'T catch up, not about being good right now.',
      '"Great product" is not a moat — competitors can copy products.',
    ],
    minChars: 60,
  },
  {
    kind: 'risks',
    title: 'Key Risks',
    shortLabel: 'Risks',
    prompt:
      'What are the 2-3 things most likely to structurally hurt {name} over the next 5 years? Not vague risks — specific threats.',
    placeholder:
      'Example: "1) A competitor with pricing advantage could..., 2) Regulation targeting..."',
    hints: [
      'Best risks are specific, not generic. "Economic downturn" applies to every company.',
      'Think: what would break the moat? What is management secretly worried about?',
      'Good filter: if this happens, does the thesis break?',
    ],
    minChars: 50,
  },
  {
    kind: 'valuation',
    title: 'Valuation Read',
    shortLabel: 'Valuation',
    prompt:
      'Is the market currently pricing {name} as a growth story, a value story, or a turnaround? Does that feel correct given everything you\'ve just analyzed?',
    placeholder:
      'Example: "Priced as a growth story at X P/E. That seems [reasonable / too optimistic / too cautious] because..."',
    hints: [
      'Growth stories trade at high P/E because investors expect earnings to rise.',
      'Value stories trade at lower P/E because earnings are stable but slow-growing.',
      'Turnarounds trade low because investors aren\'t sure things will improve.',
    ],
    minChars: 50,
  },
  {
    kind: 'thesis',
    title: 'The Thesis',
    shortLabel: 'Thesis',
    prompt:
      'In 2-3 sentences, make either the strongest BULL case or strongest BEAR case for {name}. Pick a side — vague is not useful.',
    placeholder:
      'Example: "Bull: [company] will compound at 15%/year for the next decade because..."',
    hints: [
      'A thesis is your reason to buy or avoid in one breath.',
      'It should reference the drivers and moat — or explain why the risks dominate.',
      'If your thesis could apply to any company in the sector, it\'s too generic.',
    ],
    minChars: 80,
  },
  {
    kind: 'verdict',
    title: 'Your Verdict',
    shortLabel: 'Verdict',
    prompt:
      'Would you buy, pass, or need more info on {name} today? Whichever you pick — what SPECIFIC piece of information would change your answer?',
    placeholder:
      'Example: "Pass — I\'d reconsider if operating margin stabilized above X% or if..."',
    hints: [
      '"It depends" is not a verdict. Pick one.',
      'The most valuable part is the "what would change my mind" — it forces you to commit to falsifiable thinking.',
    ],
    minChars: 60,
  },
];
