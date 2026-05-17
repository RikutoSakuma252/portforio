import { useInView } from '../hooks/useInView';

const reasons = [
  {
    num: '01',
    titleEn: 'ONE-ON-ONE',
    titleJa: '完全マンツーマン指導',
    desc: 'すべてのトレーニングは担当トレーナーがつきっきりで指導します。フォームのチェックから負荷の調整まで、あなたのその日の状態に合わせてリアルタイムに最適化。グループレッスンでは得られない密度の高い指導が、確実な変化をもたらします。',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&fit=crop',
  },
  {
    num: '02',
    titleEn: 'NUTRITION',
    titleJa: '食事管理サポート',
    desc: '専用アプリを使った毎日の食事記録と、管理栄養士監修の食事プランを提供します。トレーニングと食事の両輪で、見た目と体の内側から確実に結果を出します。忙しいビジネスパーソンでも続けられる現実的な食事戦略を提案します。',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80&fit=crop',
  },
  {
    num: '03',
    titleEn: 'GUARANTEE',
    titleJa: '結果コミット制度',
    desc: '3ヶ月のプログラム終了時に、設定した目標の80%以上達成できなかった場合は月額料金を全額返金します。私たちはあなたの結果に本気でコミットします。「また失敗するかも」という不安なく、リスクゼロで始められます。',
    img: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
  },
];

interface ReasonItemProps {
  reason: typeof reasons[0];
  index: number;
}

function ReasonItem({ reason, index }: ReasonItemProps) {
  const { ref, inView } = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Image */}
      <div className={`relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative overflow-hidden">
          <img
            src={reason.img}
            alt={reason.titleJa}
            className="w-full h-64 md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-apex-bg/60 to-transparent" />
          <div className="absolute inset-0 bg-apex-accent/5 mix-blend-overlay" />
        </div>
        {/* Number decoration */}
        <div
          className="absolute -top-6 font-oswald font-bold text-apex-accent/15 leading-none select-none pointer-events-none"
          style={{ fontSize: '9rem', [isEven ? 'left' : 'right']: '-1.5rem' }}
        >
          {reason.num}
        </div>
      </div>

      {/* Text */}
      <div className={isEven ? 'md:order-2' : 'md:order-1'}>
        <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent">{reason.titleEn}</span>
        <h3 className="font-oswald text-3xl md:text-4xl font-bold text-apex-primary mt-2 mb-5">
          {reason.titleJa}
        </h3>
        <div className="w-12 h-[2px] bg-apex-accent mb-6" />
        <p className="font-jp text-apex-secondary text-sm leading-loose">{reason.desc}</p>
      </div>
    </div>
  );
}

export default function WhySection() {
  return (
    <section id="why" className="bg-apex-surface py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">Why APEX</span>
          <h2
            className="font-oswald font-bold mt-2 text-apex-primary"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            選ばれる理由
          </h2>
        </div>

        <div className="space-y-24 md:space-y-36">
          {reasons.map((reason, i) => (
            <ReasonItem key={reason.num} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
