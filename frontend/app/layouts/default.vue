<script setup lang="ts">
const route = useRoute();

const isActive = (path: string) => {
  if (route.path === path) return true;

  return false;
};

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Education', to: '/education' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
];

const width = ref(0);
const height = ref(0);

onMounted(() => {
  // This code only runs on client
  width.value = window.innerWidth;
  height.value = window.innerHeight;

  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  });
});
</script>

<template>
  <div class="flex flex-col min-h-screen items-center">
    <div class="w-full flex justify-center mt-5">
      <div
        v-if="width >= 640"
        class="flex items-center gap-1 sm:gap-3 border-2 border-neutral-900 dark:border-neutral-50 py-1 px-1 sm:px-4 rounded-full"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="font-semibold text-sm"
          :class="{
            'text-neutral-800 dark:text-neutral-100': isActive(link.to),
            'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100': !isActive(
              link.to,
            ),
          }"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          href="/pdfs/xbryan25-latest-resume.pdf"
          target="_blank"
          rel="noopener"
          class="font-semibold text-sm cursor-pointer text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          Resume
        </a>
        <ColorModeButton class="cursor-pointer" />
      </div>

      <div
        v-else
        class="flex flex-col justify-center sm:gap-3 border-2 border-neutral-900 dark:border-neutral-50 py-2 px-6 rounded-full"
      >
        <div class="flex items-center gap-2 h-8">
          <NuxtLink
            v-for="link in links.slice(0, 3)"
            :key="link.label"
            :to="link.to"
            class="flex-1 font-semibold text-sm text-center"
            :class="{
              'text-neutral-800 dark:text-neutral-100': isActive(link.to),
              'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100': !isActive(
                link.to,
              ),
            }"
          >
            {{ link.label }}
          </NuxtLink>

          <div class="flex-1 flex justify-center">
            <ColorModeButton class="cursor-pointer" />
          </div>
        </div>

        <div class="flex items-center gap-2 h-8">
          <NuxtLink
            v-for="link in links.slice(3, 6)"
            :key="link.label"
            :to="link.to"
            class="flex-1 font-semibold text-sm text-center"
            :class="{
              'text-neutral-800 dark:text-neutral-100': isActive('/'),
              'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100': !isActive('/'),
            }"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="/pdfs/xbryan25-latest-resume.pdf"
            target="_blank"
            rel="noopener"
            class="flex-1 font-semibold text-sm cursor-pointer text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            Resume
          </a>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>
