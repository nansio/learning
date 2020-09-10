import Vue from 'vue'
import Vuex from 'vuex'
import number from './modules/number'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        number,
        user
    },
    getters
})

export default store
