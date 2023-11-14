/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j + 1]
      }
      i--
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 || nums[i]) {

    } else {
      nums.pop()
      i--
    }
  }
  return nums.length
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));