<template>
  <section class="mountain-prefooter bg-white py-10 lg:py-24">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex flex-col items-center">
          <img
            src="/images/logoblack.svg"
            alt="Escalada Libre A.C."
            class="w-36 lg:w-56"
          />
        </div>

        <!-- Texto + Botón -->
        <div class="flex flex-col items-center gap-5 lg:items-start">
          <h2 class="text-[2.25rem] lg:text-6xl leading-tight text-center lg:text-left" style="font-family: 'Readex Pro', sans-serif; font-weight: 700; color: #6A6867;">
            ¡GRACIAS POR<br />TU APOYO!
          </h2>
          <NuxtLink
            :to="buttonUrl"
            class="btn-donar w-full lg:w-auto px-10 lg:px-16 py-4 rounded-full transition-colors text-center"
          >
            {{ buttonText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  buttonUrl?: string
  buttonText?: string
}>(), {
  buttonUrl: '/como-apoyar',
  buttonText: 'Donar ahora',
})
</script>

<style scoped>
.btn-donar {
  background-color: #F8C52D;
  color: #6A6867;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 700;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.btn-donar:hover {
  background-color: #6A6867;
  color: #F8C52D;
}
</style>
