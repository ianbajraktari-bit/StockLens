// ── Lesson & Module Types ────────────────────────────────────────────

export type Tier = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface CompanyModule {
  id: string;
  name: string;
  ticker: string;
  logo: string;
  color: string;
  tier: Tier;
  tierOrder: number; // position within the tier
  description: string;
  lessons: Lesson[];
  // Dynamic data config
  dynamicTicker?: string; // ticker for live data
}

// ── Question Types ──────────────────────────────────────────────────

export type QuestionType =
  | 'multiple-choice'
  | 'ranking'
  | 'select-best'
  | 'free-response'
  | 'bull-bear-classify'
  | 'scenario-choice';

export interface MultipleChoiceQuestion {
  type: 'multiple-choice';
  prompt: string;
  options: { id: string; text: string }[];
  correctId: string;
  explanation: string;
}

export interface RankingQuestion {
  type: 'ranking';
  prompt: string;
  items: { id: string; text: string }[];
  correctOrder: string[]; // ids in correct order
  explanation: string;
}

export interface SelectBestQuestion {
  type: 'select-best';
  prompt: string;
  options: { id: string; text: string }[];
  bestId: string;
  explanation: string;
}

export interface FreeResponseQuestion {
  type: 'free-response';
  prompt: string;
  hint?: string;
  rubric: {
    objective: string;
    keyConceptsExpected: string[];
    scoringNotes: string;
  };
}

export interface BullBearClassifyQuestion {
  type: 'bull-bear-classify';
  prompt: string;
  statements: { id: string; text: string }[];
  correctClassification: Record<string, 'bull' | 'bear' | 'neutral'>;
  explanation: string;
}

export interface ScenarioChoiceQuestion {
  type: 'scenario-choice';
  prompt: string;
  scenarios: { id: string; label: string; description: string }[];
  bestId: string;
  explanation: string;
}

export type Question =
  | MultipleChoiceQuestion
  | RankingQuestion
  | SelectBestQuestion
  | FreeResponseQuestion
  | BullBearClassifyQuestion
  | ScenarioChoiceQuestion;

// ── Lesson ──────────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  title: string;
  objective: string;
  whyItMatters: string;
  context: string; // 2-3 sentence setup
  evidence?: EvidenceCard[];
  question: Question;
}

export interface EvidenceCard {
  content: string;
  source?: string;
  type: 'stat' | 'trend' | 'quote' | 'comparison';
}

// ── Evaluation ──────────────────────────────────────────────────────

export interface EvaluationResult {
  score: number; // 0-10
  maxScore: number;
  gotRight: string;
  missing: string;
  strongerFraming: string;
  followUp?: string;
}

export interface LessonProgress {
  lessonId: string;
  answer: string | string[]; // string for free-response, string[] for rankings/selections
  evaluation: EvaluationResult | null;
  completedAt: string;
}

export interface ModuleProgress {
  moduleId: string;
  lessonsCompleted: Record<string, LessonProgress>;
  overallScore: number; // average of lesson scores
  startedAt: string;
  completedAt: string | null;
}

// ── Tier Config ─────────────────────────────────────────────────────

export interface TierConfig {
  id: Tier;
  label: string;
  description: string;
  color: string;
  requiredScore: number; // min average score from previous tier to unlock
}

export const TIERS: TierConfig[] = [
  {
    id: 'beginner',
    label: 'Fundamentals',
    description: 'Learn to read a business and understand basic investing concepts.',
    color: '#22c55e',
    requiredScore: 0,
  },
  {
    id: 'intermediate',
    label: 'Strategic Thinking',
    description: 'Analyze competitive dynamics, operating leverage, and narrative shifts.',
    color: '#f59e0b',
    requiredScore: 5,
  },
  {
    id: 'advanced',
    label: 'Valuation & Edge',
    description: 'Scenario analysis, expectations, and variant perception.',
    color: '#ef4444',
    requiredScore: 6,
  },
  {
    id: 'expert',
    label: 'Synthesis Lab',
    description: 'Compare, rank, update theses, and respond to new information.',
    color: '#a855f7',
    requiredScore: 7,
  },
];
