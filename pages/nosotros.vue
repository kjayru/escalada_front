<template>
  <div class="nosotros-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden" style="height: 779px;">
      <img
        :src="(sec('hero')?.settings?.image as string) ?? '/images/n-1.png'"
        :alt="(sec('hero')?.settings?.alt as string) ?? 'Nosotros - Escalada Libre'"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/35"></div>
    </section>

    <!-- Misión / Visión -->
    <section class="mision-vision py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Misión -->
          <div class="bg-[#f9f9f9] rounded-xl p-10 lg:p-14">
            <h2 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-6">{{ sec('mision')?.heading ?? 'Misión' }}</h2>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed" v-html="misionBody"></p>
          </div>
          <!-- Visión -->
          <div class="bg-[#f9f9f9] rounded-xl p-10 lg:p-14">
            <h2 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-6">{{ sec('vision')?.heading ?? 'Visión' }}</h2>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed" v-html="visionBody"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Qué hacemos? -->
    <section class="que-hacemos py-12 bg-white">
      <div class="text-center mb-16 px-4">
        <div class="inline-block">
          <div class="w-36 h-3 bg-[#F8C52D] mx-auto mb-4"></div>
          <h2 class="text-3xl lg:text-[35px] font-medium text-[#6A6867]">¿Qué hacemos?</h2>
        </div>
      </div>

      <!-- Bloques dinámicos: Infraestructura, Acceso, Conservación, Conocimiento -->
      <div class="space-y-8 lg:space-y-10 px-4 sm:px-6 lg:px-8">
        <div
          v-for="block in queHacemosBlocks"
          :key="block.id"
          class="max-w-6xl mx-auto overflow-hidden rounded-xl shadow-sm"
        >
          <div class="grid lg:grid-cols-2 items-stretch">

            <!-- Imagen izquierda si image_side === 'left' -->
            <div
              v-if="block.settings?.image_side === 'left'"
              class="relative min-h-[280px] lg:min-h-[440px] order-2 lg:order-1"
            >
              <img
                :src="block.featured_media?.url ?? apiImg(block.settings?.image as string)"
                :alt="block.featured_media?.alt ?? block.heading ?? ''"
                class="w-full h-full object-cover absolute inset-0"
              />
            </div>

            <!-- Texto -->
            <div
              class="flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-16 bg-white"
              :class="block.settings?.image_side === 'left' ? 'order-1 lg:order-2' : ''"
            >
              <div class="flex items-center gap-4 mb-5">
                <img
                  :src="`/images/${queHacemosIcons[block.settings?.key as string]}`"
                  :alt="block.heading ?? ''"
                  class="w-10 h-10"
                />
                <div>
                  <div class="w-16 h-[2px] bg-[#F8C52D] mb-1"></div>
                  <span class="text-lg lg:text-xl font-medium text-[#6A6867] tracking-wide">{{ block.heading }}</span>
                </div>
              </div>
              <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-6">{{ block.body }}</p>
              <ul v-if="block.items?.length" class="space-y-4">
                <li v-for="item in block.items" :key="item.id" class="flex gap-3">
                  <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                  </span>
                  <span class="text-base text-[#6A6867] leading-relaxed">{{ item.title }}</span>
                </li>
              </ul>
            </div>

            <!-- Imagen derecha si image_side !== 'left' -->
            <div
              v-if="block.settings?.image_side !== 'left'"
              class="relative min-h-[280px] lg:min-h-[440px]"
            >
              <img
                :src="block.featured_media?.url ?? apiImg(block.settings?.image as string)"
                :alt="block.featured_media?.alt ?? block.heading ?? ''"
                class="w-full h-full object-cover absolute inset-0"
              />
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ¿Quiénes conforman nuestra asociación? -->
    <section class="asociacion-section py-16 lg:py-24 bg-[#f5f5f0]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Title -->
        <div class="text-center mb-12">
          <div class="inline-block">
            <div class="w-32 h-3 bg-[#F8C52D] mx-auto mb-4"></div>
            <h2 class="text-2xl lg:text-[35px] font-medium text-[#6A6867]">
              ¿Quiénes conforman nuestra asociación?
            </h2>
          </div>
        </div>

        <!-- Acordeón dinámico por grupos -->
        <div class="divide-y divide-gray-300 border-t border-gray-300">
          <div
            v-for="(group, index) in memberGroups"
            :key="group.id"
            class="transition-colors duration-300 rounded-none"
            :class="[
              { 'border-b border-gray-300': index === memberGroups.length - 1 },
              openAccordion === group.slug ? 'bg-[#ECF963]' : ''
            ]"
          >
            <button
              @click="toggleAccordion(group.slug)"
              class="w-full flex items-center justify-between py-5 text-left px-4"
            >
              <span class="text-xl lg:text-2xl font-medium text-[#6A6867]">{{ group.name }}</span>
              <!-- Ícono animado: + se colapsa a − -->
              <span class="flex-shrink-0 relative inline-flex w-7 h-7 rounded-full border-2 border-[#6A6867]">
                <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-[#6A6867] rounded-full"></span>
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-3 bg-[#6A6867] rounded-full transition-[transform,opacity] duration-300 origin-center"
                  :class="openAccordion === group.slug ? 'scale-y-0 opacity-0' : ''"
                ></span>
              </span>
            </button>

            <div v-show="openAccordion === group.slug" class="pb-8 px-4">
              <div v-if="group.members.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                  v-for="member in group.members"
                  :key="member.id"
                  class="bg-transparent border border-[#6A6867]/40 rounded-xl p-4 flex items-center gap-4"
                >
                  <div class="flex-shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden bg-gray-300">
                    <img
                      :src="member.photo?.url ?? '/images/img-20200308-wa-00051.png'"
                      :alt="member.photo?.alt ?? member.name"
                      class="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <p class="text-base font-medium text-[#3a3a3a] leading-tight">{{ member.name }}</p>
                    <p v-if="member.role" class="text-sm text-[#5a5a5a] mt-0.5">{{ member.role }}</p>
                  </div>
                </div>
              </div>
              <p v-else class="text-[#6A6867] text-base">
                Información próximamente.
              </p>
            </div>
          </div>
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
const config = useRuntimeConfig()
const api = useApi()

const { data: page } = await useAsyncData('page-nosotros-full', () =>
  api.pages.getBySlug('nosotros').catch(() => null)
)

const { data: memberGroupsData } = await useAsyncData('member-groups', () =>
  api.memberGroups.getAll().catch(() => ({ data: [] }))
)

// Grupos de miembros dinámicos desde la API
const memberGroups = computed(() => memberGroupsData.value?.data ?? [])

// Resuelve rutas de imagen que vienen del API (ej: /images/foto.png → https://api.test/images/foto.png)
const apiImg = (path: string | null | undefined): string => {
  if (!path) return '/images/n-1.png'
  if (path.startsWith('http')) return path
  return `${config.public.apiBase}${path}`
}

// Encuentra una sección por su settings.key (definido en el admin)
const sec = (key: string) =>
  page.value?.sections?.find(s => s.settings?.key === key)

// SEO
useSeoMeta({
  title: page.value?.seo_title ?? 'Nosotros - Escalada Libre',
  description:
    page.value?.seo_description ??
    'Somos un grupo de deportistas del Noreste de México comprometidos con el fomento seguro y sustentable del montañismo y la escalada.',
})

// Bloques ¿Qué hacemos?
const queHacemosKeys = ['infraestructura', 'acceso', 'conservacion', 'conocimiento']
const queHacemosBlocks = computed(() =>
  page.value?.sections
    ?.filter(s => queHacemosKeys.includes(s.settings?.key as string))
    .sort((a, b) => a.sort_order - b.sort_order) ?? []
)

const queHacemosIcons: Record<string, string> = {
  infraestructura: 'solid.svg',
  acceso: 'group.svg',
  conservacion: 'conservacion.svg',
  conocimiento: 'conocimiento.svg',
}

// Misión / Visión — fallback al texto original
const misionBody = computed(
  () =>
    sec('mision')?.body ??
    'Somos un grupo de deportistas del Noreste de México comprometidos con el fomento seguro y sustentable del montañismo y la escalada. Buscamos contribuir al cuidado de los ecosistemas, al acceso a un medio ambiente sano y al desarrollo social, mediante planes y acciones que protejan y mantengan los espacios naturales donde se practican estas actividades.',
)

const visionBody = computed(
  () =>
    sec('vision')?.body ??
    'Buscamos fomentar la conciencia comunitaria sobre la importancia de proteger los ecosistemas para disfrutarlos de forma sustentable, promover el potencial de México para los deportes de montaña, impulsar una práctica segura y preparada de estas actividades, y motivar a los sectores público y privado a sumarse a acciones que apoyen la misión de nuestra Asociación.',
)

// Accordion state — abre el primer grupo por defecto
const openAccordion = ref<string | null>(memberGroups.value[0]?.slug ?? null)
const toggleAccordion = (slug: string) => {
  openAccordion.value = openAccordion.value === slug ? null : slug
}
</script>

<style scoped>
.accordion-item button:focus {
  outline: none;
}
</style>
