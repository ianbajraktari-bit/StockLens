import { motion } from "framer-motion";
import QuestionBlock from "./QuestionBlock";
import FeedbackBlock from "./FeedbackBlock";

export interface StepData {
  title: string;
  content: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface LessonStepProps {
  step: StepData;
  stepNumber: number;
  totalSteps: number;
  selected: number | null;
  submitted: boolean;
  onSelect: (index: number) => void;
  onSubmit: () => void;
  onContinue: () => void;
}

export default function LessonStep({
  step,
  stepNumber,
  totalSteps,
  selected,
  submitted,
  onSelect,
  onSubmit,
  onContinue,
}: LessonStepProps) {
  const correct = selected === step.correctIndex;

  return (
    <motion.div
      key={stepNumber}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-xs font-medium text-accent-light uppercase tracking-widest mb-1">
        Step {stepNumber} of {totalSteps}
      </p>
      <h2 className="text-xl font-semibold text-text-primary mb-3">{step.title}</h2>
      <p className="text-sm text-text-secondary leading-relaxed">{step.content}</p>

      <QuestionBlock
        question={step.question}
        options={step.options}
        selected={selected}
        onSelect={onSelect}
        disabled={submitted}
      />

      {!submitted && selected !== null && (
        <button
          onClick={onSubmit}
          className="mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          Submit
        </button>
      )}

      {submitted && (
        <>
          <FeedbackBlock correct={correct} explanation={step.explanation} />
          <button
            onClick={onContinue}
            className="mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            {stepNumber < totalSteps ? "Continue" : "Finish"}
          </button>
        </>
      )}
    </motion.div>
  );
}
