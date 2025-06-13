import { useRouter } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'

export function useLogin () {
  const router  = useRouter()
  const { loginWithRedirect } = useAuth0()

  function login () {
    loginWithRedirect({
      appState: { targetUrl: router.currentRoute.value.fullPath }
    })
  }

  return { login }
}