import { reactive } from 'vue'
interface waterfallFlow {
  waterfallFlowHeight: any[]
}

const state: waterfallFlow = reactive({
  waterfallFlowHeight: [0, 0]
})
/**
 * 
 * @param className 瀑布流的子元素的class名
 * @param childClassName 瀑布流的子元素图片的class名
 * @param reduceNum 各个子项上下相隔的距离
 */
const waterFallFlow = (className: string, childClassName: string) => {
  const dom = document.querySelectorAll(className)
  dom.forEach(item => {
    item.style.position = 'absolute';
    const minIndex = filterMin();
    item.style.top = state.waterfallFlowHeight[minIndex] + 10 + 'px'
    item.style.left = minIndex * (100 / 2) + '%'
    state.waterfallFlowHeight[minIndex] += item.querySelector(childClassName).offsetHeight + 10
  })
}
const filterMin = () => {
  const min = Math.min.apply(null, state.waterfallFlowHeight)
  return state.waterfallFlowHeight.indexOf(min)
}

function debounce(fn, timer = 1000) {
  let time: any = null
  return function() {
    clearTimeout(time)
    time = setTimeout(() => {
      fn()
    }, timer)
  }
}

export {
  waterFallFlow,
  debounce
}