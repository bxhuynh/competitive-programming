function longestCommonPrefix(strs: string[]): string {
  let res = '';
  for (let i = 0; i < strs[0].length; i++) {
    let checkChar = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].length <= i || strs[j][i] !== checkChar) return res;
    }
    res += checkChar;
  }
  return res;
}
