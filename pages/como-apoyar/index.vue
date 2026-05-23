<template>
  <div class="como-apoyar-page">

    <!-- Hero Banner -->
    <SectionsHeroPageBanner
      :image="heroBannerImage ?? '/images/n-1.png'"
      :image-mobile="heroSection?.mobile_image?.url ?? null"
      alt="Cómo apoyar - Escalada Libre"
    />

    <!-- Intro: ¿Por qué donar? -->
    <section class="intro-section py-12 lg:py-28 bg-white" :style="introExtraStyle">
      <div class="max-w-[860px] mx-auto px-8 lg:px-12" data-reveal>
        <h1 class="text-[#6A6867] mb-4" style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500; font-style: normal; line-height: 40px;">
          {{ introHeading }}
        </h1>
        <p v-if="introSubheading" class="text-[#6A6867] mb-6" style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500; font-style: normal; line-height: 40px;">{{ introSubheading }}</p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-weight: 400; font-style: normal;" v-html="introBody"></div>
      </div>
    </section>

    <!-- Cómo nos puedes apoyar -->
    <section class="pb-16 lg:pb-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section header -->
        <div class="text-center mb-12 lg:mb-16" data-reveal>
          <h2 style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500; font-style: normal; color: #000000;">
            {{ intro2Heading }}
          </h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-if="intro2Body" class="text-[#6A6867] mt-3" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-weight: 400;" v-html="intro2Body"></div>
          <p v-else class="text-base lg:text-lg text-[#6A6867] mt-3">{{ campaignSubtitle }}</p>
        </div>

        <!-- Method rows — dinámicos desde CMS (type=split) -->
        <div class="max-w-[1400px] mx-auto">

          <div
            v-for="(block, idx) in splitBlocks"
            :key="block.id"
            class="flex flex-col md:flex-row items-stretch mb-12 md:mb-20"
            data-reveal
            :data-reveal-delay="idx === 0 ? undefined : '200'"
          >
            <!-- Label vertical izquierdo — solo desktop -->
            <div class="hidden md:flex w-10 lg:w-14 items-center justify-center flex-shrink-0">
              <span
                class="uppercase text-[#6A6867]"
                style="writing-mode: vertical-rl; transform: rotate(180deg); font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400; letter-spacing: 0.25em; text-transform: capitalize;"
              >{{ block.subheading }}</span>
            </div>
            <!-- Imagen como fondo del bloque o img para proyecto -->
            <div
              v-if="block.title?.toLowerCase().includes('proyecto')"
              class="w-full md:w-1/2 overflow-hidden"
              style="border-radius: 0 0 0 40px;"
            >
              <img
                v-if="block.image"
                :src="block.image"
                :alt="block.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              v-else
              class="w-full md:w-1/2 overflow-hidden min-h-[242px] md:min-h-[480px]"
              :style="{
                backgroundImage: block.image ? `url(${block.image})` : 'none',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: block.background ?? '#f6f6f6'
              }"
            >
            </div>
            <!-- Texto + botón -->
            <div 
              class="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-8 md:py-12" 
              :class="!block.title?.toLowerCase().includes('proyecto') ? 'min-h-[242px] md:min-h-[480px]' : ''"
              :style="{ background: block.title?.toLowerCase().includes('proyecto') ? '#FFFFFF' : '#F6F6F6' }"
            >
              <h3 class="mb-4" :style="block.title?.toLowerCase().includes('proyecto')
                ? 'color: #000; font-family: Readex Pro, sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;'
                : 'color: #000; font-family: Readex Pro, sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 600;'">{{ block.title }}</h3>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="leading-relaxed mb-8 max-w-[480px]" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;" v-html="block.body"></div>
              <div v-if="block.boton">
                <NuxtLink
                  :to="block.boton_url ?? '#'"
                  class="inline-block px-8 py-3"
                  :class="block.title?.toLowerCase().includes('proyecto')
                    ? 'btn-border-hover'
                    : 'btn-yellow-hover'"
                  style="border-radius: 25px; text-align: center; font-family: Readex Pro, sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700;"
                >
                  {{ block.boton.toUpperCase() }}
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Slider: Como Apoyar (type=slider desde CMS) -->
    <section v-if="sliderSlides.length" class="slider-como-apoyar py-16 lg:py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 class="text-3xl lg:text-[55px] leading-tight mb-4" style="font-family: 'Readex Pro', sans-serif; font-weight: 500; color: #000;">
          {{ sliderSection?.heading ?? 'Cómo nos puedes apoyar' }}
        </h2>
        <p v-if="sliderSection?.subheading" class="text-[30px] text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;">
          {{ sliderSection.subheading }}
        </p>
      </div>

      <!-- Contador centrado -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-center">
        <div class="flex items-center gap-6">
          <button class="slider-como-prev flex items-center justify-center">
            <img src="/images/arrow.svg" alt="Anterior" class="w-6 h-auto rotate-180" />
          </button>
          <span class="text-[#6A6867] text-lg font-medium tracking-wide" style="font-family: 'Readex Pro', sans-serif;">
            {{ String(sliderCurrent).padStart(2, '0') }} / {{ String(sliderTotal).padStart(2, '0') }}
          </span>
          <button class="slider-como-next flex items-center justify-center">
            <img src="/images/arrow.svg" alt="Siguiente" class="w-6 h-auto" />
          </button>
        </div>
      </div>

      <Swiper
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="0"
        :centered-slides="true"
        :breakpoints="{
          768: { slidesPerView: 1.2, spaceBetween: 0 },
          1024: { slidesPerView: 1.5, spaceBetween: 0 },
        }"
        :navigation="{
          prevEl: '.slider-como-prev',
          nextEl: '.slider-como-next',
        }"
        :loop="sliderSlides.length > 1"
        @slideChange="onSliderSlideChange"
        class="slider-como-swiper w-full"
      >
        <SwiperSlide v-for="(slide, idx) in sliderSlides" :key="slide.id">
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" style="max-width: 960px; margin: 0 auto;">
            <!-- Imagen circular -->
            <div class="flex-shrink-0">
              <div class="w-64 h-64 lg:w-[383px] lg:h-[383px] rounded-full overflow-hidden bg-gray-200">
                <img
                  v-if="slide.featured_media?.url"
                  :src="slide.featured_media.url"
                  :alt="slide.featured_media.alt ?? slide.title ?? ''"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <!-- Texto -->
            <div class="flex-1 text-center">
              <h3 class="text-2xl lg:text-[28px] text-black mb-4" style="font-family: 'Readex Pro', sans-serif; font-weight: 700;">
                {{ idx + 1 }}. {{ slide.title }}
              </h3>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-if="slide.body" class="text-base lg:text-lg text-[#6A6867] mb-8 leading-relaxed max-w-sm mx-auto" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;" v-html="slide.body"></div>
              <NuxtLink
                v-if="slide.link_url"
                :to="slide.link_url"
                class="inline-block px-8 py-3 rounded-full bg-[#F8C52D] text-black font-medium transition-colors duration-200 hover:bg-black hover:text-[#F8C52D]"
                style="font-family: 'Readex Pro', sans-serif;"
              >
                {{ slide.link_label ?? 'Ver más' }}
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- Únete al equipo -->
    <section v-if="joinSection && joinSection.image" class="relative overflow-hidden min-h-[420px] md:min-h-[759px]">
      <img
        :src="joinSection.image"
        :alt="joinSection.heading ?? 'Únete al equipo Escalada Libre'"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0" :style="{ background: joinSection.overlay ?? 'rgba(0,0,0,0.5)' }"></div>
      <div
        class="relative z-10 flex flex-col justify-center px-8 lg:px-24 py-16 lg:py-24 min-h-[420px] md:min-h-[759px]"
      >
        <h2 class="mb-6 max-w-[460px]" style="color: #FFF; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;">
          {{ joinSection.heading ?? 'Únete al equipo' }}
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-if="joinSection.body" class="leading-relaxed mb-10 max-w-[400px]" style="color: #FFF; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;" v-html="joinSection.body"></div>
        <p v-else class="leading-relaxed mb-10 max-w-[400px]" style="color: #FFF; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">
          Súmate al equipo Escalada Libre y forma parte del cambio que queremos ver en nuestras montañas.
        </p>
        <div v-if="joinSection.boton">
          <NuxtLink
            :to="joinSection.boton_url ?? '/contacto'"
            class="inline-block px-10 py-3 btn-white-border-hover"
            style="border-radius: 25px; text-align: center; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700;"
          >
            {{ joinSection.boton.toUpperCase() }}
          </NuxtLink>
        </div>
        <div v-else>
          <NuxtLink
            to="/contacto"
            class="inline-block px-10 py-3 btn-white-border-hover"
            style="border-radius: 25px; text-align: center; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700;"
          >
            ÚNETE A NUESTRO EQUIPO
          </NuxtLink>
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
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import type { SupportMethod } from '~/types/api'

