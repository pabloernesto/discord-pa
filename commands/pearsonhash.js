const { fisherYates } = require('../utils/fisherYates.js');
const { range } = require('../utils/graphtools.js');
const { pearson } = require('../utils/pearson.js');

// generate 8 pearson step functions based on 8 different permutation tables
const mypearsons = new Array(8).fill()
  .map(() => fisherYates(range(256))) // permutation tables
  .map(t => pearson(t));              // step functions

const execute = (msg, argstring) => {
  const { data } = argstring.match(/"(?<data>.*)"/).groups;

  // apply each of the 8 step functions to the entire string
  const hashes = mypearsons
    .map(f => data
      .split('')                    // 'hi' => ['h', 'i']
      .map(c => c.charCodeAt(0))    // ['h', 'i'] => [104, 105]
      .reduce(f, 0));               // [104, 105] => int

  // format the output
  const out = hashes
    .map(x => x             // [1,2,3, ... 8] => ["01","02","03", ... "08"]
      .toString(16)         // 7 => "7"
      .padStart(2, '0'))    // "7" => "07"
    .reduce((a, b) => a + b, '0x');   // ["01","02", ... "08"] => "0x0102...08"

  msg.reply(`"${data}" hashed to ${out}`);
};

module.exports = {
  name: 'pearsonhash',
  execute: execute
}
