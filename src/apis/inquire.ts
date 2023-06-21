import request from '@/utils/request'
import type InquireType from '@/types/Inquire'

export const getInquiresData = (parameter: string) => {
  return request<InquireType>({
    method: 'post',
    url: '/player/inquires/',
    data: {
      parameter
    }
  })
}
