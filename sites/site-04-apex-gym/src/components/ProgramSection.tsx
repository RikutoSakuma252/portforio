import { useInView } from '../hooks/useInView';

const programs = [
  {
    nameEn: 'BODY MAKE',
    nameJa: 'ボディメイク',
    target: 'ダイエット・引き締めたい方',
    sessions: '週2〜3回',
    price: '¥49,800',
    period: '/月〜',
    features: ['体型診断・目標設定', 'パーソナル筋トレ指導', '食事アドバイス', 'LINEサポート'],
    recommended: false,
  },
  {
    nameEn: 'DIET',
    nameJa: 'ダイエット',
    target: '確実に体重を落としたい方',
    sessions: '週2〜3回',
    price: '¥49,800',
    period: '/月〜',
    features: ['専用食事プログラム', '毎日の食事記録管理', '代謝改善トレーニング', '24時間LINE相談'],
    recommended: true,
  },
  {
    nameEn: 'ATHLETE',
    nameJa: 'アスリート強化',
    target: 'パフォーマンス向上を目指す方',
    sessions: '週3〜5回',
    price: '¥79,800',
    period: '/月〜',
    features: ['スポーツ特化型指導', 'フォーム・競技力向上', '栄養戦略サポート', 'プロ水準のメニュー管理'],
    recommended: false,
  },
];

export default function ProgramSection() {
  const { ref, inView } = useInView();

  return (
    <section id="program" className="bg-apex-bg py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">Program</span>
          <h2 className="font-oswald font-bold mt-2 leading-tight text-apex-primary"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            あなたに合った<br />
            <span className="text-apex-accent">プログラム</span>を選ぶ
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div
              key={prog.nameEn}
              className={`relative border transition-all duration-500 ${
                prog.recommended
                  ? 'border-apex-accent'
                  : 'border-white/10 hover:border-apex-accent/50'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {prog.recommended && (
                <div className="absolute -top-px left-6 bg-apex-accent px-3 py-1 font-oswald text-[10px] tracking-widest text-white">
                  RECOMMENDED
                </div>
              )}

              <div className="p-8">
                <span className="font-oswald text-[11px] tracking-[0.35em] text-apex-accent">{prog.nameEn}</span>
                <h3 className="font-oswald text-3xl font-bold text-apex-primary mt-1 mb-1">{prog.nameJa}</h3>
                <p className="font-jp text-apex-secondary text-xs mb-6">{prog.target}</p>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-oswald text-4xl font-bold text-apex-primary">{prog.price}</span>
                  <span className="font-barlow text-apex-secondary text-sm">{prog.period}</span>
                </div>
                <div className="flex items-center gap-2 text-apex-secondary text-[11px] mb-6">
                  <div className="w-1 h-1 bg-apex-accent rounded-full" />
                  <span className="font-jp">{prog.sessions}</span>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {prog.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg className="w-3 h-3 text-apex-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-jp text-apex-secondary text-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`block text-center py-3.5 font-oswald text-[12px] tracking-[0.2em] transition-colors duration-200 ${
                    prog.recommended
                      ? 'bg-apex-accent text-white hover:bg-apex-accent-dark'
                      : 'border border-white/20 text-apex-primary hover:border-apex-accent hover:text-apex-accent'
                  }`}
                >
                  体験を申し込む
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
