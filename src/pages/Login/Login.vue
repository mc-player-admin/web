<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

defineOptions({
  name: 'LoginPage'
})

const routers = [
  {
    index: 'password',
    text: '密码登录',
    components: defineAsyncComponent(() => import('@/components/LoginMethod/LoginWithPassword.vue'))
  },
  {
    index: 'code',
    text: '验证码登录',
    components: defineAsyncComponent(() => import('@/components/LoginMethod/LoginWithCode.vue'))
  },
  {
    index: 'qrcode',
    text: '扫码登录',
    disabled: true
  }
]

const activeName = ref(routers[0].index)
</script>

<template>
  <div class="login">
    <h1 class="login_title">登录</h1>

    <div class="login-mode-selete">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane
          v-for="item in routers"
          :key="item.index"
          :label="item.text"
          :name="item.index"
          :disabled="item.disabled"
        >
          <component v-if="item.components" :is="item.components" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="any_method">
      <h3 class="title">其他方式登录</h3>
      <div class="methods">
        <div class="item qq">
          <div class="icon">
            <img src="@/assets/03_qq_symbol.png" alt="qq登录" />
          </div>
          QQ登录
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 居中
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
:deep(.el-tabs__content) {
  margin: 0 20px;
  margin-top: 20px;
}
.login {
  margin: 0 auto;
  max-width: 550px;
  .login_title {
    text-align: center;
    font-size: 26px;
    margin: 25px;
  }

  .login-mode-selete {
    margin: 25px;
  }
}

.any_method {
  .title {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
  .methods {
    display: flex;
    justify-content: space-around;
    .item {
      display: flex;
      align-items: center;
      .icon {
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        margin-right: 5px;
        cursor: pointer;
      }
      &.qq .icon {
        background-color: #23a0f0;
        img {
          height: 18px;
        }
      }
    }
  }
}
</style>
