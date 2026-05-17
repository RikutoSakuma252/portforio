export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(10,10,10,0.96) 45%, rgba(10,10,10,0.55) 100%)' }}
        />
      </div>

      {/* Grain */}
      <div className="grain-overlay absolute inset-0 opacity-25 mix-blend-overlay" />

      {/* Ghost watermark */}
      <div className="absolute right-[-2vw] bottom-[-4vh] font-oswald text-[22vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
        APEX
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 w-full">
        <div className="hero-line-1 flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-apex-accent" />
          <span className="font-barlow text-apex-accent text-[11px] tracking-[0.4em] uppercase">
            Personal Training Gym · Tokyo
          </span>
        </div>

        <h1 className="hero-line-2 font-oswald font-bold leading-[0.88] text-apex-primary"
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
        >
          限界を、
        </h1>
        <div className="hero-line-2 flex items-center gap-0 my-3">
          <div className="h-px bg-apex-accent flex-1 max-w-[480px]" style={{ height: '2px' }} />
        </div>
        <h1
          className="hero-line-3 font-oswald font-bold leading-[0.88] text-apex-accent"
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
        >
          超えろ。
        </h1>

        <p className="hero-line-3 font-jp text-apex-secondary text-sm md:text-base mt-8 mb-10 max-w-md leading-loose">
          マンツーマン指導で、3ヶ月で体を変える。<br />
          あなたの「なりたい自分」を、私たちが全力でサポートします。
        </p>

        <div className="hero-cta flex flex-wrap gap-4">
          <a
            href="#cta"
            className="group flex items-center gap-3 bg-apex-accent hover:bg-apex-accent-dark transition-colors duration-200 px-8 py-4 font-oswald text-[13px] tracking-[0.2em] text-white"
          >
            無料体験を申し込む
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#program"
            className="flex items-center gap-3 border border-white/20 hover:border-white/40 transition-colors duration-200 px-8 py-4 font-oswald text-[13px] tracking-[0.2em] text-apex-secondary hover:text-apex-primary"
          >
            プログラムを見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-pulse">
        <span className="font-barlow text-[10px] tracking-[0.35em] text-apex-secondary">SCROLL</span>
        <svg className="w-4 h-4 text-apex-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}
