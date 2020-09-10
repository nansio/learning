import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/index'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
