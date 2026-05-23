/**
 * scroll-reveal.client.ts
 *
 * Plugin cliente-only de Nuxt 3 que activa animaciones de entrada al scroll.
 * Inspirado en AOS (Animate On Scroll) — sin dependencias externas.
 *
 * Uso en templates:
 *   <div data-reveal>              → fade-up (por defecto)
 *   <div data-reveal="fade">       → solo opacidad
 *   <div data-reveal="fade-left">  → entra desde la izquierda
 *   <div data-reveal="fade-right"> → entra desde la derecha
 *   <div data-reveal="zoom-in">    → zoom ligero
 *   <div data-reveal-delay="200">  → delay 200ms (100|200|300|400|500|600)
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Si el navegador no soporta IntersectionObserver no hacemos nada
  // (los elementos quedan visibles porque el CSS aplica .is-revealed en ese caso)
  if (typeof IntersectionObserver === 'undefined') {
    // Hacer todos los elementos visibles inmediatamente
    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.classList.add('is-revealed')
    })
    return
  }

  const SELECTOR = '[data-reveal]'
  const REVEALED_CLASS = 'is-revealed'
  const THRESHOLD = 0.12 // % del elemento visible para disparar
  const ROOT_MARGIN = '0px 0px -60px 0px' // trigger un poco antes del borde

  let observer: IntersectionObserver

  function initObserver() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(REVEALED_CLASS)
          } else {
            // Igual que AOS once:false — revierte cuando sale del viewport
            entry.target.classList.remove(REVEALED_CLASS)
          }
        })
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    )
  }

  function observeAll() {
    document.querySelectorAll<HTMLElement>(SELECTOR).forEach(el => {
      observer.observe(el)
    })
  }

  // Inicializar en primer mount
  nuxtApp.hook('app:mounted', () => {
    initObserver()
    observeAll()
  })

  // Re-observar en cada navegación de página (SPA) para capturar nuevos elementos
  nuxtApp.hook('page:finish', () => {
    // Pequeño delay para que Vue renderice el nuevo contenido
    setTimeout(() => {
      observeAll()
    }, 50)
  })
})
