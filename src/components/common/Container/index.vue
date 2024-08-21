<template>
  <section :class="cn('flex-center h-full w-full flex-col', className)">
    <div class="space-y-8 py-8">
      <header class="flex-between mb-6">
        <div v-if="title" class="text-lg font-semibold">{{ title }}</div>
        <slot name="extra"></slot>
      </header>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import { cn } from '@/utils/helper/functions'

export default {
  name: 'Container',
  props: {
    title: String,
    className: String,
  },
  setup() {
    return {
      cn,
    }
  },
}
</script>
