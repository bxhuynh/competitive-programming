/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
    case 1: if the target found => return index
    case 2: if not, return index where it would be inserted
*/

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] > target) return 0;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) right = mid - 1;
    if (nums[mid] < target) left = mid + 1;

    if (left > right) return left;
  }
  return nums.length;
};
