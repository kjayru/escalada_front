<template>
  <div class="patrocinio-page">

    <!-- Logo + Tagline -->
    <section class="bg-white pt-16 pb-10 lg:pt-20 lg:pb-12 text-center">
      <div class="max-w-[600px] mx-auto px-4 sm:px-6">

        <!-- Logo del patrocinador -->
        <div class="flex justify-center mb-10">
          <img
            :src="sponsorLogoSrc"
            :alt="sponsor?.name ?? 'Patrocinador'"
            class="w-[246px] h-auto object-contain"
          />
        </div>

        <!-- Tagline -->
        <p class="text-2xl lg:text-[32px] font-normal text-[#6A6867] leading-snug mb-10 max-w-[550px] mx-auto">
          Vinculamos el oficio de la joyería en plata con el mundo de las montañas.
        </p>

        <!-- Línea divisoria centrada -->
        <div class="border-t border-gray-300 max-w-[590px] mx-auto"></div>

      </div>
    </section>

    <!-- Slider de imágenes -->
    <section class="bg-white pb-0">
      <div class="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Imagen principal con flechas -->
        <div class="relative overflow-hidden mb-4" style="height: 617px;">
          <img
            :src="imagenes[imagenActiva].src"
            :alt="imagenes[imagenActiva].alt"
            class="w-full h-full object-cover transition-opacity duration-300"
          />

          <!-- Flecha izquierda -->
          <button
            @click="anterior"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
            aria-label="Imagen anterior"
          >
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Flecha derecha -->
          <button
            @click="siguiente"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F8C52D] hover:bg-[#e0b525] flex items-center justify-center shadow transition-colors"
            aria-label="Imagen siguiente"
          >
            <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Miniaturas -->
        <div class="grid grid-cols-4 gap-3 mb-0">
          <button
            v-for="(img, index) in imagenes"
            :key="index"
            @click="imagenActiva = index"
            class="overflow-hidden transition-opacity"
            :class="imagenActiva === index ? 'opacity-100 ring-2 ring-[#F8C52D]' : 'opacity-60 hover:opacity-80'"
            style="height: 148px;"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-cover"
            />
          </button>
        </div>

      </div>
    </section>

    <!-- Descripción + Tarjeta de sponsor -->
    <section class="bg-white py-16 lg:py-20">
      <div class="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

          <!-- Izquierda: descripción + CTA -->
          <div class="lg:w-[55%] flex flex-col justify-between">
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-10">
              Siéntete seguro en todas partes, la inspiración viene del equipo que usamos. Estamos enfocados en promover actividades recreativas de montaña de manera segura y sustentable. Buscamos contribuir al cuidado del medio ambiente y al desarrollo de sociedades pacíficas y sustentables a través del deporte.
              <br /><br />
              Siéntete seguro en todas partes, la inspiración viene del equipo que usamos. Estamos enfocados en promover actividades recreativas de montaña de manera segura y sustentable. Buscamos contribuir al cuidado del medio ambiente y al desarrollo de sociedades pacíficas y sustentables a través del deporte.
            </p>

            <div class="flex flex-col gap-6">
              <!-- Botón CTA -->
              <div>
                <a
                  :href="sponsorUrl"
                  :target="sponsorUrl !== '#' ? '_blank' : undefined"
                  :rel="sponsorUrl !== '#' ? 'noopener noreferrer' : undefined"
                  class="inline-block px-10 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm tracking-widest hover:bg-[#e0b525] transition-colors"
                >
                  COMPRAR AQUÍ
                </a>
              </div>

              <!-- Dots del slider -->
              <div class="flex items-center gap-2">
                <button
                  v-for="(img, index) in imagenes"
                  :key="index"
                  @click="imagenActiva = index"
                  class="w-2.5 h-2.5 rounded-full transition-colors"
                  :class="imagenActiva === index ? 'bg-[#F8C52D]' : 'bg-gray-300 hover:bg-gray-400'"
                  :aria-label="`Ir a imagen ${index + 1}`"
                />
              </div>
            </div>
          </div>

          <!-- Derecha: tarjeta de sponsor -->
          <div class="lg:w-[40%]">
            <div class="border border-gray-200 p-8 lg:p-10 h-full flex flex-col items-center text-center">

              <!-- Foto del sponsor -->
              <div class="w-[200px] h-[200px] rounded-full overflow-hidden mb-6 flex-shrink-0">
                <img
                  src="/images/patrocinador1.png"
                  alt="Uriel Torres"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Nombre -->
              <h3 class="text-2xl lg:text-[28px] font-normal text-[#6A6867] mb-1">
                Uriel Torres
              </h3>

              <!-- Rol -->
              <p class="text-sm font-semibold text-[#6A6867] tracking-[0.15em] uppercase mb-6">
                Principal Sponsor
              </p>

              <!-- Descripción -->
              <p class="text-sm lg:text-base text-[#6A6867] leading-relaxed">
                Protegemos el libre acceso a las zonas de escalada para nuestra comunidad y visitantes.
              </p>

            </div>
          </div>

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
        <!-- Izquierda: logo + texto + link -->
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
          <a
            href="#"
            class="inline-flex items-center gap-2 text-white text-base font-medium hover:text-[#F8C52D] transition-colors"
          >
            Equipment
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <!-- Derecha: MISSION LT 2.0 -->
        <div class="lg:w-[45%] flex flex-col items-center lg:items-end justify-center pt-16 lg:pt-0">
          <p class="text-white text-4xl lg:text-[56px] font-bold tracking-wider mb-6 text-center lg:text-right">
            MISSION LT 2.0
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-2 text-white text-base font-medium hover:text-[#F8C52D] transition-colors"
          >
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

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'ClimbWork - Patrocinador - Escalada Libre',
  description: 'ClimbWork vincula el oficio de la joyería en plata con el mundo de las montañas. Patrocinador oficial de Escalada Libre México A.C.',
})

const api = useApi()
const { data: sponsors } = await useAsyncData('sponsor-page-1', () =>
  api.sponsors.getAll().catch(() => [])
)
const sponsor = computed(() => sponsors.value?.[0] ?? null)
const sponsorLogoSrc = computed(() => sponsor.value?.logo?.url ?? '/images/exposure.png')
const sponsorUrl = computed(() => sponsor.value?.website_url ?? '#')

const imagenActiva = ref(0)

const imagenes = [
  { src: '/images/patrocinador1.png', alt: 'ClimbWork - producto 1' },
  { src: '/images/patrocinador2.png', alt: 'ClimbWork - producto 2' },
  { src: '/images/img-20200308-wa-00051.png', alt: 'ClimbWork - producto 3' },
  { src: '/images/huasteca-41.png', alt: 'ClimbWork - producto 4' },
]

const anterior = () => {
  imagenActiva.value = imagenActiva.value === 0 ? imagenes.length - 1 : imagenActiva.value - 1
}

const siguiente = () => {
  imagenActiva.value = imagenActiva.value === imagenes.length - 1 ? 0 : imagenActiva.value + 1
}
</script>
