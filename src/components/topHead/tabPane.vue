<template>
  <div class="tabpane flex">
    <span class="tabpane_logo">Logo</span>
    <ul class="tabpane_tabs flex">
      <li class="tabpane_tabs_item" v-for="(item, index) in tabsList" @click="goTabRoute(item.router, index)" :key="index">
        <span :class="useGloabl.routerIndex == index ? 'activeColor' : ''">
          {{ item.tabName }}
        </span>
        <span :style="offsetLeft" class="activeTabline"></span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, toRefs, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGlobalStore } from '@/stores/global'

const useGloabl = useGlobalStore()
const router = useRouter()
const tabsList = [
  {
    tabName: '首页',
    router: '/index'
  },
  {
    tabName: '文章',
    router: '/self'
  },
  {
    tabName: '动画',
    router: '/self'
  },
  {
    tabName: '待续',
    router: '/self'
  },
  {
    tabName: '我的',
    router: '/self'
  }
]
const offsetLeft = computed(() => {
  let offsetWidth = (useGloabl.routerIndex * 90) + 32
  return {
    "left": offsetWidth + 'px'
  }
})
const goTabRoute = (routerName: string, index: number) => {
  useGloabl.setRouterIndex(index)
  router.push(routerName)
}
</script>
<style lang="less" scoped>
.tabpane{
  color: #000;
  &_tabs {
    text-align: center;
    position: relative;
    &_item {
      width: 90px;
      font-size: 18px;
      line-height: 42px;
      cursor: pointer;
    }
  }
  .activeTabline {
    position: absolute;
    width: 25px;
    height: 3px;
    background: #fb7299;
    bottom: 0;
    transition: .4s all;
  }
  .activeColor{ 
    color: #00AEEC;
  }
}
</style>