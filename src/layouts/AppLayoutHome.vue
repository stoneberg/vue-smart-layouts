<template>
  <div>
    <header class="header" />
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from '@/layouts/Header'

export default {
  name: "AppLayoutHome",
  components: {
    Header
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>
