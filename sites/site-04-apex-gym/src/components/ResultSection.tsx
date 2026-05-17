import { useCountUp } from '../hooks/useCountUp';

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function StatCard({ end, suffix = '', label, duration = 2000 }: StatProps) {
  const { ref, count } = useCountUp(end, duration);

  return (
    <div ref={ref} className="text-center px-4 py-8">
      <div className="font-oswald font-bold leading-none mb-3" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: '#0a0a0a' }}>
        {count.toLocaleString()}
        <span className="text-apex-accent">{suffix}</span>
      </div>
      <div className="font-jp text-apex-muted text-sm tracking-wider">{label}</div>
    </div>
  );
}

export default function ResultSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">Results</span>
          <h2 className="font-oswald text-3xl md:text-5xl font-bold mt-2" style={{ color: '#0a0a0a' }}>
            数字が証明する、<span className="text-apex-accent">実績</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderColor: '#e5e5e5' }}>
          <StatCard end={1200} suffix="+"  label="累計会員数"    duration={2000} />
          <StatCard end={98}   suffix="%"  label="継続率"        duration={1500} />
          <StatCard end={3}    suffix="ヶ月" label="平均変化期間" duration={800}  />
          <StatCard end={8}    suffix="年"  label="運営実績"      duration={800}  />
        </div>
      </div>
    </section>
  );
}
