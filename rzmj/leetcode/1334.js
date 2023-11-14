// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @param {number} distanceThreshold
//  * @return {number}
//  */
// var findTheCity = function (n, edges, distanceThreshold) {
//   const distance = Array.from({
//     length: n
//   }, () => new Uint16Array(n).fill(10001));
//   for (const edge of edges) {
//     distance[edge[0]][edge[1]] = distance[edge[1]][edge[0]] = edge[2];
//   }

//   for (let i = 0; i < n; ++i) {
//     for (let j = 0; j < n; ++j) {
//       for (let k = 0; k < n; ++k) {
//         if (k === j) continue;
//         distance[j][k] = Math.min(distance[j][k], distance[j][i] + distance[i][k]);
//       }
//     }
//   }

//   let city = 0;
//   let minNum = n;
//   for (let i = 0; i < n; ++i) {
//     let curNum = 0;
//     for (let j = 0; j < n; ++j) {
//       distance[i][j] <= distanceThreshold && ++curNum;
//     }
//     if (curNum <= minNum) {
//       minNum = curNum;
//       city = i;
//     }
//   }
//   return city;
// };

// console.log(findTheCity(4, [
//   [0, 1, 3],
//   [1, 2, 1],
//   [1, 3, 4],
//   [2, 3, 1]
// ], 4));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(1, 5));