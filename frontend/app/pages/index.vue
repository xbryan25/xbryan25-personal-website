<script setup lang="ts">
definePageMeta({
  head: {
    link: { rel: 'preload', as: 'image', href: '/images/self-portrait.jpg' },
  },
});

useHead({
  title: 'Home',
});

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  },
});

const show = ref(false);

onMounted(() => {
  // Trigger animation on mount
  requestAnimationFrame(() => {
    show.value = true;
  });
});
</script>

<template>
  <div class="flex-1 flex items-center justify-center h-full">
    <div class="flex flex-col items-center gap-8 mb-15">
      <NuxtImg
        src="/images/self-portrait.jpg"
        class="rounded-full aspect-square w-32 opacity-0 scale-10 transition-all duration-2000 ease-out"
        :class="show ? 'opacity-100 scale-100' : ''"
      />

      <div class="flex gap-5 pr-16">
        <SparklesText
          text="Bryan Agan"
          :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
          :sparkles-count="10"
          class="font-bold text-7xl"
        />
        <USeparator orientation="vertical" class="h-20" color="primary" size="xl" />
        <SparklesText
          text="xbryan25"
          :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
          :sparkles-count="10"
          class="font-bold text-7xl"
        />
      </div>

      <LetterPullup words="A full-stack web developer" class="font-semibold text-xl" />

      <ClientOnly>
        <BlurReveal :delay="3" :duration="2">
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
        </BlurReveal>
      </ClientOnly>
    </div>
  </div>
</template>
