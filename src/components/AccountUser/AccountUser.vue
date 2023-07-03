<script setup lang="ts">
import { useUserStore } from '@/store/store'
import { TencentQq as IconTencentQq, Mail as IconMail } from '@icon-park/vue-next'

defineOptions({
  name: 'AccountUser'
})

const user = useUserStore()
</script>

<template>
  <div class="account_user">
    <div class="user">
      <el-avatar :src="user.userInfo?.avatar" class="avatar" />
      <div class="info">
        <span class="username">{{ user.userInfo?.username }}</span>
        <div class="info_content">
          <div class="info_item qq"><icon-tencent-qq /> {{ user.userInfo?.qq }}</div>
          <div class="info_item email">
            <icon-mail /><span class="value">{{ user.userInfo?.primary_email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.i-icon {
  display: flex;
}
.account_user {
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  .user {
    display: flex;
    align-items: center;
    height: 80px;
    .avatar {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      overflow: hidden;
    }

    .info {
      display: flex;
      height: 80%;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 8px;
      width: 0;
      flex-grow: 1;
      .username {
        font-size: 20px;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .info_content {
        display: flex;
        flex-wrap: wrap;
        .info_item {
          display: flex;
          align-items: center;
          margin-right: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .edit_info {
    margin-left: auto;
  }
}
</style>
