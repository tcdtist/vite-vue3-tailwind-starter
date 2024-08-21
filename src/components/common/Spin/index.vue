<template>
  <svg
    :width="size"
    :height="size"
    :class="cn('animate-spin', className)"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      class="bg-black opacity-25"
      stroke="currentColor"
      stroke-width="4"
      cx="12"
      cy="12"
      r="10"
    />
    <path
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      class="opacity-75"
      fill="currentColor"
    />
  </svg>
</template>

<script>
import { cn } from '@/utils/helper/functions'

export default {
  name: 'Spin',
  props: {
    size: {
      type: Number,
      default: 32,
    },
    className: {
      type: String,
      default: 'text-primary',
    },
  },
  setup() {
    return {
      cn,
    }
  },
}
</script>
