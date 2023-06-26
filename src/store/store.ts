import { defineStore } from 'pinia'
import type { permission, UserInfo } from '@/types/user'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLogin: false,
      userInfo: null,
      permission: []
    } as {
      isLogin: boolean
      userInfo: UserInfo | null
      permission: permission[]
    }
  }
})
