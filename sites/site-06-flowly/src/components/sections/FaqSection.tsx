'use client';
import { useState } from 'react';
import type { FaqItem } from '@/types';

const faqs: FaqItem[] = [
  {
    id: 1,
    question: '無料プランはいつまで使えますか？',
    answer:
      '無料プランは期限なくご利用いただけます。5ユーザー・10プロジェクトまでの制限はありますが、コア機能は全て無料でお使いいただけます。ビジネスが成長したタイミングでProプランへのアップグレードをご検討ください。',
  },
  {
    id: 2,
    question: '契約途中で解約できますか？',
    answer:
      'はい、月払いプランはいつでも解約可能です。解約後も当月末まではサービスをご利用いただけます。年払いプランの中途解約については、残月数分の返金対応を行っておりますので、サポートまでご連絡ください。',
  },
  {
    id: 3,
    question: 'セキュリティについて教えてください。',
    answer:
      'データはAWS東京リージョンに保存し、通信はTLS 1.3で暗号化されています。ISO 27001認証取得済みで、SOC 2 Type IIコンプライアンスにも準拠しています。二要素認証（2FA）にも対応しており、安全なアクセス管理が可能です。',
  },
  {
    id: 4,
    question: '他のツールと連携できますか？',
    answer:
      'Slack、Google Workspace、Microsoft 365などとのシームレスな連携が可能です。またZapier経由で5,000以上のアプリと連携できます。API経由のカスタム連携もご用意しており、既存のシステムとの統合も柔軟に対応します。',
  },
  {
    id: 5,
    question: 'データの移行サポートはありますか？',
    answer:
      'はい、Trello・Asana・Notionなどからのデータインポートツールをご用意しています。Enterpriseプランではデータ移行専任のサポートチームがお手伝いします。移行期間中もサービスを並行してご利用いただけます。',
  },
  {
    id: 6,
    question: '無料トライアルはありますか？',
    answer:
      'Proプランは14日間の無料トライアルをご利用いただけます。クレジットカードの登録不要で、全機能をお試しいただけます。トライアル期間終了後に自動課金されることは一切ありません。',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-fl-brand" />
            <span className="text-xs font-semibold text-fl-brand">よくある質問</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-fl-primary tracking-tight">
            FAQ
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-fl-brand/30 shadow-card' : 'border-fl-border hover:border-fl-brand/20'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      isOpen ? 'text-fl-brand' : 'text-fl-primary'
                    }`}
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen ? 'border-fl-brand bg-indigo-50 rotate-45' : 'border-fl-border'
                    }`}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      className={isOpen ? 'text-fl-brand' : 'text-fl-muted'}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                <div
                  className="faq-content"
                  style={{ maxHeight: isOpen ? '400px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <p
                    className="px-6 pb-5 text-sm text-fl-text leading-[1.8]"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
