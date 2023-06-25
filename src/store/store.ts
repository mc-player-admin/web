import { defineStore } from 'pinia'
import type { Premission, UserInfo } from '@/types/user'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLogin: false,
      userInfo: null,
      premission: []
    } as {
      isLogin: boolean
      userInfo: UserInfo | null
      premission: Premission[]
    }
  }
})
