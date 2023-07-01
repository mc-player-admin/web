<script lang="ts" setup>
import { useUserStore } from '@/store/store'
import {
  UploadLogs as IconUploadLogs,
  Helpcenter as IconHelpcenter,
  GameThree as IconGameThree,
  Find as IconFind,
  People as IconPeople
} from '@icon-park/vue-next'
defineOptions({
  name: 'HomePage'
})
const user = useUserStore()

const SIZE = 60
</script>
<template>
  <div class="home">
    <div class="card_group">
      <!-- 未登录显示申请白名单 跳转登录界面(登陆后再跳转申请白名单) -->
      <template v-if="!user.isLogin">
        <router-link to="/login">
          <div class="card">
            申请白名单
            <icon-upload-logs :size="SIZE" />
          </div>
        </router-link>
      </template>
      <!-- 已登录跳转个人中心 -->
      <template v-else>
        <router-link to="/account">
          <div class="card">
            个人中心
            <icon-people :size="SIZE" />
          </div>
        </router-link>
      </template>
      <router-link to="/inquire">
        <div class="card">
          玩家查询
          <icon-find :size="SIZE" />
        </div>
      </router-link>
    </div>
    <div class="card_group">
      <div class="card">
        常见问题
        <icon-helpcenter :size="SIZE" />
      </div>
      <div class="card">
        游戏下载
        <icon-game-three :size="SIZE" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background-image: url(//static-1259453062.cos.ap-shanghai.myqcloud.com/user1/20230701095952-1%E5%9B%BE%E5%B1%82%200.png);
  background-size: cover;
  position: absolute;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
  .card_group {
    display: flex;
    flex-flow: row wrap;
    flex: 1;
    justify-content: space-around;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 280px;
    height: 350px;

    margin: 10px;
    padding: 15px;

    font-size: 22px;
    font-weight: 600;
    text-align: center;
    color: #000;

    box-sizing: border-box;
    box-shadow: -5px 5px 10px 0px #ffffff59;
    border-radius: 10px;
    background-color: #ffffffbb;
    cursor: pointer;
    transition: all 0.5s;
    .i-icon {
      color: rgb(114, 114, 114);
      transition: all 0.5s;
    }
    &:hover {
      transform: translate(0, -10px);
      box-shadow: -5px 8px 10px 3px #ffffff46;
      .i-icon {
        transform: translate(0, -10px);
      }
    }
  }
}
</style>
