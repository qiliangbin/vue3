<script setup lang="ts">
import { onMounted, watchEffect, computed, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import sideItem from './components/sideItem.vue';
import headItem from './components/headItem.vue';
const currentPath = ref<string>('')
const route = useRoute()
watchEffect(() => {
  currentPath.value = route.path
})
const isLogin = computed(() => {
  return currentPath.value === '/login' || currentPath.value === '/register' || currentPath.value === '/404'
})
</script>

<template>
  <router-view v-if="isLogin" />
  <div class="main" v-else>
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

