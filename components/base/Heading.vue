<template>
  <component :is="level" :class="headingClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
}

const props = withDefaults(defineProps<Props>(), {
  level: 2,
  weight: 'bold'
})

const level = computed(() => `h${props.level}`)

const headingClasses = computed(() => {
  const classes = []
  
  // Size from prop or default based on level
  if (props.size) {
    const sizeMap = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl'
    }
    classes.push(sizeMap[props.size])
  } else {
    // Default sizes based on level
    const defaultSizes = {
      1: 'text-4xl',
      2: 'text-3xl',
      3: 'text-2xl',
      4: 'text-xl',
      5: 'text-lg',
      6: 'text-base'
    }
    classes.push(defaultSizes[props.level])
  }
  
  // Weight
  const weightMap = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  }
  classes.push(weightMap[props.weight])
  
  return classes
})
</script>
