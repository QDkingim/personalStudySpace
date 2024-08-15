/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let tempNums = nums
  let len = nums.length
  for (let index = 0; index < k; index++) {
    let t = nums[len - 1]
    for (let i = len - 1; i >= 0; i--) {
      tempNums[i - 1] = tempNums[i]
    }
    tempNums[0] = t
  }

  console.log(tempNums);
};