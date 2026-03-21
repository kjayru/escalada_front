<template>
  <div class="producto-detalle-page">

    <!-- Estado de carga -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <div class="w-10 h-10 border-4 border-[#F8C52D] border-t-transparent rounded-full animate-spin" />
    </div>

    <!-- Error / no encontrado -->
    <div v-else-if="error || !producto" class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <p class="text-[#6A6867] text-lg mb-4">No se encontró el producto.</p>
        <NuxtLink to="/como-apoyar/productos" class="text-[#F8C52D] font-medium hover:underline">← Volver a productos</NuxtLink>
      </div>
    </div>

    <template v-else>
    <section class="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div class="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">

          <!-- Galería izquierda -->
          <div class="lg:w-[52%]">
            <!-- Imagen principal con flechas y zoom -->
            <div class="relative overflow-hidden mb-3 bg-gray-50" style="aspect-ratio: 3/3.2;">
              <img
                :src="imagenActiva"
                :alt="producto?.name"
                class="w-full h-full object-cover"
              />
              <!-- Flecha izquierda -->
              <button
                v-if="galeria.length > 1"
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-shadow z-10"
                @click="anteriorImagen"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <!-- Flecha derecha -->
              <button
                v-if="galeria.length > 1"
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-shadow z-10"
                @click="siguienteImagen"
                aria-label="Imagen siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <!-- Icono zoom -->
              <button
                class="absolute bottom-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                aria-label="Ampliar imagen"
                @click="abrirModal(indiceActivo)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
            </div>

            <!-- Miniaturas -->
            <div class="flex gap-2">
              <button
                v-for="(img, i) in galeria.slice(0, 4)"
                :key="i"
                class="w-16 h-16 shrink-0 overflow-hidden border-2 transition-colors"
                :class="indiceActivo === i ? 'border-[#F8C52D]' : 'border-transparent hover:border-gray-200'"
                @click="indiceActivo = i"
              >
                <img :src="img" :alt="`${producto?.name} imagen ${i + 1}`" class="w-full h-full object-cover" />
              </button>
              <!-- Contador si hay más de 4 -->
              <button
                v-if="galeria.length > 4"
                class="w-16 h-16 shrink-0 bg-gray-900 flex items-center justify-center text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
                @click="indiceActivo = 4"
              >
                +{{ galeria.length - 4 }}
              </button>
            </div>
          </div>

          <!-- Info derecha -->
          <div class="lg:w-[48%] flex flex-col pt-1">

            <!-- Título -->
            <h1 class="text-[28px] lg:text-[32px] font-normal text-[#3a3a3a] leading-snug mb-4">
              {{ producto?.name }}
            </h1>

            <!-- Descripción corta -->
            <p v-if="producto?.summary" class="text-sm text-[#6A6867] leading-relaxed mb-6">
              {{ producto?.summary }}
            </p>

            <!-- Precio con subrayado amarillo -->
            <div class="mb-6">
              <span class="text-[28px] font-bold text-[#3a3a3a] inline-block border-b-4 border-[#F8C52D] pb-0.5 leading-tight">
                {{ precioFormateado }}
              </span>
            </div>

            <!-- Cantidad -->
            <div class="mb-4">
              <p class="text-xs text-[#6A6867] mb-2 tracking-wide uppercase">Cantidad</p>
              <div class="flex items-center gap-4">
                <button
                  class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors"
                  @click="cantidad = Math.max(1, cantidad - 1)"
                  aria-label="Reducir cantidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4" />
                  </svg>
                </button>
                <span class="text-base text-[#3a3a3a] min-w-[20px] text-center select-none">{{ cantidad }}</span>
                <button
                  class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors"
                  @click="cantidad++"
                  aria-label="Aumentar cantidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Nota compra en línea -->
            <p class="text-xs text-[#6A6867] mb-5 leading-relaxed">
              Estamos trabajando para que realices tu compra en línea
            </p>

            <!-- CTA contacto -->
            <NuxtLink
              to="/contacto"
              class="block w-full py-4 bg-[#F8C52D] text-gray-900 font-semibold text-sm text-center tracking-[0.15em] hover:bg-[#e0b525] transition-colors"
            >
              CONTÁCTANOS PARA ADQUIRIRLO
            </NuxtLink>
          </div>
        </div>

        <!-- Más sobre el producto -->
        <div class="mt-12 border-t border-gray-200 pt-10">
          <h2 class="text-sm font-semibold text-[#3a3a3a] mb-5 tracking-wide">Mas sobre el producto</h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            v-if="producto?.description"
            class="text-sm text-[#6A6867] leading-relaxed space-y-2 [&_ul]:list-none [&_ul]:pl-0 [&_li]:before:content-['–_'] [&_li]:before:mr-1"
            v-html="producto.description"
          />
          <p v-else class="text-sm text-[#6A6867] leading-relaxed">
            Información del producto próximamente disponible.
          </p>
          <!-- Línea divisoria inferior -->
          <div class="border-t border-gray-200 mt-10" />
        </div>

      </div>
    </section>

    <!-- Otros Productos -->
    <section v-if="otrosProductos.length" class="bg-white pb-20 lg:pb-28">
      <div class="max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-base font-semibold text-[#6A6867] uppercase tracking-[0.2em] text-center mb-10">
          OTROS PRODUCTOS
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div
            v-for="otro in otrosProductos"
            :key="otro.id"
            class="flex flex-col"
          >
            <div class="overflow-hidden mb-4 bg-gray-100" style="height: 240px;">
              <img
                :src="otro.featured_media?.url ?? '/images/pico-norte-1.png'"
                :alt="otro.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex items-start justify-between mb-4 px-1">
              <span class="text-sm text-[#6A6867] font-normal leading-tight">{{ otro.name }}</span>
              <span class="text-sm font-semibold text-[#6A6867] shrink-0 ml-4">
                {{ formatPrecio(otro.price, otro.currency) }}
              </span>
            </div>
            <div class="px-1">
              <NuxtLink
                :to="`/como-apoyar/productos/${otro.slug}`"
                class="inline-block w-full py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm text-center tracking-widest hover:bg-[#e0b525] transition-colors"
              >
                COMPRAR
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    </template>

    <!-- Modal lightbox: thumbnails izquierda + imagen grande derecha -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="modalAbierto"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          @click.self="modalAbierto = false"
        >
          <!-- Contenedor principal del modal -->
          <div class="relative flex w-full max-w-5xl max-h-[90vh] bg-white overflow-hidden rounded-sm shadow-2xl">

            <!-- Botón cerrar -->
            <button
              class="absolute top-3 right-3 z-20 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-gray-700 transition-colors"
              aria-label="Cerrar galería"
              @click="modalAbierto = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Columna izquierda: grid de thumbnails -->
            <div class="w-[260px] shrink-0 bg-gray-50 border-r border-gray-100 overflow-y-auto p-3">
              <div class="grid grid-cols-3 gap-1.5">
                <button
                  v-for="(img, i) in galeria"
                  :key="i"
                  class="aspect-square overflow-hidden border-2 transition-all duration-150"
                  :class="indiceModal === i
                    ? 'border-[#F8C52D] opacity-100'
                    : 'border-transparent opacity-70 hover:opacity-100 hover:border-gray-300'"
                  @click="indiceModal = i"
                >
                  <img
                    :src="img"
                    :alt="`${producto?.name} miniatura ${i + 1}`"
                    class="w-full h-full object-cover"
                    draggable="false"
                  />
                </button>
              </div>
            </div>

            <!-- Columna derecha: imagen grande con flechas -->
            <div class="flex-1 relative flex items-center justify-center bg-white min-h-[400px]">

              <!-- Flecha anterior -->
              <button
                v-if="galeria.length > 1"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white shadow-md hover:shadow-lg rounded-full flex items-center justify-center text-gray-600 transition-all z-10"
                aria-label="Imagen anterior"
                @click="indiceModal = (indiceModal - 1 + galeria.length) % galeria.length"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <!-- Imagen principal -->
              <img
                :src="galeria[indiceModal]"
                :alt="`${producto?.name} - imagen ${indiceModal + 1}`"
                class="max-w-full max-h-[88vh] object-contain select-none px-14"
                draggable="false"
              />

              <!-- Flecha siguiente + lupa decorativa -->
              <button
                v-if="galeria.length > 1"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#F8C52D] hover:bg-[#e0b525] rounded-full flex items-center justify-center text-gray-900 transition-all shadow-md z-10"
                aria-label="Imagen siguiente"
                @click="indiceModal = (indiceModal + 1) % galeria.length"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <!-- Lupa decorativa + contador -->
              <div class="absolute bottom-3 right-4 flex items-center gap-2">
                <span v-if="galeria.length > 1" class="text-xs text-gray-400">
                  {{ indiceModal + 1 }} / {{ galeria.length }}
                </span>
                <div class="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Product } from '~/types/api'

