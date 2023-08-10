import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/ProjectView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/BlogsView.vue'),
    },
    {
      path: '/blogs/read/:slug',
      name: 'blogs.read',
      component: () => import('@/components/ArticleComp.vue'),
      props: true,
    },
    {
      path: '/blogs/create',
      name: 'blogs.create',
      component: () => import('@/views/CreateBlogView.vue'),
      meta: { requiresAuth: true}

    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/GalleryView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  if (authStore.authenticated === false && to.meta.requiresAuth) {
    //if user is not logged in, redirect to login page
    next({ name: "login" })
  }else{
    next()
  }
})

export default router
