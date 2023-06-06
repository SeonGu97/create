"use strict";

export default class Selector {
  constructor(This, name, type, value) {
    this.This = This;
    this.name = name;
    this.type = type;
    this.value = value;

    this.reset();
  }

  reset() {
    if (Array.isArray(this.type)) {
      this.typeSelector(this.type[0]);
    } else {
      this.typeSelector(this.type);
    }
  }

  typeSelector(type) {
    if (type == "id") {
      this.This.__proto__.elements = document.querySelectorAll(
        `#${this.value}`
      );
    } else if (type == "class") {
      this.This.__proto__.elements = document.querySelectorAll(
        `.${this.value}`
      );
    } else {
      this.This.__proto__.elements = document.querySelectorAll(this.name);
    }
  }
}
