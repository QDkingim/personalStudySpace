function Ninja() {
  let _skillLevel = 0;

  Object.defineProperty(this, "skillLevel", {
    get: () => {
      console.log("skillLevel getting"); //记录日志功能
      return _skillLevel;
    },

    set: (val) => {
      console.log("Setting Exect");
      _skillLevel = val;
    },
  });
}

// 注意,与对象字面量和类中的getter和setter不同,通过Object.defineProperty创建的get和set方法,与私有变量处于相同的作用域内
