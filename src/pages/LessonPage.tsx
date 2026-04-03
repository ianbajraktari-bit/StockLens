import { useState } from "react";
import LessonStep from "../components/LessonStep";
import type { StepData } from "../components/LessonStep";

const steps: StepData[] = [
  {
    title: "What Is a Stock?",
    content:
      "A stock represents a share of ownership in a company. When you buy a stock, you own a small piece of that business — including a claim on its future earnings and assets.",
    question: "What does owning a stock give you?",
    options: [
      "A guaranteed return on your money",
      "Partial ownership of a company",
      "A fixed interest payment every year",
      "The right to manage the company",
    ],
    correctIndex: 1,
    explanation:
      "Owning a stock means you hold partial ownership of the company. It does not guarantee returns or give you direct management control.",
  },
  {
    title: "Revenue vs. Profit",
    content:
      "Revenue is the total money a company brings in from sales. Profit (net income) is what remains after subtracting all expenses — salaries, materials, taxes, and more.",
    question: "A company has $10M in revenue and $7M in expenses. What is its profit?",
    options: ["$10M", "$7M", "$3M", "$17M"],
    correctIndex: 2,
    explanation:
      "Profit = Revenue − Expenses. $10M − $7M = $3M. Revenue alone doesn't tell you how much a company actually earns.",
  },
  {
    title: "What Is a P/E Ratio?",
    content:
      "The Price-to-Earnings (P/E) ratio compares a company's stock price to its earnings per share. A higher P/E can mean investors expect strong future growth — or that the stock is overpriced.",
    question: "A stock trades at $150 with earnings of $5 per share. What is the P/E ratio?",
    options: ["15", "30", "75", "750"],
    correctIndex: 1,
    explanation:
      "P/E = Price ÷ Earnings per Share = $150 ÷ $5 = 30. This means investors pay $30 for every $1 of earnings.",
  },
];

export default function LessonPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleContinue() {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-dark-800 px-6 py-8 sm:px-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Investing Basics</h1>
        <p className="text-sm text-text-secondary mb-8">
          Learn the fundamentals, one step at a time.
        </p>

        {/* progress bar */}
        <div className="mb-8 flex gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= currentStep ? "bg-accent" : "bg-dark-500"
              }`}
            />
          ))}
        </div>

        {finished ? (
          <div className="text-center py-8">
            <p className="text-lg font-semibold text-green mb-2">Lesson complete!</p>
            <p className="text-sm text-text-secondary">
              You finished all {steps.length} steps. Nice work.
            </p>
          </div>
        ) : (
          <LessonStep
            step={steps[currentStep]}
            stepNumber={currentStep + 1}
            totalSteps={steps.length}
            selected={selected}
            submitted={submitted}
            onSelect={setSelected}
            onSubmit={handleSubmit}
            onContinue={handleContinue}
          />
        )}
      </div>
    </div>
  );
}
