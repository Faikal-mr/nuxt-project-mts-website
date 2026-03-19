<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import Container from '@/components/ui/Container.vue'
  import { NAV_MENU } from '@/constants/navigation'
  import { SITE_INFO } from '@/constants/site'

  const isMenuOpen = ref(false)
  const isScrolled = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const navMenu = NAV_MENU
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
    :class="
      isScrolled
        ? 'bg-white shadow-md border-b text-gray-800'
        : 'bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-sm text-white'
    "
  >
    <Container>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3" @click="closeMenu">
          <img src="/assets/images/ujang.svg" alt="Logo" class="h-10" />

          <div class="leading-tight">
            <p class="font-semibold text-sm drop-shadow-sm">
              {{ SITE_INFO.name }}
            </p>
            <p class="text-xs opacity-80">
              {{ SITE_INFO.subName }}
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop -->
        <nav class="hidden md:flex items-center gap-8 font-medium">
          <NuxtLink
            v-for="menu in navMenu"
            :key="menu.path"
            :to="menu.path"
            class="transition"
            :class="
              isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/90 hover:text-white'
            "
          >
            {{ menu.name }}
          </NuxtLink>
        </nav>

        <!-- Mobile -->
        <button class="md:hidden text-2xl" @click="toggleMenu" aria-label="Toggle Menu">☰</button>
      </div>
    </Container>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white border-t text-gray-700">
      <Container>
        <div class="flex flex-col py-6 gap-4 font-medium">
          <NuxtLink
            v-for="menu in navMenu"
            :key="menu.path"
            :to="menu.path"
            @click="closeMenu"
            class="hover:text-green-600 transition"
          >
            {{ menu.name }}
          </NuxtLink>
        </div>
      </Container>
    </div>
  </header>
</template>
