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

          <!-- Iconos de compartir -->
          <div class="flex items-center justify-center gap-5 mb-12">
            <a
              :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en Facebook"
              class="text-[#F8C52D] hover:text-[#e0b525] transition-colors"
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
              class="text-[#F8C52D] hover:text-[#e0b525] transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              :href="`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(pageUrl)}`"
              aria-label="Compartir por correo"
              class="text-[#F8C52D] hover:text-[#e0b525] transition-colors"
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

      <!-- Newsletter + Product Cards -->
      <SectionsPrefooterNewsletterSection />

      <!-- Mountain Pre-Footer -->
      <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

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
