<script setup>
defineProps({
  normal: String,
  accent: String,
})
</script>

<template>
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
    {{ normal }}

    <span class="border-b-[3px] border-red-500 pb-1 ml-1">
      {{ accent }}
    </span>
  </h2>
</template>
