import { useInView } from '../hooks/useInView';

const voices = [
  {
    name:   'T.M さん',
    age:    38,
    job:    '会社員（営業職）',
    change: '-12kg',
    text:   '「何度もダイエットに失敗してきましたが、APEXのトレーナーは諦めずに付き合ってくれました。3ヶ月で12kgの減量に成功し、仕事のパフォーマンスも上がりました。」',
    img:    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&fit=crop&facepad=3',
  },
  {
    name:   'K.S さん',
    age:    29,
    job:    'フリーランスデザイナー',
    change: '-14%',
    text:   '「食事管理の大切さを初めて理解できました。トレーニングと食事の組み合わせで、見た目が劇的に変わりました。友人からも驚かれています。」',
    img:    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80&fit=crop&facepad=3',
  },
  {
    name:   'A.W さん',
    age:    45,
    job:    '医師',
    change: '完全改善',
    text:   '「多忙な仕事の中でも、週2回のセッションで体が劇的に変わりました。慢性的な腰痛も解消し、仕事の集中力が格段に向上しました。」',
    img:    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fit=crop&facepad=3',
  },
];

export default function VoiceSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-apex-surface py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">Voice</span>
          <h2
            className="font-oswald font-bold mt-2 text-apex-primary"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            お客様の声
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {voices.map((v, i) => (
            <div
              key={v.name}
              className={`bg-apex-bg border-l-[3px] border-apex-accent p-7 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Change metric */}
              <div className="font-oswald text-5xl font-bold text-apex-accent mb-5">{v.change}</div>

              {/* Avatar + name */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={v.img}
                  alt=""
                  className="w-11 h-11 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-barlow text-apex-primary text-sm font-semibold">{v.name}（{v.age}歳）</div>
                  <div className="font-jp text-apex-secondary text-[11px]">{v.job}</div>
                </div>
              </div>

              <div className="w-full h-px bg-white/5 mb-5" />

              <p className="font-jp text-apex-secondary text-[12px] leading-[1.9]">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
