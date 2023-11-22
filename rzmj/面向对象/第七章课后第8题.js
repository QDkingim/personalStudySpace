function Warrior(weapon) {
  this.weapon = weapon;
}

Warrior.prototype.wield = function () {
  return "Wielding " + this.weapon;
};

Warrior.duel = function (warrior1, warrior2) {
  return warrior1.wield() + "" + warrior2.wield();
};
