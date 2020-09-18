<template>
  <div class="contentVue">
      <!-- <layout />
      <formy />
      <carousel />
      <show-state />
      <cascader />
      <buttons /> -->
      <router-view />
  </div>
</template>

<script>

// import Layout from './components/Layout';
// import Form from './components/Form'
// import Carousel from './components/carousel'
// import ShowState from './components/showState'
// import Cascader from './components/cascader'
// import Buttons from './components/buttons'

export default {
  data(){
    return {
      name: '123'
    }
  },
  // components: {
  //   Layout,
  //   Formy: Form,
  //   Carousel,
  //   ShowState,
  //   Cascader,
  //   Buttons
  // },
  computed: {

  },
  methods: {

  }
}
</script>

<style>
.contentVue{
  margin:0; padding: 0;
}
</style>