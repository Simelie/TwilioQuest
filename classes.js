class Materializer {
  constructor(targetd) {
    this.target = targetd;
    this.activated = false;
  }

  activate() {
    this.activated = true;
  }

  materialize() {
    if (this.activated == true) return `${this.target}`;
    else return undefined;
  }
}
