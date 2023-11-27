// 检测一个数是否是素数的函数
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

isPrime = new Proxy(isPrime, {
  apply: (target, thisArg, args) => {
    console.time("isPrime");
    console.log(target, thisArg, args);
    const result = target(args);
    console.timeEnd("isPrime");

    return result;
  },
});

console.log(isPrime(1299827));
