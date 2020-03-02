
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sortArr = [];
  if (matrix == null || matrix == undefined) {
    return sortArr;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        sortArr.push(matrix[i][j]);
      }
    } else {
      for (let k = matrix[i].length - 1; k >= 0; k--) {
        sortArr.push(matrix[i][k]);
      }
    }
  }
  return sortArr;
}