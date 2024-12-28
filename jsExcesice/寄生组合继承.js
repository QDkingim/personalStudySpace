function Parent(name) {
  this.parentProperty = '这是父类的属性';
  this.name = name;
}
Parent.prototype.parentMethod = function () {
  console.log('这是父类的方法');
};
function Child(name) {
  Parent.call(this, name);
  this.childProperty = '这是子类的属性';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
const child = new Child('小李');
console.log(child.name);
console.log(child.parentProperty);
console.log(child.parentMethod());