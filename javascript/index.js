"ues strict";

import create from "../create/create.js";
import data from "../data/data.js";
import Text from "../text/text.js";

export default class Index {
  constructor(create, data, index, parent, num) {
    this.index = new create(index, parent, num);
  }
}

const index = new Index(create, data, 0, document.body, 1);
const text = new Text(data);
