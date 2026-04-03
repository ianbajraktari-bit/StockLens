import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { QuizQuestion } from '../data/questions';

interface QuestionBlockProps {
  question: QuizQuestion;
  selectedIndex: number | null;
  locked: boolean;
  onSelect: (index: number) => void;
}

export default function QuestionBlock({ question, selectedIndex, locked, onSelect }: QuestionBlockProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-text-primary">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedIndex === i;
          const isCorrect = i === question.correctIndex;
          const showResult = locked;

          let borderClass = 'border-border';
          let bgClass = 'bg-dark-700 hover:border-dark-400';
          let iconEl: React.ReactNode = null;

          if (showResult) {
            if (isCorrect) {
              borderClass = 'border-green/40';
              bgClass = 'bg-green/10';
              iconEl = <CheckCircle2 className="w-5 h-5 text-green shrink-0" />;
            } else if (isSelected && !isCorrect) {
              borderClass = 'border-red/40';
              bgClass = 'bg-red/10';
              iconEl = <XCircle className="w-5 h-5 text-red shrink-0" />;
            } else {
              bgClass = 'bg-dark-800 opacity-60';
            }
          } else if (isSelected) {
            borderClass = 'border-accent/50';
            bgClass = 'bg-accent/10';
          }

          return (
            <motion.button
              key={i}
              onClick={() => !locked && onSelect(i)}
              disabled={locked}
              whileTap={locked ? {} : { scale: 0.98 }}
              className={`w-full text-left rounded-xl border p-4 transition-all duration-200 flex items-center gap-3 ${borderClass} ${bgClass} ${locked ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-sm font-semibold shrink-0 ${
                showResult && isCorrect ? 'border-green/50 text-green' :
                showResult && isSelected && !isCorrect ? 'border-red/50 text-red' :
                isSelected ? 'border-accent text-accent' :
                'border-dark-400 text-text-muted'
              }`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className={`text-sm flex-1 ${
                showResult && isCorrect ? 'text-green font-medium' :
                showResult && isSelected && !isCorrect ? 'text-red' :
                'text-text-primary'
              }`}>
                {option}
              </span>
              {iconEl}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
