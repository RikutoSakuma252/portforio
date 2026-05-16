import { useState } from 'react'
import { useInView } from '../hooks/useInView'

type Course = {
  name: string
  price: string
  items: string[]
}

const lunch: Course[] = [
  {
    name: 'ランチコース A',
    price: '¥3,800',
    items: ['前菜盛り合わせ', '本日のパスタ', 'ドルチェ', 'カフェ'],
  },
  {
    name: 'ランチコース B',
    price: '¥5,500',
    items: ['前菜盛り合わせ', '選べるパスタ', '本日の魚料理 or 肉料理', 'ドルチェ', 'カフェ'],
  },
]

const dinner: Course[] = [
  {
    name: 'スタンダードコース',
    price: '¥8,800',
    items: ['アミューズ', '前菜', 'パスタ', 'メインディッシュ', 'ドルチェ', 'カフェ・ミニャルディーズ'],
  },
  {
    name: 'プレミアムコース',
    price: '¥13,200',
    items: ['アミューズ×2', '前菜×2', 'パスタ', 'リゾット', 'メインディッシュ', 'プレドルチェ', 'ドルチェ', 'カフェ・ミニャルディーズ'],
  },
  {
    name: "シェフズテーブル",
    price: '¥18,700',
    items: ['シェフによるおまかせ全コース（10品前後）', 'ワインペアリング別途対応可'],
  },
]

export default function Menu() {
  const [tab, setTab] = useState<'lunch' | 'dinner'>('lunch')
  const { ref, inView } = useInView()
  const courses = tab === 'lunch' ? lunch : dinner

  return (
    <section id="menu" className="bg-nodo-light py-24 md:py-36 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <div className={`reveal ${inView ? 'visible' : ''} text-center mb-14`}>
          <p className="font-display text-nodo-bg/50 text-xs tracking-[0.4em] mb-3">COURSE MENU</p>
          <h2 className="font-serif-en text-nodo-bg text-4xl md:text-5xl italic">Menu</h2>
          <span className="gold-rule mt-5" style={{ background: '#c9a84c' }} />
        </div>

        {/* Tab switcher */}
        <div className={`reveal reveal-delay-1 ${inView ? 'visible' : ''} flex justify-center mb-12`}>
          {(['lunch', 'dinner'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-display text-xs tracking-[0.3em] px-10 py-3 border transition-all duration-300 ${
                tab === t
                  ? 'bg-nodo-bg text-nodo-accent border-nodo-bg'
                  : 'bg-transparent text-nodo-bg/60 border-nodo-bg/30 hover:border-nodo-bg/60'
              }`}
            >
              {t === 'lunch' ? 'LUNCH' : 'DINNER'}
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <div
              key={c.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${inView ? 'visible' : ''} bg-white border border-nodo-bg/10 p-8 flex flex-col gap-5`}
            >
              <div>
                <p className="font-display text-nodo-bg text-sm tracking-widest mb-2">{c.name}</p>
                <p className="font-serif-en text-nodo-accent text-2xl">{c.price}</p>
                <p className="font-jp text-nodo-bg/40 text-xs mt-1">税込・サービス料別</p>
              </div>
              <div className="h-px bg-nodo-accent/30" />
              <ul className="flex flex-col gap-2">
                {c.items.map(item => (
                  <li key={item} className="font-jp text-nodo-bg/70 text-sm flex items-start gap-2">
                    <span className="text-nodo-accent mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={`reveal ${inView ? 'visible' : ''} font-jp text-nodo-bg/50 text-xs text-center mt-10 tracking-wide`}>
          ※ アレルギー・食材に関するご相談はお気軽にお申し付けください。
        </p>
      </div>
    </section>
  )
}
