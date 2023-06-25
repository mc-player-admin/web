export interface UserInfo {
  id: number
  username: string
  qq?: number
  primary_email?: string
  status: number
  register_date: string
  last_login_date?: Date
  primary_premission_group: number
}

export interface Premission {
  name: string
  value: boolean
}
