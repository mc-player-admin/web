<script setup lang="ts">
import { getAudit, type Audit, setAudit } from '@/apis/admin'
import { type Ref, ref, h, reactive } from 'vue'
import dayjs from 'dayjs'
import { ElMessage, ElMessageBox, type ElMessageBoxOptions } from 'element-plus'
import AuditBox from './AuditBox.vue'

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

const audit = async (row: Audit) => {
  const beforeClose: ElMessageBoxOptions['beforeClose'] = async (action, instance, done) => {
    // 取消
    if (action != 'confirm') {
      return done()
    }
    // 提交验证
    instance.confirmButtonLoading = true
    if (data.approved == undefined) {
      ElMessage.warning('请选择结果')
      instance.confirmButtonLoading = false
      return
    }
    if (data.approved == false && !data.reason) {
      ElMessage.warning('请输入原因')
      instance.confirmButtonLoading = false
      return
    }

    const { data: res } = await setAudit(row.id, data.approved!, data.reason)
    if (res.status != 200) {
      ElMessage.error(`提交失败 errcode:${res.status} ${res.msg}`)
      instance.confirmButtonLoading = false
      return
    }
    await init()
    ElMessage.success('提交成功')
    done()
  }

  const data = reactive<{
    approved: boolean | undefined
    reason: string
  }>({
    approved: undefined,
    reason: ''
  })
  ElMessageBox({
    title: '审核',
    confirmButtonText: '确定',
    beforeClose,
    message: () =>
      h(AuditBox, {
        approved: data.approved,
        reason: data.reason,
        'onUpdate:approved': (value: boolean | undefined) => {
          data.approved = value
        },
        'onUpdate:reason': (value: string) => {
          data.reason = value
        }
      })
  }).catch(() => {
    console.log('取消')
  })
}
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
      <template #default="scope">
        <!-- todo: 操作 -->
        <el-button link type="primary" size="small" @click="audit(scope.row)">审核</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
.audit {
  width: 100%;
  height: 100%;
  :deep(.el-table__cell) {
    z-index: unset !important;
  }
}
</style>
