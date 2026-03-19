<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import Container from '@/components/ui/Container.vue'
  import Button from '@/components/ui/Button.vue'
  import { HERO_DATA } from '@/constants/homepage'

  const { slides, stats } = HERO_DATA

  const currentSlide = ref(0)
  let sliderInterval: ReturnType<typeof setInterval> | null = null

  const goToNextSlide = () => {
    if (!slides.length) return
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }

  const setSlide = (index: number) => {
    currentSlide.value = index
  }

  onMounted(() => {
    sliderInterval = setInterval(goToNextSlide, 5000)
  })

  onUnmounted(() => {
    if (sliderInterval) clearInterval(sliderInterval)
  })
</script>

<template>
  <section class="relative min-h-screen pt-24 flex items-center overflow-hidden text-white">
    <!-- Background -->
    <div class="absolute inset-0">
      <NuxtImg
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide"
        class="absolute w-full h-full object-cover transition-opacity duration-1000 hero-zoom"
        :class="index === currentSlide ? 'opacity-100' : 'opacity-0'"
      />
    </div>

    <!-- Overlay (lebih soft) -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <Container class="relative z-10">
      <div class="max-w-xl space-y-8 hero-content">
        <!-- Headline -->
        <h1 class="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Pendidikan Islami untuk
          <span class="block text-green-300 mt-2"> Generasi Berakhlak dan Berilmu </span>
        </h1>

        <!-- Description -->
        <p class="text-gray-200 text-lg leading-relaxed">
          MTs Yanuri Annamira menyelenggarakan pendidikan berbasis Al-Qur’an yang dipadukan dengan
          pembelajaran akademik dalam lingkungan Islami.
        </p>

        <!-- CTA -->
        <div class="flex gap-4 pt-2">
          <NuxtLink to="/spmb">
            <Button class="px-6 py-3 bg-green-600 hover:bg-green-700">
              Informasi Pendaftaran
            </Button>
          </NuxtLink>

          <NuxtLink to="/profil">
            <Button
              variant="outline"
              class="px-6 py-3 border-white text-white hover:bg-white hover:text-black"
            >
              Profil Sekolah
            </Button>
          </NuxtLink>
        </div>

        <!-- Divider -->
        <div class="w-16 h-[2px] bg-white/40"></div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8">
          <div v-for="statItem in stats" :key="statItem.label">
            <p class="text-2xl font-semibold">
              {{ statItem.value }}
            </p>
            <p class="text-sm text-gray-300">
              {{ statItem.label }}
            </p>
          </div>
        </div>
      </div>
    </Container>

    <!-- Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="setSlide(index)"
        class="h-2 rounded-full transition-all duration-300"
        :class="index === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/40'"
      />
    </div>
  </section>
</template>

<style scoped>
  .hero-zoom {
    animation: heroZoom 12s ease-in-out infinite alternate;
    will-change: transform;
  }

  @keyframes heroZoom {
    from {
      transform: scale(1.05);
    }
    to {
      transform: scale(1.12);
    }
  }

  /* animasi content halus */
  .hero-content {
    animation: fadeUp 0.8s ease forwards;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
