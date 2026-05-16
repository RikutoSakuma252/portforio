import { useInView } from '../hooks/useInView'

const spaces = [
  {
    src: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=900',
    label: 'カウンター席',
    desc: 'シェフの仕事を間近に楽しむ特等席。8席限定。',
  },
  {
    src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=900',
    label: 'テーブル席',
    desc: 'ゆったりとした間隔で配置された20席。カップル・ファミリーに。',
  },
  {
    src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=900',
    label: 'プライベートルーム',
    desc: '完全個室。接待・記念日のお食事に。最大8名様まで。',
  },
]

export default function Space() {
  const { ref, inView } = useInView()

  return (
    <section id="space" className="bg-nodo-bg py-24 md:py-36 overflow-hidden">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="px-6 max-w-6xl mx-auto mb-12"
      >
        <div className={`reveal ${inView ? 'visible' : ''} text-center`}>
          <p className="font-display text-nodo-accent text-xs tracking-[0.4em] mb-3">OUR SPACE</p>
          <h2 className="font-serif-en text-nodo-primary text-4xl md:text-5xl italic">Space</h2>
          <span className="gold-rule mt-5" />
        </div>
      </div>

      {/* Horizontal scroll slider */}
      <div className="snap-slider px-6 gap-4">
        {spaces.map((s, i) => (
          <div
            key={s.label}
            className={`snap-item reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''} w-[80vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0`}
          >
            <img
              src={s.src}
              alt={s.label}
              className="w-full h-64 md:h-80 object-cover object-center"
            />
            <div className="pt-5 px-1">
              <p className="font-display text-nodo-accent text-xs tracking-widest mb-2">{s.label}</p>
              <p className="font-jp text-nodo-secondary text-sm leading-7">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Info row */}
      <div className={`reveal ${inView ? 'visible' : ''} px-6 max-w-6xl mx-auto mt-14 grid grid-cols-3 gap-6 border-t border-nodo-accent/20 pt-10`}>
        {[
          { label: '総席数', value: '28席' },
          { label: '個室', value: 'あり（最大8名）' },
          { label: 'スタイル', value: 'コース専門' },
        ].map(item => (
          <div key={item.label} className="text-center">
            <p className="font-display text-nodo-accent text-xs tracking-widest mb-2">{item.label}</p>
            <p className="font-jp text-nodo-primary text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
