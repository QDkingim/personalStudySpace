function sumAll(arr) {
  let numStart = arr[0] < arr[1] ? arr[0] : arr[1]
  let numEnd = arr[0] > arr[1] ? arr[0] : arr[1]
  let arrB = []
  for (let i = numStart; i <= numEnd; i++) {
    arrB.push(i)
  }
  return arrB.reduce((sum, item) => sum + item);
}

sumAll([1, 4]);
console.log(sumAll([1, 4]));