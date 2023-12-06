// 数据对象
let a = {
  value: 1,
};

let b = {
  value: 2,
};

// 定义触发器,用来刷新数据
let trigger = null;

// 数据变量的处理器,当数据发生变化时,调用触发器刷新数据
// 这两个处理器是为了创建Proxy对象时传入的
handleA = {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    target[key] = value;
    // 检查触发器方法是否不为空,若不为空,则调用
    if (trigger) {
      trigger();
    }
  },
};

handleB = {
  get(target, key) {
    return target[key];
  },
  // target为调用此处理器的对象本身,key为要设置的属性名,value为要设置的值
  set(target, key, value) {
    target[key] = value;
    if (trigger) {
      trigger();
    }
  },
};

// 进行对象的代理包装
let pa = new Proxy(a, handleA);
let pb = new Proxy(b, handleB);
let sum = 0;

// 实现触发器逻辑,重新计算sum值
trigger = () => {
  sum = pa.value + pb.value;
};

// 手动调用一次触发器,对sum变量进行初始化
trigger();

console.log(sum);

// 尝试修改变量pa和pb的值,之后会触发对应的set方法,从而调用触发器方法
pa.value = 4;
pb.value = 6;

// 由于触发器执行了,sum变量的值也同步更新了
console.log(sum);

// 通过Proxy代理对象来拦截子变量属性的修改,对子变量的属性修改时,除了对子变量本身对应的属性进行赋值外,
// 还调用了一个触发器方法, 触发器方法的作用是对父变量的值进行重新计算
