<script setup>
import cursors from '@/data/cursor.json'
</script>

<template>
  <div class="view__container">
    <h1>🔥 CSS Cursor</h1>
    <section v-for="(cursor, index) of cursors" :key="index">
      <h2>{{ cursor.title }}</h2>
      <div class="cursor__container">
        <div class="cursor-box" v-for="(c, index) of cursor.data" :key="index" :style="{ cursor: c }">
          {{ c }}
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
body {
  min-height: 100vh;
}

.cursor__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .cursor-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border: 1px solid #ced4da;
    border-radius: 8px;
    color: #495057;

    &:hover {
      background-color: #f8f9fa;
    }
  }
}

@media screen and (max-width: 576px) {
  .cursor__container {
    grid-template-columns: 1fr;
  }
}
</style>
