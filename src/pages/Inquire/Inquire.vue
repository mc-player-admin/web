<script lang="ts" setup>
import { ref } from 'vue'
import { Search as IconSearch } from '@icon-park/vue-next'
import { getInquiresData } from '@/apis/inquire'
import { throttle } from 'lodash'
import { status } from './status'
import { formatDate } from '@/utils/formatDate'

const keyword = ref('')
const tableData = ref<object[]>([])

const getData = throttle(async (value) => {
  const { data: res } = await getInquiresData(value)
  tableData.value = res.data
  console.log(res)
}, 2000)

const queryPlayerFn = async (value: string) => {
  if (value == '') {
    return (tableData.value = [])
  }
  getData(value)
}

const getStatus = (key: keyof typeof status) => {
  return status[key]
}
</script>
<template>
  <div id="inquire">
    <div class="title">
      <h1>玩家查询</h1>
    </div>
    <div class="input">
      <el-input
        v-model="keyword"
        placeholder="在此处键入 QQ号 或 游戏ID 以查询玩家"
        @input="queryPlayerFn(keyword)"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><icon-search /></el-icon>
        </template>
      </el-input>
    </div>
    <div class="table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="游戏ID" />
        <el-table-column prop="qq" label="QQ" />
        <el-table-column
          prop="register_date"
          label="注册时间"
          :formatter="(row) => formatDate(row.register_date)"
        />
        <el-table-column prop="type" label="状态">
          <template #default="scope">
            <el-tag :type="getStatus(scope.row.type).type">
              {{ getStatus(scope.row.type).text }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="less" scoped>
#inquire {
  padding: 25px;
  margin: 0 auto;
  background-color: #fff;
  min-height: 80vh;
  .input {
    margin: 30px auto;
    max-width: 600px;
  }
  .title {
    text-align: center;
  }
}
</style>
