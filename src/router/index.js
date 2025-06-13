// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

import HomePage from '@/views/HomePage.vue'
import NotFoundPage from '@/views/not-found-page.vue'
import AboutPage from '@/views/About.vue'
import MtGrpc from '@/views/projects/MtGrpc.vue'
import CPU from '@/views/projects/CPU.vue'
import CachingProxy from '@/views/projects/CachingProxy.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  {
    path: '/projects/cpu',
    component: CPU,
  },
  {
    path: '/projects/caching-proxy',
    component: CachingProxy,
  },
  {
    path: '/projects/mtgrpc',
    component: MtGrpc,
  },
  { path: '/:catchAll(.*)',    component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
