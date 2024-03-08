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
