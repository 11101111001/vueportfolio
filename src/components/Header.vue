<template>
  <nav class="bg-white dark:bg-gray-800 shadow" @mouseleave="open = false">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- logo -->
      <router-link to="/" class="text-xl font-bold text-gray-900 dark:text-white">
        MyPortfolio
      </router-link>

      <!-- links -->
      <div class="flex items-center space-x-8">
        <router-link
          to="/"
          class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
        >
          Home
        </router-link>

        <!-- Projects dropdown -->
        <div class="relative">
          <button
            @mouseenter="open = true"
            @click="toggle"
            class="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition focus:outline-none"
          >
            Projects
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <transition name="fade">
            <div
              v-if="open"
              class="absolute left-0 z-50 mt-2 w-48 rounded-lg overflow-hidden bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black/5"
            >
              <router-link
                v-for="p in projects"
                :key="p.slug"
                :to="`/projects/${p.slug}`"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                @click="open = false"
              >
                {{ p.title }}
              </router-link>
            </div>
          </transition>
        </div>
      </div>

      <!-- logout -->
      <button
        @click="handleLogout"
        class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import { projects } from '@/data/projects'

const open = ref(false)
function toggle() {
  open.value = !open.value
}

const { logout } = useAuth0()
function handleLogout() {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
