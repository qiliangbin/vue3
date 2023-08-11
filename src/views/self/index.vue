<template>
  <div class="self">
    <MyTable stripe border :data="tableData" :column="column">
      <el-table-column prop="address" label="xxxx">
      </el-table-column>
      <el-table-column align="right">
        <template #default="scope">
          <el-button size="small">Edit</el-button>
        </template>
      </el-table-column>
    </MyTable>
  </div>
</template>
<script lang="ts" setup>
import Waterfall from '@/components/waterfall.vue'
import MyTable from '@/components/myTable.vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const column = [
  {
    prop: 'date',
    label: '日期',
    width: 200
  },
  {
    prop: 'name',
    label: '姓名',
  }
]
</script>
<style scoped>
.self {
  position: relative;
  height: 100%;
  background: rgb(73, 74, 95);
}
</style>