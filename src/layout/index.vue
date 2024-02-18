<script setup>
import GlobalButton from '@/components/GlobalButton.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app__contaienr">
    <RouterView />

    <GlobalButton />
  </div>
</template>

<style lang="scss" scoped>
.app__contaienr {
  padding: 20px;
  min-height: 100vh;
}
</style>
