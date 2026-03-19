<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <button
    class="px-6 py-3 rounded-lg font-semibold transition"
    :class="{
      'bg-primary text-white hover:bg-primary-dark': variant === 'primary',

      'bg-accent text-white hover:opacity-90': variant === 'accent',

      'border border-white text-white hover:bg-white hover:text-primary hover:border-primary':
        variant === 'outline',
    }"
  >
    <slot />
  </button>
</template>
