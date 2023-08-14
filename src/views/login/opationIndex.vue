<template>
  <el-tabs tab-position="left" style="height: 100vh" class="demo-tabs" @tab-click="tabClick">
    <el-tab-pane label="修改密码">
      <ForgetPassword ref="forgetPw" :isForget="true" :text="'修改密码'" />
    </el-tab-pane>
    <el-tab-pane label="忘记密码">
      <ForgetPassword ref="forgetPw" :isForget="false" :text="'忘记密码'" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ForgetPassword from './forgetPassword.vue';

const forgetPw = ref<any>()

const tabClick = () => {
  forgetPw.value.resetForm()
}
</script>

<style lang="less" scoped>

</style>