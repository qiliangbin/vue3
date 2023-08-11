<template>
  <div>
    <el-input
      v-model="sendMsg"
      :autosize="autoSize"
      type="textarea"
      placeholder="请输入消息"
    />
    <p class="footer">
      <el-button type="primary">发送</el-button>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const sendMsg = ref<string>('')
const autoSize = {
  minRows: 3, maxRows: 3
}
</script>
<style lang="less" scoped>
.el-textarea{
  border: none;
}
.footer{
  text-align: right;
  .el-button {
    width: 100px;
    background: #00AEEC;
  }
}
</style>