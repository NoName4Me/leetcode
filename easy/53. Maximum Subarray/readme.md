# Maximum Subarray

数组记做 A，如果找到了一个最优解：B(i)，那么下一个解只会有两种情况：B(i) + Ai 或者 Ai，所以有 B(i+1) = max(B(i) + Ai, Ai)，那么最优解是 max(B(i+1), B(i))。

```js
var maxSubArray = function (nums) {
  let max = currentSolution = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currentSolution = Math.max(currentSolution + nums[i], nums[i])
    max = Math.max(max, currentSolution)
  }
  return max
};
```


## 参考

1. [wiki 百科](https://en.wikipedia.org/wiki/Maximum_subarray_problem)