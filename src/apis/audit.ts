// import type { Response } from '@/utils/request'
import request from '@/utils/request'

export const checkName = (qq: string, name: string) => {
  return request({
    method: 'post',
    url: '/audit/submit/checkName',
    data: {
      qq,
      name
    }
  })
}

export const upload = (file: File) => {
  return request({
    method: 'post',
    url: '/audit/upload',
    data: {
      file
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
