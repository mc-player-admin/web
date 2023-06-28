import dayjs from 'dayjs'

export const formatDate = (value: string | number | Date | dayjs.Dayjs | null | undefined) => {
  if (!value) {
    return 'null'
  }
  return dayjs(value).format('MM-DD HH:mm:ss')
}
