/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a === '0') {
    return b
  }

  if (b === '0') {
    return a
  }

  let iA = a.length - 1,
    iB = b.length - 1
  let carry = 0,
    res = ''
  while (iA >= 0 || iB >= 0) {
    const sum = Number.parseInt(a[iA--] || '0') + Number.parseInt(b[iB--] || '0') + carry
    res = (sum % 2) + res
    carry = sum > 1 ? 1 : 0
  }


  return carry ? '1' + res : res
};