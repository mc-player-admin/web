<script setup lang="ts">
import dayjs from 'dayjs'
import { type Audit } from '@/apis/audit'
import { computed } from 'vue'
defineOptions({
  name: 'AuditDetails'
})

const props = defineProps<Audit>()
const HOST = '//static-1259453062.cos.ap-shanghai.myqcloud.com/'
const screenshot = computed(() => {
  return `${HOST}${props.screenshot}`
})
</script>

<template>
  <h2>提交信息</h2>
  <div class="data">
    <div class="item">
      <div class="key">审核id</div>
      <div class="value">{{ id }}</div>
    </div>
    <div class="item">
      <div class="key">游戏id</div>
      <div class="value">{{ name }}</div>
    </div>
    <div class="item">
      <div class="key">提交时间</div>
      <div class="value">{{ dayjs(date).format('YYYY-MM-DD HH:mm') }}</div>
    </div>
    <div class="item">
      <div class="key">B站用户名</div>
      <div class="value">{{ bili_username }}</div>
    </div>
    <div class="item">
      <div class="key">B站UID</div>
      <div class="value">{{ bili_uid }}</div>
    </div>
    <div class="item">
      <div class="key">粉丝牌截图</div>
      <div class="value">
        <el-image :src="screenshot" fit="contain" :preview-src-list="[screenshot]" />
      </div>
    </div>
  </div>
  <h2>审核结果</h2>
  <el-tag type="success" v-if="status == 2 && result == 1">审核通过</el-tag>
  <el-tag type="warning" v-if="status == 1">正在审核</el-tag>
  <el-tag type="danger" v-if="status == 2 && result == 2">审核未通过</el-tag>
  <template v-if="status != 1">
    <h2>审核人</h2>
    <div class="approver">
      <el-avatar :src="approver_avatar" />
      <div class="name">{{ approver_username }}</div>
    </div>
    <template v-if="cause">
      <h2>存在问题</h2>
      <p>{{ cause }}</p>
    </template>
  </template>
</template>

<style>
.el-message-box {
  max-width: 90% !important;
}
</style>
<style lang="less" scoped>
.info {
  .name {
    font-size: 30px;
    font-weight: 600;
    color: #000;
  }
  .date {
    margin-top: 10px;
  }
}
h2 {
  margin: 15px 0 8px 0;
}
.data {
  .item {
    display: flex;
    margin: 4px 0;
    .key {
      width: 6em;
      color: #333a;
    }
    .value {
      .el-image {
        max-width: 150px;
        height: 150px;
      }
    }
  }
}

.approver {
  display: flex;
  align-items: center;
  font-size: 18px;
  .name {
    margin-left: 8px;
  }
}
</style>
