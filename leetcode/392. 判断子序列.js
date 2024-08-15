/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 双指针
var isSubsequence = function (s, t) {
  // 输入：s = "abc", t = "ahbgdc"
  // 输出：true
  // console.log(s[1], t[2]);

  if (s.length == 0) { return true }
  var index = 0, subIndex = 0
  while (index < t.length) {
    if (s[subIndex] === t[index]) {
      subIndex++
      if (subIndex > s.length - 1) {
        return true
      }
    }
    index++
  }
  return false
};

console.log(isSubsequence("abc", "ahbgdc"));
