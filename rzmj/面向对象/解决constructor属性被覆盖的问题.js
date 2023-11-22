// 解决constructor属性被覆盖的问题
function Person() {}
Person.prototype.dance = function () {};

function Ninja() {}
Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, "constructor", {
  enumerable: false, // for in 遍历对象时,enumerable为false的属性不会被遍历
  value: Ninja,
  writable: true,
});

let ninja = new Ninja();

console.log((ninja.constructor === Ninja));

for (const prop in Ninja.prototype) {
  console.log(prop);
}
