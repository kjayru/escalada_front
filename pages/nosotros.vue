<template>
  <div class="nosotros-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden h-[360px] lg:h-[779px]">
      <img
        v-if="heroSection?.featured_media?.url || heroSection?.settings?.image"
        :src="(heroSection?.featured_media?.url || heroSection?.settings?.image) as string"
        :alt="(heroSection?.settings?.alt as string) ?? 'Nosotros - Escalada Libre'"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
    </section>

    <!-- Misión / Visión -->
    <section class="mision-vision py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Misión -->
          <div class="border border-[#F8C52D] rounded-xl p-10 lg:p-14">
            <h2 class="text-[35px] font-light text-[#6A6867] mb-6" style="font-family: 'Readex Pro', sans-serif;">{{ sec('mision')?.heading ?? 'Misión' }}</h2>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="text-base lg:text-lg text-[#6A6867] leading-relaxed" style="font-family: 'Readex Pro', sans-serif;" v-html="misionBody"></div>
          </div>
          <!-- Visión -->
          <div class="border border-[#F8C52D] rounded-xl p-10 lg:p-14">
            <h2 class="text-[35px] font-light text-[#6A6867] mb-6" style="font-family: 'Readex Pro', sans-serif;">{{ sec('vision')?.heading ?? 'Visión' }}</h2>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="text-base lg:text-lg text-[#6A6867] leading-relaxed" style="font-family: 'Readex Pro', sans-serif;" v-html="visionBody"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Qué hacemos? -->
    <section class="que-hacemos py-12 bg-white">
      <div class="text-center mb-16 px-4">
        <div class="inline-block">
          <div class="w-36 h-3 bg-[#F8C52D] mx-auto mb-4"></div>
          <h2 class="text-3xl lg:text-[35px] font-medium text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif;">¿Qué hacemos?</h2>
        </div>
      </div>

      <!-- Bloques dinámicos: Infraestructura, Acceso, Conservación, Conocimiento -->
      <div class="space-y-16 px-4 sm:px-6 lg:px-8">
        <div
          v-for="block in queHacemosBlocks"
          :key="block.id"
          class="max-w-6xl mx-auto overflow-hidden"
        >
          <div class="grid lg:grid-cols-2 items-stretch">

            <!-- Imagen izquierda si image_side === 'left' -->
            <div
              v-if="block.settings?.image_side === 'left'"
              class="overflow-hidden min-h-[300px] order-2 lg:order-1"
            >
              <img
                :src="block.featured_media?.url ?? apiImg(block.settings?.image as string)"
                :alt="block.featured_media?.alt ?? block.heading ?? ''"
                class="w-full h-full object-cover block"
              />
            </div>

            <!-- Texto -->
            <div
                class="flex flex-col justify-center py-8 lg:py-16 bg-white"
                :class="block.settings?.image_side === 'left'
                  ? 'order-1 lg:order-2 px-0 sm:px-8 lg:px-14'
                  : 'pl-0 pr-4 sm:px-8 lg:pl-0 lg:pr-14'"
            >
              <div class="flex items-center gap-5 mb-6">
                <img
                  :src="`/images/${queHacemosIcons[block.settings?.key as string]}`"
                  :alt="block.heading ?? ''"
                  class="w-10 h-10 flex-shrink-0"
                />
                <div>
                  <div class="w-24 h-[3px] bg-[#F8C52D] mb-3"></div>
                  <span class="text-lg lg:text-xl font-medium text-[#000000] tracking-normal" style="font-family: 'Readex Pro', sans-serif;">{{ block.heading }}</span>
                </div>
              </div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="text-[1.25rem] font-normal text-[#6A6867] leading-relaxed mb-6" style="font-family: 'Readex Pro', sans-serif;" v-html="block.body"></div>
              <ul v-if="block.items?.length" class="space-y-4">
                <li v-for="item in block.items" :key="item.id" class="flex gap-3">
                  <img
                    src="/images/nosotros-check.svg"
                    alt=""
                    aria-hidden="true"
                    class="mt-0.5 flex-shrink-0 w-6 h-6"
                  />
                  <span class="text-[1.25rem] font-normal text-[#6A6867] leading-relaxed" style="font-family: 'Readex Pro', sans-serif;">{{ item.title }}</span>
                </li>
              </ul>
            </div>

            <!-- Imagen derecha si image_side !== 'left' -->
            <div
              v-if="block.settings?.image_side !== 'left'"
              class="overflow-hidden min-h-[300px]"
            >
              <img
                :src="block.featured_media?.url ?? apiImg(block.settings?.image as string)"
                :alt="block.featured_media?.alt ?? block.heading ?? ''"
                class="w-full h-full object-cover block"
              />
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ¿Quiénes conforman nuestra asociación? -->
    <section class="asociacion-section py-16 lg:py-24 bg-[#F6F6F6]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Title -->
        <div class="text-center mb-12">
          <div class="inline-block">
            <div class="w-32 h-3 bg-[#F8C52D] mx-auto mb-4"></div>
            <h2 class="text-2xl lg:text-[35px] font-medium text-[#000000]" style="font-family: 'Readex Pro', sans-serif;">
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
              <span class="text-xl lg:text-2xl font-medium text-[#000000]" style="font-family: 'Readex Pro', sans-serif;">{{ group.name }}</span>
              <img
                :src="openAccordion === group.slug ? '/images/minus.svg' : '/images/plus.svg'"
                :alt="openAccordion === group.slug ? 'Contraer sección' : 'Expandir sección'"
                class="flex-shrink-0 w-[1.7rem] h-[1.7rem]"
              />
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
                    <p class="text-base font-normal text-[#3a3a3a] leading-tight" style="font-family: 'Readex Pro', sans-serif;">{{ member.name }}</p>
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
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

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

// Resuelve rutas de imagen: assets estáticos del frontend (/images/) se usan tal cual;
// rutas del API (/storage/) se prefiján con apiBase.
const apiImg = (path: string | null | undefined): string => {
  if (!path) return '/images/n-1.png'
  if (path.startsWith('http')) return path
  if (path.startsWith('/images/')) return path
  return `${config.public.apiBase}${path}`
}

// Encuentra una sección por su settings.key (definido en el admin)
const sec = (key: string) =>
  page.value?.sections?.find(s => s.settings?.key === key)

// Hero section (busca por tipo, no por key)
const heroSection = computed(() =>
  page.value?.sections?.find(s => s.type === 'hero')
)

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
