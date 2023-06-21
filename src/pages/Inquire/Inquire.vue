<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref } from 'vue'
import { Search as IconSearch } from '@icon-park/vue-next'
import { getInquiresData } from '@/apis/inquire'
import { throttle } from 'lodash'
import { getStatus } from './getStatus'

const keyword = ref('')
const tableData = ref([{}])

const getData = throttle(async (value) => {
  const { data: res } = await getInquiresData(value)
  const newData = res.data.map((e) => {
    e.type = getStatus(e.type)
    e.register_date = dayjs(e.register_date).format('YYYY-MM-DD HH:mm:ss')
    return e
  })
  tableData.value = newData
  console.log(res)
}, 2000)

const queryPlayerFn = async (value: string) => {
  if (value == '') {
    return
  }
  getData(value)
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
        class="w-50 m-2"
        placeholder="在此处键入 QQ号 或 游戏ID 以查询玩家"
        @input="queryPlayerFn(keyword)"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><IconSearch /></el-icon>
        </template>
      </el-input>
    </div>
    <div class="table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="游戏ID" />
        <el-table-column prop="qq" label="QQ" />
        <el-table-column prop="register_date" label="注册时间" />
        <el-table-column prop="type" label="状态" />
      </el-table>
    </div>
  </div>
</template>
<style lang="less" scoped>
#inquire {
  max-width: 800px;
  padding: 25px;
  margin: 0 auto;
  background-color: #fff;
  .input {
    margin: 30px auto;
    max-width: 600px;
  }
}
</style>
