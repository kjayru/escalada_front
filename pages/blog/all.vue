<template>
  <div class="blog-all-page">

    <!-- Grilla de artículos -->
    <section class="bg-white pt-16 pb-12 lg:pt-20 lg:pb-16">
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <div
            v-for="articulo in articulos"
            :key="articulo.id"
            class="flex flex-col"
          >
            <!-- Tagline (encima de la imagen) -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-xs text-[#6A6867] font-medium">{{ articulo.tagline }}</span>
            </div>

            <!-- Imagen -->
            <div class="overflow-hidden mb-5" style="height: 264px;">
              <img
                :src="articulo.imagen"
                :alt="articulo.titulo"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Título -->
            <h2 class="text-xl lg:text-2xl font-normal text-[#6A6867] leading-tight mb-3">
              {{ articulo.titulo }}
            </h2>

            <!-- Descripción -->
            <p class="text-sm lg:text-base text-[#6A6867] leading-relaxed">
              {{ articulo.descripcion }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Paginación -->
    <section class="bg-white pb-16">
      <div class="flex items-center justify-center gap-4">
        <!-- Botón anterior -->
        <button
          class="h-[50px] px-8 bg-[#F8C52D] text-gray-900 font-semibold text-sm tracking-widest hover:bg-[#e0b525] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="paginaActual === 1"
          @click="paginaActual--"
        >
          ANTERIOR
        </button>

        <!-- Números de página -->
        <div class="flex items-center gap-1 text-[#6A6867]">
          <button
            v-for="pagina in paginasVisibles"
            :key="pagina"
            class="w-9 h-9 flex items-center justify-center text-sm font-medium transition-colors"
            :class="pagina === paginaActual
              ? 'bg-[#F8C52D] text-gray-900 font-bold'
              : pagina === '...'
                ? 'cursor-default'
                : 'hover:text-gray-900'"
            :disabled="pagina === '...'"
            @click="pagina !== '...' && (paginaActual = Number(pagina))"
          >
            {{ pagina }}
          </button>
        </div>

        <!-- Botón siguiente -->
        <button
          class="h-[50px] px-8 bg-[#F8C52D] text-gray-900 font-semibold text-sm tracking-widest hover:bg-[#e0b525] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="paginaActual === totalPaginas"
          @click="paginaActual++"
        >
          SIGUIENTE
        </button>
      </div>
    </section>

    <!-- Newsletter + Product Cards -->
    <section class="prefooter-cards py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-[#f5f5f0] rounded-xl p-8 flex flex-col justify-between min-h-[357px]">
            <div>
              <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#6A6867] mb-4">NEWSLETTER</p>
              <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] leading-snug mb-6">
                Recibe noticias de Escalada Libre a tu correo
              </h3>
            </div>
            <div class="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Escribe tu correo"
                class="w-full px-4 py-3 border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D]"
              />
              <button class="self-end px-6 py-3 bg-[#F8C52D] text-gray-900 font-medium text-sm hover:bg-[#e0b525] transition-colors">
                Suscribir
              </button>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden min-h-[357px]">
            <img src="/images/patrocinador1.png" alt="Aspect Pro" class="w-full h-full object-cover absolute inset-0" />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="relative z-10 p-8">
              <p class="text-white font-bold text-xl lg:text-2xl tracking-wider">ASPECT PRO</p>
              <p class="text-white/80 text-sm mt-1">Built to go big</p>
            </div>
          </div>
          <div class="bg-[#1a1a2e] rounded-xl p-8 flex items-center justify-center min-h-[357px]">
            <img src="/images/exposure.png" alt="ClimbWork" class="max-w-[70%] mx-auto filter brightness-0 invert" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mountain Pre-Footer -->
    <section class="mountain-prefooter relative overflow-hidden" style="min-height: 675px;">
      <img src="/images/potrero-1.png" alt="Sierra Madre" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative z-10 flex flex-col items-center justify-center py-24 px-4 text-center" style="min-height: 675px;">
        <img src="/images/logoescalada.svg" alt="Escalada Libre" class="w-40 lg:w-52 mb-8 filter brightness-0 invert" />
        <h2 class="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-wider">¡GRACIAS POR TU APOYO!</h2>
        <NuxtLink
          to="/como-apoyar"
          class="px-10 py-4 bg-[#F8C52D] text-gray-900 font-semibold text-base lg:text-lg hover:bg-[#e0b525] transition-colors"
        >
          Apoyar
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'Todos los artículos - Blog - Escalada Libre',
  description: 'Todos los artículos del blog de Escalada Libre México A.C. Noticias, eventos y actividades.',
})

const totalPaginas = 181
const paginaActual = ref(1)

const paginasVisibles = computed(() => {
  const paginas: (number | string)[] = []
  const rango = 4

  for (let i = 1; i <= Math.min(rango, totalPaginas); i++) {
    paginas.push(i)
  }

  if (totalPaginas > rango + 2) {
    paginas.push('...')
    paginas.push(totalPaginas)
  } else if (totalPaginas > rango) {
    for (let i = rango + 1; i <= totalPaginas; i++) {
      paginas.push(i)
    }
  }

  return paginas
})

const articulos = [
  {
    id: 1,
    tagline: 'MESA DE TRABAJO',
    titulo: 'Nos reunimos con el gobierno de Nuevo León',
    descripcion: 'Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León',
    imagen: '/images/n-1.png',
  },
  {
    id: 2,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 3,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
  {
    id: 4,
    tagline: 'MESA DE TRABAJO',
    titulo: 'Nos reunimos con el gobierno de Nuevo León',
    descripcion: 'Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León',
    imagen: '/images/n-1.png',
  },
  {
    id: 5,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 6,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
  {
    id: 7,
    tagline: 'MESA DE TRABAJO',
    titulo: 'Nos reunimos con el gobierno de Nuevo León',
    descripcion: 'Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León',
    imagen: '/images/n-1.png',
  },
  {
    id: 8,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 9,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
  {
    id: 10,
    tagline: 'MESA DE TRABAJO',
    titulo: 'Nos reunimos con el gobierno de Nuevo León',
    descripcion: 'Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León',
    imagen: '/images/n-1.png',
  },
  {
    id: 11,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 12,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
  {
    id: 13,
    tagline: 'MESA DE TRABAJO',
    titulo: 'Nos reunimos con el gobierno de Nuevo León',
    descripcion: 'Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León',
    imagen: '/images/n-1.png',
  },
  {
    id: 14,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 15,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
  {
    id: 16,
    tagline: 'MESA DE TRABAJO',
    titulo: 'Nos reunimos con el gobierno de Nuevo León',
    descripcion: 'Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León',
    imagen: '/images/n-1.png',
  },
  {
    id: 17,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 18,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
]
</script>
