<template>
  <div class="view__container">
    <h1>🔥m3u8 在线播放</h1>

    <div class="play__container">
      <el-input
        class="play__input"
        v-model="playUrl"
        placeholder="请输入视频播放地址"
        @keyup.enter="playVideo"
      />
      <el-button class="play__btn" @click="playVideo">确定</el-button>
    </div>

    <video
      class="video-js"
      ref="videoPlayerRef"
      v-show="videoPlayerVisible"
    ></video>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const videoPlayerVisible = ref(false)
const videoPlayerRef = ref()
const playUrl = ref('')

const playVideo = async () => {
  if (!playUrl.value) return
  videoPlayerVisible.value = true
  await nextTick()
  videojs(
    videoPlayerRef.value,
    {
      controls: true, // 交互控件
      autoplay: false, // 立即播放
      loop: true, // 循环播放
      muted: false, // 静音
      aspectRatio: '16:9', // 比例
      playbackRates: [0.5, 1, 1.5, 2, 3, 4], // 速率
      // poster: '', // 封面
    },
    function () {
      this.src(playUrl.value)
    }
  )
}
</script>

<style lang="scss" scoped>
.view__container {
  .play__container {
    display: flex;
  }
}
</style>
