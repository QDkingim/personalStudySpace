/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && nums[i] === nums[j + 1]) {
        nums.splice(j + 1, 1)
        j--
        continue;
      } else {
        break
      }
    }
  }

  return nums.length
};

// 输入：nums = [0,0,1,1,1,1,2,3,3]
// 输出： 7, nums = [0, 0, 1, 1, 2, 3, 3]

// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));