const api = useApi()

const { data: page } = await useAsyncData('page-como-apoyar', () =>
  api.pages.getBySlug('como-apoyar').catch(() => null),
)

const { data: campaign } = await useAsyncData('support-campaign-como-apoyar',
  () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null)
)

const methods = computed(() => campaign.value?.methods ?? [])

const methodByType = (type: string): SupportMethod | undefined =>
  methods.value.find((m) => m.type === type)

const paypalMethod  = computed(() => methodByType('paypal'))
const bankMethod    = computed(() => methodByType('transfer'))
const gymMethod     = computed(() => methodByType('gyms'))
const productMethod = computed(() => methodByType('products'))

const mainCampaign = computed(() => campaign.value)

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

const introSection = computed(() =>
  page.value?.sections?.find(s => s.type === 'text'),
)

const introHeading = computed(
  () => introSection.value?.heading ?? mainCampaign.value?.name ?? '¿Por qué donar? Porque creemos en la montaña y en su comunidad',
)
const introSubheading = computed(
  () => introSection.value?.subheading ?? null,
)
const introBody = computed(
  () => introSection.value?.body ?? mainCampaign.value?.description ?? 'Las donaciones hacen posible que la escalada en México siga creciendo de forma segura, responsable y con respeto al entorno.',
)

