<template>
  <div class="app-layout">
    <LayoutsHeader />
    <main>
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>

<script setup lang="ts">
// Default layout
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
