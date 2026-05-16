export function useInView(threshold = 0.15) {
  const target = ref<HTMLElement | null>(null)
  const inView = ref(false)

  onMounted(() => {
    if (!target.value) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) inView.value = true },
      { threshold },
    )
    observer.observe(target.value)
    onUnmounted(() => observer.disconnect())
  })

  return { target, inView }
}
