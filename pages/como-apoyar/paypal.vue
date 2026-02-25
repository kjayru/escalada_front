<template>
  <div class="paypal-page">

    <!-- Donation Form Section -->
    <section class="bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 max-w-[1200px] mx-auto">

          <!-- Left: Form -->
          <div class="lg:w-[55%]">
            <h1 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] leading-tight mb-10">
              Tu aportación es de mucha ayuda
            </h1>

            <form @submit.prevent="handleDonate" class="space-y-0">

              <!-- Nombre -->
              <div class="mb-5">
                <label class="block text-base text-[#6A6867] mb-2 font-normal">Nombre*</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  required
                  class="w-full h-[66px] px-4 border border-gray-300 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D] transition-colors"
                />
              </div>

              <!-- Apellido -->
              <div class="mb-5">
                <label class="block text-base text-[#6A6867] mb-2 font-normal">Apellido*</label>
                <input
                  v-model="form.apellido"
                  type="text"
                  required
                  class="w-full h-[66px] px-4 border border-gray-300 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D] transition-colors"
                />
              </div>

              <!-- Correo electrónico -->
              <div class="mb-5">
                <label class="block text-base text-[#6A6867] mb-2 font-normal">Correo electrónico*</label>
                <input
                  v-model="form.correo"
                  type="email"
                  required
                  class="w-full h-[66px] px-4 border border-gray-300 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D] transition-colors"
                />
              </div>

              <!-- Cantidad a donar -->
              <div class="mb-5">
                <label class="block text-base text-[#6A6867] mb-2 font-normal">Cantidad a donar*</label>
                <input
                  v-model="form.cantidad"
                  type="number"
                  min="1"
                  required
                  class="w-full h-[66px] px-4 border border-gray-300 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D] transition-colors"
                />
              </div>

              <!-- Campos obligatorios note -->
              <p class="text-sm text-[#6A6867] text-right mb-6">*Campos obligatorios</p>

              <!-- DONAR button -->
              <button
                type="submit"
                class="w-full h-[45px] bg-[#F8C52D] text-gray-900 font-semibold text-sm tracking-widest hover:bg-[#e0b525] transition-colors"
              >
                DONAR
              </button>

              <!-- Reference counter badge -->
              <div class="mt-3 inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 text-sm font-mono rounded-sm">
                <span>{{ donationRef }}</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </form>
          </div>

          <!-- Right: Decorative image -->
          <div class="lg:w-[40%] flex items-start justify-center pt-0 lg:pt-4">
            <img
              src="/images/hg.png"
              alt="Herramienta de escalada"
              class="w-full max-w-[410px] object-contain"
              style="max-height: 900px;"
            />
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
import { ref, reactive } from 'vue'

useSeoMeta({
  title: 'Donar por PayPal - Escalada Libre',
  description: 'Realiza tu donación a Escalada Libre México A.C. de forma segura a través de PayPal.',
})

const donationRef = ref('00001')

const form = reactive({
  nombre: '',
  apellido: '',
  correo: '',
  cantidad: '',
})

const handleDonate = () => {
  // Redirect to PayPal with the donation amount
  const paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=ESCALADALIBRE`
  window.open(paypalUrl, '_blank')
}
</script>
