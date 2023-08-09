<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  Bars3Icon,
  NewspaperIcon,
  IdentificationIcon,
  PhotoIcon,
  BriefcaseIcon,
  HomeIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'About', href: '/about', icon: IdentificationIcon, current: false },
  { name: 'Projects', href: '/portfolio', icon: BriefcaseIcon, current: false },
  { name: 'Blogs', href: '/blogs', icon: NewspaperIcon, current: false },
  { name: 'Gallery', href: '/gallery', icon: PhotoIcon, current: false },
]

const authStore = useAuthStore()
const sidebarOpen = ref<boolean>(false)

onMounted(() => {
  const user = localStorage.getItem('user')
  if (user) {
    //set user in auth store
    authStore.user = JSON.parse(user)
  }
})
</script>


<template>
  <div>
    <template v-if="$route.name !== 'login'">
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div class="fixed inset-0 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
              enter-from="-translate-x-full" enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
              leave-to="-translate-x-full">
              <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                  enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                      <span class="sr-only">Close sidebar</span>
                      <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>

                <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 ring-1 ring-white/10">
                  <div class="flex h-16 shrink-0 items-center">
                    <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
                  </div>
                  <nav class="flex flex-1 flex-col">
                    <ul role="list" class="-mx-2 flex-1 space-y-1">
                      <li v-for="item in navigation" :key="item.name">
                        <RouterLink :to="item.href"
                          class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold">
                          <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                          {{ item.name }}
                        </RouterLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Static sidebar for desktop -->
      <div
        class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:w-20 lg:overflow-y-hidden lg:bg-white lg:pb-4 lg:flex lg:flex-col">
        <div class="flex h-16 shrink-0 items-center justify-center">
          <img class="h-8 w-auto" src="/public/images/logo/Az.png" alt="Your Company" />
        </div>
        <nav class=" flex flex-col justify-center flex-1">
          <ul role="list" class="flex flex-col items-center space-y-5">
            <li v-for="item in navigation" :key="item.name">
              <RouterLink :to="item.href"
                class="text-gray-400 hover:text-primary hover:bg-slate-300 group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold">
                <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                <span class="sr-only">{{ item.name }}</span>
              </RouterLink>
            </li>
          </ul>
        </nav>

      </div>

      <div
        class="sticky top-0 z-40 items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden flex justify-between">
        <button type="button" class="-m-2.5 p-2.5 text-display bg-primary rounded-md lg:hidden"
          @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class=" font-semibold leading-6 text-primary">
          <img class="h-8 w-auto" src="/public/images/logo/Az.png" alt="Your Company" />
        </div>
      </div>
    </template>

    <main class="h-screen">
      <div class="px-4 py-10 lg:pl-28 lg:pr-10 h-full">
        <!-- Main area -->
        <RouterView />
      </div>
    </main>

  </div></template>
<style scoped>.active {
  color: #ffb35f;
  background: #190b4f;
}</style>

