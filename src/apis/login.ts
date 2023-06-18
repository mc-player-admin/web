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
