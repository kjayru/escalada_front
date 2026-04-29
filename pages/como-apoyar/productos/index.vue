<template>
  <div class="productos-page">

    <!-- Sección Intro -->
    <section class="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 max-w-[1400px] mx-auto">

          <!-- Izquierda: texto -->
          <div class="lg:w-[55%]">
            <h1 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] leading-tight mb-8">
              Tu aportación es de mucha ayuda
            </h1>
            <p class="text-base text-[#6A6867] leading-relaxed max-w-[420px]">
              Adquiere nuestros productos y apoya la escalada responsable en México. Tu compra se convierte en un donativo que impulsa nuestras acciones en la montaña.
            </p>
          </div>

          <!-- Derecha: imagen decorativa (bolt de escalada) -->
          <div class="lg:w-[40%] flex justify-center lg:justify-end">
            <img
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
    <section class="bg-white pb-20 lg:pb-28">
      <div class="max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
          <div
            v-for="producto in productos"
            :key="producto.id"
            class="product-card flex flex-col"
          >
            <!-- Imagen del producto -->
            <div class="overflow-hidden mb-4" style="height: 430px;">
              <img
                :src="producto.imagen"
                :alt="producto.nombre"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Nombre y precio -->
            <div class="flex items-start justify-between mb-4 px-1">
              <span class="text-base text-[#6A6867] font-normal leading-tight max-w-[240px]">
                {{ producto.nombre }}
              </span>
              <span class="text-base font-semibold text-[#6A6867] flex-shrink-0 ml-4">
                {{ producto.precio }}
              </span>
            </div>

            <!-- Botón COMPRAR -->
            <div class="px-1">
              <NuxtLink
                :to="`/como-apoyar/productos/${producto.slug}`"
                class="inline-block w-[262px] py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm text-center tracking-widest hover:bg-[#e0b525] transition-colors"
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
const { data: response } = await useAsyncData('productos', () =>
  api.products.getAll().catch(() => null)
)

const fallbackProductos = [
  { id: 1, slug: 'sticker-escalada-libre-1', nombre: 'Sticker Escalada Libre', precio: '$35.00', imagen: '/images/pico-norte-1.png' },
  { id: 2, slug: 'sticker-escalada-libre-2', nombre: 'Sticker Escalada Libre', precio: '$35.00', imagen: '/images/pico-norte-1.png' },
  { id: 3, slug: 'sticker-escalada-libre-3', nombre: 'Sticker Escalada Libre', precio: '$35.00', imagen: '/images/pico-norte-1.png' },
  { id: 4, slug: 'sticker-escalada-libre-4', nombre: 'Sticker Escalada Libre', precio: '$35.00', imagen: '/images/pico-norte-1.png' },
  { id: 5, slug: 'sticker-escalada-libre-5', nombre: 'Sticker Escalada Libre', precio: '$35.00', imagen: '/images/pico-norte-1.png' },
  { id: 6, slug: 'sticker-escalada-libre-6', nombre: 'Sticker Escalada Libre', precio: '$35.00', imagen: '/images/pico-norte-1.png' },
]

const formatPrecio = (price: number | null, currency: string | null) => {
  if (!price) return ''
  const cur = currency ?? 'MXN'
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: cur }).format(price)
}

const productos = computed(() => {
  const apiData = (response.value as any)?.data?.data ?? (response.value as any)?.data ?? []
  if (apiData.length) {
    return apiData.map((p: Product) => ({
      id: p.id,
      slug: p.slug,
      nombre: p.name,
      precio: formatPrecio(p.price, p.currency),
      imagen: p.featured_media?.url ?? '/images/pico-norte-1.png',
    }))
  }
  return fallbackProductos
})
</script>
