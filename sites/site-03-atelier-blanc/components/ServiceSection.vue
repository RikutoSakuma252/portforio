<script setup lang="ts">
const { target, inView } = useInView()

const services = [
  { name: 'Cut',          jp: 'カット',          price: '¥8,800〜',  duration: '約60分', desc: '骨格・髪質を診断し、あなたに最も似合うフォルムを提案します。' },
  { name: 'Color',        jp: 'カラー',          price: '¥12,100〜', duration: '約120分', desc: '繊細なカラーリングで、肌トーンを美しく引き立てる色を選びます。' },
  { name: 'Perm',         jp: 'パーマ',          price: '¥14,300〜', duration: '約150分', desc: 'ダメージを最小限に抑えた薬剤で、自然なウェーブを。' },
  { name: 'Treatment',    jp: 'トリートメント',  price: '¥5,500〜',  duration: '約45分',  desc: '髪の内部から補修し、しなやかな艶と手触りを取り戻します。' },
]
</script>

<template>
  <section id="service" class="bg-blanc-bg py-28 md:py-40 px-6">
    <div ref="target" class="max-w-5xl mx-auto">

      <!-- Heading -->
      <div class="mb-16">
        <p :class="['reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4', inView && 'in-view']">
          SERVICE
        </p>
        <h2 :class="['reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary', inView && 'in-view']">
          Menu
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(s, i) in services"
          :key="s.name"
          :class="[
            'reveal',
            `reveal-delay-${Math.min(i + 1, 4)}`,
            inView && 'in-view',
            'group p-8 border border-blanc-light bg-blanc-white hover:bg-blanc-light transition-colors duration-400 flex flex-col gap-5',
          ]"
        >
          <div>
            <p class="font-josefin text-[10px] tracking-[0.4em] text-blanc-accent mb-2">{{ s.name.toUpperCase() }}</p>
            <p class="font-garamond text-2xl italic font-light text-blanc-primary">{{ s.jp }}</p>
          </div>
          <div class="h-px bg-blanc-accent/30" />
          <div class="flex-1">
            <p class="font-jp text-xs text-blanc-muted leading-7">{{ s.desc }}</p>
          </div>
          <div>
            <p class="font-garamond text-xl text-blanc-primary">{{ s.price }}</p>
            <p class="font-josefin text-[10px] tracking-widest text-blanc-muted mt-1">{{ s.duration }}</p>
          </div>
        </div>
      </div>

      <p :class="['reveal font-jp text-[11px] text-blanc-muted mt-10', inView && 'in-view']">
        ※ 価格はすべて税込です。施術内容により変動する場合があります。
      </p>
    </div>
  </section>
</template>
