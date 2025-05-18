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
  } else {
    toast.add({ severity: 'error', detail: 'Invalid credentials', life: 3000 })
  }
}
</script>

<template>
  <div class="login-wrapper">
    <Card class="login-card">
      <template #title>Welcome back</template>
      <template #subtitle>Sign in to continue</template>

      <template #content>
        <form @submit.prevent="onSubmit" class="p-fluid">
          <div class="p-field">
            <label for="email">Email</label>
            <InputText id="email" v-model="email" type="email" required />
          </div>

          <div class="p-field">
            <label for="password">Password</label>
            <Password id="password" v-model="password" toggle-mask :feedback="false" required />
          </div>

          <Button
            type="submit"
            :loading="loading"
            label="Log in"
            class="login-button p-button-rounded p-button-lg"
          />
        </form>
      </template>
    </Card>

    <!-- Tiny success/failure feedback -->
    <Toast />
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff 0%, #e9e9ff 100%);
}

.login-card {
  width: 100%;
  max-width: 380px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  border-radius: 1.25rem;
}

.login-button {
  margin-top: 1rem;
  width: 100%;
}

/* fine-tune PrimeVue elements */
.p-inputtext,
.p-password-input {
  border-radius: 0.5rem;
}

.p-card-title {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
