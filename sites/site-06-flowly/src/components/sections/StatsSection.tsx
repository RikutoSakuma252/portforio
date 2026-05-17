'use client';
import { useEffect, useRef, useState } from 'react';
import type { Stat } from '@/types';

const stats: Stat[] = [
  { numericTarget: 1200, suffix: '+', prefix: '', label: '導入企業数', sublabel: '全国の中小企業が活用' },
  { numericTarget: 87, suffix: '%', prefix: '', label: '業務効率改善率', sublabel: '導入企業のアンケート結果' },
  { numericTarget: 49, suffix: '', prefix: '4.', label: '平均評価', sublabel: '5段階評価のユーザーレビュー' },
  { numericTarget: 24, suffix: 'h', prefix: '', label: 'サポート対応', sublabel: '年中無休の技術サポート' },
];

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-bold tracking-tight gradient-text leading-none">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-fl-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-fl-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-fl-brand blur-2xl" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            数字が証明する<span className="gradient-text">Flowlyの実力</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <CountUp target={stat.numericTarget} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="mt-3 text-sm font-semibold text-white">{stat.label}</div>
              <div className="mt-1 text-xs text-white/50" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
