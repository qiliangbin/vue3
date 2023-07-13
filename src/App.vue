<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="header"></header>
  <RouterView />
</template>
<style lang="less" scoped>
.header{
  width: 100%;
  height: 72px;
  background: #302090;
}
</style>

