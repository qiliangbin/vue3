<template>
  <div class="custombg flex flex-wrap items-start">
    <div class="bgimgdiv" v-for="(item,index) in bgImgs" :key="index" @mouseenter="scaleBg(index, 'enter')" @mouseleave="scaleBg(index, 'leave')">
      <img class="bgimg mr-[30px] mb-[20px]" :src="item.imgUrl" alt="#">
      <a class="bgimgdiv_download" @click="downloadBgimg(item.imgUrl)">下载</a>
      <span class="bgimgdiv_del" @click="delCurrentBg(item.id)">删除</span>
    </div>
    <div class="bgimgdiv">
      <input type="file" class="bgimgdiv_emptyadd ipt" @change="uploadBgimg" />
      <span class="bgimgdiv_emptyadd flex justify-center items-center mr-[30px] mb-[20px]">
        <el-icon><Plus /></el-icon>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'
import { getBgList, delBgImg } from '@/api/selfApi'
import { uploadFile, downloadFile } from '@/hooks/useUpload'
import { uploadBgImg } from '@/api/homepage'
import {
  Plus
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { debounce } from '@/hooks/useWaterFallFlow'

const nickName = localStorage.getItem('nickName')
const bgImgs = ref()
const isFinsh = ref(false)
const pageParams = ref({
  page: 1,
  size: 10
})
onBeforeUnmount(() => {
  const scroEl = document.querySelector('.custombg')
  scroEl.removeEventListener('scroll', () => {})
})
onMounted(async () => {
  await getBgImgs()
  const scroEl = document.querySelector('.custombg')
  scroEl.addEventListener('scroll', watchScroll)
})

const watchScroll = debounce(async () => {
  const scroEl = document.querySelector('.custombg')
  //变量scrollTop是滚动条滚动时，距离顶部的距离
  var scrollTop = scroEl.scrollTop
  //变量windowHeight是可视区的高度
  var clientHeight = scroEl.clientHeight;
  //变量scrollHeight是滚动条的总高度
  var scrollHeight = scroEl.scrollHeight
  if(scrollTop + clientHeight === scrollHeight) {
    // const data = await getBgImgs()
    // bgImgs.value = bgImgs.value.concat(data)
  }
}, 1000)
const delCurrentBg = async (id: number) => {
  const params = {
    id,
    operator: nickName
  }
  const res = await delBgImg(params)
  if(res.success) {
    ElMessage.success('删除成功')
    isFinsh.value = false
    await getBgImgs()
  } else {
    ElMessage.error('删除失败')
  }
}
const getBgImgs = async () => {
  // if(isFinsh.value) return
  // pageParams.value.page
  const { status, msg } = await getBgList({ operator: nickName, ...pageParams.value })
  console.log(status, '0000')
  if(status) {
    console.log(msg, '--')
    bgImgs.value = msg
  } 
}
const scaleBg = (index: number, type: string) => {
  const imgs = document.querySelectorAll('.bgimgdiv>.bgimg')
  const spans = document.querySelectorAll('.bgimgdiv>.bgimgdiv_download')
  const delBtn = document.querySelectorAll('.bgimgdiv>.bgimgdiv_del')
  if(type === 'enter') {
    imgs[index].style.transform = 'scale(1.1)'
    spans[index].style.transform = 'scale(1.1)'
    spans[index].style.opacity = '1'
    delBtn[index].style.opacity = '1'
  } else {
    imgs[index].style.transform = 'scale(1)'
    spans[index].style.transform = 'scale(1)'
    spans[index].style.opacity = '0'
    delBtn[index].style.opacity = '0'
  }
}
const downloadBgimg = async (url:string) => {
  await downloadFile(url, `${new Date().getTime()}`)
}
const uploadBgimg = async (e: any) => {
  const uploadUrl: string = await uploadFile(e)
  const params = {
    type: 2,
    imgUrl: uploadUrl,
    operator: nickName
  }
  const res = await uploadBgImg(params)
  if(res.success) {
    await getBgImgs()
    ElMessage.success('上传成功')
  } else {
    ElMessage.error(res.data)
  }
}
</script>
<style lang="less" scoped>
.custombg {
  width: 100%;
  position: relative;
  height: 800px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px
  }
}
.ipt {
  position: absolute;
  opacity: 0;
  z-index: 99;
}
.bgimgdiv{
  display: inline;
  position: relative;
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