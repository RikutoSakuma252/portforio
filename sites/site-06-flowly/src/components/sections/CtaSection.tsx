export default function CtaSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fl-primary via-[#312e81] to-[#1e1b4b]" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-fl-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-fl-brand/20 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-fl-accent" />
          <span className="text-xs font-semibold text-white">14日間 全機能無料</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-5">
          今すぐ無料で始める。
          <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-white/70 mt-2">
            14日間、全機能使い放題。
          </span>
        </h2>

        <p
          className="text-white/60 text-base leading-relaxed mb-10 max-w-md mx-auto"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          クレジットカード不要。いつでも解約可能。<br />
          設定はたった10分で完了します。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-fl-brand font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-glow text-base"
          >
            無料で始める
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            デモを申し込む
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 mt-10 text-white/40 text-xs">
          {['🔒 セキュア', '📞 24h サポート', '🔄 いつでも解約'].map((item) => (
            <span key={item} className="flex items-center gap-1">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
