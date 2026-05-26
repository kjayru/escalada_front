<template>
  <Teleport to="body">
    <Transition name="loader-fade">
      <div
        v-if="isLoading"
        class="page-loader-overlay"
        style="position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;"
      >
        <!-- Animación SVG (autoplay nativo en el navegador) -->
        <img
          src="/images/preloader2.svg"
          alt=""
          aria-hidden="true"
          class="page-loader-animation"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { isLoading } = usePageLoader()
</script>

<style scoped>
.page-loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-loader-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.page-loader-animation {
  width: 320px;
  max-width: 80vw;
  height: auto;
  display: block;
  margin: auto;
}

/* Transición de salida */
.loader-fade-leave-active {
  transition: opacity 0.5s ease;
}
.loader-fade-leave-to {
  opacity: 0;
}
</style>
