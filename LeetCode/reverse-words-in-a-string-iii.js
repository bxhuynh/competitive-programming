/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  const words = s.split(' ');
  let res = '';
  for (let k = 0; k < words.length; k++) {
    for (let i = words[k].length - 1; i >= 0; i--) res += words[k][i];
    if (k !== words.length - 1) res += ' ';
  }

  return res;
};
