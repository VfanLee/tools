<script setup>
import GlobalButton from '@/components/GlobalButton.vue'
</script>

<template>
  <div class="app__contaienr">
    <div class="view__container">
      <h1 class="view__title">🔥 {{ $route.meta.title }}</h1>
      <RouterView />
    </div>

    <GlobalButton />
  </div>
</template>

<style lang="scss">
.app__contaienr {
  min-height: 100vh;
}

.view__container {
  padding: 20px;
}
</style>
