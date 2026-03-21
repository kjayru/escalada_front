<template>
  <div class="como-apoyar-page">

    <!-- Hero Banner -->
    <section class="hero-banner relative overflow-hidden" style="height: 1080px;">
      <img
        src="/images/n-1.png"
        alt="Cómo apoyar - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </section>

    <!-- Intro: ¿Por qué donar? -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-[860px] mx-auto px-8 lg:px-12">
        <h1 class="text-3xl lg:text-[40px] font-normal text-[#6A6867] leading-tight mb-8">
          {{ mainCampaign?.name ?? '¿Por qué donar? Porque creemos en la montaña y en su comunidad' }}
        </h1>
        <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed">
          {{ mainCampaign?.description ?? 'Las donaciones hacen posible que la escalada en Costa Rica siga creciendo de forma segura, responsable y con respeto al entorno. Cada aporte, grande o pequeño, es una forma de cuidar lo que amamos.' }}
        </p>
      </div>
    </section>

    <!-- Cómo nos puedes apoyar -->
    <section class="pb-16 lg:pb-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section header -->
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="text-3xl lg:text-[40px] font-normal text-[#6A6867]">
            Cómo nos puedes apoyar
          </h2>
          <p class="text-base lg:text-lg text-[#6A6867] mt-3">
            {{ campaignSubtitle }}
          </p>
        </div>

        <!-- Method rows -->
        <div class="max-w-[1400px] mx-auto border-t border-gray-200">

          <!-- Row 1: PayPal -->
          <div class="flex items-stretch border-b border-gray-200">
            <div class="w-10 lg:w-14 flex items-center justify-center flex-shrink-0">
              <span
                class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6A6867]"
                style="writing-mode: vertical-rl; transform: rotate(180deg);"
              >Paypal</span>
            </div>
            <div class="flex flex-col lg:flex-row flex-1">
              <div class="lg:w-1/2 overflow-hidden bg-[#f5f5f0]" style="min-height: 400px;">
                <img
                  :src="paypalMethod?.image ?? '/images/patrocinador1.png'"
                  :alt="paypalMethod?.title ?? 'Donar por PayPal'"
                  class="w-full h-full object-cover"
                  style="min-height: 400px;"
                />
              </div>
              <div class="lg:w-1/2 flex flex-col justify-center px-10 lg:px-16 py-12 bg-white">
                <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] mb-4">{{ paypalMethod?.title ?? 'Por paypal' }}</h3>
                <p class="text-base text-[#6A6867] leading-relaxed mb-8 max-w-[480px]">
                  {{ paypalMethod?.body ?? 'Desde nuestro sitio web, puedes realizar tu donación por medio de Paypal.' }}
                </p>
                <div>
                  <NuxtLink
                    to="/como-apoyar/paypal"
                    class="inline-block px-8 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm hover:bg-[#e0b525] transition-colors tracking-wider"
                  >
                    DONAR AHORA
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 2: Transferencia -->
          <div class="flex items-stretch border-b border-gray-200">
            <div class="w-10 lg:w-14 flex items-center justify-center flex-shrink-0">
              <span
                class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6A6867]"
                style="writing-mode: vertical-rl; transform: rotate(180deg);"
              >Transferencia</span>
            </div>
            <div class="flex flex-col lg:flex-row flex-1">
              <div class="lg:w-1/2 overflow-hidden bg-[#f5f5f0]" style="min-height: 400px;">
                <img
                  :src="bankMethod?.image ?? '/images/patrocinador2.png'"
                  :alt="bankMethod?.title ?? 'Transferencia interbancaria'"
                  class="w-full h-full object-cover"
                  style="min-height: 400px;"
                />
              </div>
              <div class="lg:w-1/2 flex flex-col justify-center px-10 lg:px-16 py-12 bg-white">
                <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] mb-4">{{ bankMethod?.title ?? 'Transferencia interbancaria' }}</h3>
                <p class="text-base text-[#6A6867] leading-relaxed mb-8 max-w-[480px]">
                  {{ bankMethod?.body ?? 'Puedes realizar transferencia con los datos que te compartimos.' }}
                </p>
                <div>
                  <NuxtLink
                    to="/como-apoyar/transferencia"
                    class="inline-block px-8 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm hover:bg-[#e0b525] transition-colors tracking-wider"
                  >
                    TRANSFERIR AHORA
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 3: Gyms -->
          <div class="flex items-stretch border-b border-gray-200">
            <div class="w-10 lg:w-14 flex items-center justify-center flex-shrink-0">
              <span
                class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6A6867]"
                style="writing-mode: vertical-rl; transform: rotate(180deg);"
              >Gyms</span>
            </div>
            <div class="flex flex-col lg:flex-row flex-1">
              <div class="lg:w-1/2 overflow-hidden bg-[#f5f5f0]" style="min-height: 400px;">
                <img
                  :src="gymMethod?.image ?? '/images/img-20200308-wa-00051.png'"
                  :alt="gymMethod?.title ?? 'Donar en gyms'"
                  class="w-full h-full object-cover"
                  style="min-height: 400px;"
                />
              </div>
              <div class="lg:w-1/2 flex flex-col justify-center px-10 lg:px-16 py-12 bg-white">
                <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] mb-4">{{ gymMethod?.title ?? 'Gyms' }}</h3>
                <p class="text-base text-[#6A6867] leading-relaxed mb-8 max-w-[480px]">
                  {{ gymMethod?.body ?? 'Puedes acudir a cualquiera de los gimnasios que nos apoyan.' }}
                </p>
                <div>
                  <NuxtLink
                    to="/como-apoyar/gyms"
                    class="px-8 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm hover:bg-[#e0b525] transition-colors tracking-wider inline-block"
                  >
                    VER LISTADO DE GYMS
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 4: Productos -->
          <div class="flex items-stretch border-b border-gray-200">
            <div class="w-10 lg:w-14 flex items-center justify-center flex-shrink-0">
              <span
                class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6A6867]"
                style="writing-mode: vertical-rl; transform: rotate(180deg);"
              >Productos</span>
            </div>
            <div class="flex flex-col lg:flex-row flex-1">
              <div class="lg:w-1/2 overflow-hidden bg-[#f5f5f0]" style="min-height: 400px;">
                <img
                  :src="productMethod?.image ?? '/images/pico-norte-1.png'"
                  :alt="productMethod?.title ?? 'Comprar productos Escalada Libre'"
                  class="w-full h-full object-cover"
                  style="min-height: 400px;"
                />
              </div>
              <div class="lg:w-1/2 flex flex-col justify-center px-10 lg:px-16 py-12 bg-white">
                <h3 class="text-xl lg:text-2xl font-medium text-[#6A6867] mb-4">{{ productMethod?.title ?? 'Comprando nuestros productos' }}</h3>
                <p class="text-base text-[#6A6867] leading-relaxed mb-8 max-w-[480px]">
                  {{ productMethod?.body ?? 'También nos puedes apoyar comprando productos de Escalada Libre.' }}
                </p>
                <div>
                  <NuxtLink
                    to="/como-apoyar/productos"
                    class="inline-block px-8 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm hover:bg-[#e0b525] transition-colors tracking-wider"
                  >
                    VER PRODUCTOS
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ¿Quieres realizar un proyecto? -->
    <section class="bg-white">
      <div class="flex flex-col lg:flex-row" style="min-height: 789px;">
        <div class="lg:w-1/2 overflow-hidden" style="min-height: 500px;">
          <img
            src="/images/huasteca-41.png"
            alt="Realizar un proyecto con Escalada Libre"
            class="w-full h-full object-cover"
            style="min-height: 500px;"
          />
        </div>
        <div class="lg:w-1/2 flex flex-col justify-center px-12 lg:px-24 py-16 bg-white">
          <h2 class="text-2xl lg:text-[38px] font-normal text-[#6A6867] leading-tight mb-8">
            ¿Quieres realizar un proyecto?
          </h2>
          <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-4 max-w-[500px]">
            ¿Tienes una iniciativa en mente con la cuál quieres apoyar el trabajo de Escalada Libre?
          </p>
          <p class="text-base lg:text-lg text-[#6A6867] leading-relaxed mb-10 max-w-[500px]">
            ¡Ponte en contacto con nosotros y echamos la maquinaria a andar!
          </p>
          <div>
            <NuxtLink
              to="/contacto"
              class="inline-block px-8 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm hover:bg-[#e0b525] transition-colors tracking-wider"
            >
              CONTÁCTANOS
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Únete al equipo -->
    <section class="relative overflow-hidden" style="min-height: 759px;">
      <img
        src="/images/slide1.png"
        alt="Únete al equipo Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div
        class="relative z-10 flex flex-col justify-center px-12 lg:px-24 py-24"
        style="min-height: 759px;"
      >
        <h2 class="text-3xl lg:text-[48px] font-medium text-white leading-tight mb-6 max-w-[460px]">
          Únete al equipo
        </h2>
        <p class="text-base lg:text-lg text-white/90 leading-relaxed mb-10 max-w-[400px]">
          Súmate al equipo Escalada Libre y forma parte del cambio que queremos ver en nuestras montañas.
        </p>
        <div>
          <NuxtLink
            to="/contacto"
            class="inline-block px-8 py-3 bg-[#F8C52D] text-gray-900 font-semibold text-sm hover:bg-[#e0b525] transition-colors tracking-wider"
          >
            UNIRSE
          </NuxtLink>
        </div>
      </div>
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
import { computed } from 'vue'
import type { SupportMethod } from '~/types/api'

const api = useApi()

const { data: campaign } = await useAsyncData('support-campaign-como-apoyar',
  () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null)
)

const methods = computed(() => campaign.value?.methods ?? [])

const methodByType = (type: string): SupportMethod | undefined =>
  methods.value.find((m) => m.type === type)

const paypalMethod  = computed(() => methodByType('paypal'))
const bankMethod    = computed(() => methodByType('transfer'))
const gymMethod     = computed(() => methodByType('gyms'))
const productMethod = computed(() => methodByType('products'))

const mainCampaign = computed(() => campaign.value)

const campaignSubtitle = computed(() =>
  methods.value.length
    ? `${methods.value.length} maneras de apoyarnos`
    : 'Existen cuatro maneras en las que puedes apoyarnos:'
)

useSeoMeta({
  title: 'Cómo apoyar - Escalada Libre',
  description: 'Descubre cómo puedes apoyar a Escalada Libre Costa Rica a través de donaciones, transferencias, gyms o comprando nuestros productos.',
})
</script>
