<template>
  <div class="transferencia-page">

    <!-- Transfer Info Section -->
    <section class="bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div class="mx-auto px-8 lg:px-20">
        <div class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 max-w-[1250px] mx-auto">

          <!-- Left: Bank details -->
          <div class="lg:w-[45%]">
            <h1 class="leading-tight mb-8" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;">
              Tu aportación es de mucha ayuda
            </h1>

            <div
              v-if="bankMethod?.body"
              v-html="bankMethod.body"
              class="mb-8 prose prose-lg max-w-none"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
            ></div>
            <p
              v-else
              class="mb-8"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
            >
              Te compartimos los datos para tu aportación por medio de transferencia
            </p>

            <!-- Bank details card -->
            <div class="space-y-3 mb-10">
              <p class="text-base font-semibold text-[#6A6867] tracking-wide">{{ bankMethod?.settings?.bank ?? 'BANCOMER' }}</p>
              <div class="space-y-2 text-base text-[#6A6867]">
                <p>No. de Cuenta &nbsp;<span class="font-medium">{{ bankMethod?.settings?.account ?? '0120869686' }}</span></p>
                <p v-if="bankMethod?.settings?.clabe">Clabe: &nbsp;<span class="font-medium">{{ bankMethod.settings.clabe }}</span></p>
                <p v-if="bankMethod?.settings?.iban">IBAN: &nbsp;<span class="font-medium">{{ bankMethod.settings.iban }}</span></p>
                <p>Nombre: &nbsp;<span class="font-medium">{{ bankMethod?.settings?.name ?? 'Escalada Libre México AC.' }}</span></p>
              </div>
            </div>

            <!-- Reference counter badge -->
            <div class="mt-6">
              <div 
                class="flex items-center justify-center text-white px-8 bg-cover bg-center bg-no-repeat"
                style="background-image: url('/images/fondobotoncontador.png'); background-size: 100% 100%; width: 192px; height: 32px;"
              >
                <span class="text-xl font-bold tracking-wider" style="font-family: 'Readex Pro', sans-serif;">00001</span>
              </div>
            </div>
          </div>

          <!-- Right: Decorative image (oculta en móvil) -->
          <div class="hidden lg:flex lg:w-[50%] items-start justify-center lg:justify-end pt-0 lg:pt-4">
            <img
              v-if="bankMethod?.image"
              :src="bankMethod.image"
              alt="Instalación de rutas de escalada"
              class="w-full max-w-[494px] object-contain"
              style="max-height: 900px;"
            />
            <img
              v-else
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

const { data: campaign } = await useAsyncData(
  'support-campaign-como-apoyar-transferencia',
  () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null),
)

const bankMethod = computed(() =>
  campaign.value?.methods?.find((m: any) => m.type === 'transfer')
)

useSeoMeta({
  title: 'Transferencia interbancaria - Escalada Libre',
  description: 'Realiza tu donación a Escalada Libre Costa Rica mediante transferencia interbancaria.',
})
</script>

<style scoped>
/* Estilos para contenido HTML del RichEditor */
.prose :deep(p) {
  margin-bottom: 1.25rem;
}

.prose :deep(p:last-child) {
  margin-bottom: 0;
}

.prose :deep(p:empty) {
  margin-bottom: 0.625rem;
}
</style>
