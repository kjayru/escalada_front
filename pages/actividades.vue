<template>
  <div class="actividades-page">

    <!-- Hero Banner -->
    <SectionsHeroPageBanner
      :image="heroImage"
      :image-mobile="heroImageMobile"
      :alt="heroAlt"
      image-class="object-top"
    />

    <!-- Intro + Photo Mosaic -->
    <section class="mosaic-section bg-white pt-12 lg:pt-40">
      
      <!-- Versión MÓVIL: diseño simplificado -->
      <div class="block lg:hidden px-4 sm:px-6">
        <!-- Texto e Intro -->
        <div class="flex flex-col items-center justify-center text-center mb-12 px-4 py-8">
          <h1 class="text-3xl font-medium text-[#6A6867] mb-4" style="font-family: 'Readex Pro', sans-serif;">{{ introTitle }}</h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-base font-normal text-[#6A6867] leading-relaxed max-w-md mb-8" style="font-family: 'Readex Pro', sans-serif;" v-html="introDesc"></div>
          <a
            href="#cronologia"
            class="inline-flex items-center justify-center w-full max-w-sm px-10 py-3 border border-[#6A6867] rounded-full text-[#6A6867] font-bold hover:bg-[#6A6867] hover:text-white transition-colors text-sm"
            style="font-family: 'Readex Pro', sans-serif;"
          >
            VER ACTIVIDADES
          </a>
        </div>

        <!-- Grid simple de fotos: 2 columnas -->
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="(img, index) in galleryImages.slice(0, 12)"
            :key="index"
            class="overflow-hidden aspect-square"
          >
            <img
              v-if="img.url ?? mosaicImg(index)"
              :src="img.url ?? mosaicImg(index)"
              :alt="img.alt ?? mosaicAlt(index)"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Versión DESKTOP: mosaico complejo original -->
      <div class="hidden lg:block mosaic-grid">

        <!-- Left tall photo (pos 0) -->
        <div class="mosaic-left-tall">
          <img
            v-if="mosaicImg(0)"
            :src="mosaicImg(0)"
            :alt="mosaicAlt(0)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Center top: title + text -->
        <div class="mosaic-center-text flex flex-col items-center justify-center px-8 py-12 text-center">
          <h1 class="text-3xl lg:text-[35px] font-medium text-[#6A6867] mb-4" style="font-family: 'Readex Pro', sans-serif;">{{ introTitle }}</h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-base lg:text-lg font-normal text-[#6A6867] leading-relaxed max-w-xs mb-8" style="font-family: 'Readex Pro', sans-serif;" v-html="introDesc"></div>
          <a
            href="#cronologia"
            class="inline-flex items-center justify-center min-w-[21.5rem] px-10 py-3 border border-[#6A6867] rounded-full text-[#6A6867] font-bold hover:bg-[#6A6867] hover:text-white transition-colors text-sm"
            style="font-family: 'Readex Pro', sans-serif;"
          >
            Ver actividades
          </a>
        </div>

        <!-- Top-right photo (04) -->
        <div class="mosaic-top-right">
          <img
            v-if="mosaicImg(3)"
            :src="mosaicImg(3)"
            :alt="mosaicAlt(3)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Second row left photo (02) -->
        <div class="mosaic-center-left">
          <img
            v-if="mosaicImg(1)"
            :src="mosaicImg(1)"
            :alt="mosaicAlt(1)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Second row center photo (03) -->
        <div class="mosaic-center-right">
          <img
            v-if="mosaicImg(2)"
            :src="mosaicImg(2)"
            :alt="mosaicAlt(2)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Second row right photo (05) -->
        <div class="mosaic-second-row-right">
          <img
            v-if="mosaicImg(4)"
            :src="mosaicImg(4)"
            :alt="mosaicAlt(4)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Third row left photo (06) -->
        <div class="mosaic-bottom-left">
          <img
            v-if="mosaicImg(5)"
            :src="mosaicImg(5)"
            :alt="mosaicAlt(5)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Third row center photo (07) -->
        <div class="mosaic-bottom-center">
          <img
            v-if="mosaicImg(6)"
            :src="mosaicImg(6)"
            :alt="mosaicAlt(6)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Third row center-right photo (08) -->
        <div class="mosaic-bottom-center-right">
          <img
            v-if="mosaicImg(7)"
            :src="mosaicImg(7)"
            :alt="mosaicAlt(7)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Right tall photo (09) -->
        <div class="mosaic-right-tall">
          <img
            v-if="mosaicImg(8)"
            :src="mosaicImg(8)"
            :alt="mosaicAlt(8)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Bottom far-left photo (10) -->
        <div class="mosaic-bottom-far-left">
          <img
            v-if="mosaicImg(9)"
            :src="mosaicImg(9)"
            :alt="mosaicAlt(9)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Bottom fill photo (11) -->
        <div class="mosaic-bottom-fill">
          <img
            v-if="mosaicImg(10)"
            :src="mosaicImg(10)"
            :alt="mosaicAlt(10)"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Bottom center-right photo (12) -->
        <div class="mosaic-mid-bottom-fill">
          <img
            v-if="mosaicImg(11)"
            :src="mosaicImg(11)"
            :alt="mosaicAlt(11)"
            class="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>

    <!-- Cronología de Actividades -->
    <section id="cronologia" class="cronologia-section py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-[20px] font-normal text-[#6A6867] mb-12" style="font-family: 'Readex Pro', sans-serif;">
          Cronología de actividades
        </h2>

        <!-- Year accordion -->
        <div class="border-t border-gray-300">
          <div
            v-for="(year, index) in years"
            :key="year.year"
            class="border-b border-gray-300"
          >
            <!-- Year header -->
            <button
              @click="toggleYear(year.year)"
              class="w-full flex items-center justify-between py-5 text-left transition-colors"
              :class="openYear === year.year ? 'bg-white' : 'bg-white hover:bg-gray-50'"
            >
              <span
                class="text-2xl lg:text-[30px] font-medium ml-4 lg:ml-20"
                :class="openYear === year.year ? 'text-[#F8C52D]' : 'text-[#000000]'"
                style="font-family: 'Readex Pro', sans-serif;"
              >
                {{ year.year }}
              </span>
              <img
                :src="openYear === year.year ? '/images/minus-orange.png' : '/images/plus.svg'"
                :alt="openYear === year.year ? 'Contraer año' : 'Expandir año'"
                class="w-[1.7rem] h-[1.7rem] mr-4 lg:mr-8 flex-shrink-0"
              />
            </button>

            <!-- Activities list -->
            <div v-show="openYear === year.year" class="bg-white">
              <ul class="max-w-4xl mx-auto divide-y divide-gray-100">
                <li
                  v-for="activity in year.activities"
                  :key="activity.id"
                  class="grid grid-cols-[minmax(0,1fr)_2rem] items-center gap-6 px-4 lg:px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <span class="text-base lg:text-lg text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif;">{{ activity.name }}</span>
                  <a
                    v-if="activity.file"
                    :href="activity.file.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex-shrink-0 w-8 h-8 flex items-center justify-center"
                    :aria-label="`Descargar ${activity.name}`"
                    download
                  >
                    <img
                      src="/images/Download.svg"
                      alt=""
                      aria-hidden="true"
                      class="block w-5 h-5 group-hover:hidden"
                    />
                    <img
                      src="/images/Download-open.svg"
                      alt=""
                      aria-hidden="true"
                      class="hidden w-5 h-5 group-hover:block"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Newsletter + Product Cards -->
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const api = useApi()

const { data: page } = await useAsyncData('page-actividades', () =>
  api.pages.getBySlug('actividades').catch(() => null),
)
const { data: allActivities } = await useAsyncData('activities', () =>
  api.activities.getAll(),
)

// SEO
useSeoMeta({
  title: page.value?.seo_title ?? 'Actividades - Escalada Libre',
  description:
    page.value?.seo_description ??
    'Listado de actividades enfocadas en el cuidado, la seguridad y el disfrute responsable de las áreas de montaña.',
})

const sec = (key: string) =>
  page.value?.sections?.find(s => s.settings?.key === key)

const apiImg = (path: string | null | undefined): string => {
  if (!path) return '/images/img-33661.png'
  if (path.startsWith('http')) return path
  if (path.startsWith('/images/')) return path
  return `${config.public.apiBase}${path}`
}

const heroImage = computed(
  () => sec('hero')?.featured_media?.url ?? apiImg(sec('hero')?.settings?.image as string | undefined),
)

const heroImageMobile = computed(
  () => (sec('hero')?.mobile_image?.url as string | undefined) ?? null,
)

const heroAlt = computed(
  () => sec('hero')?.featured_media?.alt ?? (sec('hero')?.settings?.alt as string) ?? 'Actividades - Escalada Libre',
)

// Galería dinámica del mosaico
const gallerySection = computed(() =>
  page.value?.sections?.find(s => s.type === 'gallery'),
)
const galleryOrderValue = (fileName: string | null | undefined, fallbackIndex: number) => {
  const match = fileName?.match(/^(\d+)/)
  return match ? Number(match[1]) : fallbackIndex
}

const galleryImages = computed(() =>
  [...(gallerySection.value?.media ?? [])].sort((left, right) =>
    galleryOrderValue(left.file_name, 9999) - galleryOrderValue(right.file_name, 9999),
  ),
)

const mosaicImg = (i: number) =>
  galleryImages.value[i]?.url ?? null
const mosaicAlt = (i: number) =>
  galleryImages.value[i]?.alt || 'Actividades de escalada'

// Intro text desde CMS (sección tipo 'text' o settings.key='intro')
const introSection = computed(() =>
  page.value?.sections?.find(
    s => s.settings?.key === 'intro' || s.type === 'text',
  ),
)
const introTitle = computed(() => introSection.value?.heading ?? 'Actividades')
const introDesc = computed(
  () =>
    introSection.value?.body ??
    'Listado de actividades enfocadas en el cuidado, la seguridad y el disfrute responsable de las áreas de montaña.',
)

// Cronología: agrupadas por año desde la API /activities
const years = computed(() => {
  if (!allActivities.value?.length) return []
  
  const grouped: Record<number, NonNullable<typeof allActivities.value>> = {}
  
  for (const activity of allActivities.value) {
    if (!grouped[activity.year]) {
      grouped[activity.year] = []
    }
    grouped[activity.year]!.push(activity)
  }
  
  // Ordenar años descendente y actividades por orden ascendente
  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, activities]) => ({
      year,
      activities: activities.sort((a, b) => a.order - b.order),
    }))
})

