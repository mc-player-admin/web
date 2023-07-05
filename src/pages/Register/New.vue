<script setup lang="ts">
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import SendCode from '@/components/SendCode/SendCode.vue'
import { registerNew } from '@/apis/user'
import { useRouter } from 'vue-router'
import { openDocs } from '@/components/DraggableDocs/DraggableDocs'
import AuditSteps from '@/components/AuditSteps/AuditSteps.vue'

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
    router.push('/account/player')
  })
}

const showTips = ref(false)
const onSendCode = () => {
  setTimeout(() => {
    showTips.value = true
  }, 5000)
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
    <audit-steps :step="1" />
    <h1 class="title">完善信息</h1>
    <el-alert
      title="提示"
      type="warning"
      class="warning"
      description="此页面用于新玩家完善信息申请白名单，提交后无法迁移账号，曾经有白名单的玩家请选择我是老玩家，请谨慎填写"
      show-icon
    />
    <el-form-item label="QQ" prop="qq">
      <el-input v-model="form.qq" name="qq" placeholder="请填写qq" />
    </el-form-item>
    <el-form-item label="邮箱" class="email">
      <div class="email_connect">
        <el-input :value="(form.qq || 'qq') + '@qq.com'" name="email" disabled />
        <send-code :qq="form.qq" @on-send-code="onSendCode" />
      </div>
      <a href="#" class="tips" v-if="showTips" @click="openDocs({ path: '/收不到验证码' })">
        收不到验证码？
      </a>
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
