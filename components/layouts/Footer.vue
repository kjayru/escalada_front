<template>
  <footer class="site-footer bg-gray-900 text-white mt-auto">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- About Section -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span class="text-gray-900 font-bold text-lg">EL</span>
            </div>
            <h3 class="text-xl font-bold">Escalada Libre</h3>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Organización dedicada a proteger, conservar y promover la escalada en México.
          </p>
        </div>
        
        <!-- Navigation Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Navegación</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="footer-link">
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/nosotros" class="footer-link">
                Nosotros
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/actividades" class="footer-link">
                Actividades
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/historia" class="footer-link">
                Historia
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/como-apoyar" class="footer-link">
                Cómo apoyar
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contacto</h4>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:info@escaladalibre.org" class="hover:text-white transition-colors">
                info@escaladalibre.org
              </a>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>México</span>
            </li>
          </ul>
        </div>
        
        <!-- Social Media -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
          <div class="flex gap-4">
            <a 
              href="#" 
              class="social-link"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="social-link"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="social-link"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="social-link"
              aria-label="YouTube"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-400 mt-4 text-sm">
            Únete a nuestra comunidad de escaladores
          </p>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Escalada Libre A.C. Todos los derechos reservados.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" class="hover:text-white transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped>
.footer-link {
  @apply text-gray-400 hover:text-white transition-colors inline-flex items-center;
}

.footer-link:hover {
  @apply translate-x-1;
  transition: all 0.2s ease;
}

.social-link {
  @apply w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-accent hover:text-gray-900 transition-all duration-300;
}

.social-link:hover {
  transform: translateY(-4px);
}
</style>
