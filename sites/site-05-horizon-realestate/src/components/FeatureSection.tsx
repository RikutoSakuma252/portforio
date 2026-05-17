import ScrollReveal from './ScrollReveal';

const features = [
  {
    num: '01',
    titleEn: 'Local Expertise',
    titleJa: '地域密着20年の実績',
    desc: '東京西部・神奈川エリアを専門に、20年以上の実績を積んできました。地域の相場感や将来性を熟知したプロが、あなたに最適な物件をご提案します。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    titleEn: 'One-Stop Support',
    titleJa: '専任担当者によるワンストップサポート',
    desc: '物件探しから内覧、契約、住宅ローン相談まで、専任の担当者が一貫してサポート。煩雑な手続きも安心してお任せください。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    num: '03',
    titleEn: 'After Support',
    titleJa: 'アフターフォローも安心',
    desc: '引き渡し後もご安心ください。住まいに関するご相談やリフォームのご紹介など、長期にわたってお客様の暮らしをサポートします。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-3">
            Why HORIZON
          </p>
          <h2 className="font-serif-jp text-2xl md:text-4xl font-light text-horizon-navy">
            選ばれる3つの理由
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={f.num} delay={i * 100}>
              <div className="group relative p-8 border border-horizon-border hover:border-horizon-gold transition-colors duration-300">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-horizon-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* Number */}
                <p className="font-cormorant text-6xl font-light text-horizon-navy/8 leading-none mb-4 select-none">
                  {f.num}
                </p>

                {/* Icon */}
                <div className="text-horizon-gold mb-5">{f.icon}</div>

                {/* Title */}
                <p className="font-cormorant text-[11px] italic tracking-[0.25em] text-horizon-gold mb-1">
                  {f.titleEn}
                </p>
                <h3 className="font-serif-jp text-lg font-normal text-horizon-navy mb-4">
                  {f.titleJa}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-horizon-gold mb-4" />

                <p className="font-sans-jp text-sm text-horizon-muted leading-[2]">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
