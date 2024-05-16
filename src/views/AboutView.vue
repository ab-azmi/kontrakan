<script setup lang="ts">
import {
  AcademicCapIcon,
  CommandLineIcon,
  FireIcon
} from '@heroicons/vue/20/solid'

const schools = [
  {
    name: { name: 'Universitas Negeri Semarang', href: '#' },
    icon: AcademicCapIcon,
    description:
      'Finally, i go to college, in another city. My major is Computer Science but my focus area is Web Developer. I met new freinds and teachers. They are so smart and motivated, unlike me lazy. In colleges i was able to join multiple internship program as a Web Developer. I was so grateful',
    period: '2020 - present'
  },
  {
    name: { name: 'Bangkit Academy by Google, GoTo, & Traveloka', href: '#' },
    icon: FireIcon,
    description:
      'I was accepted in a great academy, Bangkit Academy. I was so happy and proud of my self. I was able to learn a lot of things, not only machine learning, but also a bit of mobile development and cloud management from my team. I was able to build a great project with my team and won the top 50 out of 639 teams. As a project manager and backend developer, it was a great experience. I was so happy and proud of my team',
    period: 'Aug - Dec 2023'
  },
  {
    name: { name: 'SMK Negeri 1 Wonosobo', href: '#' },
    icon: CommandLineIcon,
    description:
      'High school. Finally i decided to leave that jungle and go to the city across the sea. I was accepted in a great Vocational High School, majoring Software Engineering. My close friends was small, only 3 or 4. I learn a lot from my teachers and friends. I was happy but sometimes got depressed too, teenage problem',
    period: '2017 - 2020'
  },
]
</script>

<template>
  <div class="flex px-7 py-5 gap-20 flex-col lg:flex-row">
    <div class="flex-1 relative">
      <h1 class="text-3xl text-display mb-10">About me</h1>

      <div class="text-white">
        <p class="text-justify">
          Hi. My name is Azmi, i'm a 21 years old junior fullstack web developer with 10+ months in multiple
          project-based internship experience. Currently live in Central Java, Indonesia. I build full-stack monolithic web app with Laravel
          framework ecosystem. Tools that i use are listed below. 
        </p>
        <p class="flex flex-col">Some of my development skills include:</p>
        <div class="pl-4 flex gap-3">
          <span>&bullet;</span>
          <p>
            Build a full blog system with Laravel that contain like system, content management, and
            comment system.
          </p>
        </div>
        <div class="pl-4 flex gap-3">
          <span>&bullet;</span>
          <p>
            Design and build a custom ERP (Enterprise Resource Planning) with Laravel Jetstream and
            tailwind CSS.
          </p>
        </div>
        <div class="pl-4 flex gap-3">
          <span>&bullet;</span>
          <p>Build an SPA (Single Page Application) using Laravel and Vue JS</p>
        </div>
        <div class="pl-4 flex gap-3">
          <span>&bullet;</span>
          <p>Build a RESTful API with Laravel framework.</p>
        </div>
        <p class="text-justify">
          I am so excited about the opportunities where i can work or helping on a project with highly
          creative and experienced developers. I love to meet new people and work in a group,
          contact me anytime.
        </p>
      </div>

      <div class="mt-20">
        <div class="flex w-full items-center gap-5 flex-wrap">
          <a href="https://laravel.com/" target="_blank"><img src="@/assets/logos/laravel.png" alt="" class="w-14"></a>
          <a href="https://laravel-livewire.com/" target="_blank"><img src="@/assets/logos/livewire.png" alt="" class="w-14"></a>
          <a href="https://tailwindcss.com/" target="_blank"><img src="@/assets/logos/tailwindcss.png" alt="" class="h-12"></a>
          <a href="https://vuejs.org/" target="_blank"><img src="@/assets/logos/vuejs.png" alt="" class="h-12"></a>
          <a href="https://www.typescriptlang.org/" target="_blank"><img src="@/assets/logos/typescript.png" alt="" class="w-12 h-12"></a>
          <a href="https://www.figma.com/" target="_blank"><img src="@/assets/logos/figma.png" alt="" class="w-16"></a>
          <a href="https://git-scm.com/" target="_blank"><img src="@/assets/logos/git.png" alt="" class="w-14"></a>
          <a href="https://www.postgresql.org/" target="_blank"><img src="@/assets/logos/postgresql.png" alt="" class="w-14"></a>
          <a href="https://inertiajs.com/" target="_blank"><img src="@/assets/logos/inertiajs.png" alt="" class="w-14"></a>
          <a href="https://alpinejs.dev" target="_blank"><img src="@/assets/logos/alpine.svg" alt="" class="w-14"></a>
          <a href="https://nuxt.com" target="_blank"><img src="@/assets/logos/nuxt.png" alt="" class="w-14"></a>
          <a href="https://www.python.org" target="_blank"><img src="@/assets/logos/python.png" alt="" class="w-14"></a>
        </div>
      </div>
    </div>
    <div class="flow-root w-full lg:w-[40%]">
      <h1 class="text-3xl text-display mb-10">My education & stories</h1>
      <ul role="list" class="-mb-8">
        <li v-for="(schoolsItem, schoolsItemIdx) in schools" :key="schoolsItem.name.name">
          <div class="relative pb-8">
            <span
              v-if="schoolsItemIdx !== schools.length - 1"
              class="absolute left-5 top-5 -ml-2 h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />
            <div class="relative flex items-start space-x-5">
              <div class="relative">
                <component
                  :is="schoolsItem.icon"
                  class="flex h-6 w-h-6 items-center justify-center rounded-full bg-white ring-8 ring-white"
                  aria-hidden="true"
                />
              </div>
              <div class="min-w-0 flex-1">
                <div>
                  <div class="text-sm">
                    <a :href="schoolsItem.name.href" class="font-medium text-display">{{
                      schoolsItem.name.name
                    }}</a>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500 italic">{{ schoolsItem.period }}</p>
                </div>
                <div class="mt-2 text-sm text-white text-justify">
                  <p>{{ schoolsItem.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
