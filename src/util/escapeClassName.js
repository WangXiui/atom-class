/**
 * 转译斜杠
 * 例：（1/10）
 * @param selector
 * @returns {*}
 */
export default function escapeClassName (selector) {
  return selector.replace(/([^A-Za-z0-9\\-])/g, '\\$1')
}