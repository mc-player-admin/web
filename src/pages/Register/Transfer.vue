<script setup lang="ts">
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import SendCode from '@/components/SendCode/SendCode.vue'
import { throttle } from 'lodash'
import { checkName as checkNameApi, registerTransfer } from '@/apis/user'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'RegisterNew'
})
const router = useRouter()
const formRef = ref<FormInstance>()
const form = reactive({
  qq: '',
  name: '',
  code: ''
})
const nameRules = reactive<{
  validateStatus: '' | 'error' | 'validating' | 'success' | undefined
  error: string | undefined
}>({
  validateStatus: '',
  error: ''
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
  name: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入游戏id'
    },
    {
      trigger: 'blur',
      message: '请输入正确的游戏id',
      validator(rule, value) {
        return /^([a-zA-Z])([a-zA-Z0-9 ]{1,14})$/.test(value)
      }
    },
    {
      validator: throttle(
        (rule, value, cb) => {
          if (!form.qq) {
            return cb('请先填写QQ')
          }
          checkNameApi(form.qq, form.name).then(({ data: res }) => {
            if (res.status == 200) {
              cb()
            } else {
              cb(res.msg || '未找到已有ID，请确认QQ和游戏ID填写正确')
            }
          })
        },
        1000,
        {
          leading: false
        }
      )
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
    const { data: res } = await registerTransfer(form.qq, form.code, form.name)
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
    class="register_transfer_form"
    :model="form"
    :rules="rules"
    ref="formRef"
    status-icon
  >
    <h1 class="title">账号迁移</h1>
    <el-form-item label="QQ" prop="qq">
      <el-input v-model="form.qq" name="qq" placeholder="请填写qq" />
    </el-form-item>
    <el-form-item
      label="游戏ID"
      prop="name"
      :validate-status="nameRules.validateStatus"
      :error="nameRules.error"
    >
      <el-input v-model="form.name" name="name" placeholder="请填写游戏id，注意空格及大小写" />
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
