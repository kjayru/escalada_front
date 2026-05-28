<template>
  <div class="blog-page">

    <!-- Post destacado (último post) -->
    <section v-if="featured" class="bg-white">
      
      <!-- Versión MÓVIL: diseño estándar (imagen → categoría → título → descripción) -->
      <div class="block lg:hidden max-w-[1200px] mx-auto px-6 mb-16" data-reveal>
        <div class="flex flex-col">
          <!-- Imagen primero -->
          <NuxtLink
            :to="featured.slug ? '/blog/' + featured.slug : '/blog'"
            class="overflow-hidden mb-5 block"
            style="height: 300px;"
          >
            <img
              :src="featured.imagen"
              :alt="featured.titulo"
              class="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </NuxtLink>

          <!-- Categoría/Tagline -->
          <div class="flex items-center gap-4 mb-4">
            <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
            <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ featured.tagline }}</span>
          </div>

          <!-- Título -->
          <NuxtLink
            :to="featured.slug ? '/blog/' + featured.slug : '/blog'"
            class="text-[2.8125rem] font-medium text-[#6A6867] leading-tight mb-4 block hover:opacity-80 transition-opacity"
            style="font-family: 'Readex Pro', sans-serif; font-style: normal;"
          >
            {{ featured.titulo }}
          </NuxtLink>

          <!-- Descripción -->
          <p class="text-[1.25rem] font-normal text-[#6A6867] leading-relaxed" style="font-family: 'Readex Pro', sans-serif; font-style: normal;">
            {{ featured.descripcion }}
          </p>
        </div>
      </div>

      <!-- Versión DESKTOP: diseño especial con overlay -->
      <div class="hidden lg:block max-w-[1200px] mx-auto px-6 lg:px-12" data-reveal>
        <!-- Contenedor con altura fija -->
        <div class="relative mb-16" style="height: 500px;">

          <!-- Imagen: desde 30% izquierdo hasta el borde derecho, altura completa -->
          <NuxtLink
            :to="featured.slug ? '/blog/' + featured.slug : '/blog'"
            class="absolute top-0 bottom-0 right-0 overflow-hidden"
            style="left: 30%;"
          >
            <img
              :src="featured.imagen"
              :alt="featured.titulo"
              class="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </NuxtLink>

          <!-- Card: solo el título tiene fondo blanco, tagline y descripción sin fondo -->
          <div class="absolute left-0 right-auto z-10 flex flex-col justify-center px-0" style="width: 52%; top: 0; bottom: 0;">
            <!-- Tagline: sin fondo -->
            <div class="flex items-center gap-4 mb-4 px-10 lg:px-14">
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ featured.tagline }}</span>
            </div>
            <!-- Título: con fondo blanco -->
            <div class="bg-white px-10 lg:px-14 pt-8 pb-6">
              <NuxtLink
                :to="featured.slug ? '/blog/' + featured.slug : '/blog'"
                class="text-[2.8125rem] font-medium text-[#6A6867] leading-tight max-w-[400px] block hover:opacity-80 transition-opacity"
                style="font-family: 'Readex Pro', sans-serif; font-style: normal;"
              >
                {{ featured.titulo }}
              </NuxtLink>
            </div>
            <!-- Descripción: sin fondo -->
            <p class="text-[1.25rem] font-normal text-[#6A6867] leading-relaxed max-w-[360px] px-10 lg:px-14 pt-4" style="font-family: 'Readex Pro', sans-serif; font-style: normal;">
              {{ featured.descripcion }}
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Primera serie de 4 posts -->
    <section class="bg-white pb-4">
      <div class="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          v-for="(post, index) in postsSerieUno"
          :key="`s1-${post.id}`"
          class="flex flex-col mb-16"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Imagen (primero en móvil) -->
          <NuxtLink
            :to="post.slug ? '/blog/' + post.slug : '#'"
            class="lg:w-[55%] overflow-hidden order-1 block"
            style="height: 453px;"
          >
            <img
              :src="post.imagen"
              :alt="post.titulo"
              class="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </NuxtLink>

          <!-- Texto -->
          <div
            class="lg:w-[45%] flex flex-col justify-center px-0 lg:px-16 pt-10 lg:py-12 order-2"
          >
            <!-- Tagline -->
            <div
              class="flex items-center gap-4 mb-5"
              :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''"
            >
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ post.tagline }}</span>
            </div>
            <NuxtLink
              :to="post.slug ? '/blog/' + post.slug : '#'"
              class="text-[2.8125rem] font-medium text-[#6A6867] leading-tight mb-4 max-w-[422px] block hover:opacity-80 transition-opacity"
              style="font-family: 'Readex Pro', sans-serif; font-style: normal;"
            >
              {{ post.titulo }}
            </NuxtLink>
            <p class="text-[1.25rem] font-normal text-[#6A6867] leading-relaxed max-w-[412px]" style="font-family: 'Readex Pro', sans-serif; font-style: normal;">
              {{ post.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Slider -->
    <section class="partners-slider relative h-[226px] lg:h-[80vh] lg:max-h-[800px]">
      <Swiper
        :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="0"
        :navigation="{
          prevEl: '.blog-swiper-button-prev',
          nextEl: '.blog-swiper-button-next',
        }"
        :pagination="{
          el: '.blog-swiper-pagination',
          clickable: true,
          type: 'bullets',
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :loop="true"
        class="h-full w-full"
      >
        <SwiperSlide v-for="sponsor in sponsorsSliderData" :key="sponsor.id">
          <div class="relative h-full w-full bg-cover bg-center" :style="`background-image: url('${sponsor.slideImage}')`">
            <!-- Mobile Layout -->
            <div class="lg:hidden relative z-10 h-full flex flex-col justify-between p-6">
              <!-- Logo arriba -->
              <div>
                <img :src="sponsor.logo" :alt="sponsor.name" class="w-40" />
              </div>
              <!-- Texto y botón abajo -->
              <div class="flex items-end justify-between gap-4">
                <p class="text-white text-base leading-relaxed flex-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;">{{ sponsor.tagline }}</p>
                <NuxtLink
                  :to="`/patrocinador/${sponsor.slug}`"
                  class="inline-flex items-center gap-2 text-[#F8C52D] flex-shrink-0"
                  style="font-family: 'Readex Pro', sans-serif; font-weight: 700; font-size: 1.125rem;"
                >
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-5 h-auto arrow-icon" />
                </NuxtLink>
              </div>
            </div>
            <!-- Desktop Layout -->
            <div class="hidden lg:block relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div class="h-full flex items-center">
                <div class="max-w-xl">
                  <img :src="sponsor.logo" :alt="sponsor.name" class="w-64 mb-8" />
                  <p class="text-white text-lg mb-8 leading-relaxed">{{ sponsor.tagline }}</p>
                  <NuxtLink
                    :to="`/patrocinador/${sponsor.slug}`"
                    class="inline-flex items-center gap-3 text-[#F8C52D] group/link"
                    style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
                  >
                    Ver más
                    <img src="/images/arrow.svg" alt="" class="w-6 h-auto arrow-icon" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- Navigation Arrows - Hidden on mobile, visible on desktop -->
        <div class="blog-swiper-button-prev absolute top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div class="blog-swiper-button-next absolute top-1/2 right-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </Swiper>
    </section>
    
    <!-- Pagination Dots - Outside slider -->
    <div class="blog-swiper-pagination flex justify-center gap-2 pt-8"></div>

    <!-- Otros patrocinadores -->
    <section class="otros-patrocinadores py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl text-[#6A6867] mb-12" style="font-family: 'Readex Pro', sans-serif; font-weight: 500;">
          Otros patrocinadores
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <template v-if="otrosPlacements?.length">
            <div
              v-for="item in otrosPlacements.slice(0, 2)"
              :key="item.id"
              class="relative overflow-hidden group cursor-pointer bg-cover bg-center h-[229px] md:min-h-[500px]"
              :style="item.banner?.url ? `background-image: url('${item.banner.url}')` : 'background-color: #1e3a3a'"
            >
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute bottom-8 right-8 z-10">
                <a
                  :href="item.link_url ?? '#'"
                  :target="item.link_url && item.link_url !== '#' ? '_blank' : undefined"
                  :rel="item.link_url && item.link_url !== '#' ? 'noopener noreferrer' : undefined"
                  class="inline-flex items-center gap-3 text-white group/link"
                  style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
                >
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-6 h-auto" />
                </a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="relative overflow-hidden cursor-pointer bg-cover bg-center h-[229px] md:min-h-[500px]" style="background-image: url('/images/patrocinador1.png');">
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute bottom-8 right-8 z-10">
                <a href="#" class="inline-flex items-center gap-3 text-white" style="font-family: 'Readex Pro', sans-serif; font-weight: 700;">
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-6 h-auto" />
                </a>
              </div>
            </div>
            <div class="relative overflow-hidden cursor-pointer bg-cover bg-center h-[229px] md:min-h-[500px]" style="background-image: url('/images/patrocinador2.png');">
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute bottom-8 right-8 z-10">
                <a href="#" class="inline-flex items-center gap-3 text-white" style="font-family: 'Readex Pro', sans-serif; font-weight: 700;">
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-6 h-auto" />
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Segunda serie y posts adicionales -->
    <section class="bg-white pb-4">
      <div class="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          v-for="(post, index) in postsAfterSerieOne"
          :key="`s2-${post.id}`"
          class="flex flex-col mb-16"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Imagen -->
          <NuxtLink
            :to="post.slug ? '/blog/' + post.slug : '#'"
            class="lg:w-[55%] overflow-hidden block"
            style="height: 453px;"
          >
            <img
              :src="post.imagen"
              :alt="post.titulo"
              class="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </NuxtLink>

          <!-- Texto -->
          <div class="lg:w-[45%] flex flex-col justify-center px-0 lg:px-16 pt-10 lg:py-12">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ post.tagline }}</span>
            </div>
            <NuxtLink
              :to="post.slug ? '/blog/' + post.slug : '#'"
              class="text-[2.8125rem] font-medium text-[#6A6867] leading-tight mb-4 max-w-[422px] block hover:opacity-80 transition-opacity"
              style="font-family: 'Readex Pro', sans-serif; font-style: normal;"
            >
              {{ post.titulo }}
            </NuxtLink>
            <p class="text-[1.25rem] font-normal text-[#6A6867] leading-relaxed max-w-[412px]" style="font-family: 'Readex Pro', sans-serif; font-style: normal;">
              {{ post.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Paginación -->
    <section v-if="hasMore" class="bg-white py-16 flex justify-center">
      <button
        @click="loadMore"
        :disabled="isLoadingMore"
        class="px-20 h-[52px] flex items-center justify-center bg-white border border-[#6A6867] rounded-full text-[#6A6867] font-bold text-[0.9375rem] tracking-widest hover:bg-[#6A6867] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style="font-family: 'Readex Pro', sans-serif; font-style: normal; line-height: normal;"
      >
        {{ isLoadingMore ? 'CARGANDO...' : 'MÁS ARTÍCULOS' }}
      </button>
    </section>

    <!-- Newsletter + Product Cards -->
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { BlogPost, Sponsor, SponsorPlacement } from '~/types/api'

useSeoMeta({
  title: 'Blog - Escalada Libre',
  description: 'Noticias, eventos y artículos sobre escalada en México. Escalada Libre México A.C.',
})

const api = useApi()
const [{ data: response }, { data: otrosPlacements }, { data: sponsors }] = await Promise.all([
  useAsyncData('blog-index', () =>
    api.blog.getAll({ per_page: 9 }).catch(() => ({ data: [], meta: { current_page: 1, last_page: 1, per_page: 9, total: 0 } }))
  ),
  useAsyncData('blog-otros-patrocinadores', () =>
    api.sponsorPlacements.getAll({ placement: 'otros_patrocinadores' }).catch(() => [] as SponsorPlacement[])
  ),
  useAsyncData('blog-sponsors', () =>
    api.sponsors.getAll().catch(() => [] as Sponsor[])
  ),
])

const sponsorsSliderData = computed(() => {
  const sp = sponsors.value ?? []
  if (sp.length) {
    return sp
      .filter((s: Sponsor) => (s.circle_logo?.url || s.logo?.url) && s.slide_image?.url)
      .map((s: Sponsor) => ({
        id: s.id,
        name: s.name,
        slug: s.slug,
        logo: s.circle_logo?.url ?? s.logo?.url,
        slideImage: s.slide_image?.url,
        tagline: s.tagline ?? '',
      }))
  }
  return []
})

const toPost = (p: BlogPost) => ({
  id: p.id,
  slug: p.slug,
  tagline: p.category?.toUpperCase() ?? 'BLOG',
  titulo: p.title,
  descripcion: p.excerpt ?? '',
  imagen: p.featured_media?.url ?? '/images/n-1.png',
})

const fallbackPosts = [
  { id: 1, slug: '', tagline: 'EVENTOS', titulo: 'Todo para escaladores', descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...', imagen: '/images/img-20200308-wa-00051.png' },
  { id: 2, slug: '', tagline: 'EVENTOS', titulo: 'Exposición fotográfica', descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...', imagen: '/images/huasteca-41.png' },
  { id: 3, slug: '', tagline: 'EVENTOS', titulo: 'Todo para escaladores', descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...', imagen: '/images/img-20200308-wa-00051.png' },
  { id: 4, slug: '', tagline: 'EVENTOS', titulo: 'Exposición fotográfica', descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...', imagen: '/images/huasteca-41.png' },
]

// Paginación reactiva
const allPosts = ref<BlogPost[]>(response.value?.data ?? [])
const totalPosts = ref(response.value?.meta?.total ?? 0)
const nextApiPage = ref(2)
const visibleCount = ref(9)
const isLoadingMore = ref(false)

const visiblePostsSlice = computed(() =>
  allPosts.value.slice(0, visibleCount.value).map(toPost)
)

const hasMore = computed(() =>
  totalPosts.value > 0 && visibleCount.value < totalPosts.value
)

async function loadMore() {
  if (isLoadingMore.value || !hasMore.value) return
  isLoadingMore.value = true
  try {
    const newCount = visibleCount.value + 4
    if (newCount <= allPosts.value.length) {
      visibleCount.value = newCount
    } else {
      const result = await api.blog.getAll({ per_page: 9, page: nextApiPage.value })
      allPosts.value = [...allPosts.value, ...result.data]
      if (result.meta) totalPosts.value = result.meta.total
      nextApiPage.value++
      visibleCount.value = Math.min(newCount, allPosts.value.length)
    }
  } catch {
    // silent fail
  } finally {
    isLoadingMore.value = false
  }
}

const featured = computed(() => visiblePostsSlice.value[0] ?? null)

const postsSerieUno = computed(() => {
  const sl = visiblePostsSlice.value.slice(1, 5)
  return sl.length ? sl : fallbackPosts
})

const postsAfterSerieOne = computed(() => {
  const sl = visiblePostsSlice.value.slice(5)
  return sl.length ? sl : fallbackPosts
})
</script>
