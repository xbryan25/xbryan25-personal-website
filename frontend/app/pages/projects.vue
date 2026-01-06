<script setup lang="ts">
useHead({
  title: 'Projects',
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
  <div class="flex-1 flex justify-center h-full mb-15">
    <div class="class flex flex-col items-center max-w-200 gap-10">
      <p
        class="font-bold text-7xl mt-15 opacity-0 scale-10 transition-all duration-750 ease-out"
        :class="show ? 'opacity-100 scale-100' : ''"
      >
        My Recent Projects
      </p>

      <ProjectCards />
    </div>
  </div>
</template>
