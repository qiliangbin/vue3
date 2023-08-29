<template>
  <ul class="sideitem">
    <li class="sideitem_item flex justify-start items-center" v-for="(item, index) in cardList" :class="activeIndex === index ? 'active' : ''" @click="goToRouter(item.router, index)" :key="index">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span class="ml-[10px]">{{ item.name }}</span>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Location,
  Picture,
  MoreFilled,
  House
} from '@element-plus/icons-vue'
const cardList = [
  {
    name: '首页',
    icon: House,
    router: '/homepage'
  },
  {
    name: '地图',
    icon: Location,
    router: '/homemap'
  },
  {
    name: '背景选择',
    icon: Picture,
    router: '/custombg'
  },
  {
    name: '待续',
    icon: MoreFilled,
    router: '/index'
  }
]
const activeIndex = ref<number>(0)
const router = useRouter()
const goToRouter = (path:string, index: number) => {
  router.push(path)
  activeIndex.value = index
}
</script>
<style lang="less" scoped>
.sideitem {
  z-index: 10;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  margin-right: 30px;
  height: 300px;
  &_item {
    width: 164px;
    color: #909090;
    font-size: 18px;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    &:hover{
      background: rgba(#00AEEC, .1);
      color: #00AEEC
    }
  }
}
.active {
  color: #00AEEC;
  background: rgba(#00AEEC, .1);
}
</style>