function add(x) {
  // 只修改这一行下面的代码
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
  // 只修改这一行上面的代码
}

add(10)(20)(30);

console.log(add(10)(20)(30));