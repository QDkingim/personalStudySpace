"use strict"
// 使用arguments参数对所有函数参数执行操作
function sum() {
  var sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

// arguments是函数所有传入实参的集合,它是一个类数组,不是数组,数组上的方法没法使用

// 剩余参数是一个Array实例
function sumRemaining(first, ...remainingNum) {
  var sum = first
  for (let i = 0; i < remainingNum.length; i++) {
    sum += remainingNum[i]
  }
  return sum
}

// 尽量不要使用arguments 作为参数别名,也就是不要给argument[0]赋值,这会改变原来传进来的参数