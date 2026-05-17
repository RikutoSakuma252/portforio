'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Plan } from '@/types';

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: '個人・小規模チームの業務改善に',
    features: [
      '5ユーザーまで',
      '10プロジェクト',
      '基本タスク管理',
      'チームチャット',
      '1GBストレージ',
      'メールサポート',
    ],
    highlighted: false,
    cta: '無料で始める',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 3980,
    yearlyPrice: 3184,
    description: '成長中のチームに必要な全機能',
    features: [
      '無制限ユーザー',
      '無制限プロジェクト',
      'Free の全機能',
      '承認フロー管理',
      'レポート・分析',
      'カレンダー連携',
      '外部API連携',
      '優先サポート',
      '50GBストレージ',
    ],
    highlighted: true,
    badge: '人気No.1',
    cta: '14日間無料で試す',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    priceNote: '要相談',
    description: '大規模組織・高度な要件に対応',
    features: [
      'Proの全機能',
      'SSO・SAML認証',
      '監査ログ',
      'SLA保証 99.9%',
      '専任CSM',
      'カスタム開発対応',
      '無制限ストレージ',
      '24h専用サポート',
    ],
    highlighted: false,
    cta: '営業に相談する',
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-fl-brand mt-0.5">
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity={0.12} />
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-fl-brand" />
            <span className="text-xs font-semibold text-fl-brand">料金プラン</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fl-primary tracking-tight mb-4">
            シンプルな<span className="gradient-text">料金体系</span>
          </h2>
          <p className="text-fl-muted text-base" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            いつでも解約可能。隠れた費用はありません。
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 mt-7 bg-white border border-fl-border rounded-xl p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                billing === 'monthly'
                  ? 'bg-fl-brand text-white shadow-sm'
                  : 'text-fl-muted hover:text-fl-text'
              }`}
            >
              月払い
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                billing === 'yearly'
                  ? 'bg-fl-brand text-white shadow-sm'
                  : 'text-fl-muted hover:text-fl-text'
              }`}
            >
              年払い
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                billing === 'yearly' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
              }`}>
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl flex flex-col ${
                plan.highlighted
                  ? 'gradient-border bg-white shadow-glow'
                  : 'bg-white border border-fl-border shadow-card'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-fl-brand to-fl-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-fl-brand' : 'text-fl-primary'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-xs text-fl-muted" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-7 h-16 flex flex-col justify-center">
                  {plan.priceNote ? (
                    <div className="text-3xl font-bold text-fl-primary">{plan.priceNote}</div>
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${plan.id}-${billing}`}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                      >
                        {plan.monthlyPrice === 0 ? (
                          <div className="text-4xl font-bold text-fl-primary">¥0</div>
                        ) : (
                          <div>
                            <span className="text-4xl font-bold text-fl-primary">
                              ¥{(billing === 'monthly' ? plan.monthlyPrice! : plan.yearlyPrice!).toLocaleString()}
                            </span>
                            <span className="text-sm text-fl-muted ml-1">/月</span>
                          </div>
                        )}
                        {billing === 'yearly' && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                          <div className="text-xs text-emerald-600 font-medium mt-1">
                            年間 ¥{(plan.yearlyPrice! * 12).toLocaleString()} で請求
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className={`block text-center py-3.5 rounded-xl text-sm font-semibold mb-7 transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-fl-brand hover:bg-indigo-700 text-white shadow-sm hover:shadow-md'
                      : 'border border-fl-border hover:border-fl-brand text-fl-text hover:text-fl-brand'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-sm text-fl-text" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-fl-muted mt-8" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          全プラン共通：データの暗号化・GDPR対応・99.9% SLA保証
        </p>
      </div>
    </section>
  );
}
