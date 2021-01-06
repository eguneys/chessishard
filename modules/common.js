let { nextString } = require('../model/random');

function Nonce(value) {
  this.scriptSrc = `'nonce-${value}'`;

  this.toString = () => value;
};

module.exports.Nonce = {
  random: () => new Nonce(nextString(24))
};
