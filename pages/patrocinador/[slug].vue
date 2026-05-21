<template>
  <div class="patrocinador-page">

    <!-- Estado de carga -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <div class="w-10 h-10 border-4 border-[#F8C52D] border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- Error / no encontrado -->
    <div v-else-if="error || !sponsor" class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <p class="text-[#6A6867] text-lg mb-4">No se encontró el patrocinador.</p>
        <NuxtLink to="/blog" class="text-[#F8C52D] font-medium hover:underline">← Volver al inicio</NuxtLink>
      </div>
    </div>

    <template v-else>

      <!-- ── Cabecera: Logo + Tagline ─────────────────────────────── -->
      <section class="bg-white pt-16 pb-10 lg:pt-20 lg:pb-12 text-center">
        <div class="max-w-[600px] mx-auto px-4 sm:px-6">

          <!-- Logo de sección (section_logo > logo > ícono genérico) -->
          <div class="flex justify-center mb-8">
            <img
              v-if="sponsor.section_logo?.url"
              :src="sponsor.section_logo.url"
              :alt="sponsor.name"
              class="h-[94px] w-auto object-contain"
            />
            <img
              v-else-if="sponsor.logo?.url"
              :src="sponsor.logo.url"
              :alt="sponsor.name"
              class="h-[94px] w-auto object-contain"
            />
            <svg
              v-else
              class="w-[120px] h-[120px] text-[#6A6867]"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              viewBox="0 0 120 120"
            >
              <circle cx="60" cy="60" r="54" />
              <polyline points="20,90 48,42 66,66 82,48 100,90" stroke-linejoin="round" />
              <circle cx="79" cy="36" r="8" />
            </svg>
          </div>

          <!-- Tagline -->
          <p
            v-if="sponsor.tagline"
            class="text-2xl lg:text-[2.1875rem] font-normal lg:font-medium text-[#6A6867] leading-snug mb-10 max-w-[550px] mx-auto"
            style="font-family: 'Readex Pro', sans-serif; font-style: normal;"
          >
            {{ sponsor.tagline }}
          </p>
          <p
            v-else
            class="text-2xl lg:text-[2.1875rem] font-normal lg:font-medium text-[#6A6867] leading-snug mb-10 max-w-[550px] mx-auto"
            style="font-family: 'Readex Pro', sans-serif; font-style: normal;"
          >
            {{ sponsor.name }}
          </p>

          <!-- Línea divisoria -->
          <div class="border-t border-gray-300 max-w-[590px] mx-auto"></div>

        </div>
      </section>

      <!-- ── Slider de imágenes ──────────────────────────────────── -->
      <section v-if="gallery.length" class="bg-white pb-0">
        <div class="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Imagen principal -->
          <div 
            class="relative overflow-hidden mb-4 h-[380px] lg:h-[617px]" 
            style="border: 0.5px solid #6A6867;"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <img
              :src="gallery[imagenActiva]?.url"
              :alt="gallery[imagenActiva]?.alt || sponsor?.name"
              class="w-full h-full object-contain transition-opacity duration-300"
            />

            <!-- Flecha izquierda (oculta en móvil) -->
            <button
              v-if="gallery.length > 1"
              @click="anterior"
              class="hidden lg:absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white lg:flex items-center justify-center shadow transition-colors"
              style="border-radius: 0.75rem;"
              aria-label="Imagen anterior"
            >
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Flecha derecha (oculta en móvil) -->
            <button
              v-if="gallery.length > 1"
              @click="siguiente"
              class="hidden lg:absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F8C52D] hover:bg-[#e0b525] lg:flex items-center justify-center shadow transition-colors"
              style="border-radius: 0.75rem;"
              aria-label="Imagen siguiente"
            >
              <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Dots -->
          <div v-if="gallery.length > 1" class="flex items-center justify-center gap-2 mb-4">
            <button
              v-for="(img, index) in gallery"
              :key="index"
              class="w-2 h-2 rounded-full transition-colors"
              :class="imagenActiva === index ? 'bg-[#F8C52D]' : 'bg-[#6A6867]'"
              @click="imagenActiva = index"
              :aria-label="`Ir a imagen ${index + 1}`"
            />
          </div>

          <!-- Miniaturas -->
          <div v-if="gallery.length > 1" class="grid grid-cols-4 gap-3 mb-0">
            <button
              v-for="(img, index) in gallery"
              :key="index"
              @click="imagenActiva = index"
              class="transition-opacity h-[80px] lg:h-[148px]"
              :class="imagenActiva === index ? 'opacity-100 ring-2 ring-[#F8C52D]' : 'opacity-60 hover:opacity-80'"
              style="border: 0.5px solid #6A6867; padding: 10px;"
            >
              <img
                :src="img.url"
                :alt="img.alt || sponsor.name"
                class="w-full h-full object-cover"
              />
            </button>
          </div>

        </div>
      </section>

      <!-- ── Descripción + Tarjeta lateral ─────────────────────── -->
      <section class="bg-white py-16 lg:py-20">
        <div class="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

            <!-- Izquierda: descripción + botón + redes -->
            <div class="lg:w-[55%] flex flex-col justify-between">
              <p
                v-if="sponsor.description"
                class="mb-10 whitespace-pre-line leading-relaxed"
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
              >
                {{ sponsor.description }}
              </p>

              <div class="flex flex-col gap-6">
                <!-- Botón "Comprar aquí" -->
                <div v-if="sponsor.buy_url">
                  <a
                    :href="sponsor.buy_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block w-full lg:w-auto lg:inline-block px-10 py-4 bg-[#F8C52D] text-[#6A6867] font-bold tracking-widest transition-colors hover:bg-[#6A6867] hover:text-[#F8C52D] rounded-[6.25rem] text-center"
                    style="font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem;"
                  >
                    COMPRAR AQUÍ
                  </a>
                </div>

                <!-- Redes sociales -->
                <div v-if="hasSocial" class="flex items-center gap-4">
                  <a
                    v-if="sponsor.social.facebook"
                    :href="sponsor.social.facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    class="text-[#6A6867] hover:text-gray-900 transition-colors"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    v-if="sponsor.social.twitter"
                    :href="sponsor.social.twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    class="text-[#6A6867] hover:text-gray-900 transition-colors"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    v-if="sponsor.social.email"
                    :href="`mailto:${sponsor.social.email}`"
                    aria-label="Correo"
                    class="text-[#6A6867] hover:text-gray-900 transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Derecha: tarjeta de representante (si tiene datos) o tarjeta genérica -->
            <div class="lg:w-[40%]">
              <div class="border border-gray-200 p-8 lg:p-10 h-full flex flex-col items-center text-center">

                <!-- Foto del representante -->
                <div class="w-[200px] h-[200px] rounded-full overflow-hidden mb-6 flex-shrink-0 bg-[#f5f5f0] flex items-center justify-center">
                  <img
                    v-if="sponsor.contact.image?.url"
                    :src="sponsor.contact.image.url"
                    :alt="sponsor.contact.name || sponsor.name"
                    class="w-full h-full object-cover"
                  />
                  <img
                    v-else-if="gallery[0]?.url"
                    :src="gallery[0].url"
                    :alt="sponsor.name"
                    class="w-full h-full object-cover"
                  />
                  <svg v-else class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <!-- Nombre del representante -->
                <template v-if="sponsor.contact.name">
                  <h3 class="text-2xl lg:text-[28px] font-normal text-[#6A6867] mb-1">
                    {{ sponsor.contact.name }}
                  </h3>
                  <p v-if="sponsor.contact.title" class="text-sm font-semibold text-[#6A6867] tracking-[0.15em] uppercase mb-6">
                    {{ sponsor.contact.title }}
                  </p>
                  <p v-if="sponsor.contact.text" class="text-sm lg:text-base text-[#6A6867] leading-relaxed">
                    {{ sponsor.contact.text }}
                  </p>
                </template>

                <!-- Fallback genérico si no hay representante -->
                <template v-else>
                  <h3
                    class="mb-4 leading-tight"
                    style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;"
                  >
                    ¿TE GUSTÓ ESTE<br />PRODUCTO?
                  </h3>
                  <p
                    class="leading-relaxed"
                    style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
                  >
                    Contáctanos para conocer más sobre este patrocinador y sus productos.
                  </p>
                </template>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ── Slider de Patrocinadores ───────────────────────────── -->
      <div v-if="sponsorsSlider.length" class="bg-white pb-12 overflow-hidden">
        <section class="partners-slider relative h-[226px] lg:h-[80vh] lg:max-h-[800px]">
          <Swiper
            :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
            :slides-per-view="1"
            :space-between="0"
            :navigation="{
              prevEl: '.sp-slider-prev',
              nextEl: '.sp-slider-next',
            }"
            :pagination="{
              el: '.sp-slider-dots',
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
            <SwiperSlide v-for="sp in sponsorsSlider" :key="sp.id">
              <div class="relative h-full w-full bg-cover bg-center" :style="`background-image: url('${sp.slideImage}')`">
                <!-- Mobile Layout -->
                <div class="lg:hidden relative z-10 h-full flex flex-col justify-between p-6">
                  <div>
                    <img :src="sp.logo" :alt="sp.name" class="w-40" />
                  </div>
                  <div class="flex items-end justify-between gap-4">
                    <p class="text-white text-base leading-relaxed flex-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;">{{ sp.description }}</p>
                    <NuxtLink
                      :to="`/patrocinador/${sp.slug}`"
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
                      <img :src="sp.logo" :alt="sp.name" class="w-64 mb-8" />
                      <p class="text-white text-lg mb-8 leading-relaxed">{{ sp.description }}</p>
                      <NuxtLink
                        :to="`/patrocinador/${sp.slug}`"
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

            <!-- Flechas - Hidden on mobile, visible on desktop -->
            <div class="sp-slider-prev absolute top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </div>
            <div class="sp-slider-next absolute top-1/2 right-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </Swiper>
        </section>
      </div>
      
      <!-- Pagination Dots - Outside slider -->
      <div v-if="sponsorsSlider.length" class="sp-slider-dots flex justify-center gap-2 pt-8 pb-12"></div>

      <!-- ── Pre-Footer ──────────────────────────────────── -->
      <SectionsPrefooterNewsletterSection />
      <SectionsMountainPrefooter />

    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import type { Sponsor } from '~/types/api'

const route = useRoute()
const api = useApi()

const slug = computed(() => route.params.slug as string)

const { data: sponsor, pending, error } = await useAsyncData<Sponsor>(
  `sponsor-${slug.value}`,
  () => api.sponsors.getBySlug(slug.value),
  { watch: [slug] }
)

const { data: allSponsors } = await useAsyncData<Sponsor[]>(
  'sponsors-landing-slider',
  () => api.sponsors.getAll().catch(() => [] as Sponsor[])
)

const sponsorsSlider = computed(() => {
  const list = allSponsors.value ?? []
  return list
    .filter((s: Sponsor) => (s.circle_logo?.url || s.logo?.url) && s.slide_image?.url)
    .map((s: Sponsor) => ({
      id: s.id,
      slug: s.slug,
      name: s.name,
      logo: s.circle_logo?.url ?? s.logo?.url,
      slideImage: s.slide_image?.url,
      description: s.tagline ?? s.description ?? '',
    }))
})

// Galería: combina las imágenes del array gallery del API
const gallery = computed(() => sponsor.value?.gallery ?? [])

const imagenActiva = ref(0)

const anterior = () => {
  imagenActiva.value = imagenActiva.value === 0
    ? gallery.value.length - 1
    : imagenActiva.value - 1
}

const siguiente = () => {
  imagenActiva.value = imagenActiva.value === gallery.value.length - 1
    ? 0
    : imagenActiva.value + 1
}

// Touch events para swipe en móvil
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  if (touchStartX - touchEndX > swipeThreshold) {
    // Swipe izquierda -> siguiente
    siguiente()
  } else if (touchEndX - touchStartX > swipeThreshold) {
    // Swipe derecha -> anterior
    anterior()
  }
}

const hasSocial = computed(() => {
  const s = sponsor.value?.social
  return s && (s.facebook || s.twitter || s.email)
})

// SEO dinámico
watchEffect(() => {
  if (!sponsor.value) return
  useSeoMeta({
    title: `${sponsor.value.name} - Patrocinador - Escalada Libre`,
    description: sponsor.value.tagline || sponsor.value.description || undefined,
    ogImage: sponsor.value.logo?.url || sponsor.value.gallery?.[0]?.url,
  })
})
</script>
