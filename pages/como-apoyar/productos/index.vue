<template>
  <div class="productos-page">

    <!-- Sección Intro -->
    <section class="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="mx-auto px-8 lg:px-20">
        <div class="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 max-w-[1250px] mx-auto">

          <!-- Izquierda: texto -->
          <div class="lg:w-[55%]">
            <h1
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;"
              class="leading-tight mb-8"
            >
              {{ productsMethod?.title ?? 'Tu aportación es de mucha ayuda' }}
            </h1>
            <p
              v-if="productsMethod?.body"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
              class="leading-relaxed max-w-[420px]"
            >
              {{ productsMethod.body }}
            </p>
          </div>

          <!-- Derecha: imagen decorativa -->
          <div class="lg:w-[40%] flex justify-center lg:justify-end">
            <img
              v-if="productsMethod?.image"
              :src="productsMethod.image"
              alt="Material de escalada"
              class="object-contain"
              style="max-width: 195px; max-height: 570px;"
            />
            <img
              v-else
              src="/images/hg.png"
              alt="Material de escalada"
              class="object-contain"
              style="max-width: 195px; max-height: 570px;"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- Grilla de Productos -->
    <section class="bg-white pb-20 lg:pb-28" style="padding-top: 10rem;">
      <div class="mx-auto px-8 lg:px-20" style="max-width: 1007.28px;">
        <div class="grid grid-cols-1 sm:grid-cols-2" style="gap: 93px;">
          <div
            v-for="producto in productos"
            :key="producto.id"
            class="product-card flex flex-col"
          >
            <!-- Imagen del producto -->
            <div class="overflow-hidden mb-4" style="max-width: 457px; max-height: 430px; height: 430px;">
              <img
                :src="producto.imagen"
                :alt="producto.nombre"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Nombre y precio -->
            <div class="flex items-start justify-between mb-4 px-1">
              <span
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
                class="leading-tight"
              >
                {{ producto.nombre }}
              </span>
              <span
                style="color: #6A6867; text-align: right; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;"
                class="flex-shrink-0 ml-4"
              >
                {{ producto.precio }}
              </span>
            </div>

            <!-- Botón COMPRAR -->
            <div class="px-1">
              <NuxtLink
                :to="`/como-apoyar/productos/${producto.slug}`"
                style="display: inline-block; width: 262px; padding-top: 12px; padding-bottom: 12px; background: #F8C52D; color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700; text-align: center; text-decoration: none; border-radius: 6.25rem;"
                class="hover:opacity-90 transition-opacity"
              >
                COMPRAR
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter + Tarjetas de producto -->
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '~/types/api'

useSeoMeta({
  title: 'Productos - Escalada Libre',
  description: 'Adquiere productos de Escalada Libre México A.C. y apoya la escalada responsable en México.',
})

const api = useApi()

const { data: campaign } = await useAsyncData(
  'support-campaign-como-apoyar-productos',
  () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null)
)

const { data: response } = await useAsyncData('productos', () =>
  api.products.getAll().catch(() => null)
)

const productsMethod = computed(() =>
  campaign.value?.methods?.find((m: any) => m.type === 'products')
)

const formatPrecio = (price: number | null, currency: string | null) => {
  if (!price) return ''
  const cur = currency?.trim() ?? 'MXN'
  try {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: cur, currencyDisplay: 'symbol' }).format(price)
  } catch {
    return `$${price.toFixed(2)}`
  }
}

const productos = computed(() => {
  const apiData = (response.value as any)?.data?.data ?? (response.value as any)?.data ?? []
  return apiData.map((p: Product) => ({
    id: p.id,
    slug: p.slug,
    nombre: p.name,
    precio: formatPrecio(p.price, p.currency),
    imagen: p.featured_media?.url ?? '/images/pico-norte-1.png',
  }))
})
</script>
