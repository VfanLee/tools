<script setup>
import { RouterView } from 'vue-router'

const elementPlusConfig = {
  size: 'default'
}
</script>

<template>
  <el-config-provider :size="elementPlusConfig.size">
    <RouterView />
  </el-config-provider>
</template>
