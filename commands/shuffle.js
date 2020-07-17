const { fisherYates } = require('../utils/fisherYates.js');

const execute = (msg, argstring) => {
  const args = argstring.match(/\S+/g);
  const n = parseInt(args[0]);
  const data = new Array(n);
  for (let i = 0; i < n; i++) data[i] = i;
  msg.reply(fisherYates(data).join(' '));
};

module.exports = {
  name: 'shuffle',
  execute: execute
}
