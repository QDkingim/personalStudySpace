/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  function reverse(i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }

  let n = nums.length
  k = k % n
  reverse(0, n - 1)
  reverse(0, k - 1)
  reverse(k, n - 1)
};



// console.log();
