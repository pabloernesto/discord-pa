// generate an array of the numbers 0 through to size - 1
const range = size => new Array(size).fill().map((_, i) => i);

// interprets an array permutation as a random walk through a graph
// generates the array associated to that walk
const walk = arr => {
  const out = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const v1 = arr[i];
    const v2 = arr[(i + 1) % arr.length];
    out[v1] = v2;
  }
  return out;
}

module.exports = {
  range: range,
  walk: walk
}
