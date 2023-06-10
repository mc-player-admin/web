<script lang="ts" setup>
import { ref } from 'vue'

const formdata = ref({
  username: '',
  password: ''
})
</script>

<template>
  <div class="form">
    <el-form
      :label-position="'left'"
      label-width="100px"
      :model="formdata"
      style="max-width: 460px"
      class="el-froms"
    >
      <el-form-item label="邮箱">
        <el-input v-model="formdata.username">
          <template #append>@qq.com</template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password v-model="formdata.password" />
      </el-form-item>
    </el-form>
  </div>
  <div class="btns">
    <el-button type="primary">登录</el-button>
    <el-button type="info">忘记密码</el-button>
    <el-button style="float: right">注册账号</el-button>
  </div>
</template>

<style lang="less" scoped>
.form {
  display: flex;
  justify-content: center;
  flex: 1;
  .el-froms {
    width: 100%;
  }
}
.btns {
  max-width: 500px;
  margin: auto;
}
</style>
