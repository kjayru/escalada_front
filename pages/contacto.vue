<template>
  <div class="contacto-page">

    <!-- Hero Banner B&W -->
    <section class="relative overflow-hidden" style="min-height: 1080px;">
      <img
        src="/images/n-1.png"
        alt="Contacto - Escalada Libre"
        class="absolute inset-0 w-full h-full object-cover grayscale"
      />
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="relative z-10" style="min-height: 1080px;"></div>
    </section>

    <!-- Formulario de contacto -->
    <section class="bg-white py-16 lg:py-20">
      <div class="max-w-[830px] mx-auto px-4 sm:px-6">

        <!-- Título -->
        <h1 class="text-[35px] font-medium text-[#6A6867] leading-tight mb-6">
          ¡Contáctanos!
        </h1>

        <!-- Descripción -->
        <p class="text-xl text-[#6A6867] leading-relaxed mb-12">
          En Escalada Libre México A.C. queremos escucharte. Si tienes dudas, propuestas, deseas colaborar, quieres adquirir algún producto o simplemente quieres saber más sobre nuestro trabajo, no dudes en escribirnos.
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
            <label class="text-xl font-light text-[#6A6867]">Nombre*</label>
            <input
              v-model="form.nombre"
              type="text"
              required
              class="w-full h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-base text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
            />
          </div>

          <!-- Apellido -->
          <div class="flex flex-col gap-2">
            <label class="text-xl font-light text-[#6A6867]">Apellido*</label>
            <input
              v-model="form.apellido"
              type="text"
              required
              class="w-full h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-base text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
            />
          </div>

          <!-- Correo electrónico -->
          <div class="flex flex-col gap-2">
            <label class="text-xl font-light text-[#6A6867]">Correo electrónico*</label>
            <input
              v-model="form.correo"
              type="email"
              required
              class="w-full h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-base text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
            />
          </div>

          <!-- Teléfono -->
          <div class="flex flex-col gap-2">
            <label class="text-xl font-light text-[#6A6867]">Teléfono</label>
            <input
              v-model="form.telefono"
              type="tel"
              class="w-full h-[66px] px-5 border border-[#6a6867] rounded-[10px] text-base text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors"
            />
          </div>

          <!-- Mensaje -->
          <div class="flex flex-col gap-2">
            <label class="text-xl font-light text-[#6A6867]">Mensaje</label>
            <textarea
              v-model="form.mensaje"
              rows="8"
              class="w-full px-5 py-4 border border-[#6a6867] rounded-[10px] text-base text-[#6A6867] placeholder-[#6A6867]/40 bg-white focus:outline-none focus:border-[#F8C52D] transition-colors resize-none"
              style="height: 289px;"
            ></textarea>
          </div>

          <!-- Campos obligatorios + Botón -->
          <div class="flex flex-col gap-2">
            <p class="text-sm font-medium text-[#6A6867] text-right">*Campos obligatorios</p>
            <p v-if="errorMensaje" class="text-sm text-red-600 text-right">{{ errorMensaje }}</p>
            <button
              type="submit"
              :disabled="cargando"
              class="w-full h-[45px] bg-[#F8C52D] text-[#6A6867] font-bold text-sm tracking-widest rounded-full hover:bg-[#e0b525] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ cargando ? 'ENVIANDO...' : 'ENVIAR' }}
            </button>
          </div>

        </form>

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
import { ref } from 'vue'

useSeoMeta({
  title: 'Contacto - Escalada Libre',
  description: 'Contáctanos en Escalada Libre México A.C. Dudas, propuestas, colaboraciones y más.',
})

const api = useApi()

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
