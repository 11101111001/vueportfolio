<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
import Header from './views/Header.vue'

const { isLoading, isAuthenticated, error } = useAuth0()
</script>

<template>
  <Header />
  <div
    v-if="isLoading || (!isAuthenticated && !error)"
    class="flex h-[calc(100vh-64px)] items-center justify-center"
  >
    <span class="animate-pulse text-lg text-gray-500">Loading …</span>
  </div>

  <div v-else-if="error" class="p-4 text-red-600">
    <h2>Authentication Error</h2>
    <p>{{ error.message }}</p>
  </div>

  <div v-else>
    <router-view />
  </div>
</template>
