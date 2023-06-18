import type { UserInfo } from '@/types/user'
import type { Response } from '@/utils/request'
import request from '@/utils/request'

export const loginInit = () => {
  return request({
    method: 'post',
    url: '/user/login/qq/init'
  })
}

export const login = (code: string, state: string) => {
  return request({
    method: 'post',
    url: '/user/login/qq',
    data: {
      code,
      state
    }
  })
}

export const getUserInfo = (): Response<UserInfo> => {
  return request({
    method: 'post',
    url: '/user/getUserInfo'
  })
}

/**
 * 获取邮箱验证码
 * @param mail qq号
 * @returns
 */
export const getCode = (mail: string) => {
  return request({
    method: 'post',
    url: '/user/getCode/mail',
    data: { mail }
  })
}
