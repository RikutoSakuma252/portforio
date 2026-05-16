<script setup lang="ts">
const { target, inView } = useInView()

const info = [
  { label: '住所',   value: '東京都渋谷区神南1-15-8 BLANCビル3F' },
  { label: 'アクセス', value: 'JR山手線・渋谷駅 ハチ公口 徒歩5分 / 東京メトロ銀座線・渋谷駅 A2出口 徒歩4分' },
  { label: 'TEL',    value: '03-5428-7392' },
  { label: '営業時間', value: '10:00 — 20:00（最終受付 19:00）' },
  { label: '定休日', value: '毎週火曜日' },
]
</script>

<template>
  <section id="access" class="bg-blanc-bg py-28 md:py-40 px-6">
    <div ref="target" class="max-w-5xl mx-auto">

      <!-- Heading -->
      <div class="mb-16">
        <p :class="['reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4', inView && 'in-view']">
          ACCESS
        </p>
        <h2 :class="['reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary', inView && 'in-view']">
          Visit Us
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <!-- Map -->
        <div :class="['reveal', inView && 'in-view']">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2!2d139.6994!3d35.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca6f3e3c0d1%3A0x6c9bb1d54cb0cc8!2z5riL6LC3!5e0!3m2!1sja!2sjp!4v1700000000001!5m2!1sja!2sjp"
            class="w-full h-72 border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="atelier BLANC アクセスマップ"
          />
        </div>

        <!-- Info -->
        <div :class="['reveal reveal-delay-1 flex flex-col gap-0', inView && 'in-view']">
          <div
            v-for="item in info"
            :key="item.label"
            class="py-6 border-b border-blanc-light flex flex-col gap-1.5 first:border-t"
          >
            <p class="font-josefin text-[10px] tracking-[0.4em] text-blanc-accent">{{ item.label }}</p>
            <p class="font-jp text-sm text-blanc-primary leading-7">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
