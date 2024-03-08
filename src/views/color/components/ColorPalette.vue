<script setup>
import { generateColorPalette } from '@/utils/color.js'

const primaryColor = ref('rgb(64, 158, 255)')
const backgroundColor = ref('rgb(255, 255, 255)')
const step = ref(12)
</script>

<template>
  <el-form inline>
    <el-form-item label="主色">
      <el-color-picker v-model="primaryColor" color-format="rgb" />
    </el-form-item>
    <el-form-item label="底色">
      <el-color-picker v-model="backgroundColor" color-format="rgb" />
    </el-form-item>
    <el-form-item label="色板长度">
      <el-slider v-model="step" :min="6" :max="20" show-input />
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.el-slider {
  width: 300px;
}
</style>
