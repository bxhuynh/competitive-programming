function romanToInt(s: string): number {
  const strLen = s.length;
  const subtraction = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let pos = 0;
  let res = 0;
  while (pos < strLen) {
    if (subtraction[s.substring(pos, pos + 2)]) {
      res += subtraction[s.substring(pos, pos + 2)];
      pos += 2;
    } else {
      res += symbolMap[s[pos]];
      pos++;
    }
  }

  return res;
}

function otherRomanToInt(s: string): number {
  const strLen = s.length;
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;

  for (let pos = 0; pos < strLen; pos++) {
    if (pos === strLen - 1) {
      res += symbolMap[s[pos]];
      return res;
    }
    if (symbolMap[s[pos]] >= symbolMap[s[pos + 1]]) {
      res += symbolMap[s[pos]];
    } else {
      res -= symbolMap[s[pos]];
    }
  }
  return res;
}
