<script setup lang="ts">
import { getPlayers, rename } from '@/apis/admin'
import { Player } from '@/types/admin'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import { formatDate } from '@/utils/formatDate'

defineOptions({
  name: 'EditPlayerPage'
})

const players = ref<Player[]>([])

const init = async () => {
  const { data: res } = await getPlayers()
  players.value = res.data
}
init()

const editName = async (row: Player) => {
  const data = await ElMessageBox.prompt('输入新id', `修改${row.name}的游戏id`, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern: /^([a-zA-Z])([a-zA-Z0-9 ]{1,14})$/,
    inputErrorMessage: '请输入正确的游戏id'
  }).catch(() => {})
  if (data?.action != 'confirm') {
    return
  }
  const { data: res } = await rename(row.id, data.value)
  if (res.status != 200) {
    return ElMessage.error(`修改失败 ${res.status} ${res.msg}`)
  }
  await init()
  ElMessage.success('修改成功')
}
</script>

<template>
  <el-table :data="players" stripe class="edit_player">
    <el-table-column prop="id" label="玩家id" width="70" />
    <el-table-column prop="user" label="用户id" width="70" />
    <el-table-column prop="name" label="游戏id" width="100" />
    <el-table-column prop="username" label="用户名" width="100" />
    <el-table-column prop="qq" label="qq" width="110" />
    <el-table-column prop="primary_email" label="邮箱" width="200" />
    <el-table-column prop="status" label="状态" width="60">
      <template #default="scope">
        <el-tag>{{ scope.row.status == 1 ? '正常' : scope.row.status }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="type" label="类型" width="60" />
    <el-table-column prop="transfer_id" label="迁移id" width="70" />
    <el-table-column
      prop="register_date"
      label="注册时间"
      :formatter="(value) => formatDate(value.register_date)"
      width="130"
    />
    <el-table-column prop="primary_permission_group" label="权限组" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="editName(scope.row)">改名字</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
.edit_player {
  width: 100%;
  height: 100%;
}
</style>
