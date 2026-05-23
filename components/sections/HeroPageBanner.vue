<template>
  <section class="page-hero relative overflow-hidden">
    <!-- Mobile image -->
    <img
      v-if="imageMobile"
      :src="imageMobile"
      :alt="alt"
      class="absolute inset-0 w-full h-full object-cover lg:hidden"
      :class="imageClass || 'object-center'"
    />
    <!-- Desktop image (or only image if no mobile) -->
    <img
      :src="image"
      :alt="alt"
      class="absolute inset-0 w-full h-full object-cover"
      :class="[imageMobile ? 'hidden lg:block' : '', imageClass || 'object-center']"
    />

    <!-- Content overlay -->
    <div v-if="title || label" class="page-hero-content relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="ml-auto page-hero-text-block">
        <div v-if="label" class="flex items-center gap-3 mb-6" data-hero-animate data-hero-delay="0">
          <div class="w-12 h-px" style="background-color: #242424;"></div>
          <span class="text-sm tracking-[0.3em] uppercase" style="color: #242424; font-family: 'Bodoni Moda', serif;">{{ label }}</span>
        </div>
        <h1 class="page-hero-title font-normal leading-tight" style="color: #242424; font-family: 'Readex Pro', sans-serif; font-weight: 400;" data-hero-animate data-hero-delay="1">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  image: string
  imageMobile?: string | null
  alt?: string
  title?: string
  label?: string
  imageClass?: string
}>(), {
  imageMobile: null,
  alt: '',
  title: '',
  label: '',
  imageClass: '',
})
</script>

<style scoped>
.page-hero {
  height: 360px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: -80px;
  padding-top: 89px;
}

@media (min-width: 1024px) {
  .page-hero {
    height: 100dvh;
    min-height: 500px;
    margin-top: -96px;
    padding-top: 160px;
  }
}

.page-hero-text-block {
  max-width: 50rem;
}

.page-hero-title {
  font-size: 2.1875rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 1024px) {
  .page-hero-title {
    font-size: 3.75rem;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
