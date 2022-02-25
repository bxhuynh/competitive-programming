/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const positiveNums = [];
  const negativeNums = [];
  const mergeNums = [];

  for (let num of nums) {
    if (num < 0) {
      negativeNums.push(num * num);
    } else {
      positiveNums.push(num * num);
    }
  }

  let pIndex = 0;
  let nIndex = negativeNums.length - 1;

  while (nIndex >= 0 && pIndex < positiveNums.length) {
    if (negativeNums[nIndex] < positiveNums[pIndex]) {
      mergeNums.push(negativeNums[nIndex]);
      nIndex--;
    } else {
      mergeNums.push(positiveNums[pIndex]);
      pIndex++;
    }
  }

  while (nIndex >= 0) {
    mergeNums.push(negativeNums[nIndex]);
    nIndex--;
  }

  while (pIndex < positiveNums.length) {
    mergeNums.push(positiveNums[pIndex]);
    pIndex++;
  }

  return mergeNums;
};

/* smart way: from discussion,
 * Since we know that the source array is sorted,
 * it is obvious that the largest numbers (by absolute value)
 * are at the edges of the array,
 * gradually decreasing towards the middle.
 */

var smartSortedSquares = function (nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;
  let pointer = right;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result[pointer] = nums[left] ** 2;
      pointer--;
      left++;
    } else {
      result[pointer] = nums[right] ** 2;
      pointer--;
      right--;
    }
  }

  return result;
};
