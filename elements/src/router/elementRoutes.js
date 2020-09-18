export const elRoutes = [
  {
    path: '/',
    redirect: '/basic',
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