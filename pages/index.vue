<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section id="hero" class="hero relative">
      <!-- Background Image -->
      <div class="hero-image absolute inset-0 z-0">
        <!-- Imagen para móviles -->
        <img 
          v-if="heroImageMobile"
          :src="heroImageMobile"
          :alt="heroLocation"
          class="w-full h-full object-fill lg:hidden"
          style="transform: translateY(81px);"
        />
        <!-- Imagen para desktop -->
        <img 
          v-if="heroImage"
          :src="heroImage"
          :alt="heroLocation"
          class="w-full h-full object-fill hidden lg:block"
          style="transform: translateY(93px);"
        />
      </div>
      
      <!-- Follow Us Button - Fixed Left -->
      <div v-show="showFollowUs" class="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block" style="transition: opacity 0.3s ease;">
        <div class="flex flex-col items-center gap-4">
          <span class="text-sm font-medium tracking-widest transition-colors duration-300" style="writing-mode: vertical-rl; transform: rotate(180deg); color: #00FF7F;">
            Follow Us
          </span>
          <div class="flex flex-col items-center" style="gap: 10px;">
            <a 
              href="https://www.instagram.com/escaladalibreac/" 
              target="_blank"
              class="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 bg-white/10 hover:bg-white/20"
              style="color: #00FF7F;"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/escaladalibreac" 
              target="_blank"
              class="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 bg-white/10 hover:bg-white/20"
            >
              <img src="/images/facebook.svg" alt="Facebook" class="w-5 h-5" style="filter: brightness(0) saturate(100%) invert(82%) sepia(81%) saturate(2466%) hue-rotate(77deg) brightness(101%) contrast(101%);" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Hero Overlay: gradient oscuro para legibilidad del texto -->
      <div class="hero-overlay absolute inset-0 z-1"></div>

      <!-- Hero Content -->
      <div class="hero-content relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="ml-auto hero-text-block" style="max-width: 50rem;">
          <!-- Small Title -->
          <div v-if="heroLabel" class="flex items-center gap-3 mb-6" data-hero-animate data-hero-delay="0">
            <div class="w-12 h-px" style="background-color: #242424;"></div>
            <span class="text-sm tracking-[0.3em] uppercase" style="color: #242424; font-family: 'Bodoni Moda', serif;">{{ heroLabel }}</span>
          </div>
          
          <!-- Main Title -->
          <h1 v-if="heroTitle" class="hero-title font-normal mb-8 leading-tight" style="color: #242424; font-family: 'Readex Pro', sans-serif; font-weight: 400;" data-hero-animate data-hero-delay="1">
            {{ heroTitle }}
          </h1>
        </div>
      </div>
      
      <!-- Scroll Down Button - Left on mobile, centered on desktop -->
      <button 
        @click="scrollToNextSection"
        class="absolute bottom-12 left-8 lg:left-1/2 lg:-translate-x-1/2 z-20 flex flex-row items-center gap-3 text-white hover:text-[#F5C400] transition-colors group"
        data-hero-animate data-hero-delay="2"
      >
        <span class="text-sm tracking-wider" style="font-family: 'Readex Pro', sans-serif; font-weight: 600;">scroll down</span>
        <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
      
      <!-- Location Tag Mobile - Bottom Right (solo móviles) -->
      <div v-if="heroLocationMobile" class="absolute bottom-8 right-8 z-20 lg:hidden" data-hero-animate data-hero-delay="3">
        <div class="text-white text-sm tracking-wider px-1 py-1 text-right" style="font-family: 'Readex Pro', sans-serif; font-weight: 600;">
          {{ heroLocationMobile }}
        </div>
        <div class="mt-1 h-[2px]" style="background-color: #F8C52D;"></div>
      </div>
      
      <!-- Location Tag Desktop - Bottom Left (solo desktop) -->
      <div v-if="heroLocationHtml" class="absolute bottom-8 left-8 z-20 hidden lg:block" data-hero-animate data-hero-delay="3">
        <div class="text-white text-sm tracking-wider px-1 py-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 600;" v-html="heroLocationHtml">
        </div>
        <div class="mt-1 h-[2px]" style="background-color: #F8C52D;"></div>
      </div>
    </section>

    <!-- Intro + Mountain Section -->
    <section class="parallax-section">
      <!-- Text Content -->
      <div class="bg-gray-50 flex items-center justify-center" style="min-height: 420px; padding: 6rem 1rem;">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto" data-reveal>
            <div class="leading-relaxed" style="font-family: 'Readex Pro', sans-serif; font-weight: 300; color: #6A6867; font-size: 35px; text-align: left;" v-html="introText"></div>
          </div>
        </div>
      </div>

      <!-- Mountain Image Mobile -->
      <div v-if="parallaxMountainImageMobile" class="w-full relative lg:hidden img-reveal">
        <img 
          :src="parallaxMountainImageMobile"
          :alt="parallaxLocation"
          class="w-full h-auto block"
        />
        <!-- Location Tag -->
        <div v-if="parallaxLocation" class="absolute bottom-8 right-8">
          <div class="text-white text-sm px-1 py-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 600;">
            {{ parallaxLocation }}
            <div class="mt-1 h-[2px]" style="background-color: #F8C52D;"></div>
          </div>
        </div>
      </div>

      <!-- Mountain Image Desktop -->
      <div
        v-if="parallaxMountainImage"
        class="scroll-expand-outer"
        :class="parallaxMountainImageMobile ? 'hidden lg:block' : ''"
        style="height: clamp(450px, 58vw, 1000px);"
        data-scroll-expand
      >
        <div class="scroll-expand-frame">
          <img
            :src="parallaxMountainImage"
            :alt="parallaxLocation"
            class="w-full h-full object-cover block"
          />
          <!-- Location Tag -->
          <div v-if="parallaxLocation" class="absolute bottom-8 right-8 z-10">
            <div class="text-white text-sm px-1 py-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 600;">
              {{ parallaxLocation }}
              <div class="mt-1 h-[2px]" style="background-color: #F8C52D;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conservation Section -->
    <section class="conservation-section relative">
      <!-- Text Content -->
      <div class="bg-gray-50 flex items-center justify-center" style="min-height: 600px; padding: 10rem 1rem;">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto">
            <h2 class="leading-snug mb-6" data-reveal style="font-family: 'Readex Pro', sans-serif; font-weight: 300; color: #6A6867; font-size: 35px;">
              {{ conservacionTitle }}
            </h2>
            <div class="leading-relaxed conservacion-body" data-reveal data-reveal-delay="200" style="font-family: 'Readex Pro', sans-serif; font-weight: 300; color: #6A6867; font-size: 20px;" v-html="conservacionBody"></div>
          </div>
        </div>
      </div>

      <!-- Image Mobile -->
      <div v-if="conservacionImageMobile" class="w-full relative lg:hidden">
        <img 
          :src="conservacionImageMobile"
          :alt="conservacionLocation"
          class="w-full h-auto block"
        />
        <!-- Location Tag -->
        <div class="absolute bottom-8 left-8 z-20">
          <div class="text-white text-sm px-1 py-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 600;" v-html="conservacionLocationHtml">
          </div>
          <div class="mt-1 h-[2px]" style="background-color: #F8C52D;"></div>
        </div>
      </div>

      <!-- Image Desktop -->
      <div
        v-if="conservacionImage"
        class="scroll-expand-outer"
        :class="conservacionImageMobile ? 'hidden lg:block' : ''"
        style="height: clamp(450px, 58vw, 1000px);"
        data-scroll-expand
      >
        <div class="scroll-expand-frame">
          <img
            :src="conservacionImage"
            :alt="conservacionLocation"
            class="w-full h-full object-cover block"
          />
          <!-- Location Tag -->
          <div class="absolute bottom-8 left-8 z-10">
            <div class="text-white text-sm px-1 py-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 600;" v-html="conservacionLocationHtml"></div>
            <div class="mt-1 h-[2px]" style="background-color: #F8C52D;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Secciones destacadas 01/02/03 -->
    <section
      v-for="item in featuredSections"
      :key="item.id ?? item.num"
      class="py-16 lg:py-24 bg-white"
    >
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Contenido de texto -->
          <div :class="['relative order-first', item.imagePosition === 'left' ? 'lg:order-last' : '']" data-reveal>
            <!-- Número de fondo (decorativo) — espejo según lado -->
            <div
              :class="['absolute top-0 leading-none select-none pointer-events-none', item.imagePosition === 'left' ? 'right-0' : 'left-0']"
              style="font-family: 'Readex Pro', sans-serif; font-weight: 700; font-size: 220px; color: #242424; opacity: 0.12; line-height: 1;"
            >
              {{ item.num }}
            </div>
            <!-- Contenido fluido sobre el número -->
            <div :class="['relative z-10 flex flex-col gap-5 pt-14 pb-4', item.imagePosition === 'left' ? 'lg:items-end lg:text-right' : '']">
              <!-- Etiqueta -->
              <div class="flex items-center gap-4">
                <div class="w-[60px] h-[2px] bg-[#F8C52D]"></div>
                <span class="text-[#F8C52D] text-sm tracking-[6px] uppercase" style="font-family: 'Readex Pro', sans-serif; font-weight: 500;">{{ item.tag }}</span>
              </div>
              <!-- Título -->
              <NuxtLink
                :to="item.link"
                class="text-[36px] text-[#888888] leading-tight max-w-[300px] block hover:text-gray-900 transition-colors cursor-pointer"
                style="font-family: 'Readex Pro', sans-serif; font-weight: 400;"
              >
                <h2>{{ item.title }}</h2>
              </NuxtLink>
              <!-- Descripción -->
              <div class="text-[17px] text-[#6A6867] leading-relaxed max-w-[380px] [&>p]:mb-0" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;" v-html="item.body"></div>
              <!-- Enlace: siempre justo después del texto -->
              <NuxtLink
                :to="item.link"
                class="inline-flex items-center gap-3 text-[#F8C52D] group/link"
                style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
              >
                Ver más
                <img src="/images/arrow.svg" alt="" class="w-6 h-auto arrow-icon" />
              </NuxtLink>
            </div>
          </div>
          <!-- Imagen -->
          <div :class="['order-last img-reveal', item.imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last']" :data-reveal="item.imagePosition === 'left' ? 'fade-right' : 'fade-left'">
            <img v-if="item.image" :src="item.image" :alt="item.title" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Slider -->
    <div class="bg-white pb-12 overflow-hidden">
      <section class="partners-slider relative h-[226px] lg:h-[80vh] lg:max-h-[800px]">
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
            type: 'bullets',
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
              <!-- Mobile Layout -->
              <div class="lg:hidden relative z-10 h-full flex flex-col justify-between p-6">
                <!-- Logo arriba -->
                <div>
                  <img :src="sponsor.logo" :alt="sponsor.name" class="w-40" />
                </div>
                <!-- Texto y botón abajo -->
                <div class="flex items-end justify-between gap-4">
                  <p class="text-white text-base leading-relaxed flex-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;">{{ sponsor.tagline }}</p>
                  <NuxtLink
                    :to="`/patrocinador/${sponsor.slug}`"
                    class="inline-flex items-center gap-2 text-[#F8C52D] flex-shrink-0"
                    style="font-family: 'Readex Pro', sans-serif; font-weight: 700; font-size: 1.125rem;"
                  >
                    Ver más
                    <img src="/images/arrow.svg" alt="" class="w-5 h-auto arrow-icon" />
                  </NuxtLink>
                </div>
              </div>
              <!-- Desktop Layout -->
              <div class="hidden lg:block relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div class="h-full flex items-center">
                  <div class="max-w-xl">
                    <img :src="sponsor.logo" :alt="sponsor.name" class="w-64 mb-8" />
                    <p class="text-white text-lg mb-8 leading-relaxed">{{ sponsor.tagline }}</p>
                    <NuxtLink
                      :to="`/patrocinador/${sponsor.slug}`"
                      class="inline-flex items-center gap-3 text-[#F8C52D] group/link"
                      style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
                    >
                      Ver más
                      <img src="/images/arrow.svg" alt="" class="w-6 h-auto arrow-icon" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Navigation Arrows - Hidden on mobile, visible on desktop -->
          <div class="swiper-button-prev-custom absolute top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
          <div class="swiper-button-next-custom absolute top-1/2 right-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hidden lg:flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </Swiper>
      </section>
      
      <!-- Pagination Dots - Outside slider -->
      <div class="swiper-pagination-custom flex justify-center gap-2 pt-8"></div>
    </div>

    <!-- Otros Patrocinadores Section -->
    <section class="otros-patrocinadores py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl text-[#6A6867] mb-12" data-reveal style="font-family: 'Readex Pro', sans-serif; font-weight: 500;">
          Otros patrocinadores
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <template v-if="otrosPlacements?.length">
            <div
              v-for="(item, idx) in otrosPlacements.slice(0, 2)"
              :key="item.id"
              class="relative overflow-hidden group cursor-pointer bg-cover bg-center h-[229px] md:min-h-[500px]"
              data-reveal
              :data-reveal-delay="idx === 0 ? undefined : '200'"
              :style="item.banner?.url ? `background-image: url('${item.banner.url}')` : 'background-color: #1e3a3a'"
            >
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute bottom-8 right-8 z-10">
                <!-- Enlace interno (NuxtLink) -->
                <NuxtLink
                  v-if="item.link_url && !item.link_url.startsWith('http') && item.link_url !== '#'"
                  :to="item.link_url"
                  class="inline-flex items-center gap-3 text-white group/link"
                  style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
                >
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-6 h-auto arrow-icon" />
                </NuxtLink>
                <!-- Enlace externo (a) -->
                <a
                  v-else
                  :href="item.link_url ?? '#'"
                  :target="item.link_url && item.link_url.startsWith('http') ? '_blank' : undefined"
                  :rel="item.link_url && item.link_url.startsWith('http') ? 'noopener noreferrer' : undefined"
                  class="inline-flex items-center gap-3 text-white group/link"
                  style="font-family: 'Readex Pro', sans-serif; font-weight: 700;"
                >
                  Ver más
                  <img src="/images/arrow.svg" alt="" class="w-6 h-auto arrow-icon" />
                </a>
              </div>
            </div>
          </template>

          <!-- Sin datos: sección oculta hasta que el backend provea -->
          <template v-else></template>
        </div>
      </div>
    </section>

    <!-- Quienes Nos Apoyan Section -->
    <section class="quienes-apoyan py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center" data-reveal>
          <!-- Title with line -->
          <div class="flex items-center justify-center mb-8">
            <div class="w-24 bg-[#F8C52D]" style="height: 0.75rem;"></div>
          </div>
          
          <h2 class="text-3xl lg:text-4xl text-[#6A6867] mb-8" style="font-family: 'Readex Pro', sans-serif; font-weight: 500;">
            {{ quienesHeading }}
          </h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-if="quienesBody" class="text-base text-[#6A6867] leading-relaxed text-center" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;" v-html="quienesBody"></div>
        </div>
      </div>
    </section>

    <!-- Sponsor Logo Tiles - 3 large boxes -->
    <section class="sponsor-tiles bg-white py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-16">
        <template v-if="sponsorTilesData">
          <component
            v-for="(item, idx) in sponsorTilesData"
            :key="item.id"
            :is="item.link_url ? 'a' : 'div'"
            v-bind="item.link_url ? { href: item.link_url, target: '_blank', rel: 'noopener noreferrer' } : {}"
            class="sponsor-tile flex items-center justify-center p-8 min-h-[200px] lg:min-h-[547px] bg-[#F6F6F6]"
            data-reveal="zoom-in"
            :data-reveal-delay="idx === 0 ? undefined : idx === 1 ? '200' : '400'"
          >
            <template v-if="'sponsor' in item">
              <img
                v-if="item.banner?.url || item.sponsor.logo?.url"
                :src="item.banner?.url ?? item.sponsor.logo!.url"
                :alt="item.banner?.url ? (item.title ?? item.sponsor.name) : (item.sponsor.logo?.alt ?? item.sponsor.name)"
                class="max-w-[70%] max-h-[22rem] object-contain"
              />
              <div v-else class="text-center">
                <div class="text-3xl lg:text-4xl font-bold tracking-widest uppercase text-gray-800">{{ item.sponsor.name }}</div>
              </div>
            </template>
            <template v-else>
              <img
                v-if="(item as any).logo"
                :src="(item as any).logo.url"
                :alt="(item as any).logo.alt ?? (item as any).name"
                class="max-w-[70%] max-h-[22rem] object-contain"
              />
              <div v-else class="text-center">
                <div class="text-3xl lg:text-4xl font-bold tracking-widest uppercase text-gray-800">{{ (item as any).name }}</div>
              </div>
            </template>
          </component>
        </template>
        <template v-else>
          <div class="sponsor-tile bg-[#F6F6F6] flex items-center justify-center p-10 min-h-[200px] lg:min-h-[547px]"></div>
          <div class="sponsor-tile bg-[#F6F6F6] flex items-center justify-center p-10 min-h-[200px] lg:min-h-[547px]"></div>
          <div class="sponsor-tile bg-[#F6F6F6] flex items-center justify-center p-10 min-h-[200px] lg:min-h-[547px]"></div>
        </template>
      </div>
    </section>

    <!-- Small Sponsor Logos Row -->
    <section class="sponsor-logos-row py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 lg:gap-x-16 lg:gap-y-12" data-reveal>
          <template v-if="logoRowItems.length">
            <template v-for="item in logoRowItems" :key="item.id">
              <component
                :is="item.link_url ? 'a' : 'span'"
                v-bind="item.link_url ? { href: item.link_url, target: '_blank', rel: 'noopener noreferrer' } : {}"
                class="inline-flex items-center"
              >
                <img
                  v-if="item.banner?.url || item.sponsor.logo?.url"
                  :src="item.banner?.url ?? item.sponsor.logo!.url"
                  :alt="item.banner?.url ? (item.sponsor.name) : (item.sponsor.logo?.alt ?? item.sponsor.name)"
                  :class="['object-contain', ['mad-rock','medi-lab','clinica-everest-ipeth','monkey-hands','la-cumbre-cotidiana'].includes(item.sponsor.slug) ? 'h-8 lg:h-10' : 'h-14 lg:h-16']"
                />
                <span v-else class="text-[#6A6867] font-medium text-lg lg:text-xl tracking-wider uppercase">
                  {{ item.sponsor.name }}
                </span>
              </component>
            </template>
          </template>
          <template v-else></template>
        </div>
      </div>
    </section>

    <!-- ?¿Dónde hemos trabajado? Map Section - MOBILE -->
    <div v-if="mapaImage || mapaTitle" class="lg:hidden">
      <!-- Título -->
      <section v-if="mapaTitle" class="bg-white pt-12 pb-6">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl text-[#6A6867] text-center" data-reveal style="font-family: 'Readex Pro', sans-serif; font-weight: 500;">
            {{ mapaTitle }}
          </h2>
        </div>
      </section>
      
      <!-- Mapa - sin espacio -->
      <div v-if="mapaImage" class="relative w-full overflow-hidden" style="height: 70vw; max-height: 500px;">
        <img
          :src="mapaImage"
          alt="Mapa de trabajo - Nuevo León"
          class="w-full h-full object-contain"
        />
      </div>
      
      <!-- Collage - pegado directamente -->
      <div v-if="numerosBackgroundImage" class="relative w-full overflow-hidden" style="height: 70vw; max-height: 500px;">
        <img
          :src="numerosBackgroundImage"
          alt="Escalada en roca"
          class="w-full h-full object-contain"
        />
      </div>
    </div>

    <!-- ¿Dónde hemos trabajado? Map Section - DESKTOP -->
    <section v-if="mapaImage || mapaTitle" class="map-section bg-white hidden lg:block">
      <div v-if="mapaTitle" class="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h2 class="text-4xl text-[#6A6867] text-center" data-reveal style="font-family: 'Readex Pro', sans-serif; font-weight: 500;">
          {{ mapaTitle }}
        </h2>
      </div>
      <div
        v-if="mapaImage"
        class="scroll-expand-outer"
        style="height: clamp(480px, 80vw, 1300px);"
        data-scroll-expand
      >
        <div class="scroll-expand-frame">
          <img
            :src="mapaImage"
            alt="Mapa de trabajo - Nuevo León"
            class="w-full h-full object-cover"
          />
          <!-- Potrero Chico label - right side -->
          <div v-if="mapaLabel1" class="absolute" style="right: 10%; top: 30%;">
            <p class="text-base lg:text-lg font-medium text-gray-800 text-right leading-snug max-w-xs">
              {{ mapaLabel1 }}
            </p>
          </div>
          <!-- La Huasteca label - left side -->
          <div v-if="mapaLabel2" class="absolute" style="left: 11%; top: 55%;">
            <p class="text-base lg:text-lg font-medium text-gray-800 leading-snug max-w-xs">
              {{ mapaLabel2 }}
            </p>
          </div>
          <!-- El Salto label - right bottom -->
          <div v-if="mapaLabel3" class="absolute" style="right: 10%; bottom: 16%;">
            <p class="text-base lg:text-lg font-medium text-gray-800 text-right leading-snug max-w-xs">
              {{ mapaLabel3 }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- IMG_3366 - Climbing / App Section - DESKTOP -->
    <section
      v-if="numerosBackgroundImage"
      class="climbing-app-section scroll-expand-outer hidden lg:block"
      style="height: clamp(400px, 100vw, 1313px);"
      data-scroll-expand
    >
      <div class="scroll-expand-frame">
        <img
          :src="numerosBackgroundImage"
          alt="Escalada en roca"
          class="w-full h-full object-cover"
        />
        <!-- Logo overlay - right side -->
        <div v-if="numerosLogoImage" class="absolute top-1/2 -translate-y-1/2 right-24 flex flex-col items-center gap-6">
          <img
            :src="numerosLogoImage"
            alt="Escalada Libre"
            class="w-56"
          />
        </div>
      </div>
    </section>

    <!-- Escalada Libre en Números -->
    <section class="numeros-section py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <div class="text-center mb-12 lg:mb-16" data-reveal>
          <div class="inline-block">
            <div class="w-48 h-3 bg-[#F8C52D] mx-auto mb-4"></div>
            <h2 class="text-3xl lg:text-[35px] text-gray-900" style="font-family: 'Readex Pro', sans-serif; font-weight: 500;">
              {{ st('numeros.titulo', '') }}
            </h2>
          </div>
        </div>

        <!-- Versión Móvil: Cards agrupados de 2 en 2 -->
        <div class="lg:hidden space-y-6">
          <!-- Card 1: Actividades + Árboles -->
          <div>
            <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)] mb-4">
              <div class="grid grid-cols-2 divide-x divide-gray-200">
                 <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.voluntarios }}</div>
                </div>

                <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.actividades }}</div>
                </div>
               
              </div>
            </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                  <div class="leading-snug" style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Actividades<br>realizadas</div>
                </div>

                <div class="text-center">
                  <div style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Voluntarios</div>
                </div>
              </div>
          </div>

          <!-- Card 2: Rutas + Bolts -->
          <div>
            <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)] mb-4">
              <div class="grid grid-cols-2 divide-x divide-gray-200">
                <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.rutas }}</div>
                </div>
                <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.bolts }}</div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                  <div class="leading-snug" style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Rutas<br>rehabilitadas</div>
                </div>
                <div class="text-center">
                  <div class="leading-snug" style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Bolts<br>instalados</div>
                </div>
            </div>
          </div>

          <!-- Card 3: Años de vida nueva + Árboles -->
          <div>
            <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)] mb-4">
              <div class="grid grid-cols-2 divide-x divide-gray-200">
                <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.anos_util }}</div>
                </div>
                <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.arboles }}</div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <div class="leading-snug" style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Años de vida nueva<br>a cada vía</div>
              </div>
              <div class="text-center">
                <div class="leading-snug" style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Árboles<br>sembrados</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Señalamientos + Costo reequipado -->
          <div>
            <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)] mb-4">
              <div class="grid grid-cols-2 divide-x divide-gray-200">
                <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.senalizaciones }}</div>
                </div>
                <div class="py-8 px-6 text-center">
                  <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.costo_reequipado }}</div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <div class="leading-snug" style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Señalamientos<br>instalados</div>
              </div>
              <div class="text-center">
                <div class="leading-snug" style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;">Costo individual invertido<br>por ruta</div>
              </div>
            </div>
          </div>

          <!-- Card 5: Monto total invertido (solo) -->
          <div>
            <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)] mb-4">
              <div class="py-8 px-6 text-center">
                <div class="text-[#6A6867] leading-none" style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 2rem;">{{ statDisplayValues.monto_invertido }}</div>
              </div>
            </div>
            <div class="text-center">
              <div style="color: #585858; -webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: #585858; font-family: 'Chronicle Display', serif; font-size: 1.125rem; font-style: normal; font-weight: 325;"><strong style="font-weight: bold; font-size: 23px; font-family: 'Inter';">+</strong>Total invertido</div>
            </div>
          </div>
        </div>

        <!-- Versión Desktop -->
        <div class="hidden lg:block" data-reveal data-reveal-delay="100">
          <!-- Row 1: 5 stats -->
          <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)] mb-4">
            <div class="grid grid-cols-5 divide-x divide-gray-200">


              <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.voluntarios }}</div>
                <div class="text-[18px] text-[#585858]" style="font-family: 'Bodoni Moda', serif;">Voluntarios</div>
              </div>

              <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.actividades }}</div>
                <div class="text-[18px] text-[#585858] leading-snug" style="font-family: 'Bodoni Moda', serif;">Actividades<br>realizadas</div>
              </div>
             
              <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.rutas }}</div>
                <div class="text-[18px] text-[#585858] leading-snug" style="font-family: 'Bodoni Moda', serif;">Rutas<br>rehabilitadas</div>
              </div>
              <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.bolts }}</div>
                <div class="text-[18px] text-[#585858] leading-snug" style="font-family: 'Bodoni Moda', serif;">Bolts<br>instalados</div>
              </div>

               <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.anos_util }}</div>
                <div class="text-[18px] text-[#585858] leading-snug" style="font-family: 'Bodoni Moda', serif;">Años de vida nueva<br>a cada vía</div>
              </div>
              
            </div>
          </div>

          <!-- Row 2: 4 stats -->
          <div class="bg-white rounded-xl shadow-[0px_0px_10.9px_4px_rgba(0,0,0,0.07)]">
            <div class="grid grid-cols-4 divide-x divide-gray-200">
            
               <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.arboles }}</div>
                <div class="text-[18px] text-[#585858] leading-snug" style="font-family: 'Bodoni Moda', serif;">Árboles<br>sembrados</div>
              </div>


                <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.senalizaciones }}</div>
                <div class="text-[18px] text-[#585858] leading-snug" style="font-family: 'Bodoni Moda', serif;">Señalamientos<br>instalados</div>
              </div>
            
             
              <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.costo_reequipado }}</div>
                <div class="text-[18px] text-[#585858] leading-snug" style="font-family: 'Bodoni Moda', serif;">Costo individual invertido<br>por ruta</div>
              </div>
              <div class="p-8 text-center">
                <div class="text-[50px] text-[#6A6867] leading-none mb-3" style="font-family: 'Poppins', sans-serif; font-weight: 600;">{{ statDisplayValues.monto_invertido }}</div>
                <div class="text-[18px] text-[#585858]" style="font-family: 'Bodoni Moda', serif;"><strong style="font-weight: bold; font-size: 23px; font-family: 'Inter';">+</strong>Total invertido</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo nos puedes apoyar -->
    <section class="apoyo-section py-16 lg:py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center" data-reveal>
        <h2 class="text-3xl lg:text-[55px] leading-tight mb-4 text-center" style="font-family: 'Readex Pro', sans-serif; font-weight: 500; color: #000;">
          {{ apoyarSliderSection?.heading ?? '' }}
        </h2>
        <p class="text-[30px] text-[#6A6867] text-center" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;">
          {{ apoyarSliderSection?.subheading ?? '' }}
        </p>
      </div>

      <!-- Carousel counter -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-center">
        <div class="flex items-center gap-6">
          <button class="apoyo-prev flex items-center justify-center">
            <img src="/images/arrow.svg" alt="" class="w-[36px] h-auto rotate-180" />
          </button>
          <span class="text-[#6A6867] text-[25px] font-medium tracking-wide">
            {{ String(apoyarCurrent).padStart(2, '0') }} / {{ String(apoyarTotal).padStart(2, '0') }}
          </span>
          <button class="apoyo-next flex items-center justify-center">
            <img src="/images/arrow.svg" alt="" class="w-[36px] h-auto" />
          </button>
        </div>
      </div>

      <!-- Swiper carousel -->
      <Swiper
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="0"
        :navigation="{
          prevEl: '.apoyo-prev',
          nextEl: '.apoyo-next',
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        @slideChange="onApoyarSlideChange"
        class="apoyo-swiper w-full"
      >
        <!-- Slides dinámicos desde CMS -->
        <SwiperSlide v-for="(method, idx) in apoyarMethods" :key="method.id">
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" style="max-width: 960px; margin: 0 auto;">
            <div class="flex-shrink-0">
              <div class="w-64 h-64 lg:w-[383px] lg:h-[383px] rounded-full overflow-hidden bg-gray-200">
                <img
                  v-if="method.image"
                  :src="method.image"
                  :alt="method.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-1 text-center">
              <h3 class="text-2xl lg:text-[28px] text-[#000000] mb-4" style="font-family: 'Readex Pro', sans-serif; font-weight: 700;">{{ idx + 1 }}. {{ method.title }}</h3>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-if="method.body" class="text-base lg:text-lg text-[#6A6867] mb-8 leading-relaxed max-w-sm mx-auto [&>p]:mb-0" style="font-family: 'Readex Pro', sans-serif; font-weight: 400;" v-html="method.body"></div>
              <a
                v-if="method.settings?.button_url"
                :href="method.settings.button_url"
                class="inline-block px-8 py-3 rounded-full bg-[#F8C52D] text-black font-medium transition-colors duration-200 hover:bg-black hover:text-[#F8C52D]"
                style="font-family: 'Readex Pro', sans-serif;"
              >
                {{ method.settings?.button_label ?? 'Ver más' }}
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>

    <!-- Nuestro Team -->
    <section class="team-section py-16 lg:py-24 bg-white">
      <div class="px-4 sm:px-6 lg:px-[6rem] 3xl:px-0 max-w-[1225px] mx-auto">
        <!-- Header -->
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-4">
          <h2 class="text-[1.5625rem] lg:text-[1.875rem] text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-style: normal; font-weight: 500;">Nuestro team</h2>
          <NuxtLink
            :to="teamLinkUrl"
            class="inline-flex items-center text-[#F8C52D] hover:opacity-80 transition-opacity text-[0.75rem]"
            style="font-family: 'Inter', sans-serif; font-style: normal; font-weight: 700; line-height: normal;"
          >
            CONOCE TODO NUESTRO TEAM
            <img src="/images/flecha-home-team.svg" alt="" class="w-4 h-4 ml-1" />
          </NuxtLink>
        </div>

        <!-- Team cards -->
        <div class="grid md:grid-cols-2">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="border border-[#6A6867] p-6 flex items-start gap-6"
          >
            <div class="flex-shrink-0 w-[95px] h-[95px] lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-200">
              <img
                v-if="member.photo?.url"
                :src="member.photo.url"
                :alt="member.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1" style="font-family: 'Readex Pro', sans-serif; color: #6A6867;">
              <h3 class="text-xl lg:text-[25px] mb-1" style="font-family: 'Readex Pro', sans-serif; font-weight: 700;">{{ member.name }}</h3>
              <p class="mb-3" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 0.75rem; font-style: normal; font-weight: 600;">{{ member.role ?? '' }}</p>
              <p class="leading-relaxed" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 600;">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter + Product Cards -->
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter :button-url="graciasButtonUrl" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted, type Ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { BlogPost, Sponsor, SponsorPlacement, PageSection, Page, SettingsMap, SupportMethod, Member, MemberGroup } from '~/types/api'

