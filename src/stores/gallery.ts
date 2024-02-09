import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import { ref, computed } from 'vue'

export const useGalleryStore = defineStore('gallery', () => {
  const images = ref<string[]>([])

  const getImages = computed(() => images.value)

  async function fetchImages(): Promise<void> {
    await supabase.storage
      .from('images')
      .list('gallery')
      .then((response) => {
        if (response.data) {
          response.data.map((image) => {
            getPublicUrl(image.name)
          })
        } else {
          console.log(response.error)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function getPublicUrl(name: string): Promise<void> {
    const { data } = await supabase.storage.from('images').getPublicUrl('gallery/' + name)
    images.value.push(data.publicUrl)
  }

  return { images, fetchImages, getImages }
})
