// 把这些校验逻辑都封装成策略对象
var strategies = {
  isNonEmpty: function (value, errMessage) {
    // 不为空
    if (value === '') {
      return errMessage
    }
  },
  minLength: function (value, length, errMessage) {
    // 限制最小长度
    if (value.length < length) {
      return errMessage
    }
  },
  isMobile: function (value, errMessage) {
    // 手机号格式验证
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errMessage
    }
  }
}


var validateFunc = function () {
  var validator = new Validator() // 创建一个validator对象

  // 添加一些校验规则
  validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空')
  validator.add(registerForm.password, 'minLength:6', '密码长度不能低于6位')
  validator.add(registerForm.phoneName, 'isMobile', '手机号码格式不正确')

  var errMessage = validator.start() // 获得校验结果

  return errMessage
}


var registerForm = document.getElementById('registerForm')
registerForm.onsubmit = function () {
  var errMessage = validateFunc() // 如果errMessage有确切返回值,说明未通过校验
  if (errMessage) {
    alert(errMessage)
    return false; // 阻止表单提交
  }
}

var Validator = function () {
  this.cache = [] // 保存校验规则
}

Validator.prototype.add = function (dom, rule, errMessage) {
  var ary = rule.split(':'); // 把strategy和参数分开
  this.cache.push(function () { // 把校验的步骤用空函数包装起来,并且放入cache
    var strategy = ary.shift(); // 用户挑选的strategy
    ary.unshift(dom.value); // 把用户input的value添加进参数列表
    ary.push(errMessage); // 错误信息添加进参数列表
    return strategies[strategy].apply(dom, ary)
  })
}

Validator.prototype.start = function () {
  for (let i = 0, validateFunc; validateFunc = this.cache[i++];) {
    var msg = validateFunc(); // 开始校验,并取得校验后的返回信息
    if (msg) { // 如果有确切的返回值,说明校验没有通过
      return msg;
    }
  }
}