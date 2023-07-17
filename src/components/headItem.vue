<template>
  <header class="header">
    <el-icon>
      <component @click="changeCollapse" :is="switchIcon"></component>
    </el-icon>
  </header>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/stores/global'

const {changeCollapse, collapse} = toRefs(useGlobalStore())
const switchIcon = computed(() => {
  return collapse.value ? Fold : Expand
})
</script>
<style lang="less" scoped>
.header{
  width: 100%;
  height: 72px;
  background: #ffffff;
  box-shadow: 0 0 10px 10px#eef0f4;
  font-size: 28px;
  line-height: 72px;
}
</style>