/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m == 0) {
    nums2.forEach((item, index) => {
      nums1[index] = item
    })
  }

  for (let i = 0, j = m; i < n; i++, j++) {
    nums1[j] = nums2[i]
  }

  nums1 = bubbleSort(nums1)

};

function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // 交换元素位置
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)