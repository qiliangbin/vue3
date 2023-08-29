<template>
  <el-dropdown>
    <Transition name="scale">
      <img class="avatar" :src="globalStore.avatarUrl" />
    </Transition>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goSelfInfo" :icon="Avatar">个人中心</el-dropdown-item>
      </el-dropdown-menu>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useGlobalStore } from '@/stores/global';
import {
  SwitchButton,
  Avatar
} from '@element-plus/icons-vue'
import { onMounted } from 'vue';

const router = useRouter()
const { clearToken } = useUserStore()
const globalStore = useGlobalStore()
onMounted(() => {
  
})
const goSelfInfo = () => {
  globalStore.setRouterIndex(4)
  router.push('/self')
}
const logout = () => {
  clearToken()
  localStorage.setItem('avatar', '')
  router.go(0)
}
</script>

<style lang="less" scoped>
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