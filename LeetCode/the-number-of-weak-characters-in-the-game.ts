function numberOfWeakCharacters(properties: number[][]): number {
  /* solution: 1: brute force O(n^2z) */
  // let count = 0;
  // const sortedArr = properties.sort((a, b)=>  a[0] - b[0])
  // console.log(sortedArr)
  // for(let i = 0; i< sortedArr.length - 1; i++) {
  //     for (let j = i + 1; j < sortedArr.length; j++){
  //         if (sortedArr[j][1] > sortedArr[i][1] && sortedArr[j][0] > sortedArr[i][0]){
  //             count++;
  //             break;
  //         }
  //     }
  // }
  // return count;

  /* solution 2: grouping same atk characters, check on max def */
  let count: number = 0;

  const sortedChars: number[][] = properties.sort(
    (a, b) => b[0] - a[0] || a[1] - b[1]
  );
  let t = 0;
  for (let i: number = 0; i < sortedChars.length; i++) {
    if (sortedChars[i][1] < t) {
      count++;
      continue;
    }
    t = sortedChars[i][1];
    console.log(t);
  }

  return count;
}
