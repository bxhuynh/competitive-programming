/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var slowCheckInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const sortedS1 = s1.split('').sort().join('');
  for (let i = 0; i <= s2.length - s1.length; i++) {
    let str = s2.substring(i, i + s1.length);
    str = str.split('').sort().join('');
    if (sortedS1 === str) return true;
  }
  return false;
};

var checkFrequency = (f1, f2) => {
  for (let i = 0; i < f1.length; i++) {
    if (f1[i] !== f2[i]) return false;
  }
  return true;
};

var getCode = (c) => {
  return c.charCodeAt(0) - 97;
};

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const s1Count = [],
    s2Count = [];

  for (let i = 0; i < 26; i++) {
    s1Count[i] = 0;
    s2Count[i] = 0;
  }

  for (let i = 0; i < s1.length; i++) {
    s1Count[getCode(s1[i])]++;
  }

  //init s2 frequency map
  let left = 0,
    right = s1.length - 1;
  for (let i = 0; i <= right; i++) {
    s2Count[getCode(s2[i])]++;
  }

  if (checkFrequency(s1Count, s2Count)) return true;
  if (s1.length === s2.length) return false;

  do {
    s2Count[getCode(s2[left])]--;
    left++;
    right++;
    if (right >= s2.length) break;
    s2Count[getCode(s2[right])]++;
    if (checkFrequency(s1Count, s2Count)) return true;
  } while (right < s2.length);
  return false;
};

console.log('RES: ', checkInclusion('pira', 'prilmtnzraxj'));
