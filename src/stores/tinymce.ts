import { defineStore } from 'pinia'
import {supabase} from '@/lib/supabaseClient'

export const useTinymceStore = defineStore('tinymce', () => {

    async function uploadImage (path: string, file: any): Promise<string> {
        let publicPath :string = ""

        await supabase.storage.from('images').upload('blogs/'+path, file, {
            cacheControl: '3600',
            upsert: false,
        })
        .then(response => {
            if(response.data){
                const {data} = supabase.storage.from('images').getPublicUrl(response.data.path)
                publicPath = data.publicUrl
            }else{
                console.log(response.error)
            }
        })
        .catch(error => {
            console.log(error)
        })

        return publicPath
    }

    return { uploadImage }
})
