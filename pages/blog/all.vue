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
            <NuxtLink
              :to="articulo.slug ? '/blog/' + articulo.slug : '#'"
              class="text-xl lg:text-2xl font-normal text-[#6A6867] leading-tight mb-3 block hover:opacity-80 transition-opacity"
            >
              {{ articulo.titulo }}
            </NuxtLink>

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
    <section class="mountain-prefooter" style="min-height: 675px;">
      <div class="flex flex-col items-center justify-center py-24 px-4 text-center" style="min-height: 675px;">
        <img src="/images/logoescalada.svg" alt="Escalada Libre" class="w-40 lg:w-52 mb-8" />
        <h2 class="text-4xl lg:text-6xl font-bold text-[#1a1a1a] mb-8 tracking-wider">¡GRACIAS POR TU APOYO!</h2>
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
import { ref, computed, watch } from 'vue'
import type { BlogPost } from '~/types/api'

useSeoMeta({
  title: 'Todos los artículos - Blog - Escalada Libre',
  description: 'Todos los artículos del blog de Escalada Libre México A.C. Noticias, eventos y actividades.',
})

const api = useApi()
const paginaActual = ref(1)

const { data: response, refresh } = await useAsyncData('blog-all', () =>
  api.blog.getAll({ page: paginaActual.value, per_page: 18 }).catch(() => null)
)
watch(paginaActual, () => refresh())

const totalPaginas = computed(() => response.value?.meta?.last_page ?? 1)

const fallbackArticulos = [
  { id: 1, slug: '', tagline: 'MESA DE TRABAJO', titulo: 'Nos reunimos con el gobierno de Nuevo León', descripcion: 'Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León', imagen: '/images/n-1.png' },
  { id: 2, slug: '', tagline: 'EVENTOS', titulo: 'Todo para escaladores', descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...', imagen: '/images/img-20200308-wa-00051.png' },
  { id: 3, slug: '', tagline: 'EVENTOS', titulo: 'Exposición fotográfica', descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...', imagen: '/images/huasteca-41.png' },
]

const articulos = computed(() => {
  const apiData = response.value?.data ?? []
  if (apiData.length) {
    return apiData.map((p: BlogPost) => ({
      id: p.id,
      slug: p.slug,
      tagline: p.author?.name?.toUpperCase() ?? 'BLOG',
      titulo: p.title,
      descripcion: p.excerpt ?? '',
      imagen: p.featured_media?.url ?? '/images/n-1.png',
    }))
  }
  return fallbackArticulos
})

const paginasVisibles = computed(() => {
  const paginas: (number | string)[] = []
  const rango = 4

  for (let i = 1; i <= Math.min(rango, totalPaginas.value); i++) {
    paginas.push(i)
  }

  if (totalPaginas.value > rango + 2) {
    paginas.push('...')
    paginas.push(totalPaginas.value)
  } else if (totalPaginas.value > rango) {
    for (let i = rango + 1; i <= totalPaginas.value; i++) {
      paginas.push(i)
    }
  }

  return paginas
})
</script>
