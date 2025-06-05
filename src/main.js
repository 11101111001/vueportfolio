import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue'
import router from './router'

import './style.css'
import 'primeicons/primeicons.css'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope, faGithub, faLinkedin)

const app = createApp(App)

app
  .component('font-awesome-icon', FontAwesomeIcon)
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
      
      onRedirectCallback: (appState) => {
        const target = appState?.targetUrl || '/'
        router.replace(target)
      },
    })
  )

app.mount('#app')
