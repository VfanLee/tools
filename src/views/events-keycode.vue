<script setup>
const keyEvent = ref()
const showKey = ref('')

document.addEventListener('keydown', function (e) {
  console.log('e', e)
  e.preventDefault()
  keyEvent.value = e
  showKey.value = keyEvent.value.key

  if ((e.key === 'Shift' && e.shiftKey === true) || (e.key === 'Control' && e.ctrlKey === true) || (e.key === 'Alt' && e.altKey === true)) {
    showKey.value = ''
  }
})
</script>

<template>
  <div class="view__content">
    <template v-if="keyEvent">
      <div class="enter-keys">
        <div class="key__wrap" v-show="keyEvent.shiftKey">
          <span class="key">Shift</span>
          <span>+</span>
        </div>

        <div class="key__wrap" v-show="keyEvent.ctrlKey">
          <span class="key">Ctrl</span>
          <span>+</span>
        </div>

        <div class="key__wrap" v-show="keyEvent.altKey">
          <span class="key">Alt</span>
          <span>+</span>
        </div>

        <div class="key__wrap" v-show="showKey">
          <span class="key">{{ showKey.toUpperCase() }}</span>
        </div>
      </div>

      <div class="event-info">
        <div class="info">event.key - {{ keyEvent.key }}</div>
        <div class="info">event.code - {{ keyEvent.code }}</div>
        <div class="info">event.keyCode【过时】 - {{ keyEvent.keyCode }}</div>
        <div class="info">event.which【过时】 - {{ keyEvent.which }}</div>
      </div>

      <div class="modifier-keys">
        <div>event.shiftKey - {{ keyEvent.shiftKey }}</div>
        <div>event.ctrlKey - {{ keyEvent.ctrlKey }}</div>
        <div>event.altKey - {{ keyEvent.altKey }}</div>
      </div>

      <div class="useage">
        <pre><code>window.addEventListener('keydown', (event) => {
  if ({{ showKey ? `event.altKey === '${keyEvent.key}'` : '' }} && event.altKey && event.ctrlKey && event.shiftKey) {
    // do your stuff
  }
});</code></pre>
      </div>
    </template>

    <template v-else>
      <h2 class="init-tip">按下任意键获取 JavaScript keycode 事件信息</h2>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.enter-keys {
  display: flex;
  gap: 12px;

  .key {
    padding: 10px 20px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
  }
}

.event-info {
  display: flex;
  gap: 20px;
  margin-top: 30px;

  .info {
    flex: 1;
    padding: 20px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
  }
}

.modifier-keys {
  margin-top: 30px;
}

.useage {
  pre {
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9fd;
  }
}

.init-tip {
  text-align: center;
}
</style>
