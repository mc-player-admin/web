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
      component: () => import('@/pages/Login/Login.vue'),
      redirect: '/login/bypassword',
      children: [
        {
          path: '/login/bypassword',
          name: 'loginbypassword',
          component: () => import('@/pages/Login/LoginMethod/WithPassword.vue')
        },
        {
          path: '/login/bycode',
          name: 'loginbycode',
          component: () => import('@/pages/Login/LoginMethod/WithCode.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/Register/Register.vue')
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
