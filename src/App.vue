<script setup lang="ts">
import { onMounted, watchEffect, computed, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { useGlobalStore } from '@/stores/global';
import sideItem from './components/sideItem.vue';
import headItem from './components/headItem.vue';
import SideItem from '@/components/homepage/sideItem.vue';
const { whiteRoute } = useGlobalStore()

const currentPath = ref<string>('')
const route = useRoute()
watchEffect(() => {
  currentPath.value = route.path
})
const isLogin = computed(() => {
  return whiteRoute.includes(currentPath.value)
})
</script>

<template>
  <router-view v-if="isLogin" />
  <div class="main" v-else>
    <headItem />
    <div class="content flex">
      <SideItem />
      <router-view />
    </div>
  </div>
</template>
<style lang="less" scoped>
.main{
  height: 100vh;
  background: #e4e6eb;
}
.content{
  width: 1290px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>

