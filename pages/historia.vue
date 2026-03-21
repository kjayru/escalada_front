<template>
  <div class="historia-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden" style="height: 1080px;">
      <img
        src="/images/n-1.png"
        alt="Historia - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/20"></div>
    </section>

    <!-- Intro Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-[860px] mx-auto px-8 lg:px-12">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] leading-tight mb-8" v-html="introHeading"></h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed" v-html="introBody"></p>
      </div>
    </section>

    <!-- Timeline blocks — dinámicos desde CMS, fallback a datos hardcodeados -->
    <section
      v-for="(block, idx) in timelineBlocks"
      :key="block.id"
      :class="idx % 2 === 0 ? 'bg-[#f5f5f0]' : 'bg-white'"
    >
      <div class="flex flex-col lg:flex-row min-h-[700px]">
        <!-- Imagen -->
        <div
          class="lg:w-[45%] overflow-hidden"
          :class="idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
          style="min-height: 500px;"
        >
          <img
            v-if="block.image"
            :src="block.image"
            :alt="block.title"
            class="w-full h-full object-cover"
            style="min-height: 500px;"
          />
          <div v-else class="w-full h-full bg-gray-200" style="min-height: 500px;"></div>
        </div>
        <!-- Texto -->
        <div
          class="lg:w-[55%] flex flex-col justify-center px-12 lg:px-24 py-16"
          :class="idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
            <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ block.date }}</span>
          </div>
          <h3 class="text-2xl lg:text-[30px] font-normal text-[#6A6867] leading-tight mb-6">
            {{ block.title }}
          </h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="text-base text-[#6A6867] leading-relaxed max-w-[560px]" v-html="block.body"></p>
        </div>
      </div>
    </section>

    <!-- Newsletter + Product Cards -->
    <section class="prefooter-cards py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Newsletter Card -->
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
          <!-- ASPECT PRO Card -->
          <div class="relative rounded-xl overflow-hidden min-h-[357px]">
            <img
              src="/images/patrocinador1.png"
              alt="Aspect Pro"
              class="w-full h-full object-cover absolute inset-0"
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="relative z-10 p-8">
              <p class="text-white font-bold text-xl lg:text-2xl tracking-wider">ASPECT PRO</p>
              <p class="text-white/80 text-sm mt-1">Built to go big</p>
            </div>
          </div>
          <!-- ClimbWork Card -->
          <div class="bg-[#1a1a2e] rounded-xl p-8 flex items-center justify-center min-h-[357px]">
            <img
              src="/images/exposure.png"
              alt="ClimbWork"
              class="max-w-[70%] mx-auto filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mountain Pre-Footer -->
    <section class="mountain-prefooter" style="min-height: 675px;">
      <div class="flex flex-col items-center justify-center py-24 px-4 text-center" style="min-height: 675px;">
        <img
          src="/images/logoescalada.svg"
          alt="Escalada Libre"
          class="w-40 lg:w-52 mb-8"
        />
        <h2 class="text-4xl lg:text-6xl font-bold text-[#1a1a1a] mb-8 tracking-wider">
          ¡GRACIAS POR TU APOYO!
        </h2>
        <NuxtLink
          to="/como-apoyar"
          class="px-10 py-4 bg-[#F8C52D] text-gray-900 font-semibold text-base lg:text-lg hover:bg-[#e0b525] transition-colors"
        >
          Apoyar
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const api = useApi()
const { data: page } = await useAsyncData('page-historia', () =>
  api.pages.getBySlug('historia').catch(() => null),
)
const { data: timelineData } = await useAsyncData('timeline', () =>
  api.timeline.getAll(),
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

// Bloques de línea del tiempo — ahora desde API
const timelineBlocks = computed(() => {
  if (timelineData.value?.length) {
    return timelineData.value.map(t => ({
      id: t.id,
      date: t.date,
      title: t.title,
      body: t.body,
      image: t.image?.url ?? null,
    }))
  }
  // Fallback vacío - el admin debe agregar los datos
  return []
})
</script>
