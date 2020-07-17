// return a random integer in the range [0, max)
const randInt = max => Math.floor(Math.random() * max);

const fisherYates = arr => {
  let out = arr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [ out[i], out[j] ] = [ out[j], out[i] ];
  }
  return out;
}

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
