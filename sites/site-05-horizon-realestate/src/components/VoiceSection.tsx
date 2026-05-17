import ScrollReveal from './ScrollReveal';

const voices = [
  {
    name: 'K.T 様',
    age: '40代',
    type: '一戸建て購入',
    comment: '「初めての不動産購入で不安でしたが、担当の方が丁寧に説明してくださり、安心して進めることができました。理想の物件を見つけられて本当に良かったです。」',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&fit=crop&facepad=3',
  },
  {
    name: 'M.S 様',
    age: '30代',
    type: 'マンション購入',
    comment: '「他社でなかなか条件に合う物件が見つからず困っていましたが、地域に詳しいHORIZONさんにお任せして大正解でした。希望通りの物件を紹介していただけました。」',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&fit=crop&facepad=3',
  },
  {
    name: 'H.N 様',
    age: '50代',
    type: '物件売却',
    comment: '「売却を依頼してから3ヶ月で成約できました。適正価格でのご提案と、丁寧な交渉のおかげだと思います。売却後もアドバイスをいただき、大変助かりました。」',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fit=crop&facepad=3',
  },
];

export default function VoiceSection() {
  return (
    <section className="bg-horizon-navy py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-14">
          <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-3">Voice</p>
          <h2 className="font-serif-jp text-2xl md:text-4xl font-light text-white">お客様の声</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {voices.map((v, i) => (
            <ScrollReveal key={v.name} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 p-8 hover:border-horizon-gold/40 transition-colors duration-300">
                {/* Quote mark */}
                <p className="font-cormorant text-5xl text-horizon-gold/30 leading-none mb-4">"</p>

                {/* Comment */}
                <p className="font-sans-jp text-sm text-white/70 leading-[2] mb-6">{v.comment}</p>

                {/* Gold divider */}
                <div className="w-8 h-px bg-horizon-gold mb-4" />

                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  <img
                    src={v.img}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover grayscale opacity-70"
                  />
                  <div>
                    <p className="font-sans-jp text-sm text-white">{v.name}（{v.age}）</p>
                    <p className="font-sans-jp text-[10px] tracking-wider text-horizon-gold mt-0.5">{v.type}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
