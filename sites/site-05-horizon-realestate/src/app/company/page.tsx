import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: '会社概要 | HORIZON不動産',
};

const companyInfo = [
  { label: '会社名',       value: '株式会社HORIZON不動産' },
  { label: '設立',         value: '2004年4月' },
  { label: '代表取締役',   value: '田中 誠一' },
  { label: '資本金',       value: '3,000万円' },
  { label: '従業員数',     value: '38名' },
  { label: '免許番号',     value: '東京都知事（5）第XXXXX号' },
  { label: '所在地',       value: '東京都世田谷区三軒茶屋1-1-1 HORIZONビル3F' },
  { label: '営業時間',     value: '9:00〜18:00（水曜・祝日休み）' },
  { label: '取扱エリア',   value: '東京都（世田谷区・目黒区・渋谷区・武蔵野市・三鷹市他）/ 神奈川県' },
];

const members = [
  {
    name: '田中 誠一',
    title: '代表取締役',
    message: '「住まい選びは、人生の大きな節目です。その一瞬に寄り添い、20年間地域と共に歩んできました。これからも、お客様の理想を現実に変えるパートナーであり続けます。」',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&facepad=3',
  },
  {
    name: '鈴木 恵子',
    title: '営業部長',
    message: '「お客様それぞれのライフスタイルに合わせた物件をご提案することが私の使命です。お気軽にご相談ください。」',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&facepad=3',
  },
  {
    name: '佐々木 健',
    title: '査定・仲介担当',
    message: '「市場動向を日々分析し、適正価格でのご売却をサポートします。売り時・買い時のご相談もお任せください。」',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&facepad=3',
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-horizon-bg pt-20">
      {/* Page header */}
      <div className="bg-horizon-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-3">Company</p>
          <h1 className="font-serif-jp text-3xl md:text-4xl font-light text-white">会社概要</h1>
        </div>
      </div>

      {/* Mission */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-6">Our Mission</p>
            <h2 className="font-serif-jp text-2xl md:text-4xl font-light text-horizon-navy leading-snug mb-8">
              あなたの「理想」を、「現実」に。
            </h2>
            <div className="w-12 h-px bg-horizon-gold mx-auto mb-8" />
            <p className="font-sans-jp text-sm text-horizon-muted leading-[2] max-w-2xl mx-auto">
              HORIZON不動産は、2004年の創業以来、東京西部・神奈川エリアを専門に、地域に根ざした不動産サービスを提供してまいりました。売買・賃貸・資産運用まで、お客様の住まいに関するあらゆるご相談に、専任担当者がワンストップで対応します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company info table */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-2">Details</p>
            <h2 className="font-serif-jp text-2xl font-light text-horizon-navy mb-10">会社情報</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="border border-horizon-border">
              {companyInfo.map((item, i) => (
                <div key={item.label} className={`flex flex-col sm:flex-row ${i < companyInfo.length - 1 ? 'border-b border-horizon-border' : ''}`}>
                  <div className="bg-horizon-light px-6 py-4 sm:w-40 flex-shrink-0">
                    <span className="font-sans-jp text-xs text-horizon-muted tracking-wider">{item.label}</span>
                  </div>
                  <div className="px-6 py-4 flex-1">
                    <span className="font-sans-jp text-sm text-horizon-text">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-2">Team</p>
            <h2 className="font-serif-jp text-2xl font-light text-horizon-navy mb-12">スタッフ紹介</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 100}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-horizon-gold/30">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-sans-jp text-[10px] tracking-widest text-horizon-gold mb-1">{m.title}</p>
                  <h3 className="font-serif-jp text-lg text-horizon-navy mb-3">{m.name}</h3>
                  <div className="w-8 h-px bg-horizon-gold mx-auto mb-4" />
                  <p className="font-sans-jp text-xs text-horizon-muted leading-loose">{m.message}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
