<!-- <script lang="ts" setup></script> -->
<template>
  <div class="home">
    <!-- 申请白名单 -->
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>申请白名单</span>
          <el-button type="primary">立即申请</el-button>
        </div>
      </template>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro qui labore, facere
        similique dolor exercitationem voluptate. Quaerat laboriosam iste fuga vitae reiciendis ea
        delectus vero, assumenda impedit praesentium iure.
      </div>
    </el-card>

    <!-- 玩家查询 -->
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>玩家查询</span>
          <el-button type="primary">查看详细</el-button>
        </div>
      </template>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro qui labore, facere
        similique dolor exercitationem voluptate. Quaerat laboriosam iste fuga vitae reiciendis ea
        delectus vero, assumenda impedit praesentium iure.
      </div>
    </el-card>

    <!-- 常见问题 -->
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>常见问题</span>
          <el-button type="primary">进入文档</el-button>
        </div>
      </template>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro qui labore, facere
        similique dolor exercitationem voluptate. Quaerat laboriosam iste fuga vitae reiciendis ea
        delectus vero, assumenda impedit praesentium iure.
      </div>
    </el-card>

    <!-- 状态查询 -->
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>服务器状态</span>
          <el-button type="primary">查看详细</el-button>
        </div>
      </template>
      <!-- <div>这里或许可以放一个状态的预览？</div> -->
      <div class="statusiframe">
        <iframe
          src="https://motd.mcxing.cn/iframe?id=2&dark=false"
          width="400"
          height="130px"
          frameborder="0"
        ></iframe>
      </div>
    </el-card>

    <!-- 问题反馈 v-if禁用 -->
    <el-card class="box-card" shadow="hover" v-if="false">
      <template #header>
        <div class="card-header">
          <span>工单支持</span>
          <el-button type="primary">提交反馈</el-button>
        </div>
      </template>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro qui labore, facere
        similique dolor exercitationem voluptate. Quaerat laboriosam iste fuga vitae reiciendis ea
        delectus vero, assumenda impedit praesentium iure.
      </div>
    </el-card>
  </div>
</template>
<style lang="less" scoped>
.home {
  margin: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  justify-content: center;
}

// el-card
.box-card {
  width: 480px;
  margin: 20px 10px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
}

// 状态查询
.statusiframe {
  user-select: none;
  border-radius: 3px;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
