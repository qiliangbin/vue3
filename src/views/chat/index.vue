<template>
  <div class="chatDialog">
    <ChatSide />
    <ChatBox />
  </div>
</template>
<script lang="ts" setup>
import ChatSide from './components/ChatSide.vue'
import ChatBox from './components/ChatBox.vue'
</script>
<style lang="less" scoped>
.chatDialog{
  display: flex;
}
</style>