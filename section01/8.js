"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 8. 일곱 난쟁이
  작성일 : 2022.04.30
*/

const solution = (arr) => {
  const summation = arr.reduce((prev, curr) => prev + curr, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (summation - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
