
const routes = [
  {
    path: '/',
    name: 'onboard',
    component: () => import('pages/OnboardingPage.vue')
  },
  { 
    path: '/home',
    name: 'home',
    component: () => import('pages/IndexPage.vue') 
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
