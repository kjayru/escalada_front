<template>
  <div class="gyms-page">

    <!-- Intro Section -->
    <section class="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="mx-auto px-8 lg:px-20">
        <div class="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 max-w-[1250px] mx-auto">

          <!-- Left: text -->
          <div class="lg:w-[45%]">
            <h1
              style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500; font-style: normal; color: #6A6867;"
              class="leading-tight mb-8"
            >
              {{ gymMethod?.title ?? 'Tu aportación es de mucha ayuda' }}
            </h1>
            <p
              v-if="gymMethod?.body"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
              class="leading-relaxed mb-6"
            >
              {{ gymMethod.body }}
            </p>
          </div>

          <!-- Right: gym photo -->
          <div class="lg:w-[50%] overflow-hidden" style="height: 478px;">
            <img
              v-if="gymMethod?.image"
              :src="gymMethod.image"
              alt="Gimnasio de escalada"
              class="w-full h-full object-cover"
            />
            <img
              v-else
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
      <div class="max-w-[1250px] mx-auto px-8 lg:px-20">
        <div class="border-t border-gray-200">

          <!-- Loading skeleton -->
          <div v-if="pendingGyms" class="py-16 text-center text-[#6A6867]">
            Cargando gimnasios...
          </div>

          <!-- Empty state -->
          <div v-else-if="!gyms || gyms.length === 0" class="py-16 text-center text-[#6A6867]">
            No hay gimnasios registrados aún.
          </div>

          <!-- Gym rows -->
          <div
            v-else
            v-for="gym in gyms"
            :key="gym.id"
            class="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 py-10 border-b border-gray-200"
          >
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center justify-center w-[118px] h-[118px] sm:w-[193px] sm:h-[193px]">
              <!-- Logo desde admin (imagen subida) -->
              <img
                v-if="gym.logo"
                :src="gym.logo"
                :alt="gym.name"
                class="w-full h-full object-contain"
                style="max-width: 118px;"
              />
              <!-- Fallback: inicial del nombre en círculo -->
              <div
                v-else
                class="w-full h-full rounded-full flex items-center justify-center"
                style="background-color: #F8C52D;"
              >
                <span
                  class="text-5xl sm:text-6xl"
                  style="font-family: 'Readex Pro', sans-serif; font-weight: 700; color: #6A6867;"
                >
                  {{ gym.name.charAt(0).toUpperCase() }}
                </span>
              </div>
            </div>

            <!-- Info -->
            <div class="flex-1">
              <h3
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 700;"
                class="mb-3"
              >
                {{ gym.name }}
              </h3>
              <p
                v-if="gym.address"
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
                class="leading-relaxed mb-6 max-w-[600px]"
              >
                {{ gym.address }}
              </p>
              <a
                v-if="gym.website_url"
                :href="gym.website_url"
                target="_blank"
                rel="noopener noreferrer"
                style="padding: 10px 32px; border-radius: 6.25rem; font-family: 'Readex Pro', sans-serif; font-size: 1.0625rem; font-style: normal; font-weight: 700; line-height: normal; text-decoration: none;"
                class="btn-gym-hover block sm:inline-block w-full sm:w-auto text-center"
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
import type { Gym } from '~/types/api'

const api = useApi()

const { data: campaign } = await useAsyncData(
  'support-campaign-como-apoyar-gyms',
  () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null)
)

const { data: gyms, pending: pendingGyms } = await useAsyncData(
  'gyms-list',
  () => api.gyms.getAll().catch(() => [] as Gym[])
)

const gymMethod = computed(() =>
  campaign.value?.methods?.find((m: any) => m.type === 'gyms')
)

useSeoMeta({
  title: 'Gyms - Escalada Libre',
  description: 'Apoya a Escalada Libre Costa Rica donando directamente en los gimnasios de escalada participantes.',
})
</script>

<style scoped>
.btn-gym-hover {
  background: transparent;
  color: #6A6867;
  border: 1px solid #6A6867;
  transition: all 0.2s ease;
}

.btn-gym-hover:hover {
  background: #6A6867;
  color: #ffffff;
  border: 1px solid #6A6867;
}
</style>
