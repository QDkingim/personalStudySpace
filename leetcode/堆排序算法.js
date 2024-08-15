// 堆排序
function heapSort(arr) {
  // 建立最大堆
  function buildMaxHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
      heapify(arr, i, len);
    }
  }

  // 调整堆
  function heapify(arr, i, len) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, largest, len);
    }
  }

  // 实现堆排序
  function sort(arr) {
    const len = arr.length;

    buildMaxHeap(arr);

    for (let i = len - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, 0, i);
    }
    return arr;
  }

  return sort(arr);
}

// 示例
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("原数组:", array);
console.log("堆排序后:", heapSort(array));


// https://testerhome.com/articles/27019  讲解