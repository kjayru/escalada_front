<template>
  <header class="site-header fixed top-0 left-0 right-0 z-40">
    <div class="container mx-auto px-5">
      <nav class="flex items-center justify-between py-3 lg:py-6">

        <!-- Desktop: Logo izquierda -->
        <NuxtLink to="/" class="logo hidden lg:flex items-center gap-3 group">
          <img src="/images/logoescalada.svg" alt="Escalada Libre A.C." class="h-12 w-auto" />
        </NuxtLink>

        <!-- Mobile: Botón hamburguesa (izquierda) -->
        <button
          @click="mobileMenuOpen = true"
          class="lg:hidden flex items-center justify-center w-10 h-10 text-gray-800"
          aria-label="Abrir menú"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Mobile: Logo (centro) -->
        <NuxtLink to="/" class="mobile-logo lg:hidden flex items-center gap-2">
          <img src="/images/logoescalada.svg" alt="Escalada Libre A.C." class="h-10 w-auto" />
        </NuxtLink>

        <!-- Desktop: Navegación -->
        <ul class="nav-menu hidden lg:flex items-center gap-8">
          <li v-for="item in mainMenuItems" :key="item.id">
            <a
              v-if="isExternalUrl(item.url)"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link"
            >{{ item.label }}</a>
            <NuxtLink v-else :to="item.url" class="nav-link" :class="{ 'router-link-active': isParentActive(item.url) }">{{ item.label }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/como-apoyar"
              class="btn-donar inline-flex items-center px-6 py-2 rounded-full font-semibold"
            >
              Donar
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile: Botón Donar (derecha) -->
        <NuxtLink
          to="/como-apoyar"
          class="btn-donar lg:hidden inline-flex items-center px-5 py-2 rounded-full font-semibold text-sm"
        >
          Donar
        </NuxtLink>

      </nav>
    </div>
  </header>

  <!-- Header Spacer -->
  <div class="h-16 lg:h-24"></div>

  <!-- Mobile Menu Overlay (full-screen) -->
  <Transition name="menu-overlay">
    <div
      v-if="mobileMenuOpen"
      class="mobile-overlay fixed inset-0 z-50 bg-white flex flex-col"
    >
      <!-- Botón cerrar (X) arriba izquierda -->
      <button
        @click="mobileMenuOpen = false"
        class="close-btn absolute top-5 left-5 flex items-center justify-center w-10 h-10 text-gray-800"
        aria-label="Cerrar menú"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Logo centrado -->
      <div class="flex justify-center items-center pt-14 pb-6">
        <NuxtLink to="/" @click="mobileMenuOpen = false" class="flex items-center gap-3">
          <img src="/images/logoescalada.svg" alt="Escalada Libre A.C." class="h-14 w-auto" />
        </NuxtLink>
      </div>

      <!-- Items de navegación con separadores -->
      <nav class="flex-1 overflow-y-auto px-6">
        <ul>
          <li
            v-for="item in mainMenuItems"
            :key="item.id"
            class="border-b border-gray-200"
          >
            <a
              v-if="isExternalUrl(item.url)"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="menu-item-link"
              @click="mobileMenuOpen = false"
            >{{ item.label }}</a>
            <NuxtLink
              v-else
              :to="item.url"
              class="menu-item-link"
              :class="{ 'router-link-active': isParentActive(item.url) }"
              @click="mobileMenuOpen = false"
            >{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Botón Donar abajo -->
      <div class="px-6 py-8">
        <NuxtLink
          to="/como-apoyar"
          class="btn-donar block w-full py-4 rounded-full font-semibold text-center text-base"
          @click="mobileMenuOpen = false"
        >
          Donar
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { MenuItem } from '~/types/api'

const mobileMenuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { mobileMenuOpen.value = false })

const api = useApi()
const { data: menu } = await useAsyncData('main-menu', () =>
  api.menus.getByName('main').catch(() => null)
)

const fallbackItems: MenuItem[] = [
  { id: 1, label: 'Inicio', url: '/', sort_order: 1, children: [] },
  { id: 2, label: 'Nosotros', url: '/nosotros', sort_order: 2, children: [] },
  { id: 3, label: 'Actividades', url: '/actividades', sort_order: 3, children: [] },
  { id: 4, label: 'Historia', url: '/historia', sort_order: 4, children: [] },
  { id: 5, label: 'Blog', url: '/blog', sort_order: 5, children: [] },
  { id: 6, label: 'Transparencia', url: '/transparencia', sort_order: 6, children: [] },
  { id: 7, label: 'Contacto', url: '/contacto', sort_order: 7, children: [] },
]

const mainMenuItems = computed<MenuItem[]>(() =>
  menu.value?.items?.length ? menu.value.items : fallbackItems
)

const isExternalUrl = (url: string) => url.startsWith('http')

// Marca el item como activo si la ruta actual empieza por la URL del item
// (excluyendo '/' para evitar que Inicio siempre esté activo)
const isParentActive = (url: string) => {
  if (url === '/') return false
  return route.path.startsWith(url)
}
</script>

<style scoped>
.site-header {
  @apply bg-white/95 backdrop-blur-md shadow-sm;
  transition: all 0.3s ease;
}

/* ── Desktop nav links ── */
.nav-link {
  position: relative;
  color: #6A6867;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #F8C52D;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #3a3837;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

/* ── Botón Donar (compartido header + overlay) ── */
.btn-donar {
  background-color: #F5C400;
  color: #1a1a1a;
  border: 2px solid #F5C400;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-donar:hover {
  background-color: #1a1a1a;
  color: #F5C400;
}

/* ── Overlay items ── */
.menu-item-link {
  display: block;
  padding: 18px 4px;
  text-align: center;
  color: #2c2b2a;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;
  transition: color 0.2s ease;
  letter-spacing: 0.01em;
}

.menu-item-link:hover,
.menu-item-link.router-link-active {
  color: #F5C400;
}

/* ── Transición overlay ── */
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.menu-overlay-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.menu-overlay-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
