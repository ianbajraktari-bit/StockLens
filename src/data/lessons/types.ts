import type { LucideIcon } from 'lucide-react';

export interface QuizQuestion {
  topic: string;
  topicIcon: LucideIcon;
  context?: string;
  question: string;
  options: string[];
  correctIndex: number;
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
