"use strict";

/* 
  섹션 4. 문자열 탐색
  문제 4. 졸업 선물 
  작성일 : 2022.05.05
*/

const bubbleSort = (arr) => {
  const copiedArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        copiedArr[i][0] + copiedArr[i][1] >
        copiedArr[j][0] + copiedArr[j][1]
      ) {
        const temp = copiedArr[i];
        copiedArr[i] = copiedArr[j];
        copiedArr[j] = temp;
      }
    }
  }
  return copiedArr;
};

const solution = (limit, arr) => {
  const sortedArr = bubbleSort(arr);
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = sortedArr[i][0] / 2 + sortedArr[i][1];
    let cnt = 1;

    for (let j = 0; j < sortedArr.length; j++) {
      if (i === j) continue;

      if (sum + sortedArr[j][0] + sortedArr[j][1] <= limit) {
        sum += sortedArr[j][0] + sortedArr[j][1];
        cnt++;
      }
    }
    if (answer < cnt) answer = cnt;
  }

  return answer;
};

const exam = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, exam));
