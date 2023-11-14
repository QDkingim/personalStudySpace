/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j + 1]
      }
      i--
      nums.pop()
    }

  }


  // return nums
  return nums.length
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4]));