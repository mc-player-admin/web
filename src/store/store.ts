import { defineStore } from 'pinia'
import type { UserInfo } from '@/types/user'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLogin: false,
      userInfo: null
    } as {
      isLogin: boolean
      userInfo: UserInfo | null
    }
  }
})
