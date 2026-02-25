<template>
  <div class="blog-page">

    <!-- Post destacado (Hero) -->
    <section class="bg-white pt-16 pb-12 lg:pt-20 lg:pb-16">
      <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          <!-- Izquierda: texto -->
          <div class="lg:w-[45%]">
            <!-- Tagline -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">MESA DE TRABAJO</span>
            </div>
            <h1 class="text-3xl lg:text-[42px] font-normal text-[#6A6867] leading-tight mb-6 max-w-[509px]">
              Nos reunimos con el gobierno de Nuevo León
            </h1>
            <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed max-w-[412px]">
              Con el fin de la gestión integral de la Huasteca zona natural protegida de Nuevo León
            </p>
          </div>

          <!-- Derecha: imagen -->
          <div class="lg:w-[55%] overflow-hidden" style="height: 504px;">
            <img
              src="/images/n-1.png"
              alt="Nos reunimos con el gobierno de Nuevo León"
              class="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- Primera serie de 4 posts -->
    <section class="bg-white pb-4">
      <div class="max-w-[1480px] mx-auto">
        <div
          v-for="(post, index) in postsSerieUno"
          :key="`s1-${post.id}`"
          class="flex flex-col border-t border-gray-200"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Imagen -->
          <div class="lg:w-[55%] overflow-hidden" style="height: 453px;">
            <img
              :src="post.imagen"
              :alt="post.titulo"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Texto -->
          <div
            class="lg:w-[45%] flex flex-col justify-center px-10 lg:px-16 py-12"
          >
            <!-- Tagline -->
            <div
              class="flex items-center gap-4 mb-5"
              :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse lg:flex-row'"
            >
              <div
                class="h-[2px] bg-[#F8C52D] flex-shrink-0"
                :class="index % 2 === 0 ? 'w-[72px]' : 'w-[72px]'"
              ></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ post.tagline }}</span>
            </div>
            <h2 class="text-2xl lg:text-[32px] font-normal text-[#6A6867] leading-tight mb-4 max-w-[422px]">
              {{ post.titulo }}
            </h2>
            <p class="text-base text-[#6A6867] leading-relaxed max-w-[412px]">
              {{ post.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner Exposure -->
    <section class="relative overflow-hidden" style="min-height: 1080px;">
      <img
        src="/images/potrero-1.png"
        alt="Escalada en montaña"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div
        class="relative z-10 flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24 py-24"
        style="min-height: 1080px;"
      >
        <!-- Izquierda: logo + texto + link -->
        <div class="lg:w-[45%] flex flex-col justify-center">
          <img
            src="/images/exposure.png"
            alt="Exposure"
            class="mb-10 filter brightness-0 invert"
            style="max-width: 467px; max-height: 127px; object-fit: contain;"
          />
          <p class="text-white/90 text-base lg:text-lg leading-relaxed mb-8 max-w-[427px]">
            Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-2 text-white text-base font-medium hover:text-[#F8C52D] transition-colors"
          >
            Equipment
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <!-- Derecha: MISSION LT 2.0 -->
        <div class="lg:w-[45%] flex flex-col items-center lg:items-end justify-center pt-16 lg:pt-0">
          <p class="text-white text-4xl lg:text-[56px] font-bold tracking-wider mb-6 text-center lg:text-right">
            MISSION LT 2.0
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-2 text-white text-base font-medium hover:text-[#F8C52D] transition-colors"
          >
            Equipment
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Otros patrocinadores -->
    <section class="bg-white py-16 lg:py-20">
      <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-[42px] font-normal text-[#6A6867] mb-10">
          Otros patrocinadores
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" style="min-height: 529px;">
          <!-- Tarjeta izquierda: dark con logo Exposure -->
          <div class="bg-[#1a1a2e] rounded-xl flex items-center justify-center p-10 min-h-[357px]">
            <img
              src="/images/exposure.png"
              alt="Exposure"
              class="max-w-[70%] mx-auto filter brightness-0 invert"
            />
          </div>
          <!-- Tarjeta derecha: MISSION LT 2.0 con imagen -->
          <div class="relative rounded-xl overflow-hidden min-h-[357px]">
            <img
              src="/images/patrocinador1.png"
              alt="Mission LT 2.0"
              class="w-full h-full object-cover absolute inset-0"
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="relative z-10 p-10 flex flex-col justify-end h-full">
              <p class="text-white font-bold text-3xl lg:text-[42px] tracking-wider">MISSION LT 2.0</p>
              <a
                href="#"
                class="inline-flex items-center gap-2 text-white text-sm font-medium mt-4 hover:text-[#F8C52D] transition-colors"
              >
                Equipment
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Segunda serie de 4 posts -->
    <section class="bg-white pb-4">
      <div class="max-w-[1480px] mx-auto">
        <div
          v-for="(post, index) in postsSerieUno"
          :key="`s2-${post.id}`"
          class="flex flex-col border-t border-gray-200"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Imagen -->
          <div class="lg:w-[55%] overflow-hidden" style="height: 453px;">
            <img
              :src="post.imagen"
              :alt="post.titulo"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Texto -->
          <div class="lg:w-[45%] flex flex-col justify-center px-10 lg:px-16 py-12">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-[72px] h-[2px] bg-[#F8C52D] flex-shrink-0"></div>
              <span class="uppercase tracking-[0.2em] text-sm text-[#6A6867] font-medium">{{ post.tagline }}</span>
            </div>
            <h2 class="text-2xl lg:text-[32px] font-normal text-[#6A6867] leading-tight mb-4 max-w-[422px]">
              {{ post.titulo }}
            </h2>
            <p class="text-base text-[#6A6867] leading-relaxed max-w-[412px]">
              {{ post.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Paginación -->
    <section class="bg-white py-16 flex justify-center">
      <button
        class="w-[380px] h-[50px] bg-[#F8C52D] text-gray-900 font-semibold text-sm tracking-widest hover:bg-[#e0b525] transition-colors"
      >
        VER MÁS ENTRADAS
      </button>
    </section>

    <!-- Newsletter + Product Cards -->
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
    <section class="mountain-prefooter" style="min-height: 675px;">
      <div class="flex flex-col items-center justify-center py-24 px-4 text-center" style="min-height: 675px;">
        <img src="/images/logoescalada.svg" alt="Escalada Libre" class="w-40 lg:w-52 mb-8" />
        <h2 class="text-4xl lg:text-6xl font-bold text-[#1a1a1a] mb-8 tracking-wider">¡GRACIAS POR TU APOYO!</h2>
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
  title: 'Blog - Escalada Libre',
  description: 'Noticias, eventos y artículos sobre escalada en México. Escalada Libre México A.C.',
})

const postsSerieUno = [
  {
    id: 1,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 2,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
  {
    id: 3,
    tagline: 'EVENTOS',
    titulo: 'Todo para escaladores',
    descripcion: 'El fin de semana se realiza el evento TensaFest dirigido a deportistas que practican la escalada...',
    imagen: '/images/img-20200308-wa-00051.png',
  },
  {
    id: 4,
    tagline: 'EVENTOS',
    titulo: 'Exposición fotográfica',
    descripcion: 'Con gran respuesta de la comunidad, hemos realizado una exposición fotográfica de las montañas...',
    imagen: '/images/huasteca-41.png',
  },
]
</script>
