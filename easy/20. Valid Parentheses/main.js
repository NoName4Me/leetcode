/**
 * based on stack
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) {
    return false
  }
  const stack = [];
  for (const c of s) {
    if (c === '(') {
      stack.push(')')
    } else if (c === '[') {
      stack.push(']')
    } else if (c === '{') {
      stack.push('}')
    } else if (!stack.length || stack.pop() !== c) {
      return false
    }
  }
  return !stack.length
};