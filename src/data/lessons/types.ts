import type { LucideIcon } from 'lucide-react';

// =====================================================================
// Step-based lesson format. A lesson is a sequence of LessonSteps,
// each one a small interactive beat.
// =====================================================================

/** A single binary tap inside a Drill. */
export interface DrillPrompt {
  /** Optional shared setup line above the two choices. */
  setup?: string;
  left: { label: string; sublabel?: string };
  right: { label: string; sublabel?: string };
  correct: 'left' | 'right';
  /** Short flash of feedback after the tap. */
  flash: string;
}

/** A rapid-fire round of binary taps. */
export interface DrillStep {
  kind: 'drill';
  topic: string;
  topicIcon: LucideIcon;
  intro: string;
  prompts: DrillPrompt[];
  takeaway: string;
}

/** Numeric estimate with a tolerance band. */
export interface EstimateStep {
  kind: 'estimate';
  topic: string;
  topicIcon: LucideIcon;
  context: string;
  question: string;
  /** Correct numeric answer. */
  answer: number;
  /** Acceptable distance from `answer` for "nailed it". */
  tolerance: number;
  /** Display unit, e.g. "%", "$", "x". */
  unit?: string;
  /** Tiny hint shown above the input. */
  hint?: string;
  /** Sentence shown after the user answers, regardless of correctness. */
  reveal: string;
  takeaway: string;
}

/** A piece of a TapStep passage. Either plain text or a tappable chip. */
export type TapSegment =
  | { type: 'text'; value: string }
  | { type: 'chip'; value: string; signal: boolean; feedback: string };

/** Tap-the-signal: passage with tappable phrases, some are signals. */
export interface TapStep {
  kind: 'tap';
  topic: string;
  topicIcon: LucideIcon;
  intro: string;
  passage: TapSegment[];
  /** How many signals must be tapped to advance. */
  requiredSignals: number;
  /** Sentence shown after the user finishes. */
  reveal: string;
  takeaway: string;
}

/** Cleaned-up multiple choice. Used sparingly for real tradeoffs. */
export interface DecideStep {
  kind: 'decide';
  topic: string;
  topicIcon: LucideIcon;
  context?: string;
  question: string;
  /** 2-4 short options, all roughly the same length. */
  options: string[];
  correctIndex: number;
  /** 1-2 sentence reveal shown immediately after answering. */
  punchline: string;
  /** Optional 1-sentence redirect per wrong option. Empty string for the correct slot. */
  wrongNudges?: string[];
  takeaway: string;
}

/** Free-response synthesis at the end of a lesson (company lessons). */
export interface ThinkingStepNew {
  kind: 'thinking';
  prompt: string;
  placeholder: string;
  modelAnswer: string;
  strongReasoningIncludes: string[];
}

/** A single candidate (usually a real company) inside a CompareStep. */
export interface CompareCandidate {
  name: string;
  /** Optional ticker symbol — rendered as a small chip on the card. */
  ticker?: string;
  /** Short characterization line under the name, e.g. "Wholesale flywheel". */
  tag?: string;
  /** 3-5 structured metric rows — the data the user reasons from. */
  metrics: { label: string; value: string; note?: string }[];
}

/**
 * Side-by-side comparison of 2-3 real candidates with a question that
 * forces the user to weigh structured data against each other.
 *
 * Two modes:
 * - **Decisive** (`bestIndex` set) — one option is the strongest answer;
 *   picking it scores 1, others score 0.
 * - **Open** (`bestIndex` undefined) — the question is genuinely ambiguous;
 *   any submission scores 1. The educational value is in `analyses[i]`,
 *   which gives targeted feedback on whichever path the user chose. Use
 *   this for "smart people disagree" prompts.
 */
export interface CompareStep {
  kind: 'compare';
  topic: string;
  topicIcon: LucideIcon;
  /** Setup paragraph(s). Split on '\n\n' for paragraphs. */
  context: string;
  candidates: CompareCandidate[];
  question: string;
  options: string[];
  /** If set, this index is the "stronger" pick. If undefined, the question is open and any answer scores 1. */
  bestIndex?: number;
  /** Per-option analysis, length must match options.length. 2-4 sentences explaining the trade-off this pick captures (or misses). */
  analyses: string[];
  /** Synthesis line shown below the per-option analysis. */
  punchline: string;
  takeaway: string;
}

export type LessonStep =
  | DrillStep
  | EstimateStep
  | TapStep
  | DecideStep
  | ThinkingStepNew
  | CompareStep;

// =====================================================================
// Shared lesson metadata
// =====================================================================

export type Skill =
  | 'margins'
  | 'recurring_revenue'
  | 'business_drivers'
  | 'behavioral_biases'
  | 'moats'
  | 'valuation'
  | 'risk';

export type LessonTier = 'foundations-1' | 'foundations-2' | 'company';

export interface Lesson {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  dataAsOf: string;
  keyFacts: { label: string; value: string; detail: string }[];
  topics: { label: string; icon: LucideIcon }[];
  storyArc?: string[];
  takeaways: string[];
  completionMessages: {
    perfect: string;
    great: string;
    good: string;
    low: string;
  };
  tier?: LessonTier;
  skills?: Skill[];
  steps: LessonStep[];
}
