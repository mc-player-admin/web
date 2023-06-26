<script setup lang="ts">
import { getAudit, type Audit } from '@/apis/admin'
import { type Ref, ref } from 'vue'
import dayjs from 'dayjs'

defineOptions({
  name: 'AuditPage'
})

const HOST = '//static-1259453062.cos.ap-shanghai.myqcloud.com/'
const list = ref<Audit[]>([])
const formatDate = (value: Ref) => {
  return dayjs(value.value).format('MM-DD HH:mm:ss')
}

const init = async () => {
  const { data: res } = await getAudit()
  list.value = res.data
}
init()
</script>

<template>
  <el-table :data="list" class="audit">
    <el-table-column prop="id" label="审核id" width="140" />
    <el-table-column prop="user" label="用户id" />
    <el-table-column prop="username" label="用户名" />
    <el-table-column prop="name" label="游戏id" />
    <el-table-column prop="bili_username" label="bili用户名">
      <template #default="scope">
        <a
          :href="`https://search.bilibili.com/upuser?keyword=${scope.row.bili_username}`"
          target="_blank"
        >
          {{ scope.row.bili_username }}
        </a>
      </template>
    </el-table-column>
    <el-table-column prop="bili_uid" label="bili uid">
      <template #default="scope">
        <a :href="`https://space.bilibili.com/${scope.row.bili_uid}`" target="_blank">
          {{ scope.row.bili_uid }}</a
        >
      </template>
    </el-table-column>
    <el-table-column prop="screenshot" label="截图">
      <template #default="scope">
        <el-image
          :src="`${HOST}${scope.row.screenshot}`"
          :preview-src-list="list.map((e) => HOST + e.screenshot)"
        />
      </template>
    </el-table-column>
    <el-table-column prop="status" label="审核状态" />
    <el-table-column prop="date" label="提交日期" :formatter="formatDate" width="125" />
    <el-table-column prop="qq" label="qq" width="110" />
    <el-table-column prop="primary_email" label="邮箱" width="180" />
    <el-table-column prop="register_date" label="注册时间" :formatter="formatDate" width="125" />
    <el-table-column prop="primary_permission_group" label="主权限组" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <!-- todo: 操作 -->
        <el-button link type="success" size="small">通过</el-button>
        <el-button link type="warning" size="small">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
.audit {
  width: 100%;
  height: 100%;
}
</style>
