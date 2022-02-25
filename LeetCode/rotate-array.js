/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//first solution: time O(n), space O(n)
var rotate = function (nums, k) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    res.push(nums[(nums.length - (k % nums.length) + i) % nums.length]);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
};

//space O(1)

var betterRotate = function (nums, k) {
  let len = nums.length;
  k = k % len;
  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};

var reverse = function (nums, start, end) {
  for (let i = start; i <= (start + end) / 2; i++) {
    let temp = nums[i];
    nums[i] = nums[end - i + start];
    nums[end - i + start] = temp;
  }
};
