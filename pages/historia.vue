<template>
  <div class="historia-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden" style="height: 1080px;">
      <!-- Imagen para móviles -->
      <img
        v-if="heroBannerImageMobile"
        :src="heroBannerImageMobile"
        alt="Historia - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover object-center lg:hidden"
      />
      <!-- Imagen para desktop -->
      <img
        :src="heroBannerImage ?? '/images/n-1.png'"
        alt="Historia - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover object-center hidden lg:block"
      />
      <div class="absolute inset-0 bg-black/20"></div>
    </section>

    <!-- Intro Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-[860px] mx-auto px-8 lg:px-12">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 class="text-[#6A6867] leading-tight mb-8" style="font-family: 'Readex Pro', sans-serif; font-weight: 400; font-size: 2.1875rem;" v-html="introHeading"></h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-[#6A6867] leading-relaxed" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem;" v-html="introBody"></div>
      </div>
    </section>

    <!-- Timeline blocks — dinámicos desde CMS, fallback a datos hardcodeados -->
    <section
      v-for="(block, idx) in timelineBlocks"
      :key="block.id"
      :style="{ background: block.background ?? (idx % 2 === 0 ? '#F6F6F6' : '#ffffff'), ...block.extraStyle }"
    >
      <div class="flex flex-col lg:flex-row min-h-[700px]">
        <!-- Imagen con padding -->
        <div
          class="lg:w-1/2 flex items-center justify-center p-10 lg:p-14"
          :class="idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
        >
          <img
            v-if="block.image"
            :src="block.image"
            :alt="block.title"
            class="w-full h-full object-cover"
            style="max-height: 100%;"
          />
          <div v-else class="w-full bg-gray-200" style="height: 420px;"></div>
        </div>
        <!-- Texto -->
        <div
          class="lg:w-1/2 flex flex-col justify-center px-12 lg:px-24 py-16"
          :class="idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
            <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ block.date }}</span>
          </div>
          <div class="mb-6">
            <h3
              class="block-title text-[#6A6867]"
              :class="{ 'has-icono': block.icono }"
              :style="{
                fontFamily: '\'Readex Pro\', sans-serif',
                fontWeight: '600',
                fontSize: '1.875rem',
                lineHeight: '1.3',
                maxWidth: '550px',
                '--icono-url': block.icono ? `url(${block.icono})` : 'none',
              }"
            >{{ block.title }}</h3>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-[#6A6867] leading-relaxed max-w-[560px]" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem;" v-html="block.body"></div>
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
const api = useApi()
const { data: page } = await useAsyncData('page-historia', () =>
  api.pages.getBySlug('historia').catch(() => null),
)
const { data: timelineData } = await useAsyncData('timeline', () =>
  api.timeline.getAll().catch(() => []),
)

// SEO
useSeoMeta({
  title: page.value?.seo_title ?? 'Historia - Escalada Libre',
  description:
    page.value?.seo_description ??
    'Conoce el origen y la historia de Escalada Libre México A.C., desde la defensa de "Las Ánimas" hasta convertirse en donataria autorizada.',
})

// Intro — sección con type='text' o settings.key='intro'
const introSection = computed(() =>
  page.value?.sections?.find(
    s => s.settings?.key === 'intro' || s.type === 'text',
  ),
)

// Hero — sección con type='hero' o settings.key='hero'
const heroSection = computed(() =>
  page.value?.sections?.find(
    s => s.type === 'hero' || s.settings?.key === 'hero',
  ),
)
const heroBannerImage = computed(
  () =>
    (heroSection.value?.featured_media?.url as string | undefined) ??
    (heroSection.value?.settings?.image as string | undefined) ??
    null,
)
const heroBannerImageMobile = computed(
  () => (heroSection.value?.mobile_image?.url as string | undefined) ?? heroBannerImage.value,
)
const introHeading = computed(
  () =>
    introSection.value?.heading ??
    'De la defensa a la organización: el origen de Escalada Libre A.C.',
)
const introBody = computed(
  () =>
    introSection.value?.body ??
    'Lo que comenzó en 2016 como una respuesta colectiva ante el posible cierre de la pared de escalada "Las Ánimas" por parte del INAH, se transformó en una serie de acciones organizadas que darían pie a la creación de Escalada Libre México A.C. en 2017. Desde entonces, la asociación ha trabajado por establecer un vínculo respetuoso entre la comunidad escaladora, las autoridades y los habitantes de las zonas donde se practica este deporte. Con iniciativas como charlas comunitarias, instalación de señalética, reequipamiento de rutas y la obtención del estatus de donataria autorizada, Escalada Libre ha consolidado su compromiso con el desarrollo sustentable de la escalada en México.',
)

// Bloques de imagen+texto — PageSections con type='split' o settings.fecha
// (administradas desde Filament > ContentBlockSchema en la página Historia)
const timelineBlocks = computed(() => {
  const sectionBlocks = page.value?.sections?.filter(
    s => s.type === 'split' || !!s.settings?.fecha,
  ) ?? []

  if (sectionBlocks.length) {
    return sectionBlocks.map(s => ({
      id: s.id,
      date: (s.settings?.fecha as string | undefined) ?? '',
      title: s.heading ?? '',
      body: s.body ?? '',
      image:
        s.featured_media?.url ??
        (s.settings?.image as string | undefined) ??
        null,
      icono: (s.settings?.icono as string | undefined) ?? null,
      background:
        (s.settings?.background as string | undefined) ??
        (s.settings?.key === 'background' ? (s.settings?.value as string | undefined) ?? null : null),
      extraStyle:
        s.settings?.key2 && s.settings?.value2
          ? { [s.settings.key2 as string]: s.settings.value2 }
          : null,
    }))
  }

  // Fallback: Timeline API (modelo Timeline)
  if (timelineData.value?.length) {
    return timelineData.value.map(t => ({
      id: t.id,
      date: t.date,
      title: t.title,
      body: t.body,
      image: t.image?.url ?? null,
    }))
  }

  return []
})
</script>

<style scoped>
.block-title.has-icono {
  position: relative;
}

.block-title.has-icono::after {
  content: "";
  background: var(--icono-url) no-repeat center / contain;
  width: 60px;
  height: 85px;
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
}
</style>
