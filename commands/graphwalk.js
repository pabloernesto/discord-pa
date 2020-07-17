const { fisherYates } = require('../utils/fisherYates.js');

// interprets an array permutation as a random walk through a graph
// generates the array associated to that walk
const walk = arr => {
  const out = new Array(arr.length);
  arr.forEach((v, i) => out[v] = arr[(i + 1) % arr.length]);
  return out;
}

const execute = (msg, argstring) => {
  const args = argstring.match(/\S+/g);
  const n = parseInt(args[0]);
  const data = new Array(n);
  for (let i = 0; i < n; i++) data[i] = i;
  msg.reply(walk(fisherYates(data)).join(' '));
};

module.exports = {
  name: 'graphwalk',
  execute: execute
}
