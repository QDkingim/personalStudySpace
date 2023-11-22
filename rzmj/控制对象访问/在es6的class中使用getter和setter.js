class NinjaCollection {
  constructor() {
    this.ninjas = ["Yoshi", "Kuma", "Hattori"];
  }

  get firstNinja() {
    return this.ninjas[0];
  }

  set firstNinja(val) {
    this.ninjas[0] = val;
  }
}
