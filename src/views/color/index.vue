<script setup>
import ColorConvert from './components/ColorConvert.vue'
import ColorPalette from './components/ColorPalette.vue'
import ColorMix from './components/ColorMix.vue'

const activeName = ref('Mix')
</script>

<template>
  <div class="view__content">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="颜色转换" name="Convert" lazy>
        <ColorConvert />
      </el-tab-pane>
      <el-tab-pane label="色板生成" name="Palette" lazy>
        <ColorPalette />
      </el-tab-pane>
      <el-tab-pane label="颜色混合" name="Mix" lazy>
        <ColorMix />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
