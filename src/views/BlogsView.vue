<script setup lang="ts">
import { useArticleStore } from '@/stores/article';
import {onMounted, ref} from 'vue';
import { formatDate } from '@/lib/momentFunc';

const store = useArticleStore();
//make computed property reactive
const articles = ref();

onMounted(() => { 
    //subscribe to articles data so that it always updates
    store.subscribeToArticles();
    
    //check if there is 'article' in local storage
    if (localStorage.getItem('articles')) {
        //if there is, set it to the store
        store.setArticles(JSON.parse(localStorage.getItem('articles')!));
    }else{
        //if not, fetch from api   
        store.fetchArticles();
    }
    //set get the articles from the store
    articles.value = store.articles;
})

</script>

<template>
    <main class="px-7 py-5">
        <h1 class="text-3xl text-display mb-10">Articles</h1>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-9">
            <div v-for="article in articles" :key="article.id"
                class="w-full flex flex-col rounded-lg bg-white/20 backdrop-blur-md h-full justify-between">
                <div class="px-5 py-5 rounded-t-lg">
                    <div class="overflow-hidden w-full rounded-lg">
                        <img :src="article.image" :alt="article.title" />
                    </div>
                </div>
                <div>
                    <div class="rounded-b-lg px-5 pb-3 flex flex-wrap gap-2">
                        <span v-for="tag in article.tags.value" :key="tag"
                            class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium bg-primary text-display">
                            <svg class="h-1.5 w-1.5 fill-white animate-pulse" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx="3" cy="3" r="3" />
                            </svg>
                            {{ tag }}
                        </span>
                    </div>
                    <div class=" px-5 pb-3">
                        <h1 class="text-white text-lg font-semibold">{{ article.title }}</h1>
                        <p class="italic text-sm text-white/30">{{ formatDate(article.created_at) }}</p>

                    </div>
                </div>

                <div class="px-5 pb-5 flex justify-end">
                    <RouterLink :to="{name: 'blogs.read', params: {id: article.id}}" class=" px-4 py-2 font-semibold bg-primary text-display rounded-md">
                        read <span class="font-bold">&rarr;</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </main>
</template>