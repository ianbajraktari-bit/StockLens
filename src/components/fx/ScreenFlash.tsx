import { motion, AnimatePresence } from 'framer-motion';

type Tone = 'green' | 'red' | 'accent';

const TONE_COLORS: Record<Tone, string> = {
  green: 'rgba(34, 197, 94, 0.12)',
  red: 'rgba(239, 68, 68, 0.12)',
  accent: 'rgba(99, 102, 241, 0.1)',
};

export function ScreenFlash({
  show,
  tone = 'green',
}: {
  show: boolean;
  tone?: Tone;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, times: [0, 0.15, 1] }}
          className="fixed inset-0 pointer-events-none z-40"
          style={{ backgroundColor: TONE_COLORS[tone] }}
          aria-hidden
        />
      )}
    </AnimatePresence>
  );
}
