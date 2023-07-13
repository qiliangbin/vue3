<script setup lang="ts">
import router from '@/router';

const goHistory = () => {
  router.push('/history')
}
</script>

<template>
  <div @click="goHistory">
    goHistory21312
  </div>
</template>