useSeoMeta({
  title: 'Escalada Libre A.C.',
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
  { data: apoyarCampaign },
  { data: memberGroupsData },
] = await Promise.all([
  useAsyncData('page-inicio', () => api.pages.getBySlug('inicio').catch(() => null)),
  useAsyncData('blog-home', () => api.blog.getAll({ per_page: 3 }).catch(() => ({ data: [] }))),
  useAsyncData('sponsors-home', () => api.sponsors.getAll().catch(() => [] as Sponsor[])),
  useAsyncData('settings-home', () => api.settings.getAll().catch(() => ({} as SettingsMap))),
  useAsyncData('page-nosotros', () => api.pages.getBySlug('nosotros').catch(() => null)),
  useAsyncData('otros-patrocinadores', () => api.sponsorPlacements.getAll({ placement: 'otros_patrocinadores' }).catch(() => [] as SponsorPlacement[])),
  useAsyncData('home-tiles', () => api.sponsorPlacements.getAll({ placement: 'home_tiles' }).catch(() => [] as SponsorPlacement[])),
  useAsyncData('logo-row', () => api.sponsorPlacements.getAll({ placement: 'logo_row' }).catch(() => [] as SponsorPlacement[])),
  useAsyncData('apoyo-campaign', () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null)),
  useAsyncData('member-groups', () => api.memberGroups.getAll().catch(() => ({ data: [] as MemberGroup[] }))),
])

