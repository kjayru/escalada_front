<template>
  <div class="contacto-page">

    <!-- Hero Banner -->
    <section class="relative overflow-hidden h-[360px] lg:h-auto" style="min-height: unset;">
      <img
        :src="heroBannerUrl ?? '/images/n-1.png'"
        :alt="heroBannerAlt"
        class="absolute inset-0 w-full h-full object-cover"
        :class="{ grayscale: !heroBannerUrl }"
      />
      <div class="relative z-10 h-[360px] lg:h-auto lg:min-h-[1080px]"></div>
    </section>

    <!-- Formulario de contacto -->
    <section class="bg-white py-16 lg:py-20">
      <div class="max-w-[830px] mx-auto px-4 sm:px-6">

        <!-- Título -->
        <h1 class="leading-tight mb-6" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-style: normal; font-weight: 500;">
          {{ contactSection?.heading ?? '¡Contáctanos!' }}
        </h1>

        <!-- Descripción -->
        <div
          v-if="contactSection?.body"
          class="leading-relaxed mb-12 prose max-w-none"
          style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;"
          v-html="contactSection.body"
        />
        <p v-else class="leading-relaxed mb-12" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">
          En Escalada Libre México A.C. queremos escucharte.
        </p>

        <!-- Mensaje de éxito -->
        <div
          v-if="enviado"
          class="rounded-xl bg-green-50 border border-green-200 px-8 py-10 text-center"
        >
          <p class="text-xl font-medium text-green-700 mb-2">¡Mensaje enviado!</p>
          <p class="text-base text-green-600">Gracias por contactarnos. Te responderemos a la brevedad.</p>
          <button
            type="button"
            class="mt-6 px-8 py-3 bg-[#F8C52D] text-[#6A6867] font-bold text-sm tracking-widest rounded-full hover:bg-[#e0b525] transition-colors"
            @click="enviado = false"
          >ENVIAR OTRO MENSAJE</button>
        </div>

        <!-- Formulario -->
        <form v-else @submit.prevent="enviarFormulario" class="flex flex-col gap-8">

          <!-- Nombre -->
          <div class="flex flex-col gap-2">
            <label class="text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;">Nombre*</label>
            <input
              v-model="form.nombre"
              type="text"
              required
              class="w-full h-[50px] lg:h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
              style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
            />
          </div>

          <!-- Apellido -->
          <div class="flex flex-col gap-2">
            <label class="text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;">Apellido*</label>
            <input
              v-model="form.apellido"
              type="text"
              required
              class="w-full h-[50px] lg:h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
              style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
            />
          </div>

          <!-- Correo electrónico -->
          <div class="flex flex-col gap-2">
            <label class="text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;">Correo electrónico*</label>
            <input
              v-model="form.correo"
              type="email"
              required
              class="w-full h-[50px] lg:h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
              style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
            />
          </div>

          <!-- Teléfono -->
          <div class="flex flex-col gap-2">
            <label class="text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;">Teléfono</label>
            <input
              v-model="form.telefono"
              type="tel"
              class="w-full h-[50px] lg:h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
              style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
            />
          </div>

          <!-- Mensaje -->
          <div class="flex flex-col gap-2">
            <label class="text-[#6A6867]" style="font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;">Mensaje</label>
            <textarea
              v-model="form.mensaje"
              rows="8"
              class="w-full px-5 py-4 border border-[#6a6867] rounded-[10px] text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors resize-none"
              style="height: 289px; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 300;"
            ></textarea>
          </div>

          <!-- Campos obligatorios + Botón -->
          <div class="flex flex-col gap-2">
            <p class="text-sm font-medium text-[#6A6867] text-right">*Campos obligatorios</p>
            <p v-if="errorMensaje" class="text-sm text-red-600 text-right">{{ errorMensaje }}</p>
            <button
              type="submit"
              :disabled="cargando"
              class="w-full h-[45px] bg-[#F8C52D] text-[#6A6867] font-bold rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#6A6867] hover:text-[#F8C52D]"
              style="font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; text-align: center;"
            >
              {{ cargando ? 'ENVIANDO...' : 'ENVIAR' }}
            </button>
          </div>

        </form>

      </div>
    </section>

    <!-- Newsletter + Product Cards -->
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Page } from '~/types/api'

useSeoMeta({
  title: 'Contacto - Escalada Libre',
  description: 'Contáctanos en Escalada Libre México A.C. Dudas, propuestas, colaboraciones y más.',
})

const api = useApi()

const { data: pageData } = await useAsyncData('contacto-page', () =>
  api.pages.getBySlug('contacto').catch(() => null as Page | null)
)

const heroSection = computed(() => pageData.value?.sections?.find(s => s.type === 'hero' && s.featured_media) ?? null)
const heroBannerUrl = computed(() => heroSection.value?.featured_media?.url ?? null)
const heroBannerAlt = computed(() => heroSection.value?.featured_media?.alt ?? 'Contacto - Escalada Libre')
const contactSection = computed(() => pageData.value?.sections?.find(s => s.heading && s.body && s.body !== '<p></p>') ?? null)

const form = ref({
  nombre: '',
  apellido: '',
  correo: '',
  telefono: '',
  mensaje: '',
})

const cargando = ref(false)
const enviado = ref(false)
const errorMensaje = ref<string | null>(null)

const enviarFormulario = async () => {
  cargando.value = true
  errorMensaje.value = null
  try {
    await api.contact.send({
      name: `${form.value.nombre} ${form.value.apellido}`.trim(),
      email: form.value.correo,
      phone: form.value.telefono || null,
      subject: null,
      message: form.value.mensaje,
    })
    enviado.value = true
    form.value = { nombre: '', apellido: '', correo: '', telefono: '', mensaje: '' }
  } catch {
    errorMensaje.value = 'Ocurrió un error al enviar tu mensaje. Por favor intenta de nuevo.'
  } finally {
    cargando.value = false
  }
}
</script>
