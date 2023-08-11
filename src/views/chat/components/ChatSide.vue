<template>
  <div class="chat">
    <SideHead />
    <ul class="chat_list">
      <li class="chat_list_item" v-for="(item, index) in chatList" :key="index" @click="openCurrentChat(item,index)" :class="{'active': activeIndex === index}">
        <el-avatar style="min-width: 40px" :size="40" :src="item.avatar" />
        <div class="content">
          <p class="selfinfo">
            <span class="selfinfo_name">
              {{ item.name }}
            </span>
            <span class="selfinfo_time">
              {{ item.time }}
            </span>
          </p>
          <p>{{ item.msg[0].content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SideHead from './SideHead.vue'
import { chatList } from '@/mock/chat'
import { useChat } from '@/stores/chat'
const { setItems } = useChat()
const activeIndex = ref<number>()
const openCurrentChat = (item, index) => {
  // 应该再去请求聊天信息
  setItems(item)
  activeIndex.value = index
}
</script>
<style lang="less" scoped>
.chat{
  max-width: 260px;
  height: 800px;
  &_list{
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    :hover {
      background: #fff;
    }
    &_item{
      display: flex;
      width: 100%;
      padding: 10px;
      background: #F1F2F3; 
      border-bottom: 2px solid #fff;
      cursor: pointer;
      .content{
        width: 100%;
        margin-left: 10px;
        font-size: 14px;
      }
      .selfinfo{
        display: flex;
        justify-content: space-between;
        &_name{
          text-overflow: ellipsis;
          display: inline-block;
          width: 100px;
          text-wrap: nowrap;
          overflow: hidden;
        }
        &_time{
          color: rgb(174, 174, 174);
          font-size: 12px;
        }
      }
    }
  }
}
.active{
  background: #fff;
}
</style>