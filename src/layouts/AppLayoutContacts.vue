<template>
  <div>
    <header class="header" />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

export default {
  name: "AppLayoutContacts",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: red;
}
</style>