// CMS section helper
const sec = (key: string, pg: Ref<Page | null> | null = page) =>
  pg?.value?.sections?.find((s: PageSection) => s.settings?.key === key)

// Hero
const heroTitle = computed(() =>
  sec('hero')?.heading ?? '')
const heroLabel = computed(() =>
  sec('hero')?.subheading ?? '')
const heroImage = computed(() =>
  sec('hero')?.featured_media?.url
  ?? (sec('hero')?.settings?.image as string)
  ?? '')
const heroImageMobile = computed(() =>
  sec('hero')?.mobile_image?.url ?? heroImage.value)
const heroLocation = computed(() =>
  (sec('hero')?.settings?.location as string) ?? '')
const heroLocationHtml = computed(() => {
  const loc = heroLocation.value
  const keywords = ['Zaragoza', 'González', 'Gonzalez']
  for (const kw of keywords) {
    const idx = loc.indexOf(kw)
    if (idx !== -1) {
      const before = loc.slice(0, idx + kw.length)
      const after = loc.slice(idx + kw.length).replace(/^[\s,]+/, '')
      return before + '<br>' + after
    }
  }
  return loc
})
const heroLocationMobile = computed(() =>
  (sec('hero')?.settings?.location_movil as string) ?? '')

// Intro text + parallax
const introText = computed(() =>
  sec('intro')?.body ?? '')
