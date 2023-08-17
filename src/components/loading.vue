<template>
  <div class="loading flex justify-center items-center flex-col" v-if="useGloabl.loadState">
    <img class="loading_gif" src="../assets/imgs/loding.gif" alt="">
    <span>玩命加载中...</span>
  </div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global'
const useGloabl = useGlobalStore()
</script>
<style lang="less" scoped>
.loading {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .1);
  color: #fff;
  &_gif {
    width: 150px;
    transform: scaleX(-1);
  }
}
</style>