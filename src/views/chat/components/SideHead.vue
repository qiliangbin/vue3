<template>
  <div class="sidehead">
    <el-input size="small" class="sidehead_search" v-model="search">
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue'

const search = ref<string>('')
</script>
<style lang="less" scoped>
.sidehead{
  width: 100%;
  background: #fff;
  padding: 10px 0;
  text-align: center;
  margin-top: 10px;
  &_search{
    width: 220px;
  }
}
</style>