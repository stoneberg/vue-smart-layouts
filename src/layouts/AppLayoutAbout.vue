<template>
  <div>
    <Left />
    <slot />
  </div>
</template>

<script>
import Left from '@/layouts/Left'

export default {
  name: "AppLayoutAbout",
  components: {Left}
}
</script>
