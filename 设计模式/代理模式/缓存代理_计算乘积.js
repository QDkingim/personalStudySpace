var mult = function () {
  console.log('开始计算乘积');
  var a = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i]
  }
  return a
}


var proxyMult = (function () {
  var cache = []
  return function () {
    var args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      return cache[args]
    }

    return cache[args] = mult.apply(this, arguments)
  }
})()

console.log(proxyMult(1, 2, 3));
console.log(proxyMult(1, 2, 3));
console.log(mult(1, 2, 3, 4));
console.log(mult(1, 2, 3, 4));