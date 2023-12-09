function destroyer(arr) {
  let arr1 = [...arguments]
  let arr2 = arr1.shift()
  console.log(arr1, arr2);
  let returnarr = []
  arr2.forEach(element => {
    for (let i = 0; i < arr1.length; i++) {
      if (element == arr1[i]) {
        break
      }
      if (i == arr1.length - 1) {
        returnarr.push(element)
      }
    }
  });
  arr = returnarr
  return arr;
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));