const introExtraStyle = computed(() => {
  const s = introSection.value?.settings
  if (s?.key && s?.value) return { [s.key as string]: s.value }
  return {}
})

const intro2Section = computed(() =>
  page.value?.sections?.filter(s => s.type === 'text')?.[1],
)
const intro2Heading = computed(
  () => intro2Section.value?.heading ?? 'Cómo nos puedes apoyar',
)
const intro2Body = computed(
  () => intro2Section.value?.body ?? null,
)

const splitBlocks = computed(() =>
  (page.value?.sections?.filter(s => s.type === 'split') ?? []).map(s => ({
    id: s.id,
    subheading: s.subheading ?? '',
    title: s.heading ?? '',
    body: s.body ?? '',
    image:
      s.featured_media?.url ??
      (s.settings?.image as string | undefined) ??
      null,
    background:
      (s.settings?.background as string | undefined) ??
      (s.settings?.key === 'background' ? (s.settings?.value as string | undefined) ?? null : null),
    boton: (s.settings?.boton as string | undefined) ?? null,
    boton_url: (s.settings?.boton_url as string | undefined) ?? null,
  })),
)

// ── Slider (Como apoyar) ────────────────────────────────────────────────────
const sliderSection = computed(() =>
  page.value?.sections?.find(s => s.type === 'slider'),
)

const sliderSlides = computed(() =>
  (sliderSection.value?.items ?? [])
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((item, idx) => ({
      ...item,
      num: idx + 1,
    })),
)

const sliderTotal = computed(() => sliderSlides.value.length || 1)
const sliderCurrent = ref(1)
const onSliderSlideChange = (swiper: any) => {
  sliderCurrent.value = (swiper.realIndex % sliderTotal.value) + 1
}
// ───────────────────────────────────────────────────────────────────────────

const campaignSubtitle = computed(() =>
  methods.value.length
    ? `${methods.value.length} maneras de apoyarnos`
    : 'Existen cuatro maneras en las que puedes apoyarnos:'
)

const joinSection = computed(() => {
  const s = page.value?.sections?.find(sec => sec.type === 'join')
  if (!s) return null
  return {
    heading: s.heading ?? null,
    body: s.body ?? null,
    image: (s.featured_media?.url as string | undefined) ?? (s.settings?.image as string | undefined) ?? null,
    overlay: (s.settings?.overlay as string | undefined) ?? null,
    boton: (s.settings?.boton as string | undefined) ?? null,
    boton_url: (s.settings?.boton_url as string | undefined) ?? null,
  }
})

useSeoMeta({
  title: 'Cómo apoyar - Escalada Libre',
  description: 'Descubre cómo puedes apoyar a Escalada Libre Costa Rica a través de donaciones, transferencias, gyms o comprando nuestros productos.',
})
</script>

<style scoped>
/* Sobrescribir margin-bottom del CMS en móvil */
@media (max-width: 1023px) {
  .intro-section {
    margin-bottom: 3rem !important;
  }
}

/* Botón amarillo con hover invertido */
.btn-yellow-hover {
  background: #F8C52D;
  color: #6A6867;
  transition: all 0.2s ease;
}

.btn-yellow-hover:hover {
  background: #6A6867;
  color: #F8C52D;
}

/* Botón con borde negro y hover invertido */
.btn-border-hover {
  background: #ffffff;
  color: #6A6867;
  border: 1.5px solid #111111;
  transition: all 0.2s ease;
}

.btn-border-hover:hover {
  background: #111111;
  color: #ffffff;
}

/* Botón con borde blanco y hover invertido */
.btn-white-border-hover {
  background: transparent;
  color: #ffffff;
  border: 1.5px solid #ffffff;
  transition: all 0.2s ease;
}

.btn-white-border-hover:hover {
  background: #ffffff;
  color: #000000;
}
</style>
