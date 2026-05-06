import process from 'node:process'

// Allow self-signed SSL certs for local .test domains in SSR
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Escalada Libre A.C.',
      titleTemplate: '%s | Escalada Libre A.C.',
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Inter:wght@400;500;600&family=Overpass:wght@700&family=Poppins:wght@600&family=Readex+Pro:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://escaladapro-api.test'
    }
  },
  // routeRules: {
  //   // Páginas estáticas — pre-renderizadas en build
  //   '/':               { prerender: true },
  //   '/historia':       { prerender: true },
  //   '/transparencia':  { prerender: true },
  //   '/como-apoyar':    { prerender: true },
  //   '/como-apoyar/productos': { prerender: true },
  //   '/como-apoyar/productos/**': { ssr: true },
  //   '/como-apoyar/**': { prerender: true },
  //   '/patrocinio':     { prerender: true },
  //   '/patrocinio-2':   { prerender: true },
  //   // Patrocinadores detalle — SSR para SEO dinámico
  //   '/patrocinador/**': { ssr: true },
  //   // Páginas con contenido dinámico desde la BD — SSR
  //   '/nosotros':       { ssr: true },
  //   // Blog — SSR para SEO dinámico
  //   '/blog':           { ssr: true },
  //   '/blog/**':        { ssr: true },
  //   // Actividades — SSR (contenido dinámico indexable)
  //   '/actividades':    { ssr: true },
  //   // Contacto — solo cliente, no necesita SEO
  //   '/contacto':       { ssr: false },
  // }

  routeRules: {
  // Solo deja prerender si realmente son páginas fijas
  '/': { prerender: true },

  // Si estas páginas se editan desde backend/admin, mejor SSR
  '/historia': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/transparencia': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/como-apoyar': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/como-apoyar/productos': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/como-apoyar/productos/**': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/patrocinio': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/patrocinador/**': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/nosotros': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/blog': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/blog/**': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/actividades': {
    ssr: true,
    headers: {
      'cache-control': 'no-store, max-age=0'
    }
  },

  '/contacto': { ssr: false }
}
})