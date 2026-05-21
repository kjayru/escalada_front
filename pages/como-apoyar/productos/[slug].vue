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
      <div class="mx-auto px-4 sm:px-6 lg:px-8" style="max-width: 1150px;">

        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">

          <!-- Galería izquierda -->
          <div style="width: 680px; max-width: 100%; flex-shrink: 0;">
            <!-- Imagen principal con flechas y zoom -->
            <div 
              class="relative bg-gray-100" 
              style="aspect-ratio: 3/3.2; overflow: hidden;"
              @touchstart="handleTouchStart"
              @touchend="handleTouchEnd"
            >
              <img
                v-if="imagenActiva"
                :src="imagenActiva"
                :alt="producto?.name"
                class="w-full h-full object-cover"
              />
              <!-- Flecha izquierda (oculta en móvil) -->
              <button
                class="hidden lg:absolute top-1/2 -translate-y-1/2 lg:flex items-center justify-center z-10 transition-colors"
                style="left: 0.75rem; width:2.5rem; height:2.5rem; flex-shrink:0; border-radius:0.75rem; background:#D9D9D9;"
                onmouseover="this.style.background='#F8C52D'"
                onmouseout="this.style.background='#D9D9D9'"
                @click="anteriorImagen"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <!-- Flecha derecha (oculta en móvil) -->
              <button
                class="hidden lg:absolute top-1/2 -translate-y-1/2 lg:flex items-center justify-center z-10 transition-colors"
                style="right: 0.75rem; width:2.5rem; height:2.5rem; flex-shrink:0; border-radius:0.75rem; background:#D9D9D9;"
                onmouseover="this.style.background='#F8C52D'"
                onmouseout="this.style.background='#D9D9D9'"
                @click="siguienteImagen"
                aria-label="Imagen siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <!-- Dots (solo en móvil) -->
              <div class="flex lg:hidden items-center justify-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
                <button
                  v-for="(img, i) in galeria"
                  :key="i"
                  class="w-2 h-2 rounded-full transition-colors"
                  :class="indiceActivo === i ? 'bg-[#F8C52D]' : 'bg-white/60'"
                  @click="indiceActivo = i"
                  :aria-label="`Ir a imagen ${i + 1}`"
                />
              </div>
            </div>

            <!-- Thumbnails (ocultos en móvil) -->
            <div class="hidden lg:flex gap-2 mt-2">
              <button
                v-for="(img, i) in galeria.slice(0, 4)"
                :key="i"
                class="w-[6.25rem] h-[6.25rem] shrink-0 overflow-hidden border-2 transition-colors"
                :class="indiceActivo === i ? 'border-[#F8C52D]' : 'border-transparent hover:border-gray-200'"
                @click="indiceActivo = i"
              >
                <img :src="img" :alt="`${producto?.name} imagen ${i + 1}`" class="w-full h-full object-cover" />
              </button>
              <!-- Contador si hay más de 4 -->
              <button
                v-if="galeria.length > 4"
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-gray-900 flex items-center justify-center text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
                @click="indiceActivo = 4"
              >
                +{{ galeria.length - 4 }}
              </button>
            </div>
          </div>

          <!-- Info derecha -->
          <div class="flex-1 flex flex-col pt-1">

            <!-- Título -->
            <h1
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;"
              class="leading-snug mb-4"
            >
              {{ producto?.name }}
            </h1>

            <!-- Descripción corta -->
            <p
              v-if="producto?.summary"
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
              class="leading-relaxed mb-6"
            >
              {{ producto?.summary }}
            </p>

            <!-- Precio con subrayado amarillo -->
            <div class="mb-6">
              <span
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.5rem; font-style: normal; font-weight: 600;"
                class="inline-block border-b-4 border-[#F8C52D] pb-0.5 leading-tight"
              >
                {{ precioFormateado }}
              </span>
            </div>

            <!-- Cantidad -->
            <div class="mb-4">
              <p
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 300; text-transform: uppercase;"
                class="mb-2"
              >Cantidad</p>
              <!-- Pill container: todo dentro del fondo #FFF2CC -->
              <div
                class="inline-flex items-center"
                style="background: #FFF2CC; border-radius: 9999px; padding: 0;"
              >
                <!-- Botón menos -->
                <button
                  class="flex items-center justify-center rounded-full flex-shrink-0 transition-opacity hover:opacity-80"
                  style="width: 3rem; height: 3rem; background: #F8D96B; color: #6A6867;"
                  @click="cantidad = Math.max(1, cantidad - 1)"
                  aria-label="Reducir cantidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4" />
                  </svg>
                </button>
                <!-- Número -->
                <span
                  class="select-none text-center"
                  style="color: #6A6867; font-family: 'Overpass', sans-serif; font-size: 1.25rem; font-weight: 700; min-width: 3.5rem;"
                >{{ cantidad }}</span>
                <!-- Botón más -->
                <button
                  class="flex items-center justify-center rounded-full flex-shrink-0 transition-opacity hover:opacity-80"
                  style="width: 3rem; height: 3rem; background: #D4A829; color: #fff;"
                  @click="cantidad++"
                  aria-label="Aumentar cantidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Nota compra en línea -->
            <p
              style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 300;"
              class="mb-5 leading-relaxed"
            >
              Estamos trabajando para que realices tu compra en línea
            </p>

            <!-- CTA contacto -->
            <NuxtLink
              to="/contacto"
              style="display: flex; align-items: center; justify-content: center; border-radius: 6.25rem; height: 2.8125rem; text-align: center; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700; text-decoration: none;"
              class="btn-contacto-hover w-full"
            >
              CONTÁCTANOS PARA ADQUIRIRLO
            </NuxtLink>
          </div>
        </div>

        <!-- Más sobre el producto -->
        <div class="mt-12 border-t border-gray-200 pt-10">
          <h2
            style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
            class="mb-5"
          >Mas sobre el producto</h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            v-if="producto?.description"
            style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
            class="leading-relaxed space-y-2 [&_ul]:list-none [&_ul]:pl-0 [&_li]:before:content-['–_'] [&_li]:before:mr-1"
            v-html="producto.description"
          />
          <p
            v-else
            style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
            class="leading-relaxed"
          >
            Información del producto próximamente disponible.
          </p>
          <!-- Línea divisoria inferior -->
          <div class="border-t border-gray-200 mt-10" />
        </div>

      </div>
    </section>

    <!-- Otros Productos -->
    <section v-if="otrosProductos.length" class="bg-white pb-20 lg:pb-28">
      <div class="max-w-[1060px] mx-auto">
        <h2
          style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;"
          class="text-center mb-10 px-4 sm:px-6 lg:px-8"
        >
          OTROS PRODUCTOS
        </h2>

        <!-- Slider móvil -->
        <div class="sm:hidden overflow-hidden">
        <Swiper
          class="w-full"
          :slides-per-view="1.3"
          :space-between="16"
          :slides-offset-before="16"
          :slides-offset-after="16"
        >
          <SwiperSlide v-for="otro in otrosProductos" :key="otro.id" style="height: auto;">
            <div class="flex flex-col pb-2">
              <NuxtLink :to="`/como-apoyar/productos/${otro.slug}`" class="block overflow-hidden mb-4 bg-gray-100" style="height: 240px;">
                <img
                  v-if="otro.featured_media?.url"
                  :src="otro.featured_media.url"
                  :alt="otro.name"
                  class="w-full h-full object-cover"
                />
              </NuxtLink>
              <div class="flex flex-col px-1">
                <span
                  style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
                  class="leading-tight mb-2"
                >{{ otro.name }}</span>
                <span
                  style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.875rem; font-style: normal; font-weight: 600;"
                  class="text-left"
                >
                  {{ formatPrecio(otro.price, otro.currency) }}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>

        <!-- Grid desktop -->
        <div class="hidden sm:grid grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          <div
            v-for="otro in otrosProductos"
            :key="otro.id"
            class="flex flex-col"
          >
            <NuxtLink :to="`/como-apoyar/productos/${otro.slug}`" class="block overflow-hidden mb-4 bg-gray-100" style="height: 240px;">
              <img
                v-if="otro.featured_media?.url"
                :src="otro.featured_media.url"
                :alt="otro.name"
                class="w-full h-full object-cover"
              />
            </NuxtLink>
            <div class="flex flex-col mb-4 px-1">
              <span
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
                class="leading-tight mb-2"
              >{{ otro.name }}</span>
              <span
                style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.875rem; font-style: normal; font-weight: 600;"
                class="text-left"
              >
                {{ formatPrecio(otro.price, otro.currency) }}
              </span>
            </div>
            <div class="px-1">
              <NuxtLink
                :to="`/como-apoyar/productos/${otro.slug}`"
                style="text-align: center; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700; border-radius: 6.25rem; text-decoration: none;"
                class="btn-otro-producto-hover inline-block w-full py-3"
              >
                COMPRAR
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prefooter -->
    <SectionsPrefooterNewsletterSection />
    <SectionsMountainPrefooter />

    </template>

    <!-- Modal lightbox: imagen grande + thumbnails abajo -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="modalAbierto"
          class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-4 py-16"
          role="dialog"
          aria-modal="true"
        >
          <!-- Botón cerrar -->
          <button
            class="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-black transition-colors"
            aria-label="Cerrar galería"
            @click="modalAbierto = false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Imagen principal con flechas -->
          <div class="relative w-full flex items-center justify-center px-10" style="max-height: calc(100vh - 200px);">
            <!-- Flecha anterior -->
            <button
              v-if="galeria.length > 1"
              class="absolute left-0 w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all z-10"
              aria-label="Imagen anterior"
              @click="indiceModal = (indiceModal - 1 + galeria.length) % galeria.length"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <img
              :src="galeria[indiceModal]"
              :alt="`${producto?.name} - imagen ${indiceModal + 1}`"
              class="max-w-full object-contain select-none"
              style="max-height: calc(100vh - 200px);"
              draggable="false"
            />

            <!-- Flecha siguiente -->
            <button
              v-if="galeria.length > 1"
              class="absolute right-0 w-9 h-9 bg-[#F8C52D] hover:bg-[#e0b525] rounded-full flex items-center justify-center text-gray-900 transition-all z-10"
              aria-label="Imagen siguiente"
              @click="indiceModal = (indiceModal + 1) % galeria.length"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Contador + lupa -->
            <div class="absolute bottom-2 right-10 flex items-center gap-2">
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

          <!-- Thumbnails directamente debajo de la imagen -->
          <div v-if="galeria.length > 1" class="mt-4 flex gap-2 justify-center overflow-x-auto max-w-full px-2">
            <button
              v-for="(img, i) in galeria"
              :key="i"
              class="flex-shrink-0 w-[80px] h-[80px] overflow-hidden border-2 transition-all duration-150"
              :class="indiceModal === i
                ? 'border-[#F8C52D] opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'"
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
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
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
  return imgs
})

