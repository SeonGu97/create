"use strict";

export default class Wrap {
  constructor(generate, name, element, type, value, parent, number, text) {
    this.wrap = new generate(
      name,
      element,
      type,
      value,
      parent,
      number,
      text,
      this
    );
  }
}
