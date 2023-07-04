<script setup lang="ts">
import AccountUser from '@/components/AccountUser/AccountUser.vue'
import { ElMessageBox } from 'element-plus'
import { random } from 'lodash'
import Logout from '@/components/Logout/Logout.vue'
defineOptions({
  name: 'AccountPage'
})

const dontClickEvents = [
  () => {
    document.body.animate(
      [
        {
          transform: 'rotate(0) scale(1)'
        },
        {
          transform: 'rotate(360deg) scale(0)'
        },
        {
          transform: 'rotate(0) scale(2)'
        },
        {
          transform: 'rotate(360deg) scale(1)'
        }
      ],
      {
        duration: 5000,
        iterations: Infinity
      }
    )
  },
  () => {
    document.querySelectorAll('*').forEach((el) => {
      const randomColor = () => `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}`
      const colors = []
      let i = 100
      while (i--) {
        colors.push(randomColor())
      }
      el.animate(
        colors.map((e) => {
          return {
            backgroundColor: e
          }
        }),
        {
          duration: 5000,
          iterations: Infinity
        }
      )
    })
  },
  () => {
    document.body.addEventListener('mouseover', (e) => {
      e.stopPropagation()
      e.preventDefault()

      const target = e.target as HTMLElement
      if (['nav', 'account', 'content'].includes(target.className)) {
        return
      }

      const a = target.getAnimations()

      if (a.find((e) => e.id == 'float-animate')) {
        return
      }

      target.animate(
        [
          {
            transform: `translate(0, 0) rotate(0deg)`
          },
          {
            transform: `translate(0, -1000px) rotate(30deg)`
          }
        ],
        {
          duration: 10000,
          fill: 'forwards',
          id: 'float-animate'
        }
      )
    })
  }
]
const dontClick = async () => {
  await ElMessageBox({
    title: '警告',
    message: '该操作将导致网页产生不可修复的损坏，请勿轻易尝试，是否继续',
    showCancelButton: true,
    showClose: false,
    confirmButtonText: '继续',
    cancelButtonText: '继续'
  }).catch(() => {})
  dontClickEvents[random(0, dontClickEvents.length - 1)]()
}
</script>

<template>
  <account-user />
  <!-- <el-alert title="您还没有完善信息" type="warning" show-icon>完善后才可以申请白名单</el-alert> -->
  <div class="options">
    <ul>
      <router-link to="/inquire">
        <li>玩家查询</li>
      </router-link>
      <a href="https://motd.mcxing.cn/detail/2">
        <li>服务器状态</li>
      </a>
      <!-- <li>常见问题</li> -->
      <a
        href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Jb1j3C8wbLb2yJ7Z9pgzPbLwrqtpM-7a&authKey=DguX88p4VA1cU%2BCn0OkIVh8zeh3bE7oxmHtOc6bivcuWUabakR7aChso5NsWUb2l&noverify=0&group_code=962663855"
      >
        <li>问题反馈</li>
      </a>
      <a href="https://github.com/mc-player-admin/web/issues">
        <li>BUG反馈</li>
      </a>
      <li @click="dontClick">千万别点</li>
      <logout>
        <li>退出登录</li>
      </logout>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.el-alert {
  margin-top: 8px;
}
.options {
  background-color: #fff;
  margin-top: 8px;
  ul {
    display: flex;
    flex-direction: column;
    a,
    li {
      color: #000;
    }
    li {
      list-style: none;
      height: 45px;
      line-height: 45px;
      padding-left: 15px;
      border-bottom: 1px solid #aaaaaa2a;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background-color: #eeeeee63;
      }
    }
  }
}
</style>
