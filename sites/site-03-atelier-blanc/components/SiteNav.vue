<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Concept', href: '#concept' },
  { label: 'Service', href: '#service' },
  { label: 'Works',   href: '#works'   },
  { label: 'Reserve', href: '#reserve' },
  { label: 'Access',  href: '#access'  },
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'bg-blanc-bg/95 backdrop-blur-sm border-b border-blanc-accent/20' : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
      <a href="#" class="font-josefin text-blanc-primary text-xs tracking-[0.4em] font-light">
        atelier BLANC
      </a>

      <!-- Desktop -->
      <nav class="hidden md:flex gap-10">
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          class="font-josefin text-[11px] tracking-[0.25em] text-blanc-muted hover:text-blanc-primary transition-colors duration-300"
        >
          {{ l.label }}
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-1"
        :aria-label="menuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        @click="menuOpen = !menuOpen"
      >
        <span :class="['block w-5 h-px bg-blanc-primary transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2' : '']" />
        <span :class="['block w-5 h-px bg-blanc-primary transition-all duration-300', menuOpen ? 'opacity-0' : '']" />
        <span :class="['block w-5 h-px bg-blanc-primary transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2.5' : '']" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div
        v-if="menuOpen"
        class="md:hidden bg-blanc-bg/98 border-t border-blanc-accent/20 px-8 py-8 flex flex-col gap-6"
      >
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          class="font-josefin text-sm tracking-[0.25em] text-blanc-muted hover:text-blanc-primary transition-colors"
          @click="menuOpen = false"
        >
          {{ l.label }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
