/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = new Set();
  let col = new Set();

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++)
      if (matrix[i][j] === 0) {
        row.add(i);
        col.add(j);
      }

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++) {
      if (row.has(i) || col.has(j)) matrix[i][j] = 0;
    }
};

var betterSpaceSetZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let col0HasZero = false,
    row0HasZero;

  for (let row = 0; row < m; row++) {
    if (matrix[row][0] === 0) {
      col0HasZero = true;
      break;
    }
  }

  for (let col = 0; col < n; col++) {
    if (matrix[0][col] === 0) {
      row0HasZero = true;
      break;
    }
  }

  for (let row = 0; row < m; row++)
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }

  for (let row = 1; row < m; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < n; col++) matrix[row][col] = 0;
    }
  }

  for (let col = 1; col < n; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < m; row++) matrix[row][col] = 0;
    }
  }

  if (col0HasZero)
    for (let row = 0; row < m; row++) {
      matrix[row][0] = 0;
    }

  if (row0HasZero)
    for (let col = 0; col < n; col++) {
      matrix[0][col] = 0;
    }
};
