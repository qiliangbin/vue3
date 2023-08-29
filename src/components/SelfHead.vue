<template>
  <div class="selfhead">
    <div class="selfhead_bg" :style="{backgroundImage: `url(${selfInfo.bgUrl})`}">
      <div class="selfhead_info flex">
        <input type="file" class="selfhead_info_avatar" @change="uploadAvatar">
        <el-avatar :size="60" @error="errorHandler">
          <img
            :src="globalStore.avatarUrl"
          />
        </el-avatar>
        <div class="selfhead_msg flex flex-col">
          <span>
            {{ selfInfo.name }}
          </span>
          <span class="selfhead_msg_sign">
            <input @blur="setSign" v-model="selfInfo.personSign" placeholder="设置个性签名" class="account" type="text">
          </span>
        </div>
      </div>
      <span class="selfhead_bg_icon" @click="showBgDialog = true"><MoreFilled/></span>
    </div>
    <div class="selfhead_content">
      
    </div>
  </div>
  <Teleport to="body">
    <div class="selfhead_drawer" v-if="showBgDialog">
      <div class="selfhead_drawer_head">
        图片库
        <el-icon @click="showBgDialog=false" class="float-right"><CloseBold /></el-icon>
      </div>
      <div class="selfhead_drawer_bgs flex flex-wrap justify-between">
        <div @mouseenter="enterBgimg(index)" @mouseleave="leaveBgimg" class="bgimg mb-[20px]" v-for="(item,index) in bgImgs" :key="index">
          <img class="bgimg_item" :src="item.imgUrl" alt="#">
          <p @click.stop="checkBgUrl(index, item.imgUrl)" v-if="activeIndex === index" class="bgimg_dsc">使用</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { MoreFilled, CloseBold, SuccessFilled } from '@element-plus/icons-vue'
import { getMyselfApi, updateMyselfApi } from '@/api/login'
import { getBgList } from '@/api/selfApi'
import { ElMessage } from 'element-plus'
import {useGlobalStore} from '@/stores/global'
import { useUserStore } from '@/stores/user'
import { uploadFile } from '@/hooks/useUpload'
import { da } from 'element-plus/es/locale'

const globalStore = useGlobalStore()
const userStore = useUserStore()
const bgImgs = ref<any[]>([])
const nickName = localStorage?.getItem('nickName')
const showBgDialog = ref<boolean>(false)
const activeIndex = ref<number | null>(null)
const selfInfo = ref<any>({})
const errorHandler = () => true
const updateSelfInfo = async (key: string, value: string) => {
  const data: any = await updateMyselfApi({name: nickName, [key]: value})
  if(data.success) {
    ElMessage.success('修改成功')
  } else {
    ElMessage.error(data.data)
  }
 await getMyselfInfo()
}
const setSign = async () => {
  updateSelfInfo('description', selfInfo.value.personSign)
}
onMounted(async () => {
  await getMyselfInfo()
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
const getMyselfInfo = async () => {
  const data: any = await getMyselfApi({name: nickName})
  selfInfo.value = data.data
  selfInfo.value.personSign = data.data?.description
  // selfInfo.bgUrl = data.data?.bgimg ? 'http://rzrve6kbj.hn-bkt.clouddn.com/selfbg/headbg.webp' : data.data?.bgimg
  selfInfo.value.bgUrl = data.data?.bgimg
  console.log(data.data.bgimg, selfInfo.bgUrl)
  localStorage.setItem('selfInfo', JSON.stringify(data.data))
}
const checkBgUrl = async (index: number, bgUrl: string) => {
  activeIndex.value = index
  selfInfo.bgUrl = bgUrl
  await updateSelfInfo('bgimg', bgUrl)
}
const uploadAvatar = async (e: any) => {
  globalStore.avatarUrl = await uploadFile(e)
  const data: any = await updateMyselfApi({name: nickName, avatar: globalStore.avatarUrl})
  if(data.success) {
    localStorage.setItem('avatar', globalStore.avatarUrl)
    getMyselfInfo()
    ElMessage.success('修改成功')
  }
}
const enterBgimg = (index: number) => {
  activeIndex.value = index
}
const leaveBgimg = () => {
  activeIndex.value = null
}
const handleClose = () => {
  showBgDialog.value = false
}
</script>

<style lang="less" scoped> 
.selfhead {
  &_drawer {
    position: fixed;
    bottom: 0;
    min-height: 400px;
    width: 100%;
    background: #111;
    margin: 0 auto;
    &_head {
      background: rgba(255, 255, 255, 0.1);
      height: 58px;
      color: #fff;
      font-weight: bold;
      line-height: 58px;
      text-align: center;
      font-size: 20px;
    }
    &_bgs {
      width: 1290px;
      margin: 0 auto;
      .bgimg {
        position: relative;
        &_item {
          display: block;
          width: 290px;
          height: 90px;
          border: 3px solid #555;
          border-radius: 6px;
        }
        &_dsc {
          position: absolute;
          bottom: 0;
          color: #fff;
          width: 100%;
          height: 36px;
          background: rgba(#00a1d6, .8);
          border-radius: 0 0 6px 6px;
          font-size: 16px;
          line-height: 36px;
          text-align: center;
          cursor: pointer;
        }
        &_checkbox {
          position: absolute;
          right: 0;
          top: 0;
          width: 20px;
          color: #fb7299;
        }
      }
    }
  }
  &_bg {
    width: 100%;
    height: 192px;
    background-image: url("/src/assets/imgs/headbg.webp");
    background-position: 50%;
    background-size: cover;
    position: relative;
    &_icon {
      position: absolute;
      width: 18px;
      right: 10px;
      color: #fb7299;
      cursor: pointer;
    }
  }
  &_info {
    padding: 0 10px;
    position: absolute;
    bottom: 30px;
    &_avatar {
      position: absolute;
      width: 60px;
      height: 60px;
      opacity: 0;
      border-radius: 50%;
    }
  }
  &_msg {
    font-size: 16px;
    line-height: 32px;
    font-weight: bold;
    color: #fff;
    width: 400px;
    margin-left: 10px;
    &_sign {
      font-size: 12px;
      line-height: 30px;
      font-weight: 100;
      .account{
        width: 100%;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0);
        &:hover{
          background: rgba(255, 255, 255, 0.4);
        }
        &:focus {
          border: 1px solid #fff;
          background: #fff;
          color: rgb(155, 154, 152);
        }
        &::-webkit-input-placeholder{
          color: #fb7299;
        }
      }
    }
  }
  &_content {

  }
}
</style>