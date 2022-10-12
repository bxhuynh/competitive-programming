function N3largestPerimeter(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);
  const numsLen = nums.length;
  let maxPerimeter = 0;

  for (let i = 0; i < numsLen - 2; i++)
    for (let j = i + 1; j < numsLen - 1; j++)
      for (let k = j + 1; k < numsLen; k++) {
        if (
          nums[i] + nums[j] <= nums[k] ||
          nums[i] + nums[k] < nums[j] ||
          nums[j] + nums[k] <= nums[i]
        ) {
          // invalid
          break;
        } else {
          maxPerimeter =
            maxPerimeter < nums[i] + nums[j] + nums[k]
              ? nums[i] + nums[j] + nums[k]
              : maxPerimeter;
        }
      }

  return maxPerimeter;
}

//------
function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);
  /* 
      let a b c = num[i] num[i + 1] num [i + 2]
      So a > b > c, also means a + b > c and a + c > b
      Then if b + c > a, then this is a valid and largest perimeter triangle
  */
  const numsLen = nums.length;
  for (let i = 0; i < numsLen - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2])
      return nums[i] + nums[i + 1] + nums[i + 2];
  }

  return 0;
}
