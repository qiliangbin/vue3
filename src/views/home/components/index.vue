<template>
  <div class="mapCom">
    <myDrag />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import myDrag from '@/components/myDrag.vue';
const moveDiv = document.getElementById('move')

const startDrag = (e: any) => {
  console.log('xxxx')
}
</script>
<style lang="less" scoped>
.mapCom{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>