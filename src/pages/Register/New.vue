<script setup lang="ts">
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import SendCode from '@/components/SendCode/SendCode.vue'
import { registerNew } from '@/apis/user'
import { useRouter } from 'vue-router'

// todo: 备选方案 请求后端配置 无法使用邮件时备选方案上传截图

defineOptions({
  name: 'RegisterNew'
})
const router = useRouter()
const formRef = ref<FormInstance>()
const form = reactive({
  qq: '',
  code: ''
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
  await formRef.value.validate(async (valid, fields) => {
    if (!valid) {
      return console.log('error submit!', fields)
    }
    const { data: res } = await registerNew(form.qq, form.code)
    if (res.status != 200) {
      return ElMessage.error('提交失败，' + (res.msg ? res.msg : '请稍后再试'))
    }
    ElMessage.success('提交成功')
    router.push('/')
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
    <h1 class="title">完善信息</h1>
    <el-form-item label="QQ" prop="qq">
      <el-input v-model="form.qq" name="qq" placeholder="请填写qq" />
    </el-form-item>
    <el-form-item label="邮箱" class="email">
      <div class="email_connect">
        <el-input :value="(form.qq || 'qq') + '@qq.com'" name="email" disabled />
        <send-code :qq="form.qq" />
      </div>
      <!-- todo: 发送验证码之后显示 跳转到文档 -->
      <a href="#" class="tips" v-if="false">收不到验证码？</a>
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
@import url(./account.less);
</style>