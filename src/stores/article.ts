import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import {supabase} from '@/lib/supabaseClient'
import type { Article } from '@/types/article'

export const useArticleStore = defineStore('article', () => {

  const articles = ref<Article[]>()

  const selectedArticle = ref<Article>()

  const articleLength = computed(() => articles.value?.length)

  const getArticles = computed(() => articles.value)

  function readArticle(id: number): void
  {
    const article = articles.value?.find(article => article.id === id)
    selectedArticle.value = article
  }

  async function fetchArticles(): Promise<void>
  {
    const { data } = await supabase.from('blogs').select()
    setArticles(data)
  }

  function setArticles(data: any): void
  {
    if(!data) return
    articles.value = data
  }

  function subscribeToArticles()
  {
    supabase
    .channel('schema-db-changes')
    .on('postgres_changes', {
      schema: 'public',
      table: 'blogs',
      event: '*',
    }, (payload) => {
      console.log('Change received!', payload)
      fetchArticles()
    }).subscribe()
  }

  watch(
    getArticles,
    (articles) => {
      // persist the whole state to the local storage whenever it changes
      localStorage.setItem('articles', JSON.stringify(articles))
    },
    { deep: true }
  )

  return { 
    articles, 
    fetchArticles, 
    articleLength, 
    getArticles, 
    setArticles,
    selectedArticle,
    readArticle,
    subscribeToArticles }
})
