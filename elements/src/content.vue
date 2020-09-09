<template>
  <div class="contentVue">
      <layout />
      <formy />
      <carousel />
      <show-state />
  </div>
</template>

<script>

import Layout from './components/Layout';
import Form from './components/Form'
import Carousel from './components/carousel'
import ShowState from './components/showState'

export default {
  data(){
    return {
      name: '123'
    }
  },
  components: {
    Layout,
    Formy: Form,
    Carousel,
    ShowState
  },
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