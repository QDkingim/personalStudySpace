/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let flag = true
  if (s.length != t.length) {
    return false
  }
  let map = new Map([])
  // s字符串里的字符是map的键  t字符串里的字符是map的值
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) == t[i]) {

      } else {
        flag = false
        break
      }
    } else {
      let iterator = map.values()
      for (const item of iterator) {
        if (item === t[i]) flag = false
      }
      map.set(s[i], t[i])
    }
  }
  return flag
};


// 2次提交通过