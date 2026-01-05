<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';

const show = ref(false);

const experienceItems: TimelineItem[] = [
  {
    date: 'June 2025 - August 2025',
    title: 'SkoolTek',
    icon: 'material-symbols:work',
    description: 'Software Developer Intern',
  },
];

const active = ref(-1);
let intervalId: number | undefined;

onMounted(() => {
  // Trigger animation on mount
  requestAnimationFrame(() => {
    show.value = true;
  });

  intervalId = window.setInterval(() => {
    active.value = (active.value + 1) % (experienceItems.length + 1);
  }, 750);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="flex-1 flex justify-center h-full">
    <div class="class flex flex-col items-center max-w-200 gap-20">
      <p
        class="font-bold text-7xl mt-15 opacity-0 scale-10 transition-all duration-750 ease-out"
        :class="show ? 'opacity-100 scale-100' : ''"
      >
        My Experience
      </p>

      <UTimeline
        v-model="active"
        reverse
        :items="experienceItems"
        size="3xl"
        :ui="{
          item: 'even:flex-row-reverse even:-translate-x-[calc(100%-3rem)] even:text-right',
          container: 'h-50',
        }"
        class="translate-x-[calc(50%-1rem)]"
      />
    </div>
  </div>
</template>
