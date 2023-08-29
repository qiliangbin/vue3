<template>
  <div class="custombg flex flex-wrap">
    <div class="bgimgdiv" v-for="(item,index) in bgImgs" :key="index" @mouseenter="scaleBg(index, 'enter')" @mouseleave="scaleBg(index, 'leave')">
      <img class="bgimg mr-[30px] mb-[20px]" :src="item.imgUrl" alt="#">
      <span class="bgimgdiv_download" @click="downloadBgimg(item.imgUrl)">下载</span>
    </div>
    <div class="bgimgdiv">
      <span class="bgimgdiv_emptyadd flex justify-center items-center mr-[30px] mb-[20px]" @click="uploadBgimg">
        <el-icon><Plus /></el-icon>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getBgList } from '@/api/selfApi'
import {
  Plus
} from '@element-plus/icons-vue'
const bgImgs = ref()

onMounted(async () => {
  await getBgImgs()
})
const getBgImgs = async () => {
  const { status, msg } = await getBgList({ type: 1 })
  if(status) {
    bgImgs.value = msg.map(v => {
      return { imgUrl: v.imgUrl }
    })
  } 
}
const scaleBg = (index: number, type: string) => {
  const imgs = document.querySelectorAll('.bgimgdiv>.bgimg')
  const spans = document.querySelectorAll('.bgimgdiv>.bgimgdiv_download')
  if(type === 'enter') {
    imgs[index].style.transform = 'scale(1.1)'
    spans[index].style.transform = 'scale(1.1)'
    spans[index].style.opacity = '1'
  } else {
    imgs[index].style.transform = 'scale(1)'
    spans[index].style.transform = 'scale(1)'
    spans[index].style.opacity = '0'
  }
}
const downloadBgimg = (url:string) => {
  console.log(url)
}
const uploadBgimg = () => {
  
}
</script>
<style lang="less" scoped>
.custombg {
  width: 100%;
}
.bgimgdiv{
  display: inline;
  position: relative;
  &_download {
    display: block;
    width: 500px;
    background: #00AEEC;
    border-radius: 8px;
    transition: all .8s;
    opacity: 0;
    position: absolute;
    bottom: 18px;
    text-align: center;
    color: #fff;
  }
  &_emptyadd{
    display: flex;
    width: 500px;
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
  width: 500px;
  border-radius: 8px;
  transition: all .8s;
}
</style>