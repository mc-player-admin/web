import { getUserInfo as getUserInfoApi } from '@/apis/getUserInfo'
import { useUserStore } from '@/store/store'

export const getUserInfo = async () => {
  const userStore = useUserStore()
  const { data: res } = await getUserInfoApi()
  if (res.status == 200) {
    userStore.isLogin = true
    userStore.userInfo = res.data
  }
}
