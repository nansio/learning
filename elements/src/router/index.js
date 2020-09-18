import Vue from 'vue'
import VueRouter from 'vue-router'
import { elRoutes } from './elementRoutes'
import { vueRoutes } from './vueRoutes'

Vue.use(VueRouter)

export const constRoutes = [
  ...elRoutes,
  ...vueRoutes
]


const router = new VueRouter({
  scrollBehavior: () => ({y:0}),
  routes: constantRoutes
})

export default router

