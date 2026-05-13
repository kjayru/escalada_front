<template>
  <section class="prefooter-cards lg:pt-24 pb-0 bg-white">
    <div class="px-4 sm:px-6 lg:px-[6rem] 3xl:px-0 max-w-[1225px] mx-auto">
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Newsletter Card -->
        <div class="bg-[#F9D363] p-8 flex flex-col justify-between min-h-[357px]">
          <div>
            <p class="uppercase mb-4" style="color: #000; font-family: 'Readex Pro', sans-serif; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.2em;">{{ newsletterEtiqueta }}</p>
            <h3 class="leading-snug mb-6" style="color: #0D0D0D; font-family: 'Readex Pro', sans-serif; font-size: 1.875rem; font-weight: 700;">
              {{ newsletterTitulo }}
            </h3>
          </div>
          <div class="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Escribe tu correo"
              class="w-full px-4 py-3 border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D]"
              style="font-family: 'Readex Pro', sans-serif; font-weight: 400;"
            />
            <button class="self-end px-6 py-3 bg-[#242424] text-white font-medium text-sm uppercase tracking-widest hover:bg-black transition-colors">
              {{ newsletterBoton }}
            </button>
          </div>
        </div>

        <!-- Sponsor Cards desde API -->
        <template v-if="prefooterCards.length">
          <template v-for="card in prefooterCards" :key="card.id">
            <NuxtLink
              v-if="card.link_url"
              :to="card.link_url"
              :external="card.link_url.startsWith('http')"
              :target="card.link_url.startsWith('http') ? '_blank' : undefined"
              :rel="card.link_url.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="relative overflow-hidden min-h-[357px] block cursor-pointer"
            >
              <img v-if="card.banner?.url" :src="card.banner.url" :alt="card.title ?? card.sponsor.name" class="w-full h-full object-cover absolute inset-0" />
              <div v-else class="bg-[#1a1a2e] p-8 flex items-center justify-center min-h-[357px]">
                <img v-if="card.sponsor.logo?.url" :src="card.sponsor.logo.url" :alt="card.sponsor.name" class="max-w-[70%] mx-auto filter brightness-0 invert" />
                <span v-else class="text-white text-2xl font-bold tracking-widest uppercase">{{ card.sponsor.name }}</span>
              </div>
            </NuxtLink>
            <div v-else class="relative overflow-hidden min-h-[357px]">
              <img v-if="card.banner?.url" :src="card.banner.url" :alt="card.title ?? card.sponsor.name" class="w-full h-full object-cover absolute inset-0" />
              <div v-else class="bg-[#1a1a2e] p-8 flex items-center justify-center min-h-[357px]">
                <img v-if="card.sponsor.logo?.url" :src="card.sponsor.logo.url" :alt="card.sponsor.name" class="max-w-[70%] mx-auto filter brightness-0 invert" />
                <span v-else class="text-white text-2xl font-bold tracking-widest uppercase">{{ card.sponsor.name }}</span>
              </div>
            </div>
          </template>
        </template>

        <!-- Fallback hardcodeado -->
        <template v-else>
          <div class="relative overflow-hidden min-h-[357px]">
            <img src="/images/patrocinador1.png" alt="Aspect Pro" class="w-full h-full object-cover absolute inset-0" />
          </div>
          <div class="bg-[#1a1a2e] p-8 flex items-center justify-center min-h-[357px]">
            <div class="text-center">
              <img src="/images/exposure.png" alt="ClimbWork" class="max-w-[70%] mx-auto filter brightness-0 invert" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SponsorPlacement, SettingsMap } from '~/types/api'

const api = useApi()

const [
  { data: settings },
  { data: prefooterPlacements },
] = await Promise.all([
  useAsyncData('settings-home', () => api.settings.getAll().catch(() => ({} as SettingsMap))),
  useAsyncData('prefooter-cards', () => api.sponsorPlacements.getAll({ placement: 'prefooter_card' }).catch(() => [] as SponsorPlacement[])),
])

const st = (key: string, fallback: string): string =>
  (settings.value as SettingsMap)?.[key] ?? fallback

const newsletterTitulo = computed(() => st('newsletter.titulo', ''))
const newsletterEtiqueta = computed(() => st('newsletter.etiqueta', ''))
const newsletterBoton = computed(() => st('newsletter.boton', ''))

const prefooterCards = computed(() => prefooterPlacements.value ?? [])
</script>
