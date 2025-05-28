<template>
  <nav class="bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6 py-4">
    <!-- Left side: logo and links -->
    <div class="flex items-center space-x-8">
      <router-link to="/" class="text-xl font-bold text-gray-900 dark:text-white"
        >MyPortfolio</router-link
      >
      <router-link
        to="/"
        class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
      >
        Home
      </router-link>
      <div class="relative group">
        <button
          class="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition focus:outline-none"
        >
          Projects
          <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          class="absolute left-0 z-50 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <router-link
            v-for="proj in projects"
            :key="proj.slug"
            :to="`/projects/${proj.slug}`"
            class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            {{ proj.title }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Right side: logout -->
    <div>
      <button
        @click="handleLogout"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'

const router = useRouter()
const { logout } = useAuth0()

const projects = ref([
  { slug: 'alpha', title: 'Project Alpha' },
  { slug: 'beta', title: 'Project Beta' },
  { slug: 'gamma', title: 'Project Gamma' },
])

function handleLogout() {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<style scoped>
.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}
</style>
