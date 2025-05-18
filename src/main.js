import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

// NEW: theme preset
import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css'

import App from './App.vue'

createApp(App)
  .use(PrimeVue, {
    ripple: true,
    theme: { preset: Aura },
  })
  .use(ToastService)
  .mount('#app')
