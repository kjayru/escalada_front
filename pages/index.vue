<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section id="hero" class="hero relative">
      <!-- Background Image -->
      <div class="hero-image absolute inset-0 z-0">
        <img 
          :src="heroImage"
          :alt="heroLocation"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Follow Us Button - Fixed Left -->
      <div class="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div class="flex flex-col items-center gap-4">
          <span class="text-white text-sm font-medium tracking-widest" style="writing-mode: vertical-rl; transform: rotate(180deg);">
            Follow Us
          </span>
          <a 
            href="https://instagram.com" 
            target="_blank"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Hero Content -->
      <div class="hero-content relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <!-- Small Title -->
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-px bg-white"></div>
            <span class="text-white text-sm font-medium tracking-[0.3em] uppercase">{{ heroLabel }}</span>
          </div>
          
          <!-- Main Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-8 leading-tight">
            {{ heroTitle }}
          </h1>
        </div>
      </div>
      
      <!-- Scroll Down Button - Centered Bottom -->
      <button 
        @click="scrollToNextSection"
        class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white hover:text-[#F5C400] transition-colors group"
      >
        <span class="text-sm font-medium tracking-wider">scroll down</span>
        <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
      
      <!-- Location Tag - Fixed Bottom Right -->
      <div class="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div class="text-white text-sm font-medium tracking-wider px-4 py-2 border border-white/30 backdrop-blur-sm rounded">
          {{ heroLocation }}
        </div>
      </div>
    </section>

    <!-- Parallax Section -->
    <section class="parallax-section relative overflow-hidden">
      <!-- Parallax Images -->
      <div class="parallax-container relative h-[900px] lg:h-[1500px] overflow-hidden">
        <!-- Text Content -->
        <div class="absolute top-0 left-0 right-0 z-30 bg-gray-50 pt-16 lg:pt-20 pb-16 lg:pb-20">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
              <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed" v-html="introText"></p>
            </div>
          </div>
        </div>

        <!-- Sky Layer -->
        <div class="parallax-sky absolute inset-0 z-0">
          <img 
            :src="parallaxSkyImage"
            alt="Cielo"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Mountain Layer -->
        <div class="parallax-mountain absolute bottom-0 left-0 right-0 z-10 h-[70%]">
          <img 
            :src="parallaxMountainImage"
            :alt="parallaxLocation"
            class="w-full h-full object-cover object-bottom"
          />
        </div>

        <!-- Location Tag -->
        <div class="absolute bottom-8 right-8 z-20">
          <div class="text-white text-sm font-medium tracking-wider px-4 py-2 bg-black/30 backdrop-blur-sm rounded">
            {{ parallaxLocation }}
          </div>
        </div>
      </div>
    </section>

    <!-- Conservation Section -->
    <section class="conservation-section relative">
      <!-- Text Content -->
      <div class="bg-gray-50 py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl lg:text-4xl font-normal text-gray-800 mb-6 leading-snug">
              {{ conservacionTitle }}
            </h2>
            <p class="text-base lg:text-lg text-gray-600 leading-relaxed" v-html="conservacionBody"></p>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div class="relative h-[500px] lg:h-[700px] overflow-hidden">
        <img 
          :src="conservacionImage"
          :alt="conservacionLocation"
          class="w-full h-full object-cover"
        />
        
        <!-- Location Tag -->
        <div class="absolute bottom-8 left-8 z-20">
          <div class="text-white text-sm font-medium tracking-wider px-4 py-2 bg-black/30 backdrop-blur-sm rounded">
            {{ conservacionLocation }}
          </div>
        </div>
      </div>
    </section>

    <!-- Secciones destacadas 01/02/03 -->
    <section
      v-for="(item, idx) in featuredSections"
      :key="item.num"
      :class="['py-16 lg:py-24', idx % 2 === 0 ? 'bg-white' : 'bg-gray-50']"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Contenido de texto -->
          <div :class="['relative h-[500px] lg:h-[600px]', idx % 2 !== 0 ? 'order-last' : '']">            <!-- Número de fondo -->
            <div class="absolute top-0 left-0 text-[240px] font-bold text-gray-200 leading-none select-none">
              {{ item.num }}
            </div>
            <!-- Etiqueta -->
            <div class="absolute top-[120px] left-[60px] flex items-center gap-4">
              <div class="w-[80px] h-[3px] bg-[#F8C52D]"></div>
              <span class="text-[#F8C52D] text-[18px] font-medium tracking-[6px] uppercase">{{ item.tag }}</span>
            </div>
            <!-- Título -->
            <NuxtLink
              :to="item.link"
              class="absolute top-[160px] left-[60px] right-0 text-[40px] font-normal text-[#6A6867] leading-tight max-w-[500px] block hover:text-gray-900 transition-colors cursor-pointer"
            >
              <h2>{{ item.title }}</h2>
            </NuxtLink>
            <!-- Descripción -->
            <p class="absolute top-[320px] left-[60px] right-0 text-[20px] font-normal text-[#6A6867] leading-[35px] max-w-[500px]">
              {{ item.body }}
            </p>
            <!-- Enlace -->
            <NuxtLink
              :to="item.link"
              class="absolute top-[470px] left-[60px] inline-flex items-center text-[#F8C52D] font-medium hover:text-[#e0b525] transition-colors"
            >
              Ver más
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
          <!-- Imagen -->
          <div :class="idx % 2 === 0 ? 'order-first lg:order-last' : ''">
            <img :src="item.image" :alt="item.title" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Slider -->
    <section class="partners-slider relative" style="height: calc(100vh - 90px);">
      <Swiper
        :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="0"
        :navigation="{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }"
        :pagination="{
          el: '.swiper-pagination-custom',
          clickable: true,
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :loop="true"
        class="h-full w-full"
      >
        <!-- Slides dinámicos de patrocinadores -->
        <SwiperSlide v-for="sponsor in sponsorsSliderData" :key="sponsor.id">
          <div class="relative h-full w-full bg-cover bg-center" :style="`background-image: url('${sponsor.slideImage}')`">
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div class="max-w-xl">
                <img :src="sponsor.logo" :alt="sponsor.name" class="w-64 mb-8" />
                <p class="text-white text-lg mb-8 leading-relaxed">{{ sponsor.description }}</p>
                <a
                  :href="sponsor.url"
                  :target="sponsor.url !== '#' ? '_blank' : undefined"
                  :rel="sponsor.url !== '#' ? 'noopener noreferrer' : undefined"
                  class="inline-flex items-center text-[#F8C52D] font-medium hover:text-[#e0b525] transition-colors"
                >
                  Ver más
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- Navigation Arrows -->
        <div class="swiper-button-prev-custom absolute top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div class="swiper-button-next-custom absolute top-1/2 right-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>

        <!-- Pagination Dots -->
        <div class="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>
      </Swiper>
    </section>

    <!-- Otros Patrocinadores Section -->
    <section class="otros-patrocinadores py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-normal text-[#6A6867] mb-12">
          Otros patrocinadores
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <template v-if="otrosPlacements?.length">
            <template v-for="(item, idx) in otrosPlacements" :key="item.id">
              <!-- Primeras 2 cards: ícono + texto centrado sobre imagen de fondo -->
              <div
                v-if="idx < 2"
                class="relative overflow-hidden group cursor-pointer bg-cover bg-center min-h-[500px] flex items-center justify-center"
                :class="!item.banner?.url ? 'bg-gray-100' : ''"
                :style="item.banner?.url ? `background-image: url('${item.banner.url}')` : ''"
              >
                <div class="relative z-10 p-12 flex flex-col items-center justify-center text-center">
                  <div class="mb-8">
                    <div :class="['w-24 h-24 rounded-full border-2 flex items-center justify-center mx-auto mb-6', item.banner?.url ? 'border-white' : 'border-gray-400']">
                      <img v-if="item.sponsor.logo?.url" :src="item.sponsor.logo.url" :alt="item.sponsor.name" class="w-14 h-14 object-contain" :class="item.banner?.url ? 'filter brightness-0 invert' : ''" />
                      <svg v-else :class="['w-12 h-12', item.banner?.url ? 'text-white' : 'text-gray-400']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div :class="['w-px h-16 mx-auto mb-6', item.banner?.url ? 'bg-white' : 'bg-gray-400']"></div>
                  </div>
                  <p :class="['text-lg mb-8 max-w-xs leading-relaxed font-medium', item.banner?.url ? 'text-white' : 'text-[#6A6867]']">
                    {{ item.body ?? item.title ?? item.sponsor.name }}
                  </p>
                  <a
                    v-if="item.link_url"
                    :href="item.link_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-white font-medium hover:text-[#F8C52D] transition-colors"
                  >
                    Ver más
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
                <div v-if="item.banner?.url" class="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>

              <!-- Tercera card en adelante: imagen de producto a pantalla completa -->
              <div v-else class="relative bg-[#1e3a3a] overflow-hidden group cursor-pointer">
                <img
                  v-if="item.banner?.url"
                  :src="item.banner.url"
                  :alt="item.title ?? item.sponsor.name"
                  class="w-full h-full object-cover min-h-[500px]"
                />
                <div v-else class="min-h-[500px] flex items-center justify-center p-12">
                  <div class="text-center">
                    <img v-if="item.sponsor.logo?.url" :src="item.sponsor.logo.url" :alt="item.sponsor.name" class="max-w-[55%] max-h-24 object-contain filter brightness-0 invert mx-auto mb-6" />
                    <span v-else class="text-white text-2xl font-bold">{{ item.sponsor.name }}</span>
                  </div>
                </div>
                <div v-if="item.link_url" class="absolute bottom-8 right-8">
                  <a
                    :href="item.link_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-white font-medium hover:text-[#F8C52D] transition-colors"
                  >
                    Ver más
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </template>
          </template>

          <!-- Fallback hardcodeado -->
          <template v-else>
            <!-- Card 1 - Con fondo patrocinador1.png -->
            <div class="relative overflow-hidden group cursor-pointer bg-cover bg-center min-h-[500px] flex items-center justify-center" style="background-image: url('/images/patrocinador1.png');">
              <div class="relative z-10 p-12 flex flex-col items-center justify-center text-center">
                <div class="mb-8">
                  <div class="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-6">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="w-px h-16 bg-white mx-auto mb-6"></div>
                </div>
                <p class="text-white text-lg mb-8 max-w-xs leading-relaxed font-medium">
                  VINCULAMOS EL MUNDO DE LA JOYERÍA CON LAS MONTAÑAS.
                </p>
                <a href="#" class="inline-flex items-center text-white font-medium hover:text-[#F8C52D] transition-colors">
                  Ver más
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
              <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>

            <!-- Card 2 - Solo ícono y texto -->
            <div class="relative bg-gray-100 p-12 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-gray-200 transition-colors min-h-[500px]">
              <div class="mb-8">
                <div class="w-24 h-24 rounded-full border-2 border-gray-400 flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="w-px h-16 bg-gray-400 mx-auto mb-6"></div>
              </div>
              <p class="text-[#6A6867] text-lg max-w-xs leading-relaxed">
                VINCULAMOS EL MUNDO DE LA JOYERÍA CON LAS MONTAÑAS.
              </p>
            </div>

            <!-- Card 3 -->
            <div class="relative bg-[#1e3a3a] overflow-hidden group cursor-pointer">
              <img src="/images/patrocinador2.png" alt="Mission LT 2.0" class="w-full h-auto" />
              <div class="absolute bottom-8 right-8">
                <a href="#" class="inline-flex items-center text-white font-medium hover:text-[#F8C52D] transition-colors">
                  Ver más
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Quienes Nos Apoyan Section -->
    <section class="quienes-apoyan py-16 lg:py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Title with line -->
          <div class="flex items-center justify-center mb-8">
            <div class="w-24 h-1 bg-[#F8C52D]"></div>
          </div>
          
          <h2 class="text-3xl lg:text-4xl font-normal text-[#6A6867] mb-8">
            Quienes nos apoyan
          </h2>
          
          <p class="text-lg text-[#6A6867] leading-relaxed">
            Trabajamos para preservar los entornos naturales donde practicamos la escalada, colaborando con organizaciones que promueven la conservación y la ciencia ciudadana. Fomentamos los principios de "no dejar rastro" y aplicamos estos valores en cada ascenso y travesía. Nos aseguramos de minimizar nuestro impacto, dejando cada ruta y campamento en mejores condiciones de las que encontramos, y transmitimos este compromiso a las futuras generaciones de montañistas y escaladores.
          </p>
        </div>
      </div>
    </section>

    <!-- Sponsor Logo Tiles - 3 large boxes -->
    <section class="sponsor-tiles bg-white">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <template v-if="sponsorTilesData">
          <div
            v-for="(item, idx) in sponsorTilesData"
            :key="item.id"
            class="sponsor-tile flex items-center justify-center p-16 min-h-[400px] lg:min-h-[547px]"
            :class="idx === 0 ? 'bg-[#1a1a2e]' : idx === 1 ? 'bg-[#f0f0f0]' : 'bg-white border border-gray-100'"
          >
            <template v-if="'sponsor' in item">
              <!-- Datos desde SponsorPlacement -->
              <img
                v-if="item.sponsor.logo?.url"
                :src="item.sponsor.logo.url"
                :alt="item.sponsor.logo.alt ?? item.sponsor.name"
                :class="['max-w-[55%] max-h-24 object-contain', idx === 0 ? 'filter brightness-0 invert' : '']"
              />
              <div v-else class="text-center">
                <div :class="['text-3xl lg:text-4xl font-bold tracking-widest uppercase', idx === 0 ? 'text-white' : idx === 1 ? 'text-gray-700' : 'text-gray-900']">{{ item.sponsor.name }}</div>
              </div>
            </template>
            <template v-else>
              <!-- Datos legacy desde Sponsor directo -->
              <img
                v-if="(item as any).logo"
                :src="(item as any).logo.url"
                :alt="(item as any).logo.alt ?? (item as any).name"
                :class="['max-w-[55%] max-h-24 object-contain', idx === 0 ? 'filter brightness-0 invert' : '']"
              />
              <div v-else class="text-center">
                <div :class="['text-3xl lg:text-4xl font-bold tracking-widest uppercase', idx === 0 ? 'text-white' : idx === 1 ? 'text-gray-700' : 'text-gray-900']">{{ (item as any).name }}</div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <div class="sponsor-tile bg-[#1a1a2e] flex items-center justify-center p-16 min-h-[400px] lg:min-h-[547px]">
            <img src="/images/exposure.png" alt="Exposure" class="max-w-[55%] max-h-24 object-contain filter brightness-0 invert" />
          </div>
          <div class="sponsor-tile bg-[#f0f0f0] flex items-center justify-center p-16 min-h-[400px] lg:min-h-[547px]">
            <div class="text-center"><div class="text-3xl lg:text-4xl font-bold text-gray-700 tracking-widest uppercase">ClimbWork</div></div>
          </div>
          <div class="sponsor-tile bg-white flex items-center justify-center p-16 min-h-[400px] lg:min-h-[547px] border border-gray-100">
            <div class="text-center"><div class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-widest uppercase">Black<br>Diamond</div></div>
          </div>
        </template>
      </div>
    </section>

    <!-- Small Sponsor Logos Row -->
    <section class="sponsor-logos-row py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          <template v-if="logoRowItems.length">
            <template v-for="item in logoRowItems" :key="item.id">
              <img
                v-if="item.sponsor.logo?.url"
                :src="item.sponsor.logo.url"
                :alt="item.sponsor.logo.alt ?? item.sponsor.name"
                class="h-16 lg:h-20 object-contain"
              />
              <span v-else class="text-[#6A6867] font-medium text-lg lg:text-xl tracking-wider uppercase">
                {{ item.sponsor.name }}
              </span>
            </template>
          </template>
          <!-- Fallback hardcodeado -->
          <template v-else>
            <img src="/images/pico-norte-1.png" alt="Pico Norte" class="h-16 lg:h-20 object-contain" />
            <img src="/images/source-pico-norte.png" alt="Source" class="h-8 lg:h-10 object-contain" />
            <img src="/images/exposure.png" alt="Exposure / Mad Rock" class="h-7 lg:h-8 object-contain" />
            <span class="text-[#6A6867] font-medium text-lg lg:text-xl tracking-wider uppercase">Monkey Hands</span>
            <span class="text-[#6A6867] font-medium text-base tracking-widest uppercase">Cumbre Cotidiana</span>
            <span class="text-[#6A6867] font-bold text-xl tracking-widest uppercase">ALTRAC</span>
          </template>
        </div>
      </div>
    </section>

    <!-- ¿Dónde hemos trabajado? Map Section -->
    <section class="map-section bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h2 class="text-3xl lg:text-4xl font-normal text-[#6A6867]">
          {{ mapaTitle }}
        </h2>
      </div>
      <div class="relative w-full overflow-hidden" style="height: 1300px;">
        <img
          :src="mapaImage"
          alt="Mapa de trabajo - Nuevo León"
          class="w-full h-full object-cover"
        />
        <!-- Potrero Chico label - right side -->
        <div v-if="mapaLabel1" class="absolute hidden lg:block" style="right: 10%; top: 30%;">
          <p class="text-base lg:text-lg font-medium text-gray-800 text-right leading-snug max-w-xs">
            {{ mapaLabel1 }}
          </p>
        </div>
        <!-- La Huasteca label - left side -->
        <div v-if="mapaLabel2" class="absolute hidden lg:block" style="left: 11%; top: 55%;">
          <p class="text-base lg:text-lg font-medium text-gray-800 leading-snug max-w-xs">
            {{ mapaLabel2 }}
          </p>
        </div>
        <!-- El Salto label - right bottom -->
        <div v-if="mapaLabel3" class="absolute hidden lg:block" style="right: 10%; bottom: 16%;">
          <p class="text-base lg:text-lg font-medium text-gray-800 text-right leading-snug max-w-xs">
            {{ mapaLabel3 }}
          </p>
        </div>
      </div>
    </section>

    <!-- IMG_3366 - Climbing / App Section -->
    <section class="climbing-app-section relative overflow-hidden" style="height: 1313px;">
      <img
        :src="st('numeros.imagen', '/images/img-33661.png')"
        alt="Escalada en roca"
        class="w-full h-full object-cover"
      />
      <!-- Logo overlay - right side -->
      <div class="absolute top-1/2 -translate-y-1/2 right-12 lg:right-24 flex flex-col items-center gap-6">
        <img
          src="/images/logoescalada.svg"
          alt="Escalada Libre"
          class="w-40 lg:w-56 filter brightness-0 invert"
        />
      </div>
    </section>

    <!-- Escalada Libre en Números -->
    <section class="numeros-section py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <div class="text-center mb-12 lg:mb-16">
          <div class="inline-block">
            <div class="w-48 h-3 bg-[#F8C52D] mx-auto mb-4"></div>
            <h2 class="text-3xl lg:text-[35px] font-medium text-gray-900">
              {{ st('numeros.titulo', 'Escalada Libre en Números') }}
            </h2>
          </div>
        </div>

        <!-- Row 1: 5 stats -->
        <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)] mb-4">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 lg:divide-x divide-gray-200">
            <div class="p-6 lg:p-8 text-center">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.actividades', '74') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858] leading-snug">Actividades<br>realizadas</div>
            </div>
            <div class="p-6 lg:p-8 text-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.arboles', '500') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858] leading-snug">Árboles<br>sembrados</div>
            </div>
            <div class="p-6 lg:p-8 text-center border-t sm:border-t-0 sm:border-l lg:border-l border-gray-200">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.rutas', '93') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858] leading-snug">Rutas<br>rehabilitadas</div>
            </div>
            <div class="p-6 lg:p-8 text-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.bolts', '1110') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858] leading-snug">Bolts<br>instalados</div>
            </div>
            <div class="p-6 lg:p-8 text-center border-t lg:border-t-0 lg:border-l border-gray-200 sm:col-span-3 lg:col-span-1">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.senalizaciones', '15') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858] leading-snug">Señalamientos<br>instalados</div>
            </div>
          </div>
        </div>

        <!-- Row 2: 4 stats -->
        <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)]">
          <div class="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            <div class="p-6 lg:p-8 text-center">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.voluntarios', '300') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858]">Voluntarios</div>
            </div>
            <div class="p-6 lg:p-8 text-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.anos_util', '30') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858] leading-snug">Años de vida útil<br>de una vía</div>
            </div>
            <div class="p-6 lg:p-8 text-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.costo_reequipado', '$3700') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858] leading-snug">Costo por reequipado<br>de rutas</div>
            </div>
            <div class="p-6 lg:p-8 text-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <div class="text-4xl lg:text-[50px] font-semibold text-[#6A6867] leading-none mb-3">{{ st('stat.monto_invertido', '$400,000') }}</div>
              <div class="text-sm lg:text-[18px] text-[#585858]">Monto total invertido</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo nos puedes apoyar -->
    <section class="apoyo-section py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 class="text-3xl lg:text-[55px] font-normal text-[#6A6867] leading-tight mb-4">
          Cómo nos puedes apoyar
        </h2>
        <p class="text-lg lg:text-xl text-[#6A6867]">
          Existen cuatro maneras en las que puedes apoyarnos:
        </p>
      </div>

      <!-- Carousel counter -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div class="flex items-center gap-2">
          <span class="text-[#F8C52D] text-2xl font-medium">{{ String(apoyarCurrent).padStart(2, '0') }}</span>
          <span class="text-gray-400 text-lg font-medium"> / 04</span>
          <div class="flex-1 h-px bg-gray-200 ml-4">
            <div
              class="h-full bg-[#F8C52D] transition-all duration-300"
              :style="{ width: (apoyarCurrent / 4 * 100) + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Swiper carousel -->
      <Swiper
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="0"
        :breakpoints="{
          768: { slidesPerView: 1.2, spaceBetween: 0 },
          1024: { slidesPerView: 1.5, spaceBetween: 0 },
        }"
        :navigation="{
          prevEl: '.apoyo-prev',
          nextEl: '.apoyo-next',
        }"
        :loop="true"
        @slideChange="onApoyarSlideChange"
        class="apoyo-swiper w-full"
      >
        <!-- Slide 1: Por Paypal -->
        <SwiperSlide>
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" style="max-width: 960px; margin: 0 auto;">
            <div class="flex-shrink-0">
              <div class="w-64 h-64 lg:w-[383px] lg:h-[383px] rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/images/reforestacion-casualas-1.png"
                  alt="PayPal"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-4">Por paypal</h3>
              <p class="text-base lg:text-lg text-[#6A6867] mb-8 leading-relaxed max-w-sm">
                Desde nuestro sitio web, puedes realizar tu donación por medio de Paypal.
              </p>
              <a
                href="#"
                class="inline-block px-8 py-3 border border-[#6A6867] text-[#6A6867] font-medium hover:bg-[#6A6867] hover:text-white transition-colors"
              >
                Donar ahora
              </a>
            </div>
          </div>
        </SwiperSlide>

        <!-- Slide 2: Transferencia interbancaria -->
        <SwiperSlide>
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" style="max-width: 960px; margin: 0 auto;">
            <div class="flex-shrink-0">
              <div class="w-64 h-64 lg:w-[383px] lg:h-[383px] rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/images/img-20200308-wa-00051.png"
                  alt="Transferencia"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-4">Transferencia interbancaria</h3>
              <p class="text-base lg:text-lg text-[#6A6867] mb-8 leading-relaxed max-w-sm">
                Puedes realizar transferencia con los datos que te compartimos.
              </p>
              <a
                href="#"
                class="inline-block px-8 py-3 border border-[#6A6867] text-[#6A6867] font-medium hover:bg-[#6A6867] hover:text-white transition-colors"
              >
                Ver datos de transferencia
              </a>
            </div>
          </div>
        </SwiperSlide>

        <!-- Slide 3: Gyms -->
        <SwiperSlide>
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" style="max-width: 960px; margin: 0 auto;">
            <div class="flex-shrink-0">
              <div class="w-64 h-64 lg:w-[383px] lg:h-[383px] rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/images/n-1.png"
                  alt="Gimnasios"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-4">Gyms</h3>
              <p class="text-base lg:text-lg text-[#6A6867] mb-8 leading-relaxed max-w-sm">
                Puedes acudir a cualquiera de los gimnasios que nos apoyan.
              </p>
              <a
                href="#"
                class="inline-block px-8 py-3 border border-[#6A6867] text-[#6A6867] font-medium hover:bg-[#6A6867] hover:text-white transition-colors"
              >
                Ver listado de gimnasios
              </a>
            </div>
          </div>
        </SwiperSlide>

        <!-- Slide 4: Comprando nuestros productos -->
        <SwiperSlide>
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" style="max-width: 960px; margin: 0 auto;">
            <div class="flex-shrink-0">
              <div class="w-64 h-64 lg:w-[383px] lg:h-[383px] rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/images/patrocinador1.png"
                  alt="Productos"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl lg:text-[28px] font-medium text-[#6A6867] mb-4">Comprando nuestros productos</h3>
              <p class="text-base lg:text-lg text-[#6A6867] mb-8 leading-relaxed max-w-sm">
                También nos puedes apoyar comprando productos de Escalada Libre.
              </p>
              <a
                href="#"
                class="inline-block px-8 py-3 border border-[#6A6867] text-[#6A6867] font-medium hover:bg-[#6A6867] hover:text-white transition-colors"
              >
                Ver productos
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Navigation arrows -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center gap-4">
        <button class="apoyo-prev w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-[#F8C52D] hover:text-[#F8C52D] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button class="apoyo-next w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-[#F8C52D] hover:text-[#F8C52D] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- Nuestro Team -->
    <section class="team-section py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-2xl lg:text-[30px] font-medium text-[#6A6867]">{{ sec('mesa-directiva', nosotrosPage)?.heading ?? 'Nuestro team' }}</h2>
          <NuxtLink
            :to="teamLinkUrl"
            class="inline-flex items-center text-[#6A6867] font-medium hover:text-[#F8C52D] transition-colors text-sm lg:text-base"
          >
            {{ (sec('mesa-directiva', nosotrosPage)?.settings?.link_label as string) ?? 'Ver todos' }}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Team cards -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="bg-[#f9f9f9] rounded-lg p-6 flex items-center gap-6"
          >
            <div class="flex-shrink-0 w-36 h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-200">
              <img
                :src="(member.settings?.photo as string) ?? '/images/img-20200308-wa-00051.png'"
                :alt="member.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-xl lg:text-[22px] font-medium text-[#6A6867] mb-1">{{ member.title }}</h3>
              <p class="text-sm lg:text-base text-[#6A6867] font-medium mb-3">{{ (member.settings?.role as string) ?? '' }}</p>
              <p class="text-sm lg:text-base text-[#6A6867] leading-relaxed">{{ member.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter + Product Cards -->
    <section class="prefooter-cards py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Newsletter Card -->
          <div class="bg-[#f5f5f0] rounded-xl p-8 flex flex-col justify-between min-h-[357px]">
            <div>
              <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#6A6867] mb-4">{{ newsletterEtiqueta }}</p>
              <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] leading-snug mb-6">
                {{ newsletterTitulo }}
              </h3>
            </div>
            <div class="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Escribe tu correo"
                class="w-full px-4 py-3 border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F8C52D]"
              />
              <button class="self-end px-6 py-3 bg-[#F8C52D] text-gray-900 font-medium text-sm hover:bg-[#e0b525] transition-colors">
                {{ newsletterBoton }}
              </button>
            </div>
          </div>

          <!-- Sponsor Cards desde API -->
          <template v-if="prefooterCards.length">
            <div
              v-for="card in prefooterCards"
              :key="card.id"
              class="relative rounded-xl overflow-hidden min-h-[357px]"
            >
              <!-- Con imagen de fondo -->
              <template v-if="card.banner?.url">
                <img :src="card.banner.url" :alt="card.title ?? card.sponsor.name" class="w-full h-full object-cover absolute inset-0" />
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="relative z-10 p-8 h-full flex flex-col justify-start">
                  <p class="text-white font-bold text-xl lg:text-2xl tracking-wider">{{ card.title ?? card.sponsor.name }}</p>
                  <p v-if="card.body" class="text-white/80 text-sm mt-1">{{ card.body }}</p>
                </div>
              </template>
              <!-- Con logo sobre fondo oscuro -->
              <template v-else>
                <div class="bg-[#1a1a2e] rounded-xl p-8 flex items-center justify-center min-h-[357px]">
                  <div class="text-center">
                    <img
                      v-if="card.sponsor.logo?.url"
                      :src="card.sponsor.logo.url"
                      :alt="card.sponsor.name"
                      class="max-w-[70%] mx-auto filter brightness-0 invert"
                    />
                    <span v-else class="text-white text-2xl font-bold tracking-widest uppercase">{{ card.sponsor.name }}</span>
                  </div>
                </div>
              </template>
            </div>
          </template>

          <!-- Fallback hardcodeado -->
          <template v-else>
            <!-- ASPECT PRO Product Card -->
            <div class="relative rounded-xl overflow-hidden min-h-[357px]">
              <img src="/images/patrocinador1.png" alt="Aspect Pro" class="w-full h-full object-cover absolute inset-0" />
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 p-8 h-full flex flex-col justify-start">
                <p class="text-white font-bold text-xl lg:text-2xl tracking-wider">ASPECT PRO</p>
                <p class="text-white/80 text-sm mt-1">Built to go big</p>
              </div>
            </div>
            <!-- ClimbWork Brand Card -->
            <div class="bg-[#1a1a2e] rounded-xl p-8 flex items-center justify-center min-h-[357px]">
              <div class="text-center">
                <img src="/images/exposure.png" alt="ClimbWork" class="max-w-[70%] mx-auto filter brightness-0 invert" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Mountain Pre-Footer: ¡GRACIAS POR TU APOYO! -->
    <section class="mountain-prefooter" style="min-height: 675px;">
      <!-- Content -->
      <div class="flex flex-col items-center justify-center h-full py-24 px-4 text-center" style="min-height: 675px;">
        <h2 class="text-4xl lg:text-6xl font-bold text-[#1a1a1a] mb-8 tracking-wider">
          {{ graciasTitle }}
        </h2>
        <NuxtLink
          :to="graciasButtonUrl"
          class="px-10 py-4 bg-[#F8C52D] text-gray-900 font-semibold text-base lg:text-lg hover:bg-[#e0b525] transition-colors"
        >
          {{ graciasButtonText }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { BlogPost, Sponsor, SponsorPlacement, PageSection, Page, SettingsMap } from '~/types/api'

useSeoMeta({
  title: 'Escalada Libre - Proteger, conservar y promover la escalada en México',
  description: 'Somos una comunidad dedicada a preservar los espacios naturales y fomentar la práctica responsable de la escalada en México.',
  ogTitle: 'Escalada Libre México',
  ogDescription: 'Protegiendo y promoviendo la escalada sustentable en México',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})

const api = useApi()

const [
  { data: page },
  { data: blogResp },
  { data: sponsors },
  { data: settings },
  { data: nosotrosPage },
  { data: otrosPlacements },
  { data: homeTilesPlacements },
  { data: logoRowPlacements },
  { data: prefooterPlacements },
] = await Promise.all([
  useAsyncData('page-inicio', () => api.pages.getBySlug('inicio').catch(() => null)),
  useAsyncData('blog-home', () => api.blog.getAll({ per_page: 3 }).catch(() => ({ data: [] }))),
  useAsyncData('sponsors-home', () => api.sponsors.getAll().catch(() => [] as Sponsor[])),
  useAsyncData('settings-home', () => api.settings.getAll().catch(() => ({} as SettingsMap))),
  useAsyncData('page-nosotros', () => api.pages.getBySlug('nosotros').catch(() => null)),
  useAsyncData('otros-patrocinadores', () => api.sponsorPlacements.getAll({ placement: 'otros_patrocinadores' }).catch(() => [] as SponsorPlacement[])),
  useAsyncData('home-tiles', () => api.sponsorPlacements.getAll({ placement: 'home_tiles' }).catch(() => [] as SponsorPlacement[])),
  useAsyncData('logo-row', () => api.sponsorPlacements.getAll({ placement: 'logo_row' }).catch(() => [] as SponsorPlacement[])),
  useAsyncData('prefooter-cards', () => api.sponsorPlacements.getAll({ placement: 'prefooter_card' }).catch(() => [] as SponsorPlacement[])),
])

// CMS section helper
const sec = (key: string, pg: Ref<Page | null> | null = page) =>
  pg?.value?.sections?.find((s: PageSection) => s.settings?.key === key)

// Hero
const heroTitle = computed(() =>
  sec('hero')?.heading ?? 'Proteger, conservar y promover la escalada en Costa Rica.')
const heroLabel = computed(() =>
  sec('hero')?.subheading ?? 'ESCALADA LIBRE')
const heroImage = computed(() =>
  (sec('hero')?.settings?.image as string) ?? '/images/huasteca-41.png')
const heroLocation = computed(() =>
  (sec('hero')?.settings?.location as string) ?? 'La Huasteca')

// Intro text + parallax
const introText = computed(() =>
  sec('intro')?.body ?? 'Somos ciudadanos con interés en beneficiar las actividades recreativas de montaña.')
const parallaxSkyImage = computed(() =>
  (sec('intro')?.settings?.sky_image as string) ?? '/images/hg.png')
const parallaxMountainImage = computed(() =>
  (sec('intro')?.settings?.mountain_image as string) ?? '/images/potrero-1.png')
const parallaxLocation = computed(() =>
  (sec('intro')?.settings?.location as string) ?? 'El Potrero Chico, Hidalgo N.L. México')

// Conservation
const conservacionTitle = computed(() =>
  sec('conservacion')?.heading ?? 'Contribuimos al cuidado de los Ecosistemas Terrestres;')
const conservacionBody = computed(() =>
  sec('conservacion')?.body ?? 'Una Vida Sana, el Desarrollo de Sociedades Pacificas, el Desarrollo de los Pueblos y el Desarrollo Sustentable mediante la elaboración de planes y programas para la protección y mantenimiento de las áreas donde es posible su práctica.')
const conservacionImage = computed(() =>
  (sec('conservacion')?.settings?.image as string) ?? '/images/n-1.png')
const conservacionLocation = computed(() =>
  (sec('conservacion')?.settings?.location as string) ?? 'El Salto, Coahuila de Zaragoza, Santiago N.L. México')

// Featured sections 01/02/03
const fallbackFeatured = [
  { num: '01', tag: 'NOSOTROS', title: 'Protegemos las montañas y a la comunidad.', body: 'Somos un grupo de deportistas del Noreste de México con interés en beneficiar, de manera segura y sustentable, al fomento del montañismo y escalada en sus diferentes modalidades', image: '/images/img-20200308-wa-00051.png', link: '/nosotros' },
  { num: '02', tag: 'ACTIVIDADES', title: 'Reforestación completa.', body: 'Llenamos de vida en zonas de Santiago, N.L. cubriendo áreas que lo necesitaban debido a daños ocasionados por incendios.', image: '/images/reforestacion-casualas-1.png', link: '/actividades' },
  { num: '03', tag: 'HISTORIA', title: 'Sucesos en la pared de escalada "Las ánimas".', body: 'Debido a ciertas inspecciones que realizó el Instituto Nacional de Antropología e Historia, el Instituto decidió intervenir en la zona.', image: '/images/unrioenelrio-home-1.png', link: '/historia' },
]

const featuredSections = computed(() => {
  const data = blogResp.value?.data
  const posts = Array.isArray(data) ? data : []
  // Priorizar los 3 posts con is_featured = true, luego los más recientes
  const featured = posts.filter((p: BlogPost) => p.is_featured)
  const pool = featured.length >= 3 ? featured : posts
  if (pool.length >= 3) {
    return pool.slice(0, 3).map((p: BlogPost, i: number) => ({
      num: String(i + 1).padStart(2, '0'),
      tag: (p.category ?? 'BLOG').toUpperCase(),
      title: p.title,
      body: p.excerpt ?? '',
      image: p.featured_media?.url ?? '/images/n-1.png',
      link: `/blog/${p.slug}`,
    }))
  }
  return fallbackFeatured
})

// Sponsors — slider
const sponsorsSliderData = computed(() => {
  const sp = sponsors.value ?? []
  if (sp.length) {
    return sp.map((s: Sponsor) => ({
      id: s.id,
      name: s.name,
      logo: s.logo?.url ?? '/images/exposure.png',
      slideImage: s.slide_image?.url ?? '/images/slide1.png',
      description: s.description ?? 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.',
      url: s.website_url ?? '#',
    }))
  }
  return [
    { id: -1, name: 'Exposure', logo: '/images/exposure.png', slideImage: '/images/slide1.png', description: 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.', url: '#' },
    { id: -2, name: 'Exposure', logo: '/images/exposure.png', slideImage: '/images/slide1.png', description: 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.', url: '#' },
    { id: -3, name: 'Exposure', logo: '/images/exposure.png', slideImage: '/images/slide1.png', description: 'Somos distribuidores autorizados con amplia experiencia en proyectos con Escalada Libre, ofreciendo productos para montañismo y escalada en México.', url: '#' },
  ]
})

// Sponsors — top tiles (3 grandes)
const sponsorTilesData = computed(() => {
  const placements = homeTilesPlacements.value ?? []
  if (placements.length) return placements
  const sp = sponsors.value ?? []
  return sp.length >= 3 ? sp.slice(0, 3) : null
})

// Sponsors — fila de logos pequeños
const logoRowItems = computed(() => logoRowPlacements.value ?? [])

// Prefooter cards (2 sponsor cards)
const prefooterCards = computed(() => prefooterPlacements.value ?? [])

// Sección gracias
const graciasSection = computed(() => sec('gracias'))
const graciasTitle = computed(() => graciasSection.value?.heading ?? '¡GRACIAS POR TU APOYO!')
const graciasButtonText = computed(() => (graciasSection.value?.settings?.button_text as string) ?? 'Apoyar')
const graciasButtonUrl = computed(() => (graciasSection.value?.settings?.button_url as string) ?? '/como-apoyar')

// Newsletter settings
const newsletterTitulo = computed(() => st('newsletter.titulo', 'Recibe noticias de Escalada Libre a tu correo'))
const newsletterEtiqueta = computed(() => st('newsletter.etiqueta', 'NEWSLETTER'))
const newsletterBoton = computed(() => st('newsletter.boton', 'Suscribir'))

// Team section
const teamLinkUrl = computed(() => st('equipo.link_url', '/nosotros'))

// Mapa
const mapaSection = computed(() => sec('mapa'))
const mapaTitle = computed(() => mapaSection.value?.heading ?? '¿Dónde hemos trabajado?')
const mapaImage = computed(() => (mapaSection.value?.settings?.image as string) ?? '/images/screen-shot-20241119-at-64211-pm-1.png')
const mapaLabel1 = computed(() => (mapaSection.value?.settings?.label_1 as string) ?? 'Potrero Chico, Hidalgo N.L., México')
const mapaLabel2 = computed(() => (mapaSection.value?.settings?.label_2 as string) ?? 'La Huasteca, Santa Catarina, N.L., México')
const mapaLabel3 = computed(() => (mapaSection.value?.settings?.label_3 as string) ?? 'El Salto, Ciénega de Gonzalez, N.L., México')

// Stats helper: tries API settings, falls back to hardcoded
const st = (key: string, fallback: string): string =>
  (settings.value as SettingsMap)?.[key] ?? fallback

// Team members from nosotros page
type TeamMember = { id: number; title: string; body: string | null; settings: Record<string, unknown> | null }
const fallbackTeam: TeamMember[] = [
  { id: 1, title: 'Carloz Ortiz', body: 'Escalador desde los 13 años de edad. Abogado especialista en derecho internacional ambiental.', settings: { role: 'Presidente de la asociación.', photo: '/images/img-20200308-wa-00051.png' } },
  { id: 2, title: 'Adrián Lozano', body: 'Hemos realizado brigadas de limpiezas en zonas pocos accesibles, eliminando la basura que afecta a nuestras sierras.', settings: { role: 'Vicepresidente de la asociación.', photo: '/images/slide1.png' } },
]
const teamMembers = computed<TeamMember[]>(() => {
  const items = nosotrosPage.value?.sections
    ?.find((s: PageSection) => s.settings?.key === 'mesa-directiva')?.items ?? []
  return items.length ? items.slice(0, 2) : fallbackTeam
})

// Apoyo carousel counter
const apoyarCurrent = ref(1)
const onApoyarSlideChange = (swiper: any) => {
  apoyarCurrent.value = (swiper.realIndex % 4) + 1
}

const scrollToNextSection = () => {
  const nextSection = document.querySelector('#mission')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  padding: 8rem 0 4rem;
}

.parallax-section {
  position: relative;
}

.parallax-container {
  position: relative;
}

/* Swiper Custom Styles */
:deep(.swiper-pagination-custom .swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: white;
  opacity: 0.5;
}

:deep(.swiper-pagination-custom .swiper-pagination-bullet-active) {
  opacity: 1;
  background: #F8C52D;
}

/* Apoyo swiper - hide default arrows */
:deep(.apoyo-swiper .swiper-button-prev),
:deep(.apoyo-swiper .swiper-button-next) {
  display: none;
}

@media (max-width: 1023px) {
  .hero-content {
    padding: 6rem 0 4rem;
  }
}
</style>
