<template>
  <div class="gyms-page">

    <!-- Intro Section -->
    <section class="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 max-w-[1400px] mx-auto">

          <!-- Left: text -->
          <div class="lg:w-[45%]">
            <h1 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] leading-tight mb-8">
              Tu aportación es de mucha ayuda
            </h1>
            <p class="text-base text-[#6A6867] leading-relaxed">
              Puedes apoyar nuestra causa donando directamente en varios gimnasios de escalada. Encuentra el más cercano para ti y súmate al esfuerzo por una escalada responsable.
            </p>
          </div>

          <!-- Right: gym photo -->
          <div class="lg:w-[50%] overflow-hidden" style="height: 478px;">
            <img
              src="/images/img-20200308-wa-00051.png"
              alt="Gimnasio de escalada"
              class="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- Gyms List -->
    <section class="bg-white py-8 lg:py-12">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200">
          <div
            v-for="gym in gyms"
            :key="gym.id"
            class="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 py-10 border-b border-gray-200"
          >
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center justify-center">
              <!-- Circular logo (Adamanta style) -->
              <div
                v-if="gym.logoType === 'circle'"
                class="w-[193px] h-[193px] rounded-full overflow-hidden flex items-center justify-center"
                :style="{ backgroundColor: gym.logoBg }"
              >
                <span class="text-5xl font-black text-gray-900">{{ gym.logoLetter }}</span>
              </div>
              <!-- Rectangular logo (Mad Complex style) -->
              <div
                v-else
                class="w-[232px] h-[70px] overflow-hidden flex items-center justify-center bg-gray-100 rounded-sm px-4"
              >
                <span class="text-sm font-black text-gray-800 tracking-widest uppercase">{{ gym.name }}</span>
              </div>
            </div>

            <!-- Info -->
            <div class="flex-1">
              <h3 class="text-xl lg:text-2xl font-normal text-[#6A6867] mb-3">
                {{ gym.name }}
              </h3>
              <p class="text-sm lg:text-base text-[#6A6867] leading-relaxed mb-6 max-w-[600px]">
                {{ gym.address }}
              </p>
              <a
                :href="gym.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-8 py-2.5 border border-gray-400 text-[#6A6867] text-sm font-medium tracking-widest hover:bg-gray-100 transition-colors"
              >
                IR AL SITIO
              </a>
            </div>
          </div>
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
    <section class="mountain-prefooter relative overflow-hidden" style="min-height: 675px;">
      <img src="/images/potrero-1.png" alt="Sierra Madre" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative z-10 flex flex-col items-center justify-center py-24 px-4 text-center" style="min-height: 675px;">
        <img src="/images/logoescalada.svg" alt="Escalada Libre" class="w-40 lg:w-52 mb-8 filter brightness-0 invert" />
        <h2 class="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-wider">¡GRACIAS POR TU APOYO!</h2>
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
useSeoMeta({
  title: 'Gyms - Escalada Libre',
  description: 'Apoya a Escalada Libre México A.C. donando directamente en los gimnasios de escalada participantes.',
})

const gyms = [
  {
    id: 1,
    name: 'Adamanta Gonzalitos',
    address: 'Plaza Real, Av. Dr. José Eleuterio González 315, Jardines del Cerro, 64060 Monterrey, N.L.',
    url: '#',
    logoType: 'circle',
    logoBg: '#F8C52D',
    logoLetter: 'A',
  },
  {
    id: 2,
    name: 'Mad Complex',
    address: 'Oscar Wilde 224-b, San Jerónimo. C.P. 64630 Monterrey, N.L.',
    url: '#',
    logoType: 'rect',
    logoBg: '',
    logoLetter: '',
  },
  {
    id: 3,
    name: 'Adamanta Gonzalitos',
    address: 'Plaza Real, Av. Dr. José Eleuterio González 315, Jardines del Cerro, 64060 Monterrey, N.L.',
    url: '#',
    logoType: 'circle',
    logoBg: '#F8C52D',
    logoLetter: 'A',
  },
  {
    id: 4,
    name: 'Mad Complex',
    address: 'Oscar Wilde 224-b, San Jerónimo. C.P. 64630 Monterrey, N.L.',
    url: '#',
    logoType: 'rect',
    logoBg: '',
    logoLetter: '',
  },
]
</script>
