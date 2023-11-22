function Ninja() {
  let _skillLevel = 0;
  Object.defineProperty(this, "skillLevel", {
    get: () => _skillLevel,
    set: (val) => {
      if (!Number.isInteger(val)) {
        throw new TypeError("Skill level should be a number");
      }
      _skillLevel = val;
    },
  });
}

let ninja = new Ninja();

ninja.skillLevel = 10;

console.log(ninja.skillLevel);

ninja.skillLevel = "Bob";


