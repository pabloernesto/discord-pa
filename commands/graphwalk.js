const { fisherYates } = require('../utils/fisherYates.js');
const { range, walk } = require('../utils/graphtools.js');

const execute = (msg, argstring) => {
  const args = argstring.match(/\S+/g);
  const n = parseInt(args[0]);
  msg.reply(walk(fisherYates(range(n))).join(' '));
};

module.exports = {
  name: 'graphwalk',
  execute: execute
}
