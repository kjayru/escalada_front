<template>
  <div class="blog-page">

    <!-- Post destacado (último post) -->
    <section v-if="featured" class="bg-white">
      
      <!-- Versión MÓVIL: diseño estándar (imagen → categoría → título → descripción) -->
      <div class="block lg:hidden max-w-[1200px] mx-auto px-6 mb-16">
        <div class="flex flex-col">
          <!-- Imagen primero -->
          <div class="overflow-hidden mb-5" style="height: 300px;">
            <img
              :src="featured.imagen"
              :alt="featured.titulo"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Categoría/Tagline -->
          <div class="flex items-center gap-4 mb-4">
            <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
            <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ featured.tagline }}</span>
          </div>

          <!-- Título -->
          <NuxtLink
            :to="featured.slug ? '/blog/' + featured.slug : '/blog'"
            class="text-2xl font-normal text-[#6A6867] leading-tight mb-4 block hover:opacity-80 transition-opacity"
          >
            {{ featured.titulo }}
          </NuxtLink>

          <!-- Descripción -->
          <p class="text-base text-[#6A6867] leading-relaxed">
            {{ featured.descripcion }}
          </p>
        </div>
      </div>

      <!-- Versión DESKTOP: diseño especial con overlay -->
      <div class="hidden lg:block max-w-[1200px] mx-auto px-6 lg:px-12">
        <!-- Contenedor con altura fija -->
        <div class="relative mb-16" style="height: 500px;">

          <!-- Imagen: desde 30% izquierdo hasta el borde derecho, altura completa -->
          <div class="absolute top-0 bottom-0 right-0 overflow-hidden" style="left: 30%;">
            <img
              :src="featured.imagen"
              :alt="featured.titulo"
              class="w-full h-full object-cover"
            />
          </div>

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
                class="text-3xl lg:text-[38px] font-normal text-[#6A6867] leading-tight max-w-[400px] block hover:opacity-80 transition-opacity"
              >
                {{ featured.titulo }}
              </NuxtLink>
            </div>
            <!-- Descripción: sin fondo -->
            <p class="text-base text-[#6A6867] leading-relaxed max-w-[360px] px-10 lg:px-14 pt-4">
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
          <div class="lg:w-[55%] overflow-hidden order-1" style="height: 453px;">
            <img
              :src="post.imagen"
              :alt="post.titulo"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Texto -->
          <div
            class="lg:w-[45%] flex flex-col justify-center px-10 lg:px-16 py-12 order-2"
          >
            <!-- Tagline -->
            <div
              class="flex items-center gap-4 mb-5"
              :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse lg:flex-row'"
            >
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ post.tagline }}</span>
            </div>
            <NuxtLink
              :to="post.slug ? '/blog/' + post.slug : '#'"
              class="text-2xl lg:text-[32px] font-normal text-[#6A6867] leading-tight mb-4 max-w-[422px] block hover:opacity-80 transition-opacity"
            >
              {{ post.titulo }}
            </NuxtLink>
            <p class="text-base text-[#6A6867] leading-relaxed max-w-[412px]">
              {{ post.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Slider -->
    <section class="partners-slider relative" style="height: calc(100vh - 90px);">
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
            <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div class="max-w-xl">
                <img :src="sponsor.logo" :alt="sponsor.name" class="w-64 mb-8" />
                <p class="text-white text-lg mb-8 leading-relaxed">{{ sponsor.description }}</p>
                <a
                  :href="sponsor.url"
                  :target="sponsor.url !== '#' ? '_blank' : undefined"
                  :rel="sponsor.url !== '#' ? 'noopener noreferrer' : undefined"
                  class="inline-flex items-center gap-3 text-[#F8C52D] group/link"
                  style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
                >
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-6 h-auto arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- Navigation Arrows -->
        <div class="blog-swiper-button-prev absolute top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div class="blog-swiper-button-next absolute top-1/2 right-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>

        <!-- Pagination Dots -->
        <div class="blog-swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>
      </Swiper>
    </section>

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
              class="relative overflow-hidden group cursor-pointer bg-cover bg-center min-h-[500px]"
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
            <div class="relative overflow-hidden cursor-pointer bg-cover bg-center min-h-[500px]" style="background-image: url('/images/patrocinador1.png');">
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute bottom-8 right-8 z-10">
                <a href="#" class="inline-flex items-center gap-3 text-white" style="font-family: 'Readex Pro', sans-serif; font-weight: 700;">
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-6 h-auto" />
                </a>
              </div>
            </div>
            <div class="relative overflow-hidden cursor-pointer bg-cover bg-center min-h-[500px]" style="background-image: url('/images/patrocinador2.png');">
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
          <div class="lg:w-[55%] overflow-hidden" style="height: 453px;">
            <img
              :src="post.imagen"
              :alt="post.titulo"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Texto -->
          <div class="lg:w-[45%] flex flex-col justify-center px-10 lg:px-16 py-12">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ post.tagline }}</span>
            </div>
            <NuxtLink
              :to="post.slug ? '/blog/' + post.slug : '#'"
              class="text-2xl lg:text-[32px] font-normal text-[#6A6867] leading-tight mb-4 max-w-[422px] block hover:opacity-80 transition-opacity"
            >
              {{ post.titulo }}
            </NuxtLink>
            <p class="text-base text-[#6A6867] leading-relaxed max-w-[412px]">
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
        class="px-20 h-[52px] flex items-center justify-center bg-white border border-[#9E9E9E] rounded-full text-[#9E9E9E] font-semibold text-sm tracking-widest hover:border-gray-500 hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
    return sp.map((s: Sponsor) => ({
      id: s.id,
      name: s.name,
      logo: s.logo?.url ?? '/images/exposure.png',
      slideImage: s.slide_image?.url ?? '/images/slide1.png',
      description: s.description ?? 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.',
      url: s.website_url ?? '#',
    }))
  }
  return [
    { id: -1, name: 'Exposure', logo: '/images/exposure.png', slideImage: '/images/slide1.png', description: 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.', url: '#' },
    { id: -2, name: 'Exposure', logo: '/images/exposure.png', slideImage: '/images/slide1.png', description: 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.', url: '#' },
    { id: -3, name: 'Exposure', logo: '/images/exposure.png', slideImage: '/images/slide1.png', description: 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.', url: '#' },
  ]
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
