<script setup lang="ts">
const { target, inView } = useInView()

const steps = [
  { num: '01', title: 'ご予約',           desc: 'LINEまたはお電話にて。ご希望の日時をお伝えください。' },
  { num: '02', title: 'カウンセリング',    desc: 'ご来店後、ご希望・お悩みを丁寧に伺います。' },
  { num: '03', title: '施術',             desc: '完全個室でリラックスしながら施術をお受けいただけます。' },
  { num: '04', title: 'アフターフォロー', desc: 'ホームケアのアドバイスや次回のご提案をいたします。' },
]
</script>

<template>
  <section id="flow" class="bg-blanc-light py-28 md:py-40 px-6">
    <div ref="target" class="max-w-5xl mx-auto">

      <!-- Heading -->
      <div class="mb-16">
        <p :class="['reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4', inView && 'in-view']">
          HOW IT WORKS
        </p>
        <h2 :class="['reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary', inView && 'in-view']">
          Flow
        </h2>
      </div>

      <!-- Steps -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
        <div
          v-for="(s, i) in steps"
          :key="s.num"
          :class="[
            'reveal',
            `reveal-delay-${i + 1}`,
            inView && 'in-view',
            'relative flex flex-col gap-5 p-8 border-t border-blanc-accent/30',
          ]"
        >
          <!-- Step number -->
          <span class="font-garamond text-5xl font-light text-blanc-accent/40 leading-none">{{ s.num }}</span>
          <div class="h-px w-8 bg-blanc-accent" />
          <h3 class="font-jp text-blanc-primary text-sm font-medium">{{ s.title }}</h3>
          <p class="font-jp text-blanc-muted text-xs leading-7">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
