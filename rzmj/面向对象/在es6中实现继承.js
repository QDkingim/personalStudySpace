class Person {
  constructor(name) {
    this.name = name;
  }

  dance() {
    return true;
  }
}

class Ninja extends Person {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  wieldWeapon() {
    return true;
  }
}

let person = new Person("Bob");

let ninja = new Ninja("Yoshi", "Wakizashi");

console.log(ninja.dance());
console.log(ninja.name);
