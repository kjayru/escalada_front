/**
 * Composable para controlar el loader de página.
 * Maneja tanto el loader HTML estático (cargado antes de Vue) como el loader Vue (para navegación SPA).
 */
export const usePageLoader = () => {
  const isLoading = useState('pageLoader', () => false)
  const lockCount = useState('pageLoaderLockCount', () => 0)

  const hideStaticLoader = () => {
    if (import.meta.client) {
      const el = document.getElementById('__page-loader-static')
      if (!el) return

      const top = document.getElementById('__pls-top')
      const bot = document.getElementById('__pls-bot')
      const logo = document.getElementById('__pls-logo')

      if (!top || !bot) {
        // Fallback si no tiene la estructura split
        el.style.transition = 'opacity 0.5s ease'
        el.style.opacity = '0'
        setTimeout(() => el.remove(), 600)
        return
      }

      const easing = 'cubic-bezier(0.76, 0, 0.24, 1)'
      const dur = '0.95s'

      // 1. Logo se desvanece
      if (logo) {
        logo.style.transition = 'opacity 0.3s ease'
        logo.style.opacity = '0'
      }

      // 2. Las cortinas se abren deslizándose en sentidos opuestos
      setTimeout(() => {
        top.style.transition = `transform ${dur} ${easing}`
        bot.style.transition = `transform ${dur} ${easing}`
        top.style.transform = 'translateY(-100%)'
        bot.style.transform = 'translateY(100%)'

        // 3. A mitad de la animación activa las entradas del hero
        setTimeout(() => {
          document.body.classList.add('loader-revealed')
        }, 380)

        // 4. Eliminar el loader tras completar la animación
        setTimeout(() => el.remove(), 1100)
      }, 300)
    }
  }

  const hide = () => {
    hideStaticLoader()
    isLoading.value = false
  }

  const show = () => {
    isLoading.value = true
  }

  /** Bloquea el loader (impide que se oculte automáticamente) */
  const lock = () => {
    lockCount.value++
  }

  /** Libera el lock; cuando el contador llega a 0 oculta el loader */
  const unlock = () => {
    lockCount.value = Math.max(0, lockCount.value - 1)
    if (lockCount.value === 0) hide()
  }

  return { isLoading, lockCount, show, hide, lock, unlock }
}
