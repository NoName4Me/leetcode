/**
 * in-place delete-repetition
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums.length
  }

  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++
    } else {
      nums[i - count] = nums[i]
    }
  }
  return nums.length - count
};
