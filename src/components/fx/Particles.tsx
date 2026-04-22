import { useMemo } from 'react';

interface Dot {
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
}

export function Particles({ count = 40 }: { count?: number }) {
  const dots = useMemo<Dot[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${4 + Math.random() * 6}s`,
        size: `${1.5 + Math.random() * 2}px`,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    [count],
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  );
}
