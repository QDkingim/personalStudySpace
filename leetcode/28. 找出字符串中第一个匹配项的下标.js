/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const len = haystack.length;
  const needleLen = needle.length;
  if (needleLen === 0) return 0;
  let i = 0;
  let j = 0;
  while (i < len) {
    if (haystack[i] === needle[j]) {
      if (j === needleLen - 1) return i - j;
      i++;
      j++;
    } else {
      // i-j：将 i 移动到上一个匹配点之后的位置
      i = i - j + 1;
      j = 0;
    }
  }
  return -1
};

// 测试1
// console.log(strStr("hello", "ll")); // 2
// 测试2
// console.log(strStr("sadbutsad", "sad")); // 0
// 测试3
// console.log(strStr("leetcode", "leeto")); // -1
// 测试4
console.log(strStr("mississippi", "issip")); // 4

// 看了题解醒悟的，主要是得找到两串之间的关系，比如回溯，i-j+1,比如匹配完成找到，第一个匹配字符的位置 i-j