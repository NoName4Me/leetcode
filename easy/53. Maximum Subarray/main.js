/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = currentSolution = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currentSolution = Math.max(currentSolution + nums[i], nums[i])
    max = Math.max(max, currentSolution)
  }
  return max
};