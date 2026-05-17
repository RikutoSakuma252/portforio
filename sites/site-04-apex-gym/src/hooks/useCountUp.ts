import { useState, useEffect } from 'react';
import { useInView } from './useInView';

export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.2);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);

    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [inView, started, end, duration]);

  return { ref, count };
}
