<script setup lang="ts">
  import Container from '@/components/ui/Container.vue'
  import SectionTitle from '@/components/ui/SectionTitle.vue'
  import { PROGRAM_LIST } from '@/constants/homepage'
</script>

<template>
  <section class="bg-gray-50 py-24">
    <Container>
      <!-- Title -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <SectionTitle normal="Program" accent="Pendidikan" />

        <p class="text-gray-500 mt-4">
          Program pembelajaran yang dirancang untuk mendukung perkembangan akademik dan pembentukan
          karakter siswa secara seimbang.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="item in PROGRAM_LIST"
          :key="item.title"
          class="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition"
        >
          <!-- Icon -->
          <div class="mb-4">
            <Icon :name="item.icon" class="text-green-600 text-3xl" />
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-lg text-gray-800 mb-2">
            {{ item.title }}
          </h3>

          <!-- Desc -->
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
