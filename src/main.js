import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue'
import router from './router'

import './style.css'
import 'primeicons/primeicons.css'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const app = createApp(App)

console.log('▶️ Redirect URI:', import.meta.env.VITE_AUTH0_CALLBACK_URL)

app
  .use(router)
  .use(PrimeVue, {
    theme: 'none',
  })
  .component('Menubar', Menubar)
  .component('Button', Button)
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      },
    }),
  )

app.mount('#app')
