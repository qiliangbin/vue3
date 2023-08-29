<template>
  <p :style="{ top: dragData.position.top + 'px', left: dragData.position.left + 'px' }" class="mapCom_move" id="moveDiv" @mousedown="dragStart" @mouseup="dragEnd"></p>
</template>
<script lang="ts" setup>
import { watch, ref, computed, reactive, toRefs } from "vue";
type TOffset = {
  [key:string]: number
}
interface IDragData{
  isDraggable: boolean
  offset: TOffset
  position: TOffset
}
// const props = defineProps<{
//   width: {
//     type: number
//   }
//   height: {
//     type: number
//   }
// }>()
const emits = defineEmits(['dragStart', 'dragStop'])
// let {width, height} = toRefs(props)
// watch('')
const dragData = reactive<IDragData>({
  isDraggable: false,
  offset: {},
  position: {
    top: 0,
    left: 0
  }
})
const dragPosition = computed(() => {
  let {top, left} = dragData.position
  return {
    "left": top + 'px',
    "top": left + 'px'
  }
})
const dragStart = (event) => {
  dragData.isDraggable = true
  // 计算元素距离浏览器边缘的距离 
  dragData.offset.x = event.clientX - dragData.position.left
  dragData.offset.y = event.clientY - dragData.position.top
  emits('dragStart')
  document.addEventListener('mousemove', (el) => {
    if(dragData.isDraggable) {
      drag(el)
    }
  })
}
const dragEnd = () => {
  emits('dragStop')
  dragData.isDraggable = false
}
const drag = (el) => {
  const windowWidth = document.documentElement.offsetWidth
  const windowHeight = document.documentElement.offsetHeight
  const {clientX, clientY} = el
  const {x, y} = dragData.offset
  dragData.position.top = clientY - y
  dragData.position.left = clientX - x
  if(dragData.position.left<=0) {
    dragData.position.left = 0 
  } else if(dragData.position.left >= windowWidth-700) {
    dragData.position.left = windowWidth - 700
  }
  if(dragData.position.top <= 0) {
    dragData.position.top = 0
  } else if(dragData.position.top >= windowHeight - 200) {
    dragData.position.top = windowHeight - 200
  }
}
</script>
<style lang="less" scoped>
.mapCom{
  position: relative;
  &_move {
    width: 60px;
    height: 60px;
    border: 1px solid #fff;
    background: #00AEEC;
    border-radius: 8px;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>