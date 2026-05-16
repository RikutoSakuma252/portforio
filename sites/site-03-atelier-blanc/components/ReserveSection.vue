<script setup lang="ts">
const { target, inView } = useInView()
</script>

<template>
  <section id="reserve" class="bg-blanc-primary py-28 md:py-44 px-6">
    <div ref="target" class="max-w-2xl mx-auto text-center">
      <p :class="['reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-8', inView && 'in-view']">
        RESERVATION
      </p>
      <h2 :class="['reveal reveal-delay-1 font-garamond text-4xl md:text-5xl lg:text-6xl italic font-light text-blanc-white leading-snug mb-6', inView && 'in-view']">
        特別な時間を、<br />ご一緒に。
      </h2>
      <p :class="['reveal reveal-delay-2 font-jp text-blanc-accent text-sm leading-8 mb-14', inView && 'in-view']">
        初回限定でカット20%OFFのウェルカムオファーをご用意しております。
      </p>

      <!-- Contact options -->
      <div :class="['reveal reveal-delay-3 grid sm:grid-cols-2 gap-4 mb-10', inView && 'in-view']">
        <!-- LINE -->
        <a
          href="#"
          class="flex items-center justify-center gap-3 border border-blanc-accent/40 text-blanc-white hover:bg-blanc-accent/10 transition-colors duration-300 py-5 px-8"
        >
          <svg class="w-5 h-5 text-blanc-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          <span class="font-josefin text-[11px] tracking-[0.3em]">LINE で予約</span>
        </a>

        <!-- Phone -->
        <a
          href="tel:03-5428-7392"
          class="flex items-center justify-center gap-3 border border-blanc-accent/40 text-blanc-white hover:bg-blanc-accent/10 transition-colors duration-300 py-5 px-8"
        >
          <svg class="w-5 h-5 text-blanc-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="font-josefin text-[11px] tracking-[0.3em]">03-5428-7392</span>
        </a>
      </div>

      <p :class="['reveal reveal-delay-4 font-jp text-blanc-muted text-xs', inView && 'in-view']">
        ※ 完全予約制です。当日のご連絡はお電話にてお願いいたします。
      </p>
    </div>
  </section>
</template>
