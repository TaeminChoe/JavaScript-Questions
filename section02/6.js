"use strict";

/* 
  섹션 2. 기본문체풀이
  문제 6. 격자판 최대합
  작성일 : 2022.04.30
*/

const solution = (array) => {
  let summation = 0;

  // 가로
  array.forEach((arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    if (summation < sum) summation = sum;
  });

  // 세로
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j][i];
    }
    if (summation < sum) summation = sum;
  }

  // 대각
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][i];
  }
  if (summation < sum) summation = sum;

  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[array.length - 1 - i][i];
  }
  if (summation < sum) summation = sum;

  return summation;
};

const exam = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(exam));
