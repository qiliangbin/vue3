<template>
  <div class="dance">
    <span class="dance_num" :style="danceTranslate">0123456789</span>
  </div>
</template>  
<script lang="ts" setup>
import { ref, computed, toRefs, watchEffect } from 'vue';
const props = defineProps({
  num: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['update: num'])
const { num } = toRefs({...props})
const danceTranslate = computed(() => {
  return {
    transform: `translate(-20%, -${num.value*10}%)`
  }
})
const changeNum = () => {
  // emits('update: num', num.value)
  console.log(22222)
}
</script>
<style lang="less" scoped>
.dance{
  position: relative;
  width: 48px;
  height: 62px;
  background: #fb7299;
  border-radius: 6px;
  font-size: 62px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  transition: all .8s;
  overflow: hidden;
  &_num{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-20%, 0);
  }
}
</style>