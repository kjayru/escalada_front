<template>
  <div class="transparencia-page">

    <!-- Hero Banner B&W -->
    <section class="relative overflow-hidden" style="min-height: 1080px;">
      <img
        src="/images/potrero-1.png"
        alt="Transparencia - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover grayscale"
      />
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="relative z-10" style="min-height: 1080px;"></div>
    </section>

    <!-- Intro: tarjeta amarilla + foto -->
    <section class="bg-white pb-16 lg:pb-20">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-start">

          <!-- Izquierda: tarjeta amarilla (empieza más abajo que la foto) -->
          <div class="lg:w-[40%] bg-[#ffe7a0] p-10 lg:p-12 lg:mt-24 flex flex-col justify-start" style="min-height: 651px;">
            <h2 class="text-3xl lg:text-[42px] font-normal text-[#6A6867] leading-tight mb-8">
              Transparencia
            </h2>
            <p class="text-sm lg:text-base text-[#6A6867] leading-relaxed">
              En Escalada Libre México A.C. operamos como una asociación civil sin fines de lucro, y todos nuestros ingresos se destinan íntegramente a cumplir con nuestro propósito: conservar, proteger y promover las zonas de escalada en México. Creemos en la transparencia y en el uso responsable de los recursos, por eso trabajamos con apertura para que cada donativo contribuya a una escalada más segura, sustentable y accesible para todos.
            </p>
          </div>

          <!-- Derecha: foto -->
          <div class="lg:w-[60%] overflow-hidden" style="height: 866px;">
            <img
              src="/images/pico-norte-1.png"
              alt="Escalada en roca"
              class="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="bg-white pb-8">
      <div class="max-w-[830px] mx-auto px-4">
        <div class="bg-[#f8c52d] rounded-full h-[53px] flex items-center">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="tabActiva = tab.id"
            class="flex-1 h-[53px] rounded-full text-base font-normal text-[#6A6867] transition-all"
            :class="tabActiva === tab.id ? 'bg-white border-2 border-[#6a6867]' : ''"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Acordeón de documentos -->
    <section class="bg-white pb-16 lg:pb-20">
      <div class="max-w-[1113px] mx-auto px-4 flex flex-col gap-3">
        <div
          v-for="item in itemsAcordeon"
          :key="item.id"
          class="rounded-[30px] overflow-hidden cursor-pointer transition-colors"
          :class="itemExpandido === item.id ? 'bg-[#ffe7a0]' : 'bg-[#d9d9d9]'"
          @click="toggleItem(item.id)"
        >
          <!-- Header del item -->
          <div class="flex items-center justify-between px-10" style="min-height: 119px;">
            <span class="text-lg lg:text-xl text-[#6A6867] font-normal">{{ item.label }}</span>
            <div class="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg
                class="w-5 h-5 text-[#6A6867] transition-transform duration-200"
                :class="itemExpandido === item.id ? 'rotate-45' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          <!-- Contenido expandido -->
          <div v-if="itemExpandido === item.id" class="px-10 pb-8">
            <a
              v-for="doc in item.docs"
              :key="doc.name"
              href="#"
              class="flex items-center justify-between py-4 border-t border-[#6A6867]/20 hover:opacity-80 transition-opacity"
              @click.stop
            >
              <span class="text-base text-[#6A6867]">{{ doc.name }}</span>
              <div class="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#6A6867]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
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
import { ref } from 'vue'

useSeoMeta({
  title: 'Transparencia - Escalada Libre',
  description: 'En Escalada Libre México A.C. operamos con transparencia y rendición de cuentas. Conoce nuestros documentos, actas de asamblea y reportes.',
})

const tabs = [
  { id: 'asambleas', label: 'Asambleas' },
  { id: 'reportes', label: 'Reportes' },
  { id: 'estados', label: 'Estados de cuenta' },
]
const tabActiva = ref('asambleas')

const itemsAcordeon = [
  {
    id: 'acta',
    label: 'Acta constitutiva',
    docs: [{ name: 'Acta constitutiva' }],
  },
  {
    id: '2019',
    label: 'Asamblea 2019',
    docs: [{ name: 'Asamblea 2019' }],
  },
  {
    id: '2020',
    label: 'Asamblea 2020',
    docs: [
      { name: 'Reglamento' },
      { name: 'Asamblea general Ordinaria 2020' },
      { name: 'Lista de asistencia asamblea ordinaria 2020' },
      { name: 'Asamblea extraordinaria 2022' },
    ],
  },
  {
    id: '2021',
    label: 'Asamblea 2021',
    docs: [{ name: 'Asamblea 2021' }],
  },
  {
    id: '2022',
    label: 'Asamblea 2022',
    docs: [{ name: 'Asamblea 2022' }],
  },
  {
    id: '2023',
    label: 'Asamblea 2023',
    docs: [{ name: 'Asamblea 2023' }],
  },
  {
    id: '2024',
    label: 'Asamblea 2024',
    docs: [{ name: 'Asamblea 2024' }],
  },
  {
    id: '2025',
    label: 'Asamblea 2025',
    docs: [{ name: 'Asamblea 2025' }],
  },
]

const itemExpandido = ref<string | null>('2020')
const toggleItem = (id: string) => {
  itemExpandido.value = itemExpandido.value === id ? null : id
}
</script>
