<script setup>
  const email = ref('')

  async function beli() {
    console.log('CLICKED 🔥')

    const res = await $fetch('/api/create-payment', {
      method: 'POST',
      body: {
        email: email.value
      }
    })

    console.log('TOKEN:', res)

    window.snap.pay(res.token)
  }
</script>

<template>
  <div class="p-10">
    <h1>Beli Token</h1>

    <input v-model="email" placeholder="email" />

    <button type="button" @click="beli">Bayar</button>
  </div>
</template>
