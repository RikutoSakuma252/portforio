import { useInView } from '../hooks/useInView';

const trainers = [
  {
    nameEn:  'KENTA YAMADA',
    nameJa:  '山田 健太',
    title:   '元プロアスリート / NSCA-CSCS',
    message: '「限界は、自分が決めるものじゃない。私が一緒に押し上げます。」',
    img:     'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80&fit=crop&facepad=3',
  },
  {
    nameEn:  'JUN SATO',
    nameJa:  '佐藤 純',
    title:   'NSCA-CPT / 管理栄養士資格',
    message: '「食事とトレーニングを科学的にアプローチ。必ず結果を出します。」',
    img:     'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80&fit=crop&facepad=3',
  },
  {
    nameEn:  'MIHO TAKAHASHI',
    nameJa:  '高橋 美穂',
    title:   '女性専門トレーナー / 産後ケア認定',
    message: '「女性特有のお悩みに寄り添い、無理なく続けられるプランを提案します。」',
    img:     'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&fit=crop&facepad=3',
  },
];

export default function TrainerSection() {
  const { ref, inView } = useInView();

  return (
    <section id="trainer" className="bg-apex-bg py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">Trainer</span>
          <h2
            className="font-oswald font-bold mt-2 text-apex-primary"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            トレーナー紹介
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <div
              key={t.nameEn}
              className={`group transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden mb-5">
                <img
                  src={t.img}
                  alt={t.nameJa}
                  className="w-full h-80 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-apex-bg/70 to-transparent" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-apex-accent/40 transition-colors duration-300" />
              </div>

              <span className="font-oswald text-[10px] tracking-[0.35em] text-apex-accent">{t.nameEn}</span>
              <h3 className="font-oswald text-2xl font-bold text-apex-primary mt-1">{t.nameJa}</h3>
              <p className="font-barlow text-apex-accent text-xs tracking-wider mt-1 mb-4">{t.title}</p>
              <div className="w-8 h-px bg-apex-accent/40 mb-4" />
              <p className="font-jp text-apex-secondary text-xs leading-loose">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
