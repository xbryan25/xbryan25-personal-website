<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';

useHead({
  title: 'Education',
});

const show = ref(false);

const educationItems: TimelineItem[] = [
  {
    date: 'Since 2023',
    title: 'Mindanao State University - Iligan Institute of Technology',
    icon: 'vaadin:diploma-scroll',
    description: 'Bachelor of Science in Computer Science',
  },
  {
    date: '2017 to 2023',
    title: 'Philippine Science High School - Central Mindanao Campus',
    icon: 'material-symbols:man',
    description: 'High School (With High Honors)',
  },
  {
    date: '2011 to 2017',
    title: 'Corpus Christi Parochial School of Iligan',
    icon: 'bx:child',
    description: 'Elementary (With Honors)',
  },
];

const active = ref(-1);
let intervalId: number | undefined;

const width = ref(0);
const height = ref(0);

onMounted(() => {
  // Trigger animation on mount
  requestAnimationFrame(() => {
    show.value = true;
  });

  intervalId = window.setInterval(() => {
    active.value = (active.value + 1) % (educationItems.length + 1);
  }, 750);

  width.value = window.innerWidth;
  height.value = window.innerHeight;

  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  });
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="flex-1 flex justify-center h-full">
    <div class="class flex flex-col items-center max-w-200 gap-20">
      <p
        class="font-bold text-5xl md:text-7xl mt-15 opacity-0 scale-10 transition-all duration-750 ease-out"
        :class="show ? 'opacity-100 scale-100' : ''"
      >
        My Education
      </p>

      <UTimeline
        v-if="width >= 960"
        v-model="active"
        reverse
        :items="educationItems"
        size="3xl"
        :ui="{
          item: 'even:flex-row-reverse even:-translate-x-[calc(100%-3rem)] even:text-right',
          container: 'h-50',
        }"
        class="translate-x-[calc(50%-1rem)]"
      />

      <UTimeline
        v-else
        v-model="active"
        reverse
        :items="educationItems"
        size="lg"
        :ui="{
          container: 'h-50',
          date: 'text-xs',
          title: 'text-xs',
          description: 'text-xs',
        }"
      />
    </div>
  </div>
</template>