const indiceActivo = ref(0)
const imagenActiva = computed(() => galeria.value[indiceActivo.value] ?? null)

const anteriorImagen = () => {
  indiceActivo.value = (indiceActivo.value - 1 + galeria.value.length) % galeria.value.length
}
const siguienteImagen = () => {
  indiceActivo.value = (indiceActivo.value + 1) % galeria.value.length
}

// Touch events para swipe en móvil
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  if (touchStartX - touchEndX > swipeThreshold) {
    // Swipe izquierda -> siguiente
    siguienteImagen()
  } else if (touchEndX - touchStartX > swipeThreshold) {
    // Swipe derecha -> anterior
    anteriorImagen()
  }
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
const formatPrecio = (price: number | string | null | undefined, currency: string | null | undefined) => {
  if (!price) return ''
  const num = typeof price === 'string' ? parseFloat(price) : price
  if (isNaN(num)) return ''
  const currencyMap: Record<string, string> = { MX: 'MXN', US: 'USD', EU: 'EUR' }
  const raw = currency ?? 'MXN'
  const cur = currencyMap[raw.toUpperCase()] ?? raw
  try {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: cur }).format(num)
  } catch {
    return `${num.toFixed(2)} ${cur}`
  }
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
.btn-contacto-hover {
  background: #F8C52D;
  color: #6A6867;
  transition: all 0.2s ease;
}

.btn-contacto-hover:hover {
  background: #6A6867;
  color: #F8C52D;
}

.btn-otro-producto-hover {
  background: #F8C52D;
  color: #6A6867;
  transition: all 0.2s ease;
}

.btn-otro-producto-hover:hover {
  background: #6A6867;
  color: #F8C52D;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
