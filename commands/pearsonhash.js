const { fisherYates } = require('../utils/fisherYates.js');
const { range } = require('../utils/graphtools.js');

// from a permutation table, generate a function that performs a step
// of pearson's hash
const pearson = table => (h, x) => table[h ^ x];

// generate the table for pearson's hash
const mytable = fisherYates(range(256));
const mypearson = pearson(mytable);

const execute = (msg, argstring) => {
  const { data } = argstring.match(/"(?<data>.*)"/).groups;
  const hash = data
    .split('')
    .map(s => s.charCodeAt(0))
    .reduce(mypearson, 0);
  msg.reply(`"${data}" hashed to ${hash} with table [${mytable.join(' ')}]`);
};

module.exports = {
  name: 'pearsonhash',
  execute: execute
}
