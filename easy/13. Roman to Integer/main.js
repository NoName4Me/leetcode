/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  let sum = s.split('').reduce((reduce, item) => {
    return reduce + {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    } [item]
  }, 0);

  if (s.includes('IV')) sum -= 2 // 4 = 1 + 5 -2
  if (s.includes('IX')) sum -= 2 // 9 = 1 + 10 -2
  if (s.includes('XL')) sum -= 20 // 40 = 10 + 50 -20
  if (s.includes('XC')) sum -= 20 // 90 = 10 + 100 -20
  if (s.includes('CD')) sum -= 200 // 400 = 100 + 500 - 200
  if (s.includes('CM')) sum -= 200 // 900 = 100 + 1000 -200

  return sum
};