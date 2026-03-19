import { ref, onUnmounted } from 'vue'

export function useCounter(target: number, duration = 1500) {
  const count = ref(0)
  let interval: ReturnType<typeof setInterval> | null = null

  const start = () => {
    let current = 0
    const step = target / (duration / 16)

    interval = setInterval(() => {
      current += step

      if (current >= target) {
        count.value = target
        if (interval) clearInterval(interval)
      } else {
        count.value = Math.floor(current)
      }
    }, 16)
  }

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })

  return { count, start }
}
