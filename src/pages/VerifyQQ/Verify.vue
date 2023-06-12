<script setup lang="ts">
defineOptions({
  name: 'VerifyPage'
})
</script>

<template>
  <div class="verify">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>验证账号</span>
        </div>
      </template>

      <!-- 验证成功 -->
      <div class="success" v-if="true">
        <p>恭喜，您的账号验证成功，现在可以登录！</p>
        <router-link to="/login">
          <el-button type="warning">前往登录</el-button>
        </router-link>
      </div>
      <!-- 验证失败 -->
      <div class="err" v-else>
        <p>您访问的链接不是一个有效链接！请重新访问！</p>
      </div>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.verify {
  max-width: 90%;
  margin: 20px auto;
  h1 {
    margin: 10px;
  }
  p {
    margin: 30px 0;
  }
}
</style>
