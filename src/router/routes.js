
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/profil', component: () => import('pages/Profil.vue') },
      { path: '/news', component: () => import('pages/News.vue') },
      { path: '/about', component: () => import('pages/about.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
