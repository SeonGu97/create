"use strict";

export default class Selector {
  constructor(data) {
    let type;

    data.type == "id"
      ? (type = "#")
      : data.type == "class"
      ? (type = ".")
      : (type = "");

    const pattern = /\s/g;

    if (data.value[0] != undefined) {
      this.space = Array.isArray(data.value[0].match(pattern));
    }

    if (this.space) {
      const array = data.value[0].split(pattern);

      for (let i = 0; i < array.length; i++) {
        data.selector = document.querySelectorAll(`${type}${array[i]}`);
      }
    } else {
      if (!type == "") {
        data.selector = document.querySelectorAll(`${type}${data.value[0]}`);
      } else {
        data.selector = document.querySelectorAll(data.element);
      }
    }
  }
}
