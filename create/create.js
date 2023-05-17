"use strict";

import Data from "../data/data.js";
import Selector from "../selector/selector.js";

export default class Create {
  constructor(index, parent, num) {
    this.data = Data;

    this.loop(this.data[index], parent, num, this.make);
    this.loop(this.data[index], parent, num, this.attrs);
    this.loop(this.data[index], parent, num, this.add);
  }

  loop(data, parent, num, func) {
    for (let i = 0; i < num; i++) {
      func(data, parent);
    }
  }

  make(data) {
    data.name = document.createElement(data.element);
  }

  attrs(data) {
    for (let i = 0; i < data.type.length; i++) {
      data.name.setAttribute(data.type[i], data.value[i]);
    }
  }

  add(data, parent) {
    if (parent.length >= 1) {
      parent.forEach((element) => {
        element.appendChild(data.name.cloneNode(true));
      });
    } else {
      parent.appendChild(data.name.cloneNode(true));
    }

    const selector = new Selector(data);
  }
}
