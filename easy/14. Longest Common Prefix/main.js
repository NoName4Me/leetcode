/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 2) {
    return strs[0] || ''
  }

  let i = 0
  for (; i < strs[0].length; i++) {
    if (!strs.slice(1).every(item => {
        return item.charAt(i) === strs[0].charAt(i)
      })) {
      break;
    }
  }
  return strs[0].slice(0, i)
};