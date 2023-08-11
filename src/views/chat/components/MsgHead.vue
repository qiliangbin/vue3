<template>
  <div class="msgHead">
    <span class="msgHead_name">{{ props.items.name }}</span>
    <span>
      <!-- <el-icon><component :is="isOnline"></component></el-icon> -->
    </span>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, toRefs, watchEffect } from 'vue'
import {
  SuccessFilled,
  RemoveFilled
} from '@element-plus/icons-vue'
const props = defineProps<{
  items: {
    name: string,
    // online: boolean
  }
}>()
onMounted(() => {
  
})
</script>
<style lang="less" scoped>
.msgHead {
  margin-top: 10px;
  line-height: 52px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &_name {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>