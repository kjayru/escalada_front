<template>
  <footer class="site-footer">

    <!-- Navegación con líneas divisoras -->
    <div class="bg-white">
      <div class="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Línea superior -->
        <hr class="border-t border-[#6A6867]/30" />

        <!-- Grid de navegación -->
        <div class="grid grid-cols-2 md:grid-cols-4 py-8 gap-y-3">

          <div v-for="(col, i) in footerColumns" :key="i" class="flex flex-col gap-2">
            <template v-for="item in col" :key="item.id">
              <a v-if="isExternal(item.url)" :href="item.url" target="_blank" rel="noopener noreferrer" class="footer-nav-link">{{ item.label }}</a>
              <NuxtLink v-else :to="item.url" class="footer-nav-link">{{ item.label }}</NuxtLink>
            </template>
          </div>

        </div>

        <!-- Línea inferior -->
        <hr class="border-t border-[#6A6867]/30" />

      </div>
    </div>

    <!-- Imagen de fondo montaña -->
    <div class="w-full overflow-hidden" style="height: 450px;">
      <img
        src="/images/back_footer.png"
        alt="Sierra Madre Occidental"
        class="w-full h-full object-cover object-top"
      />
    </div>

  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MenuItem } from '~/types/api'

const api = useApi()
const { data: footerMenu } = await useAsyncData('footer-menu', () =>
  api.menus.getByName('footer').catch(() => null)
)

const fallbackItems: MenuItem[] = [
  { id: 1, label: 'Home',          url: '/',             sort_order: 1, children: [] },
  { id: 2, label: 'Actividades',   url: '/actividades',  sort_order: 2, children: [] },
  { id: 3, label: 'Cómo apoyar',   url: '/como-apoyar',  sort_order: 3, children: [] },
  { id: 4, label: 'Transparencia', url: '/transparencia',sort_order: 4, children: [] },
  { id: 5, label: 'Nosotros',      url: '/nosotros',     sort_order: 5, children: [] },
  { id: 6, label: 'Historia',      url: '/historia',     sort_order: 6, children: [] },
  { id: 7, label: 'Blog',          url: '/blog',         sort_order: 7, children: [] },
  { id: 8, label: 'Contacto',      url: '/contacto',     sort_order: 8, children: [] },
]

const footerItems = computed<MenuItem[]>(() =>
  footerMenu.value?.items?.length ? footerMenu.value.items : fallbackItems
)

// Dividir en 4 columnas (distribuidas uniformemente)
const footerColumns = computed(() => {
  const items = footerItems.value
  const cols = 4
  const perCol = Math.ceil(items.length / cols)
  const result: MenuItem[][] = []
  for (let i = 0; i < items.length; i += perCol) {
    result.push(items.slice(i, i + perCol))
  }
  return result
})

const isExternal = (url: string) => url.startsWith('http')
</script>

<style scoped>
.footer-nav-link {
  @apply text-[#6A6867] text-base leading-[35px] hover:text-[#F8C52D] transition-colors;
}

.footer-nav-link.router-link-active {
  @apply text-[#F8C52D];
}
</style>
