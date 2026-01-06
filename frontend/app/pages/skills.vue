<script setup lang="ts">
definePageMeta({
  head: {
    link: [
      { rel: 'preload', as: 'image', href: '/images/logos/c.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/python.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/javascript.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/typescript.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/java.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/mysql.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/supabase.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/postgresql.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/sqlite.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/tailwindcss.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/qt.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/react.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/vue.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/nuxt.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/flask.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/html-5.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/css-3.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/figma.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/daisyui.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/docker.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/git.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/github.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/cloudinary.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/jira.png' },
      { rel: 'preload', as: 'image', href: '/images/logos/bitbucket.png' },
    ],
  },
});

const show = ref(false);

const languagesIcons = [
  { name: 'C', icon: '/images/logos/c.png' },
  { name: 'Python', icon: '/images/logos/python.png' },
  { name: 'Javascript', icon: '/images/logos/javascript.png' },
  { name: 'Typescript', icon: '/images/logos/typescript.png' },
  { name: 'Java', icon: '/images/logos/java.png' },
];

const databasesIcons = [
  { name: 'MySQL', icon: '/images/logos/mysql.png' },
  { name: 'Supabase', icon: '/images/logos/supabase.png' },
  { name: 'PostgreSQL', icon: '/images/logos/postgresql.png' },
  { name: 'SQLite', icon: '/images/logos/sqlite.png' },
];

const frameworksIcons = [
  { name: 'TailwindCSS', icon: '/images/logos/tailwindcss.png' },
  { name: 'PyQT6', icon: '/images/logos/qt.png' },
  { name: 'React', icon: '/images/logos/react.png' },
  { name: 'Vue', icon: '/images/logos/vue.png' },
  { name: 'Nuxt', icon: '/images/logos/nuxt.png' },
  { name: 'Flask', icon: '/images/logos/flask.png' },
];

const otherTechnologiesIcons = [
  { name: 'HTML5', icon: '/images/logos/html-5.png' },
  { name: 'CSS3', icon: '/images/logos/css-3.png' },
  { name: 'Figma', icon: '/images/logos/figma.png' },
  { name: 'DaisyUI', icon: '/images/logos/daisyui.png' },
  { name: 'Docker', icon: '/images/logos/docker.png' },
  { name: 'Git', icon: '/images/logos/git.png' },
  { name: 'Github', icon: '/images/logos/github.png' },
  { name: 'Cloudinary', icon: '/images/logos/cloudinary.png' },
  { name: 'Jira', icon: '/images/logos/jira.png' },
  { name: 'Bitbucket', icon: '/images/logos/bitbucket.png' },
];

onMounted(() => {
  // Trigger animation on mount
  requestAnimationFrame(() => {
    show.value = true;
  });
});
</script>

<template>
  <div class="flex-1 flex justify-center h-full mb-15">
    <div class="class flex flex-col items-center max-w-200">
      <p
        class="font-bold text-7xl mt-15 opacity-0 scale-10 transition-all duration-750 ease-out"
        :class="show ? 'opacity-100 scale-100' : ''"
      >
        My Skills
      </p>

      <div class="flex flex-col mt-10 gap-10">
        <div class="flex flex-col gap-6 items-center">
          <LetterPullup words="Languages" class="font-semibold text-2xl" />

          <BoxReveal color="#E1251B" :delay="1.0">
            <UMarquee pause-on-hover class="max-w-[60vw] [--duration:10s]">
              <UTooltip
                v-for="(languageIcon, index) in languagesIcons"
                :key="index"
                :text="languageIcon.name"
                :delay-duration="0"
                arrow
                :ui="{ content: 'text-lg p-4' }"
              >
                <NuxtImg :src="languageIcon.icon" class="h-32" />
              </UTooltip>
            </UMarquee>
          </BoxReveal>
        </div>

        <div class="flex flex-col gap-6 items-center">
          <LetterPullup words="Databases" class="font-semibold text-2xl" />

          <BoxReveal color="#E1251B" :delay="1.0">
            <UMarquee pause-on-hover class="max-w-[60vw] [--duration:10s]">
              <UTooltip
                v-for="(databasesIcon, index) in databasesIcons"
                :key="index"
                :text="databasesIcon.name"
                :delay-duration="0"
                arrow
                :ui="{ content: 'text-lg p-4' }"
              >
                <NuxtImg :src="databasesIcon.icon" class="h-32" />
              </UTooltip>
            </UMarquee>
          </BoxReveal>
        </div>

        <div class="flex flex-col gap-6 items-center">
          <LetterPullup words="Frameworks" class="font-semibold text-2xl" />

          <BoxReveal color="#E1251B" :delay="1.0">
            <UMarquee pause-on-hover class="max-w-[60vw] [--duration:10s]">
              <UTooltip
                v-for="(frameworksIcon, index) in frameworksIcons"
                :key="index"
                :text="frameworksIcon.name"
                :delay-duration="0"
                arrow
                :ui="{ content: 'text-lg p-4' }"
              >
                <NuxtImg :src="frameworksIcon.icon" class="h-32" />
              </UTooltip>
            </UMarquee>
          </BoxReveal>
        </div>

        <div class="flex flex-col gap-6 items-center">
          <LetterPullup words="Other Technologies" class="font-semibold text-2xl" />

          <BoxReveal color="#E1251B" :delay="1.0">
            <UMarquee pause-on-hover class="max-w-[60vw] [--duration:10s]">
              <UTooltip
                v-for="(otherTechnologiesIcon, index) in otherTechnologiesIcons"
                :key="index"
                :text="otherTechnologiesIcon.name"
                :delay-duration="0"
                arrow
                :ui="{ content: 'text-lg p-4' }"
              >
                <NuxtImg :src="otherTechnologiesIcon.icon" class="h-32" />
              </UTooltip>
            </UMarquee>
          </BoxReveal>
        </div>
      </div>
    </div>
  </div>
</template>
