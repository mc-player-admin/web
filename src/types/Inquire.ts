export default interface InquireType {
  status: number
  msg: string
  data: Array<{
    name: string
    qq: number
    register_date: string
    type: string
    status: string
  }>
}
