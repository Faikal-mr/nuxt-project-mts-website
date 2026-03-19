<script setup lang="ts">
import Navbar from '@/components/common/Navbar.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Isi halaman -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>