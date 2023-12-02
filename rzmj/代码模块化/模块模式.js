// 通过使用立即执行函数、对象和闭包来创建模块的方式称为 模块模式
const MouseCounterModule = (function () {
  let numClicks = 0; // 创建模块私有变量
  const handleClick = function () {
    // 创建模块私有函数
    alert(++numClicks);
  };

  return {
    counterClicks: () => {
      document.addEventListener("click", handleClick);
    },
  };
})();

// 只能通过暴露的变量去操作内部的变量  通过闭包
console.log(typeof MouseCounterModule.counterClicks);

// 不可以访问模块的内部实现
console.log(MouseCounterModule.numClicks, MouseCounterModule.handleClick);

// 模块扩展
(function (module) {
  let numScrolls = 0;

  const handleScroll = () => {
    alert(++numScrolls);
  };

  module.counterScrolls = () => {
    document.addEventListener("wheel", handleScroll);
  };
})(MouseCounterModule);

// 当扩展模块时, 我们对其外部接口增加新功能, 通常将模块传入立即执行函数
// 模块模式相同的缺点：扩展的模块无法共享原有模块的内部属性
