<script setup>
const HEXVal = ref('000000')
watch(HEXVal, (val, oldVal) => {
  HEXVal.value = val.replace(/[^\da-f]/i, '')
})
const transferRGB = computed(() => {
  if (/^([0-9a-f]{3})$/gi.test(HEXVal.value)) {
    const red = Number.parseInt(
      HEXVal.value.slice(0, 1) + HEXVal.value.slice(0, 1),
      16
    )
    const green = Number.parseInt(
      HEXVal.value.slice(1, 2) + HEXVal.value.slice(1, 2),
      16
    )
    const blue = Number.parseInt(
      HEXVal.value.slice(2, 3) + HEXVal.value.slice(2, 3),
      16
    )
    return `rgb(${red}, ${green}, ${blue})`
  }

  if (/^([0-9a-f]{6})$/gi.test(HEXVal.value)) {
    const red = Number.parseInt(HEXVal.value.slice(0, 2), 16)
    const green = Number.parseInt(HEXVal.value.slice(2, 4), 16)
    const blue = Number.parseInt(HEXVal.value.slice(4, 6), 16)
    return `rgb(${red}, ${green}, ${blue})`
  }

  return ''
})

const RGBVal = ref('0,0,0')
watch(RGBVal, (val, oldVal) => {
  RGBVal.value = val.replace(/[^\d,]/i, '')
})
const transferHEX = computed(() => {
  const arr = RGBVal.value.split(',')

  if (arr.length === 3) {
    if (
      arr[0] >= 0 &&
      arr[0] <= 255 &&
      arr[1] >= 0 &&
      arr[1] <= 255 &&
      arr[2] >= 0 &&
      arr[2] <= 255
    ) {
      let red = Number(arr[0]).toString(16)
      if (red.length < 2) {
        red = '0' + red
      }
      let green = Number(arr[1]).toString(16)
      if (green.length < 2) {
        green = '0' + green
      }
      let blue = Number(arr[2]).toString(16)
      if (blue.length < 2) {
        blue = '0' + blue
      }
      return `#${red}${green}${blue}`
    }
  }

  return ''
})
</script>

<template>
  <div class="view__container">
    <h1>🔥HEX/RGB互转</h1>

    <h2>HEX 转 RGB</h2>
    <div class="HEX__container">
      <el-input
        type="text"
        v-model="HEXVal"
        placeholder="请输入十六进制颜色值"
        clearable
      >
        <template #prefix>#</template>
      </el-input>

      <div v-show="transferRGB">
        {{ transferRGB }}
        <div class="color-view" :style="{ backgroundColor: transferRGB }"></div>
      </div>
    </div>

    <h2>RGB 转 HEX</h2>
    <div class="RGB__container">
      <el-input type="text" v-model="RGBVal" clearable>
        <template #prefix>RGB(</template>
        <template #suffix>)</template>
      </el-input>
      <div v-if="transferHEX">
        {{ transferHEX }}
        <div class="color-view" :style="{ backgroundColor: transferHEX }"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-view {
  width: 100px;
  height: 100px;
}
</style>
