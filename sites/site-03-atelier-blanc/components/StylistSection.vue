<script setup lang="ts">
const { target, inView } = useInView()

const stylists = [
  {
    name: '佐々木 麻衣',
    nameEn: 'Mai Sasaki',
    role: 'Senior Stylist',
    specialty: 'カット・カラー',
    bio: '都内有名サロンで10年の経験を積み、2020年よりatelier BLANCに参加。骨格診断カラーリストの資格を持ち、一人ひとりの肌トーンに合ったカラーを提案することが得意。',
    src: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: '田中 理沙',
    nameEn: 'Risa Tanaka',
    role: 'Stylist',
    specialty: 'パーマ・トリートメント',
    bio: 'ヘアケアスペシャリストとして、髪質改善に特化した施術を行う。傷んだ髪を再生させるトリートメント技術と、自然なウェーブを作るパーマを得意とする。',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]
</script>

<template>
  <section id="stylist" class="bg-blanc-bg py-28 md:py-40 px-6">
    <div ref="target" class="max-w-5xl mx-auto">

      <!-- Heading -->
      <div class="mb-16">
        <p :class="['reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4', inView && 'in-view']">
          STYLIST
        </p>
        <h2 :class="['reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary', inView && 'in-view']">
          Our Team
        </h2>
      </div>

      <!-- Stylist cards -->
      <div class="grid md:grid-cols-2 gap-10 md:gap-16">
        <div
          v-for="(s, i) in stylists"
          :key="s.name"
          :class="['reveal', `reveal-delay-${i + 1}`, inView && 'in-view', 'flex flex-col gap-6']"
        >
          <div class="relative overflow-hidden aspect-[4/5]">
            <img
              :src="s.src"
              :alt="s.name"
              class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-baseline gap-4">
              <p class="font-garamond text-2xl italic font-light text-blanc-primary">{{ s.name }}</p>
              <p class="font-josefin text-[10px] tracking-widest text-blanc-muted">{{ s.nameEn }}</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="thin-rule" />
              <p class="font-josefin text-[10px] tracking-[0.3em] text-blanc-accent">{{ s.role }}</p>
            </div>
            <p class="font-josefin text-[11px] tracking-widest text-blanc-muted">担当: {{ s.specialty }}</p>
            <p class="font-jp text-sm text-blanc-muted leading-8">{{ s.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
