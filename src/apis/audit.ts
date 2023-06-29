import type { Response } from '@/utils/request'
import request from '@/utils/request'

export const checkName = (name: string) => {
  return request({
    method: 'post',
    url: '/audit/submit/checkName',
    data: {
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

export const init = () => {
  return request({
    method: 'post',
    url: '/audit/submit/init'
  })
}

export const submit = (data: {
  name: string
  biliUsername: string
  biliUid: string
  screenshot: string
}) => {
  return request({
    method: 'post',
    url: '/audit/submit',
    data
  })
}

export interface Audit {
  id: string
  user: number
  name: string
  bili_username: string
  bili_uid: string
  screenshot: string
  status: number
  result?: number
  cause?: string
  approver?: number
  date: string
  approver_username?: string
  approver_avatar?: string
}
export const queryAudit = (): Response<Audit[]> => {
  return request({
    method: 'post',
    url: '/audit/query/audits'
  })
}
export interface Player {
  id: number
  name: string
  user: number
  status: number
  type: number
  transfer_id?: any
  username?: string
  qq?: number
  primary_email?: string
  register_date?: string
  primary_permission_group?: number
}

export const queryPlayer = (): Response<Player[]> => {
  return request({
    method: 'post',
    url: '/audit/query/players'
  })
}
