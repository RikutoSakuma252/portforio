import { useState } from 'react';

type CourseItem = {
  name: string;
  price: string;
  description: string;
  courses: string[];
};

const lunch: CourseItem[] = [
  {
    name: 'Pranzo A',
    price: '¥ 3,800',
    description: '気軽にイタリアンを楽しむランチコース。',
    courses: ['前菜', 'パスタ（選択）', 'デザート', 'コーヒー'],
  },
  {
    name: 'Pranzo B',
    price: '¥ 5,500',
    description: '旬の食材を存分に堪能するプレミアムランチ。',
    courses: ['アミューズ', '前菜', 'パスタ（選択）', '魚 or 肉料理', 'デザート', 'コーヒー'],
  },
];

const dinner: CourseItem[] = [
  {
    name: 'Cena A',
    price: '¥ 8,800',
    description: 'NODOの世界へ誘う、スタンダードディナー。',
    courses: ['アミューズ', '前菜 2種', 'パスタ', '魚料理', 'デザート', '小菓子'],
  },
  {
    name: 'Cena B',
    price: '¥ 13,200',
    description: '季節の食材をフルコースで。特別な夜に。',
    courses: ['アミューズ', '前菜 3種', 'パスタ 2種', '魚料理', '肉料理', 'デザート', '小菓子'],
  },
  {
    name: "Chef's Table",
    price: '¥ 18,700',
    description: 'シェフのおまかせ。最高の素材と技法で贈る至高の一夜。',
    courses: ['全 9 品 — 当日の仕入れにより構成'],
  },
];

export default function MenuTabs() {
  const [tab, setTab] = useState<'lunch' | 'dinner'>('lunch');
  const items = tab === 'lunch' ? lunch : dinner;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex items-center justify-center gap-0 mb-14">
        {(['lunch', 'dinner'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative font-sub text-[0.65rem] tracking-cinzel uppercase px-10 py-3 transition-colors duration-300 border ${
              tab === t
                ? 'border-gold text-gold bg-gold/10'
                : 'border-gold/20 text-muted hover:text-gold hover:border-gold/40'
            }`}
          >
            {t === 'lunch' ? 'Pranzo / Lunch' : 'Cena / Dinner'}
          </button>
        ))}
      </div>

      {/* Course cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article
            key={item.name}
            className="border border-gold/15 p-8 hover:border-gold/40 transition-all duration-400 group relative overflow-hidden"
          >
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />

            <p className="font-sub text-[0.55rem] tracking-cinzel uppercase text-gold mb-2">
              {item.price}
            </p>
            <h3 className="font-display italic text-xl text-cream mb-3">{item.name}</h3>
            <p className="font-body text-[0.8rem] text-muted leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Course flow */}
            <ul className="space-y-2">
              {item.courses.map((course, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-sub text-[0.45rem] tracking-widest text-gold mt-1.5 flex-shrink-0">✦</span>
                  <span className="font-body text-[0.78rem] text-muted/80">{course}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Note */}
      <p className="font-body text-[0.72rem] text-muted/60 text-center mt-10 leading-relaxed">
        アレルギー・食材に関するご相談はお気軽にお申し付けください。<br />
        料金は税込・サービス料別となります。
      </p>
    </div>
  );
}
