import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { SOME_MUTATION } from './store/mutation-types' // 从mutation-type文件中引入mutation

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)

// FIXME: Vuex Module 还没学完
const store = new Vuex.Store({
  state: {
    count: 0,
    step: 1, // 递增的数值
    users: [
      {id: 1, username: 'Sheila'},
      {id: 2, username: 'Melisa'},
      {id: 3, username: 'Judy'}
    ],
    some: 1
  },
  mutations: { // 重要： mutation必须是同步函数 否则状态无法跟踪 混入异步条用会让程序难以调试
    increment(state) { // 普通mutation 接受state作为参数
      state.count++
    },
    increseN(state, payload) { // 带有 提交载荷 payload 的 mutation payload通常用对象的形式 可以传入多个数据
      state.count += payload.value
    },
    /**
     * 使用常量CONSTANT替代事件类型 这种做法在各种FLUX实现中很常见 可以使linter之类的工具发挥作用
     * 将CONSTANT放在单独的文件中可以让代码合作者对整个app包含的mutation一目了然 更适合 多人写作的大型项目
     *  */  
    [SOME_MUTATION](state) { // ES2015风格 计算属性 作为函数名
      state.some += 1
      // mutate state here
    }

  },
  getters: { // getters相当于state的计算属性 通过getter获取的是计算后的state
    countPlus1: state => { // 这个属性返回的就是 count+1
      return state.count + 1
    },
    twoNPlus1: (state, getters) => { // 接受2参数 1：state, 2: getters 此例返回当前count+ (count+1)
      return state.count + getters.countPlus1
    },
    getUser: (state) => (uid) => { // 让getter返回函数 这样就可以给getter传参 对store中数组查询非常有效
      return state.users.find(user => user.id == uid)
    }
  },
  actions: {
    increseAsy(context){ // context对象和store对象类似 可以 access commit state getters 但context对象并不是store对象本身
      context.commit('increment')
    },
    increseAsync({ commit }) { // 通过ES6的参数接口来提取commit 简化代码
      setTimeout(()=>{ // 1.5s后执行
        commit('increment')
      }, 1500)
    },
    /**
     * 在执行异步函数时 如何知道action什么时候结束
     * action结束后要回调 或者一个action执行完后再dipatch 另一个action
     * store.dipatch可以处理 已经被触发action返回的Promise 并且 store.dispatch依旧返回Promise
     * 下面创造该种情况
     */
    increseAsyncWithPayload({ commit }, payload){ // dispatch action 支持payload
      return new Promise((resolve) => {
        setTimeout(()=>{
          commit('increment')
          resolve()
        }, payload.delay)
      })
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
