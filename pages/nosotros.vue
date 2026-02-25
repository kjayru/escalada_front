<template>
  <div class="nosotros-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden" style="height: 779px;">
      <img
        src="/images/n-1.png"
        alt="Nosotros - Escalada Libre"
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
            <h2 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-6">Misión</h2>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed">
              Somos un grupo de deportistas del Noreste de México comprometidos con el fomento seguro y sustentable del montañismo y la escalada. Buscamos contribuir al cuidado de los ecosistemas, al acceso a un medio ambiente sano y al desarrollo social, mediante planes y acciones que protejan y mantengan los espacios naturales donde se practican estas actividades.
            </p>
          </div>
          <!-- Visión -->
          <div class="bg-[#f9f9f9] rounded-xl p-10 lg:p-14">
            <h2 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-6">Visión</h2>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed">
              Buscamos fomentar la conciencia comunitaria sobre la importancia de proteger los ecosistemas para disfrutarlos de forma sustentable, promover el potencial de México para los deportes de montaña, impulsar una práctica segura y preparada de estas actividades, y motivar a los sectores público y privado a sumarse a acciones que apoyen la misión de nuestra Asociación.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Qué hacemos? -->
    <section class="que-hacemos py-12 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div class="inline-block">
          <div class="w-36 h-3 bg-[#F8C52D] mx-auto mb-4"></div>
          <h2 class="text-3xl lg:text-[35px] font-medium text-[#6A6867]">¿Qué hacemos?</h2>
        </div>
      </div>

      <!-- Block 1: Infraestructura - text left, image right -->
      <div class="que-hacemos-block mb-0">
        <div class="grid lg:grid-cols-2">
          <!-- Text -->
          <div class="px-8 sm:px-12 lg:px-20 py-16 lg:py-20 flex flex-col justify-center">
            <!-- Icon + Tag -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg class="w-10 h-10 text-[#6A6867]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <div class="w-16 h-[2px] bg-[#F8C52D] mb-1"></div>
                <span class="text-lg lg:text-xl font-medium text-[#6A6867] tracking-wide">Infraestructura</span>
              </div>
            </div>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-6">
              Trabajamos en el mantenimiento de infraestructura para hacer posible que la escalada pueda practicarse de la forma más segura posible:
            </p>
            <ul class="space-y-4">
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Requipamos rutas de escalada a lo largo y ancho del Estado de Nuevo León</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Instalamos señalética en parajes naturales para brindar información a deportistas y visitantes</span>
              </li>
            </ul>
          </div>
          <!-- Image -->
          <div class="relative overflow-hidden min-h-[500px] lg:min-h-[819px]">
            <img
              src="/images/img-33661.png"
              alt="Infraestructura de escalada"
              class="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </div>
      </div>

      <!-- Block 2: Acceso - image left, text right -->
      <div class="que-hacemos-block">
        <div class="grid lg:grid-cols-2">
          <!-- Image -->
          <div class="relative overflow-hidden min-h-[500px] lg:min-h-[819px] order-2 lg:order-1">
            <img
              src="/images/img-20200308-wa-00051.png"
              alt="Acceso a zonas de escalada"
              class="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <!-- Text -->
          <div class="px-8 sm:px-12 lg:px-20 py-16 lg:py-20 flex flex-col justify-center order-1 lg:order-2">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg class="w-10 h-10 text-[#6A6867]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <div class="w-16 h-[2px] bg-[#F8C52D] mb-1"></div>
                <span class="text-lg lg:text-xl font-medium text-[#6A6867] tracking-wide">Acceso</span>
              </div>
            </div>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-6">
              Buscamos gestionar con autoridades públicas y entidades privadas el acceso a las zonas de escalada de la región.
            </p>
            <ul class="space-y-4">
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Atendemos el llamado de autoridades de los tres niveles de gobierno para brindar información y asesoría respecto a la escalada</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Buscamos reunir a los actores claves involucrados con la conservación y el deporte para sumar esfuerzos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Block 3: Conservación - text left, image right -->
      <div class="que-hacemos-block">
        <div class="grid lg:grid-cols-2">
          <!-- Text -->
          <div class="px-8 sm:px-12 lg:px-20 py-16 lg:py-20 flex flex-col justify-center">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg class="w-10 h-10 text-[#6A6867]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <div class="w-16 h-[2px] bg-[#F8C52D] mb-1"></div>
                <span class="text-lg lg:text-xl font-medium text-[#6A6867] tracking-wide">Conservación</span>
              </div>
            </div>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-6">
              Llevamos a cabo actividades enfocadas en diseminar información y garantizar la conservación de nuestras áreas naturales a través de pláticas, clínicas y litigio estratégico.
            </p>
            <ul class="space-y-4">
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Apoyamos la presentación de una solicitud de audiencia pública frente al Gobierno del Estado para conservar el lecho del Rio Santa Catarina</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Celebramos días importantes como el día de la Tierra para concientizar sobre la importancia de la conservación de los espacios naturales</span>
              </li>
            </ul>
          </div>
          <!-- Image -->
          <div class="relative overflow-hidden min-h-[500px] lg:min-h-[819px]">
            <img
              src="/images/reforestacion-casualas-1.png"
              alt="Conservación de áreas naturales"
              class="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </div>
      </div>

      <!-- Block 4: Conocimiento - image left, text right -->
      <div class="que-hacemos-block">
        <div class="grid lg:grid-cols-2">
          <!-- Image -->
          <div class="relative overflow-hidden min-h-[500px] lg:min-h-[819px] order-2 lg:order-1">
            <img
              src="/images/unrioenelrio-home-1.png"
              alt="Talleres de conocimiento"
              class="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <!-- Text -->
          <div class="px-8 sm:px-12 lg:px-20 py-16 lg:py-20 flex flex-col justify-center order-1 lg:order-2">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg class="w-10 h-10 text-[#6A6867]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <div class="w-16 h-[2px] bg-[#F8C52D] mb-1"></div>
                <span class="text-lg lg:text-xl font-medium text-[#6A6867] tracking-wide">Conocimiento</span>
              </div>
            </div>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-6">
              Nos interesa proveer a las nuevas generaciones de los conocimientos necesarios para que puedan aventurarse a escalar de forma segura y sustentable.
            </p>
            <ul class="space-y-4">
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Llevamos a cabo clínicas enfocadas en proveer conocimiento técnico a los deportistas para que puedan escalar de forma segura</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 flex-shrink-0 w-6 h-6 text-[#F8C52D]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </span>
                <span class="text-base text-[#6A6867] leading-relaxed">Realizamos pláticas y conferencias enfocadas en la difusión de relevancia para la comunidad de escaladores</span>
              </li>
            </ul>
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

        <!-- Accordion: Mesa directiva -->
        <div class="accordion-item border-t border-gray-300">
          <button
            @click="toggleAccordion('mesa')"
            class="w-full flex items-center justify-between py-5 text-left"
          >
            <span class="text-xl lg:text-2xl font-medium text-[#6A6867]">Mesa directiva</span>
            <svg
              class="w-6 h-6 text-[#6A6867] transition-transform duration-300"
              :class="{ 'rotate-45': openAccordion === 'mesa' }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>

          <!-- Mesa directiva content -->
          <div v-show="openAccordion === 'mesa'" class="pb-8">
            <!-- Miembros actuales sub-header -->
            <h3 class="text-lg lg:text-xl font-medium text-[#6A6867] mb-6 mt-2">Miembros actuales</h3>

            <!-- Members grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="member in membersActuales"
                :key="member.name"
                class="bg-white rounded-lg p-4 flex items-center gap-4"
              >
                <div class="flex-shrink-0 w-16 h-16 lg:w-[87px] lg:h-[87px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    :src="member.photo || '/images/img-20200308-wa-00051.png'"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p class="text-base font-medium text-[#6A6867]">{{ member.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordion: Miembros fundadores -->
        <div class="accordion-item border-t border-gray-300">
          <button
            @click="toggleAccordion('fundadores')"
            class="w-full flex items-center justify-between py-5 text-left"
          >
            <span class="text-xl lg:text-2xl font-medium text-[#6A6867]">Miembros fundadores</span>
            <svg
              class="w-6 h-6 text-[#6A6867] transition-transform duration-300"
              :class="{ 'rotate-45': openAccordion === 'fundadores' }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
          <div v-show="openAccordion === 'fundadores'" class="pb-8">
            <p class="text-[#6A6867] text-base">Información de los miembros fundadores próximamente.</p>
          </div>
        </div>

        <!-- Accordion: Miembros pasados -->
        <div class="accordion-item border-t border-b border-gray-300">
          <button
            @click="toggleAccordion('pasados')"
            class="w-full flex items-center justify-between py-5 text-left"
          >
            <span class="text-xl lg:text-2xl font-medium text-[#6A6867]">Miembros pasados</span>
            <svg
              class="w-6 h-6 text-[#6A6867] transition-transform duration-300"
              :class="{ 'rotate-45': openAccordion === 'pasados' }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
          <div v-show="openAccordion === 'pasados'" class="pb-8">
            <p class="text-[#6A6867] text-base">Información de los miembros pasados próximamente.</p>
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
  title: 'Nosotros - Escalada Libre',
  description: 'Somos un grupo de deportistas del Noreste de México comprometidos con el fomento seguro y sustentable del montañismo y la escalada.',
})

// Accordion state
const openAccordion = ref<string | null>('mesa')

const toggleAccordion = (section: string) => {
  openAccordion.value = openAccordion.value === section ? null : section
}

// Members list
const membersActuales = [
  { name: 'Ramón Narváez', photo: null },
  { name: 'Jacobo Jasso', photo: null },
  { name: 'Salvador Escamilla', photo: null },
  { name: 'Francisco Serratos', photo: null },
  { name: 'Mayela Contreras', photo: null },
  { name: 'Othón Martínez', photo: null },
  { name: 'Rubén Pérez', photo: null },
  { name: 'Melissa Canavati', photo: null },
  { name: 'Keila Leal', photo: null },
  { name: 'Eduardo Mijares', photo: null },
  { name: 'Alejandro Martínez', photo: null },
  { name: 'Oskar Sandoval', photo: null },
]
</script>

<style scoped>
.que-hacemos-block:nth-child(even) {
  background-color: #f9f9f9;
}

.accordion-item button:focus {
  outline: none;
}
</style>
