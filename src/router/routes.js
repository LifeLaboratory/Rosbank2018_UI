
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: '/users', component: () => import('pages/users.vue') },
      
    ]
  },{
      path: '/account',
      component: () => import('layouts/Account.vue')    
          
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