const parallaxSkyImage = computed(() =>
  (sec('intro')?.settings?.sky_image as string) ?? '')
const parallaxMountainImage = computed(() =>
  sec('intro')?.featured_media?.url
  ?? (sec('intro')?.settings?.mountain_image as string)
  ?? '')
const parallaxMountainImageMobile = computed(() =>
  sec('intro')?.mobile_image?.url ?? null)
const parallaxLocation = computed(() =>
  (sec('intro')?.settings?.location as string) ?? '')

// Conservation
const quienesHeading = computed(() =>
  sec('quienes-apoyan')?.heading ?? 'Quienes nos apoyan')
const quienesBody = computed(() =>
  sec('quienes-apoyan')?.body ?? '')

const conservacionTitle = computed(() =>
  sec('conservacion')?.heading ?? '')
const conservacionBody = computed(() =>
  sec('conservacion')?.body ?? '')
const conservacionImage = computed(() =>
  sec('conservacion')?.featured_media?.url
  ?? (sec('conservacion')?.settings?.image as string)
  ?? '')
const conservacionImageMobile = computed(() =>
  sec('conservacion')?.mobile_image?.url ?? null)
const conservacionLocation = computed(() =>
  (sec('conservacion')?.settings?.location as string) ?? '')
const conservacionLocationHtml = computed(() => {
  const loc = conservacionLocation.value
  const kw = 'Zaragoza'
  const idx = loc.indexOf(kw)
  if (idx !== -1) {
    const before = loc.slice(0, idx + kw.length)
    const after = loc.slice(idx + kw.length).replace(/^[\s,]+/, '')
    return before + '<br>' + after
  }
  return loc
})

