<template>
  <header class="header">
    <TabPaneCom />
    <AvatarDrop />
  </header>
</template>
<script lang="ts" setup>
import AvatarDrop from './topHead/avatarDropdown.vue'
import TabPaneCom from './topHead/tabPane.vue'
</script>
<style lang="less" scoped>
.header{
  width: 100%;
  height: 72px;
  background: #ffffff;
  box-shadow: 0 0 10px 10px#eef0f4;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.avatar{
  width: 50px;
  height: 50px;
  background: #fb7299;
  border-radius: 50%;
  margin-right: 50px;
  transition: linear .2s;
  cursor: pointer;
  &:hover{
    transform: scale(1.5) translateY(10px);
  }
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 1s;
}

.scale-enter,
.scale-leave {
  transform: scale(2);
}
</style>