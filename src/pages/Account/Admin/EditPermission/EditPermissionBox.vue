<script setup lang="ts">
import { reactive } from 'vue'
import { Permission, PartialSub } from '@/types/permission'
import Switch from './Switch.vue'
import { getPermission } from '@/apis/admin'

defineOptions({
  name: 'EditPermissionBox'
})

const props = defineProps<{
  group: number
}>()

const permission = reactive<PartialSub<Permission>>({
  user: {},
  admin: {}
})

const init = async () => {
  const { data: res } = await getPermission(props.group)
  res.data.forEach((e) => {
    const value = e.value == null ? null : Boolean(e.value)
    const map = e.name.split('.')
    if (map[0] == 'user') {
      permission.user![map[1] as keyof Permission['user']] = value
    } else {
      permission.admin![map[1] as keyof Permission['admin']] = value
    }
  })
}
init()
</script>

<template>
  <h2>用户权限</h2>
  <Switch
    text="提交审核"
    :group="props.group"
    name="user.submit"
    v-model="permission.user!.submit"
  ></Switch>
  <Switch
    text="查询状态"
    :group="props.group"
    name="user.query_status"
    v-model="permission.user!.query_status"
  ></Switch>
  <Switch
    text="迁移账号"
    :group="props.group"
    name="user.transfer"
    v-model="permission.user!.transfer"
  ></Switch>
  <Switch
    text="上传文件"
    :group="props.group"
    name="user.upload"
    v-model="permission.user!.upload"
  ></Switch>
  <h2>管理权限</h2>
  <Switch
    text="审核"
    name="admin.audit"
    :group="props.group"
    v-model="permission.admin!.audit"
  ></Switch>
  <Switch
    text="修改用户信息"
    name="admin.edit_userinfo"
    :group="props.group"
    v-model="permission.admin!.edit_userinfo"
  ></Switch>
  <Switch
    text="修改玩家信息"
    name="admin.edit_player"
    :group="props.group"
    v-model="permission.admin!.edit_player"
  ></Switch>
  <Switch
    text="新建用户"
    name="admin.create_user"
    :group="props.group"
    v-model="permission.admin!.create_user"
  ></Switch>
  <Switch
    text="新建玩家"
    name="admin.create_player"
    :group="props.group"
    v-model="permission.admin!.create_player"
  ></Switch>
  <Switch
    text="修改权限"
    name="admin.edit_permission"
    :group="props.group"
    v-model="permission.admin!.edit_permission"
  ></Switch>
</template>

<style lang="less" scoped></style>