// Featured sections 01/02/03
const fallbackFeatured: never[] = []

const featuredSections = computed(() => {
  // Prioridad 1: secciones tipo 'featured' configuradas en el CMS
  const cmsSections = (page.value?.sections ?? [])
    .filter((s: PageSection) => s.type === 'featured')
    .sort((a: PageSection, b: PageSection) => (a.sort_order ?? 0) - (b.sort_order ?? 0))

  if (cmsSections.length) {
    return cmsSections.map((s: PageSection, i: number) => ({
      id: s.id,
      num: (s.settings?.number as string) ?? '',
      tag: (s.settings?.tag as string) ?? '',
      title: s.heading ?? '',
      body: s.body ?? '',
      image: s.featured_media?.url ?? null,
      link: (s.settings?.link_url as string) ?? '#',
      imagePosition: (s.settings?.image_position as string) ?? (i % 2 === 0 ? 'right' : 'left'),
    }))
  }

  // Prioridad 2: últimos posts del blog (comportamiento anterior)
  const data = blogResp.value?.data
  const posts = Array.isArray(data) ? data : []
  const featured = posts.filter((p: BlogPost) => p.is_featured)
  const pool = featured.length >= 3 ? featured : posts
  if (pool.length >= 3) {
    return pool.slice(0, 3).map((p: BlogPost, i: number) => ({
      id: `blog-${p.id ?? i}`,
      num: String(i + 1).padStart(2, '0'),
      tag: (p.category ?? 'BLOG').toUpperCase(),
      title: p.title,
      body: p.excerpt ?? '',
      image: p.featured_media?.url ?? null,
      link: `/blog/${p.slug}`,
      imagePosition: i % 2 === 0 ? 'right' : 'left',
    }))
  }
  return fallbackFeatured
})

