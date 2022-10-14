function areNumbersAscending(s: string): boolean {
  const words: string[] = s.split(' ');
  let max = -1;
  for (const word of words) {
    if (!isNaN(+word)) {
      if (+word <= max) return false;
      max = +word;
    }
  }
  return true;
}
