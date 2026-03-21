<template>
  <div class="transferencia-page">

    <!-- Transfer Info Section -->
    <section class="bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 max-w-[1400px] mx-auto">

          <!-- Left: Bank details -->
          <div class="lg:w-[45%]">
            <h1 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] leading-tight mb-8">
              Tu aportación es de mucha ayuda
            </h1>

            <p class="text-base text-[#6A6867] leading-relaxed mb-8">
              {{ bankMethod?.body ?? 'Te compartimos los datos para tu aportación por medio de transferencia' }}
            </p>

            <!-- Bank details card -->
            <div class="space-y-3 mb-10">
              <p class="text-base font-semibold text-[#6A6867] tracking-wide">{{ bankMethod?.settings?.bank ?? 'BANCOMER' }}</p>
              <div class="space-y-2 text-base text-[#6A6867]">
                <p>No. de Cuenta &nbsp;<span class="font-medium">{{ bankMethod?.settings?.account ?? '0120869686' }}</span></p>
                <p v-if="bankMethod?.settings?.iban">IBAN: &nbsp;<span class="font-medium">{{ bankMethod.settings.iban }}</span></p>
                <p v-else>Clabe: &nbsp;<span class="font-medium">012 580 00120869686 2</span></p>
                <p>Nombre: &nbsp;<span class="font-medium">{{ bankMethod?.settings?.name ?? 'Escalada Libre México AC.' }}</span></p>
              </div>
            </div>

            <!-- Reference counter badge -->
            <div class="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 text-sm font-mono rounded-sm">
              <span>00001</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Right: Decorative image -->
          <div class="lg:w-[50%] flex items-start justify-center lg:justify-end pt-0 lg:pt-4">
            <img
              src="/images/potrero-1.png"
              alt="Instalación de rutas de escalada"
              class="w-full max-w-[494px] object-contain"
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
import { computed } from 'vue'

const api = useApi()

const { data: campaigns } = await useAsyncData('campaigns-transferencia',
  () => api.supportCampaigns.getAll().catch(() => [])
)

const bankMethod = computed(() =>
  campaigns.value?.[0]?.methods?.find((m: any) => m.type === 'bank_transfer')
)

useSeoMeta({
  title: 'Transferencia interbancaria - Escalada Libre',
  description: 'Realiza tu donación a Escalada Libre Costa Rica mediante transferencia interbancaria.',
})
</script>
