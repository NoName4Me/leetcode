/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return '1'
  }
  const str = countAndSay(n - 1)
  return say(str)
};

function say(str) {
  let res = ''
  let count = 1
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      count++
    } else {
      res += (count + str.charAt(i))
      count = 1
    }
  }
  return res
}