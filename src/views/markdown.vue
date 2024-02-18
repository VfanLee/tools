<script setup>
import { marked } from 'marked'

const inputText = ref('')

const markdownRef = ref()
watch(inputText, (val, oldVal) => {
  markdownRef.value.innerHTML = marked.parse(inputText.value)
})
</script>

<template>
  <div class="view__container">
    <h1>🔥markdown</h1>
    <div class="markdown__container">
      <el-input class="markdown__input" v-model="inputText" type="textarea" />
      <div class="markdown__view" ref="markdownRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.markdown__container {
  display: flex;
  gap: 20px;
  height: 80vh;

  .markdown__input {
    flex: 1;
    height: 100%;

    :deep(.el-textarea__inner) {
      width: 100%;
      height: 100%;
    }
  }

  .markdown__view {
    flex: 1;
    overflow: auto;
  }
}
</style>
