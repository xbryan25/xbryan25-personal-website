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
  <div class="flex-1 flex justify-center h-full mb-15">
    <div class="class flex flex-col items-center w-[40%]">
      <p class="font-bold text-7xl mt-15">About Me</p>
      <div class="flex flex-col mt-10 gap-10">
        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-2xl">Who am I?</h2>
          <p class="text-justify">
            Hi, I'm Bryan Agan, a Full-Stack Web Developer based in Iligan City, Philippines. I'm
            also a Computer Science junior at Mindanao State University - Iligan Institute of
            Technology.
          </p>

          <p class="text-justify">
            For the past three years, I have honed my programming skills in order to build relevant
            projects. I was first exposed to the world of programming when I was in high school
            studying at Philippine Science High School - Central Mindanao Campus. However, it was
            only when I started studying at MSU-IIT that I started to take building projects
            seriously.
          </p>

          <p class="text-justify">
            Currently, I'm aiming to explore new technologies, and build more relevant projects in
            order to become a well-rounded full-stack developer.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-2xl">What Drives Me</h2>
          <p class="text-justify">
            What keeps me excited about this field is the vast amount of technologies that are
            available. I get excited in turning ideas into actual systems that ordinary people
            actually use. I love learning new things and applying what I've learned in a project.
          </p>

          <p class="text-justify">
            I'm driven by my curiosity in order to become an overall better developer.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-2xl">Away from Keyboard</h2>
          <p class="text-justify">
            When I'm not coding, I usually read fiction books or watch anime. At the time of writing
            this, I'm planning to read the Edgedancer novella of the Stormlight Archive.
          </p>

          <p class="text-justify">
            My other hobbies include working out, cooking, and playing video games.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
