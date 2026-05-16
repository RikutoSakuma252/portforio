<script setup lang="ts">
const { target, inView } = useInView()

const works = [
  { src: 'https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Blonde Bob Cut' },
  { src: 'https://images.pexels.com/photos/2076090/pexels-photo-2076090.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Natural Highlight' },
  { src: 'https://images.pexels.com/photos/3065609/pexels-photo-3065609.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Soft Wave Perm' },
  { src: 'https://images.pexels.com/photos/1484808/pexels-photo-1484808.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Dark Ash Color' },
  { src: 'https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Sleek Straight' },
  { src: 'https://images.pexels.com/photos/2688182/pexels-photo-2688182.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Beige Brown' },
]
</script>

<template>
  <section id="works" class="bg-blanc-light py-28 md:py-40 px-6">
    <div ref="target" class="max-w-5xl mx-auto">

      <!-- Heading -->
      <div class="mb-16">
        <p :class="['reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4', inView && 'in-view']">
          WORKS
        </p>
        <h2 :class="['reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary', inView && 'in-view']">
          Style Gallery
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div
          v-for="(w, i) in works"
          :key="w.label"
          :class="[
            'reveal',
            `reveal-delay-${Math.min(i % 3 + 1, 4)}`,
            inView && 'in-view',
            'group relative overflow-hidden aspect-[3/4]',
          ]"
        >
          <img
            :src="w.src"
            :alt="w.label"
            class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-blanc-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
            <p class="font-josefin text-blanc-white text-[11px] tracking-[0.3em]">{{ w.label.toUpperCase() }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
