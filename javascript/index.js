"use strict";

import Generate from "../generate/generate.js";
const generate = Generate;

import Wrap from "./wrap/wrap.js";

export default class Index {
  constructor(generate, name, element, type, value, parent, number, text) {
    this.index = new generate(
      name,
      element,
      type,
      value,
      parent,
      2,
      text,
      this
    );

    this.wrap = new Wrap(
      generate,
      "wrap",
      "div",
      ["class", "id"],
      ["wraps", "wrap"],
      this.__proto__.elements,
      1,
      "warp"
    );
  }
}

const index = new Index(
  generate,
  "index",
  "div",
  "id",
  "index",
  document.body,
  2,
  ["index1", "index2"]
);
