// 计算素数
// 在内部构建一个结果缓存,他会保存每次计算得到的结果(本质上是用空间换时间)
function isPrime(val) {
  if (!isPrime.answersCache) {
    isPrime.answersCache = {} // 创建缓存,只创建一次
  }
  if (isPrime.answersCache[val]) {
    return isPrime.answersCache[val]
  }
  var prime = val !== 0 && val !== 1 // 0和1都不是素数
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      prime = false
      break
    }
  }
  return isPrime.answersCache[val] = prime
}

// 每次计算前都会先去缓存里看看,之前计算过没有,若是计算过直接返回,节省了时间