<template>
  <div class="paypal-page">

    <!-- Donation Form Section -->
    <section class="bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 max-w-[1200px] mx-auto">

          <!-- Left: Form -->
          <div class="lg:w-[55%]">
            <h1 class="leading-tight mb-10" style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500; font-style: normal; color: #6A6867;">
              Tu aportación es de mucha ayuda
            </h1>

            <form @submit.prevent="handleDonate" class="mt-6">

              <!-- Nombre -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Nombre*</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Apellido -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Apellido*</label>
                <input
                  v-model="form.apellido"
                  type="text"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Correo electrónico -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Correo electrónico*</label>
                <input
                  v-model="form.correo"
                  type="email"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Cantidad a donar -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Cantidad a donar*</label>
                <input
                  v-model="form.cantidad"
                  type="number"
                  min="1"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Campos obligatorios note -->
              <p class="text-right mb-6" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 500;">*Campos obligatorios</p>

              <!-- DONAR button -->
              <button
                type="submit"
                class="w-full hover:opacity-90 transition-opacity"
                style="margin-top: 70px; height: 45px; border-radius: 6.25rem; background: #F8C52D; color: #6A6867; text-align: center; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700;"
              >
                DONAR
              </button>

              <!-- Reference counter badge -->
              <div class="flex justify-center mt-6">
                <div 
                  class="flex items-center justify-center text-white px-8 bg-cover bg-center bg-no-repeat"
                  style="background-image: url('/images/fondobotoncontador.png'); background-size: 100% 100%; width: 192px; height: 32px;"
                >
                  <span class="text-xl font-bold tracking-wider" style="font-family: 'Readex Pro', sans-serif;">{{ donationRef }}</span>
                  <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

            </form>
          </div>

          <!-- Right: Decorative image (oculta en móvil) -->
          <div class="hidden lg:flex lg:w-[40%] items-start justify-center pt-0 lg:pt-4">
            <img
              v-if="paypalMethod?.image"
              :src="paypalMethod.image"
              alt="Herramienta de escalada"
              class="w-full max-w-[410px] object-contain"
              style="max-height: 900px;"
            />
            <img
              v-else
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
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const api = useApi()

const { data: campaign } = await useAsyncData(
  'support-campaign-como-apoyar-paypal',
  () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null),
)

const paypalMethod = computed(() =>
  campaign.value?.methods?.find((m: any) => m.type === 'paypal')
)

const paypalLink = computed(() =>
  paypalMethod.value?.settings?.paypal_link ?? 'https://www.paypal.com/donate'
)

const suggestedAmount = computed(() =>
  paypalMethod.value?.settings?.suggested_amount ?? null
)

useSeoMeta({
  title: 'Donar por PayPal - Escalada Libre',
  description: 'Realiza tu donación a Escalada Libre Costa Rica de forma segura a través de PayPal.',
})

const donationRef = ref('00001')

const form = reactive({
  nombre: '',
  apellido: '',
  correo: '',
  cantidad: suggestedAmount.value ? String(suggestedAmount.value) : '',
})

const handleDonate = () => {
  const url = new URL(paypalLink.value)
  if (form.cantidad) url.searchParams.set('amount', form.cantidad)
  window.open(url.toString(), '_blank')
}
</script>
