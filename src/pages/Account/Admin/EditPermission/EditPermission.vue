<script setup lang="ts">
import { getGroups } from '@/apis/admin'
import { h, ref } from 'vue'
import EditPermissionBox from './EditPermissionBox.vue'
import { ElMessageBox } from 'element-plus'

defineOptions({
  name: 'EditPermissionPage'
})

const groups = ref([])

const init = async () => {
  const { data: res } = await getGroups()
  groups.value = res.data
}
init()

const edit = (group: number) => {
  ElMessageBox({
    message: () =>
      h(EditPermissionBox, {
        group
      })
  })
}
</script>

<template>
  <div class="edit_premission">
    <h1>权限组管理</h1>
    <el-table :data="groups" style="width: 100%">
      <el-table-column prop="id" label="id" width="100" />
      <el-table-column prop="name" label="Name" width="100" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="edit(scope.row.id)">编辑权限</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="less" scoped>
.edit_premission {
  padding: 8px;
  background-color: #fff;
}
</style>
