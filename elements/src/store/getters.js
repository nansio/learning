const getters = { // getters相当于state的计算属性 通过getter获取的是计算后的state
    countPlus1: state => { // 这个属性返回的就是 count+1
        return state.number.count + 1 // namespaced modules
    },
    twoNPlus1: (state, getters) => { // 接受2参数 1：state, 2: getters 此例返回当前count+ (count+1)
        return state.number.count + getters.countPlus1
    },
    getUser: (state) => (uid) => { // 让getter返回函数 这样就可以给getter传参 对store中数组查询非常有效
        return state.user.users.find(user => user.id == uid)
    }
}

export default getters