// Sponsors — slider
const sponsorsSliderData = computed(() => {
  const sp = sponsors.value ?? []
  if (sp.length) {
    return sp
      .filter((s: Sponsor) => (s.circle_logo?.url || s.logo?.url) && s.slide_image?.url)
      .map((s: Sponsor) => ({
        id: s.id,
        name: s.name,
        slug: s.slug,
        logo: s.circle_logo?.url ?? s.logo?.url,
        slideImage: s.slide_image?.url,
        tagline: s.tagline ?? '',
      }))
  }
  return []
})

// Sponsors — top tiles (3 grandes)
const sponsorTilesData = computed(() => {
  const placements = homeTilesPlacements.value ?? []
  return placements.length ? placements : null
})

// Sponsors — fila de logos pequeños
const logoRowItems = computed(() => logoRowPlacements.value ?? [])

// Sección gracias
const graciasSection = computed(() => sec('gracias'))
const graciasTitle = computed(() => graciasSection.value?.heading ?? '')
const graciasButtonText = computed(() => (graciasSection.value?.settings?.button_text as string) ?? '')
const graciasButtonUrl = computed(() => (graciasSection.value?.settings?.button_url as string) ?? '')

// Team section
const teamLinkUrl = computed(() => st('equipo.link_url', '/nosotros'))