const route = useRoute()
const api = useApi()

const slug = computed(() => route.params.slug as string)

// Fetch producto principal
const { data: producto, pending, error } = await useAsyncData<Product>(
  `producto-${slug.value}`,
  () => api.products.getBySlug(slug.value).catch(() => null) as Promise<Product>,
  { watch: [slug] }
)

// Fetch todos los productos para "otros productos"
const { data: todosResponse } = await useAsyncData(
  'productos-todos',
  () => api.products.getAll({ per_page: 50 }).catch(() => null)
)

// SEO dinámico
watchEffect(() => {
  if (!producto.value) return
  useSeoMeta({
    title: `${producto.value.name} - Escalada Libre`,
    description: producto.value.summary ?? 'Adquiere productos de Escalada Libre México y apoya la escalada responsable.',
    ogImage: producto.value.featured_media?.url,
  })
})

// Galería: imagen destacada + galería adicional
const galeria = computed(() => {
  const imgs: string[] = []
  if (producto.value?.featured_media?.url) {
    imgs.push(producto.value.featured_media.url)
  }
  const gallery = producto.value?.gallery ?? []
  for (const m of gallery) {
    if (m.url && !imgs.includes(m.url)) imgs.push(m.url)
  }
  if (!imgs.length) imgs.push('/images/pico-norte-1.png')
  return imgs
})

