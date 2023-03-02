class Multiton {
    static #instance = null;
    static #limit = 4;
    static #count = 0;
    static #instanceArray = [];
    static #fl = false;
    static createInstance() {
      this.#fl = true;
  
      this.#count++;
  
      console.log(this.#count);
  
      if (this.#count <= this.#limit) {
        this.#instance = new Multiton();
        this.#instanceArray.push(this.#instance);
      }
      if (this.count % this.limit === 0) {
        return this.#instanceArray[this.#limit - 1];
      } else {
        return this.#instanceArray[(this.#count % this.#limit) - 1];
      }
  
      this.#fl = false;
    }
  
    constructor() {
      if (!Multiton.#fl) {
        throw new TypeError("PrivateConstructor is not constructable");
      }
    }
  }
  module.exports = Multiton