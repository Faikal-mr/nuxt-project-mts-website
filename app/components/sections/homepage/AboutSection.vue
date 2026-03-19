<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import Button from '@/components/ui/Button.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { ABOUT_DATA } from '@/constants/about'

const aboutData = ABOUT_DATA
</script>

<template>
  <section class="bg-gray-50 py-24">
    <Container>
      <div class="grid md:grid-cols-2 gap-16 items-center">

        <!-- IMAGE -->
        <div class="relative group">

          <NuxtImg
            :src="aboutData.image"
            alt="Lingkungan Sekolah"
            class="rounded-xl shadow-md object-cover transition duration-500 group-hover:scale-[1.02]"
            width="600"
            height="400"
          />

          <!-- Badge -->
          <div
            class="absolute -bottom-5 -right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-md"
          >
            <p class="text-xl font-semibold">
              {{ aboutData.experience.value }}
            </p>
            <p class="text-xs opacity-90">
              {{ aboutData.experience.label }}
            </p>
          </div>

        </div>

        <!-- CONTENT -->
        <div class="space-y-6">

          <SectionTitle normal="Tentang" accent="Sekolah" />

          <div class="space-y-4">
            <p
              v-for="descItem in aboutData.description"
              :key="descItem"
              class="text-gray-600 leading-relaxed"
            >
              {{ descItem }}
            </p>
          </div>

          <div class="pt-2">
            <NuxtLink to="/tentang">
              <Button class="px-5 py-2">
                Selengkapnya
              </Button>
            </NuxtLink>
          </div>

        </div>

      </div>
    </Container>
  </section>
</template>