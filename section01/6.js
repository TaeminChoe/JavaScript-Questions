"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 6. 홀수
  작성일 : 2022.04.30
*/

const solution = (arr) => {
  let minimum = 101;
  const summation = arr
    .filter((v) => v % 2 === 1)
    .reduce((prev, next) => {
      if (minimum > next) minimum = next;
      return prev + next;
    }, 0);

  console.log(summation, minimum);
};

solution([12, 77, 38, 41, 53, 92, 85]);
