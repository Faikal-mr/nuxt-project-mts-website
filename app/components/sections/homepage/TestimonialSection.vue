<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import Container from '@/components/ui/Container.vue'
  import SectionTitle from '@/components/ui/SectionTitle.vue'
  import { TESTIMONIAL_LIST } from '@/constants/homepage'

  const current = ref(0)

  let interval: ReturnType<typeof setInterval> | null = null

  const nextSlide = () => {
    current.value = (current.value + 1) % TESTIMONIAL_LIST.length
  }

  const setSlide = (i: number) => {
    current.value = i
  }

  onMounted(() => {
    interval = setInterval(nextSlide, 5000)
  })

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })
</script>

<template>
  <section class="py-24 bg-gray-50">
    <Container>
      <!-- Title -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <SectionTitle normal="Testimoni" accent="Orang Tua" />

        <p class="text-gray-500 mt-4">
          Beberapa pengalaman dari orang tua siswa mengenai proses pendidikan di sekolah.
        </p>
      </div>

      <!-- Slider -->
      <div class="max-w-2xl mx-auto text-center">
        <Transition name="fade" mode="out-in">
          <div :key="TESTIMONIAL_LIST[current]?.id" class="bg-white p-8 rounded-xl shadow-sm">
            <!-- Quote -->
            <p class="text-gray-600 leading-relaxed text-lg">
              “{{ TESTIMONIAL_LIST[current]?.content }}”
            </p>

            <!-- User -->
            <div class="mt-6 flex items-center justify-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold"
              >
                {{ TESTIMONIAL_LIST[current]?.name.charAt(0) }}
              </div>

              <div class="text-left">
                <p class="text-sm font-semibold text-gray-800">
                  {{ TESTIMONIAL_LIST[current]?.name }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ TESTIMONIAL_LIST[current]?.role }}
                </p>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(item, index) in TESTIMONIAL_LIST"
            :key="item.id"
            @click="setSlide(index)"
            class="h-2 rounded-full transition-all"
            :class="index === current ? 'w-6 bg-green-600' : 'w-2 bg-gray-300'"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
