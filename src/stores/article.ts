import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', () => {
  const articles = ref([
    {
      id: 1,
      title: 'Learn Laravel. Where to start?',
      created: '2 days ago',
      updated: '2 days ago',
      image: '/public/images/projects/hris.png',
      tags: ['Laravel', 'Web Design', 'API', 'Anjing', 'Coba'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      title: 'Design or Programming. Which one is more fun',
      created: '2 days ago',
      updated: '2 days ago',
      image: '/public/images/projects/astral.png',
      tags: ['Design', 'Website', 'Developer'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ])

  const articleLength = computed(() => articles.value.length)

  function getArticle(id: number) {
    return articles.value.find(article => article.id === id)
  }

  return { articles, getArticle, articleLength }
})
