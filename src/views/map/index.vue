<template>
  <div class="mapBox" ref="mapRef">
    <!-- <Drag :width="width" :height="height"></Drag> -->
    <Pinao />
    <animateTxt :text="'ANIMATE TEXT'" />
    <transition name="fade" enter-active-class="enter" leave-active-class="leave">
      <div v-if="animateEject">Hello，前端一万小时</div>
    </transition>
    <el-button type="primary" @click="showAnimate">弹起</el-button>
    <input id="files1" ref="fileVal" type="file"  value="" @change="showAnimate">
    <img :src="imgUrl" alt="">
  </div>
</template>
<script lang="ts" setup>
import Drag from '@/components/drag.vue'
import Pinao from '@/components/pinao.vue'
import animateTxt from '@/components/animateTxt.vue'
import { onMounted, ref, watch, computed } from 'vue'
import { myUserLogin } from '@/api/mapApi'
import { uploadImgApi } from '@/api/upload'
import { uploadFile } from '@/hooks/useUpload'
import axios from 'axios'
const mapRef = ref()
const width = ref()
const height = ref()
const animateEject = ref(false)
const fileVal = ref()
const imgUrl = ref('')
watch([mapRef, width], ([newE, oldE], [newW, oldW]) => {
  console.log(newE, oldE)
  console.log(newW, oldW)
},{
  flush: "sync",
  immediate: true
})
const getGitHub = async () => {
  try{
    const data = await myUserLogin()
    console.log(data)
  } catch(e) {
    console.log(e)
  }
}
const showAnimate = async (val: any) => {
  const file = val.target.files[0]
  let formData = new FormData()
  formData.append('files', file)
  const res = await uploadImgApi(formData)
  // imgUrl.value = await uploadFile(val)
  imgUrl.value = res.data

  // animateEject.value = !animateEject.value
}
const animateCss = computed(() => {
  let base = 'animate__animated'
  return animateEject.value ? base + ' animate__rubberBand' : base + ' animate__bounceIn'
})
onMounted(() => {
  getGitHub()
})
</script>
<style lang="less" scoped>
.cover {
  height: 200px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-top: 100px;
}
.overflow{
  width: 100px;
  height: 50px;
  background: #000;
  display: block;
  transition: 1s;
  :hover{
    height: 100px;
  }
}
.mapBox{
  position: relative;
  height: 100%;
  width: 100%;
}
.history{
  width: 300px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &_item {
    padding: 2px;
    line-height: 16px;
    background: bisque;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 8px;
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/* 2️⃣把样式中的类名进行更改。 */
.enter {
  transform-origin: left center;
  animation: bounce-in 1s;
}

.leave {
  transform-origin: left center;
  animation: bounce-in 1s reverse;
}
.ejectBox{
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: #7fd3be;
  opacity: .6;
  // transform: scale(0);
}
</style>