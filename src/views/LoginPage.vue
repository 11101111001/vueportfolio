<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

const email = ref('')
const password = ref('')
const loading = ref(false)
const toast = useToast()

async function onSubmit() {
  loading.value = true
  await new Promise((r) => setTimeout(r, 800))
  loading.value = false

  if (email.value === 'admin@example.com' && password.value === 'secret') {
    toast.add({ severity: 'success', detail: 'Logged in!', life: 2500 })
    // store auth state / redirect here
  } else {
    toast.add({ severity: 'error', detail: 'Invalid credentials', life: 3000 })
  }
}
</script>

<template>
  <!-- Full‑screen flex wrapper -->
  <div class="surface-ground flex align-items-center justify-content-center h-screen px-4">
    <!-- Glass‑styled card with subtle fade‑in animation -->
    <Card class="w-full sm:w-30rem p-6 fadein animation-duration-500 glass">
      <template #title>
        <div class="text-center">
          <i class="pi pi-user text-4xl surface-900 mb-2"></i>
          <h2 class="font-semibold text-2xl mt-0 mb-1">Welcome back</h2>
          <p class="text-color-secondary m-0">Sign in to continue</p>
        </div>
      </template>

      <template #content>
        <!-- PrimeFlex grid utilities give us modern spacing without custom CSS -->
        <form @submit.prevent="onSubmit" class="grid gap-3">
          <!-- Float‑label email input -->
          <span class="p-float-label">
            <InputText id="email" v-model="email" type="email" class="w-full" />
            <label for="email">Email</label>
          </span>

          <!-- Float‑label password input with toggle‑mask -->
          <span class="p-float-label">
            <Password
              id="password"
              v-model="password"
              class="w-full"
              toggle-mask
              :feedback="false"
              inputStyle="{ width: '100%' }"
            />
            <label for="password">Password</label>
          </span>

          <Button label="Log in" type="submit" class="w-full mt-2" :loading="loading" />
        </form>
      </template>
    </Card>

    <Toast />
  </div>
</template>

<style scoped>
/* Glass‑morphism helper class */
.glass {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(6px);
}

/* Tweak float‑label visuals */
label {
  color: var(--text-color-secondary);
}

/* Make input/Password fields pill‑shaped and spacious */
:deep(.p-inputtext),
:deep(.p-password-input) {
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
}
</style>
