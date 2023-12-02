/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return nums1
  }

  if (m === 0) {
    for (let i = 0; i < nums2.length; i++) {
      nums1[i] = nums2[i]
    }
  }

  console.log(nums1);

};
console.log(merge([0], 0, [1], 1));