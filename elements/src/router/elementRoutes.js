import Content from '../content.vue'
export const elRoutes = [
  {
    path: '/',
    component: Content,
    redirect: '/layout',
    name: 'basic',
    meta: { title: '基础组件', icon: ''},
    children: [
      {
        path: 'layout',
        name: 'layout',
        component: () => import('../components/Layout'),
        meta: { title: 'Layout布局', icon: ''}
      },
      {
        path: 'container',
        name: 'container',
        redirect: '/'
      }
    ]
  },
  {
    path: '/form',
    component: Content,
    name: 'El-form',
    redirect: '/form/el-form',
    children: [
      {
        path: 'el-form',
        name: 'el-form',
        component: () => import('../components/Form'),
        meta: { title: 'el-form', icon:''}
      }
    ]
  }
]