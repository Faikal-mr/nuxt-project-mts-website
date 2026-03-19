<script setup lang="ts">
  import Container from '@/components/ui/Container.vue'
  import Button from '@/components/ui/Button.vue'
  import SectionTitle from '@/components/ui/SectionTitle.vue'
  import { formatDate } from '@/utils/formatDate'
  import { truncateText } from '@/utils/truncateText'
  import { useNews } from '@/composables/useNews'

  const { news, loading } = useNews()
</script>

<template>
  <section class="bg-gray-50 py-24">
    <Container>
      <!-- Header -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <SectionTitle normal="Berita &" accent="Kegiatan" />
        <p class="mt-4 text-gray-500">
          Informasi kegiatan dan perkembangan terbaru di lingkungan sekolah.
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center text-gray-500">Memuat data...</div>

      <!-- Grid -->
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="item in news ?? []"
          :key="item.id"
          class="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition"
        >
          <NuxtLink :to="`/berita/${item.slug}`">
            <!-- Image -->
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="item.image || '/images/placeholder.webp'"
                :alt="item.title"
                class="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                width="400"
                height="250"
              />

              <!-- Date -->
              <div
                class="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-xs text-gray-700"
              >
                {{ formatDate(item.created_at) }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3 class="text-base font-semibold text-gray-800 hover:text-green-600 transition">
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm text-gray-600 leading-relaxed">
                {{ truncateText(item.content, 100) }}
              </p>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <NuxtLink to="/berita">
          <Button class="px-5 py-2"> Lihat Semua Berita </Button>
        </NuxtLink>
      </div>
    </Container>
  </section>
</template>
