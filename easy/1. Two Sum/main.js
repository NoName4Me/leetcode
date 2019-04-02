/**
 * two sum
 * 
 * use map to cache
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length < 2) {
    return []
  }
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const idx = map[target - nums[i]]
    if (idx !== undefined) {
      return [idx, i]
    }

    map[nums[i]] = i
  }
  return []
}
