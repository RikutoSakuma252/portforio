export default function CtaSection() {
  return (
    <section id="cta" className="relative py-24 md:py-36 overflow-hidden">
      {/* Red background */}
      <div className="absolute inset-0 bg-apex-accent" />

      {/* Grain */}
      <div className="grain-overlay absolute inset-0 opacity-20 mix-blend-overlay" />

      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span
          className="font-oswald font-bold text-white/[0.07] whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}
        >
          TRANSFORM
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span className="font-barlow text-white/60 text-[11px] tracking-[0.4em] uppercase mb-6 block">
          Free Trial
        </span>
        <h2
          className="font-oswald font-bold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          まず、無料体験から。
        </h2>
        <p className="font-oswald text-white/80 text-xl mb-3">リスクは一切ありません。</p>
        <p className="font-jp text-white/55 text-sm mb-12 leading-relaxed">
          無料カウンセリング → 60分体験 → プログラム提案。<br className="hidden md:block" />
          まずはお気軽にご連絡ください。
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="お名前"
            className="flex-1 bg-white/10 border border-white/25 px-4 py-3.5 font-jp text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
          />
          <input
            type="tel"
            placeholder="電話番号"
            className="flex-1 bg-white/10 border border-white/25 px-4 py-3.5 font-jp text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
          />
          <button
            type="submit"
            className="bg-white text-apex-accent hover:bg-white/90 transition-colors px-8 py-3.5 font-oswald text-[12px] tracking-[0.2em] whitespace-nowrap font-bold"
          >
            送信する
          </button>
        </form>

        <p className="font-jp text-white/40 text-xs mb-4">または</p>

        <a
          href="#"
          className="inline-flex items-center gap-2.5 bg-[#06c755] hover:bg-[#04a844] transition-colors px-8 py-3.5 font-jp text-white text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINEで問い合わせる
        </a>
      </div>
    </section>
  );
}
