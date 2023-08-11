<template>
  <el-table 
    :data="tableData"
  >
    <el-table-column 
     v-for="(item, index) in column" 
     :key="index"
     :prop="item.prop"
     :label="item.label"
     :width="item.width ? item.width : 100"
     >
    </el-table-column>
    <slot></slot>
  </el-table>
</template>
<script lang="ts" setup>
interface ITableColumn {
  prop : string
  label: string
  width?: number
}
import { toRefs } from 'vue'
const props = defineProps<{
  tableData: ITableColumn[]
  column: any[]
}>()
const { tableData, column } = toRefs(props)
</script>