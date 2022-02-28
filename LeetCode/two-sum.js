/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const N = new Map();
  for (let i = 0; i < nums.length; i++) {
    N.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const findIndex = N.get(target - nums[i]);
    if (findIndex && findIndex !== i) return [i, findIndex];
  }
};
