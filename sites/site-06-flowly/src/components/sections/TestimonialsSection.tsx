import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: '田中 誠一',
    role: '代表取締役',
    company: '株式会社テクスター',
    comment:
      'Flowlyを導入してから、Slack・Excel・メールをまたぐ二重管理がなくなりました。特に承認フロー機能のおかげで意思決定が格段に速くなり、月に40時間以上削減できました。',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/80?img=11',
  },
  {
    id: 2,
    name: '佐藤 美咲',
    role: 'プロジェクトマネージャー',
    company: 'BRIGHT Works',
    comment:
      'チームの情報がFlowlyに集約されたことで、「あの件どうなった？」という確認コストがほぼゼロになりました。リモートワークでもチームの一体感を保てています。',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/80?img=49',
  },
  {
    id: 3,
    name: '山田 健太',
    role: '営業部長',
    company: 'フューチャー株式会社',
    comment:
      '無料トライアルから始めて3日で全社展開を決めました。操作が直感的で、ITに不慣れなメンバーも抵抗なく使いこなせています。サポートの対応も丁寧です。',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/80?img=3',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-fl-brand" />
            <span className="text-xs font-semibold text-fl-brand">導入事例</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fl-primary tracking-tight">
            導入チームの<span className="gradient-text">リアルな声</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-fl-bg rounded-2xl p-7 border border-fl-border hover:border-fl-brand/30 hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex text-amber-400 mb-5 text-sm">
                {'★'.repeat(t.rating)}
              </div>

              {/* Comment */}
              <p
                className="text-fl-text text-sm leading-[1.85] mb-7"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-fl-border">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-fl-primary">{t.name}</div>
                  <div className="text-xs text-fl-muted" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
