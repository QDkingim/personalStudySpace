/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let reNum = 0;
  let len = nums.length
  let n = Math.floor(len / 2)
  let obj = {}
  nums.map((item, index) => {
    obj[item] = 0
  })

  nums.map((item, index) => {
    obj[item]++
  })

  for (const iterator in obj) {
    // console.log(iterator);
    if (obj[iterator] > n && obj[iterator] > reNum) {
      reNum = iterator
    }
  }

  return reNum
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));