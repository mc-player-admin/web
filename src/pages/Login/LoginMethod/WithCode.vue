<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'WithCode'
})

const logindata = ref({
  username: '',
  code: ''
})

const mode = ref('bot')
</script>

<template>
  <div class="code">
    <!-- 选择验证方式 -->
    <div class="mb-2 flex items-center text-sm">
      <el-radio-group v-model="mode" class="ml-4">
        <el-radio label="bot" size="large" aria-checked>机器人验证</el-radio>
        <el-radio label="mail" size="large">邮件验证</el-radio>
        <el-tooltip class="box-item" effect="dark" content="还没做~" placement="top">
          <el-radio label="phoneid" size="large" disabled>短信验证</el-radio>
        </el-tooltip>
      </el-radio-group>
    </div>

    <!-- 机器人验证 -->
    <div class="bot" v-if="mode == 'bot'">
      <el-form-item label="邮箱">
        <el-input v-model="logindata.username">
          <template #append>@qq.com</template>
        </el-input>
      </el-form-item>
      <div class="bot-send-tips">向机器人发送“获取验证码”</div>
      <el-form-item label="验证码">
        <el-input v-model="logindata.code" />
      </el-form-item>
      <el-button type="primary">登录</el-button>
    </div>

    <!-- 邮件验证 -->
    <div class="mail" v-if="mode == 'mail'">
      <el-form-item label="邮箱">
        <el-input v-model="logindata.username">
          <template #append>@qq.com</template>
        </el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="logindata.code">
          <template #append>
            <el-button>点击获取验证码</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.code {
  max-width: 500px;
  margin: auto;
}

.bot {
  margin: 25px 0;
  .bot-send-tips {
    margin: 15px 0;
  }
}

.mail {
  margin: 25px 0;
}
</style>
