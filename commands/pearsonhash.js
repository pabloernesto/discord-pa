const { fisherYates } = require('../utils/fisherYates.js');
const { range } = require('../utils/graphtools.js');
const { pearson } = require('../utils/pearson.js');

// generate the table for pearson's hash
const mytable = fisherYates(range(256));
const mypearson = pearson(mytable);

const execute = (msg, argstring) => {
  const { data } = argstring.match(/"(?<data>.*)"/).groups;
  const hash = data
    .split('')                  // 'hi' => [ 'h', 'i' ]
    .map(s => s.charCodeAt(0))  // can't xor strings, so convert to ASCII codes
    .reduce(mypearson, 0);
  msg.reply(`"${data}" hashed to ${hash} with table [${mytable.join(' ')}]`);
};

module.exports = {
  name: 'pearsonhash',
  execute: execute
}
