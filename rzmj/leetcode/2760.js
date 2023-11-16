/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  const n = nums.length;
  let ans = 0,
    i = 0;
  while (i < n) {
    if (nums[i] > threshold || nums[i] % 2 !== 0) {
      i++; // 直接跳过
      continue;
    }
    let start = i; // 记录这一组的开始位置
    i++; // 开始位置已经满足要求，从下一个位置开始判断
    while (i < n && nums[i] <= threshold && nums[i] % 2 !== nums[i - 1] % 2) {
      i++;
    }
    // 从 start 到 i-1 是满足题目要求的子数组
    ans = Math.max(ans, i - start);
  }
  return ans;
};

console.log(longestAlternatingSubarray([2, 3, 3, 10], 18));