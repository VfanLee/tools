import { generateRandomNumber } from './'

/**
 * 生成随机色
 * @returns 随机色
 */
export function generateRandomColor(mode) {
  if (mode === 'rgb') {
    return `rgb(${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)})`
  }
  return '#' + Math.random().toString(16).slice(2, 8)
}

/**
 * 十六进制颜色 转 rgb颜色
 * @param {string} hex 十六进制颜色
 * @returns {string} rgb颜色
 */
export function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgb(${r}, ${g}, ${b})`
}

/**
 * rgb颜色 转 十六进制颜色
 * @param {number} r Red
 * @param {number} g Green
 * @param {number} b Blue
 * @returns {string} 十六进制颜色
 */
export function rgbToHex(rgb) {
  const [r, g, b] = rgb.match(/\d+/g)

  // 将 R, G, B 值转换为十六进制，并补齐两位
  const rHex = (+r).toString(16).padStart(2, '0')
  const gHex = (+g).toString(16).padStart(2, '0')
  const bHex = (+b).toString(16).padStart(2, '0')

  return '#' + rHex + gHex + bHex
}

/**
 * 生成色板
 * @param {string} primaryColor 主色(rgb)
 * @param {string} backgroundColor 底色(rgb)
 * @param {number} steps 色板阶层
 * @returns {string[]}
 */
export function generateColorPalette(primaryColor, backgroundColor, steps = 11) {
  const pcArr = primaryColor.match(/\d+/g)
  const bcArr = backgroundColor.match(/\d+/g)
  const pc = {
    r: pcArr[0],
    g: pcArr[1],
    b: pcArr[2]
  }
  const bc = {
    r: bcArr[0],
    g: bcArr[1],
    b: bcArr[2]
  }

  // 计算混合颜色的步长
  const step = {
    r: (bc.r - pc.r) / (steps - 1),
    g: (bc.g - pc.g) / (steps - 1),
    b: (bc.b - pc.b) / (steps - 1)
  }

  // 生成调色板
  const palette = []
  for (let i = 0; i < steps; i++) {
    const blendedColor = {
      r: Math.round(pc.r + step.r * i),
      g: Math.round(pc.g + step.g * i),
      b: Math.round(pc.b + step.b * i)
    }
    palette.push(RGBToHex(blendedColor.r, blendedColor.g, blendedColor.b))
  }

  return palette
}

/**
 * 混合颜色
 * @param {any[]} colors 混合颜色数组
 * @param {number} ratio 混合比例：默认 1:1
 * @returns {string} 十六进制字符
 */
export function blendColors(colors, ratio = 1) {
  // 初始化混合后的颜色为黑色
  let blendedColor = { r: 0, g: 0, b: 0 }

  // 计算混合后的颜色
  for (const color of colors) {
    const cArr = color.match(/\d+/g)
    const colorRGB = {
      r: +cArr[0],
      g: +cArr[1],
      b: +cArr[2]
    }
    blendedColor.r += colorRGB.r
    blendedColor.g += colorRGB.g
    blendedColor.b += colorRGB.b
  }

  // 根据颜色数量和混合比例计算平均值
  const numColors = colors.length
  blendedColor.r = Math.round(blendedColor.r / numColors)
  blendedColor.g = Math.round(blendedColor.g / numColors)
  blendedColor.b = Math.round(blendedColor.b / numColors)

  // 根据混合比例调整颜色
  blendedColor.r = Math.round(blendedColor.r * ratio)
  blendedColor.g = Math.round(blendedColor.g * ratio)
  blendedColor.b = Math.round(blendedColor.b * ratio)

  return `rgb(${blendedColor.r}, ${blendedColor.g}, ${blendedColor.b})`
}
