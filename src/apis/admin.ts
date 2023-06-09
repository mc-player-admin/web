import request from '@/utils/request'
import type { Response } from '@/utils/request'
import type { Player } from '@/types/admin'

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

export const setAudit = (id: string, approved: boolean, cause: string) => {
  return request({
    method: 'post',
    url: '/admin/audit/set',
    data: {
      id,
      approved,
      cause
    }
  })
}

export const getPlayers = (): Response<Player[]> => {
  return request({
    method: 'post',
    url: '/admin/editPlayer/getPlayers'
  })
}

export const rename = (id: number, newName: string) => {
  return request({
    method: 'post',
    url: '/admin/editPlayer/rename',
    data: {
      id,
      newName
    }
  })
}

export const getGroups = () => {
  return request({
    method: 'post',
    url: '/admin/editPremission/getGroups'
  })
}

export const getPermission = (
  group: number
): Response<
  {
    id: number
    group: number
    name: string
    value: number
  }[]
> => {
  return request({
    method: 'post',
    url: '/admin/editPremission/getPermission',
    data: {
      group
    }
  })
}
export const setPermission = (group: number, name: string, value: boolean) => {
  return request({
    method: 'post',
    url: '/admin/editPremission/setPermission',
    data: {
      group,
      name,
      value
    }
  })
}
