<script setup lang="ts">
const { target, inView } = useInView()
</script>

<template>
  <section id="concept" class="bg-blanc-light py-28 md:py-44 px-6">
    <div ref="target" class="max-w-2xl mx-auto text-center">
      <p :class="['reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-10', inView && 'in-view']">
        CONCEPT
      </p>

      <!-- Decorative rule -->
      <div :class="['reveal reveal-delay-1 flex items-center gap-6 justify-center mb-12', inView && 'in-view']">
        <span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]" />
        <span class="font-garamond text-blanc-accent text-xl italic">B</span>
        <span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]" />
      </div>

      <h2 :class="['reveal reveal-delay-2 font-garamond text-3xl md:text-4xl lg:text-5xl italic font-light text-blanc-primary leading-snug mb-10', inView && 'in-view']">
        あなた一人のために<br />存在するサロン。
      </h2>

      <p :class="['reveal reveal-delay-3 font-jp text-sm text-blanc-muted leading-9 mb-6', inView && 'in-view']">
        atelier BLANCは、あなた一人のために存在するプライベートサロンです。
      </p>
      <p :class="['reveal reveal-delay-3 font-jp text-sm text-blanc-muted leading-9', inView && 'in-view']">
        トレンドではなく、あなたの魅力を最大限に引き出すスタイルをご提案します。骨格・髪質・ライフスタイルを丁寧に読み解き、唯一無二の一スタイルを共に作り上げます。
      </p>

      <!-- Bottom rule -->
      <div :class="['reveal reveal-delay-4 flex items-center gap-6 justify-center mt-12', inView && 'in-view']">
        <span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]" />
        <span class="font-garamond text-blanc-accent text-xl italic">◇</span>
        <span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]" />
      </div>
    </div>
  </section>
</template>
