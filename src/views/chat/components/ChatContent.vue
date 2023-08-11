<template>
  <div class="chaterMsg">
    <div class="msgChat" v-for="(item, index) in chatMsg" :key="index">
      <div class="chatContent" v-if="item.user==='other'">
        <!-- <div>{{ item.time }}</div> -->
        <el-image class="chatContent_chatAvatar" :src="item.avatar"></el-image>
        <span class="chatContent_message">{{ item.con }}</span>
      </div>
      <div class="chatContent right" v-else>
        <!-- <span class="chatContent_time">{{ item.time }}</span> -->
        <span class="chatContent_message">{{ item.con }}</span>
        <el-image class="chatContent_chatAvatar" :src="item.avatar"></el-image>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const chatMsg = [
        {
          avatar: "https://bucket-ans.oss-cn-hangzhou.aliyuncs.com/2.jpg",
          time: "yyyy.mm.dd hh:mi",
          con: "您好，欢迎来带我的客服中心，您的专属客服小浴为您服务！",
          user: "other",
        },
        {
          avatar: "https://bucket-ans.oss-cn-hangzhou.aliyuncs.com/2.jpg",
          time: "yyyy.mm.dd hh:mi",
          con: "我们致力于打造一个为老人服务至上的平台！",
          user: "other",
        },
        {
          avatar: "https://bucket-ans.oss-cn-hangzhou.aliyuncs.com/2.jpg",
          time: "yyyy.mm.dd hh:mi",
          con: "如有疑问请致电 109-3301-4401！",
          user: "other",
        },
        {
          avatar: "https://bucket-ans.oss-cn-hangzhou.aliyuncs.com/2.jpg",
          time: "yyyy.mm.dd hh:mi",
          con: "小浴随时在线为您解答疑惑，请问您有什么需要帮助的嘛？",
          user: "other",
        },
        {
          avatar: "https://bucket-ans.oss-cn-hangzhou.aliyuncs.com/1.jpg",
          time: "yyyy.mm.dd hh:mi",
          con: "好的",
          user: "me",
        },
        {
          avatar: "https://bucket-ans.oss-cn-hangzhou.aliyuncs.com/2.jpg",
          time: "yyyy.mm.dd hh:mi",
          con: "小浴随时在线为您解答疑惑，举报电话请联系：109-4401-3301",
          user: "other",
        },
      ]
</script>
<style lang="less" scoped>
.chaterMsg{
  overflow: scroll;
  height: 728px;
}
.msgChat{
  width: 100%;
}
.chatContent{
  position: relative;
  margin-top: 10px;
  &_chatAvatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  &_message{
    display: inline-block;
    max-width: 320px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-top: 20px;
    padding: 3px;
  }
  &_time{
    // position: absolute;
    // top: 0;
  }
}
.right{
  display: flex;
  justify-content: flex-end;
}
</style>