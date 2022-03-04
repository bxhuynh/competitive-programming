/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  //a set to store two first number of triplets number1,number2
  const checked = new Set();
  // a map with key is num and value is the last index of this value in sorted array
  const maxIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const getValues = maxIndexMap.get(nums[i]);
    if (!getValues) maxIndexMap.set(String(nums[i]), [i]);
    else maxIndexMap.set(String(nums[i]), getValues.push(i));
  }

  for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++) {
      const indexArr = maxIndexMap.get(String(0 - nums[i] - nums[j]));
      if (indexArr && indexArr.length) {
        for (let k of indexArr) {
          if (k !== j && k !== i) {
            const tempArr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

            checked.add(tempArr[0] + ',' + tempArr[1]);
            break;
          }
        }
      }
    }

  const res = [];
  for (let item of checked) {
    const [number1, number2] = item.split(',');
    res.push([
      Number(number1),
      Number(number2),
      0 - Number(number1) - Number(number2),
    ]);
  }
  return res;
};

//optimization

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
    threeSum equal to 0 when
    [0,0,0]
    [-n, 0, n]
    [a, b, Abs(a + b)] // where a,b < 0
    [a, b, -(a+b)]      // where a, b > 0
*/

var betterThreeSum = function (nums) {
  if (nums.length < 3) return [];

  const res = new Set();

  //sort array
  nums.sort((a, b) => a - b);

  //create a set N of negative nums and set P of positive nums
  const pSet = new Set();
  const nSet = new Set();

  let nEnd = -1,
    pStart = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nSet.add(nums[i]);
      nEnd = i;
    }
    if (nums[i] > 0) {
      pSet.add(nums[i]);
      if (pStart === -1) pStart = i;
    }
  }

  //case1 [0,0,0] at least 3 zeros
  if ((pStart === -1 && nEnd === -1) || pStart - nEnd >= 4) {
    res.add('0,0,0');
  }

  //case 2 [-n, 0, n] at least 1 zero
  if (pStart - nEnd >= 2 && nEnd !== -1) {
    for (let x of nSet) {
      if (pSet.has(-x)) res.add(`${x},0,${-x}`);
    }
  }

  //case 3 [a, b, abs(a+b)]  where a,b < 0
  for (let i = 0; i <= nEnd - 1; i++)
    for (let j = i + 1; j <= nEnd; j++) {
      const target = -(nums[i] + nums[j]);
      if (pSet.has(target)) {
        res.add(`${nums[i]},${nums[j]},${target}`);
      }
    }

  //case 4 [a,b, -(a+b)] where a, b> 0
  for (let i = pStart; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++) {
      const target = -(nums[i] + nums[j]);
      if (nSet.has(target)) {
        res.add(`${nums[i]},${nums[j]},${target}`);
      }
    }

  return Array.from(res).map((item) => item.split(','));
};
