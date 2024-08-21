<template>
  <section>
    <h1 class="text-4xl font-bold">404</h1>
    <button type="button" @click="navigateToHome">Back to home</button>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'PageNotFound',
  setup() {
    const router = useRouter()

    const navigateToHome = () => {
      router.push('/')
    }

    return {
      navigateToHome,
    }
  },
}
</script>
