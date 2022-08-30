function isValid(s: string): boolean {
  const bStack: string[] = [];
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') bStack.push(s[i]);
    switch (s[i]) {
      case ')':
        if (bStack.pop() !== '(') return false;
        break;
      case ']':
        if (bStack.pop() !== '[') return false;
        break;
      case '}':
        if (bStack.pop() !== '{') return false;
        break;
    }
  }

  if (bStack.length) return false;

  return true;
}

function otherIsValid(s: string): boolean {
  if (s.length % 2) return false;
  const bStack: string[] = [];

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === '(') bStack.push(')');
    else if (s[i] === '[') bStack.push(']');
    else if (s[i] === '{') bStack.push('}');
    else if (bStack.pop() !== s[i]) return false;
  }
  if (bStack.length) return false;
  return true;
}
