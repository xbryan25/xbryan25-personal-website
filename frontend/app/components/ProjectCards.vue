<script setup lang="ts">
import { Motion } from 'motion-v';

const projectInfos = [
  {
    projectTitle: 'Libris',
    projectLink: 'https://github.com/xbryan25/libris-github',
    projectDescription:
      'A full-stack web application for renting and purchasing books online — built with a modern tech stack that ensures scalability, maintainability, and great user experience.',
    usedTechnologies: [
      'Nuxt',
      'Vue',
      'Python',
      'Typescript',
      'Nuxt UI',
      'TailwindCSS',
      'Flask',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    projectTitle: 'Sequence (Web)',
    projectLink: 'https://github.com/xbryan25/ccc181-web-ssis',
    projectDescription:
      'A full-stack student information system (SIS) built using Nuxt (Vue 3), Flask (Python), PostgreSQL, and Supabase Storage.',
    usedTechnologies: [
      'Nuxt',
      'Vue',
      'Python',
      'Typescript',
      'Nuxt UI',
      'TailwindCSS',
      'Flask',
      'Supabase',
      'PostgreSQL',
      'Docker',
      'pgadmin',
    ],
  },
  {
    projectTitle: 'LitList',
    projectLink: 'https://github.com/xbryan25/litlist',
    projectDescription:
      'LitList is a simple book tracking app that lets you keep a record of books you have read, and those you have not finished yet.',
    usedTechnologies: ['Vue', 'Python', 'Typescript', 'TailwindCSS', 'Flask', 'SQLite'],
  },
  {
    projectTitle: 'HotelEase',
    projectLink: 'https://github.com/xbryan25/hotel-management-system',
    projectDescription:
      'A hotel management system desktop application that streamlines the booking and administration process for both customers and hotel staff. ',
    usedTechnologies: ['Python', 'PyQT6', 'MySQL'],
  },
  {
    projectTitle: 'Sequence (Desktop)',
    projectLink: 'https://github.com/xbryan25/ccc151-ssis-v2',
    projectDescription:
      'A student information system (SIS) desktop application built using PyQT6 (Pyhon), and MySQL.',
    usedTechnologies: ['Python', 'PyQT6', 'MySQL'],
  },
  {
    projectTitle: 'Student Attendance Application',
    projectLink: 'https://github.com/xbryan25/StudentAttendanceApplication',
    projectDescription:
      'A desktop application allows the user to record the ID number of students that attended an event.',
    usedTechnologies: ['Java', 'Swing'],
  },
  {
    projectTitle: 'CLI Super TicTacToe',
    projectLink: 'https://github.com/xbryan25/C_SuperTicTacToe',
    projectDescription: 'A command-line interface Super TicTacToe made using C',
    usedTechnologies: ['C'],
  },
  {
    projectTitle: 'RotatePDF',
    projectLink: 'https://github.com/xbryan25/RotatePDF',
    projectDescription:
      'A desktop application that supports the simple functionality of rotating PDFs.',
    usedTechnologies: ['Python', 'customtkinter'],
  },
  {
    projectTitle: 'SimpleStopwatch',
    projectLink: 'https://github.com/xbryan25/SimpleStopwatch',
    projectDescription:
      'A desktop application that supports the basic functionalities of a stopwatch, such as start, stop, continue, and reset.',
    usedTechnologies: ['Python', 'customtkinter'],
  },
];
</script>

<template>
  <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-5 w-full">
    <Motion
      v-for="(projectInfo, index) in projectInfos"
      :key="projectInfo.projectTitle"
      :initial="{
        opacity: 0,
        transform: 'translateY(10px)',
        filter: 'blur(10px)',
      }"
      :while-in-view="{
        opacity: 1,
        transform: 'translateY(0)',
        filter: 'blur(0px)',
      }"
      :transition="{
        delay: 0.25 * index,
        duration: 0.75,
        easing: 'easeInOut',
      }"
      :in-view-options="{ once: true }"
    >
      <ProjectCard
        :project-title="projectInfo.projectTitle"
        :project-link="projectInfo.projectLink"
        :project-description="projectInfo.projectDescription"
        :used-technologies="projectInfo.usedTechnologies"
      />
    </Motion>
  </div>
</template>
