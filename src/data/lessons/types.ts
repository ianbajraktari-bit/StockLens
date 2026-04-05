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
}
