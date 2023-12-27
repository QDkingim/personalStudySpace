var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  // JS中的哈希表
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);


  // 数组模拟栈
  const stk = [];

  // for in 遍历下标   for of 遍历字符

  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  };
  return !stk.length;
};