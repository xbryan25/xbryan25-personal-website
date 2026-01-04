<script setup lang="ts">
const route = useRoute();

const isActive = (path: string) => {
  if (route.path === path) return true;

  return false;
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="w-full flex justify-center mt-5">
      <div
        class="flex items-center gap-6 border border-neutral-900 dark:border-neutral-50 py-1 px-4 rounded-2xl"
      >
        <NuxtLink
          to="/"
          class="font-semibold"
          :class="{
            'text-neutral-800 dark:text-neutral-100': isActive('/'),
            'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100': !isActive('/'),
          }"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="font-semibold"
          :class="{
            'text-neutral-800 dark:text-neutral-100': isActive('/about'),
            'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100':
              !isActive('/about'),
          }"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/skills"
          class="font-semibold"
          :class="{
            'text-neutral-800 dark:text-neutral-100': isActive('/skills'),
            'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100':
              !isActive('/skills'),
          }"
        >
          Skills
        </NuxtLink>
        <NuxtLink
          to="/education"
          class="font-semibold"
          :class="{
            'text-neutral-800 dark:text-neutral-100': isActive('/education'),
            'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100':
              !isActive('/education'),
          }"
        >
          Education
        </NuxtLink>
        <NuxtLink
          to="/experience"
          class="font-semibold"
          :class="{
            'text-neutral-800 dark:text-neutral-100': isActive('/experience'),
            'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100':
              !isActive('/experience'),
          }"
        >
          Experience
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="font-semibold"
          :class="{
            'text-neutral-800 dark:text-neutral-100': isActive('/projects'),
            'text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100':
              !isActive('/projects'),
          }"
        >
          Projects
        </NuxtLink>
        <p
          class="font-semibold cursor-pointer text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          Resume
        </p>
        <ColorModeButton class="cursor-pointer" />
      </div>
    </div>

    <slot />
  </div>
</template>
