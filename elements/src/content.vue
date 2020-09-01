<template>
  <div class="contentVue">
      <layout />
      <formy />
  </div>
</template>

<script>

import Layout from './components/Layout';
import Form from './components/Form'

export default {
  data(){
    return {
      name: '123'
    }
  },
  components: {
    Layout,
    Formy: Form
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