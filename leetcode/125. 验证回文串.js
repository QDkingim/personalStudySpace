/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let flag = 0
  // [^a-zA-Z0-9]
  let s_low = s.toLowerCase()

  let s_final = s_low.replace(/[^a-zA-Z0-9]/g, '')

  for (let i = 0; i < Math.floor((s_final.length) / 2); i++) {
    if (s_final[i] == s_final[s_final.length - i - 1]) {
      flag++
    } else {
      return false
    }
  }

  if (flag == Math.floor((s_final.length) / 2)) {
    return true
  }
};

// console.log(isPalindrome(" "));

// 一次通过