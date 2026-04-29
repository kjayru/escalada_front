<template>
  <div class="como-apoyar-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden" style="height: 1080px;">
      <img
        :src="heroBannerImage ?? '/images/n-1.png'"
        alt="Cómo apoyar - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </section>

    <!-- Intro: ¿Por qué donar? -->
    <section class="py-20 lg:py-28 bg-white" :style="introExtraStyle">
      <div class="max-w-[860px] mx-auto px-8 lg:px-12">
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
        <div class="text-center mb-12 lg:mb-16">
          <h2 style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500; font-style: normal; color: #000000;">
            {{ intro2Heading }}
          </h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-if="intro2Body" class="text-[#6A6867] mt-3" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-weight: 400;" v-html="intro2Body"></div>
          <p v-else class="text-base lg:text-lg text-[#6A6867] mt-3">{{ campaignSubtitle }}</p>
        </div>

        <!-- Method rows — dinámicos desde CMS (type=split) -->
        <div class="max-w-[1400px] mx-auto border-t border-gray-200">

          <div
            v-for="block in splitBlocks"
            :key="block.id"
            class="flex items-stretch"
            style="margin-bottom: 5rem;"
          >
            <!-- Label vertical izquierdo -->
            <div class="w-10 lg:w-14 flex items-center justify-center flex-shrink-0">
              <span
                class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6A6867]"
                style="writing-mode: vertical-rl; transform: rotate(180deg);"
              >{{ block.subheading }}</span>
            </div>
            <!-- Imagen con fondo de color -->
            <div
              class="lg:w-1/2 flex items-center justify-center p-8"
              :style="{ background: block.background ?? '#f6f6f6', minHeight: '400px' }"
            >
              <img
                v-if="block.image"
                :src="block.image"
                :alt="block.title"
                class="max-w-full max-h-full object-contain"
                style="max-height: 380px;"
              />
              <div v-else class="w-full bg-gray-200" style="height: 380px;"></div>
            </div>
            <!-- Texto + botón -->
            <div class="lg:w-1/2 flex flex-col justify-center px-10 lg:px-16 py-12 bg-white">
              <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] mb-4">{{ block.title }}</h3>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="text-base text-[#6A6867] leading-relaxed mb-8 max-w-[480px]" v-html="block.body"></div>
              <div v-if="block.boton">
                <NuxtLink
                  :to="block.boton_url ?? '#'"
                  class="inline-block px-8 py-3 text-gray-900 font-semibold text-sm hover:opacity-90 transition-opacity tracking-wider"
                  style="background: #F8C52D; border-radius: 25px;"
                >
                  {{ block.boton.toUpperCase() }}
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ¿Quieres realizar un proyecto? -->
    <section class="bg-white py-12 lg:py-20">
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-stretch gap-0" style="min-height: 620px;">
          <!-- Imagen con esquina inferior-izquierda redondeada -->
          <div class="lg:w-1/2 overflow-hidden" style="border-radius: 0 0 0 40px; min-height: 500px;">
            <img
              src="/images/huasteca-41.png"
              alt="Realizar un proyecto con Escalada Libre"
              class="w-full h-full object-cover"
              style="min-height: 500px;"
            />
          </div>
          <!-- Texto + botón outlined -->
          <div class="lg:w-1/2 flex flex-col justify-center px-12 lg:px-20 py-16 bg-white">
            <h2 class="text-2xl lg:text-[38px] font-semibold text-[#111111] leading-tight mb-8" style="font-family: 'Readex Pro', sans-serif;">
              ¿Quieres realizar un proyecto?
            </h2>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-4 max-w-[480px]">
              ¿Tienes una iniciativa en mente con la cuál quieres apoyar el trabajo de Escalada Libre?
            </p>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-10 max-w-[480px]">
              ¡Ponte en contacto con nosotros y echamos la maquinaria a andar!
            </p>
            <div>
              <NuxtLink
                to="/contacto"
                class="inline-block px-10 py-3 text-[#111111] font-semibold text-sm tracking-wider hover:bg-gray-50 transition-colors"
                style="border: 1.5px solid #111111; border-radius: 25px; background: #ffffff;"
              >
                CONTÁCTANOS
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Únete al equipo -->
    <section class="relative overflow-hidden" style="min-height: 759px;">
      <img
        src="/images/slide1.png"
        alt="Únete al equipo Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div
        class="relative z-10 flex flex-col justify-center px-12 lg:px-24 py-24"
        style="min-height: 759px;"
      >
        <h2 class="text-3xl lg:text-[48px] font-medium text-white leading-tight mb-6 max-w-[460px]">
          Únete al equipo
        </h2>
        <p class="text-base lg:text-lg text-white/90 leading-relaxed mb-10 max-w-[400px]">
          Súmate al equipo Escalada Libre y forma parte del cambio que queremos ver en nuestras montañas.
        </p>
        <div>
          <NuxtLink
            to="/contacto"
            class="inline-block px-8 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm hover:bg-[#e0b525] transition-colors tracking-wider"
          >
            UNIRSE
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
import { computed } from 'vue'
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

const campaignSubtitle = computed(() =>
  methods.value.length
    ? `${methods.value.length} maneras de apoyarnos`
    : 'Existen cuatro maneras en las que puedes apoyarnos:'
)

useSeoMeta({
  title: 'Cómo apoyar - Escalada Libre',
  description: 'Descubre cómo puedes apoyar a Escalada Libre Costa Rica a través de donaciones, transferencias, gyms o comprando nuestros productos.',
})
</script>
