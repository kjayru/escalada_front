<template>
  <header class="site-header fixed top-0 left-0 right-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between py-4 lg:py-6">
        <!-- Logo -->
        <NuxtLink to="/" class="logo flex items-center gap-3 group">
          <img src="/images/logoescalada.svg" alt="Escalada Libre A.C." class="h-12 w-auto" />
         
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <ul class="nav-menu hidden lg:flex items-center gap-8">
          <li v-for="item in mainMenuItems" :key="item.id">
            <a
              v-if="isExternalUrl(item.url)"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link"
            >{{ item.label }}</a>
            <NuxtLink v-else :to="item.url" class="nav-link">{{ item.label }}</NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/como-apoyar" 
              class="inline-flex items-center px-6 py-2 bg-[#F5C400] text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-colors"
            >
              Donar
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 rounded"
          :aria-label="mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <Transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="lg:hidden pb-4 border-t border-gray-200 mt-4">
          <ul class="space-y-2 pt-4">
            <li v-for="item in mainMenuItems" :key="item.id">
              <a
                v-if="isExternalUrl(item.url)"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mobile-nav-link"
                @click="mobileMenuOpen = false"
              >{{ item.label }}</a>
              <NuxtLink
                v-else
                :to="item.url"
                class="mobile-nav-link"
                @click="mobileMenuOpen = false"
              >{{ item.label }}</NuxtLink>
            </li>
            <li class="pt-2">
              <NuxtLink 
                to="/como-apoyar" 
                class="block w-full px-4 py-3 bg-[#F5C400] text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-colors text-center"
                @click="mobileMenuOpen = false"
              >
                Donar
              </NuxtLink>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
  
  <!-- Header Spacer -->
  <div class="h-20 lg:h-24"></div>
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
</script>

<style scoped>
.site-header {
  @apply bg-white/95 backdrop-blur-md shadow-sm;
  transition: all 0.3s ease;
}

.nav-link {
  @apply text-gray-700 hover:text-gray-900 transition-colors font-medium;
  font-size: 15px;
}

.nav-link.router-link-active {
  @apply text-gray-900 font-semibold;
}

.mobile-nav-link {
  @apply block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium;
}

.mobile-nav-link.router-link-active {
  @apply bg-gray-100 text-gray-900 font-semibold;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
