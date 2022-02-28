/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//same solution as twosum
var twoSum = function (numbers, target) {
  const N = new Map();
  for (let i = 0; i < numbers.length; i++) {
    N.set(numbers[i], i);
    // stills work the arr is non-descreasing,
    //if at least two n equal, and n + n = target, the save index will be the last one.
    // while loop through the arr, we will access the first n with different index. => the condition satified => return result.
  }
  for (let i = 0; i < numbers.length; i++) {
    const findIndex = N.get(target - numbers[i]);
    if (findIndex && findIndex !== i) return [i + 1, findIndex + 1];
  }
};

//optimize space
var betterTwoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l !== r && target !== numbers[l] + numbers[r]) {
    if (numbers[r] + numbers[l] > target) {
      r--;
    }
    if (numbers[r] + numbers[l] < target) {
      l++;
    }
  }
  return [l + 1, r + 1];
};
