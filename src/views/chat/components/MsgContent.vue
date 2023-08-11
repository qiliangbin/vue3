<template>
  <div class="msgContent">
    <ChatContent />
    <SendMsg />
  </div>
</template>
<script lang="ts" setup>
import ChatContent from "./ChatContent.vue";
import SendMsg from "./SendMsg.vue";
</script>
<style lang="less" scoped>
.msgContent {
  display: flex;
  flex-direction: column;
}
</style>