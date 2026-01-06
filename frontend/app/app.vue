<script setup lang="ts">
useHead({
  meta: [{ name: 'description', content: 'xbryan25 | Portfolio' }],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style global>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
