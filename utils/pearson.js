// from a permutation table, generate a function that performs a step
// of pearson's hash
const pearson = table => (h, x) => table[h ^ x];

module.exports = {
  pearson: pearson
}