// Mapa
const mapaSection = computed(() => sec('mapa'))
const mapaTitle = computed(() => mapaSection.value?.heading ?? '')
const mapaImage = computed(() =>
  mapaSection.value?.featured_media?.url
  ?? (mapaSection.value?.settings?.imagen as string)
  ?? (mapaSection.value?.settings?.image as string)
  ?? '')
const mapaLabel1 = computed(() => (mapaSection.value?.settings?.label_1 as string) || null)
const mapaLabel2 = computed(() => (mapaSection.value?.settings?.label_2 as string) || null)
const mapaLabel3 = computed(() => (mapaSection.value?.settings?.label_3 as string) || null)

// Numeros section (climbing-app section)
const numerosSection = computed(() => sec('numeros'))
const numerosBackgroundImage = computed(() =>
  numerosSection.value?.featured_media?.url
  ?? st('numeros.imagen', '')
)
const numerosLogoImage = computed(() =>
  (numerosSection.value?.media?.[0] as { url?: string } | undefined)?.url ?? null
)

// Count-up animation for stats section
const numerosStarted = ref(false)
const statDisplayValues = reactive({
  actividades: '0',
  arboles: '0',
  rutas: '0',
  bolts: '0',
  senalizaciones: '0',
  voluntarios: '0',
  anos_util: '0',
  costo_reequipado: '$0',
  monto_invertido: '$0',
})

function animateCounters() {
  const duration = 1800
  const totalFrames = 60
  const statDefs: Array<{ key: keyof typeof statDisplayValues; raw: string }> = [
    { key: 'actividades', raw: st('stat.actividades', '') },
    { key: 'arboles', raw: st('stat.arboles', '') },
    { key: 'rutas', raw: st('stat.rutas', '') },
    { key: 'bolts', raw: st('stat.bolts', '') },
    { key: 'senalizaciones', raw: st('stat.senalizaciones', '') },
    { key: 'voluntarios', raw: st('stat.voluntarios', '') },
    { key: 'anos_util', raw: st('stat.anos_util', '') },
    { key: 'costo_reequipado', raw: st('stat.costo_reequipado', '') },
    { key: 'monto_invertido', raw: st('stat.monto_invertido', '') },
  ]
  statDefs.forEach(({ key, raw }) => {
    const prefix = raw.startsWith('$') ? '$' : ''
    const clean = raw.replace('$', '').replace(/,/g, '')
    const target = parseInt(clean, 10) || 0
    const useCommas = /[0-9],[0-9]/.test(raw)
    let frame = 0
    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)
      const formatted = useCommas ? current.toLocaleString('en-US') : String(current)
      statDisplayValues[key] = prefix + formatted
      if (frame >= totalFrames) {
        clearInterval(interval)
        statDisplayValues[key] = raw
      }
    }, duration / totalFrames)
  })
}

