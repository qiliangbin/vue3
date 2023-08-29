<template>
  <div class="flex pagehome">
    <SideItem />
      <router-view v-slot="{ Component }">
        <Transition name="slide">
          <component :is="Component"></component>
        </Transition>
      </router-view>
  </div>
</template>
<script lang="ts" setup>
import SideItem from '@/components/homepage/sideItem.vue';
import { RouterView } from 'vue-router';
</script>
<style lang="less" scoped>
.pagehome {
  position: relative;
 }
.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease-out;
}


.slide-enter-to {
  position: absolute;
  right: -200px;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
  opacity: 0;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
  opacity: 0;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>