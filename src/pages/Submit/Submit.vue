<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, UploadProps } from 'element-plus'
import { File } from 'buffer'
import { UploadPicture as IconUploadPicture } from '@icon-park/vue-next'

defineOptions({
  name: 'Submit'
})

const form = reactive({
  qq: '123456',
  email: '123456@qq.com',
  name: '',
  biliUsername: '',
  biliUid: '',
  screenshot: ''
})

const formRef = ref<FormInstance>()

const handleUploadSuccess: UploadProps['onSuccess'] = (response) => {
  form.screenshot = response.xxx
}
// @ts-ignore
const beforeUpload: UploadProps['beforeUpload'] = (rawFile: File) => {
  console.log(rawFile.type)

  if (!['image/jpeg', 'image/png'].includes(rawFile.type)) {
    ElMessage.error('仅允许上传 jpg 和 png 格式的图片')
    return false
  } else if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error('图片大小不能超过5M!')
    return false
  }
  return true
}

const submitForm = (formEl?: FormInstance) => {
  if (!formEl) return
  // todo: 提交
}
</script>

<template>
  <div class="submit">
    <el-form :model="form" label-position="top" ref="formRef">
      <el-form-item label="qq">
        <el-input v-model="form.qq" disabled />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" disabled />
      </el-form-item>
      <el-form-item label="游戏id">
        <el-input v-model="form.name" placeholder="务必确认空格及大小写是否填写正确" />
      </el-form-item>
      <el-form-item label="B站用户名">
        <el-input v-model="form.biliUsername" placeholder="请填写B站用户名" />
      </el-form-item>
      <el-form-item label="B站uid">
        <el-input v-model="form.biliUsername" placeholder="请填写B站uid" />
      </el-form-item>
      <el-form-item label="B站粉丝牌截图">
        <el-upload
          class="uploader"
          action="#"
          :show-file-list="false"
          :on-success="handleUploadSuccess"
          :before-upload="beforeUpload"
        >
          <img v-if="form.screenshot" :src="form.screenshot" class="avatar" />
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
}
.uploader {
  :deep(.el-upload) {
    border: 1px dashed @border-color;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    &:hover {
      border-color: @border-hover-color;
    }
    .el-icon.uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 150px;
      height: 150px;
      text-align: center;
    }
  }
}
</style>
