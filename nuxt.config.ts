import process from 'node:process'

// Allow self-signed SSL certs for local .test domains in SSR
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://escaladapro-api.test'
    }
  },
  routeRules: {
    // Páginas estáticas — pre-renderizadas en build
    '/':               { prerender: true },
    '/historia':       { prerender: true },
    '/transparencia':  { prerender: true },
    '/como-apoyar':    { prerender: true },
    '/como-apoyar/productos': { prerender: true },
    '/como-apoyar/productos/**': { ssr: true },
    '/como-apoyar/**': { prerender: true },
    '/patrocinio':     { prerender: true },
    '/patrocinio-2':   { prerender: true },
    // Patrocinadores detalle — SSR para SEO dinámico
    '/patrocinador/**': { ssr: true },
    // Páginas con contenido dinámico desde la BD — SSR
    '/nosotros':       { ssr: true },
    // Blog — SSR para SEO dinámico
    '/blog':           { ssr: true },
    '/blog/**':        { ssr: true },
    // Actividades — SSR (contenido dinámico indexable)
    '/actividades':    { ssr: true },
    // Contacto — solo cliente, no necesita SEO
    '/contacto':       { ssr: false },
  }
})