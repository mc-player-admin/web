export interface UserInfo {
  id: number
  username: string
  qq?: number
  primary_email?: string
  status: number
  register_date: string
  last_login_date?: Date
  primary_permission_group: number
}

export interface permission {
  name: string
  value: boolean
}
