<script setup>
import { onMounted }    from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth0 }     from '@auth0/auth0-vue'

const router = useRouter()
const route  = useRoute()
const { handleRedirectCallback, error } = useAuth0()

onMounted(async () => {
  if (route.query.error) {
    return router.replace('/')
  }

  try {
    await handleRedirectCallback()
  } catch (e) {
    console.error('Error handling redirect callback:', e)
    return router.replace('/')
  }

  router.replace(sessionStorage.getItem('auth_redirect_target') || '/')
})
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-neutral-900 text-white">
    <span class="animate-pulse text-lg text-green-400">
      Logging you in…
    </span>
  </div>
</template>

