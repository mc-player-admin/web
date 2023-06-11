<script setup lang="ts"></script>

<template>
  <div class="register">
    <router-link class="option" to="/register/new-account">
      <div class="icon">
        <img src="@/assets/player-0.png" alt="" />
      </div>
      <div class="text">
        <h2 class="title">我是新玩家</h2>
        <p class="remark">没有白名单，需要申请</p>
        <el-button type="primary" text>前往申请></el-button>
      </div>
    </router-link>
    <router-link class="option" to="/register/transfer-account">
      <div class="icon">
        <img src="@/assets/player-1.png" alt="" />
      </div>
      <div class="text">
        <h2 class="title">我是老玩家</h2>
        <p class="remark">曾经玩过服务器，有白名单，需要补充信息</p>
        <el-button type="primary" text>去补充信息></el-button>
      </div>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
.register {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  max-width: 800px;
  margin: 0 auto;

  .option {
    cursor: pointer;
    width: 200px;
    // height: 300px;
    border: @border-color 1px solid;
    border-radius: 15px;
    display: flex;
    // justify-content: space-around;
    flex-flow: column;
    align-items: center;
    padding: 20px 0;
    transition: all 0.5s;
    color: @text-color;

    &:hover {
      transform: translateY(-10px);
      .icon img {
        transform: scale(1.2);
      }
    }
    .icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      border: @border-color 3px solid;
      img {
        width: 100%;
        transform: scale(1.08);
        transition: all 0.5s;
      }
    }
    .text {
      text-align: center;
      .title {
        text-align: center;
        margin-top: 15px;
      }
      .remark {
        font-size: 14px;
        text-align: center;
        margin: 0 10px;
        margin-top: 20px;
        height: 30px;
      }
      .el-button {
        margin-top: 15px;
      }
    }
  }
  .min-width(480px, {
    flex-flow: column;
    .option {
      width: 300px;
      flex-flow: row;
      justify-content: space-around;
      &:last-child {
        margin-top: 15px;
      }
      .text {
        text-align: left;
        .el-button {
          margin: 0;
        }
        .remark,
        .title {
          margin: 5px;
          margin-left: 10px;
          text-align: left;
          width: 150px;
        }
      }
    }
  });
}
</style>
