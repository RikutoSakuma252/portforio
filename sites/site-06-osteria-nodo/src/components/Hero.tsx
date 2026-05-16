export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-nodo-bg" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <p className="hero-logo font-display text-nodo-accent text-xs tracking-[0.5em] mb-8">
          OSTERIA NODO
        </p>

        {/* Gold rule */}
        <span className="hero-logo gold-rule mb-8 inline-block" />

        {/* Catch copy */}
        <h1 className="hero-title font-serif-en text-nodo-primary text-4xl md:text-6xl lg:text-7xl italic leading-tight mb-6">
          素材の声を、<br />皿の上で。
        </h1>

        {/* Sub copy */}
        <p className="hero-sub font-jp text-nodo-secondary text-sm md:text-base tracking-widest mb-12">
          南イタリアの伝統と、日本の旬が出会う場所。
        </p>

        {/* CTA */}
        <a
          href="#reserve"
          className="hero-cta inline-block font-display text-xs tracking-[0.3em] text-nodo-accent border border-nodo-accent px-10 py-4 hover:bg-nodo-accent hover:text-nodo-bg transition-all duration-400"
        >
          ご予約はこちら
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-display text-nodo-secondary text-[10px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-nodo-accent to-transparent" />
      </div>
    </section>
  )
}
