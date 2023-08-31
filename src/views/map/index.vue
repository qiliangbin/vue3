<template>
  <div class="mapBox" ref="mapRef">
   
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.cover {
  height: 200px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-top: 100px;
}
.overflow{
  width: 100px;
  height: 50px;
  background: #000;
  display: block;
  transition: 1s;
  :hover{
    height: 100px;
  }
}
.mapBox{
  position: relative;
  height: 100%;
  width: 100%;
}
.history{
  width: 300px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &_item {
    padding: 2px;
    line-height: 16px;
    background: bisque;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 8px;
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/* 2️⃣把样式中的类名进行更改。 */
.enter {
  transform-origin: left center;
  animation: bounce-in 1s;
}

.leave {
  transform-origin: left center;
  animation: bounce-in 1s reverse;
}
.ejectBox{
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: #7fd3be;
  opacity: .6;
  // transform: scale(0);
}
</style>