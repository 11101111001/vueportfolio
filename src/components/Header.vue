<template>
  <!-- nav with bottom border -->
  <nav class="bg-neutral-900 border-b border-neutral-700 shadow">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- Logo on the left -->
      <router-link to="/" class="text-xl font-extrabold text-green-400">
        GitHub Portfolio
      </router-link>

      <!-- Nav links + Logout on the right -->
      <div class="flex items-center space-x-6">
        <!-- Home -->
        <router-link
          to="/"
          class="px-3 py-2 rounded-md text-white hover:text-green-400 hover:bg-gray-800 transition"
        >
          Home
        </router-link>

        <!-- About -->
        <router-link
          to="/about"
          class="px-3 py-2 rounded-md text-gray-300 hover:text-green-400 hover:bg-gray-800 transition"
        >
          About
        </router-link>

        <!-- Projects dropdown -->
        <div class="relative" @mouseenter="open = true" @mouseleave="open = false">
          <!-- Projects button -->
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 rounded-md text-gray-300 hover:text-green-400 hover:bg-gray-800 transition focus:outline-none"
          >
            Projects
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 
             1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 
             0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div class="absolute top-full left-0 w-full h-2"></div>

          <!-- Dropdown menu -->
          <transition name="fade">
            <div
              v-if="open"
              class="absolute left-0 top-full mt-2 w-48 overflow-hidden rounded-lg bg-gray-600 shadow-lg ring-1 ring-black/50"
            >
              <router-link
                v-for="p in projects"
                :key="p.slug"
                :to="`/projects/${p.slug}`"
                class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-green-400 transition"
                @click="open = false"
              >
                {{ p.title }}
              </router-link>
            </div>
          </transition>
        </div>

        <!-- Logout -->
        <button
          @click="handleLogout"
          class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Log Out
        </button>
      </div>
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
/* Simple fade transition for dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
