<template>
  <div class="animateTxt" @mouseenter="start" @mouseleave="leave" :style="{letterSpacing: num + 'px'}">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
import {ref, toRefs} from 'vue'
const props = defineProps<{
  text: string
}>()
const {text} = toRefs(props)
const num = ref<number>(-30)
const start = () => {
  num.value = 0
}
const leave = () => {
  num.value = -30
}
</script>
<style scoped lang="less">
.animateTxt{
  width: 600px;
  letter-spacing: -30px;
  font-size: 63px;
  cursor: pointer;
  // transition: all 8s;
  animation: danceText 2s;
}
@keyframes danceText{
  0%{
    letter-spacing: -30px;
  }
  100% {
    letter-spacing: 0;
  }
}
</style>