// Stats helper: tries API settings, falls back to hardcoded
const st = (key: string, fallback: string): string =>
  (settings.value as SettingsMap)?.[key] ?? fallback

// Team members from MemberGroups API
const teamMembers = computed<Member[]>(() => {
  const allMembers = memberGroupsData.value?.data?.flatMap(g => g.members) ?? []
  const featured = allMembers.filter(m => m.featured_home)
  return featured.length ? featured : allMembers.slice(0, 2)
})

// Apoyo carousel — lee el bloque type='slider' de la página inicio (CMS)
// con fallback a la campaña de apoyo si no hay slides en CMS
const apoyarSliderSection = computed(() =>
  page.value?.sections?.find((s: PageSection) => s.type === 'slider'),
)

const apoyarSlides = computed(() =>
  (apoyarSliderSection.value?.items ?? [])
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order),
)

const apoyarCampaignMethods = computed<SupportMethod[]>(() => apoyarCampaign.value?.methods ?? [])

// Si hay slides en el CMS los usamos, si no usamos la campaña (compatibilidad)
const apoyarMethods = computed(() =>
  apoyarSlides.value.length
    ? apoyarSlides.value.map(s => ({
        id: s.id,
        title: s.title ?? '',
        body: s.body ?? '',
        image: s.featured_media?.url ?? null,
        link_url: s.link_url,
        link_label: s.link_label,
        settings: { button_url: s.link_url, button_label: s.link_label },
        sort_order: s.sort_order,
      }))
    : apoyarCampaignMethods.value,
)
const apoyarTotal = computed(() => apoyarMethods.value.length || 4)
const apoyarCurrent = ref(1)
const onApoyarSlideChange = (swiper: any) => {
  apoyarCurrent.value = (swiper.realIndex % apoyarTotal.value) + 1
}

const scrollToNextSection = () => {
  const nextSection = document.querySelector('#mission')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Secciones con fondo oscuro (imagen o color oscuro)
const darkBgSections = [
  '#hero',
  '.partners-slider',
  '.conservation-section .w-full.relative',
  '.climbing-app-section',
]

const showFollowUs = ref(true)
const followUsOnLight = ref(false)

onMounted(() => {
  // Count-up para sección de números
  const numerosEl = document.querySelector('.numeros-section')
  if (numerosEl) {
    const numerosObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting && !numerosStarted.value) {
        numerosStarted.value = true
        animateCounters()
        numerosObserver.disconnect()
      }
    }, { threshold: 0.15 })
    numerosObserver.observe(numerosEl)
    onUnmounted(() => numerosObserver.disconnect())
  }

  // Ocultar cuando el slider de patrocinadores está visible
  const sliderEl = document.querySelector('.partners-slider') as Element
  if (sliderEl) {
    const sliderObserver = new IntersectionObserver(
      (entries) => { showFollowUs.value = !(entries[0]?.isIntersecting ?? false) },
      { threshold: 0.1 }
    )
    sliderObserver.observe(sliderEl)
    onUnmounted(() => sliderObserver.disconnect())
  }

  // Cambiar color según fondo: se revisa si el centro del viewport está cubierto
  // por alguna sección de fondo CLARO (listadas explícitamente)
  const LIGHT_SELECTORS = [
    '.parallax-section',
    '.conservation-section > div:first-child',
    '.otros-patrocinadores',
    '.quienes-apoyan',
    '.sponsor-tiles',
    '.sponsor-logos-row',
    '.map-section',
    '.numeros-section',
    '.apoyo-section',
    '.team-section',
    '.prefooter-cards',
  ].join(',')

  const checkBackground = () => {
    const btnCenterY = window.innerHeight / 2
    const lightEls = document.querySelectorAll(LIGHT_SELECTORS)
    let onLight = false
    lightEls.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top <= btnCenterY && rect.bottom >= btnCenterY) {
        onLight = true
      }
    })
    followUsOnLight.value = onLight
  }

  checkBackground()
  window.addEventListener('scroll', checkBackground, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', checkBackground))
})
</script>

<style scoped>
.group\/link .arrow-icon {
  transition: transform 0.3s ease;
}
.group\/link:hover .arrow-icon {
  transform: translateX(8px);
}

.hero {
  height: 100dvh;
  min-height: 500px;
  margin-top: -80px;
  padding-top: 89px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .hero {
    margin-top: -96px;
    padding-top: 160px;
  }
}

.hero-overlay {
  display: none;
}

.hero-text-block span {
  text-shadow: 0 1px 4px rgba(255, 255, 255, 0.4);
}

.hero-title {
  font-size: 2.1875rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
    padding-left: 0;
    padding-right: 0;
  }
}

:deep(.conservacion-body),
:deep(.conservacion-body *) {
  color: #6A6867 !important;
  font-family: 'Readex Pro', sans-serif !important;
  font-weight: 300 !important;
}

.hero-content {
  width: 100%;
  padding: 2rem 0;
}

.parallax-section {
  position: relative;
}

.parallax-container {
  position: relative;
}

/* Swiper Custom Styles */
:deep(.swiper-pagination-custom) {
  display: flex !important;
  gap: 8px;
  justify-content: center;
}

:deep(.swiper-pagination-custom .swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #9CA3AF;
  opacity: 0.4;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-custom .swiper-pagination-bullet-active) {
  opacity: 1;
  background: #6B7280;
  width: 40px;
  border-radius: 6px;
}

/* Apoyo swiper - hide default arrows */
:deep(.apoyo-swiper .swiper-button-prev),
:deep(.apoyo-swiper .swiper-button-next) {
  display: none;
}

@media (max-width: 1023px) {
  .hero-content {
    justify-content: flex-start;
  }
}

</style>
