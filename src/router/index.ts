import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login/Login.vue')
    },
    {
      path: '/login/qqAccessCallback',
      name: 'loginCallback',
      component: () => import('@/pages/QqAccessCallback/QqAccessCallback.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/Register/Register.vue')
    },
    {
      path: '/register/new-account',
      name: 'NewAccount',
      component: () => import('@/pages/Register/New.vue')
    },
    {
      path: '/register/transfer-account',
      name: 'TransferAccount',
      component: () => import('@/pages/Register/Transfer.vue')
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('@/pages/Submit/Submit.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('@/pages/VerifyQQ/Verify.vue')
    }
  ]
})

export default router
