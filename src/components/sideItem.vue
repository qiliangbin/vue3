<template>
  <el-menu
  :default-active="routeIndex"
  :collapse="collapse"
  >
    <div v-for="(item, index) in menuList" :index="item.id" :key="index">
      <el-sub-menu v-if="item.children?.length" :index="item.id">
        <template #title>
          <el-icon>
            <!-- <component :is="item?.icon"></component> -->
            <IconMenu></IconMenu> 
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group v-for="(citem, cindex) in item.children" :key="cindex" @click="sideJump(citem.router)">
          <template #title v-if="cindex===0">副标题</template>
          <el-menu-item :index="citem.id">{{citem.title}}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="item.id" @click="sideJump(item.router)">
        <template #title>
          <el-icon>
            <Setting></Setting> 
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>
<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { menuList } from '@/mock/menu'
import { useRouter } from 'vue-router'
import { useGlobalStore } from '@/stores/global'

const { collapse } = toRefs(useGlobalStore())
const router = useRouter()
const routeIndex = ref<string>('')

// methods
const sideJump = (url: string) => {
  router.push(url)
}
</script>
<style lang="less" scoped>
.el-menu{
  // background: #00AEEC;
}
</style>