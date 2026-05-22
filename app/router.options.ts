import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // El scroll real está en document.body (body tiene h-full + overflow-x:hidden)
    if (import.meta.client) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    return false
  },
}
