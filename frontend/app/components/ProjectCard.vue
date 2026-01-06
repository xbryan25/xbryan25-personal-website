<script setup lang="ts">
const props = defineProps<{
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
  usedTechnologies: string[];
}>();
</script>

<template>
  <div class="flex flex-col border-2 rounded-xl h-full">
    <div class="flex gap-2 pt-4 px-4 pb-1">
      <h2 class="flex-1 font-bold text-2xl">{{ props.projectTitle }}</h2>

      <a :href="props.projectLink" target="_blank" class="flex">
        <UIcon
          name="mdi:github"
          class="h-8 w-8 rounded-md dark:hover:bg-neutral-400 hover:bg-neutral-600"
        />
      </a>
    </div>

    <div class="flex-1 px-4 py-2 text-justify">
      <p>
        {{ props.projectDescription }}
      </p>
    </div>

    <div class="p-4">
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="(tech, index) in props.usedTechnologies"
          :key="index"
          :label="tech"
          variant="subtle"
        />
      </div>
    </div>
  </div>
</template>
