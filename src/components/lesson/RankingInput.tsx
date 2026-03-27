import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface RankingInputProps {
  items: { id: string; text: string }[];
  order: string[];
  correctOrder?: string[];
  disabled?: boolean;
  onReorder: (newOrder: string[]) => void;
}

export default function RankingInput({
  items,
  order,
  correctOrder,
  disabled = false,
  onReorder,
}: RankingInputProps) {
  const itemMap = new Map(items.map((item) => [item.id, item]));

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...order];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    onReorder(newOrder);
  };

  const moveDown = (index: number) => {
    if (index === order.length - 1) return;
    const newOrder = [...order];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    onReorder(newOrder);
  };

  const getPositionState = (id: string, index: number): 'correct' | 'wrong' | 'default' => {
    if (!correctOrder) return 'default';
    return correctOrder[index] === id ? 'correct' : 'wrong';
  };

  const borderColors: Record<string, string> = {
    default: 'border-l-border',
    correct: 'border-l-green',
    wrong: 'border-l-red',
  };

  return (
    <div className="flex flex-col gap-2">
      {order.map((id, index) => {
        const item = itemMap.get(id);
        if (!item) return null;
        const state = getPositionState(id, index);

        return (
          <motion.div
            key={id}
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-dark-800
              border-l-[3px] ${borderColors[state]}
              ${disabled ? 'opacity-50' : ''}
            `}
          >
            <span
              className={`
                flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0
                ${state === 'correct' ? 'bg-green/15 text-green' : state === 'wrong' ? 'bg-red/15 text-red' : 'bg-dark-700 text-text-muted'}
              `}
            >
              {index + 1}
            </span>

            <span className="text-sm text-text-primary flex-1 leading-relaxed">
              {item.text}
            </span>

            {!disabled && (
              <div className="flex flex-col gap-0.5 shrink-0">
                <button
                  onClick={() => moveUp(index)}
                  disabled={index === 0}
                  className={`
                    p-0.5 rounded transition-colors
                    ${index === 0 ? 'text-dark-500 cursor-not-allowed' : 'text-text-muted hover:text-text-primary hover:bg-dark-700 cursor-pointer'}
                  `}
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => moveDown(index)}
                  disabled={index === order.length - 1}
                  className={`
                    p-0.5 rounded transition-colors
                    ${index === order.length - 1 ? 'text-dark-500 cursor-not-allowed' : 'text-text-muted hover:text-text-primary hover:bg-dark-700 cursor-pointer'}
                  `}
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}

            {correctOrder && state === 'correct' && (
              <svg className="w-4 h-4 text-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
            {correctOrder && state === 'wrong' && (
              <svg className="w-4 h-4 text-red shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
