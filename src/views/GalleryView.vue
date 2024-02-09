<script setup lang="ts">
import { useGalleryStore } from '@/stores/gallery'
import { onMounted, ref } from 'vue'

const store = useGalleryStore()

const increment = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
}

onMounted(async () => {
    //if images in store empty, fetch again
    if (store.images.length === 0) {
        await store.fetchImages()
    }
    setInterval(increment,  5000);
})

const images = store.images

const currentImageIndex = ref<number>(0)

function nextImage() {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
}
function previousImage() {
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
}


</script>

<template>
    <main class="px-7 py-5">
        <h1 class="text-3xl text-display mb-10">Lovely Moments</h1>


        <div id="carousel" class="relative w-full">
            <!-- Carousel wrapper -->
            <div class="relative h-56 w-full overflow-hidden rounded-lg md:h-[35rem]">
                <!-- Carousel items -->
                <div v-for="(image, index) in images" :key="index"
                    class="opacity-0 duration-700 ease-in-out absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    :class="{ 'opacity-100 visible': index === currentImageIndex }">
                    <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">

                    <div class="absolute z-30 flex  -bottom-60 right-10 p-2">
                        <a :href="images[currentImageIndex]" target="_blank" rel="noopener noreferrer"
                            class="opacity-60 px-4 py-2 rounded-lg bg-white text-primary flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                                <g fill="currentColor">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" />
                                    <path fill-rule="evenodd"
                                        d="M1.38 8.28a.87.87 0 0 1 0-.566a7.003 7.003 0 0 1 13.238.006a.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
                                        clip-rule="evenodd" />
                                </g>
                            </svg>
                            View Full
                        </a>
                    </div>
                </div>
            </div>




            <!-- Slider controls -->
            <div class="flex gap-4 justify-center">
                <button type="button" class=" px-5 gap-3 py-2 mt-3 flex items-center justify-center cursor-pointer group focus:outline-none
                    bg-white text-primary h-fit w-fit rounded-lg" @click="previousImage">
                    <p>Previous</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" d="m11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
                    </svg>
                </button>
                <button type="button" class=" px-5 py-2 mt-3 flex items-center justify-center gap-3 cursor-pointer group focus:outline-none
                    bg-white text-primary h-full w-fit rounded-lg" @click="nextImage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" d="m12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
                </svg>
                <p>Next</p>
            </button>

        </div>
    </div>
</main></template>