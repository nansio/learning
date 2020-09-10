<template>
  <div>
      <h1>
          这个组件是用来展示Vuex Store中state的值的: Count的值是: {{ count }}
          <el-button type="primary" @click="increment">+1</el-button>
      </h1>
      <hr>
      <h1>
          设置增量
          <el-input-number v-model="step" :min="1" :max="999" label="增量" @keyup.enter.native="increseN"></el-input-number>
          <el-button type="primary" @click="increseN">Commit</el-button>
      </h1>
      <h1>
          通过属性的方式访问getters值：
      </h1>
      <p>countPlus1: {{ countPlus1 }}</p>
      <p>twoNPlus1: {{ twoNPlus1 }}</p>
      <h1>通过函数的方式返回getters值</h1>
      <p>通过输入userid 获取username</p>
      <el-input v-model="uid" placeholder="请输入id" @keyup.enter.native="getUserWithId"></el-input>
      <el-button type="primary" @click="getUserWithId">查询</el-button>
      <span>username: {{ username }}</span>
      <h1>
          通过dispatch actions来递增Count: Count的值是: {{ count }}
          <el-button type="primary" @click="plusSync">+1</el-button>
      </h1>
      <hr>
      <h1>
          延迟递增 输入延迟描述
          <el-input-number v-model="delay" :min="1" :max="60" label="延迟" @keyup.enter.native="plusSyncWithPayload"></el-input-number>
          <el-button type="primary" @click="plusSyncWithPayload">Commit</el-button>
      </h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    data() { // data在组件中必须是函数
        return {
            uid: '1',
            username: '',
            step: 0,
            delay: 1
        }
    },
    // 计算属性返回的是一个对象
    computed: {
        // mapState返回的也是一个对象 使用展开运算符将其混入外部对象
        ...mapState({
            count: state => state.number.count
        }),
        // 在组件中 通过属性访问getters 需要放在computed属性中 并且以函数的方式返回
        // countPlus1(){
        //     return this.$store.getters.countPlus1
        // },
        // twoNPlus1(){
        //     return this.$store.getters.twoNPlus1
        // },
        ...mapGetters([ // 传入string数组map 将getters map过来 mapGetters有三种重载
            'countPlus1',
            'twoNPlus1'
        ]),
        ...mapGetters({ // 通过传入对象的方式 给getter属性取Alias
            nPlus1: 'countPlus1'
        })
    },
    methods: {
        increment(){
            this.$store.commit('number/increment')
        },
        getUserWithId() {
            if(this.$store.getters.getUser(this.uid)){
                this.username = this.$store.getters.getUser(this.uid).username // 通过方法访问getters 传入参数
            }else{
                this.username = '不存在该用户'
            }
        },
        increseN(){
            // this.$store.commit('increseN',{ value: this.step}) // commit 带有payload对象的mutation
            this.$store.commit({ // 通过对象风格方式提交commit时 整个对象都作为payload传入个mutation 此时handleer不需要更改
                type: 'number/increseN',
                value: this.step // 传入的值 只需要传vlaue 而不是一个新的对象
            })
        },
        ...mapMutations([ //将mutations map到methods中来 函数名相同
            'number/increment'
        ]),
        // ...mapMutations({ // 对象的方式 可以映射
        //     getUserWithId: 'getUser' // mapMutations 支持载荷payload getUserWithId(payload) 映射为 this.$store.commit('getUser', payload)
        // })
        plusSync(){ // 可以这么写 但我注释掉了 因为下面 通过mapAcitons map过来了 一样的函数名
            this.$store.dispatch('number/increseAsync')
        },
        plusSyncWithPayload(){ // dispatch action 同样支持payload
            // this.$store.dispatch('increseAsyncWithPayload',{
            //     delay: this.delay
            // })
            this.$store.dispatch({ // 同样可以以对象的方式分发
                type: 'number/increseAsyncWithPayload',
                delay: this.delay*1000
            }).then(()=>{
                this.$message.success('dispatch success')
            })
        },
        ...mapActions({ // mapActions和mapMutations一样 支持map数组 或对象来更改函数名
            plusSync: 'number/increseAsync'
        })
    }
}
</script>

<style>

</style>