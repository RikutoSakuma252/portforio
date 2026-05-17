import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const prices = [
  { label: '入会金',                   value: '¥33,000',   note: '初回のみ' },
  { label: 'ボディメイク / ダイエット', value: '¥49,800〜', note: '月額（週2〜3回）' },
  { label: 'アスリート強化',            value: '¥79,800〜', note: '月額（週3〜5回）' },
  { label: '回数券（10回）',            value: '¥55,000',   note: '有効期限3ヶ月' },
];

const faqs = [
  {
    q: '初心者でも大丈夫ですか？',
    a: 'はい、全くの初心者の方でも安心してご参加いただけます。担当トレーナーが一から丁寧に指導しますので、ご安心ください。',
  },
  {
    q: '食事制限は厳しいですか？',
    a: '極端な制限は行いません。お客様のライフスタイルに合わせた現実的な食事アドバイスを提供しています。無理のない範囲で継続できることを重視しています。',
  },
  {
    q: 'トレーニング時間はどのくらいですか？',
    a: '1回60分のセッションが基本です。準備運動から整理運動まで含めた充実した内容をご提供します。',
  },
  {
    q: '途中解約はできますか？',
    a: 'はい、1ヶ月前にお申し出いただければいつでも解約可能です。違約金は一切発生しません。',
  },
  {
    q: '結果コミット制度の詳細を教えてください。',
    a: '3ヶ月のプログラム終了時に、最初に設定した目標の80%以上達成できなかった場合、月額料金を全額返金します。トレーナーの指示を守っていただいた場合に適用されます。',
  },
];

export default function PriceSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, inView } = useInView();

  return (
    <section id="price" className="bg-apex-surface py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Price table */}
        <div className="mb-24">
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">Price</span>
          <h2
            className="font-oswald font-bold mt-2 text-apex-primary mb-12"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            料金
          </h2>

          <div ref={ref} className="border border-white/10">
            {prices.map((p, i) => (
              <div
                key={p.label}
                className={`flex items-center justify-between px-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-all duration-400 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-jp text-apex-secondary text-sm">{p.label}</span>
                <div className="text-right">
                  <span className="font-oswald text-2xl text-apex-primary">{p.value}</span>
                  <span className="font-jp text-apex-secondary text-xs ml-2">{p.note}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-jp text-apex-secondary text-[11px] mt-4">
            ※ 表示は税込価格です。詳細はカウンセリング時にご説明します。
          </p>
        </div>

        {/* FAQ */}
        <div>
          <span className="font-oswald text-[11px] tracking-[0.4em] text-apex-accent uppercase">FAQ</span>
          <h2
            className="font-oswald font-bold mt-2 text-apex-primary mb-10"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            よくある質問
          </h2>

          <div className="border border-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-jp text-apex-primary text-sm pr-4 leading-snug">{faq.q}</span>
                  <span
                    className={`text-apex-accent flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-45' : ''
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '160px' : '0' }}
                >
                  <p className="px-6 pb-6 font-jp text-apex-secondary text-sm leading-loose">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
