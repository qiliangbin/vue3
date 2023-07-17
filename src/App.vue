<script setup lang="ts">
import { RouterView } from 'vue-router'
import sideItem from './components/sideItem.vue';
import headItem from './components/headItem.vue';
</script>

<template>
  <div class="main">
    <sideItem />
    <div class="content">
      <headItem />
      <router-view />
    </div>
  </div>
</template>
<style lang="less" scoped>
.main{
  display: flex;
  height: 100vh;
}
.content{
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>

