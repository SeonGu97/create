"use strict";

export default class Text {
  constructor(data) {
    data.forEach((element) => {
      if (element.selector != null) this.write(element);
    });
  }

  write(data) {
    if (Array.isArray(data.text)) {
      const length = data.text.length;
      data.selector.forEach((element, index) => {
        index >= length ? (index -= length) : "";

        element.insertAdjacentHTML("afterbegin", data.text[index]);
      });
    } else {
      data.selector.forEach((element) => {
        element.insertAdjacentHTML("afterbegin", data.text);
      });
    }
  }
}
