<template>
  <div class="blog-article-page">

    <!-- Estado de carga -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <div class="w-10 h-10 border-4 border-[#F5C400] border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <p class="text-[#6A6867] text-lg mb-4">No se pudo cargar el artículo.</p>
        <NuxtLink to="/blog" class="text-[#F5C400] font-medium hover:underline">← Volver al blog</NuxtLink>
      </div>
    </div>

    <template v-else-if="post">

      <!-- Cabecera del artículo -->
      <section class="bg-white pt-16 pb-0 lg:pt-20">
        <div class="max-w-[650px] mx-auto px-4 sm:px-6 text-center">

          <!-- Badge de fecha -->
          <div class="inline-block border border-[#F8C52D] px-6 py-2.5 mb-8">
            <span class="text-sm font-medium text-[#F8C52D] tracking-[0.15em] uppercase">
              {{ formatDate(post.published_at) }}
            </span>
          </div>

          <!-- Título -->
          <h1 class="text-[#6A6867] mb-10" style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500; line-height: 2.875rem;">
            {{ post.title }}
          </h1>

          <!-- Línea divisoria -->
          <div class="border-t border-gray-200 mb-8"></div>

          <!-- Iconos de redes sociales -->
          <div class="flex items-center justify-center gap-5 mb-12">
            <a
              :href="socialLinks.facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Facebook"
              class="hover:opacity-80 transition-opacity"
            >
              <img src="/images/blog-facebook.svg" alt="Facebook" class="w-5 h-5" />
            </a>
            <a
              :href="socialLinks.instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              class="hover:opacity-80 transition-opacity"
            >
              <img src="/images/blog-instagram.svg" alt="Instagram" class="w-5 h-5" />
            </a>
            <a
              :href="`mailto:${socialLinks.email}`"
              aria-label="Enviar correo electrónico"
              class="hover:opacity-80 transition-opacity"
            >
              <img src="/images/blog-mail.svg" alt="Email" class="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      <!-- Imagen hero -->
      <section v-if="post.featured_media" class="bg-white pb-0">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="overflow-hidden" style="height: 719px;">
            <img
              :src="post.featured_media.url"
              :alt="post.featured_media.alt || post.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Cuerpo del artículo -->
      <section class="bg-white py-16 lg:py-20">
        <div class="max-w-[690px] mx-auto px-4 sm:px-6">
          <!-- Extracto destacado -->
          <p v-if="post.excerpt" class="text-[#6A6867] leading-relaxed mb-10" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">
            {{ post.excerpt }}
          </p>

          <!-- Modo clásico: contenido HTML del artículo -->
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-if="post.content_mode !== 'blocks'" class="article-body text-[#6A6867]" v-html="post.body"></div>
        </div>

        <!-- Modo bloques: renderiza cada sección -->
        <template v-if="post.content_mode === 'blocks' && post.sections?.length">
          <div v-for="section in post.sections" :key="section.id" class="mb-16">

            <!-- Bloque tipo: text / default -->
            <div v-if="section.type === 'text' || section.type === 'split'" class="max-w-[690px] mx-auto px-4 sm:px-6">
              <h2 v-if="section.heading" class="text-[#6A6867] mb-3" style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500; line-height: 2.875rem;">{{ section.heading }}</h2>
              <p v-if="section.subheading" class="text-[#6A6867] mb-4 italic">{{ section.subheading }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-if="section.body" class="article-body text-[#6A6867]" v-html="section.body"></div>
              <img
                v-if="section.featured_media"
                :src="section.featured_media.url"
                :alt="section.featured_media.alt || section.heading || ''"
                class="w-full mt-6 object-cover"
              />
            </div>

            <!-- Bloque tipo: hero -->
            <div v-else-if="section.type === 'hero'" class="relative w-full overflow-hidden" style="min-height: 480px;">
              <img
                v-if="section.featured_media"
                :src="section.featured_media.url"
                :alt="section.featured_media.alt || section.heading || ''"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/40"></div>
              <div class="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
                <h2 v-if="section.heading" class="text-3xl lg:text-5xl font-bold text-white mb-4">{{ section.heading }}</h2>
                <p v-if="section.subheading" class="text-white/80 text-lg">{{ section.subheading }}</p>
              </div>
            </div>

            <!-- Bloque tipo: gallery -->
            <div v-else-if="section.type === 'gallery'" class="max-w-[1114px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 v-if="section.heading" class="text-2xl font-semibold text-[#1a1a1a] mb-6 text-center">{{ section.heading }}</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img
                  v-for="(img, i) in section.media"
                  :key="i"
                  :src="img.url"
                  :alt="img.alt || section.heading || ''"
                  class="w-full h-48 object-cover"
                />
              </div>
            </div>

            <!-- Bloque tipo: video -->
            <div v-else-if="section.type === 'video'" class="max-w-[1114px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 v-if="section.heading" class="text-2xl font-semibold text-[#6A6867] mb-6 text-center" style="font-family: 'Readex Pro', sans-serif;">
                {{ section.heading }}
              </h2>
              <div class="relative w-full overflow-hidden rounded-lg" style="background-color: #000;">
                <video
                  v-if="section.video_file"
                  controls
                  :poster="section.video_poster?.url"
                  class="w-full h-auto"
                  preload="metadata"
                >
                  <source :src="section.video_file.url" :type="section.video_file.mime_type || 'video/mp4'">
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
              <p v-if="section.subheading" class="text-center text-[#6A6867] mt-4 italic">
                {{ section.subheading }}
              </p>
            </div>

            <!-- Bloque tipo: cards -->
            <div v-else-if="section.type === 'cards'" class="max-w-[1114px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 v-if="section.heading" class="text-2xl font-semibold text-[#1a1a1a] mb-8 text-center">{{ section.heading }}</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="item in section.items" :key="item.id" class="bg-[#f5f5f0] p-6">
                  <p class="font-semibold text-[#1a1a1a] mb-2">{{ item.title }}</p>
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <div v-if="item.body" class="text-sm text-[#6A6867]" v-html="item.body"></div>
                  <a v-if="item.link_url" :href="item.link_url" class="text-[#F8C52D] text-sm font-medium mt-3 inline-block">{{ item.link_label || 'Ver más' }}</a>
                </div>
              </div>
            </div>

            <!-- Bloque tipo: cta -->
            <div v-else-if="section.type === 'cta'" class="bg-[#1a1a1a] py-20 text-center px-6">
              <h2 v-if="section.heading" class="text-3xl font-bold text-white mb-4">{{ section.heading }}</h2>
              <p v-if="section.subheading" class="text-white/70 mb-8">{{ section.subheading }}</p>
              <a
                v-if="section.items?.[0]?.link_url"
                :href="section.items[0].link_url"
                class="px-8 py-4 bg-[#F8C52D] text-gray-900 font-semibold hover:bg-[#e0b525] transition-colors"
              >
                {{ section.items[0].link_label || section.items[0].title }}
              </a>
            </div>

            <!-- Fallback para tipos desconocidos -->
            <div v-else class="max-w-[690px] mx-auto px-4 sm:px-6">
              <h2 v-if="section.heading" class="text-2xl font-semibold text-[#1a1a1a] mb-3">{{ section.heading }}</h2>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-if="section.body" class="article-body text-[#6A6867]" v-html="section.body"></div>
            </div>

          </div>
        </template>
      </section>

      <!-- Lo más reciente -->
      <section v-if="recentPosts.length" class="bg-white pb-16 lg:pb-20">
        <div class="max-w-[1114px] mx-auto px-4 sm:px-6 lg:px-8">

          <div class="border-t border-gray-300 pt-10 mb-10">
            <h2 class="text-center" style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500; color: #6A6867;">
              Lo más reciente
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink
              v-for="reciente in recentPosts"
              :key="reciente.id"
              :to="`/blog/${reciente.slug}`"
              class="flex flex-col group"
            >
              <!-- Categoría -->
              <span class="uppercase tracking-[0.2em] text-xs text-[#F8C52D] font-semibold mb-3 block">
                {{ reciente.category?.toUpperCase() ?? 'BLOG' }}
              </span>
              <!-- Imagen -->
              <div class="overflow-hidden mb-4" style="height: 212px;">
                <img
                  v-if="reciente.featured_media"
                  :src="reciente.featured_media.url"
                  :alt="reciente.featured_media.alt || reciente.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div v-else class="w-full h-full bg-gray-100"></div>
              </div>
              <!-- Título -->
              <h3 class="text-[#6A6867] leading-snug mb-2 group-hover:opacity-75 transition-opacity" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">
                {{ reciente.title }}
              </h3>
              <p v-if="reciente.excerpt" class="text-[#6A6867] leading-relaxed" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;">
                {{ reciente.excerpt }}
              </p>
            </NuxtLink>
          </div>

        </div>
      </section>

      <!-- Partners Slider -->
      <div v-if="sponsorsSliderData.length" class="bg-white pb-12">
        <section class="partners-slider relative h-[70vh] lg:h-[80vh] max-h-[600px] lg:max-h-[800px]">
          <Swiper
            :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
            :slides-per-view="1"
            :space-between="0"
            :navigation="{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }"
            :pagination="{
              el: '.swiper-pagination-custom',
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
            <!-- Slides dinámicos de patrocinadores -->
            <SwiperSlide v-for="sponsor in sponsorsSliderData" :key="sponsor.id">
              <div class="relative h-full w-full bg-cover bg-center" :style="`background-image: url('${sponsor.slideImage}')`">
                <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end lg:items-center pb-20 lg:pb-0">
                  <div class="max-w-xl w-full lg:w-auto">
                    <img :src="sponsor.logo" :alt="sponsor.name" class="w-64 mb-8" />
                    <p class="text-white text-lg mb-8 leading-relaxed">{{ sponsor.tagline }}</p>
                    <NuxtLink
                      :to="`/patrocinador/${sponsor.slug}`"
                      class="inline-flex items-center gap-3 text-[#F8C52D] justify-end lg:justify-start w-full lg:w-auto group/link"
                      style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
                    >
                      Ver más
                      <img src="/images/arrow.svg" alt="" class="w-6 h-auto arrow-icon" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <!-- Navigation Arrows - Hidden on mobile, visible on desktop -->
            <div class="swiper-button-prev-custom absolute top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </div>
            <div class="swiper-button-next-custom absolute top-1/2 right-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </Swiper>
        </section>
        
        <!-- Pagination Dots - Outside slider -->
        <div class="swiper-pagination-custom flex justify-center gap-2 pt-8"></div>
      </div>

      <!-- Newsletter + Product Cards -->
      <SectionsPrefooterNewsletterSection />

      <!-- Mountain Pre-Footer -->
      <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

    </template>

  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { BlogPost, Sponsor } from '~/types/api'

const route = useRoute()
const api = useApi()
const config = useRuntimeConfig()

const slug = computed(() => route.params.slug as string)

// Artículo principal
const { data: post, pending, error } = await useAsyncData<BlogPost>(
  `blog-post-${slug.value}`,
  () => api.blog.getBySlug(slug.value),
  { 
    watch: [slug],
    server: true,
    lazy: false
  }
)

// Settings de redes sociales y contacto
const { data: settings } = await useAsyncData(
  'site-settings',
  () => api.settings.getAll()
)

const socialLinks = computed(() => ({
  facebook: settings.value?.settings?.facebook || 'https://www.facebook.com/escaladalibreac',
  instagram: settings.value?.settings?.instagram || 'https://www.instagram.com/escaladalibreac',
  email: settings.value?.settings?.email || 'contacto@escaladalibre.org'
}))

// Artículos recientes (excluyendo el actual, máximo 3)
const { data: allPosts } = await useAsyncData(
  'blog-recent',
  () => api.blog.getAll({ per_page: 4 })
)
const recentPosts = computed(() =>
  (allPosts.value?.data ?? [])
    .filter(p => p.slug !== slug.value)
    .slice(0, 3)
)

// Sponsors para el slider
const { data: sponsors } = await useAsyncData(
  'sponsors',
  () => api.sponsors.getAll()
)

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

// URL pública para compartir
const pageUrl = computed(() =>
  `${config.public.siteUrl ?? ''}${route.fullPath}`
)

// Formato de fecha en español: "26 DE MAYO, 2025"
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const day = date.getDate()
  const month = date.toLocaleDateString('es-MX', { month: 'long' }).toUpperCase()
  const year = date.getFullYear()
  return `${day} DE ${month}, ${year}`
}

// SEO dinámico
watchEffect(() => {
  if (!post.value) return
  useSeoMeta({
    title: `${post.value.seo_title || post.value.title} — Escalada Libre`,
    description: post.value.seo_description || post.value.excerpt || undefined,
    ogTitle: post.value.seo_title || post.value.title,
    ogDescription: post.value.seo_description || post.value.excerpt || undefined,
    ogImage: post.value.featured_media?.url,
    twitterCard: 'summary_large_image',
  })
})
</script>

<style scoped>
/* Estilos para el cuerpo del artículo */
.article-body :deep(p) {
  font-family: 'Readex Pro', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.1875rem;
  margin-bottom: 1.5rem;
  color: #6A6867;
}

.article-body :deep(h2),
.article-body :deep(h3),
.article-body :deep(h4) {
  font-weight: 600;
  color: #1a1a1a;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.article-body :deep(h2) { font-size: 1.5rem; }
.article-body :deep(h3) { font-size: 1.25rem; }

.article-body :deep(img) {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 2rem 0;
}

.article-body :deep(a) {
  color: #F8C52D;
  text-decoration: underline;
  transition: opacity 0.15s;
}
.article-body :deep(a:hover) { opacity: 0.75; }

.article-body :deep(blockquote) {
  border-left: 4px solid #F8C52D;
  padding-left: 1.25rem;
  margin: 2rem 0;
  font-style: italic;
  color: #6A6867;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: #6A6867;
}

.article-body :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.75;
}
</style>
