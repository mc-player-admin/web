<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

// todo: 备选方案 请求后端配置 无法使用邮件时备选方案上传截图

defineOptions({
  name: 'RegisterNew'
})

const formRef = ref<FormInstance>()
const replacePassword = ref(null)
const form = reactive({
  qq: null,
  username: null,
  code: null,
  password: null
})

const rules = reactive<FormRules>({
  qq: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入qq'
    },
    {
      trigger: 'blur',
      message: 'qq号格式不正确',
      validator(rule, value) {
        return /^[1-9][0-9]{4,10}$/.test(value)
      }
    }
  ],
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    },
    {
      min: 2,
      max: 10,
      trigger: 'blur',
      message: '用户名要求2~10个字符'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入密码'
    },
    {
      trigger: 'blur',
      message: '密码需要包含 字母 数字 符号(- _ . *) 中的两种，且长度在6~18个字符',
      validator(rule, value) {
        return /^(?=.*\d)(?=.*[a-z]|.*[A-Z]|.*[-_*.])[a-zA-Z0-9-_*.]{6,18}$/.test(value)
      }
    }
  ],
  replacePassword: [
    {
      trigger: 'blur',
      required: true,
      message: '两次输入的密码不一致',
      validator(rule, value) {
        return value === form.password
      }
    }
  ],
  code: [
    {
      trigger: 'blur',
      required: true,
      message: '请输入验证码',
      min: 4,
      max: 6
    }
  ]
})

const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form
    label-position="right"
    label-width="80px"
    class="register_new_form"
    :model="form"
    :rules="rules"
    ref="formRef"
    status-icon
  >
    <el-form-item label="QQ" prop="qq">
      <el-input v-model="form.qq" name="qq" placeholder="请填写qq" />
    </el-form-item>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" name="username" placeholder="请填写用户名(不是游戏id)" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" name="password" type="password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item label="重复密码" prop="replacePassword">
      <el-input
        v-model="replacePassword"
        name="replace-password"
        type="password"
        placeholder="请再次输入密码"
      />
    </el-form-item>
    <el-form-item label="邮箱" class="email">
      <el-input :value="(form.qq || 'qq') + '@qq.com'" name="email" disabled />
      <el-button class="send_code" type="primary">发送验证码</el-button>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input v-model="form.code" name="code" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>
.register_new_form {
  max-width: 1000px;
  margin: 10px auto;
  padding: 0 15px;
  :deep(.el-form-item__content) {
    display: flex;
    flex-flow: row;
    .send_code {
      margin-left: 8px;
    }
  }
  .min-width(600px, {
    :deep(.el-form-item) {
      flex-flow: column nowrap;
      .el-form-item__label {
        justify-content: flex-start;
      }
    }
  });
}
</style>
