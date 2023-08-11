<template>
  <div class="container" id="waterfall">
    <div class="item">
      <div class="picture">
        <img class="thumb" :src="imgUrl" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl2" alt="">
      </div>
    </div>
    <div class="item">
      <div class="picture">
        <img class="thumb" :src="imgUrl" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl2" alt="">
      </div>
    </div>
    <div class="item">
      <div class="picture">
        <img class="thumb" :src="imgUrl" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl2" alt="">
      </div>
    </div>
    <div class="item">
      <div class="picture">
        <img class="thumb" :src="imgUrl" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl3" alt="">
      </div>
    </div>
    <div class="item">
      <div class="pictrue">
        <img class="thumb" :src="imgUrl2" alt="">
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

const imgUrl = 'https://img1.baidu.com/it/u=1400131798,3422378849&fm=253&fmt=auto&app=138&f=JPEG?w=563&h=500'
const imgUrl2 = 'https://img.tuguaishou.com/ips_templ_preview/eb/97/52/lg_4456220_1627664430_6104302eacabc.jpg!w1024_w?auth_key=2288152006-0-0-a59502876ce313d748225d27cd3693d8'
const imgUrl3 = 'https://img.tuguaishou.com/ips_templ_preview/e5/d0/c5/lg_2189781_1570241105_5d97fa51acee7.jpg!w1024_w?auth_key=2283117276-0-0-fb017eb25ccbe7a3409ec2c42a0ee9ed'
const obj = {
  id: 'waterfall',
  className: 'item'
}
const waterFall = (obj: any): void => {
  let container: any = document.getElementById(obj.id);
  let item = document.getElementsByClassName(obj.className);
  let clientWidth = document.documentElement.clientWidth; // 浏览器可视区域宽度
  let colCount = Math.floor(clientWidth / item[0].offsetWidth); // 计算一行可以放几个
  container.style.width = colCount * item[0].offsetWidth + 'px'
  let hList = []; //每一行盒子的高度
  for (let i = 0; i < item.length; i++) {
  if (i < colCount) {
    item[i].style.top = "0";
    item[i].style.left = i * item[0].offsetWidth + "px";
    hList.push(item[i].offsetHeight);
  } else {
    let min = Math.min(...hList);
    let index = hList.indexOf(min);
    item[i].style.top = min + "px";
    item[i].style.left = index * item[0].offsetWidth + "px";
    hList[index] += item[i].offsetHeight;
  }
}
}
onMounted(() => {
  // waterFall(obj)
})
</script>
<style scoped lang="less">
.container{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr; // 分为3行
  grid-template-columns: 1fr 1fr 1fr; // 分为3列
  column-gap:5px; // 列间距5px
}
.item {
  // padding: 10px;
}
</style>