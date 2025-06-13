<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { useLogin } from '@/assets/useLogin'

const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()
const { login } = useLogin()

function handleLogin () {
  loginWithRedirect({
    appState: { targetUrl: window.location.pathname + window.location.search }
  })
}
</script>

<template>
  <div class="relative">
    <div :class="!isLoading && !isAuthenticated ? 'blur-sm pointer-events-none select-none' : ''">
      <slot />
    </div>

    <div
      v-if="!isLoading && !isAuthenticated"
      class="absolute inset-0 flex flex-col items-center justify-center gap-4
             bg-neutral-900/70 text-center text-gray-200 rounded-lg"
    >
      <p class="text-lg font-medium">
        Please sign in to view this content
      </p>

      <button
        @click="login"
        class="rounded-md bg-green-500 px-4 py-2 font-semibold text-white
               hover:bg-green-600 transition"
      >
        Log in
      </button>
    </div>
  </div>
</template>

<style scoped>
.relative > .blur-sm { filter: blur(4px); }
</style>
