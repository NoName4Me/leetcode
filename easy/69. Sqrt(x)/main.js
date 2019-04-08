/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2) + 1
    if (mid > x / mid) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  return left
};

/* 
 // Babylonian method
 // let `R` be the guess
 // R(i+1) = ( Ri + x / Ri ) / 2, when i--> INFINITE, R = sqrt(x)

var mySqrt = function (x) {
  let r = x / 2 | 1 // OR 1 is for x=1, otherwise OR 0 to only reserve integer part
  while (r * r > x) {
    r = (r + x / r) / 2 | 0 // OR 0 to retain integer
  }
  return r
};
*/