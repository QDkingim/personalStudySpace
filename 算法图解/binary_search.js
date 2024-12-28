// 二分查找算法,传入的必须是一个有序的数组

function binary_search(list, item) {
  let high = list.length - 1
  let low = 0
  while (low <= high) {
    let mid = Math.floor((high + low) / 2)
    if (item == list[mid]) return mid
    else if (item < list[mid]) high = mid
    else low = mid
  }

  return null
}

console.log(binary_search([1, 3, 5, 7, 9], 5));