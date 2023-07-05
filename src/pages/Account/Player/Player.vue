<script setup lang="ts">
import { queryAudit, type Audit, queryPlayer } from '@/apis/audit'
import { Player } from '@/types/admin'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, h } from 'vue'
import { formatDate } from '@/utils/formatDate'
import AuditDetails from './AuditDetails.vue'
defineOptions({
  name: 'PlayerPage'
})

const audit = ref<Audit[]>([])
const player = ref<Player>()
const init = async () => {
  {
    const { data: res } = await queryAudit()
    if (res.status != 200) {
      return ElMessage.error('数据获取失败，' + (res.msg ? res.msg : '请稍后再试'))
    }
    audit.value = res.data
  }
  {
    const { data: res } = await queryPlayer()
    if (res.status != 200) {
      return ElMessage.error('数据获取失败，' + (res.msg ? res.msg : '请稍后再试'))
    }
    player.value = res.data[0]
  }
}
init()

const viewDetails = (row: Audit) => {
  ElMessageBox({
    title: '审核详情',
    confirmButtonText: '确定',
    customClass: 'view_detail',
    message: () => {
      return h(AuditDetails, row)
    }
  })
}
</script>

<template>
  <div class="player">
    <h2>我的账号</h2>
    <template v-if="player">
      <div class="name">
        游戏ID: <span>{{ player.name }}</span>
      </div>
    </template>
    <template v-else>
      <router-link to="/submit">
        <el-button>前往申请</el-button>
      </router-link>
    </template>
  </div>
  <div class="audit">
    <h2>提交记录</h2>
    <el-table :data="audit" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="游戏ID" width="180" />
      <el-table-column
        prop="date"
        label="提交时间"
        width="180"
        :formatter="(row) => formatDate(row.date)"
      />
      <el-table-column prop="status" label="审核状态" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default v-if="scope.row.status == 2">
              <div>审核人: {{ scope.row.approver_username }}</div>
              <div v-if="scope.row.cause">原因: {{ scope.row.cause }}</div>
            </template>
            <template #reference>
              <el-tag type="success" v-if="scope.row.status == 2 && scope.row.result == 1"
                >审核通过</el-tag
              >
              <el-tag type="warning" v-if="scope.row.status == 1">正在审核</el-tag>
              <el-tag type="danger" v-if="scope.row.status == 2 && scope.row.result == 2"
                >审核未通过</el-tag
              >
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" link @click="viewDetails(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="less" scoped>
.player,
.audit {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 8px;
  h2 {
    margin: 8px 0;
  }
}

.player {
  .name {
    font-size: 20px;
    span {
      font-weight: 600;
    }
  }
}

.audit_content {
  display: flex;
  flex-direction: column;
  .name {
    font-size: 20px;
    font-weight: 600;
  }
  .info {
    display: flex;
    align-items: center;
    .date {
      margin: 0 10px;
    }
    .details {
      color: blue;
    }
  }
}
</style>
