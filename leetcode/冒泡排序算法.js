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

// 示例
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("原数组:", array);
console.log("冒泡排序后:", bubbleSort(array));
