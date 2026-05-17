import { useInView } from '../hooks/useInView';

const steps = [
  {
    num:   '01',
    title: '無料カウンセリング予約',
    desc:  'フォームまたはLINEから24時間受付。48時間以内にご連絡します。',
  },
  {
    num:   '02',
    title: '無料体験トレーニング',
    desc:  '60分間の体験セッション。身体測定・現状分析・目標設定を行います。',
  },
  {
    num:   '03',
    title: 'プログラム・料金説明',
    desc:  'あなたの目標に合わせた最適なプログラムをご提案します。',
  },
  {
    num:   '04',
    title: 'ご入会・スタート',
    desc:  '入会手続き後、即日トレーニングを開始できます。',
  },
];

export default function FlowSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-apex-bg py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">Flow</span>
          <h2
            className="font-oswald font-bold mt-2 text-apex-primary"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            入会の流れ
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-apex-accent/25" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative text-center px-6 py-2 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Step number circle */}
              <div className="w-16 h-16 rounded-full border-2 border-apex-accent flex items-center justify-center mx-auto mb-5 bg-apex-bg relative z-10">
                <span className="font-oswald font-bold text-apex-accent text-sm">{step.num}</span>
              </div>

              <h3 className="font-oswald text-sm font-bold text-apex-primary mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="font-jp text-apex-secondary text-[11px] leading-loose">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
