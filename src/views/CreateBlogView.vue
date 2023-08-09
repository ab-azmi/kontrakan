<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { v4 as uuidv4 } from "uuid"
import { useTinymceStore } from '@/stores/tinymce'
import { useArticleStore } from '@/stores/article'
import { ref, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

interface Article {
    title: string,
    content: string,
    image: string,
    created_at: string,
    tags: {
        value: string[],
    }
}

const authStore = useAuthStore();
const router = useRouter();

const form = ref<Article>({
    title: '',
    content: '',
    image: '',
    created_at: '',
    tags: {
        value: [],
    }
})
const tags = ref<string>()
const storeTinyMCE = useTinymceStore();
const storeArticle = useArticleStore();
const loading = ref<boolean>(false)
const fileInput = ref<HTMLInputElement>()
const tempFile = ref<string>()

function selectFile() {
    fileInput?.value?.click()
}
function onFileChange(event: any) {
    const files = event.target.files
    if (files.length > 0) {
        //save file into form
        form.value.image = files[0]

        //show file image for preview
        form.value.image = event.target.files[0]
        const reader = new FileReader();
        reader.onload = (e) => {
            tempFile.value = e.target?.result as string
        };
        reader.readAsDataURL(files[0]);
    }
}

async function imageUploadHandler(blobinfo: any, success: any, failure: any) {
    const filename = blobinfo.filename() + uuidv4()

    const path = await storeTinyMCE.uploadImage(filename, blobinfo.blob())
    if (path !== '') {
        success(path)
    } else {
        failure('Upload failed')
    }
}

function publishArticle() {
    loading.value = true
    storeArticle.createArticle(form.value)
        .then(() => {
            loading.value = false
            //alert
            alert('Article created')
            //reset the form
        })
}

function removeImage() {
    form.value.image = ''
    tempFile.value = ''
}

async function Logout(){
    await authStore.logout()
        .then(() => {
            localStorage.removeItem('user')
            router.push('/login')
        })
}

watch(tags, (newValue) => {
    if (newValue) {
        form.value.tags.value = newValue.split(',').map((tag: string) => tag.trim())
    }
})
</script>

<template>
    <main class="px-7 py-5">
        <div class="my-4 w-full flex justify-end">
            <button class="px-4 py-2 rounded-md bg-red-500 text-white" @click="Logout">
                <span>Logout</span>
            </button>
        </div>
        <div class="flex flex-col gap-4">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-white">Title</label>
                <div class="mt-2">
                    <input type="text" name="title" id="title" autocomplete="off" v-model="form.title"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-0 outline-none border-none sm:text-sm sm:leading-6"
                        placeholder="Your title" />
                </div>
                <p class="mt-2 text-sm text-gray-500 hidden" id="email-description">We'll only use this for spam.</p>
            </div>
            <div v-if="form.image == ''">
                <input type="file" hidden ref="fileInput" accept=".jpg, .png" @change.prevent="onFileChange($event)">
                <button type="button" @click.prevent="selectFile"
                    class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        class="mx-auto h-12 w-12" style="fill: white">
                        <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z">
                        </path>
                        <path d="m8 11-3 4h11l-4-6-3 4z"></path>
                        <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                    </svg>
                    <span class="mt-2 block text-sm font-semibold text-white">Choose blog's image</span>
                </button>
            </div>
            <div v-else>
                <label for="image" class="block text-sm font-medium leading-6 text-white">Cover</label>
                <div class="relative">
                    <div class="absolute">
                        <button class="px-4 py-2 bg-display rounded-br-md" @click.prevent="removeImage">Remove</button>
                    </div>
                    <img :src="tempFile" alt="" srcset="" width="400" class="rounded-md">
                    <!-- Make remove image button -->
                </div>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-white">Tags</label>
                <div class="mt-2">
                    <input type="text" name="title" id="title" autocomplete="off" v-model="tags"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-0 outline-none border-none sm:text-sm sm:leading-6"
                        placeholder="One, Two, Three" />
                </div>
                <p class="mt-2 text-sm text-white/30" id="email-description">Separate with comma</p>
            </div>
            <div>
                <label for="content" class="block text-sm font-medium leading-6 text-white">Content</label>

                <editor v-model="form.content" api-key="klxialtjrsxoa8hukvmzw76l97lbsjmct0pame1byyy516en" :init="{
                    height: 500,
                    menubar: false,
                    paste_images_data: true,
                    images_upload_handler: imageUploadHandler,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code codesample fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                                                                                                                        alignleft aligncenter alignright alignjustify | \
                                                                                                                        bullist numlist outdent indent | removeformat | image | help'
                }" />
            </div>
            <div class="mt-5">
                <button class="px-4 py-2 rounded-md bg-display" :disabled="loading" @click="publishArticle">
                    <span v-if="loading">Loading...</span>
                    <span v-else>Publish</span>
                </button>
            </div>
        </div>
    </main>
</template>