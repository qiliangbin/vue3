<template>
  <input type="text" v-model="setNum" @blur="inputBlur">
  <danceNum ref="danceRef" v-model:num="setNum"></danceNum>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import danceNum from '@/components/danceNum.vue';
const setNum = ref<number>(8)
const danceRef = ref()
const inputBlur = () => {
  console.log(danceRef.value)
}
</script>