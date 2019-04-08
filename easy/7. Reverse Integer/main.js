/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX = 2 ** 31 - 1;
  const MIN = -MAX + 1;
  let result = Number.parseInt(('' + x).split('').reverse().join(''));
  if (x < 0) {
    result = -result;
    if (result > MAX || result < MIN) {
      return 0;
    }
  } else {
    if (result > MAX) {
      return 0;
    }
  }
  return result;
};