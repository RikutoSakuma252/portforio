import { useInView } from '../hooks/useInView'

type Dish = { src: string; name: string; imgClassName?: string }

const dishes: Dish[] = [
  { src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', name: '手打ちパスタ — プーリア風オレキエッテ', imgClassName: 'h-[280px]' },
  { src: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=600',  name: 'リゾット — 季節の野菜と熟成パルメジャーノ' },
  { src: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600', name: '前菜 — 魚介のカルパッチョ', imgClassName: 'h-[280px]' },
  { src: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=600',  name: 'メインディッシュ — 黒毛和牛のビステッカ' },
  { src: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'ドルチェ — ティラミス', imgClassName: 'h-[280px]' },
  { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'シェフズテーブル — アミューズブーシュ' },

]

export default function Gallery() {
  const { ref, inView } = useInView()

  return (
    <section id="gallery" className="bg-nodo-bg py-24 md:py-36 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className={`reveal ${inView ? 'visible' : ''} text-center mb-14`}>
          <p className="font-display text-nodo-accent text-xs tracking-[0.4em] mb-3">DISH GALLERY</p>
          <h2 className="font-serif-en text-nodo-primary text-4xl md:text-5xl italic">Gallery</h2>
          <span className="gold-rule mt-5" />
        </div>

        {/* Masonry via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {dishes.map((d, i) => (
            <div
              key={d.name}
              className={`reveal reveal-delay-${Math.min(i % 4 + 1, 4)} ${inView ? 'visible' : ''} group relative break-inside-avoid overflow-hidden`}
            >
              <img
                src={d.src}
                alt={d.name}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105${d.imgClassName ? ` ${d.imgClassName}` : ''}`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-nodo-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <p className="font-jp text-nodo-primary text-sm leading-relaxed">{d.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
