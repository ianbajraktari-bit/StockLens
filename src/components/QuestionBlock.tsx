interface QuestionBlockProps {
  question: string;
  options: string[];
  selected: number | null;
  onSelect: (index: number) => void;
  disabled: boolean;
}

export default function QuestionBlock({
  question,
  options,
  selected,
  onSelect,
  disabled,
}: QuestionBlockProps) {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-text-primary mb-3">{question}</p>
      <div className="flex flex-col gap-2">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            disabled={disabled}
            className={`text-left text-sm rounded-lg border px-4 py-3 transition-colors ${
              selected === i
                ? "border-accent bg-accent-glow text-accent-light"
                : "border-border bg-dark-700 text-text-secondary hover:border-dark-400"
            } disabled:cursor-not-allowed`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
