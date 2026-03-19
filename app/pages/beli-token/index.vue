<script setup>
  const email = ref('')
  const loading = ref(false)
  const error = ref('')

  async function beli() {
    loading.value = true
    error.value = ''

    try {
      const res = await $fetch('/api/create-payment', {
        method: 'POST',
        body: {
          email: email.value
        }
      })

      console.log('RES:', res) // 🔥 lihat hasil API

      window.snap.pay(res.token)
    } catch (err) {
      console.error('ERROR:', err) // 🔥 lihat error asli
      error.value = 'Gagal memulai pembayaran'
    } finally {
      loading.value = false
    }
  }
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
  >
    <div
      class="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      <!-- TITLE -->
      <h1 class="text-2xl font-bold text-white text-center mb-2">Beli Token Akses</h1>
      <p class="text-gray-400 text-center mb-6">Lakukan pembayaran untuk mendapatkan token</p>

      <!-- FORM -->
      <form @submit.prevent="beli" class="space-y-4">
        <!-- EMAIL -->
        <input
          v-model="email"
          type="email"
          placeholder="Masukkan email"
          class="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <!-- ERROR -->
        <p v-if="error" class="text-red-400 text-sm">
          {{ error }}
        </p>

        <!-- BUTTON -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition disabled:opacity-50"
        >
          <span v-if="loading">Memproses...</span>
          <span v-else>Bayar Sekarang</span>
        </button>
      </form>

      <!-- INFO -->
      <p class="text-gray-500 text-sm text-center mt-6">
        Setelah pembayaran berhasil, token akan dikirim ke email Anda.
      </p>
    </div>
  </div>
</template>
