const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    (value === undefined) ? this.chain.push('( )'): this.chain.push(`( ${value} )`);
    return this;;
  },
  removeLink(position) {
    if (typeof position == 'number' && position > 0 && position <= this.chain.length) {
      this.chain.splice((position - 1), 1);
    } else {
      this.chain = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    var chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  }
};

module.exports = chainMaker;
