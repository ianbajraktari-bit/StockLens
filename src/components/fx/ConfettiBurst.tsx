import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

const COLORS = ['#22c55e', '#6366f1', '#f59e0b', '#38bdf8', '#a78bfa', '#fb7185'];

interface Piece {
  color: string;
  x: number;
  y: number;
  rotate: number;
  scale: number;
  duration: number;
  w: number;
  h: number;
}

export function ConfettiBurst({ show }: { show: boolean }) {
  const pieces = useMemo<Piece[]>(
    () =>
      Array.from({ length: 50 }, (_, i) => {
        const angle = (i / 50) * 360 + (Math.random() - 0.5) * 40;
        const dist = 120 + Math.random() * 280;
        return {
          color: COLORS[i % COLORS.length],
          x: Math.cos((angle * Math.PI) / 180) * dist,
          y: Math.sin((angle * Math.PI) / 180) * dist - 150 - Math.random() * 100,
          rotate: Math.random() * 720 - 360,
          scale: 0.5 + Math.random() * 0.8,
          duration: 0.7 + Math.random() * 0.5,
          w: 4 + Math.random() * 6,
          h: 3 + Math.random() * 4,
        };
      }),
    [],
  );

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50" aria-hidden>
          {pieces.map((p, i) => (
            <motion.span
              key={i}
              initial={{
                x: '50%',
                y: '45%',
                scale: 0,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                x: `calc(50% + ${p.x}px)`,
                y: `calc(45% + ${p.y}px)`,
                scale: [0, p.scale, 0],
                opacity: [1, 1, 0],
                rotate: p.rotate,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute rounded-sm"
              style={{
                width: p.w,
                height: p.h,
                backgroundColor: p.color,
                left: 0,
                top: 0,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
