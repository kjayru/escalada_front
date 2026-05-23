/**
 * scroll-expand.client.ts
 *
 * Efecto scroll-driven: imagen pequeña que se expande a pantalla completa
 * al hacer scroll, y se contrae al regresar.
 *
 * Uso en templates:
 *   <div class="scroll-expand-outer" data-scroll-expand style="height: clamp(...)">
 *     <div class="scroll-expand-frame">
 *       <img ... class="w-full h-full object-cover" />
 *     </div>
 *   </div>
 *
 * data-expand-padh   → padding horizontal máximo en vw (default: 0.15 = 15vw)
 * data-expand-padv   → padding vertical máximo en vh (default: 0.07 = 7%)
 */

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  let rafId: number | null = null
  let items: Array<{ outer: HTMLElement; frame: HTMLElement }> = []

  function collectItems() {
    items = []
    document.querySelectorAll<HTMLElement>('[data-scroll-expand]').forEach(outer => {
      const frame = outer.querySelector<HTMLElement>('.scroll-expand-frame')
      if (frame) items.push({ outer, frame })
    })
  }

  function updateFrame(outer: HTMLElement, frame: HTMLElement) {
    const rect = outer.getBoundingClientRect()
    const vh = window.innerHeight
    const vw = window.innerWidth

    // Solo aplicar en desktop (≥1024px)
    if (vw < 1024) {
      frame.style.top = '0px'
      frame.style.bottom = '0px'
      frame.style.left = '0px'
      frame.style.right = '0px'
      return
    }

    // progress: 0 cuando el borde inferior del elemento entra al viewport,
    // 1 cuando el top del elemento ha pasado al 30% por ENCIMA del viewport
    // → rango de ~1300px de scroll para una expansión gradual y dramática
    const startAt = vh * 0.9   // el elemento acaba de entrar (top a 90% del viewport)
    const endAt = vh * -0.3    // top 30% por encima del viewport (scrolled past)

    const raw = (startAt - rect.top) / (startAt - endAt)
    const progress = Math.max(0, Math.min(1, raw))
    const eased = easeOutQuart(progress)

    // Padding máximo inicial: horizontal 20vw, vertical 8% de la altura del outer
    const maxPadH = vw * 0.20
    const maxPadV = outer.offsetHeight * 0.08

    const padH = lerp(maxPadH, 0, eased)
    const padV = lerp(maxPadV, 0, eased)

    frame.style.left = `${padH}px`
    frame.style.right = `${padH}px`
    frame.style.top = `${padV}px`
    frame.style.bottom = `${padV}px`

    // Scale sutil en la imagen interna: empieza un poco más grande y se normaliza
    const img = frame.querySelector<HTMLElement>('img, video')
    if (img) {
      const scale = lerp(1.06, 1.0, eased)
      img.style.transform = `scale(${scale})`
    }
  }

  function update() {
    items.forEach(({ outer, frame }) => updateFrame(outer, frame))
  }

  function onScroll() {
    if (rafId) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(update)
  }

  function init() {
    collectItems()
    if (!items.length) return
    update()
    // El body es el contenedor real del scroll en este proyecto (html+body tienen h-full)
    document.body.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  }

  nuxtApp.hook('app:mounted', () => {
    // Pequeño delay para que Vue termine de renderizar
    setTimeout(init, 150)
  })

  nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
      document.body.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      init()
    }, 150)
  })
})
