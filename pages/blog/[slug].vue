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
          <div class="inline-block border border-gray-300 px-6 py-2.5 mb-8">
            <span class="text-sm font-medium text-[#6A6867] tracking-[0.15em] uppercase">
              {{ formatDate(post.published_at) }}
            </span>
          </div>

          <!-- Título -->
          <h1 class="text-3xl lg:text-[46px] font-normal text-[#6A6867] leading-tight mb-10">
            {{ post.title }}
          </h1>

          <!-- Línea divisoria -->
          <div class="border-t border-gray-200 mb-8"></div>

          <!-- Iconos de compartir -->
          <div class="flex items-center justify-center gap-5 mb-12">
            <a
              :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en Facebook"
              class="text-[#6A6867] hover:text-gray-900 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en Twitter"
              class="text-[#6A6867] hover:text-gray-900 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              :href="`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(pageUrl)}`"
              aria-label="Compartir por correo"
              class="text-[#6A6867] hover:text-gray-900 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
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
          <p v-if="post.excerpt" class="text-base lg:text-lg font-normal text-[#6A6867] leading-relaxed mb-10 text-center">
            {{ post.excerpt }}
          </p>
          <!-- Contenido HTML del artículo -->
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="article-body text-[#6A6867]" v-html="post.body"></div>
        </div>
      </section>

      <!-- Lo más reciente -->
      <section v-if="recentPosts.length" class="bg-white pb-16 lg:pb-20">
        <div class="max-w-[1114px] mx-auto px-4 sm:px-6 lg:px-8">

          <div class="border-t border-gray-200 pt-10 mb-10">
            <h2 class="text-2xl lg:text-[38px] font-bold text-[#1a1a1a] text-center tracking-widest">
              LO MÁS RECIENTE
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink
              v-for="reciente in recentPosts"
              :key="reciente.id"
              :to="`/blog/${reciente.slug}`"
              class="flex flex-col group"
            >
              <!-- Tagline sobre la imagen -->
              <div class="flex items-center gap-3 mb-4">
                <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
                <span class="uppercase tracking-[0.2em] text-xs text-[#F8C52D] font-semibold">
                  {{ reciente.category?.toUpperCase() ?? 'BLOG' }}
                </span>
              </div>
              <!-- Imagen -->
              <div class="overflow-hidden mb-5" style="height: 212px;">
                <img
                  v-if="reciente.featured_media"
                  :src="reciente.featured_media.url"
                  :alt="reciente.featured_media.alt || reciente.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div v-else class="w-full h-full bg-gray-100"></div>
              </div>
              <!-- Título en negrita -->
              <h3 class="text-base lg:text-lg font-bold text-[#1a1a1a] leading-snug mb-3 group-hover:text-gray-600 transition-colors">
                {{ reciente.title }}
              </h3>
              <p v-if="reciente.excerpt" class="text-sm text-[#6A6867] leading-relaxed">
                {{ reciente.excerpt }}
              </p>
            </NuxtLink>
          </div>

        </div>
      </section>

      <!-- Banner Exposure -->
      <section class="relative overflow-hidden" style="min-height: 1080px;">
        <img
          src="/images/potrero-1.png"
          alt="Escalada en montaña"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <div
          class="relative z-10 flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24 py-24"
          style="min-height: 1080px;"
        >
          <div class="lg:w-[45%] flex flex-col justify-center">
            <img
              src="/images/exposure.png"
              alt="Exposure"
              class="mb-10 filter brightness-0 invert"
              style="max-width: 467px; max-height: 127px; object-fit: contain;"
            />
            <p class="text-white/90 text-base lg:text-lg leading-relaxed mb-8 max-w-[427px]">
              Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.
            </p>
            <a href="#" class="inline-flex items-center gap-2 text-white text-base font-medium hover:text-[#F8C52D] transition-colors">
              Equipment
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <div class="lg:w-[45%] flex flex-col items-center lg:items-end justify-center pt-16 lg:pt-0">
            <p class="text-white text-4xl lg:text-[56px] font-bold tracking-wider mb-6 text-center lg:text-right">
              MISSION LT 2.0
            </p>
            <a href="#" class="inline-flex items-center gap-2 text-white text-base font-medium hover:text-[#F8C52D] transition-colors">
              Equipment
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
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

    </template>

  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/api'

const route = useRoute()
const api = useApi()
const config = useRuntimeConfig()

const slug = computed(() => route.params.slug as string)

// Artículo principal
const { data: post, pending, error } = await useAsyncData<BlogPost>(
  `blog-post-${slug.value}`,
  () => api.blog.getBySlug(slug.value),
  { watch: [slug] }
)

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
  font-size: 1rem;
  line-height: 1.75;
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
