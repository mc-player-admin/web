import request from '@/utils/request'
import type { Response } from '@/utils/request'
import type { UserInfo } from '@/types/user'

export const getUserInfo = (): Response<UserInfo> => {
  return request({
    method: 'post',
    url: '/user/getUserInfo'
  })
}
