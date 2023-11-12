// 存储唯一函数的集合
var store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      fn.id = this.nextId++ //先使用再加
      this.cache[fn.id] = fn
      return true
    }
  }
}


function ninja() {

}


console.assert(store.add(ninja), "Function was safely added")
console.assert(!store.add(ninja), "But it was only added once")