/**
 * @param {number[][]} grid
 * @return {number}
 */
var slowMaxAreaOfIsland = function (grid) {
  let maxArea = 0;
  const noRows = grid.length;
  const noCols = grid[0].length;
  const visited = new Set();
  const checkList = [];
  for (let i = 0; i < noRows; i++)
    for (let j = 0; j < noCols; j++) {
      if (grid[i][j]) checkList.push([i, j]);
    }

  for (let i = 0; i < checkList.length; i++) {
    const currentNode = checkList[i];
    if (!visited.has(currentNode.join(','))) {
      let sum = 0;
      const q = [currentNode];
      while (q.length) {
        const [r, c] = q.shift();
        if (r >= 0 && r < noRows && c >= 0 && c <= noCols) {
          if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
            sum += 1;
            visited.add(`${r},${c}`);
            q.push([r - 1, c]);
            q.push([r + 1, c]);
            q.push([r, c + 1]);
            q.push([r, c - 1]);
          }
        }
      }

      if (sum > maxArea) maxArea = sum;
    }
  }
  return maxArea;
};

var areaOfIsland = (grid, r, c) => {
  if (r < 0 || r >= grid.length || c < 0 || c > grid[0].length || !grid[r][c])
    return 0;

  grid[r][c] = 0;
  return (
    1 +
    areaOfIsland(grid, r - 1, c) +
    areaOfIsland(grid, r + 1, c) +
    areaOfIsland(grid, r, c - 1) +
    areaOfIsland(grid, r, c + 1)
  );
};

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j]) {
        let sum = areaOfIsland(grid, i, j);
        if (sum > maxArea) maxArea = sum;
      }

  return maxArea;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
