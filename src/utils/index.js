/**
 * 生成随机数
 * @param {number} min 随机数最小值
 * @param {number} max 随机数最大值
 * @returns
 */
export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
