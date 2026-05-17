'use client';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -top-5 -left-4 z-10 bg-white rounded-2xl shadow-card-lg border border-fl-border px-4 py-3 flex items-center gap-3 w-[220px]"
      >
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">
          ✓
        </div>
        <div className="min-w-0">
          <div className="text-[11px] font-semibold text-fl-primary truncate">Q4予算フロー承認済み</div>
          <div className="text-[10px] text-fl-muted">田中さん · たった今</div>
        </div>
      </motion.div>

      {/* Stats pill */}
      <motion.div
        initial={{ opacity: 0, x: -10, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -bottom-4 -right-2 z-10 bg-gradient-to-r from-fl-brand to-fl-accent rounded-2xl shadow-glow px-4 py-2.5 text-white"
      >
        <div className="text-lg font-bold leading-none">↑ 32%</div>
        <div className="text-[10px] font-medium opacity-90 mt-0.5">業務効率向上</div>
      </motion.div>

      {/* Main mockup */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-2xl overflow-hidden shadow-card-lg border border-gray-200 bg-white"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3 bg-white rounded-full border border-gray-200 h-5 flex items-center px-3">
            <span className="text-[9px] text-gray-400">app.flowly.jp/dashboard</span>
          </div>
        </div>

        <div className="flex h-[310px]">
          {/* Sidebar */}
          <div className="w-[52px] bg-fl-primary flex flex-col items-center py-3 gap-3.5 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-fl-brand to-fl-accent flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">F</span>
            </div>
            {[
              { emoji: '📋', active: true },
              { emoji: '🔄', active: false },
              { emoji: '💬', active: false },
              { emoji: '📊', active: false },
              { emoji: '👥', active: false },
            ].map((nav, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm cursor-pointer transition-colors ${
                  nav.active ? 'bg-white/20' : 'opacity-40'
                }`}
              >
                {nav.emoji}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col min-w-0 bg-fl-bg">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-100">
              <div>
                <div className="text-[10px] font-semibold text-fl-primary">タスク管理</div>
                <div className="text-[8px] text-fl-muted">Sprint 12 · 残り 5日</div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-[9px]">🔔</div>
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-red-400 border border-white" />
                </div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-fl-brand to-fl-accent flex items-center justify-center text-white text-[9px] font-bold">
                  田
                </div>
              </div>
            </div>

            {/* Kanban board */}
            <div className="flex gap-2 p-2.5 flex-1 overflow-hidden">
              {/* Todo */}
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wide">Todo</span>
                  <span className="text-[7px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">3</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                  <div className="text-[9px] font-semibold text-fl-text mb-1.5">UI設計レビュー</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] bg-red-50 text-red-500 px-1.5 py-0.5 rounded-full font-medium">高優先</span>
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-purple-400 border-2 border-white text-[7px] flex items-center justify-center text-white">鈴</div>
                      <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white text-[7px] flex items-center justify-center text-white">山</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                  <div className="text-[9px] font-semibold text-fl-text mb-1">API連携テスト</div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[7px] bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded-full font-medium">中優先</span>
                    <div className="w-4 h-4 rounded-full bg-green-400 border-2 border-white text-[7px] flex items-center justify-center text-white">田</div>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-fl-brand rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>

              {/* In Progress */}
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[8px] font-bold text-fl-brand uppercase tracking-wide">進行中</span>
                  <span className="text-[7px] bg-indigo-50 text-fl-brand px-1.5 py-0.5 rounded-full">2</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-indigo-100">
                  <div className="text-[9px] font-semibold text-fl-text mb-1">承認フロー構築</div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[7px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full font-medium">低優先</span>
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-orange-400 border-2 border-white" />
                      <div className="w-4 h-4 rounded-full bg-pink-400 border-2 border-white" />
                    </div>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-fl-brand to-fl-accent" style={{ width: '75%' }} />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-indigo-100">
                  <div className="text-[9px] font-semibold text-fl-text mb-1">ダッシュボード更新</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] bg-red-50 text-red-500 px-1.5 py-0.5 rounded-full font-medium">高優先</span>
                    <div className="w-4 h-4 rounded-full bg-fl-brand border-2 border-white text-[7px] flex items-center justify-center text-white">佐</div>
                  </div>
                </div>
              </div>

              {/* Done */}
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-wide">完了</span>
                  <span className="text-[7px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full">4</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-emerald-100 opacity-60">
                  <div className="text-[9px] text-gray-400 mb-1 line-through">要件定義書作成</div>
                  <span className="text-[7px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded-full">✓ 完了</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-emerald-100 opacity-60">
                  <div className="text-[9px] text-gray-400 mb-1 line-through">チーム招待設定</div>
                  <span className="text-[7px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded-full">✓ 完了</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-emerald-100 opacity-60">
                  <div className="text-[9px] text-gray-400 mb-1 line-through">初期設定完了</div>
                  <span className="text-[7px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded-full">✓ 完了</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid" />
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-fl-brand/20 to-fl-accent/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-fl-accent/15 to-fl-brand/5 blur-2xl animate-float2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-7">
                <div className="w-1.5 h-1.5 rounded-full bg-fl-brand" />
                <span className="text-xs font-semibold text-fl-brand">新機能: AI承認フロー ✦ 今すぐ体験</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-bold text-fl-primary leading-[1.15] tracking-tight mb-6"
            >
              チームの
              <span className="block gradient-text">「当たり前」を、</span>
              もっとスマートに。
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-fl-muted leading-relaxed mb-8 font-sans-jp"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              タスク管理・承認フロー・チャットをFlowly一つに集約。
              導入企業の<strong className="text-fl-text font-semibold">87%</strong>が業務効率30%改善を実感。
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-fl-brand hover:bg-indigo-700 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-glow hover:shadow-lg text-sm sm:text-base"
              >
                無料で始める
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-fl-border hover:border-fl-brand text-fl-text hover:text-fl-brand font-semibold px-7 py-4 rounded-xl transition-all duration-200 text-sm sm:text-base bg-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
                デモを見る
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={item} className="flex items-center gap-4 text-sm text-fl-muted">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  {['bg-purple-400', 'bg-blue-400', 'bg-emerald-400', 'bg-orange-400'].map((c, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-white`} />
                  ))}
                </div>
                <div className="flex text-amber-400 text-[11px]">{'★'.repeat(5)}</div>
              </div>
              <span className="text-xs">
                <strong className="text-fl-text font-semibold">2,000+</strong> チームが利用中
              </span>
              <span className="hidden sm:block text-fl-border">|</span>
              <span className="hidden sm:block text-xs">クレジットカード不要</span>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
