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
              <a
                :href="producto.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block w-[262px] py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm text-center tracking-widest hover:bg-[#e0b525] transition-colors"
              >
                COMPRAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter + Tarjetas de producto -->
    <section class="prefooter-cards py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-[#f5f5f0] rounded-xl p-8 flex flex-col justify-between min-h-[357px]">
            <div>
              <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#6A6867] mb-4">NEWSLETTER</p>
              <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] leading-snug mb-6">
                Recibe noticias de Escalada Libre a tu correo
              </h3>
            </div>
            <div class="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Escribe tu correo"
                class="w-full px-4 py-3 border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D]"
              />
              <button class="self-end px-6 py-3 bg-[#F8C52D] text-gray-900 font-medium text-sm hover:bg-[#e0b525] transition-colors">
                Suscribir
              </button>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden min-h-[357px]">
            <img src="/images/patrocinador1.png" alt="Aspect Pro" class="w-full h-full object-cover absolute inset-0" />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="relative z-10 p-8">
              <p class="text-white font-bold text-xl lg:text-2xl tracking-wider">ASPECT PRO</p>
              <p class="text-white/80 text-sm mt-1">Built to go big</p>
            </div>
          </div>
          <div class="bg-[#1a1a2e] rounded-xl p-8 flex items-center justify-center min-h-[357px]">
            <img src="/images/exposure.png" alt="ClimbWork" class="max-w-[70%] mx-auto filter brightness-0 invert" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mountain Pre-Footer -->
    <section class="mountain-prefooter relative overflow-hidden" style="min-height: 675px;">
      <img src="/images/potrero-1.png" alt="Sierra Madre" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative z-10 flex flex-col items-center justify-center py-24 px-4 text-center" style="min-height: 675px;">
        <img src="/images/logoescalada.svg" alt="Escalada Libre" class="w-40 lg:w-52 mb-8 filter brightness-0 invert" />
        <h2 class="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-wider">¡GRACIAS POR TU APOYO!</h2>
        <NuxtLink
          to="/como-apoyar"
          class="px-10 py-4 bg-[#F8C52D] text-gray-900 font-semibold text-base lg:text-lg hover:bg-[#e0b525] transition-colors"
        >
          Apoyar
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Productos - Escalada Libre',
  description: 'Adquiere productos de Escalada Libre México A.C. y apoya la escalada responsable en México.',
})

const productos = [
  {
    id: 1,
    nombre: 'Sticker Escalada Libre',
    precio: '$35.00',
    imagen: '/images/pico-norte-1.png',
    url: '#',
  },
  {
    id: 2,
    nombre: 'Sticker Escalada Libre',
    precio: '$35.00',
    imagen: '/images/pico-norte-1.png',
    url: '#',
  },
  {
    id: 3,
    nombre: 'Sticker Escalada Libre',
    precio: '$35.00',
    imagen: '/images/pico-norte-1.png',
    url: '#',
  },
  {
    id: 4,
    nombre: 'Sticker Escalada Libre',
    precio: '$35.00',
    imagen: '/images/pico-norte-1.png',
    url: '#',
  },
  {
    id: 5,
    nombre: 'Sticker Escalada Libre',
    precio: '$35.00',
    imagen: '/images/pico-norte-1.png',
    url: '#',
  },
  {
    id: 6,
    nombre: 'Sticker Escalada Libre',
    precio: '$35.00',
    imagen: '/images/pico-norte-1.png',
    url: '#',
  },
]
</script>
