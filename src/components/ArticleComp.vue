<script setup lang="ts">
import { useArticleStore } from '@/stores/article';
import { onMounted, ref } from 'vue';
import type { Article } from '@/types/article';
import { formatDate } from '@/lib/momentFunc';

interface Props {
    id: string,
}

const props = defineProps<Props>()
const store = useArticleStore();
const article = ref<Article>()

//fetch data if data on state is empty
onMounted(async () => {
    await store.fetchArticles();

    //get the article with the id from the route params
    store.readArticle(parseInt(props.id));

    //get the selected article from store
    article.value = store.selectedArticle;
})

</script>

<template>
    <main class="px-7 py-5">
        <div class="flex w-full justify-end">
            <button class="block lg:hidden mb-3 px-4 py-2 text-primary rounded-md font-bold bg-display">back</button>
        </div>
        <div class="flex flex-col items-center px-14 lg:px-32 justify-center w-full gap-3 relative top-5">
            <span class="text-display font-semibold">{{ formatDate(article?.created_at) }}</span>
            <h1 class="text-4xl text-white font-bold text-center">{{ article?.title }}</h1>
            <img :src="article?.image" alt="" class="w-[80%] rounded-lg blur-md opacity-20 absolute">
        </div>

        <div class="flex justify-center mt-12 gap-3">
            <span v-for="tag in article?.tags?.value" :key="tag"
                class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-bold bg-display text-black">
                <svg class="h-1.5 w-1.5 fill-white animate-pulse" viewBox="0 0 6 6" aria-hidden="true">
                    <circle cx="3" cy="3" r="3" />
                </svg>
                {{ tag }}
            </span>
        </div>

        <div class="w-[100%] rounded-lg mt-16 lg:mt-32 px-14 lg:px-32 py-8 text-white font-semibold">
            {{ article?.content }}
        </div>
    </main>
</template>