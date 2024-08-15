function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// 示例
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("原数组:", array);
console.log("插入排序后:", insertionSort(array));

// https://blog.csdn.net/qq_44616044/article/details/115708056  图解