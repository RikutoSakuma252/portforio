import { useInView } from '../hooks/useInView'

const wines = [
  { name: 'Primitivo di Manduria',    region: 'プーリア', vintage: '2019', type: '赤', price: '¥1,200 / glass' },
  { name: 'Vermentino di Sardegna',   region: 'サルデーニャ', vintage: '2021', type: '白', price: '¥1,100 / glass' },
  { name: 'Barolo DOCG',              region: 'ピエモンテ', vintage: '2017', type: '赤', price: '¥2,800 / glass' },
  { name: 'Greco di Tufo',            region: 'カンパーニャ', vintage: '2022', type: '白', price: '¥1,400 / glass' },
  { name: 'Brunello di Montalcino',   region: 'トスカーナ', vintage: '2016', type: '赤', price: '¥3,600 / glass' },
]

export default function Wine() {
  const { ref, inView } = useInView()

  return (
    <section id="wine" className="bg-nodo-surface py-24 md:py-36 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start"
      >
        {/* Image */}
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <img
            src="https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="ワインセラー"
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        {/* List */}
        <div className="flex flex-col gap-6">
          <p className={`reveal reveal-delay-1 ${inView ? 'visible' : ''} font-display text-nodo-accent text-xs tracking-[0.4em]`}>
            WINE CELLAR
          </p>
          <h2 className={`reveal reveal-delay-2 ${inView ? 'visible' : ''} font-serif-en text-nodo-primary text-3xl md:text-4xl italic leading-snug`}>
            イタリアを旅する、<br />一杯のワインと共に。
          </h2>
          <div className="h-px bg-nodo-accent/20" />
          <ul className="flex flex-col gap-5">
            {wines.map((w, i) => (
              <li
                key={w.name}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${inView ? 'visible' : ''} flex items-start justify-between gap-4`}
              >
                <div>
                  <p className="font-serif-en text-nodo-primary text-sm">{w.name}</p>
                  <p className="font-jp text-nodo-secondary text-xs mt-0.5">
                    {w.region} · {w.vintage} · {w.type}
                  </p>
                </div>
                <span className="font-display text-nodo-accent text-sm whitespace-nowrap">{w.price}</span>
              </li>
            ))}
          </ul>
          <p className={`reveal ${inView ? 'visible' : ''} font-jp text-nodo-secondary text-xs leading-7 pt-2`}>
            ワインペアリングのご相談もお気軽に。<br />
            ソムリエ: 田中 恵 がご提案いたします。
          </p>
        </div>
      </div>
    </section>
  )
}
