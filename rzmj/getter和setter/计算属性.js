const shogun = {
  name: "Yoshiaki",
  clan: "Ashikaga",
  get fullTitle() {
    return this.name + " " + this.clan;
  },
  set fullTitle(val) {
    let ele = val.split(" ");
    this.name = ele[0];
    this.clan = ele[1];
  },
};

console.log(shogun.fullTitle);

shogun.fullTitle = "rxs llll";

// console.log(shogun.fullTitle);

console.log(shogun.name);
console.log(shogun.clan);
