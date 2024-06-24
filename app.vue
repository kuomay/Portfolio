<script setup lang="ts">
useHead({
  title: 'may-portfolio',
  meta: [
    { name: 'description', content: 'may-portfolio' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(`Hello world`)' } ]
})
</script>

<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>


