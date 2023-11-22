const ninjaCollection = {
  ninjas: ["Yoshi", "Kuma", "Hattori"],
  get firstNinja() {
    console.log("Getting firstNinja");
    return this.ninjas[0];
  },

  set firstNinja(val) {
    console.log("Setting firstNinja");
    this.ninjas[0] = val;
  },
};

console.log(ninjaCollection.firstNinja);
ninjaCollection.firstNinja = "rxs";
console.log(ninjaCollection.firstNinja);
