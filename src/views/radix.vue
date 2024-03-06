<script setup>
const origiRradix = ref(10)
const originVal = ref('')

const decimal = computed(() => {
  if (!originVal.value) return ''
  return parseInt(originVal.value, origiRradix.value)
})

const targeRradix = ref(2)
const targetVal = computed(() => {
  if (!decimal.value) return ''
  return Number(decimal.value).toString(targeRradix.value)
})
</script>

<template>
  <div class="view__content">
    <div class="origin__container">
      <h2>待转换数字</h2>
      <el-input-number v-model="origiRradix" :min="2" :max="36" />
      <el-radio-group v-model="origiRradix">
        <el-radio :label="2">2进制</el-radio>
        <el-radio :label="4">4进制</el-radio>
        <el-radio :label="8">8进制</el-radio>
        <el-radio :label="10">10进制</el-radio>
        <el-radio :label="16">16进制</el-radio>
        <el-radio :label="32">32进制</el-radio>
      </el-radio-group>
      <el-input v-model="originVal" placeholder="请输入待转换的数字"></el-input>
    </div>

    <div class="target__container">
      <h2>转换数字</h2>
      <el-input-number v-model="targeRradix" :min="2" :max="36" />
      <el-radio-group v-model="targeRradix">
        <el-radio :label="2">2进制</el-radio>
        <el-radio :label="4">4进制</el-radio>
        <el-radio :label="8">8进制</el-radio>
        <el-radio :label="10">10进制</el-radio>
        <el-radio :label="16">16进制</el-radio>
        <el-radio :label="32">32进制</el-radio>
      </el-radio-group>
      <el-input v-model="targetVal" disabled></el-input>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
