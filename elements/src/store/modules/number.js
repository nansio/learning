import { SOME_MUTATION } from '../mutation-types' // 从mutation-type文件中引入mutation

const state = {
    count: 0,
    step: 1, // 递增的数值
    some: 1
}

const mutations = {
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
}

const actions = {
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

export default {
    namespaced: true,
    state,
    mutations,
    actions
}