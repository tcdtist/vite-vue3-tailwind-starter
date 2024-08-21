<template>
  <component :is="disabled ? 'span' : 'router-link'" v-bind="props" v-if="!disabled">
    <slot></slot>
  </component>
  <span v-else>
    <slot></slot>
  </span>
</template>

<script>
import { defineComponent } from 'vue'

import { RouterLink } from 'vue-router'

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Link',
  props: {
    disabled: Boolean,
  },
  component: {
    RouterLink,
  },
  setup(props, { slots }) {
    return {
      props,
      slots,
    }
  },
})
</script>
