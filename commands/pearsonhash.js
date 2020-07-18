const { fisherYates } = require('../utils/fisherYates.js');
const { range } = require('../utils/graphtools.js');

// generate the table for pearson's hash
const mytable = fisherYates(range(256));

// from a permutation table, generate a function that performs a step
// of pearson's hash
const pearson = table => (h, x) => table[h ^ x];

const execute = (msg, argstring) => {
  const data = argstring.match(/"(?<data>.*)"/).groups.data;
  const mypearson = pearson(mytable);
  const codes = data.split('').map(s => s.charCodeAt(0));
  const hash = codes.reduce(mypearson, 0);
  msg.reply(`"${data}" hashed to ${hash} with table [${mytable.join(' ')}]`);
};

module.exports = {
  name: 'pearsonhash',
  execute: execute
}
