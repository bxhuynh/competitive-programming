/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    const midVal = nums[mid];
    if (midVal === target) return mid;
    if (midVal < target) left = mid + 1;
    if (midVal > target) right = mid - 1;
  }
  return -1;
};
