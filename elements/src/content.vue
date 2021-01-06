<template>
  <section class="content">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>

export default {
  name: 'Contentn',
  data() {
    return {
      
    }
  },
  mounted: {
  
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  methods: {
  
  }
}
</script>

<style>

</style>