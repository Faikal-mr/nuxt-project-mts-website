<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { FOOTER_DATA } from '@/constants/footer'

const { school, navigation, contacts, socials } = FOOTER_DATA

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 pt-20 pb-10">
    <Container>
      <!-- Grid -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- School Info -->

        <div>
          <h3 class="text-white text-xl font-semibold mb-4">
            {{ school.name }}
          </h3>

          <p class="text-gray-400 leading-relaxed text-sm">
            {{ school.description }}
          </p>
        </div>

        <!-- Navigation -->

        <div>
          <h4 class="text-white font-semibold mb-4">Navigasi</h4>

          <ul class="space-y-2">
            <li v-for="navItem in navigation" :key="navItem.path">
              <NuxtLink
                :to="navItem.path"
                class="hover:text-white transition text-sm"
              >
                {{ navItem.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->

        <div>
          <h4 class="text-white font-semibold mb-4">Kontak</h4>

          <ul class="space-y-3 text-gray-400">
            <li
              v-for="contactItem in contacts"
              :key="contactItem.text"
              class="flex items-start gap-2 text-sm"
            >
              <span>{{ contactItem.icon }}</span>
              <span>{{ contactItem.text }}</span>
            </li>
          </ul>
        </div>

        <!-- Social -->

        <div>
          <h4 class="text-white font-semibold mb-4">Ikuti Kami</h4>

          <div class="flex gap-4">
            <a
              v-for="socialItem in socials"
              :key="socialItem.name"
              :href="socialItem.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon hover:text-white transition text-sm"
            >
              {{ socialItem.icon }}
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->

      <div class="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © {{ currentYear }} {{ school.name }}. Semua Hak Dilindungi.
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2937;
  border-radius: 999px;
  transition: all 0.3s ease;
  font-size: 14px;
}

.social-icon:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}
</style>