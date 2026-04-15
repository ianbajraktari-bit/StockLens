import { useEffect, useState } from 'react';

/**
 * CountUp — smooth animated integer readout.
 *
 * Uses easeOutExpo to settle quickly. Respects prefers-reduced-motion
 * by snapping immediately to the final value.
 */
export function CountUp({
  value,
  className,
  duration = 0.9,
  format,
}: {
  value: number;
  className?: string;
  duration?: number;
  /** Optional formatter — e.g. (n) => n.toLocaleString() */
  format?: (n: number) => string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const durationMs = duration * 1000;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <span className={className}>{format ? format(display) : display}</span>;
}

export default CountUp;
