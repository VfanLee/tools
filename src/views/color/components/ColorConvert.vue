<script setup>
import { hexToRgb, rgbToHex } from '@/utils/color'

const colorMode = ref('hex')
const colorkey = ref(0)
const sourceColor = ref('')
const targetColor = ref('')

const changeMode = () => {
  switch (colorMode.value) {
    case 'hex':
      targetColor.value = '#000000'
      break
    case 'rgb':
      targetColor.value = 'rgb(0, 0, 0)'
      break
  }
  sourceColor.value = ''
  targetColor.value = ''
  colorkey.value++
}
const convertColor = () => {
  switch (colorMode.value) {
    case 'hex':
      targetColor.value = hexToRgb(sourceColor.value)
      break
    case 'rgb':
      targetColor.value = rgbToHex(sourceColor.value)
      break
  }
}
</script>

<template>
  <el-form>
    <el-form-item label="转换模式">
      <el-select v-model="colorMode" style="width: 120px" @change="changeMode">
        <el-option value="hex" label="hex ♻️ rgb" />
        <el-option value="rgb" label="rgb ♻️ hex" />
      </el-select>
    </el-form-item>
  </el-form>

  <el-row justify="space-between" align="middle">
    <el-col :span="8">
      <el-color-picker v-model="sourceColor" :color-format="colorMode" :key="colorkey" />
    </el-col>
    <el-col class="text-center" :span="8">
      <el-button type="primary" @click="convertColor">转换</el-button>
    </el-col>
    <el-col :span="8">
      <el-input v-model="targetColor" readonly>
        <template #append>
          <el-button>复制</el-button>
        </template>
      </el-input>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
:deep(.el-color-picker) {
  width: 100%;
}

:deep(.el-color-picker__trigger) {
  width: 100%;
  height: 100px;
}
</style>
