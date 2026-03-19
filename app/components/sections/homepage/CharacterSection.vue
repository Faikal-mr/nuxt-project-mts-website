<script setup lang="ts">
  import Container from '@/components/ui/Container.vue'
  import SectionTitle from '@/components/ui/SectionTitle.vue'
  import { CHARACTER_LIST } from '@/constants/homepage'
</script>

<template>
  <section class="bg-white py-24">
    <Container>
      <!-- Title -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <SectionTitle normal="Karakter" accent="Pendidikan" />

        <p class="text-gray-500 mt-4">
          Nilai-nilai yang ditanamkan dalam proses pendidikan untuk membentuk pribadi yang
          berakhlak, mandiri, dan bertanggung jawab.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="item in CHARACTER_LIST"
          :key="item.title"
          class="p-6 rounded-xl border border-gray-100 hover:shadow-md transition text-center"
        >
          <!-- Icon -->
          <div class="flex justify-center mb-4">
            <Icon :name="item.icon" class="text-green-600 text-3xl" />
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-lg mb-2 text-gray-800">
            {{ item.title }}
          </h3>

          <!-- Desc -->
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
