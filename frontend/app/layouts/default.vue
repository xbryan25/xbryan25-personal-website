<template>
  <div class="flex flex-col mt-5">
    <div class="w-full flex justify-center">
      <div
        class="flex items-center gap-6 border border-neutral-900 dark:border-neutral-50 py-1 px-4 rounded-2xl"
      >
        <NuxtLink to="/" class="font-semibold">Home</NuxtLink>
        <NuxtLink to="/about" class="font-semibold">About</NuxtLink>
        <NuxtLink to="/skills" class="font-semibold">Skills</NuxtLink>
        <NuxtLink to="/education" class="font-semibold">Education</NuxtLink>
        <NuxtLink to="/experience" class="font-semibold">Experience</NuxtLink>
        <NuxtLink to="/projects" class="font-semibold">Projects</NuxtLink>
        <p class="font-semibold cursor-pointer">Resume</p>
        <UColorModeButton class="cursor-pointer" />
      </div>
    </div>

    <slot />
  </div>
</template>
