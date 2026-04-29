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
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

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
