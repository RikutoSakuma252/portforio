'use client';
import { useState } from 'react';

const tabs = [
  {
    id: 'tasks',
    icon: '📋',
    title: 'タスク管理',
    description:
      'ドラッグ&ドロップでカンバン管理。優先度・担当者・期限を一目で把握。タスクの漏れをゼロに。',
  },
  {
    id: 'approval',
    icon: '🔄',
    title: '承認フロー',
    description:
      '複雑な多段階承認をビジュアルで設定。承認ステータスをリアルタイムで追跡。意思決定を加速。',
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'チームチャット',
    description:
      'タスクに紐づいたスレッド形式のチャット。大切な情報が流れない、文脈を持ったコミュニケーション。',
  },
  {
    id: 'reports',
    icon: '📊',
    title: 'レポート',
    description:
      'チームの進捗をリアルタイムで可視化。週次・月次レポートを自動生成。データドリブンな意思決定を。',
  },
];

function TaskMockup() {
  return (
    <div className="bg-white rounded-xl border border-fl-border p-4 space-y-3 h-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-fl-primary">Sprint 12 タスク</span>
        <span className="text-[10px] text-fl-muted bg-fl-bg px-2 py-0.5 rounded-full">9件</span>
      </div>
      {[
        { title: '新機能のUI設計', tag: '高優先', tagColor: 'bg-red-50 text-red-500', progress: 70, assignee: '田', color: 'bg-fl-brand' },
        { title: 'APIドキュメント更新', tag: '中優先', tagColor: 'bg-yellow-50 text-yellow-600', progress: 30, assignee: '佐', color: 'bg-purple-400' },
        { title: 'ユーザーテスト実施', tag: '低優先', tagColor: 'bg-green-50 text-green-600', progress: 90, assignee: '山', color: 'bg-orange-400' },
        { title: 'リリースノート作成', tag: '中優先', tagColor: 'bg-yellow-50 text-yellow-600', progress: 10, assignee: '鈴', color: 'bg-pink-400' },
      ].map((task, i) => (
        <div key={i} className="border border-fl-border rounded-lg p-3 hover:border-fl-brand/30 transition-colors">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="text-sm font-medium text-fl-text">{task.title}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${task.tagColor}`}>{task.tag}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-fl-brand to-fl-accent"
                style={{ width: `${task.progress}%` }}
              />
            </div>
            <span className="text-[10px] text-fl-muted">{task.progress}%</span>
            <div className={`w-5 h-5 rounded-full ${task.color} text-white text-[9px] flex items-center justify-center font-bold`}>
              {task.assignee}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ApprovalMockup() {
  return (
    <div className="bg-white rounded-xl border border-fl-border p-6 h-full flex flex-col justify-center">
      <div className="text-xs font-semibold text-fl-primary mb-6">Q4予算申請フロー</div>
      <div className="flex flex-col gap-0">
        {[
          { label: '申請', name: '山田 部長', status: 'done', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
          { label: '上長確認', name: '鈴木 課長', status: 'done', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
          { label: '部長承認', name: '田中 取締役', status: 'active', color: 'text-fl-brand bg-indigo-50 border-fl-brand' },
          { label: '経理確認', name: '佐藤 経理部', status: 'pending', color: 'text-fl-muted bg-gray-50 border-fl-border' },
          { label: '完了', name: '申請者へ通知', status: 'pending', color: 'text-fl-muted bg-gray-50 border-fl-border' },
        ].map((step, i, arr) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${step.color}`}
              >
                {step.status === 'done' ? '✓' : step.status === 'active' ? '●' : i + 1}
              </div>
              {i < arr.length - 1 && (
                <div className={`w-0.5 h-7 mt-1 ${step.status === 'done' ? 'bg-emerald-300' : 'bg-gray-200'}`} />
              )}
            </div>
            <div className="pt-1 pb-6">
              <div className="text-xs font-semibold text-fl-primary">{step.label}</div>
              <div className="text-[11px] text-fl-muted mt-0.5">{step.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="bg-white rounded-xl border border-fl-border overflow-hidden h-full flex flex-col">
      <div className="px-4 py-3 border-b border-fl-border bg-fl-bg">
        <div className="text-xs font-semibold text-fl-primary"># UI設計レビュー</div>
        <div className="text-[10px] text-fl-muted">タスク「新機能のUI設計」のスレッド</div>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-hidden">
        {[
          { user: '田', color: 'bg-fl-brand', name: '田中', msg: 'モックアップ修正しました！確認お願いします 🙏', time: '10:24', self: false },
          { user: '佐', color: 'bg-purple-400', name: '佐藤', msg: '確認しました。ヘッダーの余白をもう少し広げてください。', time: '10:31', self: false },
          { user: '山', color: 'bg-orange-400', name: '山田', msg: 'デザイン案LGTM！あとはコンポーネント分割が必要そう', time: '10:35', self: true },
          { user: '田', color: 'bg-fl-brand', name: '田中', msg: '了解！今日中に対応します 💪', time: '10:40', self: false },
        ].map((msg, i) => (
          <div key={i} className={`flex gap-2.5 ${msg.self ? 'flex-row-reverse' : ''}`}>
            <div className={`w-7 h-7 rounded-full ${msg.color} text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5`}>
              {msg.user}
            </div>
            <div className={`max-w-[75%] ${msg.self ? 'items-end' : 'items-start'} flex flex-col gap-0.5`}>
              {!msg.self && <span className="text-[10px] text-fl-muted font-medium">{msg.name}</span>}
              <div className={`px-3 py-2 rounded-2xl text-xs leading-relaxed ${msg.self ? 'bg-fl-brand text-white rounded-tr-sm' : 'bg-fl-bg text-fl-text rounded-tl-sm border border-fl-border'}`}>
                {msg.msg}
              </div>
              <span className="text-[9px] text-fl-muted">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-fl-border">
        <div className="flex items-center gap-2 bg-fl-bg rounded-xl px-3 py-2 border border-fl-border">
          <span className="text-xs text-fl-muted flex-1">メッセージを入力...</span>
          <div className="w-6 h-6 rounded-lg bg-fl-brand flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsMockup() {
  const bars = [65, 80, 55, 90, 72, 88, 61];
  const days = ['月', '火', '水', '木', '金', '土', '日'];

  return (
    <div className="bg-white rounded-xl border border-fl-border p-5 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold text-fl-primary">週次進捗レポート</div>
          <div className="text-[10px] text-fl-muted mt-0.5">2025年5月第2週</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-fl-brand" />
          <span className="text-[10px] text-fl-muted">完了率</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-2 h-28 flex-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t-md overflow-hidden" style={{ height: `${h}%` }}>
              <div
                className="w-full h-full rounded-t-md"
                style={{
                  background: i === 3
                    ? 'linear-gradient(180deg, #4f46e5 0%, #06b6d4 100%)'
                    : 'linear-gradient(180deg, rgba(79,70,229,0.3) 0%, rgba(6,182,212,0.2) 100%)',
                }}
              />
            </div>
            <span className="text-[9px] text-fl-muted">{days[i]}</span>
          </div>
        ))}
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-fl-border">
        {[
          { label: '完了タスク', value: '24件', up: true },
          { label: '平均対応時間', value: '1.4h', up: false },
          { label: 'チーム稼働率', value: '87%', up: true },
        ].map((kpi, i) => (
          <div key={i} className="text-center">
            <div className="text-sm font-bold text-fl-primary">{kpi.value}</div>
            <div className="text-[9px] text-fl-muted">{kpi.label}</div>
            <div className={`text-[9px] font-medium ${kpi.up ? 'text-emerald-500' : 'text-red-400'}`}>
              {kpi.up ? '↑' : '↓'} 先週比
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockups = [TaskMockup, ApprovalMockup, ChatMockup, ReportsMockup];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveMockup = mockups[activeTab];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-fl-brand" />
            <span className="text-xs font-semibold text-fl-brand">主要機能</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fl-primary tracking-tight">
            必要なツールが、<span className="gradient-text">一つに。</span>
          </h2>
          <p className="mt-4 text-base text-fl-muted max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            Slack + Excel + メールの煩雑な行き来から解放。
            業務のすべてをFlowlyで完結。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`group flex items-start gap-4 p-4 rounded-2xl text-left transition-all duration-200 w-full border ${
                  activeTab === i
                    ? 'bg-white border-fl-brand/30 shadow-card'
                    : 'bg-transparent border-transparent hover:bg-white/60 hover:border-fl-border'
                }`}
              >
                <div
                  className={`text-xl flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeTab === i ? 'bg-indigo-50' : 'bg-gray-100 group-hover:bg-indigo-50'
                  }`}
                >
                  {tab.icon}
                </div>
                <div className="min-w-0 hidden lg:block">
                  <div
                    className={`text-sm font-semibold transition-colors ${
                      activeTab === i ? 'text-fl-brand' : 'text-fl-text group-hover:text-fl-primary'
                    }`}
                  >
                    {tab.title}
                  </div>
                  {activeTab === i && (
                    <p className="text-xs text-fl-muted leading-relaxed mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      {tab.description}
                    </p>
                  )}
                </div>
                <div className="lg:hidden">
                  <div className={`text-xs font-semibold ${activeTab === i ? 'text-fl-brand' : 'text-fl-muted'}`}>
                    {tab.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mockup panel */}
          <div className="lg:col-span-3 h-[380px] lg:h-[440px]">
            <ActiveMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
