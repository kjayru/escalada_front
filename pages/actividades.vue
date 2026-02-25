<template>
  <div class="actividades-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden" style="height: 1080px;">
      <img
        src="/images/img-33661.png"
        alt="Actividades - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-black/20"></div>
    </section>

    <!-- Intro + Photo Mosaic -->
    <section class="mosaic-section bg-white">
      <div class="mosaic-grid">

        <!-- Left tall photo -->
        <div class="mosaic-left-tall">
          <img
            src="/images/n-1.png"
            alt="Actividades de escalada"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Center top: title + text -->
        <div class="mosaic-center-text flex flex-col items-center justify-center px-8 py-12 text-center">
          <h1 class="text-3xl lg:text-[35px] font-medium text-[#6A6867] mb-4">Actividades</h1>
          <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed max-w-xs mb-8">
            Listado de actividades enfocadas en el cuidado, la seguridad y el disfrute responsable de las áreas de montaña.
          </p>
          <a
            href="#cronologia"
            class="inline-block px-8 py-3 border border-[#6A6867] text-[#6A6867] font-medium hover:bg-[#6A6867] hover:text-white transition-colors text-sm"
          >
            Ver actividades
          </a>
        </div>

        <!-- Top-right photo -->
        <div class="mosaic-top-right">
          <img
            src="/images/img-20200308-wa-00051.png"
            alt="Actividad escalada"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Center-left photo -->
        <div class="mosaic-center-left">
          <img
            src="/images/reforestacion-casualas-1.png"
            alt="Actividad al aire libre"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Center-right photo -->
        <div class="mosaic-center-right">
          <img
            src="/images/huasteca-41.png"
            alt="Montaña escalada"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Far-right tall photo -->
        <div class="mosaic-right-tall">
          <img
            src="/images/potrero-1.png"
            alt="Escalada en roca"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Bottom-left photo -->
        <div class="mosaic-bottom-left">
          <img
            src="/images/slide1.png"
            alt="Comunidad de escalada"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Bottom-center photo -->
        <div class="mosaic-bottom-center">
          <img
            src="/images/patrocinador1.png"
            alt="Equipo escalada"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Bottom-center-right photo -->
        <div class="mosaic-bottom-center-right">
          <img
            src="/images/patrocinador2.png"
            alt="Escalada libre actividad"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Bottom-right fill photo -->
        <div class="mosaic-bottom-right-fill">
          <img
            src="/images/unrioenelrio-home-1.png"
            alt="Escalada historia"
            class="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>

    <!-- Cronología de Actividades -->
    <section id="cronologia" class="cronologia-section py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] mb-12">
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
              :class="openYear === year.year ? 'bg-[#F8C52D]' : 'bg-white hover:bg-gray-50'"
            >
              <span
                class="text-2xl lg:text-[30px] font-normal ml-4 lg:ml-20"
                :class="openYear === year.year ? 'text-gray-900' : 'text-[#6A6867]'"
              >
                {{ year.year }}
              </span>
              <svg
                class="w-5 h-5 mr-4 lg:mr-8 transition-transform duration-300 flex-shrink-0"
                :class="[
                  openYear === year.year ? 'rotate-45 text-gray-900' : 'text-[#6A6867]'
                ]"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>

            <!-- Activities list -->
            <div v-show="openYear === year.year" class="bg-white">
              <ul class="divide-y divide-gray-100">
                <li
                  v-for="activity in year.activities"
                  :key="activity.name"
                  class="flex items-center justify-between px-4 lg:px-20 py-4 hover:bg-gray-50 transition-colors"
                >
                  <span class="text-base lg:text-lg text-[#6A6867]">{{ activity.name }}</span>
                  <button
                    class="flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center text-[#6A6867] hover:text-[#F8C52D] transition-colors"
                    :aria-label="`Descargar ${activity.name}`"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </button>
                </li>
              </ul>
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
import { ref } from 'vue'

useSeoMeta({
  title: 'Actividades - Escalada Libre',
  description: 'Listado de actividades enfocadas en el cuidado, la seguridad y el disfrute responsable de las áreas de montaña.',
})

const openYear = ref<string>('2018')

const toggleYear = (year: string) => {
  openYear.value = openYear.value === year ? '' : year
}

const years = [
  {
    year: '2018',
    activities: [
      { name: 'Instalación letrero Médicos' },
      { name: 'Requipado Surf Bowl' },
      { name: 'Competencia Mad Complex' },
      { name: 'Reequipado Cazuelas' },
      { name: 'Clínica de Multilargos' },
      { name: 'Tensa Fest 2019' },
      { name: 'Reinstalación de Letrero Médicos' },
      { name: 'Primera reunión CONANP' },
      { name: 'Mantenimiento Ruta Mundito' },
      { name: 'Tercera reunión CONANP' },
      { name: 'Limpieza Acantilados Santiago' },
      { name: 'Reequipado Club Mex' },
    ],
  },
  { year: '2019', activities: [] },
  { year: '2020', activities: [] },
  { year: '2021', activities: [] },
  { year: '2022', activities: [] },
  { year: '2023', activities: [] },
  { year: '2024', activities: [] },
]
</script>

<style scoped>
/* ── Mosaic photo grid ── */
.mosaic-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 419px 419px 419px;
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

.mosaic-right-tall {
  grid-column: 4;
  grid-row: 2 / 4;
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

.mosaic-bottom-right-fill {
  display: none; /* used only if we need extra */
}

/* Responsive: on smaller screens collapse to simple flow */
@media (max-width: 1023px) {
  .mosaic-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .mosaic-left-tall,
  .mosaic-center-left,
  .mosaic-center-right,
  .mosaic-top-right,
  .mosaic-bottom-left,
  .mosaic-bottom-center,
  .mosaic-bottom-center-right {
    grid-column: auto;
    grid-row: auto;
    height: 300px;
  }

  .mosaic-right-tall {
    grid-column: auto;
    grid-row: auto;
    height: 300px;
  }

  .mosaic-center-text {
    grid-column: 1 / 3;
    grid-row: auto;
  }
}

@media (max-width: 639px) {
  .mosaic-grid {
    grid-template-columns: 1fr;
  }

  .mosaic-center-text {
    grid-column: 1;
  }

  .mosaic-left-tall,
  .mosaic-center-left,
  .mosaic-center-right,
  .mosaic-top-right,
  .mosaic-bottom-left,
  .mosaic-bottom-center,
  .mosaic-bottom-center-right,
  .mosaic-right-tall {
    height: 260px;
  }
}
</style>
