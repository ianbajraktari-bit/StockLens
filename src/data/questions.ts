export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  wrongExplanations: string[];
}

export const appleQuestions: QuizQuestion[] = [
  {
    question: "What is Apple's largest source of revenue?",
    options: ['iPhone sales', 'Mac computer sales', 'Services (App Store, iCloud, Apple Music)', 'Wearables (Apple Watch, AirPods)'],
    correctIndex: 0,
    explanation: 'The iPhone consistently generates about 50% of Apple\'s total revenue, making it by far the largest segment. It\'s the anchor product that feeds the rest of the ecosystem.',
    wrongExplanations: [
      '', // correct answer slot
      'Mac is a strong business (~10% of revenue) but is far smaller than iPhone.',
      'Services is the fastest-growing segment (~22%) and has great margins, but it still trails iPhone in total revenue.',
      'Wearables (~10%) are growing but remain a small fraction compared to iPhone.',
    ],
  },
  {
    question: 'What does a high P/E ratio typically suggest about a stock?',
    options: [
      'The stock is undervalued',
      'Investors expect high future earnings growth',
      'The company is losing money',
      'The stock pays a large dividend',
    ],
    correctIndex: 1,
    explanation: 'A high P/E ratio means investors are willing to pay more per dollar of current earnings — usually because they expect earnings to grow significantly in the future.',
    wrongExplanations: [
      'A high P/E actually suggests the opposite — the stock may be expensive relative to current earnings.',
      '',
      'A company losing money would have no P/E ratio (or a negative one), not a high one.',
      'P/E ratio measures price relative to earnings, not dividends. High-dividend stocks often have lower P/E ratios.',
    ],
  },
  {
    question: 'Which of these is a "bear case" risk for Apple?',
    options: [
      'Strong brand loyalty and ecosystem lock-in',
      'Growing Services revenue with high margins',
      'Heavy dependence on iPhone sales in a saturating smartphone market',
      'Large cash reserves for share buybacks',
    ],
    correctIndex: 2,
    explanation: 'If global smartphone growth slows and people hold phones longer, Apple\'s biggest revenue driver faces headwinds. Over-reliance on one product is a legitimate bear case risk.',
    wrongExplanations: [
      'Brand loyalty is a strength (bull case), not a risk.',
      'Growing services revenue is a positive — it diversifies Apple away from hardware dependence.',
      '',
      'Large cash reserves are a financial strength, not a risk factor.',
    ],
  },
];
