<template>
  <header class="header">
    <el-row>
      <el-col>Logo</el-col>
    </el-row>
    <el-dropdown>
      <Transition name="scale">
        <span class="avatar"></span>
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
  </header>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import {
  SwitchButton,
  Avatar
} from '@element-plus/icons-vue'

const router = useRouter()
const { clearToken } = useUserStore()
const goSelfInfo = () => {
  router.push('/self')
}
const logout = () => {
  clearToken()
  router.go(0)
}
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
  justify-content: space-between
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