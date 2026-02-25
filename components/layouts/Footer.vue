<template>
  <footer class="site-footer">

    <!-- Navegación con líneas divisoras -->
    <div class="bg-white">
      <div class="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Línea superior -->
        <hr class="border-t border-[#6A6867]/30" />

        <!-- Grid de navegación -->
        <div class="grid grid-cols-2 md:grid-cols-4 py-8 gap-y-3">

          <div class="flex flex-col gap-2">
            <NuxtLink to="/" class="footer-nav-link">Home</NuxtLink>
            <NuxtLink to="/nosotros" class="footer-nav-link">Nosotros</NuxtLink>
          </div>

          <div class="flex flex-col gap-2">
            <NuxtLink to="/actividades" class="footer-nav-link">Actividades</NuxtLink>
            <NuxtLink to="/historia" class="footer-nav-link">Historia</NuxtLink>
          </div>

          <div class="flex flex-col gap-2">
            <NuxtLink to="/como-apoyar" class="footer-nav-link">Cómo apoyar</NuxtLink>
            <NuxtLink to="/blog" class="footer-nav-link">Blog</NuxtLink>
          </div>

          <div class="flex flex-col gap-2">
            <NuxtLink to="/transparencia" class="footer-nav-link">Transparencia</NuxtLink>
            <NuxtLink to="/contacto" class="footer-nav-link">Contacto</NuxtLink>
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
</script>

<style scoped>
.footer-nav-link {
  @apply text-[#6A6867] text-base leading-[35px] hover:text-[#F8C52D] transition-colors;
}

.footer-nav-link.router-link-active {
  @apply text-[#F8C52D];
}
</style>
