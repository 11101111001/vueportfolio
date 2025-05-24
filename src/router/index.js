import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

const NotFoundPage = () => import('@/views/not-found-page.vue')
const CallbackPage = () => import('@/views/callback-page.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    beforeEnter: authGuard,
  },
  {
    path: '/callback',
    name: 'callback',
    component: CallbackPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
