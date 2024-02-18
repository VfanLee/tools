/**
 * rgb 转 hex
 * @param {*} r red
 * @param {*} g green
 * @param {*} b blue
 * @returns
 */
export const rgbToHex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * hex 转 rgb
 * @param {*} hex hex
 * @returns
 */
export const hexToRgb = hex => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

/**
 * 通用进制转换
 * @param {*} value 需要转换的数值
 * @param {*} fromBase 原始进制
 * @param {*} toBase 目标进制
 * @returns
 */
export const convertBase = (value, fromBase, toBase) => {
  let digits = []
  let result = ''

  // 将原始数值转换为10进制
  let num = parseInt(value, fromBase)

  // 将10进制数值转换为目标进制
  while (num >= toBase) {
    digits.push(num % toBase)
    num = Math.floor(num / toBase)
  }
  digits.push(num)

  // 转换为字符串并返回结果
  for (let i = digits.length - 1; i >= 0; i--) {
    result += digits[i].toString(toBase)
  }

  return result
}
