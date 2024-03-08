<script setup>
import { encode, decode } from './data.json'

const codecMode = ref(true) // 编码器模式

const codeFuncs = computed(() => {
  return codecMode.value ? encode : decode
})
const selectedFunc = ref(null)

const textValue = ref('')
const codeTextValue = ref('')

const handleCode = () => {
  if (selectedFunc.value) {
    codeTextValue.value = window[selectedFunc.value.id](textValue.value)
  } else {
    ElMessage.warning('请选择编码器函数')
  }
}

const initData = () => {
  textValue.value = ''
  codeTextValue.value = ''
  selectedFunc.value = ''
}

const learnMore = () => {
  if (selectedFunc.value) {
    window.open(selectedFunc.value.moreUrl)
  } else {
    ElMessage.warning('请选择编码器函数')
  }
}
</script>

<template>
  <div class="view__content">
    <el-form inline>
      <el-form-item label="编码器模式">
        <el-select v-model="codecMode" @change="initData" style="width: 80px">
          <el-option :value="true" label="编码" />
          <el-option :value="false" label="解码" />
        </el-select>
      </el-form-item>
      <el-form-item label="编码器函数">
        <el-select v-model="selectedFunc" value-key="id" placeholder="请选择编码器函数" style="width: 200px">
          <el-option v-for="cf in codeFuncs" :key="cf.id" :value="cf" :label="cf.title" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="learnMore">了解更多</el-button>
      </el-form-item>
    </el-form>

    <div class="code__container">
      <el-input type="textarea" :rows="26" v-model="textValue" placeholder="请输入..."></el-input>
      <el-button type="primary" @click="handleCode">{{ codecMode ? '编码' : '解码' }}</el-button>
      <el-input type="textarea" :rows="26" readonly v-model="codeTextValue" placeholder="预览区"></el-input>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.code__container {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
