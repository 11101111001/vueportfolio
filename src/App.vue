<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { isLoading, error } = useAuth0()
</script>

<template>
  <!-- 1. Show a full-screen loader while Auth0 is initializing -->
  <div v-if="isLoading" class="flex items-center justify-center h-screen">
    <span>Loading…</span>
  </div>

  <!-- 2. Show an error if something went wrong during redirect callback -->
  <div v-else-if="error" class="p-4 text-red-600">
    <h2>Authentication Error</h2>
    <p>{{ error.message }}</p>
  </div>

  <!-- 3. Once we’re past loading & no errors, render the routed page -->
  <div v-else>
    <router-view />
  </div>
</template>
