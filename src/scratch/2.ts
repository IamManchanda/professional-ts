/* eslint-disable @typescript-eslint/no-unused-vars */
class Foo {
  #name;
  constructor(rawName?: string) {
    this.#name = rawName || '(no name)';
  }

  log() {
    console.log(this.#name);
  }
}