const indiceActivo = ref(0)
const imagenActiva = computed(() => galeria.value[indiceActivo.value] ?? '/images/pico-norte-1.png')

const anteriorImagen = () => {
  indiceActivo.value = (indiceActivo.value - 1 + galeria.value.length) % galeria.value.length
}
const siguienteImagen = () => {
  indiceActivo.value = (indiceActivo.value + 1) % galeria.value.length
}

// Modal lightbox
const modalAbierto = ref(false)
const indiceModal = ref(0)

const abrirModal = (indice: number) => {
  indiceModal.value = indice
  modalAbierto.value = true
}

const manejarTeclado = (e: KeyboardEvent) => {
  if (!modalAbierto.value) return
  if (e.key === 'Escape') {
    modalAbierto.value = false
  } else if (e.key === 'ArrowRight') {
    indiceModal.value = (indiceModal.value + 1) % galeria.value.length
  } else if (e.key === 'ArrowLeft') {
    indiceModal.value = (indiceModal.value - 1 + galeria.value.length) % galeria.value.length
  }
}

onMounted(() => window.addEventListener('keydown', manejarTeclado))
onUnmounted(() => window.removeEventListener('keydown', manejarTeclado))

// Cantidad
const cantidad = ref(1)

// Precio formateado
const formatPrecio = (price: number | null | undefined, currency: string | null | undefined) => {
  if (!price) return ''
  const cur = currency ?? 'MXN'
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: cur }).format(price)
}

const precioFormateado = computed(() =>
  formatPrecio(producto.value?.price, producto.value?.currency)
)

// Otros productos: 3 random distintos al actual
const otrosProductos = computed<Product[]>(() => {
  const todos: Product[] = (todosResponse.value as any)?.data?.data ?? (todosResponse.value as any)?.data ?? []
  const otros = todos.filter(p => p.slug !== slug.value)
  const arr = [...otros]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]!
    arr[i] = arr[j]!
    arr[j] = temp
  }
  return arr.slice(0, 3)
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
