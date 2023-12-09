function diffArray(arr1, arr2) {
  const newArr = [];
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)
  let set3 = new Set([])
  let set4 = new Set([])
  set2.forEach(item => {
    if (!set1.has(item)) {
      set3.add(item)
    }
  })
  set1.forEach(item => {
    if (!set2.has(item)) {
      set3.add(item)
    }
  })
  // console.log(set3);

  set3.forEach(item => newArr.push(item))
  set4.forEach(item => newArr.push(item))

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));