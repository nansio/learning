export const vueRoutes = [
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../components/showState'),
    meta: { title: 'Vuex', icon: ''}
  },
  {
    path: '/vue-router',
    name: 'Vue_Router',
    redirect: '/',
    meta: { title: 'Vue Router', icon: ''}
  }
]