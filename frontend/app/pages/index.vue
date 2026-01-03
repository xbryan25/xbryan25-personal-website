<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  },
});
</script>

<template>
  <div class="flex-1 flex items-center justify-center h-full">
    <div class="flex flex-col items-center gap-8 mb-15">
      <NuxtImg src="/images/self-portrait.jpg" class="rounded-full aspect-square w-32" />
      <div class="flex gap-5 pr-16">
        <p class="font-bold text-7xl">Bryan Agan</p>
        <USeparator orientation="vertical" class="h-20" color="primary" size="xl" />
        <p class="font-bold text-7xl">xbryan25</p>
      </div>
      <p class="font-semibold text-xl">A full-stack web developer</p>
      <div class="flex gap-10">
        <a
          href="https://www.linkedin.com/in/bryan-agan-42ba0b202/"
          target="_blank"
          class="rounded-md aspect-square w-12 dark:hover:bg-neutral-700 hover:bg-neutral-200"
        >
          <NuxtImg
            :src="isDark ? '/images/linkedin.png' : '/images/linkedin-dark.png'"
            class="w-full h-full object-cover"
            alt="Build image"
          />
        </a>
        <a
          href="https://github.com/xbryan25"
          target="_blank"
          class="rounded-md aspect-square w-12 dark:hover:bg-neutral-700 hover:bg-neutral-200"
        >
          <NuxtImg
            :src="isDark ? '/images/github.png' : '/images/github-dark.png'"
            class="w-full h-full object-cover"
            alt="Build image"
          />
        </a>
        <a
          href="mailto:bryanaganp25@gmail.com"
          class="rounded-md aspect-square w-12 dark:hover:bg-neutral-700 hover:bg-neutral-200"
        >
          <NuxtImg
            :src="isDark ? '/images/email.png' : '/images/email-dark.png'"
            class="w-full h-full object-cover"
            alt="Build image"
          />
        </a>
      </div>
    </div>
  </div>
</template>
