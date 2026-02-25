<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
  padding: true
})

const containerClasses = computed(() => {
  const classes = ['w-full mx-auto']
  
  if (props.padding) {
    classes.push('px-4 sm:px-6 lg:px-8')
  }
  
  const sizeMap = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full'
  }
  
  classes.push(sizeMap[props.size])
  
  return classes
})
</script>
