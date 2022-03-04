/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length <= 1) return [strs];
  const strMap = new Map();

  const res = [];

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');
    let indices = strMap.get(sortedStr);
    if (indices) {
      strMap.set(sortedStr, `${indices},${i}`);
    } else strMap.set(sortedStr, String(i));
  }

  strMap.forEach((value) => {
    let group = value.split(',');
    for (let i = 0; i < group.length; i++) {
      group[i] = strs[group[i]];
    }
    res.push(group);
  });

  return res;
};
