import type { LucideIcon } from 'lucide-react';

export interface QuizQuestion {
  topic: string;
  topicIcon: LucideIcon;
  context?: string;
  gutCheck?: {
    prompt: string;
    nudge: string;
    options: string[];
    reflections: string[];
  };
  question: string;
  options: string[];
  correctIndex: number;
  punchline?: string;
  reflection?: {
    prompt: string;
    options: string[];
    responses: string[];
  };
  explanation: string;
  wrongExplanations: string[];
  takeaway: string;
}

export interface ThinkingStep {
  prompt: string;
  placeholder: string;
  modelAnswer: string;
  strongReasoningIncludes: string[];
}

export type Skill =
  | 'mindset'
  | 'margins'
  | 'recurring_revenue'
  | 'business_drivers'
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
  questions: QuizQuestion[];
  thinkingStep?: ThinkingStep;
  takeaways: string[];
  completionMessages: {
    perfect: string;
    great: string;
    good: string;
    low: string;
  };
  tier?: LessonTier;
  skills?: Skill[];
  unit?: number;
  unitOrder?: number;
}
