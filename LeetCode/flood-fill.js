/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const currentColor = image[sr][sc];
  const visited = new Set();
  const q = [[sr, sc]];
  while (q.length) {
    const point = q.shift();
    const [r, c] = point;
    if (!(r < 0 || r >= image.length || c < 0 || c >= image[0].length)) {
      if (image[r][c] >= 0 && image[r][c] === currentColor) {
        image[r][c] = newColor;
        if (!visited.has(point.join(','))) {
          visited.add(point.join(','));
          q.push([r - 1, c]);
          q.push([r + 1, c]);
          q.push([r, c + 1]);
          q.push([r, c - 1]);
        }
      }
    }
  }

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
