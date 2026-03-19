<script setup lang="ts">
  import HeroSection from '@/components/sections/homepage/HeroSection.vue'
  import AboutSection from '@/components/sections/homepage/AboutSection.vue'
  import CharacterSection from '~/components/sections/homepage/CharacterSection.vue'
  import ProgramSection from '~/components/sections/homepage/ProgramSection.vue'
  import StatsSection from '~/components/sections/homepage/StatsSection.vue'
  import TestimonialSection from '~/components/sections/homepage/TestimonialSection.vue'
  import NewsSection from '~/components/sections/homepage/NewsSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <CharacterSection />
    <ProgramSection />
    <StatsSection />
    <TestimonialSection />
    <NewsSection />
  </div>
</template>
