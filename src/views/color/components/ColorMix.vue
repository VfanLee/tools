<script setup>
import { generateRandomColor, blendColors } from '@/utils/color'

const colors = reactive([generateRandomColor('rgb'), generateRandomColor('rgb')])
const mixedColor = ref('#eee')

const addColor = () => {
  colors.push(generateRandomColor('rgb'))
}
const removeColor = (color, index) => {
  colors.splice(index, 1)
}
const mixColor = () => {
  mixedColor.value = blendColors(colors)
}
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-form>
        <el-form-item v-for="(c, i) of colors" :key="i" :label="c">
          <el-color-picker v-model="colors[i]" color-format="rgb" />
          <el-button @click="removeColor(c, i)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addColor">添加颜色</el-button>
          <el-button type="primary" @click="mixColor">混合</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="18">
      <div class="mix-color"></div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.el-row {
  height: 50vh;
}

.el-col {
  height: 100%;
}

.el-form {
  height: 100%;
  overflow: auto;
}

.mix-color {
  height: 100%;
  background-color: v-bind(mixedColor);
}
</style>
