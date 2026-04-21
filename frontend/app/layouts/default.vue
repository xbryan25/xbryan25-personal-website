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
</script>

<template>
  <div class="flex flex-col min-h-screen items-center">
    <div class="w-full flex justify-center mt-5">
      <div
        class="flex flex-wrap items-center gap-1 sm:gap-3 border-2 border-neutral-900 dark:border-neutral-50 py-2 px-1 sm:px-4 rounded-full"
      >
        <div class="flex items-center gap-1 sm:gap-3 w-full sm:w-auto pt-1 sm:pt-0">
          <NuxtLink
            v-for="link in links.slice(0, 4)"
            :key="link.label"
            :to="link.to"
            class="flex-1 sm:flex-none font-semibold text-sm text-center"
            :class="{
              'text-neutral-800 dark:text-neutral-100': isActive(link.to),
              'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100': !isActive(
                link.to,
              ),
            }"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="flex items-center gap-1 sm:gap-3 w-full sm:w-auto">
          <NuxtLink
            v-for="link in links.slice(4)"
            :key="link.label"
            :to="link.to"
            class="flex-1 sm:flex-none font-semibold text-sm text-center"
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
            href="/pdfs/xbryan25-latest-resume-april-2026.pdf"
            target="_blank"
            rel="noopener"
            class="font-semibold text-sm cursor-pointer text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            Resume
          </a>

          <ClientOnly>
            <div class="flex-1 flex justify-center">
              <ColorModeButton class="cursor-pointer p-0" />
            </div>
            <template #fallback>
              <div class="flex-1 flex justify-center">
                <Icon name="i-lucide-ellipsis" class="w-5 h-5" />
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>

      <!-- <div
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
          href="/pdfs/xbryan25-latest-resume-april-2026.pdf"
          target="_blank"
          rel="noopener"
          class="font-semibold text-sm cursor-pointer text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          Resume
        </a>
        <ColorModeButton class="cursor-pointer" />
      </div>

      <div
        class="flex sm:hidden flex-col justify-center border-2 border-neutral-900 dark:border-neutral-50 py-2 px-6 rounded-full"
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
              'text-neutral-800 dark:text-neutral-100': isActive(link.to),
              'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100': !isActive(
                link.to,
              ),
            }"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="/pdfs/xbryan25-latest-resume-april-2026.pdf"
            target="_blank"
            rel="noopener"
            class="flex-1 font-semibold text-sm cursor-pointer text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            Resume
          </a>
        </div>
      </div> -->
    </div>

    <slot />
  </div>
</template>
