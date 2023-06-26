import request from '@/utils/request'
import type { Response } from '@/utils/request'

export interface Audit {
  id: string
  user: number
  name: string
  bili_username: string
  bili_uid: string
  screenshot: string
  status: number
  date: string
  username: string
  qq: number
  primary_email: string
  register_date: string
  primary_permission_group: number
}
export const getAudit = (): Response<Audit[]> => {
  return request({
    method: 'post',
    url: '/admin/audit/get'
  })
}
