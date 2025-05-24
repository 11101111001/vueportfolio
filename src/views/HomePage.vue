<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
const { user } = useAuth0()
</script>

<template>
  <h1 class="text-2xl mb-4">My Private Projects</h1>
</template>
