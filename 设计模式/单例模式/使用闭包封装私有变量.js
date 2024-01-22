var user = (function () {
  var _name = 'sven',
    _age = 29;

  return {
    getUserInfo: function () {
      return _name + '-' + _age
    }
  }
})()