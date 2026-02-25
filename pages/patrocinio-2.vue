<template>
  <div class="patrocinio-2-page">

    <!-- Logo del patrocinador -->
    <section class="bg-white pt-16 pb-10 lg:pt-20 lg:pb-12 flex justify-center">
      <img
        src="/images/exposure.png"
        alt="Exposure Industria Montaña"
        class="h-[94px] w-auto object-contain"
      />
    </section>

    <!-- Slider de imágenes del producto -->
    <section class="bg-white pb-0">
      <div class="max-w-[1127px] mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Imagen principal con flechas -->
        <div class="relative overflow-hidden bg-[#f5f5f0] mb-3" style="height: 670px;">
          <img
            :src="imagenActual.src"
            :alt="imagenActual.alt"
            class="w-full h-full object-contain transition-opacity duration-300"
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
        <div class="grid grid-cols-4 gap-3">
          <button
            v-for="(img, index) in imagenes"
            :key="index"
            @click="imagenActiva = index"
            class="overflow-hidden bg-[#f5f5f0] transition-opacity"
            :class="imagenActiva === index ? 'opacity-100 ring-2 ring-[#F8C52D]' : 'opacity-60 hover:opacity-80'"
            style="height: 148px;"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-contain p-3"
            />
          </button>
        </div>

      </div>
    </section>

    <!-- Descripción del producto + Tarjeta CTA -->
    <section class="bg-white py-16 lg:py-20">
      <div class="max-w-[1127px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">

          <!-- Izquierda: descripción + CTA + redes -->
          <div class="lg:w-[55%] flex flex-col justify-between">
            <p class="text-base text-[#6A6867] leading-relaxed mb-10">
              El Aspect Pro está diseñado para misiones a tope, grandes días en el valle y altos picos alpinos. Diseñado para funcionar en losas y terrenos verticales, el Aspect Pro tiene un talón moldeado en 3D, una entresuela rígida y un antepié ligeramente inclinado hacia abajo. La cobertura adicional en la puntera brinda mayor durabilidad para escalar grietas. Un diseño de altura media brinda protección y cobertura para los tobillos en espacios abiertos. Finalmente, la parte superior de cuero Ecco DriTan™ está hecha con un proceso que requiere menos agua y la lengüeta de malla agrega transpirabilidad.
            </p>

            <div class="flex flex-col gap-6">
              <!-- Botón CTA -->
              <div>
                <a
                  href="#"
                  class="inline-block px-10 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm tracking-widest hover:bg-[#e0b525] transition-colors"
                >
                  COMPRAR AQUÍ
                </a>
              </div>

              <!-- Iconos de redes sociales -->
              <div class="flex items-center gap-4">
                <a href="#" aria-label="Facebook" class="text-[#6A6867] hover:text-gray-900 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter / X" class="text-[#6A6867] hover:text-gray-900 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" class="text-[#6A6867] hover:text-gray-900 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2" />
                    <circle cx="12" cy="12" r="4" stroke-width="2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Derecha: tarjeta ¿Te gustó este producto? -->
          <div class="lg:w-[40%]">
            <div class="border border-gray-200 p-8 lg:p-10 h-full flex flex-col items-center text-center">

              <!-- Imagen del producto (circular) -->
              <div class="w-[220px] h-[220px] rounded-full overflow-hidden bg-[#f5f5f0] mb-8 flex-shrink-0 flex items-center justify-center">
                <img
                  :src="imagenActual.src"
                  :alt="imagenActual.alt"
                  class="w-full h-full object-contain p-4"
                />
              </div>

              <!-- Título -->
              <h3 class="text-2xl lg:text-[28px] font-normal text-[#6A6867] leading-tight mb-4">
                ¿TE GUSTÓ ESTE<br />PRODUCTO?
              </h3>

              <!-- Descripción -->
              <p class="text-sm lg:text-base text-[#6A6867] leading-relaxed">
                Adquiérelo fácilmente desde nuestro sitio web y conoce más sobre este producto.
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
  title: 'Aspect Pro - Exposure - Patrocinador - Escalada Libre',
  description: 'El Aspect Pro de Exposure, diseñado para misiones a tope, grandes días en el valle y altos picos alpinos. Patrocinador oficial de Escalada Libre México A.C.',
})

const imagenActiva = ref(0)

const imagenActual = computed(() => imagenes[imagenActiva.value] ?? imagenes[0]!)

const imagenes = [
  { src: '/images/patrocinador1.png', alt: 'Aspect Pro - vista frontal' },
  { src: '/images/patrocinador2.png', alt: 'Aspect Pro - vista lateral' },
  { src: '/images/pico-norte-1.png', alt: 'Aspect Pro - detalle suela' },
  { src: '/images/hg.png', alt: 'Aspect Pro - detalle talón' },
]

const anterior = () => {
  imagenActiva.value = imagenActiva.value === 0 ? imagenes.length - 1 : imagenActiva.value - 1
}

const siguiente = () => {
  imagenActiva.value = imagenActiva.value === imagenes.length - 1 ? 0 : imagenActiva.value + 1
}
</script>
