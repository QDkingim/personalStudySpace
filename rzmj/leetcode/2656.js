/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  nums.sort((a, b) => b - a)
  let sum = nums[0];
  for (let i = 0; i < k - 1; i++) {
    nums[0] += 1
    sum += nums[0]
  }
  return sum;
};

// console.log(maximizeSum([5,5,5], 2));