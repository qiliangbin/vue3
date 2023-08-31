<template>
  <div class="waterfallContent" ref="waterfallWrapper" :style="{ height: `${wrapperHeight}px` }">
    <div v-for="item in list" :key="item.id" class="waterfall-item bgimgdiv">
      <img class="bgimg mr-[30px] mb-[20px]" :src="item.url" @load="imageLoad" alt="#">
      <a class="bgimgdiv_download" @click="downloadBgimg(item.url)">下载</a>
      <span class="bgimgdiv_del" @click="delCurrentBg(item.id)">删除</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { getBgList } from '@/api/selfApi'
import { debounce } from '@/hooks/useWaterFallFlow'
import { watch } from 'fs'
const bgImgs = ref([])
const list = ref<any[]>([])
const waterfallWrapper = ref<any>(null)
const wrapperWidth = ref(0)
const wrapperHeight = ref(0)
// 间隙
const gutter = ref(20)
// 单列宽
const colWidth = ref(300)
// 列数
const cols = computed(() => {
  return Math.floor((wrapperWidth.value - gutter.value) / (colWidth.value + gutter.value))
})
// x偏移
const offsetX = computed(() => {
  const contextWidth = cols.value * (colWidth.value + gutter.value) + gutter.value
  return (wrapperWidth.value - contextWidth) / 2
})

const getBgImgs = async () => {
  const { status, msg } = await getBgList({ operator: localStorage.getItem('nickName') })
  if(status) {
    list.value = msg.map(v => {
      return { 
        url: v.imgUrl,
        id: v.id
      }
    })
  } 
}
const layout = () => {
  // 初始化 y 集合
  const posY = new Array(cols.value).fill(gutter.value)
  // 节点
  const items = document.querySelectorAll('.waterfall-item')
  // 遍历
  for (let i = 0; i < items.length; i++) {
    const curItem = items[i]
    // 最小的y值
    const minY = Math.min.apply(null, posY)
    // 最小y的下标
    const minYIndex = posY.indexOf(minY)
    // 当前下标对应的x
    const curX = gutter.value * (minYIndex + 1) + colWidth.value * minYIndex + offsetX.value
    // 设置偏移
    curItem.style.transform = `translate3d(${curX}px,${minY}px, 0)`
    curItem.style.width = `${colWidth.value}px`
    // 更新当前index的y值
    const { height } = curItem.getBoundingClientRect()
    posY[minYIndex] += height + gutter.value
  }

  // 设置容器高度
  wrapperHeight.value = Math.max.apply(null, posY)
}
const imageLoad = debounce(() => {
    layout()
}, 1000)

onMounted(async () => {
  wrapperWidth.value = waterfallWrapper.value.offsetWidth
  await getBgImgs()
  await layout()
})
</script>
<style lang="less" scoped>
.waterfallContent {
  width: 100%;
  height: 200px;
  overflow: scroll;
}
.waterfall-item {
  position: absolute;
  left: 200px;
  top: 0;
}

.bgimgdiv{
  display: inline;
  // position: relative;
  &_download {
    display: block;
    width: 460px;
    background: #00AEEC;
    border-radius: 8px;
    transition: all .8s;
    opacity: 0;
    position: absolute;
    bottom: 18px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  &_del {
    position: absolute;
    right: 30px;
    top: 0px;
    cursor: pointer;
    opacity: 0;
    color: #fb7299;
    transition: all .8s;
  }
  &_emptyadd{
    display: flex;
    width: 460px;
    border: 1px solid #00AEEC;
    height: 78px;
    border-radius: 8px;
    font-size: 24px;
    color: #00AEEC;
    cursor: pointer;
  }
}
.bgimg{
  display: block;
  width: 460px;
  border-radius: 8px;
  transition: all .8s;
}
</style>