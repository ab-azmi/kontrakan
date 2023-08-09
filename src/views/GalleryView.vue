<script setup lang="ts">
import { useGalleryStore } from '@/stores/gallery'
import { onMounted } from 'vue'

const store = useGalleryStore()

onMounted(async () => {
    await store.fetchImages()
})
</script>

<template>
    <main class="px-7 py-5">
        <h1 class="text-3xl text-display mb-10">Lovely Moments</h1>
        
        <div class="flex flex-wrap gap-5">
            <template v-for="image in store.images" :key="image">
                <div class="w-fit flex items-center overflow-hidden rounded-lg">
                    <img :src="image" alt="Lovely image" srcset="" class="object-cover align-middle max-h-96">
                </div>
            </template>
        </div>
    </main>
</template>