const openYear = ref<string>(years.value[0]?.year ?? '')

const toggleYear = (year: string) => {
  openYear.value = openYear.value === year ? '' : year
}
</script>

<style scoped>
/* ── Mosaic photo grid ── */
.mosaic-grid {
  width: min(100% - 4rem, 1680px);
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 419px 419px 419px 419px;
}

/* Solo aplicar display: grid en desktop (cuando no esté oculto) */
@media (min-width: 1024px) {
  .mosaic-grid {
    display: grid;
  }
}

.mosaic-left-tall {
  grid-column: 1;
  grid-row: 1 / 3;
  overflow: hidden;
}

.mosaic-center-text {
  grid-column: 2 / 4;
  grid-row: 1;
  background: #fff;
}

.mosaic-top-right {
  grid-column: 4;
  grid-row: 1;
  overflow: hidden;
}

.mosaic-center-left {
  grid-column: 2;
  grid-row: 2;
  overflow: hidden;
}

.mosaic-center-right {
  grid-column: 3;
  grid-row: 2;
  overflow: hidden;
}

.mosaic-second-row-right {
  grid-column: 4;
  grid-row: 2;
  overflow: hidden;
}

.mosaic-right-tall {
  grid-column: 4;
  grid-row: 3 / 5;
  overflow: hidden;
}

.mosaic-bottom-left {
  grid-column: 1;
  grid-row: 3;
  overflow: hidden;
}

.mosaic-bottom-center {
  grid-column: 2;
  grid-row: 3;
  overflow: hidden;
}

.mosaic-bottom-center-right {
  grid-column: 3;
  grid-row: 3;
  overflow: hidden;
}

.mosaic-mid-bottom-fill {
  grid-column: 3;
  grid-row: 4;
  overflow: hidden;
}

.mosaic-bottom-far-left {
  grid-column: 1;
  grid-row: 4;
  overflow: hidden;
}

.mosaic-bottom-fill {
  grid-column: 2;
  grid-row: 4;
  overflow: hidden;
}

/* Media queries ya no son necesarias - usamos versiones separadas con Tailwind */
</style>
