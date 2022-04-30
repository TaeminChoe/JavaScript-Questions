"use strict";

/* 
  섹션 2. 기본문체풀이
  문제 7. 봉우리
  작성일 : 2022.04.30
*/

const isHighest = (array, i, j) => {
  const pos = array[i][j];
  if (j < array.length - 1 && pos < array[i][j + 1]) return false;
  if (j > 0 && pos < array[i][j - 1]) return false;
  if (i < array.length - 1 && pos < array[i + 1][j]) return false;
  if (i > 0 && pos < array[i - 1][j]) return false;
  return true;
};

const solution = (array) => {
  let answer = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (isHighest(array, i, j)) {
        answer++;
      }
    }
  }

  return answer;
};

const exam = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(exam));
