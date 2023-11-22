function Person() {}
Person.prototype.dance = function () {};

function Ninja() {}

// 重要的一步,一个对象的原型直接是另一个对象的实例

Ninja.prototype = new Person();

let ninja = new Ninja();

console.log(ninja instanceof Ninja);
console.log(ninja instanceof Person);
console.log(ninja instanceof Object);
console.log(typeof ninja.dance === "function");


