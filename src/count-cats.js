module.exports = function countCats(matrix) {
  const array = matrix.flat();
  const cats = array.filter(item => item === '^^');
  return cats.length;
};
