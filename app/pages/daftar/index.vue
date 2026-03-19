<script setup>
  const token = ref('')

  async function submit() {
    try {
      await $fetch('/api/verify-token', {
        method: 'POST',
        body: { token: token.value }
      })

      // ✅ simpan session (cookie)
      const cookie = useCookie('access_token')
      cookie.value = token.value

      // redirect ke form
      navigateTo('/form')
    } catch (err) {
      alert('Token tidak valid')
    }
  }
</script>

<template>
  <div>
    <input v-model="token" placeholder="Masukkan token" />
    <button @click="submit">Masuk</button>
  </div>
</template>
