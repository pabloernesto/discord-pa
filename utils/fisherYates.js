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

module.exports = {
  randInt: randInt,
  fisherYates: fisherYates
}
