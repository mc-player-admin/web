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
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/pages/Account/Account.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/pages/Account/Home/Home.vue')
        },
        {
          path: 'inquire',
          name: 'inquire',
          component: () => import('@/pages/Inquire/Inquire.vue')
        },
        {
          path: 'player',
          name: 'Player',
          component: () => import('@/pages/Account/Player/Player.vue')
        },
        {
          path: 'admin-audit',
          name: 'Audit',
          component: () => import('@/pages/Account/Admin/Audit/Audit.vue')
        },
        {
          path: 'admin-edit_player',
          name: 'edit_player',
          component: () => import('@/pages/Account/Admin/EditPlayer/EditPlayer.vue')
        },
        {
          path: 'admin-edit_permission',
          name: 'edit_permission',
          component: () => import('@/pages/Account/Admin/EditPermission/EditPermission.vue')
        }
      ]
    },
    {
      path: '/inquire',
      name: 'Inquire',
      component: () => import('@/pages/Inquire/Inquire.vue')
    }
  ]
})

export default router
