<template>
  <div class="window">
    <div class="window_item" @mouseenter="showRepeatTxt('enter', item)" @mouseleave="showRepeatTxt('leave', item)" v-for="(item,index) in windowList" :key="index">
      {{ isEnter ? repeat[activeIndex] : item }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const windowList = [0, 1, 2, 3]
const repeat = ['我是展开的0', '我是展开的1', '我是展开的2', '我是展开的3']
const isEnter = ref(false)
const activeIndex = ref()
const showRepeatTxt = (type:string, item:number) => {
  isEnter.value = type === 'enter' ? true : false
  activeIndex.value = item
}
</script>
<style lang="less" scoped>
.window {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  &_item{
    width: 100px;
    border: 1px solid #eee;
    height: 300px;
    cursor: pointer;
    transition: ease-in-out .2s;
    line-height: 300px;
    text-align: center;
    font-weight: 800;
    &:hover {
      width: 200px;
    }
  }
}
</style>