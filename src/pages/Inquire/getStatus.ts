export const getStatus = (statusCode: string) => {
  if (statusCode == '1') {
    return '正常'
  }
  return '未知'
}
