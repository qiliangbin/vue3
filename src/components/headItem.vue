<template>
  <header class="header">
    <el-icon>
      <component @click="changeCollapse" :is="switchIcon"></component>
    </el-icon>
    <el-dropdown>
      <Transition name="scale">
        <span class="avatar"></span>
      </Transition>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/stores/global'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import {
  SwitchButton
} from '@element-plus/icons-vue'

const router = useRouter()
const {changeCollapse, collapse} = toRefs(useGlobalStore())
const { clearToken } = useUserStore()
const switchIcon = computed(() => {
  return collapse.value ? Expand : Fold
})
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