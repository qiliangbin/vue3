<template>
  <div class="chatBox">
    <MsgHead :items="chatItems" />
    <MsgContent />
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
import MsgContent from './MsgContent.vue';
import MsgHead from './MsgHead.vue';
import { useChat } from '@/stores/chat'
const { chatItems } = toRefs(useChat())
interface IChater{
  name: string
  online: boolean
}
const chaterInfo = reactive<IChater>({
  name: 'Uzi',
  online: true
})
</script>
<style lang="less" scoped>
.chatBox {
  flex: 1;
  min-width: 600px;
}
</style>