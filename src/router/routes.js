
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/request', component: () => import('components/Request.vue') },
      { path: '/mail', component: () => import('components/Mail.vue') },
      { path: '/support', component: () => import('components/Support.vue') },
      { path: '/logs', component: () => import('components/Logs.vue') },
      { path: '/sample', component: () => import('components/Sample.vue') },
      { path: '/login', component: () => import('components/Login.vue') },
      { path: '/message', component: () => import('components/Message.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
