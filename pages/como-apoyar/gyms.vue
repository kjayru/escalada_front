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
            <p class="text-base text-[#6A6867] leading-relaxed mb-6">
              {{ gymMethod?.body ?? 'Puedes apoyar nuestra causa donando directamente en varios gimnasios de escalada. Encuentra el más cercano para ti y súmate al esfuerzo por una escalada responsable.' }}
            </p>
            <p v-if="gymContactEmail" class="text-base text-[#6A6867]">
              ¿Tu gym quiere sumarse?
              <a :href="`mailto:${gymContactEmail}`" class="text-[#F8C52D] hover:underline font-medium">
                {{ gymContactEmail }}
              </a>
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
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const api = useApi()

const { data: campaigns } = await useAsyncData('campaigns-gyms',
  () => api.supportCampaigns.getAll().catch(() => [])
)

const gymMethod = computed(() =>
  campaigns.value?.[0]?.methods?.find((m: any) => m.type === 'gym_partner')
)

const gymContactEmail = computed(() =>
  gymMethod.value?.settings?.contact_email ?? null
)

useSeoMeta({
  title: 'Gyms - Escalada Libre',
  description: 'Apoya a Escalada Libre Costa Rica donando directamente en los gimnasios de escalada participantes.',
})

const gyms = [
  {
    id: 1,
    name: 'Escalada San José',
    address: 'Av. Central, Barrio Escalante, San José, Costa Rica',
    url: '#',
    logoType: 'circle',
    logoBg: '#F8C52D',
    logoLetter: 'E',
  },
  {
    id: 2,
    name: 'Vertical CR',
    address: 'Curridabat, San José, Costa Rica',
    url: '#',
    logoType: 'rect',
    logoBg: '',
    logoLetter: '',
  },
  {
    id: 3,
    name: 'Boulder Lab Heredia',
    address: 'Centro Comercial Paseo de las Flores, Heredia, Costa Rica',
    url: '#',
    logoType: 'circle',
    logoBg: '#1a1a2e',
    logoLetter: 'B',
  },
  {
    id: 4,
    name: 'Rock & Wall Alajuela',
    address: 'La Guácima, Alajuela, Costa Rica',
    url: '#',
    logoType: 'rect',
    logoBg: '',
    logoLetter: '',
  },
]
</script>
