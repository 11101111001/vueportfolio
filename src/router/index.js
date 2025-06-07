import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

import HomePage from '@/views/HomePage.vue'
import CallbackPage from '@/views/callback-page.vue'
import NotFoundPage from '@/views/not-found-page.vue'
import AboutPage from '@/views/About.vue'

import MtGrpc from '@/views/projects/MtGrpc.vue'
import CPU from '@/views/projects/CPU.vue'
import CachingProxy from '@/views/projects/CachingProxy.vue'

const routes = [
  { path: '/', component: HomePage, beforeEnter: authGuard },
  {
    path: '/about',
    component: AboutPage,
    beforeEnter: authGuard,
  },
  { path: '/projects/mtgrpc', component: MtGrpc, beforeEnter: authGuard },
  { path: '/projects/cpu', component: CPU, beforeEnter: authGuard },
  { path: '/projects/caching-proxy', component: CachingProxy, beforeEnter: authGuard },
  { path: '/callback', component: CallbackPage },
  { path: '/:catchAll(.*)', component: NotFoundPage },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
