<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import Container from '@/components/ui/Container.vue'
  import { STATS_LIST } from '@/constants/homepage'
  import { useCounter } from '@/composables/useCounter'

  const sectionRef = ref<HTMLElement | null>(null)
  const started = ref(false)

  const counters: ReturnType<typeof useCounter>[] = STATS_LIST.map((item) => useCounter(item.value))

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.value) {
            counters.forEach((c) => c.start())
            started.value = true
          }
        })
      },
      { threshold: 0.4 }
    )

    if (sectionRef.value) {
      observer.observe(sectionRef.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
</script>

<template>
  <section ref="sectionRef" class="relative py-28 overflow-hidden text-white">
    <!-- Background -->
    <div class="absolute inset-0">
      <NuxtImg
        src="/images/sekolah2.webp"
        alt="Lingkungan Sekolah"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-green-900/80"></div>
    </div>

    <Container class="relative z-10">
      <!-- Title -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-semibold">Data Singkat Sekolah</h2>

        <p class="mt-4 text-green-100">Gambaran umum mengenai kondisi dan perkembangan sekolah.</p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in STATS_LIST"
          :key="item.id"
          class="p-6 rounded-xl bg-white/10 backdrop-blur-sm text-center"
        >
          <!-- Icon -->
          <div class="flex justify-center mb-3">
            <Icon :name="item.icon" class="text-3xl text-white" />
          </div>

          <!-- Number -->
          <p class="text-4xl font-semibold">{{ counters[index]?.count ?? 0 }}+</p>

          <!-- Label -->
          <p class="mt-2 text-sm text-green-100">
            {{ item.label }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
