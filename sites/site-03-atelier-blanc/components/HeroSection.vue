<template>
  <section class="relative min-h-screen grid md:grid-cols-2 overflow-hidden">
    <!-- Left: text -->
    <div class="flex flex-col justify-center px-10 md:px-16 lg:px-24 pt-32 pb-20 md:pt-0 md:pb-0 bg-blanc-bg">
      <p class="hero-label font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-8">
        PRIVATE HAIR SALON
      </p>
      <span class="hero-label thin-rule mb-10" />
      <h1 class="hero-title font-garamond text-4xl md:text-5xl lg:text-6xl italic font-light leading-snug text-blanc-primary mb-8">
        あなたらしさを、<br />解放する場所。
      </h1>
      <p class="hero-body font-jp text-sm text-blanc-muted leading-8 mb-12 max-w-xs">
        骨格・ライフスタイルに寄り添う、<br />完全プライベートサロン。
      </p>
      <a
        href="#reserve"
        class="hero-cta self-start font-josefin text-[11px] tracking-[0.35em] text-blanc-primary border border-blanc-primary px-10 py-4 hover:bg-blanc-primary hover:text-blanc-white transition-all duration-400"
      >
        ご予約はこちら
      </a>
    </div>

    <!-- Right: image -->
    <div class="relative h-72 md:h-auto hero-image">
      <img
        src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=900"
        alt="atelier BLANC サロンイメージ"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <!-- Subtle overlay to tie into bg color -->
      <div class="absolute inset-0 bg-blanc-primary/5" />
    </div>
  </section>
</template>
