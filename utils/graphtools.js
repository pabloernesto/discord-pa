const range = size => new Array(size).fill().map((_, i) => i);

// interprets an array permutation as a random walk through a graph
// generates the array associated to that walk
const walk = arr => {
  const out = new Array(arr.length);
  arr.forEach((v, i) => out[v] = arr[(i + 1) % arr.length]);
  return out;
}

module.exports = {
  range: range,
  walk: walk
}
