<template>
  <div class="paypal-page">

    <!-- Donation Form Section -->
    <section class="bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 max-w-[1200px] mx-auto">

          <!-- Left: Form -->
          <div class="lg:w-[55%]">
            <h1 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] leading-tight mb-4">
              Tu aportación es de mucha ayuda
            </h1>
            <p v-if="paypalMethod?.body" class="text-base text-[#6A6867] leading-relaxed mb-8">
              {{ paypalMethod.body }}
            </p>

            <form @submit.prevent="handleDonate" class="space-y-0 mt-6">

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
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const api = useApi()

const { data: campaigns } = await useAsyncData('campaigns-paypal',
  () => api.supportCampaigns.getAll().catch(() => [])
)

const paypalMethod = computed(() =>
  campaigns.value?.[0]?.methods?.find((m: any) => m.type === 'paypal')
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
