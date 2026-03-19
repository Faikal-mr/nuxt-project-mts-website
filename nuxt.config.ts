import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxtjs/supabase', 'nuxt-security'],

  css: ['~/assets/css/main.css'],

  supabase: {
    redirect: false // biar tidak auto redirect auth
  },

  runtimeConfig: {
    midtransServerKey: process.env.MIDTRANS_SERVER_KEY,

    public: {
      midtransClientKey: process.env.MIDTRANS_CLIENT_KEY
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
