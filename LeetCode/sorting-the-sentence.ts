function sortSentence(s: string): string {
  const list = s.split(' ');
  const res: string[] = new Array(list.length);
  list.forEach((str) => {
    const num = Number(str.substring(str.length - 1)) - 1;
    res[num] = str.substring(0, str.length - 1);
  });
  return res.join(' ');
}

function shortSortSentence(s: string): string {
  let list = s.split(' ');
  list.sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]));
  return list.map((str) => str.substring(0, str.length - 1)).join(' ');
}
