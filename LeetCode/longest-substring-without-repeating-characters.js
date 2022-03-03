/**
 * @param {string} s
 * @return {number}
 */

/*dumb solution: brute force => time limit O(n^3)
 var checkRepeat = function(str) {
    const charSet = new Set();
    for (let i = 0; i <str.length; i++) {
        if (charSet.has(str[i])) return false;
        charSet.add(str[i]);
    }
    return true;
}
var lengthOfLongestSubstring = function(s) {
  
    if (s.length < 2) return s.length;
    let maxLen = 1;
    
    for (let i = 0; i < s.length - 1 ; i++) 
        for (let j = i + maxLen; j < s.length; j++){
            if (j - i + 1 > maxLen && checkRepeat(s.substring(i, j + 1)) )
                maxLen = j - i + 1;
         
        } 
    return maxLen;
     
};
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  // a map to save char and its nearest index to current pointer
  const C = new Map();
  let maxLen = 0;

  for (let right = 0, left = 0; right < s.length; right++) {
    const findId = C.get(s[right]);
    if (findId >= 0) {
      left = Math.max(left, findId + 1);
    }
    C.set(s[right], right);
    maxLen = Math.max(maxLen, right + 1 - left);
    console.log({ char: s[right], findId, maxLen, left, right });
  }

  return maxLen;
};
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('tmmzuxt'));
console.log(lengthOfLongestSubstring('auaxt'));
