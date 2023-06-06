"ues strict";

import Selector from "../selector/selector.js";

export default class Generate {
  constructor(name, element, type, value, parent, number, text, This) {
    this.name = name;
    this.element = element;
    this.type = type;
    this.value = value;
    this.parent = parent;
    this.number = number;
    this.text = text;
    this.This = This;
    this.selector = Selector;

    for (let i = 0; i < number; i++) {
      this.create();
      this.attrs();
      this.add();
    }

    new this.selector(this.This, this.name, this.type, this.value);
    this.insertText();
  }

  create() {
    this.name = document.createElement(this.element);
  }

  attrs() {
    if (Array.isArray(this.type)) {
      this.type.forEach((type, index) => {
        this.name.setAttribute(type, this.value[index]);
      });
    } else {
      this.name.setAttribute(this.type, this.value);
    }
  }

  add() {
    if (this.parent.length == undefined) {
      this.parent.appendChild(this.name.cloneNode(true));
    } else {
      this.parent.forEach((element) => {
        element.appendChild(this.name.cloneNode(true));
      });
    }
  }

  insertText() {
    if (Array.isArray(this.text)) {
      this.This.__proto__.elements.forEach((element, index) => {
        element.insertAdjacentHTML("afterbegin", this.text[index]);
      });
    } else {
      this.This.__proto__.elements.forEach((element, index) => {
        element.insertAdjacentHTML("afterbegin", this.text);
      });
    }
  }
}
