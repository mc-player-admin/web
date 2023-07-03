<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules, UploadProps, UploadRequestOptions } from 'element-plus'
import { File } from 'buffer'
import { UploadPicture as IconUploadPicture } from '@icon-park/vue-next'
import { useUserStore } from '@/store/store'
import { throttle } from 'lodash'
import {
  checkName as checkNameApi,
  upload as uploadApi,
  init as initApi,
  submit as submitApi
} from '@/apis/audit'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'SubmitPage'
})

const user = useUserStore()
const router = useRouter()
const form = reactive({
  name: '',
  biliUsername: '',
  biliUid: '',
  screenshot: ''
})
const host = ref('//')

const init = async () => {
  const { data: res } = await initApi()
  if (res.status != 200) {
    ElMessage.error(res.msg)
    if (res.status == 4031) {
      router.push('/register')
    }
  }
  host.value = res.data?.host
}
init()

const formRef = ref<FormInstance>()

const rules = reactive<FormRules>({
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
          if (!user.userInfo?.qq) {
            return cb('qq号错误')
          }
          checkNameApi(value).then((e) => {
            if (e.data.status == 200) {
              cb()
            } else {
              cb(e.data.msg || '该id不可用')
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
  biliUsername: [
    {
      required: true,
      message: '请输入用户名',
      trigger: ['input', 'blur']
    },
    {
      max: 20,
      message: '用户名过长',
      trigger: ['input', 'blur']
    }
  ],
  biliUid: [
    {
      validator(rule, value: string) {
        if (!value) {
          return new Error('请填写uid')
        } else if (!/^[1-9][0-9]{0,19}$/.test(value)) {
          return new Error('请输入正确的uid')
        }
        return true
      },
      required: true,
      trigger: ['input', 'blur']
    }
  ],
  screenshot: [
    {
      required: true,
      message: '请上传粉丝牌截图',
      trigger: ['upload']
    }
  ]
})

const handleUploadSuccess: UploadProps['onSuccess'] = ({ data: res }) => {
  if (res.status != 200) {
    return ElMessage.error('上传失败,', res.msg ? res.msg : '请稍后再试')
  }
  form.screenshot = res.data.fileName
}
// @ts-ignore
const beforeUpload: UploadProps['beforeUpload'] = (rawFile: File) => {
  if (!['image/jpeg', 'image/png'].includes(rawFile.type)) {
    ElMessage.error('仅允许上传 jpg 和 png 格式的图片')
    return false
  } else if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error('图片大小不能超过5M!')
    return false
  }
  return true
}

const upload = (options: UploadRequestOptions) => {
  return uploadApi(options.file)
}

const submitForm = (formEl?: FormInstance) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (!valid) {
      return
    }
    const { data: res } = await submitApi(form)
    if (res.status != 200) {
      ElMessage.error('提交失败,' + (res.msg ? res.msg : '请稍后再试'))
    }
    ElMessage.success('提交成功，请等待审核')
    router.push('/account/player')
  })
}
</script>

<template>
  <div class="submit">
    <el-form :model="form" label-position="top" ref="formRef" :rules="rules" status-icon>
      <el-form-item label="qq">
        <el-input :value="user.userInfo?.qq" disabled />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input :value="user.userInfo?.primary_email" disabled />
      </el-form-item>
      <el-form-item label="游戏id" prop="name">
        <el-input v-model="form.name" placeholder="务必确认空格及大小写是否填写正确" />
      </el-form-item>
      <el-form-item label="B站用户名" prop="biliUsername">
        <el-input v-model="form.biliUsername" placeholder="请填写B站用户名" />
      </el-form-item>
      <el-form-item label="B站uid" prop="biliUid">
        <el-input v-model="form.biliUid" placeholder="请填写B站uid" />
      </el-form-item>
      <el-form-item label="B站粉丝牌截图" prop="screenshot">
        <el-upload
          class="uploader"
          :show-file-list="false"
          :http-request="upload"
          :on-success="handleUploadSuccess"
          :before-upload="beforeUpload"
        >
          <img v-if="form.screenshot" :src="host + form.screenshot" class="uploader-image" />
          <el-icon v-else class="uploader-icon">
            <icon-upload-picture size="500" />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.submit {
  max-width: 1000px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
}
.uploader {
  :deep(.el-upload) {
    border: 1px dashed @border-color;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    width: 150px;
    height: 150px;
    &:hover {
      border-color: @border-hover-color;
    }
    .el-icon.uploader-icon {
      font-size: 28px;
      color: #8c939d;
      text-align: center;
    }
    .uploader-image {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
