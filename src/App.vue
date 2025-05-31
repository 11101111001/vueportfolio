<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
import Header from '@/components/Header.vue'

const { isLoading, isAuthenticated, error } = useAuth0()
</script>

<template>
  <div
    v-if="isLoading || (!isAuthenticated && !error)"
    class="flex h-screen items-center justify-center bg-white dark:bg-neutral-900"
  >
    <span class="animate-pulse text-lg text-green-500 dark:text-green-300"> Loading… </span>
  </div>

  <div v-else-if="error" class="p-6 text-red-600">
    <h2 class="text-xl font-bold mb-2">Authentication error</h2>
    <p>{{ error.message }}</p>
  </div>

  <div v-else>
    <Header />
    <router-view />
  </div>
</template>
