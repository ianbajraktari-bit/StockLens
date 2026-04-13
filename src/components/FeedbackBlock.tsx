import { motion } from "framer-motion";

interface FeedbackBlockProps {
  correct: boolean;
  explanation: string;
}

export default function FeedbackBlock({ correct, explanation }: FeedbackBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`mt-4 rounded-xl border px-5 py-4 ${
        correct
          ? "border-green/30 bg-green-glow text-green"
          : "border-red/30 bg-red-glow text-red"
      }`}
    >
      <p className="font-semibold text-sm mb-1">{correct ? "Correct!" : "Not quite."}</p>
      <p className="text-sm text-text-secondary">{explanation}</p>
    </motion.div>
  );
}
