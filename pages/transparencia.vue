<template>
  <div class="transparencia-page">

    <!-- Hero Banner -->
    <section v-if="heroBannerUrl" class="relative overflow-hidden min-h-[360px] lg:min-h-[1080px]">
      <img
        :src="heroBannerUrl"
        :alt="heroBannerAlt"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10 min-h-[360px] lg:min-h-[1080px]"></div>
    </section>

    <!-- Intro: mobile = texto arriba + foto abajo | desktop = tarjeta sobrelapada -->
    <section v-if="textSection" class="bg-white pt-8 lg:pt-28 pb-8 lg:pb-24">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Mobile: apilado vertical -->
        <div v-if="textSection.featured_media?.url" class="flex flex-col lg:hidden">
          <div class="bg-[#ffe7a0] p-8 flex flex-col justify-start">
            <h2
              class="mb-6 leading-tight"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.75rem; font-weight: 500;"
            >
              {{ textSection.heading }}
            </h2>
            <div
              class="leading-relaxed prose max-w-none"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1rem; font-weight: 300;"
              v-html="textSection.body"
            />
          </div>
          <div class="w-full overflow-hidden" style="height: 300px;">
            <img
              :src="textSection.featured_media.url"
              :alt="textSection.featured_media?.alt ?? textSection.heading ?? 'Transparencia'"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Desktop: tarjeta sobrelapada -->
        <div v-if="textSection.featured_media?.url" class="hidden lg:block relative flex justify-end">
          <div class="w-full lg:w-[65%] overflow-hidden ml-auto" style="height: 700px;">
            <img
              :src="textSection.featured_media.url"
              :alt="textSection.featured_media?.alt ?? textSection.heading ?? 'Transparencia'"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="absolute left-0 top-16 z-10 bg-[#ffe7a0] p-12 flex flex-col justify-start"
            style="width: 42%; max-width: 500px; min-height: 580px;"
          >
            <h2
              class="mb-8 leading-tight"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500;"
            >
              {{ textSection.heading }}
            </h2>
            <div
              class="leading-relaxed prose max-w-none"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-weight: 300;"
              v-html="textSection.body"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- Tabs -->
    <section v-if="hasAnyDocuments" class="bg-white pb-8">
      <div class="max-w-[830px] mx-auto px-4">
        <div class="bg-[#f8c52d] rounded-full h-[53px] flex items-center">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="tabActiva = tab.id"
            class="flex-1 h-[53px] rounded-full transition-all text-center"
            :class="tabActiva === tab.id ? 'bg-white border-2 border-[#6a6867]' : ''"
            style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-weight: 400;"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Acordeón de documentos -->
    <section v-if="itemsAcordeon.length > 0" class="bg-white pb-16 lg:pb-20">
      <div class="max-w-[1113px] mx-auto px-4 flex flex-col gap-3">
        <div
          v-for="item in itemsAcordeon"
          :key="item.id"
          class="rounded-[30px] overflow-hidden cursor-pointer transition-colors"
          :class="itemExpandido === item.id ? 'bg-[#ffe7a0]' : 'bg-[#d9d9d9]'"
          @click="toggleItem(item.id)"
        >
          <!-- Header del item -->
          <div class="flex items-center justify-between px-5 md:px-14 min-h-[72px] md:min-h-[119px]">
            <span
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-weight: 700;"
            >{{ item.label }}</span>
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
          <div v-if="itemExpandido === item.id" class="px-5 md:px-20 pb-8 md:pb-14">
            <a
              v-for="doc in item.docs"
              :key="doc.name"
              :href="doc.url ?? '#'"
              :download="doc.url && doc.fileName ? doc.fileName : undefined"
              :target="doc.url ? '_blank' : undefined"
              :rel="doc.url ? 'noopener noreferrer' : undefined"
              class="group flex items-center justify-between py-6 border-t border-[#6A6867]/20 transition-opacity"
              @click.stop
            >
              <span style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-weight: 400;">{{ doc.name }}</span>
              <div class="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <img src="/images/Download.svg" alt="descargar" class="w-6 h-6 block group-hover:hidden" />
                <img src="/images/Download-open.svg" alt="descargar" class="w-6 h-6 hidden group-hover:block" />
              </div>
            </a>
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
import { ref, computed, watch } from 'vue'
import type { Page, TransparencyDocument } from '~/types/api'

useSeoMeta({
  title: 'Transparencia - Escalada Libre',
  description: 'En Escalada Libre México A.C. operamos con transparencia y rendición de cuentas. Conoce nuestros documentos, actas de asamblea y reportes.',
})

const api = useApi()

const [{ data: pageData }, { data: docs }] = await Promise.all([
  useAsyncData('transparencia-page', () =>
    api.pages.getBySlug('transparencia').catch(() => null as Page | null)
  ),
  useAsyncData('transparency-docs', () =>
    api.transparencyDocuments.getAll().catch(() => [] as TransparencyDocument[])
  ),
])

const heroSection = computed(() => pageData.value?.sections?.find(s => s.type === 'hero') ?? null)
const heroBannerUrl = computed(() => heroSection.value?.featured_media?.url ?? null)
const heroBannerAlt = computed(() => heroSection.value?.featured_media?.alt ?? 'Transparencia - Escalada Libre')
const textSection = computed(() => pageData.value?.sections?.find(s => s.type === 'text') ?? null)

const tabs = [
  { id: 'asambleas', label: 'Asambleas' },
  { id: 'reportes', label: 'Reportes' },
  { id: 'estados', label: 'Estados de cuenta' },
]
const tabActiva = ref('asambleas')

const itemExpandido = ref<string | null>('2020')
const toggleItem = (id: string) => {
  itemExpandido.value = itemExpandido.value === id ? null : id
}
watch(tabActiva, () => { itemExpandido.value = null })

type AcordeonItem = { id: string; label: string; docs: { name: string; url: string | null; fileName: string | null }[] }

const tabYearLabel: Record<string, string> = {
  asambleas: 'Asamblea',
  reportes: 'Reporte',
  estados: 'Estado de cuenta',
}

const hasAnyDocuments = computed(() => (docs.value ?? []).length > 0)

const itemsAcordeon = computed<AcordeonItem[]>(() => {
  const filtrados = (docs.value ?? []).filter((d: TransparencyDocument) => d.type === tabActiva.value)
  if (filtrados.length === 0) return []

  const prefix = tabYearLabel[tabActiva.value] ?? ''
  const grupos = new Map<string, AcordeonItem>()
  for (const doc of filtrados) {
    const key = doc.year ? String(doc.year) : `solo-${doc.id}`
    const label = doc.year ? `${prefix} ${doc.year}` : doc.title
    if (!grupos.has(key)) grupos.set(key, { id: key, label, docs: [] })
    grupos.get(key)!.docs.push({
      name: doc.title,
      url: doc.file?.url ?? doc.image?.url ?? null,
      fileName: doc.file?.file_name ?? doc.image?.file_name ?? null,
    })
  }

  return [...grupos.values()].sort((a, b) => b.id.localeCompare(a.id))
})
</script>
