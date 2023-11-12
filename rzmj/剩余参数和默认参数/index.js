// 剩余参数以...开头,是一个数组
// 构建一个函数,它会将第一个参数与余下参数中最大的数相乘
function multiMax(first, ...remainingNumber) {
  return first * remainingNumber.sort((a, b) => b - a)[0]
}

console.log(multiMax(3, 1, 2, 3));

// 只有函数的最后一个参数才能是剩余参数


// 默认参数
function performAction(ninja, action = "skuling", message = ninja + "" + action) { //当对后面的默认参数赋值时可以引用前面的参数
  return ninja + " " + action
}
console.log(performAction("Fuma"));
console.log(performAction("Yagyu", "sneaking"));
// 默认参数可以是数组,对象,函数
// 但是不建议经常写默认参数,会降低代码的可读性,但是可以使用默认参数来避免空值