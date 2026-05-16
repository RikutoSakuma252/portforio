import { useInView } from '../hooks/useInView'

const reviews = [
  {
    name: 'M.T. 様',
    stars: 5,
    text: '記念日に利用しました。お料理はどれも素材の味が活きていて、特にパスタの繊細な塩加減が忘れられません。スタッフの方々の心遣いも素晴らしく、また必ず訪れたいと思います。',
  },
  {
    name: 'K.Y. 様',
    stars: 5,
    text: '接待で使用しました。個室でゆっくりとお話でき、料理・ワイン・サービスの三拍子が揃っています。シェフズテーブルはまさに最高峰。ビジネスの場にも最適です。',
  },
  {
    name: 'A.S. 様',
    stars: 5,
    text: 'ランチコースを友人と。コストパフォーマンスが驚くほど高く、本格的なイタリアンをこのクオリティで楽しめるとは思いませんでした。ディナーも予約しました。',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-nodo-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Voice() {
  const { ref, inView } = useInView()

  return (
    <section id="voice" className="bg-nodo-surface py-24 md:py-36 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-5xl mx-auto"
      >
        <div className={`reveal ${inView ? 'visible' : ''} text-center mb-14`}>
          <p className="font-display text-nodo-accent text-xs tracking-[0.4em] mb-3">GUEST VOICE</p>
          <h2 className="font-serif-en text-nodo-primary text-4xl md:text-5xl italic">Voice</h2>
          <span className="gold-rule mt-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''} bg-nodo-bg p-8 border border-nodo-accent/10 flex flex-col gap-5`}
            >
              <Stars count={r.stars} />
              <p className="font-jp text-nodo-secondary text-sm leading-8 flex-1">
                「{r.text}」
              </p>
              <p className="font-display text-nodo-primary text-xs tracking-widest">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
